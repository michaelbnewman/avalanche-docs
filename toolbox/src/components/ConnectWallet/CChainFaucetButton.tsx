"use client";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../AlertDialog";
import { useWalletStore } from "../../stores/walletStore";

const LOW_BALANCE_THRESHOLD = 1;

interface CChainFaucetButtonProps {
  className?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  children?: React.ReactNode;
}

export const CChainFaucetButton = ({ className, buttonProps, children }: CChainFaucetButtonProps = {}) => {
  const { walletEVMAddress, isTestnet, cChainBalance, updateCChainBalance } =
    useWalletStore();

  const [isRequestingCTokens, setIsRequestingCTokens] = useState(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [alertDialogTitle, setAlertDialogTitle] = useState("Error");
  const [alertDialogMessage, setAlertDialogMessage] = useState("");
  const [isLoginError, setIsLoginError] = useState(false);
  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleCChainTokenRequest = async () => {
    if (isRequestingCTokens || !walletEVMAddress) return;
    setIsRequestingCTokens(true);

    try {
      const response = await fetch(
        `/api/cchain-faucet?address=${walletEVMAddress}`
      );
      const rawText = await response.text();
      let data;

      try {
        data = JSON.parse(rawText);
      } catch (parseError) {
        throw new Error(`Invalid response: ${rawText.substring(0, 100)}...`);
      }

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Please login first");
        }
        if (response.status === 429) {
          throw new Error(
            data.message || "Rate limit exceeded. Please try again later."
          );
        }
        throw new Error(
          data.message || `Error ${response.status}: Failed to get tokens`
        );
      }

      if (data.success) {
        console.log("C-Chain token request successful, txHash:", data.txHash);
        setTimeout(() => updateCChainBalance(), 3000);
      } else {
        throw new Error(data.message || "Failed to get tokens");
      }
    } catch (error) {
      console.error("C-Chain token request error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      if (errorMessage.includes("login") || errorMessage.includes("401")) {
        setAlertDialogTitle("Authentication Required");
        setAlertDialogMessage(
          "You need to be logged in to request free tokens from the C-Chain Faucet."
        );
        setIsLoginError(true);
        setIsAlertDialogOpen(true);
      } else {
        setAlertDialogTitle("Faucet Request Failed");
        setAlertDialogMessage(errorMessage);
        setIsLoginError(false);
        setIsAlertDialogOpen(true);
      }
    } finally {
      setIsRequestingCTokens(false);
    }
  };

  if (!isTestnet) {
    return null;
  }

  // Default styling
  const defaultClassName = `px-2 py-1 text-xs font-medium text-white rounded transition-colors ${
    cChainBalance < LOW_BALANCE_THRESHOLD
      ? "bg-blue-500 hover:bg-blue-600 shimmer"
      : "bg-zinc-600 hover:bg-zinc-700"
  } ${isRequestingCTokens ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <>
      <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertDialogMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex gap-2">
            {isLoginError ? (
              <>
                <AlertDialogAction
                  onClick={handleLogin}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  Login
                </AlertDialogAction>
                <AlertDialogAction className="bg-zinc-200 hover:bg-zinc-300 text-zinc-800">
                  Close
                </AlertDialogAction>
              </>
            ) : (
              <AlertDialogAction>OK</AlertDialogAction>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <button
        {...buttonProps}
        onClick={handleCChainTokenRequest}
        disabled={isRequestingCTokens}
        className={className || defaultClassName}
        title="Get free C-Chain AVAX"
      >
        {isRequestingCTokens ? "Requesting..." : (children || "Faucet")}
      </button>
    </>
  );
};

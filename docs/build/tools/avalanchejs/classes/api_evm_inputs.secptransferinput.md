[avalanche](../README.md) › [API-EVM-Inputs](../modules/api_evm_inputs.md) › [SECPTransferInput](api_evm_inputs.secptransferinput.md)

# Class: SECPTransferInput

## Hierarchy

  ↳ [AmountInput](api_evm_inputs.amountinput.md)

  ↳ **SECPTransferInput**

## Index

### Constructors

* [constructor](api_evm_inputs.secptransferinput.md#constructor)

### Properties

* [_codecID](api_evm_inputs.secptransferinput.md#protected-_codecid)
* [_typeID](api_evm_inputs.secptransferinput.md#protected-_typeid)
* [_typeName](api_evm_inputs.secptransferinput.md#protected-_typename)
* [amount](api_evm_inputs.secptransferinput.md#protected-amount)
* [amountValue](api_evm_inputs.secptransferinput.md#protected-amountvalue)
* [sigCount](api_evm_inputs.secptransferinput.md#protected-sigcount)
* [sigIdxs](api_evm_inputs.secptransferinput.md#protected-sigidxs)

### Methods

* [addSignatureIdx](api_evm_inputs.secptransferinput.md#addsignatureidx)
* [clone](api_evm_inputs.secptransferinput.md#clone)
* [create](api_evm_inputs.secptransferinput.md#create)
* [deserialize](api_evm_inputs.secptransferinput.md#deserialize)
* [fromBuffer](api_evm_inputs.secptransferinput.md#frombuffer)
* [getAmount](api_evm_inputs.secptransferinput.md#getamount)
* [getCodecID](api_evm_inputs.secptransferinput.md#getcodecid)
* [getCredentialID](api_evm_inputs.secptransferinput.md#getcredentialid)
* [getInputID](api_evm_inputs.secptransferinput.md#getinputid)
* [getSigIdxs](api_evm_inputs.secptransferinput.md#getsigidxs)
* [getTypeID](api_evm_inputs.secptransferinput.md#gettypeid)
* [getTypeName](api_evm_inputs.secptransferinput.md#gettypename)
* [sanitizeObject](api_evm_inputs.secptransferinput.md#sanitizeobject)
* [select](api_evm_inputs.secptransferinput.md#select)
* [serialize](api_evm_inputs.secptransferinput.md#serialize)
* [toBuffer](api_evm_inputs.secptransferinput.md#tobuffer)
* [toString](api_evm_inputs.secptransferinput.md#tostring)
* [comparator](api_evm_inputs.secptransferinput.md#static-comparator)

## Constructors

###  constructor

\+ **new SECPTransferInput**(`amount`: BN): *[SECPTransferInput](api_evm_inputs.secptransferinput.md)*

*Inherited from [StandardAmountInput](common_inputs.standardamountinput.md).[constructor](common_inputs.standardamountinput.md#constructor)*

*Defined in [src/common/input.ts:378](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L378)*

An [AmountInput](api_evm_inputs.amountinput.md) class which issues a payment on an assetID.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`amount` | BN | undefined | A [BN](https://github.com/indutny/bn.js/) representing the amount in the input  |

**Returns:** *[SECPTransferInput](api_evm_inputs.secptransferinput.md)*

## Properties

### `Protected` _codecID

• **_codecID**: *number* = undefined

*Inherited from [SigIdx](common_signature.sigidx.md).[_codecID](common_signature.sigidx.md#protected-_codecid)*

*Defined in [src/utils/serialization.ts:51](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/serialization.ts#L51)*

___

### `Protected` _typeID

• **_typeID**: *number* = EVMConstants.SECPINPUTID

*Overrides [AmountInput](api_evm_inputs.amountinput.md).[_typeID](api_evm_inputs.amountinput.md#protected-_typeid)*

*Defined in [src/apis/evm/inputs.ts:102](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/evm/inputs.ts#L102)*

___

### `Protected` _typeName

• **_typeName**: *string* = "SECPTransferInput"

*Overrides [AmountInput](api_evm_inputs.amountinput.md).[_typeName](api_evm_inputs.amountinput.md#protected-_typename)*

*Defined in [src/apis/evm/inputs.ts:101](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/evm/inputs.ts#L101)*

___

### `Protected` amount

• **amount**: *Buffer* = Buffer.alloc(8)

*Inherited from [StandardAmountInput](common_inputs.standardamountinput.md).[amount](common_inputs.standardamountinput.md#protected-amount)*

*Defined in [src/common/input.ts:352](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L352)*

___

### `Protected` amountValue

• **amountValue**: *BN* = new BN(0)

*Inherited from [StandardAmountInput](common_inputs.standardamountinput.md).[amountValue](common_inputs.standardamountinput.md#protected-amountvalue)*

*Defined in [src/common/input.ts:353](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L353)*

___

### `Protected` sigCount

• **sigCount**: *Buffer* = Buffer.alloc(4)

*Inherited from [Input](common_inputs.input.md).[sigCount](common_inputs.input.md#protected-sigcount)*

*Defined in [src/common/input.ts:42](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L42)*

___

### `Protected` sigIdxs

• **sigIdxs**: *[SigIdx](common_signature.sigidx.md)[]* = []

*Inherited from [Input](common_inputs.input.md).[sigIdxs](common_inputs.input.md#protected-sigidxs)*

*Defined in [src/common/input.ts:43](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L43)*

## Methods

###  addSignatureIdx

▸ **addSignatureIdx**(`addressIdx`: number, `address`: Buffer): *void*

*Inherited from [Input](common_inputs.input.md).[addSignatureIdx](common_inputs.input.md#addsignatureidx)*

*Defined in [src/common/input.ts:82](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L82)*

Creates and adds a [SigIdx](common_signature.sigidx.md) to the [Input](common_inputs.input.md).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`addressIdx` | number | The index of the address to reference in the signatures |
`address` | Buffer | The address of the source of the signature  |

**Returns:** *void*

___

###  clone

▸ **clone**(): *this*

*Overrides [Input](common_inputs.input.md).[clone](common_inputs.input.md#abstract-clone)*

*Defined in [src/apis/evm/inputs.ts:119](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/evm/inputs.ts#L119)*

**Returns:** *this*

___

###  create

▸ **create**(...`args`: any[]): *this*

*Overrides [Input](common_inputs.input.md).[create](common_inputs.input.md#abstract-create)*

*Defined in [src/apis/evm/inputs.ts:115](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/evm/inputs.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  deserialize

▸ **deserialize**(`fields`: object, `encoding`: [SerializedEncoding](../modules/src_utils.md#serializedencoding)): *void*

*Inherited from [StandardAmountInput](common_inputs.standardamountinput.md).[deserialize](common_inputs.standardamountinput.md#deserialize)*

*Overrides [Input](common_inputs.input.md).[deserialize](common_inputs.input.md#deserialize)*

*Defined in [src/common/input.ts:340](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L340)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`fields` | object | - |
`encoding` | [SerializedEncoding](../modules/src_utils.md#serializedencoding) | "hex" |

**Returns:** *void*

___

###  fromBuffer

▸ **fromBuffer**(`bytes`: Buffer, `offset`: number): *number*

*Inherited from [StandardAmountInput](common_inputs.standardamountinput.md).[fromBuffer](common_inputs.standardamountinput.md#frombuffer)*

*Overrides [Input](common_inputs.input.md).[fromBuffer](common_inputs.input.md#frombuffer)*

*Defined in [src/common/input.ts:363](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L363)*

Popuates the instance from a [Buffer](https://github.com/feross/buffer) representing the [AmountInput](api_evm_inputs.amountinput.md) and returns the size of the input.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`bytes` | Buffer | - |
`offset` | number | 0 |

**Returns:** *number*

___

###  getAmount

▸ **getAmount**(): *BN*

*Inherited from [StandardAmountInput](common_inputs.standardamountinput.md).[getAmount](common_inputs.standardamountinput.md#getamount)*

*Defined in [src/common/input.ts:358](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L358)*

Returns the amount as a [BN](https://github.com/indutny/bn.js/).

**Returns:** *BN*

___

###  getCodecID

▸ **getCodecID**(): *number*

*Inherited from [SigIdx](common_signature.sigidx.md).[getCodecID](common_signature.sigidx.md#getcodecid)*

*Defined in [src/utils/serialization.ts:70](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/serialization.ts#L70)*

Used in serialization. Optional. TypeID is a number for the typeID of object being output.

**Returns:** *number*

___

###  getCredentialID

▸ **getCredentialID**(): *number*

*Overrides [Input](common_inputs.input.md).[getCredentialID](common_inputs.input.md#abstract-getcredentialid)*

*Defined in [src/apis/evm/inputs.ts:113](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/evm/inputs.ts#L113)*

**Returns:** *number*

___

###  getInputID

▸ **getInputID**(): *number*

*Overrides [Input](common_inputs.input.md).[getInputID](common_inputs.input.md#abstract-getinputid)*

*Defined in [src/apis/evm/inputs.ts:109](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/evm/inputs.ts#L109)*

Returns the inputID for this input

**Returns:** *number*

___

###  getSigIdxs

▸ **getSigIdxs**(): *[SigIdx](common_signature.sigidx.md)[]*

*Inherited from [Input](common_inputs.input.md).[getSigIdxs](common_inputs.input.md#getsigidxs)*

*Defined in [src/common/input.ts:72](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L72)*

Returns the array of [SigIdx](common_signature.sigidx.md) for this [Input](common_inputs.input.md)

**Returns:** *[SigIdx](common_signature.sigidx.md)[]*

___

###  getTypeID

▸ **getTypeID**(): *number*

*Inherited from [SigIdx](common_signature.sigidx.md).[getTypeID](common_signature.sigidx.md#gettypeid)*

*Defined in [src/utils/serialization.ts:63](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/serialization.ts#L63)*

Used in serialization. Optional. TypeID is a number for the typeID of object being output.

**Returns:** *number*

___

###  getTypeName

▸ **getTypeName**(): *string*

*Inherited from [SigIdx](common_signature.sigidx.md).[getTypeName](common_signature.sigidx.md#gettypename)*

*Defined in [src/utils/serialization.ts:56](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/serialization.ts#L56)*

Used in serialization. TypeName is a string name for the type of object being output.

**Returns:** *string*

___

###  sanitizeObject

▸ **sanitizeObject**(`obj`: object): *object*

*Inherited from [SigIdx](common_signature.sigidx.md).[sanitizeObject](common_signature.sigidx.md#sanitizeobject)*

*Defined in [src/utils/serialization.ts:77](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/serialization.ts#L77)*

Sanitize to prevent cross scripting attacks.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | object |

**Returns:** *object*

___

###  select

▸ **select**(`id`: number, ...`args`: any[]): *[Input](common_inputs.input.md)*

*Inherited from [AmountInput](api_evm_inputs.amountinput.md).[select](api_evm_inputs.amountinput.md#select)*

*Overrides [Input](common_inputs.input.md).[select](common_inputs.input.md#abstract-select)*

*Defined in [src/apis/evm/inputs.ts:95](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/evm/inputs.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`...args` | any[] |

**Returns:** *[Input](common_inputs.input.md)*

___

###  serialize

▸ **serialize**(`encoding`: [SerializedEncoding](../modules/src_utils.md#serializedencoding)): *object*

*Inherited from [StandardAmountInput](common_inputs.standardamountinput.md).[serialize](common_inputs.standardamountinput.md#serialize)*

*Overrides [Input](common_inputs.input.md).[serialize](common_inputs.input.md#serialize)*

*Defined in [src/common/input.ts:327](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L327)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`encoding` | [SerializedEncoding](../modules/src_utils.md#serializedencoding) | "hex" |

**Returns:** *object*

___

###  toBuffer

▸ **toBuffer**(): *Buffer*

*Inherited from [StandardAmountInput](common_inputs.standardamountinput.md).[toBuffer](common_inputs.standardamountinput.md#tobuffer)*

*Overrides [Input](common_inputs.input.md).[toBuffer](common_inputs.input.md#tobuffer)*

*Defined in [src/common/input.ts:373](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L373)*

Returns the buffer representing the [AmountInput](api_evm_inputs.amountinput.md) instance.

**Returns:** *Buffer*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Input](common_inputs.input.md).[toString](common_inputs.input.md#tostring)*

*Defined in [src/common/input.ts:122](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L122)*

Returns a base-58 representation of the [Input](common_inputs.input.md).

**Returns:** *string*

___

### `Static` comparator

▸ **comparator**(): *function*

*Inherited from [Input](common_inputs.input.md).[comparator](common_inputs.input.md#static-comparator)*

*Defined in [src/common/input.ts:45](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/input.ts#L45)*

**Returns:** *function*

▸ (`a`: [Input](common_inputs.input.md), `b`: [Input](common_inputs.input.md)): *1 | -1 | 0*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Input](common_inputs.input.md) |
`b` | [Input](common_inputs.input.md) |

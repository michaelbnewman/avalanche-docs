[avalanche](../README.md) › [src/utils](../modules/src_utils.md) › [ChecksumError](src_utils.checksumerror.md)

# Class: ChecksumError

## Hierarchy

  ↳ [AvalancheError](src_utils.avalancheerror.md)

  ↳ **ChecksumError**

## Index

### Constructors

* [constructor](src_utils.checksumerror.md#constructor)

### Properties

* [errorCode](src_utils.checksumerror.md#errorcode)
* [message](src_utils.checksumerror.md#message)
* [name](src_utils.checksumerror.md#name)
* [stack](src_utils.checksumerror.md#optional-stack)

### Methods

* [getCode](src_utils.checksumerror.md#getcode)

## Constructors

###  constructor

\+ **new ChecksumError**(`m`: string): *[ChecksumError](src_utils.checksumerror.md)*

*Overrides [AvalancheError](src_utils.avalancheerror.md).[constructor](src_utils.avalancheerror.md#constructor)*

*Defined in [src/utils/errors.ts:155](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/errors.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | string |

**Returns:** *[ChecksumError](src_utils.checksumerror.md)*

## Properties

###  errorCode

• **errorCode**: *string*

*Inherited from [AvalancheError](src_utils.avalancheerror.md).[errorCode](src_utils.avalancheerror.md#errorcode)*

*Defined in [src/utils/errors.ts:45](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/errors.ts#L45)*

___

###  message

• **message**: *string*

*Inherited from [AvalancheError](src_utils.avalancheerror.md).[message](src_utils.avalancheerror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1023

___

###  name

• **name**: *string*

*Inherited from [AvalancheError](src_utils.avalancheerror.md).[name](src_utils.avalancheerror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1022

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [AvalancheError](src_utils.avalancheerror.md).[stack](src_utils.avalancheerror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1024

## Methods

###  getCode

▸ **getCode**(): *string*

*Inherited from [AvalancheError](src_utils.avalancheerror.md).[getCode](src_utils.avalancheerror.md#getcode)*

*Defined in [src/utils/errors.ts:52](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/errors.ts#L52)*

**Returns:** *string*

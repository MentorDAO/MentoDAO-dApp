/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Recursion,
  RecursionInterface,
} from "../../../contracts/abstract/Recursion";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    name: "ParentAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    name: "ParentRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    name: "isParent",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    name: "isParentRec",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061026e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630814ff131461003b5780639b33893f14610062575b600080fd5b61004e6100493660046101a9565b610075565b604051901515815260200160405180910390f35b61004e6100703660046101a9565b6100dc565b6000805b6001548110156100d357826001600160a01b0316600182815481106100a0576100a06101d9565b6000918252602090912001546001600160a01b0316036100c35750600192915050565b6100cc816101ef565b9050610079565b50600092915050565b60006100e782610075565b156100f457506001919050565b60005b6001548110156100d35760018181548110610114576101146101d9565b600091825260209091200154604051630814ff1360e01b81526001600160a01b03858116600483015290911690630814ff1390602401602060405180830381865afa158015610167573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018b9190610216565b156101995750600192915050565b6101a2816101ef565b90506100f7565b6000602082840312156101bb57600080fd5b81356001600160a01b03811681146101d257600080fd5b9392505050565b634e487b7160e01b600052603260045260246000fd5b60006001820161020f57634e487b7160e01b600052601160045260246000fd5b5060010190565b60006020828403121561022857600080fd5b815180151581146101d257600080fdfea264697066735822122049e0faef83675fb3838f7ffbc18f666df749e7ca8d3e3e169816023ffbcaac0e64736f6c634300080e0033";

type RecursionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RecursionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Recursion__factory extends ContractFactory {
  constructor(...args: RecursionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Recursion> {
    return super.deploy(overrides || {}) as Promise<Recursion>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Recursion {
    return super.attach(address) as Recursion;
  }
  override connect(signer: Signer): Recursion__factory {
    return super.connect(signer) as Recursion__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RecursionInterface {
    return new utils.Interface(_abi) as RecursionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Recursion {
    return new Contract(address, _abi, signerOrProvider) as Recursion;
  }
}

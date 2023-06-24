/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MicroDAOExt,
  MicroDAOExtInterface,
} from "../../../contracts/extensions/MicroDAOExt";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "taskAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "applyToTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "taskAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "deliverTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRepoAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hub",
    outputs: [
      {
        internalType: "contract IHub",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506106bf806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630da1ab7714610051578063365a86fc146100665780638ca037a81461008a5780639e92fd8e1461009d575b600080fd5b61006461005f366004610494565b6100a5565b005b61006e610223565b6040516001600160a01b03909116815260200160405180910390f35b610064610098366004610494565b610232565b61006e610331565b60405163dae4a17f60e01b8152309063dae4a17f906100c8903390600401610558565b602060405180830381865afa1580156100e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101099190610589565b6101475760405162461bcd60e51b815260206004820152600a60248201526941444d494e5f4f4e4c5960b01b60448201526064015b60405180910390fd5b6000610151610395565b60405163724686d760e01b81523060048201526001600160a01b03919091169063724686d790602401602060405180830381865afa158015610197573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bb91906105b2565b6040516323fba0b960e11b81529091506001600160a01b038416906347f74172906101ec9084908690600401610618565b600060405180830381600087803b15801561020657600080fd5b505af115801561021a573d6000803e3d6000fd5b50505050505050565b600061022d61039f565b905090565b60405163dae4a17f60e01b8152309063dae4a17f90610255903390600401610558565b602060405180830381865afa158015610272573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102969190610589565b6102cf5760405162461bcd60e51b815260206004820152600a60248201526941444d494e5f4f4e4c5960b01b604482015260640161013e565b604051630c8b956560e41b81526001600160a01b0383169063c8b95650906102fb908490600401610659565b600060405180830381600087803b15801561031557600080fd5b505af1158015610329573d6000803e3d6000fd5b505050505050565b6000306001600160a01b0316639e92fd8e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610371573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022d919061066c565b600061022d6103df565b6000306001600160a01b0316632db9a5126040518163ffffffff1660e01b8152600401602060405180830381865afa158015610371573d6000803e3d6000fd5b60006103e961045c565b6001600160a01b031663e2b49cb96103ff61039f565b604080516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152600360448201526214d09560ea1b6064820152608401602060405180830381865afa158015610371573d6000803e3d6000fd5b600061022d610331565b6001600160a01b038116811461047b57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156104a757600080fd5b82356104b281610466565b9150602083013567ffffffffffffffff808211156104cf57600080fd5b818501915085601f8301126104e357600080fd5b8135818111156104f5576104f561047e565b604051601f8201601f19908116603f0116810190838211818310171561051d5761051d61047e565b8160405282815288602084870101111561053657600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6001600160a01b039190911681526040602082018190526005908201526430b236b4b760d91b606082015260800190565b60006020828403121561059b57600080fd5b815180151581146105ab57600080fd5b9392505050565b6000602082840312156105c457600080fd5b5051919050565b6000815180845260005b818110156105f1576020818501810151868301820152016105d5565b81811115610603576000602083870101525b50601f01601f19169290920160200192915050565b606081526009606082015268185c1c1b1a58d85b9d60ba1b608082015282602082015260a06040820152600061065160a08301846105cb565b949350505050565b6020815260006105ab60208301846105cb565b60006020828403121561067e57600080fd5b81516105ab8161046656fea2646970667358221220be452a279b40112256b34b2688c3e26e74e59c81d3caf6ee442748f9d6685aa364736f6c634300080e0033";

type MicroDAOExtConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MicroDAOExtConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MicroDAOExt__factory extends ContractFactory {
  constructor(...args: MicroDAOExtConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MicroDAOExt> {
    return super.deploy(overrides || {}) as Promise<MicroDAOExt>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MicroDAOExt {
    return super.attach(address) as MicroDAOExt;
  }
  override connect(signer: Signer): MicroDAOExt__factory {
    return super.connect(signer) as MicroDAOExt__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MicroDAOExtInterface {
    return new utils.Interface(_abi) as MicroDAOExtInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MicroDAOExt {
    return new Contract(address, _abi, signerOrProvider) as MicroDAOExt;
  }
}

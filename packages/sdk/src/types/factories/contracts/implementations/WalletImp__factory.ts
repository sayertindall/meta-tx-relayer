/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WalletImp,
  WalletImpInterface,
} from "../../../contracts/implementations/WalletImp";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_result",
        type: "bytes",
      },
    ],
    name: "Receipt",
    type: "event",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b01806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638129fc1c14610030575b600080fd5b61003861003a565b005b600060019054906101000a900460ff166100625760008054906101000a900460ff161561006b565b61006a610306565b5b6100aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100a190610752565b60405180910390fd5b60008060019054906101000a900460ff1615905080156100fa576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b60008060003681019061010d91906104b0565b91509150606060008060008060008680602001905181019061012f919061050c565b809750819850829950839d50849a50859b50869c505050505050505080421061018d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018490610792565b60405180910390fd5b813a106101cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c690610772565b60405180910390fd5b6101d886610317565b610217576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020e90610732565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16610248615208456102429190610840565b87610355565b8a60405161025691906106eb565b60006040518083038160008787f1925050503d8060008114610294576040519150601f19603f3d011682016040523d82523d6000602084013e610299565b606091505b5091509150897fabdbfcc7146651bbffa2ea243ae4e4ae90d675847f448cf5494228319119d45b83836040516102d0929190610702565b60405180910390a25050505050505050505080156103035760008060016101000a81548160ff0219169083151502179055505b50565b60006103113061036e565b15905090565b6000808251141561032b5760019050610350565b60405160208160148551038560340160148701515afa60008251116000821116925050505b919050565b60008183106103645781610366565b825b905092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006103a461039f846107d7565b6107b2565b9050828152602081018484840111156103c0576103bf61099c565b5b6103cb8482856108c6565b509392505050565b60006103e66103e1846107d7565b6107b2565b9050828152602081018484840111156104025761040161099c565b5b61040d8482856108d5565b509392505050565b60008151905061042481610a86565b92915050565b60008135905061043981610a9d565b92915050565b600082601f83011261045457610453610997565b5b8135610464848260208601610391565b91505092915050565b600082601f83011261048257610481610997565b5b81516104928482602086016103d3565b91505092915050565b6000815190506104aa81610ab4565b92915050565b600080604083850312156104c7576104c66109a6565b5b60006104d58582860161042a565b925050602083013567ffffffffffffffff8111156104f6576104f56109a1565b5b6105028582860161043f565b9150509250929050565b600080600080600080600060e0888a03121561052b5761052a6109a6565b5b600088015167ffffffffffffffff811115610549576105486109a1565b5b6105558a828b0161046d565b97505060206105668a828b01610415565b96505060406105778a828b0161049b565b955050606088015167ffffffffffffffff811115610598576105976109a1565b5b6105a48a828b0161046d565b94505060806105b58a828b0161049b565b93505060a06105c68a828b0161049b565b92505060c06105d78a828b0161049b565b91505092959891949750929550565b6105ef81610886565b82525050565b600061060082610808565b61060a8185610813565b935061061a8185602086016108d5565b610623816109ab565b840191505092915050565b600061063982610808565b6106438185610824565b93506106538185602086016108d5565b80840191505092915050565b600061066c601b8361082f565b9150610677826109bc565b602082019050919050565b600061068f602e8361082f565b915061069a826109e5565b604082019050919050565b60006106b260128361082f565b91506106bd82610a34565b602082019050919050565b60006106d560118361082f565b91506106e082610a5d565b602082019050919050565b60006106f7828461062e565b915081905092915050565b600060408201905061071760008301856105e6565b818103602083015261072981846105f5565b90509392505050565b6000602082019050818103600083015261074b8161065f565b9050919050565b6000602082019050818103600083015261076b81610682565b9050919050565b6000602082019050818103600083015261078b816106a5565b9050919050565b600060208201905081810360008301526107ab816106c8565b9050919050565b60006107bc6107cd565b90506107c88282610908565b919050565b6000604051905090565b600067ffffffffffffffff8211156107f2576107f1610968565b5b6107fb826109ab565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061084b826108bc565b9150610856836108bc565b92508282101561086957610868610939565b5b828203905092915050565b600061087f8261089c565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156108f35780820151818401526020810190506108d8565b83811115610902576000848401525b50505050565b610911826109ab565b810181811067ffffffffffffffff821117156109305761092f610968565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f446570656e64656e6379206973206e6f74207361746973666965640000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f47617320707269636520746f6f20686967680000000000000000000000000000600082015250565b7f496e74656e742069732065787069726564000000000000000000000000000000600082015250565b610a8f81610874565b8114610a9a57600080fd5b50565b610aa681610892565b8114610ab157600080fd5b50565b610abd816108bc565b8114610ac857600080fd5b5056fea264697066735822122078bc63a3f5018729ba32e18772ee8422a15d43418ab84ad6fa53c6f25331f36764736f6c63430008060033";

type WalletImpConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WalletImpConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WalletImp__factory extends ContractFactory {
  constructor(...args: WalletImpConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WalletImp> {
    return super.deploy(overrides || {}) as Promise<WalletImp>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WalletImp {
    return super.attach(address) as WalletImp;
  }
  override connect(signer: Signer): WalletImp__factory {
    return super.connect(signer) as WalletImp__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletImpInterface {
    return new utils.Interface(_abi) as WalletImpInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WalletImp {
    return new Contract(address, _abi, signerOrProvider) as WalletImp;
  }
}
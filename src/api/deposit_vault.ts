import { web3, contractInfo } from "./util";
import { Contract } from "web3-eth-contract";
import { ABI_DEPOSIT_VAULT } from "./constant";

const DEPOSIT_VAULT = contractInfo(ABI_DEPOSIT_VAULT);

let DepositVault: any = function(): Contract {
    return new web3.eth.Contract(DEPOSIT_VAULT["abi"], DEPOSIT_VAULT["address"]);
}

const call = async function(): Promise<string> {
    return await DepositVault.methods.call().owner();
}

export {
    call
}
/**
 * author: ffakira
 * date: 25 Mar 2021
 * Utils file, for making people's life easier.
 * With great power comes great responsibility!
 * ___( ')> quack?
 * \____/
 * Have a documentation!
 */

import Web3 from 'web3';
import utils, {Unit} from 'web3-utils';

/**
 * Either will select the given provider from the
 * wallet provider, or it will use Ganache port.
 */
export const web3: Web3 = new Web3(Web3.givenProvider || "http://locahost:7545");
declare let window: any;

let requestWallet = async function (): Promise<any> {
    if (window.ethereum) {
        return await window.ethereum.request({method: 'eth_requestAccounts'});
    } else {
        return new Error("Web3 provider have not been detected.");
    }
}

/**
 *
 * @param acc string
 * @param unit
 */
let getBalance = async function (acc: string, unit: Unit | undefined = 'ether'): Promise<string> {
    if (acc) return utils.fromWei((await web3.eth.getBalance(acc)), unit);
    return "0";
}

/**
 * Returns trimmed address in a format of '0x0000...0000'
 * If no web3 provided, it will return JSX.Element instead
 * @param addr string
 * @param opt boolean true = display button | false = don't display
 * @returns string | JSX.Element
 */
let trimAddress = function (addr: string, opt: boolean = false): string | JSX.Element {
    if (addr) {
        return (
            <span className="navbar-text text-dark">
                `${addr.substr(0, 6)}...${addr.substr(addr.length - 4, addr.length)}`
            </span>
        );
    }

    if (opt) {
        return (
            <span className="navbar-text text-dark">
            <button className="btn btn-sm btn-primary" onClick={requestWallet}>
                <img src="../assets/img/metamask.png" alt=""/>
                Login On Metamask
            </button>
        </span>
        );
    }
    return (
        <span className="navbar-text text-dark">
            No address found
        </span>
    );
}

/**
 * Get a promise of accounts from given provider
 * @returns Promise<string[]>
 */
let getAccounts = async function (): Promise<string[]> {
    return await web3.eth.getAccounts();
}

/**
 *
 * @param val number | string
 * @param digit number default val is 4
 * @returns string
 */
let roundNearest = function (val: number | string, digit: number = 4): string {
    return Number(val).toLocaleString(undefined, {maximumFractionDigits: digit});
}

/**
 *
 * @param metadata
 * @param network
 * @returns object
 */
let contractInfo = function (metadata: any, network: string = "5777") {
    return {
        abi: metadata["abi"],
        address: metadata["networks"][network]["address"]
    }
}

export {
    getAccounts,
    requestWallet,
    getBalance,
    trimAddress,
    roundNearest,
    contractInfo
}
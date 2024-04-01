import { ethers } from 'ethers';
import TokenAbi from "./ABIS/tokenAbi.json";
import AirDropAbi from "./ABIS/airDrop.json";
import BurnDropAbi from "./ABIS/burnDrop.json";
import LPAbi from "./ABIS/LP.json";

// declare global {
//     interface Window { ethereum: any; }
// }

export const callTokenContract = async () => {
    let ethereum = (window as any).ethereum;
    await ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const abi = TokenAbi;
    const TOKEN = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADRESS as string;
    const myBorrowerOperationsContract:any = new ethers.Contract(TOKEN, abi, signer);
    const contractWithSigner:any = myBorrowerOperationsContract.connect(signer);
    return { contractWithSigner, TOKEN, abi };
};

export const callAirDropContract = async () => {
    let ethereum = (window as any).ethereum;
    await ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const abi = AirDropAbi;
    const AIRDROP = process.env.NEXT_PUBLIC_AIRDROP_CONTRACT_ADRESS as string;
    const myTroveManagerContract:any = new ethers.Contract(AIRDROP, abi, signer);
    const contractWithSigner:any = myTroveManagerContract.connect(signer);
    return { contractWithSigner, AIRDROP, abi };
};

export const callBurnDropContract = async () => {
    let ethereum = (window as any).ethereum;
    await ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const abi = BurnDropAbi;
    const BURNDROP = process.env.NEXT_PUBLIC_BURNDROP_CONTRACT_ADRESS as string;
    const myTroveManagerContract:any = new ethers.Contract(BURNDROP, abi, signer);
    const contractWithSigner:any = myTroveManagerContract.connect(signer);
    return { contractWithSigner, BURNDROP, abi };
};

export const callLPContract = async () => {
    let ethereum = (window as any).ethereum;
    await ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const abi = LPAbi;
    const LP = process.env.NEXT_PUBLIC_LP_CONTRACT_ADRESS as string;
    const myTroveManagerContract:any = new ethers.Contract(LP, abi, signer);
    const contractWithSigner:any = myTroveManagerContract.connect(signer);
    return { contractWithSigner, LP, abi };
};
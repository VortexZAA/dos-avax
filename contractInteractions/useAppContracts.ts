import { callTokenContract, callAirDropContract, callBurnDropContract, callLPContract} from "./ethereumContracts";

//AirDrop functions
export const callAirDrop = async (amount:number, merkleProof:string[]) => {
    try {
        const claim = await (await callAirDropContract()).contractWithSigner.claim(amount, merkleProof);
        return await claim;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const callClaimedDos = async (address:string) => {
    try {
        const claimedDos = await (await callAirDropContract()).contractWithSigner.claimed(address);
        return await claimedDos;
    } catch (error) {
        console.log(error);
        return false;
    }
};

//BurnDrop functions
export const callBurnLp = async (amount:number) => {
    try {
        const burn = await (await callBurnDropContract()).contractWithSigner.burnLPTokenForDos(amount);
        return await burn;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const callClaim = async () => {
    try {
        const claim = await (await callBurnDropContract()).contractWithSigner.claim();
        return await claim;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const callClaimableTime = async () => {
    try {
        const claimableTime = await (await callBurnDropContract()).contractWithSigner.claimableTime();
        return await claimableTime;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const callClaimed = async (address:string) => {
    try {
        const claimed = await (await callBurnDropContract()).contractWithSigner.claimed(address);
        return await claimed;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const callBurned = async (address:string) => {
    try {
        const burned = await (await callBurnDropContract()).contractWithSigner.burned(address);
        return await burned;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const callTotalBurned = async () => {
    try {
        const totalBurned = await (await callBurnDropContract()).contractWithSigner.totalBurned();
        return await totalBurned;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const callTotalClaimed = async () => {
    try {
        const totalClaimed = await (await callBurnDropContract()).contractWithSigner.totalClaimed();
        return await totalClaimed;
    } catch (error) {
        console.log(error);
        return false;
    }
}

//LP functions
export const callApprove = async (amount:number) => {
    try {
        const spender = process.env.NEXT_PUBLIC_BURNDROP_CONTRACT_ADRESS as string;
        const approveForAll = await (await callLPContract()).contractWithSigner.approveForAll(spender, true);
        return await approveForAll;
        /* const approve = await (await callLPContract()).contractWithSigner.approve(spender, amount);
        return await approve; */
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const callBurn = async (amount:number) => {
    try {
        const burn = await (await callLPContract()).contractWithSigner.burn(amount);
        return await burn;
    } catch (error) {
        console.log(error);
        return false;
    }
}
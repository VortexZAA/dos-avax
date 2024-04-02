import { Data } from "@/data/treeProofs";

export default function getProofData(address: string) {
  try {
    const get = Data.find((v: any) => {
      if (v.value[0]?.toLowerCase() === address?.toLowerCase()) {
        return true;
      }
    });
    return get;
  } catch (error) {
    console.log(error);
    return false;
  }
}

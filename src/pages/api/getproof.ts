import { Data } from "@/data/treeProofs";
import getProofData from "@/services/getProof";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export default async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get("address") as string;
  try {
    const get = address && (await getProofData(address));
    const getProof = get && {
      address: get?.value[0],
      amount: get?.value[1],
      proof: get?.proof,
    };

    if (getProof && address) {
      return NextResponse.json({
        address: address || "",
        reponse: getProof,
        msg: "success",
      });
    } else {
      return NextResponse.json({
        address: address || "",
        status: "error",
        msg: "There was a problem",
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      address: address || "",
      status: "error",
      msg: "There was a problem",
      error: error.message,
    });
  }
}

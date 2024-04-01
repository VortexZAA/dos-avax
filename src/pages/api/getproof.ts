import { Data } from "@/data/treeProofs";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export default async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get("address");
  try {
    const get = Data.find((v: any) => {
      if (v.value[0]?.toLowerCase() === address?.toLowerCase()) {
        return true;
      }
    });
    const getProof = get && {
      address: get.value[0],
      amount: get.value[1],

      proof: get.proof,
    };

    if (getProof) {
      return NextResponse.json({
        address: address || "",
        reponse: getProof,
        msg: "success",
      });
    } else {
      return NextResponse.json({
        address: address || "",
        status: "error",
        msg: "There was a problem2",
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

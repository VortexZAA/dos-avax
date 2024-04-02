import pb from "@/lib/pocketbase";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export default async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get("address") as string;
  try {
    let error:any = ""
    const get = await pb
      .collection("airdrop")
      .getFirstListItem(`address~"${address}"`)
      .then((res) => res)
      .catch((err) => {
        error = err;
        return false;
      });
    const getProof = get;
    if (getProof && address) {
      return NextResponse.json(
        {
          address: address || "",
          reponse: getProof,
          msg: "success",
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          address: address || "",
          status: "error",
          msg: "There was a problem",
          error: error?.message || "Not Found",
        },
        {
          status: 404,
        }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        address: address || "",
        status: "error",
        msg: "There was a problem",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

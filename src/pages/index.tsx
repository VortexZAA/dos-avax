import Image from "next/image";
import Link from "next/link";
import {
  callAirDropClaim,
  callApprove,
  callBurn,
  callClaim,
  callClaimableTime,
} from "@/contractInteractions/useAppContracts";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Loader from "@/components/Loader";
import pb from "@/lib/pocketbase";

export default function Home() {
  const [amount, setAmount] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [expTime, setExpTime] = useState<number>(0);
  //connect metamask function
  async function connectMetamask() {
    const ethereum = (window as any).ethereum;
    await ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await ethereum.request({ method: "eth_accounts" });
    setAddress(accounts[0]);
  }
  const [getTime, setGetTime] = useState<number>(new Date().getTime());
  useEffect(() => {
    if (address) {
      getProof();
      const interval = setInterval(() => {
        setGetTime(new Date().getTime());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [address]);
  async function getClaimableTime() {
    try {
      const claimableTime = await callClaimableTime();
      console.log(claimableTime);
      claimableTime && setExpTime(Number(claimableTime));
    } catch (error) {
      console.log(error);
    }
  }
  const [proof, setProof] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  async function getProof() {
    try {
      setLoading(true);
      const res = await fetch(`/api/getproof?address=${address}`);
      const data = await res.json();
      setProof(data.reponse);
      console.log("data", data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getClaimableTime();
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col gap-32 items-center w-[100vw] overflow-x-hidden relative justify-between px-8 pb-3`}
    >
      {loading && <Loader />}
      <div className="grid grid-cols-2 w-full gap-20 pt-6">
        <div className="flex flex-col w-full gap-6 ">
          <div className="paragraph-title">
            <h1 className="text-7xl">READ FIRST</h1>
          </div>
          <div className="paragraph font-semibold text-base w-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              a gravida tellus. In ex felis, semper at efficitur sit amet,
              mattis et odio. Pellentesque blandit leo ac justo tristique
              hendrerit. Maecenas laoreet mi fringilla, elementum magna gravida,
              pulvinar massa. Integer non egestas mi. Mauris in turpis sit amet
              libero rhoncus mollis sed vel massa. Mauris interdum dolor lectus,
              et lobortis neque rutrum posuere. Vivamus tincidunt eros libero,
              quis egestas velit tempor pellentesque. Praesent pellentesque
              turpis eleifend dui lacinia elementum. Praesent non iaculis nisi.
              Vivamus ut orci sed nibh vulputate tristique. Proin eget velit at
              sapien placerat blandit. Cras gravida interdum aliquam. Mauris
              vehicula posuere libero, eu laoreet sapien rhoncus sed. Quisque
              tempus eu magna sed gravida. Donec a purus eu tortor consequat
              sagittis ut sit amet ante. Nam non quam ut augue consequat
              placerat a eget nisl. Fusce elementum leo placerat, mattis felis
              vitae, molestie metus. Nunc aliquam ipsum efficitur neque euismod
              condimentum. Donec egestas a sapien sit amet pretium. Aenean
              sodales magna vitae fringilla aliquam. Donec in commodo justo.
              Aliquam gravida laoreet commodo. Etiam nec nisl nec nisl pharetra
              accumsan at vitae urna.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 h-full justify-between pb-6">
          <div className="flex w-full  justify-end">
            <button className="btn" onClick={connectMetamask}>
              {address
                ? address.slice(0, 6) + "..." + address.slice(-8)
                : "Connect Wallet"}
            </button>
          </div>

          <div className="flex flex-col gap-2 items-center  w-full">
            <p className="text-center w-full">
              You are eligble to claim{" "}
              {proof?.amount ? (proof?.amount / 10 ** 18).toFixed(2) : 0} $DOS
              !!
            </p>
            <button
              onClick={async () => {
                if (proof) {
                  console.log(proof.proof, proof.amount, proof.address);
                  await callAirDropClaim(
                    proof.proof,
                    proof.amount,
                    proof.address
                  );
                } else {
                  alert("You are not eligible to claim");
                }
              }}
              className="btn"
            >
              CLAIM
            </button>
          </div>
          <div className="flex justify-between w-full h-24">
            <div className="flex flex-col gap-3  w-40 h-full items-center justify-between">
              <input
                type="text"
                placeholder="Enter LP amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                className=" bg-transparent border-2 px-3 w-full border-white rounded text-white"
              />
              <button
                onClick={async () => {
                  await callApprove(parseInt(amount));
                }}
                disabled
                className="btn"
              >
                Approve LP
              </button>
            </div>
            <div className="flex flex-col gap-3 w-40 h-full justify-between">
              <p>Burn xxx amount LP sky rocket $DOS</p>
              <button
                className="btn"
                onClick={async () => {
                  await callBurn(parseInt(amount));
                }}
                disabled
              >
                BURN LP
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <div className=" border-2 px-3 border-white rounded text-center w-40">
              {` ${
                getTime < expTime
                  ? new Date(expTime - getTime).toISOString().substr(11, 8)
                  : "Timer"
              }`}
            </div>
            <button onClick={async () => {}} disabled className="btn">
              CLAIM
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-20 items-center">
        <h1 className="text-7xl w-full text-center">ROADMAP</h1>
        <div className="flex  items-center justify-center w-2/3">
          <Image
            src="/roadmap.png"
            width={1000}
            height={500}
            className="h-fit w-full"
            alt="roadmap"
          />
        </div>

        <div className="flex gap-3 items-center justify-end w-full pr-4">
          <Link
            href="https://www.avax.network/"
            className="h-20 w-20 rounded-full bg-white p-3 flex justify-center items-center"
            target="_blank"
          >
            <Image
              src="/avax.svg"
              width={40}
              height={40}
              className=" object-contain h-full w-full"
              alt="roadmap"
            />
          </Link>
          <Link href="https://twitter.com/DosAvax" target="_blank">
            <div className="flex gap-1 items-center">
              <Image
                src="/x.svg"
                width={40}
                height={40}
                className="h-20 w-20 rounded-full object-fill"
                alt="roadmap"
              />
              @DosAvax
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

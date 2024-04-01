import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col gap-12 items-center w-[100vw] overflow-x-hidden relative justify-between p-20`}
    >
      <div className="grid grid-cols-2 w-full gap-10 ">
        <div className="flex flex-col w-full gap-6 pl-6">
          <div className="paragraph-title">
            <h1 className="text-7xl">READ FIRST</h1>
          </div>
          <div className="paragraph font-semibold text-xl w-2/3">
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
        <div className="flex flex-col w-full gap-3 h-full justify-between py-6">
          <div className="flex w-full  justify-end">
            <button className="btn">Connect Wallet</button>
          </div>

          <div className="flex flex-col gap-2 items-center w-full">
            <p>You are eligble to claim 10.000 $DOS !!</p>
            <button className="btn">CLAIM</button>
          </div>
          <div className="flex justify-between w-full h-24">
            <div className="flex flex-col gap-3  w-40 h-full justify-between">
              <input
                type="text"
                placeholder="Enter LP amount"
                className=" bg-transparent border-2 px-3 border-white rounded text-white"
              />
              <button className="btn">Approve LP</button>
            </div>
            <div className="flex flex-col gap-3 w-40 h-full justify-between">
              <p>Burn xxx amount LP sky rocket $DOS</p>
              <button className="btn">BURN LP</button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <div className=" border-2 px-3 border-white rounded text-center w-40">
              Timer
            </div>
            <button className="btn">CLAIM</button>
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
          <Link href="https://www.avax.network/" className="h-20 w-20 rounded-full bg-white p-3 flex justify-center items-center" target="_blank">
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
                />@DosAvax
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

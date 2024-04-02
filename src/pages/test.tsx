import { Data } from "@/data/treeProofs";
import pb from "@/lib/pocketbase";
import { useEffect } from "react";

export default function Home() {
  async function createAirdropData() {
    try {
      let data = Data.map((v: any) => {
        return {
          address: v.value[0],
          amount: v.value[1],
          proof: v.proof,
        };
      });
      console.log(data[0]);

      // Asenkron olarak çalıştığı için bir sonraki döngü adımını beklemek için for döngüsü kullanmalısınız
      let getFullData = await pb.collection("airdrop").getFullList();
      console.log("getFullData", getFullData.length);
      for (let i = 0; i < data.length; i++) {
        let iscrated = false;
        try {
          let awv = await data[i];
          let check: any = await getFullData.filter(
            (v: any) => v.address === awv.address
          );
          //console.log("check", check);

          if (!check || check.length === 0) {
            let create = await pb
              .collection("airdrop")
              .create({
                ...awv,
              })
              .then((res) => res)
              .catch((err) => false);
            //console.log("create", create ? true : false);
            iscrated = create ? true : false;
          } else {
            if (check?.length > 1) {
              let del = await pb
                .collection("airdrop")
                .delete(check[1].id)
                .then((res) => res)
                .catch((err) => false);
              console.log("delete", del);
            }
          }
          console.log(
            i,
            "check",
            check.length === 0 ? false : true,
            "checkLength",
            check?.length,
            check?.length > 1, "create" , iscrated
          );
        } catch (error) {
          console.log(error);
        }

        // Her istek arasında 1 saniye bekleyin
        await new Promise((resolve) => setTimeout(resolve, 2));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fixOneAddress() {
    try {
      let data = Data.map((v: any) => {
        return {
          address: v.value[0],
          amount: v.value[1],
          proof: v.proof,
        };
      });
      const array: { address: any; amount: any; proof: any }[] = [];
      console.log(data[0]);

      let delAddress = data.slice(100000, 20000).map((v: any) => {
        let check = data
          .slice(100000, 20000)
          .filter((x: any) => x.address === v.address);
        if (check.length > 1) {
          array.push(v);
        }
      });
      console.log("array", array);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    console.log("Hello World");
    createAirdropData();
    //fixOneAddress();
  }, []);

  return (
    <>
      <h1>DENEME</h1>
    </>
  );
}

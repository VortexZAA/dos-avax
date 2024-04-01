import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";
/* import DATA from "./table2.json"; */
//import { ethers } from "ethers";
const convertAmount = (value, decimal = 18) => {
  return Number(
    (Number(value) * Math.pow(10, decimal)).toFixed(18)
  ).toLocaleString("fullwide", { useGrouping: false });
};
/* export async function parseTo18Decimals(number,decimals=18) {
  const parsed = ethers.parseUnits(number.toString(), Number(decimals));
  return parsed.toLocaleString("fullwide", { useGrouping: false });
} */
// (1)

const data = [
  {
      "address": "0xFbA4FF9Bc9dbA0787de18CF92F1D6D3c12Ab2f18",
      "amount": "26425.89738"
  },
  {
      "address": "0xF953371547f7708fA8bFa4d347EA34cc4B45bEe9",
      "amount": "26425.89738"
  },
  {
      "address": "0x000000000028517944920B477575cf4b2958f232",
      "amount": "4404.31623"
  },
  {
      "address": "0x00000000009726632680FB29d3F7A9734E3010E2",
      "amount": "26425.89738"
  },
  {
      "address": "0x000000003af6916de52d3425b4e49D7f97eDebEE",
      "amount": "13212.94869"
  },
  {
      "address": "0x0000000044f5F8103A11240fF7F5c7ba37e17cBf",
      "amount": "4404.31623"
  },
  {
      "address": "0x00000000FdAC7708D0D360BDDc1bc7d097F47439",
      "amount": "26425.89738"
  },
  {
      "address": "0x00000046DD6Dd4A5bFc26D9371217119435a730e",
      "amount": "8808.63246"
  },
  {
      "address": "0x0000007B168966dbD0a9E7C05c69Ebcb4c318c9a",
      "amount": "4404.31623"
  },
  {
      "address": "0x00000098e8b8cB65aC3E25Dc462368b00E790176",
      "amount": "4404.31623"
  },
  {
      "address": "0x000000C0ef6dBff0E689d393EDBb93702eEEf0d8",
      "amount": "4404.31623"
  },
  {
      "address": "0x000000fedB32Ad13a28e737621924278d367992D",
      "amount": "4404.31623"
  },
  {
      "address": "0x000002c34bAE6DD7BeC72AcbA6aAAC1e01A359De",
      "amount": "4404.31623"
  },
  {
      "address": "0x0000051235bc5B2509080BeA38f360A2B23119D7",
      "amount": "4404.31623"
  },
  {
      "address": "0x000007eba76b61031826E9cF306EaC1b1B59eF5A",
      "amount": "17617.26492"
  },
  {
      "address": "0x000009209E16dDF2e0abE52Fc2301f0f3c9A7D50",
      "amount": "4404.31623"
  },
  {
      "address": "0x00000d96E1Fa1728ee6798117E0191168e707C3A",
      "amount": "4404.31623"
  },
  {
      "address": "0x00001Ac84F26458Dc8c315A0Eccb55461032472e",
      "amount": "4404.31623"
  },
  {
      "address": "0x000022CcA07Ae43145e93297a6729e97c9AC8Bd5",
      "amount": "13212.94869"
  },
  {
      "address": "0x00002d6063b81D142C66AD1Fd25aaa07a32B0000",
      "amount": "4404.31623"
  },
  {
      "address": "0x0000333883f313AD709f583D0A3d2E18a44EF29b",
      "amount": "4404.31623"
  },
  {
      "address": "0x00003c9C440383eF834524fbEf3B37f4Db850000",
      "amount": "4404.31623"
  },
  {
      "address": "0x00005FEBB2F161294c90505117432BF1fC0B7E10",
      "amount": "4404.31623"
  },
  {
      "address": "0x000070a1DA0DA6D0a78A586C6e5ff46b2Bb20000",
      "amount": "4404.31623"
  },
  {
      "address": "0x0000B9296B4a8618BF4962405973F9CA40621001",
      "amount": "4404.31623"
  },
  {
      "address": "0x0000E96B0f8059053c416C6a458275Db02b00000",
      "amount": "4404.31623"
  },
  {
      "address": "0x00019473B1eD408fcBEb5020aAE8FbAbd8780262",
      "amount": "4404.31623"
  },
  {
      "address": "0x00029d35CB7aE09D38037355a046791D7b5E1645",
      "amount": "4404.31623"
  },
  {
      "address": "0x0002Eb2f32Aaaf8A7125a952C9a3256E65E237E4",
      "amount": "4404.31623"
  },
  {
      "address": "0x00033F45Fa674494d89a86CB3B365f350D421761",
      "amount": "4404.31623"
  },
  {
      "address": "0x00046F80A287F1e2596AC039E492e7953D5554D4",
      "amount": "4404.31623"
  },
  {
      "address": "0x00084B1E46205F168534c4C0D606830263B01977",
      "amount": "8808.63246"
  },
  {
      "address": "0x0008Ddf90C8A77cEfCf1Bc898C1eAb61506D4283",
      "amount": "17617.26492"
  },
  {
      "address": "0x000A8D5BCB8D0Ff6649C844D63D94C863a7B715A",
      "amount": "8808.63246"
  },
  {
      "address": "0x000bc21e8d0b4b62CCb2C30f7C315AbBAD98B60A",
      "amount": "4404.31623"
  },
  {
      "address": "0x000bDf14E710a7882516dbd6EbAb38a7ACC9f7EB",
      "amount": "4404.31623"
  },
  {
      "address": "0x000cC85A001c4f4cf4a9097Fd6E2784dAfe5c3a2",
      "amount": "8808.63246"
  },
  {
      "address": "0x000f959Ba61fcc2991b5771feac55ed1e52db50A",
      "amount": "22021.58115"
  },
  {
      "address": "0x001182a71865e514589b3A065372D09A3401F6b8",
      "amount": "8808.63246"
  },
  {
      "address": "0x001210Fdf55A75C00afc8Ad182996DFB753d9E61",
      "amount": "4404.31623"
  },
  {
      "address": "0x0015F4F723c3558D0ea2F6d0C78F5Ff6987854dE",
      "amount": "4404.31623"
  },
  {
      "address": "0x001644C1f30e9D79C8Ce97F28D3a46d3E2b412e2",
      "amount": "13212.94869"
  },
  {
      "address": "0x0016CFD5a955BCe8938A755C2B0C25E1d216eed4",
      "amount": "4404.31623"
  },
  {
      "address": "0x001A794b0973AA5384ae9B7140A767782c038af8",
      "amount": "4404.31623"
  },
  {
      "address": "0x001bd0358fE5dB39a762CBF9693ea6dE54D66f85",
      "amount": "4404.31623"
  },
  {
      "address": "0x001BFbe2Ed5DE3d5eE462A7499D76FC791624d9F",
      "amount": "4404.31623"
  },
  {
      "address": "0x001C2B9D5e477fD73F580f60c868Bf258649Aa08",
      "amount": "4404.31623"
  },
  {
      "address": "0x002152Fde286099f7214E13b08f4449551735F14",
      "amount": "4404.31623"
  },
  {
      "address": "0x0021c563933fe703e3F87Bd56B25FaD6d1a80A85",
      "amount": "4404.31623"
  },
  {
      "address": "0x00229796956477B6c0288302BD85D71D188FB994",
      "amount": "4404.31623"
  },
  {
      "address": "0x0022c21f735DE9d0564F8Ac1FD2C7EA20D30B671",
      "amount": "4404.31623"
  }
]

const values = data.map(({ address, amount }) => [
  address,
  convertAmount(Number(amount)),
]);
console.log("values", values);
// (2)
const tree = StandardMerkleTree.of(values, ["address", "uint256"]);

// (3)
console.log("Merkle Root:", tree.root);

// (4)
fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));

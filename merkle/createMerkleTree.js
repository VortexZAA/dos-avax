import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";
import { Data } from "./data.js";
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

const data = Data;
//console.log("data", data);
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

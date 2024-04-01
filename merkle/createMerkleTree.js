import{ StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

// (1)
const values = [
  ["0xb34380Bc73D308870373039893ad05cb23Aa6414", "10000000000000000000"],
  ["0xF953371547f7708fA8bFa4d347EA34cc4B45bEe9", "20000000000000000000"],
  ["0xceE5F1F761D2C9cDc0af072b9e56Ccb316C6929D", "30000000000000000000"],
  ["0x4Bca10538d18185F8DCEBA2fdF5C3222192875a4", "40000000000000000000"],
  ["0x6cf248FA25066b99F3f1b69FE0d8199841e69977", "50000000000000000000"],
];

// (2)
const tree = StandardMerkleTree.of(values, ["address", "uint256"]);

// (3)
console.log('Merkle Root:', tree.root);

// (4)
fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));






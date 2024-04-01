import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";
// (1)
const tree = StandardMerkleTree.load(JSON.parse(fs.readFileSync("tree.json")));
// all merkleProofs

//(2)
const array = [];
for (const [i, v] of tree.entries()) {
  /* console.log('value:', v);
  console.log('proof:', tree.getProof(i));
  console.log({
    value: v,
    proof: tree.getProof(i)
  
  });
   */
  array.push({
    value: v,
    proof: tree.getProof(i),
  });
}
console.log(array);

// // selectedMerleProofs
// for (const [i, v] of tree.entries()) {
//   if (v[0] === '0xF953371547f7708fA8bFa4d347EA34cc4B45bEe9') {
//     // (3)
//     const proof = tree.getProof(i);
//     console.log('Value:', v);
//     console.log('Proof:', proof);
//   }
// }

fs.writeFileSync("treeProofs.json", JSON.stringify(array));

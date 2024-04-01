import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";
// (1)
const tree = StandardMerkleTree.load(JSON.parse(fs.readFileSync("tree.json")));
// all merkleProofs

//(2)
/* const array = [];
for (const [i, v] of tree.entries()) {
  array.push({
    value: v,
    proof: tree.getProof(i),
  });
}
console.log(array); */

//selectedMerleProofs
 for (const [i, v] of tree.entries()) {
   if (v[0] === '0xFbA4FF9Bc9dbA0787de18CF92F1D6D3c12Ab2f18') {
     const proof = tree.getProof(i);
     console.log('Value:', v);
    console.log('Proof:', proof);
  }
 }

/* fs.writeFileSync("treeProofs.json", JSON.stringify(array)); */

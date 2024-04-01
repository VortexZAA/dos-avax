// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/cryptography/MerkleProof.sol";


contract MerkleDistributor{
    address public immutable  token;
    bytes32 public immutable  merkleRoot;
    uint256 public dropAmount;
    address public owner;

    // This is a packed array of booleans.
    mapping(address => bool) public whitelistClaimed;

    constructor(address token_, bytes32 merkleRoot_)  {
        token = token_;
        merkleRoot = merkleRoot_;
        owner = msg.sender;
    }


    function claim( bytes32[] calldata merkleProof, uint256 amount, address addr) external  {

        //Basic data validation to ensure that wallet hasn't Claimed
        require(!whitelistClaimed[msg.sender] ,  "MerkleDistributor: Drop already claimed.");

        // Verify the merkle proof.
         bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(addr, amount))));
        // (3)
        require(MerkleProof.verify(merkleProof, merkleRoot, leaf), "Invalid proof");
        require(msg.sender == addr,"msgSender is not Address");
        // Mark it claimed and send the token.
        whitelistClaimed[msg.sender] = true;
        require(IERC20(token).transfer(msg.sender, amount), "MerkleDistributor: Transfer failed.");
        }
    }

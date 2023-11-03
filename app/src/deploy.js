import { ethers } from "ethers";
import artifacts from "./artifacts/contracts/Escrow.sol/Escrow";
const { abi, bytecode } = artifacts;

export default async function deploy(signer, arbiter, beneficiary, amount) {
  const Escrow = new ethers.ContractFactory(abi, bytecode, signer),
    escrow = await Escrow.deploy(arbiter, beneficiary, {
      amount,
    });
  await escrow.deployed();
  console.log("account is now deployed");
  return escrow;
}

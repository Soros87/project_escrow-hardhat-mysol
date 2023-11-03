import { ethers } from "ethers";
import NewContract from "./components/NewContract";
import ExistingContracts from "./components/ExistingContracts";
import { useEffect, useState } from "react";

const provider = new ethers.providers.Web3Provider(window.ethereum);

export default function App() {
  // console.log(provider);

  const [account, setAccount] = useState();
  const [signer, setSigner] = useState();

  async function getAccounts() {
    const accounts = await provider.send("eth_requestAccounts", []);
    setAccount(accounts[0]);
    setSigner(provider.getSigner(accounts[0]));
    // console.log(signer);
  }

  useEffect(() => {
    getAccounts();
  }, [account]);

  return provider ? (
    <main>
      <h1 className="main-title">ESCROW CONTRACT FACTORY</h1>
      <p>
        <strong>Signer:</strong> {account}
      </p>
      <NewContract signer={signer} />
      <ExistingContracts signer={signer} />
    </main>
  ) : (
    <div className="fixed-container">
      <p>You need to install a browser wallet to use the DApp</p>
    </div>
  );
}

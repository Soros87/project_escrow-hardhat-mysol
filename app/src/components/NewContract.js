import { ethers } from "ethers";
import { useState } from "react";
import { useDispatch } from "react-redux";
import deploy from "../deploy";
import { createEscrow } from "../actions/posts";

const NewContract = (signer) => {
  const [escrows, setEscrows] = useState({
    arbiter: "",
    beneficiary: "",
    amount: "",
  });

  const dispatch = useDispatch();
  const [isDeploying, setIsDeploying] = useState(false);

  async function handleNewContract(e) {
    e.preventDefault();
    setIsDeploying(true);

    dispatch(
      createEscrow({
        ...escrows,
        signer: signer?.signer?._address,
      })
    );
    setEscrows([{ ...escrows }]);
    console.log(signer.signer._address);
    console.log(signer);

    // console.log(escrows.arbiter);
    // console.log(escrows.beneficiary);
    // console.log(ethers.utils.parseEther(escrows.amount));

    await deploy(
      signer,
      escrows.arbiter,
      escrows.beneficiary,
      ethers.utils.parseEther(escrows.amount)
    );

    setIsDeploying(false);
  }

  const inputFields = [
    {
      label: "Arbiter Address",
      id: "arbiter",
    },
    {
      label: "Beneficiary Address",
      id: "beneficiary",
    },
    {
      label: "Deposit Amount (ETH)",
      id: "amount",
    },
  ];

  return (
    <form className="contract" onSubmit={handleNewContract}>
      <h1> New Contract </h1>
      {inputFields.map((input) => (
        <label key={input.id}>
          {input.label}
          <input
            type="text"
            id={input.id}
            value={input.value}
            onChange={(e) =>
              setEscrows({
                ...escrows,
                [input.id]: e.target.value,
              })
            }
            required
          />
        </label>
      ))}
      <button
        className="button"
        id="deploy"
        type="submit"
        disabled={isDeploying}
      >
        {isDeploying ? "Wait..." : "Deploy"}
      </button>
    </form>
  );
};

export default NewContract;

import React from "react";
import Escrow from "../Escrow";
import { useSelector } from "react-redux";

const ExistingContracts = (signer) => {
  const escrows = useSelector((state) => state.escrows);

  return (
    <div className="existing-contracts">
      <h1> Existing Contracts </h1>

      <div id="container">
        {escrows?.map((escrow) => {
          return <Escrow signer={signer} key={escrow.address} {...escrow} />;
        })}
      </div>
    </div>
  );
};

export default ExistingContracts;

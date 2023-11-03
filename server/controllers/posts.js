let escrows = [];

export const createEscrow = async (req, res) => {
  const { signer, arbiter, beneficiary, amount } = req.body;
  escrows.push({ signer, arbiter, beneficiary, amount });

  try {
    res.status(201).send({ signer, arbiter, beneficiary, amount });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getEscrows = async (req, res) => {
  try {
    res.status(201).send(escrows);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getApprovedEscrows = async (req, res) => {
  const { signer } = req.params;
  let deployerContracts = escrows.filter(
    (escrow) =>
      escrow.arbiter.toLowerCase() === signer.toLowerCase() ||
      escrow.beneficiary.toLowerCase() === signer.toLowerCase()
  );
  try {
    res.send(deployerContracts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

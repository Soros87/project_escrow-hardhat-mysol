import contractInstance from "./contractInstance";

export default function Escrow({
  address,
  arbiter,
  beneficiary,
  amount,
  signer,
}) {
  async function handleApprove(e) {
    e.preventDefault();
    try {
      const escrowContract = contractInstance(address, signer);
      const tx = await escrowContract.connect(signer).approve();
      await tx.wait();
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="existing-contract">
      <ul className="fields">
        <li>
          <div> Arbiter </div>
          <div> {arbiter} </div>
        </li>
        <li>
          <div> Beneficiary </div>
          <div> {beneficiary} </div>
        </li>
        <li>
          <div> Value </div>
          <div> {amount} </div>
        </li>
        <div
          className="button"
          id={address}
          onClick={(e) => {
            handleApprove();
          }}
        >
          Approve
        </div>
      </ul>
    </div>
  );
}

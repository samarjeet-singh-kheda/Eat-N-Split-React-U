import Button from "./Button";

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with XXX</h2>
      <label>💰 Bill value</label>
      <input type="number" />

      <label>🧍‍♀️ Your expense</label>
      <input type="number" />

      <label>👫 XXX's expense</label>
      <input type="number" disabled />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="you">You</option>
        <option value="XXX">XXX</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

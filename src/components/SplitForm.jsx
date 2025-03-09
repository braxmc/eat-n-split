import FormInput from "./FormInput.jsx";

export default function SplitForm() {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH (Name)</h2>
      <FormInput text="💰 Bill Total" />
      <FormInput text="🧞‍♂️ Your Expense" />
      <FormInput text="👬 (Name's) expense" />
      <>
        <label>🤑 Who is paying the bill?</label>
        <select>
          <option value="you">You</option>
          <option value="(name)">(Name)</option>
        </select>
      </>
      <button className="button">Split Bill</button>
    </form>
  );
}
import FormInput from "./FormInput.jsx";

export default function FriendForm() {
  return (
    <form className="form-add-friend">
      <FormInput text="👬 Friend Name" />
      <FormInput text="🌄 Image URL" />
      <button className="button">Add</button>
    </form>
  );
}

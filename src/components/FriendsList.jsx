import Friend from "./Friend.jsx";
import FriendForm from "./FriendForm.jsx";


export default function FriendsList() {
  return (
    <div className="sidebar">
      <ul>
        <Friend />
      </ul>
      <button className="button">Add Friend</button>
      <FriendForm />
    </div>
  );
}
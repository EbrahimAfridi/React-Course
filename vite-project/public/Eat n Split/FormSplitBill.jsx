import "./index.css";
import Button from "./Button.jsx";
import {useState} from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }){

  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";  // derived state
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e){
    e.preventDefault();

    if(!paidByUser || !bill) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return(

    <form className="form-split-bill" onSubmit={handleSubmit}>

      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💳 Bill value</label>
      <input
        type="text"
        onChange={(e) => setBill(Number(e.target.value))}
        value={bill}
      />

      <label>💴 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}
      />

      <label>🤵🏻 {selectedFriend.name}'s expense</label>
      <input
        type="text"
        disabled
        value={paidByFriend}
      />

      <label>💸 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}
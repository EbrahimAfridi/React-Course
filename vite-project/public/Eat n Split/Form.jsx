import "./index.css";
import Button from "./Button.jsx";
import {useState} from "react";


export default function Form({ onAddFriend }){
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");

  function handleSubmit(e){
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`, // doing this coz the image on this url always changes after every refresh to keep it unique for each id.
      balance: 0
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  }

  return(

    <form className="form-add-friend" onSubmit={handleSubmit}>

      <label>🐳Friend name</label>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

      <label>📸Image URL</label>

      <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>

      <Button>Add</Button>

    </form>

  )

}
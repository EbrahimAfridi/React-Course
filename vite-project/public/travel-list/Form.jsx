import "./index.css";
import {useState} from "react";

export default function Form ({onAddItem}) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleForm (e) {
    e.preventDefault();

    if (!description) return;

    // It will store the values from the "input form".
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false
    };
    console.log(newItem);

    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleForm}>
      <h3>What do you need for your trip❔</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1)
          .map((num) => (
            <option value={num} key={num}>{num}</option>
          ))
        }
      </select>
      <input type="text" placeholder="Item..."
             value={description}
             onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
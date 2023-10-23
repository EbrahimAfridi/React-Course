import "./index.css";
import Items from "./Items.jsx";
import {useState} from "react";

export default function PackingList({items, onDeleteItem, onToggleItem, onClear}) {

  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    //  here slice is used to prevent mutating original items array slice makes a copy and then sorts it using a, b technique
    //  a.description is compared using localeCompare method as description is a string
  }
  if (sortBy === "packed"){
    sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
  //  here we have used similar logic like above, but also we have used Number method to convert the boolean values
  //  into numbers and according to sort method unchecked value will have a boolean as 1 whereas a check will have 0
  //  hence 1 before 0 1 bigger than 0
  }

  return(
    <div className="list">
      <ul>
        {
          sortedItems.map(item => (
            <Items
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              item={item}
              key={item.id}
            />
          ))
        }
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClear}>Clear</button>
      </div>

    </div>
  );
}


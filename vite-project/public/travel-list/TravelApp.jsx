import {useState} from "react";
import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";

export default function TravelApp(){
  const [items, setItems] = useState([]);

  function handleAddItem(item){
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id){
    // filter() method creates a new array of items with passes a test case like below (item.id !== id)
    setItems((items) => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? {...item, packed: !item.packed} : item       // here particular item is being spread not the items array
      ))
  }

  function handleClear(){
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if(confirmed) setItems([]);
  }

  return(
    <>
      <Logo/>
      <Form onAddItem={handleAddItem}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClear={handleClear}/>
      <Stats items={items}/>
    </>
  );
}
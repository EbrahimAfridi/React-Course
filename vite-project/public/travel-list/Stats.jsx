import "./index.css";

export default function Stats({items}) {
  const numsItems = items.length;
  const numsPacked = items.filter((item) => item.packed).length;
  const numsPercentage = Math.round((numsPacked / numsItems) * 100);

  if (!items.length){
    return (
      <p className="stats">
        <em>Start adding to your list 🚀</em>
      </p>
    );
  }

  return(
    <footer className="stats">
     <em>
       {
         numsPercentage === 100 ? "You have got everything packed and are ready to go ✈️"
         : `💼 You have ${numsItems} items in your list, and you already packed ${numsPacked} items(${numsPercentage}%)`
       }
       </em>
    </footer>
  );
}
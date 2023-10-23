import "./index.css";

export default function Button({children, onClick}){
  return(
    // <button className="button" onClick={onAddFriend}>{children}</button>
    <button onClick={onClick} className="button">{children}</button>
  )
}
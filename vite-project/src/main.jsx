import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import StarRating from "../public/usePopCorn/StarRating.jsx";

// function Star(){
//   const [movieRating, setMovieRating] = useState(0);
//   return(
//     <div>
//       <StarRating onSetRating={setMovieRating} maxRating={5}/>
//       <p>This movie was rated: {movieRating}</p>
//     </div>
//     )
//
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

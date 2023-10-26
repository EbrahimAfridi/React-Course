import Header from "./Header.jsx";
import "./index.css"
import Main from "./Main.jsx";
import {useEffect, useReducer} from "react";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import StartingScreen from "./StartingScreen.jsx";
import Questions from "./Questions.jsx";

const initialState = {

    questions: [],

    status: "loading",   // loading, error, ready, active, finished

    index: 0,
}

function reducer(state, action) {

    switch (action.type) {

        case "dataReceived":

            return {

                ...state,

                questions: action.payload,

                status: "ready"

            };

        case "dataFailed":

            return {

                ...state,

                status: "error",

            };

        case "start":

            return {

                ...state,

                status: "active"

            };

        default:

            throw new Error("Unknown action")

    }

}


export default function ReactQuiz(){

    const [{questions, status, index}, dispatch] = useReducer(reducer, initialState);

    const numQuestions = questions.length;  // this is a derived state [derived from initialState object]

    useEffect(() => {

        fetch("http://localhost:8000/questions/")

            .then((res) => res.json())

            .then((data) => dispatch({type: "dataReceived", payload: data}))

            .catch(() => dispatch({type: "dataFailed"}))

    }, []);

    return(

        <div className="app">

            <Header/>

            <Main>

                { status === 'loading' && <Loader/> }

                { status === "error" && <Error/> }

                { status === "ready" && <StartingScreen dispatch={dispatch} numQuestions={numQuestions}/> }

                { status === "active" && <Questions question={ questions[index] }/> }

            </Main>

        </div>

    )
}
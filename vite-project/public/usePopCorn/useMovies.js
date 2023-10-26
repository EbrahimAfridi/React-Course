import { useState, useEffect } from "react";
const KEY = "4f1aa1c9";   //API KEY


export function useMovies(query){

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    //fetching API
    useEffect(function(){

        // callback?.();   //optional chaining

        const controller = new AbortController();

        async function fetchMovies() {
        try {
            setIsLoading(true);
            setError("");

            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            {signal: controller.signal});

            if(!res.ok) throw new Error("Something went wrong while fetching :( ");

            const data = await res.json();
            if(data.Response === "False") throw new Error("Movie not found");     // error message for movie not found

            setMovies(data.Search);
            setIsLoading(false);
        }
        catch (err) {
            console.error(err.message);
            if (err.name !== "AbortError"){
                setError(err.message)
            }
        }
        finally {
            setIsLoading(false);
        }
        }

        if(query.length < 3){
        setMovies([]);
        setError("");
        return;
        }

        fetchMovies();

        return function(){
        controller.abort();
        }

    }, [query]);

    return {movies, isLoading, error};
} 
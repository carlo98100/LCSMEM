import React, { useEffect, useState} from "react";
import axios from"axios";

function useFetch(url) {
const [data, setData] = useState(null);
const [change, setChange] = useState(true);  
const [error, setError] = useState();  

    useEffect (() => {
        setChange(true);
        axios
        .get(url)
        .then((response) => {});
        setData(response.data);
    })
    .catch((err) => {
        setError(err);
    }).finally(() => {
        setChange(false);
    });

    useEffect (() => {
    fetchApi();
})

return {data, change, error };

}



export default useFetch;
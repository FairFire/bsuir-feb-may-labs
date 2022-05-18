import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const NewsContext = createContext();
export const NewsContextProvider = (props) => {
    const [data,setData] = useState()
    const apiKey = "32ff5f29900f4dfe9fbdbd3fc0d6df29";

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-04-18&sortBy=publishedAt&apiKey=${apiKey}'
        ).then((response) => setData(response.data)).catch((error) => console.log(error));
    },[]);

    return  (
    <NewsContext.Provider value = {{data}}>
        {props.children}
        </NewsContext.Provider>
        );
    
};
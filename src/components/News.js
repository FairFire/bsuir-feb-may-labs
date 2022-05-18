import React, {useContext} from "react";
import {NewsContext} from "../NewsContext";
import NewArticle from "./NewArticle";

function News(props) {
  const {data} = useContext(NewsContext);
  
  
    return (
    <div>
        {data
            ? data.articles.map((news) => (
                <NewArticle data = {news} key = {news.url} />
            ))
            : "Error Connect NewsApi"}
    </div>
  );
}

export default News;
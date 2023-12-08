import React, { useState } from "react";
import NewsItem from "./NewsItem";

const News = (props) => {
  let [articles, setArticles] = useState([]);
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/everything?q=Apple&from=2023-11-01&sortBy=popularity&apiKey=${props.apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles (articles = parsedData.articles)  
    console.log(articles)
  }
  
  return (
    <>  
        <div className="text-center ">
            NEWS Headlines
            {fetchMoreData()}
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((item, index) => (
            <div className="" key={index}>
            <NewsItem heading={item.title.slice(0, 60)} description={item.description.slice(0, 120)} imageUrl={item.urlToImage} articleUrl={item.url} />
            </div>
        ))}
        </div>
    </>
    );
};

export default News;

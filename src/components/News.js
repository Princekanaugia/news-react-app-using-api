import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function News(props) {
  const [articles, setArticles] = useState([]);
  

  useEffect(() => {
    
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-01-01&sortBy=publishedAt&apiKey=cfef96a004ff49b186a9173a509a1897`;
    fetch(url)
    .then (async function(res) {
    const parsedData = await res.json();
    setArticles ( parsedData.articles);  
    })

  },[]);
  
  return (
    <>  
        <div className="text-center ">
            NEWS Headlines
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((item, index) => (
            <div className="" key={index}>
            <NewsItem heading={item.title} description={item.description} imageUrl={item.urlToImage} articleUrl={item.url} />
            </div>
        ))}
        </div>
    </>
    );
};

export default News;

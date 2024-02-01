import React from "react";

const NewsItem = (props) => {
  
  return (
    <div className="container mx-auto my-4 max-w-sm border border-gray-500 rounded-xl bg-white text-black ">
      
        <img className="rounded-t-lg container object-contain object-center " src={props.imageUrl} alt=""/>
        <div className="m-2 font-bold text-lg tracking-tight leading-none">{props.heading}</div>
        <div className="m-2 text-base leading-normal">{props.description}</div>
        <a href={props.articleUrl}>
          <button type="button" className="btn">View full Article</button>
        </a>
      
    </div>
  );
};

export default NewsItem;
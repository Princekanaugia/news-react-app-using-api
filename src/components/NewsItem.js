import React from "react";

const NewsItem = (props) => {
  return (
    <>
      <div className="bg-white text-black container my-2">
        <img className="my-2 mx-2" src={props.imageUrl} alt=""/>
        <div className="my-2 mx-2  ">{props.heading}</div>
        <div className="">{props.description}</div>
        <button className="">View full Article</button>
      </div>
    </>
  );
};

export default NewsItem;

import React from "react";

const NavBar = (props) => {
  return (
  <>
    <div className="flex bg-blue-400 py-2 px-2">
        <div className=" text-lg text-center italic ">{props.title}</div> 
    <ul className="flex mx-2 ">
        <li className="mx-2 text-center ">Home</li>
        <li className="mx-2 text-center ">About</li>
        <li className="mx-2 text-center ">Contact Us</li>
    </ul>
   </div>
  </>
  );
};

export default NavBar;
import React from 'react'
import NavBar from "./components/Navbar"
import News from './components/News';


function App() {
  const apiKey = `${process.env.REACT_APP_NEWS_API}`;
  return (
    <>
      <NavBar title="NEWSTime"/> 
      <News newsType="Heading" apiKey = {apiKey}/> 
    </>
  );
}

export default App;

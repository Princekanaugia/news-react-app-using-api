import React from 'react'
import NavBar from "./components/Navbar"
import News from './components/News';


function App() {
  return (
    <>
      <NavBar title="NEWSTime"/> 
      <News newsType="Heading"/> 
    </>
  );
}

export default App;

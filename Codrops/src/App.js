import React from "react";
import Routes from "./Components/Navbar.js/Routes";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from "./Components/Navbar.js/Navbar";
import Heading from "./Components/Heading";

function App() {
  return (<>
  <Heading/>
  
    <Routes/>
    </>
  );
}

export default App;

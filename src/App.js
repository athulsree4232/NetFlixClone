import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {orginals , action, comedy, horror, romance, documentries} from './urls'
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title = "Netflix Orginals" url={orginals}/>
      <RowPost title = "Action" isSmall url={action}/>
      <RowPost title = "Comedy" isSmall url={comedy}/>
      <RowPost title = "Horror" isSmall url={horror}/>
      <RowPost title = "Romance" isSmall url = {romance}/>
      <RowPost title = "Documentries" isSmall url={documentries}/>
    
    </div>
  );
}

export default App;

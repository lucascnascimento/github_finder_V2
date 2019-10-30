import React from 'react';
import './App.css';
import Navbar from "./Components/layout/Navbar"
import UserItem from "./Components/Users/UserItem"
class App extends React.Component {
  render(){
    return (
      <div className = "App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <UserItem />
      </div>
    );
  } 
}

export default App;

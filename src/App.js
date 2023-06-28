import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
function App() {
  const [mode , setMode]= useState("light")
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#021f3b"
    }else{
      setMode('light')
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
    <Navbar title ="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Main heading ="Textutils-Play with your text" mode={mode}/>
    </>
  );
}

export default App;

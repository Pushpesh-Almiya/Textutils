import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
function App() {
  const [mode , setMode]= useState("light")
  const [alert , setAlert]=useState(null)

  const showAlert=(message, color)=>{
    setAlert({
      msg: message,
      clr :color
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#021f3b"
      showAlert("Dark mode has been enabled","dark")
    }else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("light mode enable","warning")
    }
  }
  

  return (
    <>
    <Navbar title ="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Main heading ="Textutils-Play with your text" showAlert={showAlert} mode={mode}/>
    </>
  );
}

export default App;

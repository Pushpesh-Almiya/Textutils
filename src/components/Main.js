import { React, useState } from "react";

export default function Main(props) {
  const [text, setText] = useState("Enter your text");
  const enterText = (e) => {
    setText(e.target.value);
  };
  const uppercase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase","primary")
  };
  const lowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase","success")
  };
  const clearText = () => {
    setText("");
    props.showAlert("Cleared text","danger")
  };
  const copyText = () => {
    let enterText = document.getElementById('textarea')
    enterText.select();
    navigator.clipboard.writeText(text);
    props.showAlert("copy to clipbord","warning")
  };
  const removeExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Remove extra spaces","info")
  }
  return (
    <>
    <div   className="mainBody"style={{color:props.mode==="dark"?"white":"black"}} >
      <div  className="container">
        <h1 className="my-3">{props.heading}</h1>
        <textarea  id="textarea" style={{backgroundColor:props.mode==='dark'?"#021f3b":"white", color:props.mode==="dark"?"white":"black"}}
          className="p-3"
          name="box"
          value={text}
          onChange={enterText}
          cols="120"
          rows="8"
        ></textarea>
        <button className="btn btn-primary m-2" onClick={uppercase}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-success m-2" onClick={lowercase}>
          Convert to lowercase
        </button>
        <button className="btn btn-info m-2" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-warning m-2" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-danger m-2" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container">
      <h3>Your Text Summary</h3>
      <p>{text.split("").length} words and {text.length} characters</p>
      <h3>Preview</h3>
      <p>{text.length>0 ?text:"Please enter text to preview"}</p>
      </div>
      </div>

    </>
  );
}

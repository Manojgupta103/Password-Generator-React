import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { LC, NC, SC, UC } from "./data/PassChar";

function App() {
  let [uppercase, setUppercase]=useState(false)
  let [lowercase, setLowercase]=useState(false)
  let [number, setNumber]=useState(false)
  let [symbol, setSymbol]=useState(false)
  let [passwordlen, setPasswordlen]=useState(10)
  let [fpass, setFpass] = useState('')


  let createPassword=()=>{
    let finalPass=''
    let charSet=''
    if(uppercase || lowercase || number || symbol) {
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbol) charSet+=SC
      for(let i = 0; i<passwordlen; i++){
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length))
        }
      toast.success("Password Generated Succesfully")

      setFpass(finalPass)
      
    } else {
      toast.warn("Please select atleast one option")
    }
  }


  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
    toast.success("Password Copied")
  }
  return (
    
    <>
    <ToastContainer />
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxin">
          <input type="text" value={fpass} readOnly />
          <button onClick={copyPass}>Copy</button>
        </div>

        <div className="passlength">
          <label>Password Length</label>
          <input type="number" min="4" max="20" value={passwordlen}  onChange={(event)=>setPasswordlen(event.target.value)}/>
        </div>

        <div className="upperCase">
          <label>Include Upper Case</label>
          <input type="checkbox" className="chkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
        </div>

        <div className="lowerCase">
          <label>Include Lower Case</label>
          <input type="checkbox" className="chkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>

        </div>

        <div className="Number">
          <label>Include Number</label>
          <input type="checkbox" className="chkbox" checked={number} onChange={()=>setNumber(!number)}/>

        </div>

        <div className="symbol">
          <label>Include Symbol</label>
          <input type="checkbox"  className="chkbox" checked={symbol} onChange={()=>setSymbol(!symbol)}/>
        </div>
        <div>
        <button className="btn" onClick={createPassword}>Generate Password</button>
        </div>
      </div>
    </>
  );
}

export default App;

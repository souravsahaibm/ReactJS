import React,{useState} from 'react'

export default function TextForm() {
const[text,setText]=useState('Enter your text');
const handleOnChange=(event)=>{
    setText(event.target.value);
}
const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
}
const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
}
const countWord=()=>{
    let wordCount=text.split(' ').length;
    return wordCount;
}
const handleClearext=()=>{
    setText('');
}
  return (
      <>
          <div className="my-3">
              <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Text Area</label>
                  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
              </div>
              <button type="button" onClick={handleUpClick} className="btn btn-primary mx-1">Click for Upper</button>
              <button type="button" onClick={handleLowClick} className="btn btn-primary mx-1">Click for Lower</button>
              <button type="button" onClick={handleClearext} className="btn btn-primary mx-1">Clear Text</button>
          </div>
          <h2>
              Your Final text
          </h2>
          <p>{text}</p>
          <p>Total words : {countWord()} & Total characters : {text.length}</p>
      </>
  )
}

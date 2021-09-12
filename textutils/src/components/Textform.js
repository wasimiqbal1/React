import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpclick = ()=>{
        // console.log("Upper Case was Clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloclick = ()=>{
        // console.log("Lower Case was Clicked: " + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On Changed");
        setText(event.target.value);
    }

    const [text, setText] = useState("Entre Text here");

    return (
        <>
        <div className = "container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Upper Case </button>
            <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to Lower Case </button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} word & {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}

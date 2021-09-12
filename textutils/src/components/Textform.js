import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpclick = ()=>{
        // console.log("Upper Case was Clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On Changed");
        setText(event.target.value);
    }

    const [text, setText] = useState("Entre Text here");

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary" onClick={handleUpclick}>Convert to Upper Case </button>
            </div>
        </div>
    )
}

import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Upper Case was Clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloClick = ()=>{
        // console.log("Lower Case was Clicked: " + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    
    const handleClearClick = ()=>{
        // console.log("Clear text was Clicked: " + text);
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On Changed");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select ();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }

    const [text, setText] = useState("Entre Text here ");

    return (
        <>
        <div className = "container" style= {{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'dimgrey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case </button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lower Case </button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style= {{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} word & {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

        </div>
        </>
    )
}

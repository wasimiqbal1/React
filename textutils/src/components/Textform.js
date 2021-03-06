import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Upper Case was Clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","Success")
    }

    const handleloClick = ()=>{
        // console.log("Lower Case was Clicked: " + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","Success")

    }
    
    const handleClearClick = ()=>{
        // console.log("Clear text was Clicked: " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Cleared","Success")

    }

    const handleOnChange = (event)=>{
        // console.log("On Changed");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select ();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard","Success")
    }

    const handleExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra Spaces Removed!","Success")
    }

    const [text, setText] = useState("Entre Text here ");

    return (
        <>
        <div className = "container" style= {{color: props.mode==='dark'?'white':'black'}}>
            <h1 className = 'mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(4, 39, 67)':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick}>Convert to Lower Case </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style= {{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word & {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>

        </div>
        </>
    )
}

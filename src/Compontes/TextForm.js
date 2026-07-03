import React, {useState} from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowClick = () => {
        let newText1 = text.toLowerCase();
        setText(newText1);
        props.showAlert("Converted to LowerCase", "success"); 
    }
    const handleClearClick = () => {
        let newText2 = "";
        setText(newText2);
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" style={{backgroundColor: props.mode ==='dark' ? '#042743':'white'}} rows={3} onChange={handleOnChange}  defaultValue={""}  />
                <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert UpperCase</button>
                <button className="btn btn-primary m-2" onClick={handleLowClick}>Convert LowerCase</button>
                <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>
                {/* <button className="btn btn-primary m-2" onClick={() => setText(text.charAt(0).toUpperCase() + text.slice(1))}>Capitalized</button> */}
            </div>

        </div>

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length}  Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter text in the textbox above to preview it here."}</p>
        </div>
        </>

    )
}

 
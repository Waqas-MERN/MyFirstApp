import React, {useState} from 'react'


export default function Form(props) {
const handleupClick = () => {
// console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText)
    }

    const handleClearClick = () => {
    let newText = '';
    setText(newText)
    }

    const handleonChange = (event) => {
    console.log ("On Change");
    setText(event.target.value)
    }  


    const [text, setText] = useState('Enter text here');
    return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3" >
    <textarea className="form-control" value={text} onChange={handleonChange} id="MyBox" rows="10"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
</div>
)
}

import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter here...");
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="Text Area" className="form-label">
              <h1>{props.heading}</h1>
            </label>
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              value={text}
              placeholder={props.placeholder}
              onChange={handleOnChange}
            />
          </div>
        </form>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{text.length * 0.008} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

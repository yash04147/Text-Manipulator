import React, { useState } from "react";

export default function TextForm({ showalert, mode, heading }) {
  const handleUpClick = () => {
    // console.log("Upper Case was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    showalert("Converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    // console.log("Lower Case was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    showalert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    let emptyText = "";
    setText(emptyText);
  };
  const handleCopyClick = () => {
    let Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
  };
  function handleExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleOnChange = (e) => {
    console.log("On change");
    setText(e.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: mode === "light" ? "black" : "white" }}>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter your text here"
            style={{
              backgroundColor: mode === "light" ? "white" : "grey",
              color: mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Clear Extra Spaces
        </button>
      </div>
      <div
        className="container "
        style={{ color: mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p> {0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p> {text.length > 0 ? text : "Enter a text to preview"} </p>
      </div>
    </>
  );
}

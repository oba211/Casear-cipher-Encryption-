import React, { useState } from "react";

function Caesar() {
  const [input, setInput] = useState("abcdefghxyzabc");
  const [shift, setShift] = useState(2);
  const [output, setOutput] = useState("");

  function updateInput(e) {
    setInput(e.target.value);
  }

  function updateShift(e) {
    setShift(e.target.value);
  }

  function caesarShift(e) {
    e.preventDefault();
    let k = parseInt(shift);

    // Make an output variable
    var result = "";

    // Go through each character
    for (var i = 0; i < input.length; i++) {
      // Get the character we'll be appending
      var c = input[i];

      var code = input.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + k) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + k) % 26) + 97);
      }

      // Append
      result += c;
    }

    // All done!
    setOutput(result);
  }

  return (
    <div className="caesar">
      <form onSubmit={caesarShift}>
        <input
          type="text"
          placeholder="Enter Plain Text"
          value={input}
          onChange={updateInput}
        />
        <input
          type="tel"
          placeholder="Enter shift number"
          value={shift}
          onChange={updateShift}
        />
        <input type="submit" value="Encrypt" />
      </form>

      <h4>Output : {output}</h4>
    </div>
  );
}

export default Caesar;

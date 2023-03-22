import React, { useState } from "react";
import Tesseract from "tesseract.js";
import Dropzone from "react-dropzone";

function App() {
  const [text, setText] = useState("");

  const handleDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    Tesseract.recognize(image, "eng", { logger: (m) => console.log(m) })
      .then(({ data: { text } }) => setText(text))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drop an image here, or click to select an image</p>
          </div>
        )}
      </Dropzone>
      <p>{text}</p>
    </div>
  );
}

export default App;
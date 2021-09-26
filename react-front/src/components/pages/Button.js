import React, { useState, useRef, useReducer } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from '@tensorflow/tfjs'
import './Button.css'
import hashmap from "./hashmap";




const machine = {
  initial: "initial",
  states: {
    initial: { on: { next: "loadingModel" } },
    loadingModel: { on: { next: "modelReady" } },
    modelReady: { on: { next: "imageReady" } },
    imageReady: { on: { next: "identifying" }, showImage: true },
    identifying: { on: { next: "complete" } },
    //tips: {on: {next: "complete"}, showImage: true, showResults: true},
    complete: { on: { next: "modelReady" }, showImage: true, showResults: true }
  }
};

function App() {
  tf.setBackend("cpu");
  const [results, setResults] = useState([]);
  const [tips, setTips] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [model, setModel] = useState(null);
  const imageRef = useRef();
  const inputRef = useRef();

  const reducer = (state, event) =>
    machine.states[state].on[event] || machine.initial;

  const [appState, dispatch] = useReducer(reducer, machine.initial);
  const next = () => dispatch("next");

  const loadModel = async () => {
    next();
    const model = await mobilenet.load();
    setModel(model);
    next();
  };

  const identify = async () => {
    next();
    const results = await model.classify(imageRef.current);
    setResults(results);
    const tips = hashmap(results[0].className);
    setTips(tips)
    next();
  };

  const reset = async () => {
    setResults([]);
    next();
  };

  /*const consejo = async () => {
    
    next();
  };*/

  const upload = () => inputRef.current.click();

  const handleUpload = event => {
    const { files } = event.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(event.target.files[0]);
      setImageURL(url);
      next();
    }
  };
  
  const actionButton = {
    initial: { action: loadModel, text: "Load Model" },
    loadingModel: { text: "Loading Model..." },
    modelReady: { action: upload, text: "Upload Image" },
    imageReady: { action: identify, text: "Identify Breed" },
    identifying: { text: "Identifying..." },
    //tips: {action: consejo, text: "tips"},
    complete: { action: reset, text: "Reset" }
  };

  const { showImage, showResults } = machine.states[appState];
//Te dice como reciclar
    if (typeof results[0] !== 'undefined') {
      // your code here

    }
    
  return (
    <div  >
      {showImage && <img src={imageURL} alt="upload-preview" ref={imageRef} />}
      <input hidden
        type="file"
        accept="image/*"
        capture="camera"
        onChange={handleUpload}
        ref={inputRef}
      />
      {showResults && (
        <ul>
          {results.map(({ className, probability }) => (
            <li key={className}>{`${className}: %${(probability * 100).toFixed(
              2
            )}`}</li>
          ))}
        </ul>
      )}
      <p>{tips}</p>
      <button class="btn effect01" target="_blank"onClick={actionButton[appState].action || (() => {})}>
        {actionButton[appState].text} 
      </button>
 <div>
 
  </div>
    </div>
  );
}

export default App;

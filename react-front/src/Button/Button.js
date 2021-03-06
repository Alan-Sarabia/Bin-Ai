import React, { useState, useRef, useReducer } from "react";
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from "@tensorflow-models/mobilenet";
import './Button.css'
import hashmap from "./hashmap";
import { useHistory } from "react-router-dom";
//import Card from "../Cards/Card";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

/*import r1 from "../img/r1.jpeg";
import ob2 from '../img/ob2.jpg';
import desafio3 from '../img/desafio3.jpg'
import metal from '../img/metal.jpeg'*/



const machine = {
  initial: "initial",
  states: {
    initial: { on: { next: "loadingModel" } },
    loadingModel: { on: { next: "modelReady" } },
    modelReady: { on: { next: "imageReady" } },
    imageReady: { on: { next: "identifying" }, showImage: true },
    identifying: { on: { next: "complete" } },
    complete: { on: { next: "modelReady" } }
  }
};

function Button() {


  tf.setBackend("cpu");
  const history = useHistory();
  const [results, setResults] = useState([]);
  const [tips, setTips] = useState([]);
  // const [card, setCard] = useState([]);
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
    const tips = hashmap(results[0].className, imageURL);
    //const card = Card({imageSource:metal, title: "Reciclaje de Metales", text:"El proceso de reciclado empieza cuando el usuario separa sus residuos. Luego, se recogen y clasifican los distintos metales, para procesarlos por separado. Las latas de aluminio y acero se comprimen para llevarlas a la planta de reciclado correspondiente. Luego, se trituran y un im??n separa el acero del aluminio.", url:"https://www.serviciodedesguace.com/#Quehacemos"});
    setTips(tips)
    history.push("/hola");
    // setCard(card)
    next();
  };

  const reset = async () => {
    setTips([]);
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
    initial: { action: loadModel, text: "Cargar modelo" },
    loadingModel: { text: "Cargando..." },
    modelReady: { action: upload, text: "Subir imagen" },
    imageReady: { action: identify, text: "Identificar" },
    identifying: { text: "Identificando..." },
    //tips: {action: consejo, text: "tips"},
    complete: { action: reset, text: "Resetear" }
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

      <div className="container">
        <div className="row">
          <div className="col-md-4 "> 
          </div>
          
          <div className="col-md-4 "> 
            {tips} <br/>
          </div>

          <div className="col-md-4 "> 
          </div>
        </div>
      </div>
      <button class="ba effect01 " target="_blank" onClick={actionButton[appState].action || (() => { })}>
        {actionButton[appState].text}
      </button>
    </div>
  );
}

export default Button;

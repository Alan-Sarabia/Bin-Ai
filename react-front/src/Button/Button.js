/*
//error no solucionado
import React, {useState, useRef, useReducer} from 'react'
import * as mobilenet from "@tensorflow-models/mobilenet";


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

function Button () {
  tf.setBackend('cpu');
  const history = useHistory();
  const [results, setResults] = useState([]);
  const [tips, setTips] = useState([]);
  const [card, setCard] = useState([]);
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
    history.push("/hola");
    const model = await mobilenet.load();
    setModel(model);
    next();
  };

  const identify = async () => {
    next();
    const results = await model.classify(imageRef.current);
    setResults(results);
    //const tips = hashmap(results[0].className);
    //const card = Card({imageSource:metal, title: "Reciclaje de Metales", text:"El proceso de reciclado empieza cuando el usuario separa sus residuos. Luego, se recogen y clasifican los distintos metales, para procesarlos por separado. Las latas de aluminio y acero se comprimen para llevarlas a la planta de reciclado correspondiente. Luego, se trituran y un imán separa el acero del aluminio.", url:"https://www.serviciodedesguace.com/#Quehacemos"});
    setTips(tips)
    setCard(card)
    next();
  };

  const reset = async () => {
    setTips([]);
    setResults([]);
    next();
  };

  /*const consejo = async () => {
    
    next();
  };
*/
/*
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
    loadingModel: { text: "Cargando modelo..." },
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
        
        <p>{tips}
        {card}</p>
        <button class="btn effect01" target="_blank"onClick={actionButton[appState].action || (() => {})}>
          {actionButton[appState].text} 
        </button>
  
      </div>
    );
}

export default Button
*/
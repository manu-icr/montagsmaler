import React from "react";
import TextBlock from "./TextBlock";

import Canvas from './Canvas';
import CanvasControls from './CanvasControls';
import * as tf from "@tensorflow/tfjs";


let ref = React.createRef();
const model = tf.loadModel("./model/model.json");
const labels = require("./labels.json");

function App() {
 
  return (
    <div>
      <TextBlock strings={["asdf"]} />
      <Canvas ref={ref}
      height={300}
      width={300} />
      <CanvasControls theCanvas={ref} model={model} labels={labels} />
    </div>
  );
};

export default App;

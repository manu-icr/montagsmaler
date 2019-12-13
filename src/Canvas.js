import React, { useEffect } from 'react';
import { getPrediction } from './helpers';

const Canvas = React.forwardRef((props, ref) => {
  let mouseDown = false;
  let lastX;
  let lastY;


  function drawLine(canvas, x, y, lastX, lastY) {
    let context = canvas.getContext("2d");

    context.strokeStyle = "#000000";
    context.lineWidth = 12;
    context.lineJoin = "round";

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();

    return [x, y];
  }

  const handleMouseup = () => {
    mouseDown = false;
    [lastX, lastY] = [undefined, undefined];
    getPrediction(ref, props.model).then(prediction => {
      let newPrediction = props.labels[prediction[0]];
      props.win(newPrediction);
    });
  };

  const handleMousemove = e => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (mouseDown) {
      [lastX, lastY] = drawLine(e.target, x, y, lastX, lastY);
    }
  };

  const clearCanvasButton = e => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, canvas.height, canvas.width);
  }

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.height, canvas.width);
  });

  return (
    <div className='canvasContainer'>
      <canvas
        height='300px'
        width='300px'
        ref={ref}
        onMouseDown={() => (mouseDown = true)}
        onMouseUp={handleMouseup}
        onMouseMove={e => handleMousemove(e)}
      />
      <button className="clearCanvas" onClick={clearCanvasButton} >
        Clear the canvas.
      </button>
    </div>
  );
});

export default Canvas;
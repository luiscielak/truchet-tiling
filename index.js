const sketch = (processing) => {
  processing.draw = () => {
    processing.background(224);
  }
}

const canvas = document.getElementById('canvas');
const processingInst = new Processing(canvas, sketch);

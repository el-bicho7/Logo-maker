const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

function checkShape(shape){
  let shapeToRender = '';
  if (shape === 'circle'){
    shapeToRender = new Circle;
  } else if (shape === 'triangle') {
    shapeToRender = new Triangle;
  } else {
    shapeToRender = new Square;
  }
  return shapeToRender
};

module.exports = { checkShape };
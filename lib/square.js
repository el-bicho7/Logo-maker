const Shape = require("./shape");

class Square extends Shape {
  constructor(shapeForm, shapeColor){
    super(shapeForm, shapeColor);
  }
  render(){
    return `<rect x="50" y="10" width="180" height="180" fill="${this.shapeColor}"/>`
  }

  setColor(color){
    this.shapeColor = color;
  }
}

module.exports = Square;
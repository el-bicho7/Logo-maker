const Shape = require("./shape");

class Triangle extends Shape {
  constructor(shapeForm, shapeColor){
    super(shapeForm, shapeColor);
  }

  render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
  }

  setColor(color){
    this.shapeColor = color;
  }
}

module.exports = Triangle;
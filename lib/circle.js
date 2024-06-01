const Shape = require("./shape");

class Circle extends Shape {
  constructor(shapeForm, shapeColor){
    super(shapeForm, shapeColor);
  }

  render(){
    return `<circle cx="150" cy="125" r="60" text-anchor="middle" fill="${this.shapeColor}"/>`
  }

  setColor(color){
    this.shapeColor = color;
  }
}

module.exports = Circle;

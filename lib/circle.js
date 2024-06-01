const Shapes = require("./shapes");

class Circle extends Shapes {
  constructor(shapeForm, shapeColor){
    super(shapeForm, shapeColor);
  }
  render() {
    return `${this.setColor(this.shapeColor)}`
  }

  setColor(color){
    return `<circle cx="150" cy="100" r="90" fill="${color}"/>`
  }

}

module.exports = Circle;

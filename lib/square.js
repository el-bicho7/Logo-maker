const Shapes = require("./shapes")

class Square extends Shapes{
  constructor(shapeForm, shapeColor){
    super(shapeForm, shapeColor);
  }
  render() {
    return `${this.setColor(this.shapeColor)}`
  }

  setColor(color){
    return `<rect x="50" y="10" width="180" height="180" fill="${color}"/>`
  }
}

module.exports = Square;
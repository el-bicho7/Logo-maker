const Shapes = require("./shapes");

class Circle extends Shapes {
  constructor(char, textColor, shapeForm, shapeColor){
    super(char, textColor, shapeForm, shapeColor);
  }
  render() {
    return `
    <svg height="100vh" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 300 200">
      ${this.setColor()}
      ${this.setText()}
    </svg>`
  }

  setColor(shapeColor){
    return `<circle cs="100" cy="100" r="80" fill="${shapeColor}"/>`
  }

  setText(){
    return `<text x="150" y="120" font-family="Arial" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.char}</text>`
  }
}

module.exports = Circle;

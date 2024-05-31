const Shapes = require("./shapes")

class Square extends Shapes{
  constructor(char, textColor, shapeForm, shapeColor){
    super(char, textColor, shapeForm, shapeColor);
  }
  render() {
    return `
    <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}"/>
      <text x="100" y="110" font-family="Arial" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.char}</text>
    </svg>`
  }
}

module.exports = Square;
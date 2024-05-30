const Shapes = require("./shapes")

class Square extends Shapes{
  render() {
    return `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}"/>
    <text x="100" y="110" font-family="Arial" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.textInput}</text>`
  }
}

module.exports = Square;
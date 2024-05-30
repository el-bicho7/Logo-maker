const Shapes = require("./shapes");

class Triangle extends Shapes {
  render() {
    return `<polygon points="100,20 40,180 160,180" fill="${this.shapeColor}">
    <text x="100" y="120" font-family="Arial" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.textInput}</text>`
  }
}

module.exports = Triangle;
const Shapes = require("./shapes");

class Circle extends Shapes {
  render() {
    return `<circle cs="100" cy="100" r="80" fill="${this.shapeColor}"/>
    <text x="100" y="105" font-family="Arial" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.textInput}</text>`
  }
}

module.exports = Circle;

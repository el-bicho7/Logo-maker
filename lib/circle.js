const Shapes = require("./shapes");

class Circle extends Shapes {
  constructor(char, textColor, shapeForm, shapeColor){
    super(char, textColor, shapeForm, shapeColor);
  }
  render() {
    return `
    <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
      <circle cs="100" cy="100" r="80" fill="${this.shapeColor}"/>
      <text x="100" y="105" font-family="Arial" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.char}</text>
    </svg>`
  }

  set setColor(color){
    this.shapecolor = color;
  }
}

module.exports = Circle;

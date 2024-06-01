const Shapes = require("./shapes");

class Triangle extends Shapes {
  constructor(shapeForm, shapeColor){
    super(shapeForm, shapeColor);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.setColor(this.shapeColor)}"/>`
  }

  setColor(color){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>`
  }
 
};


module.exports = Triangle;
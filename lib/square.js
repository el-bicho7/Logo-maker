class Square {
  constructor(shapeForm, shapeColor){
    this.shapeForm = shapeForm;
    this.shapeColor = shapeColor;
  }

  render(){
    return `<rect x="50" y="10" width="180" height="180" fill="${this.shapeColor}"/>`
  }

  setColor(color){
    this.shapeColor = color;
  }
}

module.exports = Square;
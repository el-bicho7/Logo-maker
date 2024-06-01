class Circle {
  constructor(shapeForm, shapeColor){
    this.shapeForm = shapeForm;
    this.shapeColor = shapeColor;
  }

  render(){
    return `<circle cx="150" cy="100" r="90" fill="${this.shapeColor}"/>`
  }

  setColor(color){
    this.shapeColor = color;
  }
}

module.exports = Circle;

class Triangle {
  constructor(shapeForm, shapeColor){
    this.shapeForm = shapeForm;
    this.shapeColor = shapeColor;
  }

  render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
  }

  setColor(color){
    this.shapeColor = color;
  }
}

module.exports = Triangle;
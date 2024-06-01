class Text{
  constructor(characters, textColor){
    if (characters.length > 3){
      throw new Error('Characters must be 3 characters long.')
    }

    this.characters = characters;
    this.textColor = textColor;
  }

  render(){
    return `${this.setText(this.textColor, this.characters)}`
  }

  setText(textColor, characters){
    return `<text x="150" y="120" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle">${characters}</text>`
  }
}

module.exports = Text;
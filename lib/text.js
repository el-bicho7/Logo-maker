class Text{
  constructor(characters, textColor){
    if (characters.length > 3){
      throw new Error('Characters must be 3 characters long.')
    }

    this.characters = characters;
    this.textColor = textColor;
  }

  render(){
    return `<text x="150" y="120" font-family="Arial" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.characters}</text>`
  }

  setText(characters){
    this.characters = characters;
  }
  
  setColor(textColor){
    this.textColor = textColor; 
  }
}

module.exports = Text;
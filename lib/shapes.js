const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');


class Shapes {
  constructor(char, textColor, shapeForm, shapeColor){
    this.char = char;
    this.textColor = textColor;
    this.shapeForm = shapeForm;
    this.shapeColor = shapeColor;
  }
  
  run(){
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'textInput',
          message: 'Enter three characters'
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Text Color'
        },
        {
          type: 'list',
          name: 'selectShape',
          message: 'Enter shape',
          choices: ['circle', 'triangle', 'square']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: "Shape's color",
        }
      ])
      .then(()=> {
        chooseClass(selectShape);
      })
      .catch((err)=> {
        console.log(err);
        console.log('Something went wrong')
      })
  } 
};






module.exports = Shapes;
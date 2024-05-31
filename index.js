const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./lib/document.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');


inquirer
  .prompt([ 
  {
    type: 'input',
    name: 'char',
    message: 'Enter three characters'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Text Color'
  },
  {
    type: 'list',
    name: 'shapeForm',
    message: 'Enter shape',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: "Shape's color",
  }
  ])
  .then(({char, textColor, shapeForm, shapeColor})=> {
    let shape = ''
    if (shapeForm === 'circle'){
      shape = new Circle(char, textColor, shapeForm, shapeColor);
    } else if (shapeForm === 'triangle'){
      shape = new Triangle(char, textColor, shapeForm, shapeColor);
    } else {
      shape = new Square(char, textColor, shapeForm, shapeColor);
    }

    return writeFile(join(__dirname,'examples', 'task.html'), createDocument(shape.render()) );
  })
  .catch((err)=> {
    console.log(err);
    console.log('Something went wrong')
})
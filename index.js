const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./lib/document.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const Text = require('./lib/text.js');


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
      shape = new Circle(shapeForm, shapeColor);
    } else if (shapeForm === 'triangle'){
      shape = new Triangle(shapeForm, shapeColor);
    } else {
      shape = new Square(shapeForm, shapeColor);
    }

    let text = new Text(char, textColor);
    console.log(shape.setColor('gray'))
    return writeFile(join(__dirname,'examples', 'task.html'), createDocument(shape.render(), text.render()) );
  })
  .catch((err)=> {
    console.log(err);
    console.log('Something went wrong')
})
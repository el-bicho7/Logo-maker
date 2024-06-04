// Require the inquirer npm so the user can input whats required
const inquirer = require('inquirer');
// Require join, writeFile, and createDocument, fot the SVG file creation
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./lib/document.js');
// Require the Circle, Triangle, Square, and Text classes
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
    // This checks for the shapeForm and creates a class depending on the shapeForm selected
    let shape = ''
    if (shapeForm === 'circle'){
      shape = new Circle(shapeForm, shapeColor);
    } else if (shapeForm === 'triangle'){
      shape = new Triangle(shapeForm, shapeColor);
    } else {
      shape = new Square(shapeForm, shapeColor);
    }
    // This returns the Text using the text class
    let text = new Text(char, textColor);
    // This writes the file in the examples folder. 
    return writeFile(join(__dirname,'examples', 'logo.svg'), createDocument(shape.render(), text.render()) );
  })
  .then(()=>{
    // Then returns "Generated logo.svg" after it succesfully creates the logo.svg file
    console.log("Generated logo.svg");
  })
  .catch((err)=> {
    // If there's an error it will console it to see what's happening
    console.log(err);
    console.log('Something went wrong')
})
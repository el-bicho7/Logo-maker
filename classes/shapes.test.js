const Circle = require("../lib/circle");
const Square = require("../lib/square");
const Triangle = require("../lib/triangle")
const Test = require('../lib/text')

describe('Triangle', () => {
  describe('setColor', () =>{
    it('should change the color of the shape', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>')
    })
  })
})

describe('Circle', () => {
  describe('setColor', () =>{
    it('should change the color of the shape', () => {
      const shape = new Circle();
      shape.setColor('blue');
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="blue"/>')
    })
  })
})

describe('Square', () => {
  describe('setColor', () =>{
    it('should change the color of the shape', () => {
      const shape = new Square();
      shape.setColor('blue');
      expect(shape.render()).toEqual('<rect x="50" y="10" width="180" height="180" fill="blue"/>')
    })
  })
})


describe('Text', () => {
  describe('setText', () =>{
    it('should change the text color and the text', () => {
      const shape = new Text();
      shape.setText('green', 'WIN');
      expect(shape.render()).toEqual('<text x="150" y="120" font-family="Arial" font-size="24" fill="green" text-anchor="middle">WIN</text>')
    })
  })
})

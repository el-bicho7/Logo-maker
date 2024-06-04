// require the shapes classes.
const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle")

// This should check the color of the shape, if it can change for each shape.
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
      expect(shape.render()).toEqual('<circle cx="150" cy="125" r="60" text-anchor="middle" fill="blue"/>')
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

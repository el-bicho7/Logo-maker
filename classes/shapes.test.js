const Triangle = require("../lib/triangle")

describe('Triangle', () => {
  describe('setColor', () =>{
    it('should change the color of the shape', () => {
      const shape = new Triangle();
      shape.shapeColor='blue';
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    })
  })
})
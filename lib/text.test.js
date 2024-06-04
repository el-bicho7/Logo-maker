// Require the Text class
const Text = require('./text');

// This should test if the length of the text is bigger than 3 characters.
describe('Text', () => {
  describe('Text length', () =>{
    it('should throw an error if the length of the text is more than 3', () => {
      const cb = () => new Text('WINS', 'green');
      const err = new Error('Characters must be 3 characters long.');
      expect(cb).toThrowError(err);
    })
  })
});

// This should check if it changes the text color
describe('Text', () => {
  describe('Text color', () =>{
    it('should change the text color', () => {
      const textTest = new Text('WIN', 'blue');
      const err = '<text x="150" y="120" font-family="Arial" font-size="24" fill="green" text-anchor="middle">WIN</text>';
      textTest.setColor('green')
      expect(textTest.render()).toEqual(err);
    })
  })
});

// This should change the text content (still checking if it's 3 characters long)
describe('Text', () => {
  describe('Text content', () =>{
    it('should change the text content', () => {
      const textTest = new Text('YES', 'blue');
      const err = '<text x="150" y="120" font-family="Arial" font-size="24" fill="blue" text-anchor="middle">WIN</text>';
      textTest.setText('WIN')
      expect(textTest.render()).toEqual(err);
    })
  })
});


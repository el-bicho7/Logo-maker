const Text = require('./text');

describe('Text', () => {
  describe('setText', () =>{
    it('should change the text color and the text', () => {
      const text = new Text();
      text.setText('WIN', 'green');
      expect(text.render()).toEqual('<text x="150" y="120" font-family="Arial" font-size="24" fill="green" text-anchor="middle">WIN</text>')
    })
  })
})

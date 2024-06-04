// This will create the SVG file, with the shape and the selected text

function createDocument(shape, text){
  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape} 
    ${text}
  </svg>
  `
}

module.exports = { createDocument };
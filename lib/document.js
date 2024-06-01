function createDocument(shape, text){
  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape} 
    ${text}
  </svg>
  `
}

module.exports = { createDocument };
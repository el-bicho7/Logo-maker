function createDocument(shape, text){
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iteration</title>
    <link rel="stylesheet" href="../dist/style.css">
  </head>
  
  <body>
    <div class="container">
      <svg height="100vh" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 300 200">
        ${shape} 
        ${text}
      </svg>
      </div>
  </body>
  </html>
  `
}

module.exports = { createDocument };
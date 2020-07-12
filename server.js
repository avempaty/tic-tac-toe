const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
    
nextApp.prepare()
.then(() => {
  const server = express()
  
  // last: bc it's the fallback for any other requests
  //default to connect to nextApp if it can't find 
  //other requests
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((err) => {
  console.error(err)
  process.exit(1)
})

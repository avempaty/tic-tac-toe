const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

import boardTable from "./db/board.js"
    
nextApp.prepare()
.then(() => {
  const server = express()

  // server.post('*', (req, res) => {
  //   console.log('post')
  //   res.status(200)
  //   res.end('post!')
  // })
  // server.get('*', (req, res) => {
  //   console.log('get')
  //   res.status(200)
  //   res.end('get!')
  // })
  // server.put('*', (req, res) => {
  //   console.log('put')
  //   res.status(200)
  //   res.end('put!')
  // })
  // server.delete('*', (req, res) => {
  //   console.log('delete')
  //   res.status(200)
  //   res.end('delete!')
  // })
  // server.options('*', (req, res) => {
  //   console.log('options')
  //   res.status(200)
  //   res.end('options!')
  // })

  // server.patch('*', (req, res) => {
  //   console.log('patch')
  //   res.status(200)
  //   res.end('patch!')
  // })
  
  server.post("/boards", async (req, res) => {
    try {
      const board = await boardTable.create()
      res.status(201)
      console.log(board)
      res.json(board)
    }
    catch(err) {
      console.error(err)
      res.status(err.status || 500)
      res.json({
        message: err.message
      })
    }
  })


  server.patch("/boards/:boardId/box/:boxId", async (req, res) => {
    try {
      console.log('helloooooo')
      const box = await boardTable.updateBoxById(req.params.boardId, req.params.boxId)
      res.status(200)
      console.log(box)
      res.json(box)
    }
    catch(err) {
      console.error('BOX ID ERROR', err)
      res.status(err.status || 500)
      res.json({
        message: err.message
      })
    }
  })

  // last: bc it's the fallback for any other requests
  // default to connect to nextApp if it can't find 
  // other requests
  server.get('*', (req, res) => {
    console.log('damn')
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

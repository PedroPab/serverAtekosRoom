import express from 'express'

const expressJson = (app) => {
  app.use(express.json())
}

export default expressJson
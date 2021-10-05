import express from 'express'
import { routes } from './routes/index.routes'

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3321, () => {
  console.log('server listenning.')
})
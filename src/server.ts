import Express from 'express'
import bodyParser from 'body-parser'
import { connectDb } from './mongooseSetup'
import BillsRouter from './BillsRouter'
require('dotenv').config()

const port = process.env.PORT || 3001
const server: Express.Application = Express()

server.use(function(req, res, next) {
    // TODO: Configure
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

server.use(bodyParser.json())
server.use(Express.urlencoded({ extended: true }))

server.get('/', (req: Express.Request, res: Express.Response) => {
    res
        .status(200)
        .send("howdy this is the server")
})

server.use('/bills', BillsRouter)

connectDb().then(async () => {
    server.listen(port, () => console.log(`the server is listening on port ${port}`))
})
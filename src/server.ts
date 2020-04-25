import Express from 'express'
import bodyParser from 'body-parser'
import models, { connectDb } from './mongooseSetup'
import BillsRouter from './BillsRouter'

const port = process.env.PORT || 3000
const server: Express.Application = Express()

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
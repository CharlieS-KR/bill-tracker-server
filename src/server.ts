import Express from 'express'

const port = process.env.PORT || 3000
const server: Express.Application = Express()

server.get('/', (req: Express.Request, res: Express.Response) => {
    res
        .status(200)
        .send("howdy this is the server")
})

// get all bills
server.get(`/bills`, (req, res) => {
    res.send('here we send all bills')
})

// get a single bill
server.get(`/bills/:billId`, (req, res) => {
    const { billId } = req.params
    res.send(`here we send the bill number ${billId}`)
})

// add a bill
server.post('/add-bill', (req, res) => {
    res.send('here we add a bill')
})

// update a bill
server.put('/update-bill/:billId', (req, res) => {
    const { billId } = req.params
    res.send('here we update a bill')
})

// delete a bill
server.delete('/delete-bill/:billId', (req, res) => {
    const { billId } = req.params
    res.send('here we delete a bill')
})

server.listen(port, () => console.log(`the server is listening on port ${port}`))
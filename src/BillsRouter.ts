import express from 'express'

const BillsRouter = express.Router()

// get all bills
BillsRouter.get(`/`, (req, res) => {
    res.send('here we send all bills')
})

// get a single bill
BillsRouter.get(`/:billId`, (req, res) => {
    const { billId } = req.params
    res.send(`here we send the bill number ${billId}`)
})

// add a bill
BillsRouter.post('/add-bill', (req, res) => {
    res.send('here we add a bill')
})

// update a bill
BillsRouter.put('/update-bill/:billId', (req, res) => {
    const { billId } = req.params
    res.send('here we update a bill')
})

// delete a bill
BillsRouter.delete('/delete-bill/:billId', (req, res) => {
    const { billId } = req.params
    res.send('here we delete a bill')
})

export default BillsRouter
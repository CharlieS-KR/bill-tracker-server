import express from 'express'
import { IBill } from './constants'
import Bill from './bill'
const BillsRouter = express.Router()

// get all bills
BillsRouter.get(`/`, async (req, res) => {
    const bills = await Bill.find()
    bills.length
        ? res.send(bills)
        : res.status(404).send(`We couldn't find any bills!`)
})

// get a single bill
BillsRouter.get(`/:billId`, async (req, res) => {
    const { billId } = req.params
    const foundBill = await Bill.findById(billId)
    foundBill
        ? res.send(foundBill)
        : res.status(404).send(`We couldn't find a bill with that ID!`)
})

// add a bill
BillsRouter.post('/add-bill', (req, res) => {
    const data: IBill = req.body.data
    const newBill = new Bill(data)
    newBill.save()
        .then(response => res.status(201).send(`Saved ${response._id}`))
        .catch(err => res.status(400).send('There was an error saving the bill'))
})

// update a bill
BillsRouter.put('/:billId', async (req, res) => {
    const { billId } = req.params
    const data: IBill = req.body.data
    const billToUpdate = await Bill.findById(billId)
    if (billToUpdate) {
        await billToUpdate?.updateOne(data)
        const updatedBill = await Bill.findById(billId)
        res.send(updatedBill)
    } else {
        res.status(404).send(`Couldn't find a bill with that ID`)
    }
})

// delete a bill
BillsRouter.delete('/:billId', (req, res) => {
    const { billId } = req.params
    res.send('here we delete a bill')
})

export default BillsRouter
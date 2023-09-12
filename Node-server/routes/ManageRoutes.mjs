import express from "express"
import ManageMonthModel from "../models/ManageMonth.mjs"
import ManageTodayModel from "../models/ManageToday.mjs"

const router = express.Router()

router.get("/month", async (req, res) => {
    const ManageMonthes = await ManageMonthModel.find({})
    try {
        res.send(ManageMonthes)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.post("/month", async (req, res) => {
    const ManageMonth = new ManageMonthModel(req.body)
    try {
        await ManageMonth.save()
        res.send(ManageMonth)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.get("/today", async (req, res) => {
    const ManageTodays = await ManageTodayModel.find({})
    try {
        res.send(ManageTodays)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.post("/today", async (req, res) => {
    const ManageToday = new ManageTodayModel(req.body)
    try {
        await ManageToday.save()
        res.send(ManageToday)
    } catch(err) {
        res.status(500).send(err)
    }
})

export default router
import mongoose from "mongoose"

const ManageMonthSchema = new mongoose.Schema({
    date: {
        type: String,
    },
    completedNumber: {
        type: Number,
    }
})

const ManageMonthModel = mongoose.model("ManageMonthModel", ManageMonthSchema)
export default ManageMonthModel
import express from "express"
import Manage from "./routes/Manage.mjs"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/manage", Manage)

app.listen(3000, () => {
    console.log("サーバーが起動しました")
})

mongoose.connect("mongodb://160.16.222.38:27017")
.then(() => console.log("データベースに接続しました"))
.catch((err) => console.log(err))
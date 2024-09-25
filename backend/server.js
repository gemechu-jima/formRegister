import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"

import registerFormRoutes from "./src/routes/registerFormRoutes.js";
import authRoutes from "./src/routes/authRoutes.js"
import { connect } from "./src/config/mongoDB.js";
// import { connection } from "./src/config/mysqlDB.js";
dotenv.config()


const app= express()
const port=process.env.PORT
const ip=process.env.IP

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api/users", registerFormRoutes)
app.use("/api/auth", authRoutes)

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})
import express from "express"
import cors from 'cors'
import { reportRouter } from "./Routes/ReportRoutes.js";

const app = express();
app.use(cors())
app.use(express.json())
app.use('/progresstracker', reportRouter)


app.listen(3000, ()=> {
    console.log("Server is running")
})
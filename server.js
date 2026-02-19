const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const connectDB = require('./config/db')
const fileRouter = require("./routes/fileUploadRoute")

connectDB()

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/files', fileRouter)

app.listen(PORT, () => {console.log(`Server running on ${PORT}`)})
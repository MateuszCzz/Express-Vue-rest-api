const express = require('express')
const PORT = 3000
const app = express()
const routes = require('./routes/api/notes')

// origin: only requests from there are allowed
var corsOptions = {
    origin: "http://localhost:5173"
};

// const bodyParserer = require('body-parser')
// for application/json
app.use(express.json())
// for application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
const cors = require('cors')
app.use(cors(corsOptions))
app.use(routes)

const db = require("./models")
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database")
    })
    .catch(err => {
        console.log(err)
        process.exit()
    })


app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`))
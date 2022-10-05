const express = require('express')
const doentv = require('dotenv')
const connectToMongo = require('./db')
const app = express()
doentv.config({ path: './config.env' })
connectToMongo()
const cors = require('cors')
// Middleware
app.use(express.json());
app.use(cors())

//routers
app.use('/',require('./routes/user'))
//listening
const port = process.env.PORT
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})



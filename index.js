require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

const personsAPI = require('./api/Persons')
const errorMiddleware = require('./middleware/error')

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001

morgan.token('myToken', function (req) {
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :response-time ms :myToken'))

app.use('/api/persons', personsAPI)

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const express = require('express')
const cors = require('cors')

const app = express()

const UserRoutes = require('./src/routes/UserRoutes')
const PetRoutes = require('./src/routes/PetRoutes')

// Config JSON response
app.use(express.json())

// Solve CORS

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

// Public folder
app.use(express.static('public'))

// Routes

app.use('/users', UserRoutes)
app.use('/pets', PetRoutes)

app.listen(5000)
const express = require('express')
const PORT = process.env.PORT || 8000
const server = express()
const cors = require('cors')
const connectDatabase = require('./src/config/database')
const messageRoute = require('./src/routes/messageRoute')

connectDatabase()
// server.use(cors({
//     origin: [
//         "http://localhost:3000",
//         "https://localhost:3000",
//         "https://website-company-zeta.vercel.app"
//     ]
// }))
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api/messages', messageRoute)

server.use('/', (req, res) => {
    res.send('LIVE SERVER')
})

server.listen(PORT, () => console.log(`LISTEN TO THE SERVER ${PORT}`))
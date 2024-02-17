const express = require('express')
const router = express.Router()

const { createMessage } = require('../controllers/messageController')

router.post('/create', createMessage)

module.exports = router
const express = require('express')
const router = express.Router()

const { 
    createMessage, 
    getAllMessages 
} = require('../controllers/messageController')

router.post('/create', createMessage)
router.get('/all', getAllMessages )

module.exports = router
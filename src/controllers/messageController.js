const Message = require('../models/message')

const createMessage = async(req, res) => {
    try {
        const message = await Message.create(req.body)
        res.status(201).json(message)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { createMessage }
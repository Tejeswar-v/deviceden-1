const express = require('express');
const router = express.Router();
const User = require('../models/User');
router.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({}, 'username email mobile');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
});

// Route to delete a user
router.delete('/api/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }
});

module.exports = router;

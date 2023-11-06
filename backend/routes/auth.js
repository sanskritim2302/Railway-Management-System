const express = require('express');
const User = require('../model/User');
const router = express.Router();

router.post('/', async (req, res) => {
    // let body ={
    //     "name":"rashmi",
    // "email":"rash@gmail.com",
    // "password":"1234"
    // };
    console.log(req.body)
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save user' });
  }
});
module.exports = router;
const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { addUser } = require('../services/userService');
const User = require('../db/schemat/userSchema');

router.route('/').post(async (req, res) => {
  // destructuring data from req.body:
  const { username, password, email } = req.body;

  try {
    //Check if user exists - Siirretään serviceen kun tehty siellä!
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists!' });
    }

    await addUser({ username, password, email });

    res.status(201).json({ success: true });

    //   const payload = {
    //     user: {
    //       id: user.id
    //     }
    //   };

    //   jwt.sign(
    //     payload,
    //     config.secret,
    //     {
    //       expiresIn: 3600
    //     },
    //     (err, token) => {
    //       if (err) {
    //         throw err;
    //       }
    //       res.json({ token });
    //     }
    //   );
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});
// Users (_id, email unique, password, username unique)

module.exports = router;

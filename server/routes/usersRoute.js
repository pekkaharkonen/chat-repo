const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../db/schemat/userSchema');
const userService = require("../services/userService")

router.get("/", async (req, res) => {
    res.json(await userService.getUsers())
})

router.route('/').post(async (req, res) => {
  // destructuring data from req.body:
  const { username, password, email } = req.body;

  try {
    //Check if user exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists!' });
    }

    // Creating new user with the Mongoose schema
    user = new User({
      username,
      password,
      email
    });
    //Encrypt password

    //Generating salt with recommended strength
    const salt = await bcrypt.genSalt(10);

    //Hash password - generate hash and replace the password with the hashed password in user object

    user.password = await bcrypt.hash(password, salt);

    //Save the user to DB:
    await user.save();

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

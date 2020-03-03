const { Router } = require('express');
const router = Router();

router.route('/').post(async (req, res) => {
  // destructuring data from req.body:
  const { username, password, email } = req.body;
});

// Users (_id, email unique, password, username unique)

module.exports = router;

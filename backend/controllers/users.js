// backend/controllers/userController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log("username", username, email, password)
  try {
    // const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.getUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findAll({});
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  };
  

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.json({ id: user.id, username: user.username, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

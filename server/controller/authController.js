const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');
const { promisify } = require('util');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

const login = async (req, res, next) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName }).select('+password');

  if (!user) {
    res.status(406).json({
      status: 'Success',
      message: 'Please enter correct username and password',
    });
    return;
  }
  const correctPassword = await user.comparePassword(password, user.password);

  const token = signToken(user._id);

  if (correctPassword) {
    user.password = undefined;
    res.status(201).json({
      status: 'Success',
      token,
      data: user,
    });
  } else {
    res.status(401).json({
      status: 'Success',
      message: 'Please enter correct username and password',
    });
  }
};
const signup = async (req, res, next) => {
  const { userName, password } = req.body;

  const user = await User.create({ userName, password });

  if (!user) {
    res
      .status(406)
      .json({ status: 'Error', message: 'Please enter username and password' });
    return;
  }
  const token = signToken(user._id);

  user.password = undefined;
  res.status(200).json({ status: 'Success', token, data: user });
};

const protect = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer')
  ) {
    res
      .status(401)
      .json({ status: 'Error', message: 'You are not authorized' });
    return;
  }

  if (!token) {
    res.status(401).json({ status: 'Error', message: 'You are not logged in' });
    return;
  }

  const token = req.headers.authorization.split(' ')[1];

  const decoded = await promisify(jwt.verify)(token, process.env.SECRET_KEY);

  const user = await User.findById(decoded.id);

  if (!user) {
    res
      .status(401)
      .json({ status: 'Error', message: 'Token expired. Please login again' });
    return;
  }
  req.user = user;
  next();
};

module.exports = { login, signup, protect };

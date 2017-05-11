'use strict';

module.exports = {
  login: user
};

function user(req, res) {
  var userData = req.swagger.params.username.value;
  res.json(userData);
}


//this part will serve to signing up

const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const db = require("../db");

const router = new Router();

router.post("/signup", (req, res, next) => {
  console.log('signup dziala na backendzie')
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.pass, 10),
  };
  User.create(user)
    .then(user => {
      res.status(201).send(user);
    })
    .catch(next);
});

module.exports = router;
//-----------------------------------------------

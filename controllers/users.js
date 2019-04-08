const User = require('./models').User

module.exports = {
  create(req, res) {
    return User
      .create({
        email: req.body.email,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error))
  },
}

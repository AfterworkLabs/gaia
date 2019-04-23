const Profile = require('../db/models').Profile

module.exports = {
  create(req, res) {
    return Profile
      .create(req.body)
      .then(result => res.status(201).send(result))
      .catch(error => res.status(400).send(error))
  },
}

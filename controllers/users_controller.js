const User = require('../db/models').User

module.exports = {
  create(req, res) {
    console.log(req.body)
    return User
      .create(req.body)
      .then(result => res.status(201).send(result))
      .catch(error => res.status(400).send(error))
  },
  get_user_by_id(req, res) {
    id = req.params.id
    if (id) {
        return User.findOne({
          where: {
            id: id
          }
        })
        .then(result => res.status(201).send(result))
        .catch(error => res.status(400).send(error))
    }
  },
}

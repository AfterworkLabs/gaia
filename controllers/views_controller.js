const View = require('../db/models').View

module.exports = {
  create(req, res) {
    return View
      .create(req.body)
      .then(result => res.status(201).send(result))
      .catch(error => res.status(400).send(error))
  },
}

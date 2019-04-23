const Bookmark = require('../db/models').Bookmark

module.exports = {
  create(req, res) {
    user_id = req.body.user_id
    video_id = req.body.video_id

    if (user_id && video_id) {
      return Bookmark
        .create(req.body)
        .then(result => res.status(201).send(result))
        .catch(error => res.status(400).send(error))
    } else {
      res.status(400).send('Bad request')
    }
  },
}

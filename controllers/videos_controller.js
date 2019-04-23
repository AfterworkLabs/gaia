const Video = require('../db/models').Video;

module.exports = {
  create(req, res) {
    return Video
      .create(req.body)
      .then(result => res.status(201).send(result))
      .catch(error => res.status(400).send(error))
  },
  get_global_feed(req, res) {
    return Video.findAll({
      where: {
        status: 'approved',
        access_level: 'public'
      }
    })
    .then(result => {
      res.status(201).send(result)
    })
    .catch(error => {
      res.status(400).send(error)
    });
  }
}

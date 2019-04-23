const bookmarks = require('./bookmarks_router');
const likes = require('./likes_router');
const profiles = require('./profiles_router');
const users = require('./users_router');
const videos = require('./videos_router');
const views = require('./views_router');

module.exports = {
  bookmarks,
  likes,
  profiles,
  users,
  videos,
  views
};

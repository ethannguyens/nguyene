import Profile from '../database/profile';
let IG = require('instagram-node').instagram();
IG.use({access_token: Profile.instagram.accessToken});

class Instagram {
  static getRecent() {
    return new Promise((resolve, reject) => {
      IG.user_self_media_recent((err, medias, pagination, remaining, limit) => {
        if (!err) resolve(medias);
      });
    });
  }
}

export default Instagram;

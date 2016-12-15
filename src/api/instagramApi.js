import Profile from '../database/profile';
import {ajax} from '../api/ajax';

class InstagramApi {
  static getRecentPhotos() {
    return new Promise((resolve, reject) => {
      const defaultUrl = `https://api.instagram.com/v1/users/39384470/media/recent?access_token=${Profile.instagram.accessToken}`;

      ajax(defaultUrl, (photos) => {
        resolve(photos);
      });
    });
  }
}

export default InstagramApi;

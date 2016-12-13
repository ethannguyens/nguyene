const Profile = {
  instagram: {
    clientId: '652628113c97413bbb45bb16423d4c10',
    clientSecret: '30bffd20ecdd41d694582c8822a50752'
  },
  mongo: {
    uri: process.env.MONGOLAB_URI || 'mongodb://ethannguyens:Eth@N240991@ds133438.mlab.com:33438/heroku_5wbk6xft'
  }
};

export default Profile;

const mobileOS = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) return 'iOS';
  else if (userAgent.match(/Android/i)) return 'Android';
  else return 'unknown';
};

const mobileDevice = () => {
  if (navigator.userAgent.match(/iPad|webOS|iPhone|iPod|Blackberry/i)) return true;
  else return false;
};

module.exports = {
  mobileOS: mobileOS,
  mobileDevice: mobileDevice
};



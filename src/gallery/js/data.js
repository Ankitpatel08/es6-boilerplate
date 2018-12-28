import util from '../../common/js/services';

exports.getGalleryData = function getGallery(
  urlDomain,
  successCallback,
  errorCallback
) {
  let url = urlDomain ? urlDomain : '/gallery/data/data.json';

  util.request(
    url,
    function(xhr) {
      successCallback && successCallback(xhr.responseText);
    },
    function(xhr) {
      console.log('error callback', xhr.status, errorCallback);
      errorCallback && errorCallback(xhr.responseText);
    }
  );
};

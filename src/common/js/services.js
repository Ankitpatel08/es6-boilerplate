/**
 * to fetch data from backend in json format.
 * import this function or file as an object and call method using object.function(). e.g. data.request()
 * @param {*} url URL to get response
 * @param {*} successCb success call back If status is OK
 * @param {*} errorCb error callback if status is one of the errors
 */
exports.request = function makeRequest(url, successCb, errorCb) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    const DONE = 4, // readyState 4 means the request is done.
      OK = 200; // status 200 is a successful return.

    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        successCb && successCb(xhr);
      } else {
        errorCb && errorCb(xhr);
      }
    }
  };

  xhr.send(null);
};

/**
 * to post data to store in database/CMS
 * import this function or file as an object and call method using object.function(). e.g. data.post()
 * @param {*} url URL to post data
 * @param {*} data request payload
 * @param {*} successCb success call back If status is OK
 * @param {*} errorCb error callback if status is one of the errors
 */
exports.post = function postResponse(url, data, successCb, errorCb) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
    const DONE = 4, // readyState 4 means the request is done.
      OK = 200; // status 200 is a successful return.

    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        successCb && successCb(xhr);
      } else {
        errorCb && errorCb(xhr);
      }
    }
  };

  xhr.send(data);
};

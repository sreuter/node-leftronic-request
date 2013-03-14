var request = require('request');

function LeftronicClient(apiKey) {
  this.apiUrl = 'https://www.leftronic.com/customSend';
  this.apiKey = apiKey;
};

LeftronicClient.prototype.sendData = function(data, cb) {
  data.accessKey = this.apiKey;
  var json = JSON.stringify(data);
  request.post('https://www.leftronic.com/customSend', {body: json}, cb);
}

LeftronicClient.prototype.sendClear = function(streamName, callback) {
  this.sendData({streamName: streamName, command: 'clear'}, callback);
};

exports.createClient = function(api_key) {
  var leftronic;
  leftronic = new LeftronicClient(api_key);
  return leftronic;
};
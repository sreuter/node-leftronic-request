# leftronic-request

## Description

Ultra-thin layer for the Leftronic Dashboard API based on request.

## Initialization

```javascript
var leftronic = require('leftronic-request').createClient('my_api_key');
```

## Usage

```javascript

var data = [{
  'streamName': 'world_map',
  'point': {
    'latitude': 31.821699142456055,
    'longitude': -82.62680053710938,
    'color': 'green'
  }
}

leftronic.sendData(data, function(err, result, body) {
  console.log(err || body);
  bombWorld();
});
```

See https://www.leftronic.com/api/#dataformats for more information on the Leftronic API.

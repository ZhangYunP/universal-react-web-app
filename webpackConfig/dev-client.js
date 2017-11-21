require('eventsource-polyfill');

const hotClient = require('webpack-hot-middleware/client?reload=true');

require('react-hot-loader/patch');

// hotClient.subscribe(function (event) {
//   if (event.action === 'reload') {
//     window.location.reload();
//   }
// });

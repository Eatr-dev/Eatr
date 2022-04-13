import regeneratorRuntime from 'regenerator-runtime';
import server from './Server/server.js'

export default () => {
  global.testServer = server;
}

// const regeneratorRuntime = require('regenerator-runtime');
// module.exports = () => {
//   global.testServer = server;
// };
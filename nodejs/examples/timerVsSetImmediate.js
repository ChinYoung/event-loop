const { createServer, request } = require('http')
const server = createServer()

server.on('request', (req, res) => {
  console.log('request incoming');
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  setImmediate(() => {
    console.log('setImmediate');
  }, 0);
  res.write('hello\n')
  res.end()
})

server.listen(5001, () => { console.log('server started'); })
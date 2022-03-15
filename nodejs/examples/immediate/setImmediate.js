const { createServer, request } = require('http')
const server = createServer()

const maxCall = 20
const trigger = 10
let current = 0
server.on('request', (req, res) => {
  console.log('request incoming', new Date().valueOf());
  if (current < maxCall) {
    callLocalhost()
  }
  if (current === trigger) {
    setTimeout(() => {
      console.log('timer');
    }, 0);
  }
  res.write('hello\n')
  res.end()
})

server.listen(5001, () => { console.log('server started'); })

function callLocalhost() {
  const req = request({ port: 5001 })
  req.end()
}
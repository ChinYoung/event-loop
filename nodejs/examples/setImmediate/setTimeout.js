const { createServer, request } = require('http')
const server = createServer()

const maxCall = 10
const trigger = 4
let current = 0
let printLog = true
server.on('request', (req, res) => {
  printLog && console.log('request incoming', current);
  if (current < maxCall) {
    current += 1
    callLocalhost()
  } else {
    current = 0
    printLog = true
  }
  if (current === trigger) {
    setTimeout(() => {
      printLog = false
      console.log('setTimeout');
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
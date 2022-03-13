const { createServer } = require('http')
const server = createServer()

let flag = false

function heavyCalculation() {
  const now = new Date().valueOf()
  while ((new Date().valueOf() - now) < 5000) {
    // calculate
  }
  console.log('heavy calculation end');
}

server.on('request', (req, res) => {
  console.log('request incoming', new Date().valueOf());
  if (!flag) {
    heavyCalculation()
    flag = true
  }
  res.write('hello\n')
  res.end()
})

server.listen(5001, () => { console.log('server started'); })
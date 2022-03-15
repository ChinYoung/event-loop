const { createServer } = require('http')
const server = createServer()

let flag = false

server.on('request', (req, res) => {
  console.log('request incoming', new Date().valueOf());
  if (!flag) {
    slicedCalculation()
    flag = true
  }
  res.write('hello\n')
  res.end()
})

server.listen(5001, () => { console.log('server started'); })

function slicedCalculation() {
  const start = new Date().valueOf()
  function sliceHandler(start, lastTime) {
    while ((new Date().valueOf() - lastTime) <= 50) {
      // calculate
    }
    const now = new Date().valueOf()
    const totalDuration = now - start
    if (totalDuration > 5000) {
      console.log('heavy calculation end');
      return
    } else {
      setTimeout(() => {
        sliceHandler(start, now)
      }, 0);
    }
  }
  sliceHandler(start)
}

(function () {
  return Promise.resolve().then(() => { console.log('promise callback'); })
})()

process.nextTick(() => { console.log('next tick'); })
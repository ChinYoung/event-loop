console.log('script');

// micro task, promise callback
Promise
  .resolve()
  .then(() => { console.log('promise callback A') })

// promise func and promise callback
new Promise(
  (resolve) => {
    console.log('promise func');
    resolve()
  })
  .then(() => {
    console.log('promise callback B');
  })


// micro task, nextTick
process.nextTick(() => { console.log('nextTick'); })

// task, timers
setTimeout(() => {
  console.log('setTimeout');
  return Promise.resolve().then(() => { console.log('promise callback C'); })
}, 0);

// task, setImmediate
setImmediate(() => {
  console.log('setImmediate');
})


console.log('script');

// micro task, promise callback
(function () {
  return Promise
    .resolve()
    .then(() => { console.log('promise callback A') })
})();

// promise func and promise callback
(function () {
  return new Promise(
    (resolve) => {
      console.log('promise func');
      resolve()
    })
    .then(() => {
      console.log('promise callback B');
    })
})();


// micro task, nextTick
(function () {
  process.nextTick(() => { console.log('nextTick'); })
})();

// task, timers
(function () {
  setTimeout(() => {
    console.log('setTimeout');
    return Promise.resolve().then(() => { console.log('promise callback C'); })
  }, 0);
})();

// task, setImmediate
(function () {
  setImmediate(() => {
    console.log('setImmediate');
  })
})();


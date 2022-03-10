console.log('script');

// micro task, promise callback
(function () {
  return Promise
    .resolve()
    .then(() => { console.log('promise callback A') })
})();

// promise
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

// task timers
(function () {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
})();

// task setImmediate
(function () {
  setImmediate(() => {
    console.log('setImmediate');
  })
})();


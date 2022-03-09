console.log('script');

// micro task
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


// micro task
(function () {
  process.nextTick(() => { console.log('nextTick'); })
})();

// task
(function () {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
})();

// task
(function () {
  setImmediate(() => {
    console.log('setImmediate');
  })
})();


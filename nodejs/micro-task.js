// task, timers
(function () {
  setTimeout(() => {
    console.log('setTimeout');
    process.nextTick(() => { console.log('next tick'); })
    process.nextTick(() => {
      console.log('next tick');
      process.nextTick(() => { console.log('next tick'); })
    })
  }, 0);
})();

// task, timers
(function () {
  setTimeout(() => {
    console.log('setTimeout');
    process.nextTick(() => { console.log('next tick'); })
  }, 0);
})();


(function () {
  return Promise.resolve().then(() => { console.log('promise callback'); })
})()

process.nextTick(() => { console.log('next tick'); })
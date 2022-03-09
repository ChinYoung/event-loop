(function () {
  setTimeout(() => {
    console.log('setTimeout');
    return Promise.resolve().then(() => {
      console.log('promise callback');
      process.nextTick(() => { console.log('nextTick'); })
    });
  }, 0);
})()

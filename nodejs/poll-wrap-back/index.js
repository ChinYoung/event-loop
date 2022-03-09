let endLoop = false;
let timeOutCounter = 0;
let promiseCounter = 0;

function createTimeout() {
  if (endLoop) {
    return
  }
  setTimeout(() => {
    timeOutCounter += 1;
    console.log('setTimeout:', timeOutCounter);
    createPromiseCallback()
  }, 0);
}

function createPromiseCallback() {
  return Promise.resolve().then(() => {
    promiseCounter += 1
    console.log('promise callback:', timeOutCounter);
    createTimeout()
  })
}

createTimeout();
createPromiseCallback();

(function () {
  setImmediate(() => {
    console.log('▶▶▶▶▶▶▶setImmediate');
    endLoop = true;
  });
})();
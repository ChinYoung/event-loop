function createPromiseMicrotask() {
  return Promise.resolve().then(() => {console.log('promise micro task');})
}

function createPromise() {
  return new Promise(
    resolve => {
      console.log('promise func');
      resolve()
    })
    .then(() => {
      console.log('promise callback');
      createPromiseMicrotask()
      createNextTick('promise callback')
    })
}

function createNextTick(source) {
  process.nextTick(() => {console.log('nextTick', source ? `created at ${source}` : '');})
}

function createSetImmediate(params) {
  setImmediate(() => {
    console.log('setImmediate, will enter next loop');
    createNextTick()
    // this will run in next loop
    createTimeout()
  })
}

function createTimeout() {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
}

console.log('script');
createPromiseMicrotask()
createPromise()
createNextTick()
createTimeout()
createSetImmediate()


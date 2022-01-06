function createPromiseMicrotask(id) {
  return Promise.resolve().then(() => {console.log('promise micro task', id || '');})
}

function createNextTick(id) {
  process.nextTick(() => {console.log('nextTick',id || '');})
}

function createAtTimeout() {
  setTimeout(() => {
    createPromiseMicrotask(1)
    createNextTick(2)
    createNextTick(3)
    createPromiseMicrotask(4)
    createNextTick(5)
  }, 0);
}

function createAtPromise() {
  return Promise.resolve().then(() => {
    console.log('promise callback');
    createPromiseMicrotask(1)
    createNextTick(2)
    createNextTick(3)
    createPromiseMicrotask(4)
    createNextTick(5)
  })
}

function createAtNextTick() {
  process.nextTick(() => {
    createPromiseMicrotask(1)
    createNextTick(2)
    createNextTick(3)
    createPromiseMicrotask(4)
    createNextTick(5)
  })
}

/*
  task created at macro task: start with nextTick
  task created at micro task: clear current queue, then execute the other queue
*/

// macro task
// createAtTimeout()

// micro task
// createAtPromise()
createAtNextTick()


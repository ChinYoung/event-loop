function createNextTick(id) {
  process.nextTick(() => {console.log('nextTick', id || '')})
}

function createSetImmediate(id) {
  setImmediate(() => {
    console.log('setImmediate, now enter next loop');
    // this will run in next loop
    createTimeout(id)
  })
}

function createTimeout(id) {
  setTimeout(() => {
    console.log('setTimeout', id || '');
    createNextTick(id)
  }, 0);
}

// the poll phase controls when timers are executed

console.log('script');
createTimeout(1)
createTimeout(2)
createTimeout(3)
createNextTick(4)
createSetImmediate(5)


// task, timers
setTimeout(() => {
  console.log('setTimeout A');
  process.nextTick(() => { console.log('next-tick'); })
  process.nextTick(() => {
    console.log('next next-tick');
    process.nextTick(() => { console.log('next next-tick'); })
  })
}, 0);

// task, timers
setTimeout(() => {
  console.log('setTimeout B');
  process.nextTick(() => { console.log('next-tick'); })
}, 0);

setImmediate(() => { console.log('setImmediate'); })

# eventloop的poll阶段

- 这是nodejs事件循环中最为重要的一个阶段, 在该阶段的执行情况有以下两种
  1. 如果进入该阶段时`poll`队列不为空， 将会执行队列中的任务直到队列为空， 或直到超出限制， 然后进入`check`阶段
  2. 如果队列为空, 又分为两种情况：
     1. 脚本中调用了`setImmediate`， 完成`poll`队列的执行后， 会立即结束`poll`阶段， 进入`check`阶段
     2. 脚本中没有调用`setImmediate`, 将会阻塞在此阶段， 等待新添加的`i/o`事件并执行
- 一旦`poll`队列为空, 事件循环就会检查是否有新增的计时器回调， 如果有的话就返回计时器阶段

class CircularQueue {
  constructor(buffer) {
    this.buffer = buffer;
    this.que = [...new Array(buffer)].fill(null);
    this.oldest = [];
  }

  trackOldest(index) {
    this.oldest.push(index)
  }
  
  enqueue(obj) {
    if(this.que.includes(null)) {
      for(let index = 0; index < this.que.length; index++) {
        if(this.que[index] === null) {
          this.que[index] = obj;
          this.trackOldest(index);
          break;
        }
      }
    } else {
      this.que[this.oldest[0]] = obj;
      this.trackOldest(this.oldest[0]);
      this.oldest.shift();
    }
  }

  dequeue() {
    if(this.que.filter(element => element !== null).length === 0) {
      return null;
    } else {  
      let old = this.que[this.oldest[0]];
      this.que[this.oldest[0]] = null;
      this.oldest.shift();
      return old;
    }
  }
}


let queue = new CircularQueue(3);

console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
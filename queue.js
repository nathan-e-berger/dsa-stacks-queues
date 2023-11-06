/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
      return;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.size += 1;
    return;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) throw new Error("thats illegal");

    let item = this.first.val;
    this.first.next = this.first;
    this.size -= 1;
    return item;
  }

  /** peek(): return the value of the first node in the queue. */
  //no test for if queue is empty

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true;
    return false;
  }
}

module.exports = Queue;

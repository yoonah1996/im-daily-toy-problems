/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = {};
  this.count = 0;
  // add an item to the top of the stack
  this.push = function(data){
    this.storage[this.count++] = data;
    // console.log(this.storage[this.count-1])
  }; 

  // remove an item from the top of the stack
  this.pop = function(){
    let deleteStorage = this.storage[this.count-1];
    delete this.storage[this.count-1];
    this.count--;
    return deleteStorage;
  };

  // return the number of items in the stack
  this.size = function(){
    return this.count;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(data){
    // TODO: implement `enqueue`
    inbox.push(data);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    while(inbox.size() !== 0){
      outbox.push(inbox.pop());
    }
    let popData = outbox.pop();

    while(outbox.size() !== 0){
      inbox.push(outbox.pop());
  }
    
    return popData;
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return inbox.size();
  };
};

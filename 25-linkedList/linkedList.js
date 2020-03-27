/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(data){
  if (this.head === null) {
    this.head = new this.makeNode(data);
    this.tail = this.head;
  } else {
    this.tail.next = new this.makeNode(data);
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.removeHead = function(){
  this.head = this.head.next;
  if(this.head === null) this.tail = this.head;
};

LinkedList.prototype.contains = function(data){
  if(this.head.value === data){
    return true;
  }
  while(this.head.next !== null){
    this.head = this.head.next;
    if(this.head.value === data){
      return true;
    }
  }
  return false;
};

LinkedList.prototype.makeNode = function(data){
  this.value = data;
  this.next = null;
};

/**
  *
  * Implement a `BFSelect` method on this Tree class.
  *
  * BFSelect accepts a filter function, calls that function on each of the nodes
  * in Breadth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 3, 5, 7]
  *
  *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value){
  this.value = value;
  this.children = [];
};



Tree.prototype.BFSelect = function(filter) {
  // return an array of values for which the function filter(value, depth) returns true
  let newArr = [];
  let newDepth = 0;
  let recurtion = function(trees, newDepth){
    //filter 함수에 value값과 깊이가 들어가 있어야 filter함수가 제대로 작동 
    //ex)만약 두번째 깊이에서의 값만 true로 반환하는 함수가 있으면 newArr에는 당연히 그 깊잉 대한 값만 저장된다.
    //즉, filter함수가 value값을 쓸지 아니면 depth를 쓸지 정해져 있음 우리는 넣어주기만 하면됨.
    if(filter(trees.value, newDepth) === true) {
      newArr.push(JSON.parse(JSON.stringify(trees.value)))
    }
    if(trees.children.length !== 0){
      for(let i=0; i<trees.children.length; i++){
        recurtion(trees.children[i], newDepth+1);
      }
    }
  }
  recurtion(this, newDepth)
  return newArr;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

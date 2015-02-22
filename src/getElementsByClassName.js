// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  function checkNodes(nodes){
    if(!nodes){ // stops the recursion. 
      return;
    } else if(nodes.classList === className){ // check at the top level
      results.push(nodes);
    } else { //recurse to check at the nested levels.
      for(var i = 0; i < nodes.length; i++){
        checkNodes(nodes[i]);
      }
    } 
  }
  var elements = document.body;
  var results = [];
  checkNodes(elements);
  return results;
};

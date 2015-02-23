// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  function checkNodes(nodes){
    var children = nodes.children;
    for(var i = 0; i < children.length; i++){
      if(children[i].classList.contains(className)){
        results.push(children[i]);
      }
      if(children[i].hasChildNodes()){
        checkNodes(children[i]);
      }
    }
  }
  
  var allNodes = document.body;
  var results = [];
  checkNodes(allNodes);
  return results;
};

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  function checkNodes(nodes){
    //Child nodes is more reliable than .children
    var children = nodes.childNodes; 
    for(var i = 0; i < children.length; i++){
      //nodeType of 1 is for ELEMENT_NODE.
      if(children[i].nodeType === 1){
         //classList is used because some elements have more than one class.
        if(children[i].classList.contains(className)){
          results.push(children[i]);
        }  
      }
      if(children[i].hasChildNodes()){
        checkNodes(children[i]);
      }
    }
  }
  
  var allNodes = document;
  var results = [];
  checkNodes(allNodes);
  return results;
};

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){

  var elements = document.body.childNodes;
  var results = [];
  // your code here
  function checkElements(elmnts){
    if(!elmnts){
      return;
    } else {
      for(var i = 0; i < elmnts.length; i++){
        if(elmnts[i].className === className){
          results.push(elmnts[i]);
        } else {
          checkElements(elmnts.childNodes);
        }
      }
    }
  }
  checkElements(elements);
  return results;
};

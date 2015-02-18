// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  switch(typeof obj){
  	case "number":
  		obj = obj.toString();
  	break;
  	case "string":
  		obj;
  	break;
  	case "boolean":
  		obj = obj.toString();
  	break;
  	case "object":
  		var temp ="";
  		if(Array.isArray(obj)){
  			temp = "[";
  			for(var i = 0; i < obj.length; i++){
  				if(i === obj.length - 1){
  					temp += stringifyJSON(obj[i]);
  				} else {
  					temp += stringifyJSON(obj[i]) + ",";
  				}
  			}
  			temp += "]";	
  		} else {
  			obj = "{";
  			for (var item in obj){

  			}
  		}
  		obj = temp;
  	break;
  	default:
  		obj = null;
  }
  return obj;
};

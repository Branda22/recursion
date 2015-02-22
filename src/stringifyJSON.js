// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) { return 'null'; }

  switch(typeof obj){
  	case "number":
  		obj = obj.toString();
  		break;
  	case "string":
  		obj = obj ? '"' + obj + '"' : null;
  		break;
  	case "boolean":
  		obj = obj.toString();
  		break;
  	case 'undefined':
  		obj = undefined;
  		break;
  	case "function":
		obj = undefined;
	break
  	case "object":
  		var temp ="";
  		if(Array.isArray(obj)){
  			temp = "[";
  			for(var i = 0; i < obj.length; i++){
  				var item = obj[i];
  				if(i === obj.length - 1){
  					temp += stringifyJSON(item);
  				} else {
  					temp += stringifyJSON(item) + ",";
  				}
  			}
  			temp += "]";	
  		} else {
  			//This is needed to find out what the last key is in order to not add a comma at the end.
  			var lengthKeys = Object.keys(obj).length;
  			var counter = 1;
  			temp = "{";
  			for (var key in obj){
  				// all keys are strings.
  				if (obj.hasOwnProperty(key)){
  					var value = obj[key];
  					// if the value is not stringifiable return "{}"
 					// this cant be done recursively because functions, and undefined alone have to return undefined.
	  				if(typeof value === 'function' || typeof value === 'undefined' ) { return "{}"; }
	  				if (counter === lengthKeys){
	  					temp += stringifyJSON(key) + ":" + stringifyJSON(value);
	  				} else {
	  					temp += stringifyJSON(key) + ":" + stringifyJSON(value) + ",";
	  				}
	  				counter++;
  				}
  			}
  			temp += "}";
  		}
  		obj = temp;
  	break;
  	default:
  		obj;
  }
  return obj;
};

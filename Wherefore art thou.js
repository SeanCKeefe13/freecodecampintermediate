//forEach loop and if statement

function whatIsInAName(collection, source) {
    const arr = [];
    const keys = Object.keys(source)
    // Only change code below this line
    collection.forEach(function(obj){
       if(keys.every(function(key){
        return obj.hasOwnProperty(key) && obj[key] === source[key]
      })){
        arr.push(obj);
      }
    })
  
    // Only change code above this line
    return arr;
  }

//for each and if statement refactored
function whatIsInAName(collection, source) {
    const arr = [];
    const keys = Object.keys(source);
    // Only change code below this line
    collection.forEach(obj=>{
       if(keys.every(key=>{
        return obj.hasOwnProperty(key) && obj[key] === source[key]
      })){
        arr.push(obj);
      }
    })
  
    // Only change code above this line
    return arr;
  }

  //filter

  function whatIsInAName(collection, source) {
    const arr = [];
    const keys = Object.keys(source);
    // Only change code below this line
    return collection.filter(function(obj){
       return keys.every(function(key){
        return obj.hasOwnProperty(key) && obj[key] === source[key]
       });
      });
    // Only change code above this line
  }

  //filter refactored
  function whatIsInAName(collection, source) {
    const arr = [];
    const keys = Object.keys(source);
    // Only change code below this line
    return collection.filter(obj=>{
       return keys.every(key=>{
        return obj.hasOwnProperty(key) && obj[key] === source[key]
       });
      });
    // Only change code above this line
  }


  //copied for freeCodeCamp for later understanding of reduce
  function whatIsInAName(collection, source) {
    const arr = [];
    const keys = Object.keys(source)
    // Only change code below this line
    return collection.filter(function(obj){
       return keys.map(function(key){
        return obj.hasOwnProperty(key) && obj[key] === source[key]
       }).reduce((a, b)=>{
         return a && b
       })
      })
    // Only change code above this line
  }
  


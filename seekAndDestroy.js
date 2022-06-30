// using argument object and filter
function destroyer(arr) {
    const argsToDestroy = [...arguments].slice(1);
    return arr.filter(function(val){ 
        return !argsToDestroy.includes(val)
    })
  };

// using arguments object and filter refactored
function destroyer(arr) {
    const argsToDestroy = [...arguments].slice(1);
    return arr.filter(val => !argsToDestroy.includes(val))
  }

//using arguments object, forEach loop to check if the value is included in argument
function destroyer(arr) {
    const finalArr = [];
    const argsToDestroy = [...arguments].slice(1)
    arr.forEach(function(val){
      if(!argsToDestroy.includes(val)){
        finalArr.push(val)
      }
    })
    return finalArr;
  }
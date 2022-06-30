function uniteUnique(arr) {
    const finalArr = [];
    Object.values(arguments).forEach(arg=>{
      arg.forEach(num=>{
        if(!finalArr.includes(num)){
          finalArr.push(num);
        }
      });
    });
    return finalArr;
  }

  function uniteUnique(...arr) {
      /*spread a new Set(which can only have unique elements) derived from the original array 
      flattened(Array.flat() reduces multi dimensional arrays into a single level array)*/
    return [...new Set(arr.flat())];
  }
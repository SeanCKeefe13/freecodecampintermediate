function diffArray(arr1, arr2) {
    const newArr = [];
    for(let num of arr1){
      if(!arr2.includes(num)){
        newArr.push(num)
        console.log(newArr)
      }
    }
      for(let num of arr2){
      if(!arr1.includes(num)){
        newArr.push(num)
        console.log(newArr)
      }
    }
    return newArr;
  }

  
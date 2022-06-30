function sumAll(arr) {
    let total = 0;
    arr.sort((a,b) => a - b);
    for(let i = arr[0]; i <= arr[1]; i++){
      total = total + i
      console.log(total)
    }
    return total;
  }


  
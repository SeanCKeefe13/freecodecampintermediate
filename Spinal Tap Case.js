function spinalCase(str) {
    const strArr = str.split(/\W+|(?=[A-Z])|_/g);
    console.log(strArr)
    return strArr.map(word=>{
      return word.charAt(0).
      toLowerCase() + 
      word.slice(1)
    }).join('-');
  }
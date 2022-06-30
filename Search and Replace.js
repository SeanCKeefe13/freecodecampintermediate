//solved with regex test
function myReplace(str, before, after) {
    const strArr = str.split(' ');
    const beforeIndex = strArr.indexOf(before);
    const capitalRegex = /^[A-Z]/
    
    if(capitalRegex.test(strArr[beforeIndex])){
      after = after.charAt(0).toUpperCase() +
       after.slice(1);
      strArr.splice(beforeIndex, 1, after );
      return strArr.join(' ');
    }
    strArr.splice(beforeIndex, 1, after.toLowerCase());
    return strArr.join(' ');
  }

//solved with comparison
  function myReplace(str, before, after) {
    const strArr = str.split(' ');
    const beforeIndex = strArr.indexOf(before);
    
    if(strArr[beforeIndex].charAt(0) === 
    strArr[beforeIndex].charAt(0).toUpperCase()){
      after = after.charAt(0).toUpperCase() +
       after.slice(1);
      strArr.splice(beforeIndex, 1, after );
      return strArr.join(' ');
    }
    strArr.splice(beforeIndex, 1, after.toLowerCase());
    return strArr.join(' ');
  }
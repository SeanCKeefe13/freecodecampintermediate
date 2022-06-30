function fearNotLetter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const testAlphabet = alphabet.splice(alphabet.indexOf(str[0]));
    for(let letter of testAlphabet){
      
      if(!str.includes(letter)){
        return letter;
      }
    }
    return undefined;
  }
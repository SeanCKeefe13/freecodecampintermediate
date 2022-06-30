//solved with if checks
function pairElement(str) {
    const strArr = str.split('');
    const dnaArr = [];
    for(let letter of strArr){
      if(letter === 'G'){
        dnaArr.push(['G', 'C']);
      }
      if(letter === 'C'){
        dnaArr.push(['C', 'G']);
      }
      if(letter === 'A'){
        dnaArr.push(['A', 'T']);
      }
      if(letter === 'T'){
        dnaArr.push(['T', 'A']);
      }
    }
    return dnaArr;
  }

  //solved with object DNA pairs
  function pairElement(str) {
    const strArr = str.split('');
  
    const dnaPairs = {
      'A': 'T',
      'T': 'A',
      'G': 'C',
      'C': 'G'
        }
        return strArr.map(dna=> [dna, dnaPairs[dna]]);   
  }
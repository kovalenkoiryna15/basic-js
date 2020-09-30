class VigenereCipheringMachine {
  encrypt(m, k) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (typeof m == 'undefined' || typeof k == 'undefined') throw Error;
    
    let messageByWords = m.toUpperCase().split(' '); //messageByWords = ["ATTACK", "AT", "DAWN!"]    

    let messageWordsByChars = messageByWords.map(el => {
      let wordByChars = el.split('');    
      return wordByChars;
    });    
    //messageWordsByChars = [ [ 'A', 'T', 'T', 'A', 'C', 'K' ], ['A', 'T'], [ 'D', 'O', 'W', 'N', '!' ] ]

    let codesOfMessage = messageWordsByChars.map(word => {
      return word.map(el => {    
        if (alphabet.indexOf(el) === -1) return el;
        return alphabet.indexOf(el);
      })
    });
    //codesOfMessage = [ [ 0, 19, 19, 0, 2, 10 ], [ 0, 19 ], [ 3, 0, 22, 13, '!' ] ]

    let codesOfMessageArr = codesOfMessage.reduce(function(a, b) { return a.concat(b);});    
    //codesOfMessage = [ 0, 19, 19, 0, 2, 10, 0, 19, 3, 0, 22, 13, '!' ]
    
    let key = k.toUpperCase().split('');
    let codesOfKey = key.map(char => {
      return alphabet.indexOf(char);
    });
    // codesOfKey = [ 0, 11, 15, 7, 14, 13,  18, 4 ]

    let wordsLengthArr = messageWordsByChars.map(el => el.length);
    // wordsLengthArr = [ 6, 2, 5 ]
    let wordsLength = wordsLengthArr.reduce( function(a, b) { return a + b;});
    // wordsLength = 13

    let integerNumberOfKeysInMessage = Math.trunc(wordsLength / key.length); // 1
    let arrayOfSolution = [];  
    for (let i=0; i < integerNumberOfKeysInMessage; i++){
      arrayOfSolution = [...arrayOfSolution, ...codesOfKey]
    }
    // arrayOfSolution =  [ 0, 11, 15, 7, 14, 13,  18, 4 ]

    let rest = wordsLength % key.length; // 5
    for(let i = 0; i < rest; i++){
      arrayOfSolution.push(codesOfKey[i]) 
    }
    // arrayOfSolution = [0, 11, 15, 7, 14, 13, 18, 4, 0, 11, 15, 7, 14 ]

    let codesOfSolution = codesOfMessageArr.map((char, index) => {
      if (typeof char == 'string'){
        return char;
      }
      return ((char + arrayOfSolution[index]) % 26);
    })    
    // codesOfSolution = [ [ 0, 4, 8, 7, 16, 23 ], [ 18, 23 ], [ 3, 11, 11, 20, '!' ] ]
    
    let solutionChars = codesOfSolution.map(el => {
      if (typeof el == 'string'){
        return el;
      }
      return alphabet.charAt(el);
    })
    // solutionChars = [ [ A, E, I, H, Q, X ], [ S, X ], [ D, L, L, U, '!' ] ]
    
    let solutionWords = [];
    wordsLengthArr.forEach(el => {
      let word = solutionChars.splice(0, el)
      solutionWords.push(word)
    })
    // solutionWords = [ 'AEIHQX', 'SX', 'DLLU!' ]

    let solution = solutionWords.map(el => el.join('')).join(' ')
    // solution = 'AEIHQX SX DLLU!'
    return solution; 
  }    
  // =============================================================================================================

  decrypt(cipherMessage, k) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (typeof cipherMessage == 'undefined' || typeof k == 'undefined') throw Error;
    
    let messageByWords = cipherMessage.split(' '); //messageByWords = [ 'AEIHQX', 'SX', 'DLLU!' ]   

    let messageWordsByChars = messageByWords.map(el => {
      let wordByChars = el.split('');    
      return wordByChars;
    });    
    //messageWordsByChars = [ [ A, E, I, H, Q, X ], [ S, X ], [ D, L, L, U, '!' ] ]

    let codesOfMessage = messageWordsByChars.map(word => {
      return word.map(el => {    
        if (alphabet.indexOf(el) === -1) return el;
        return alphabet.indexOf(el);
      })
    });
    //codesOfMessage = [ [ 0, 4, 8, 7, 16, 23 ], [ 18, 23 ], [ 3, 11, 11, 20, '!' ] ]

    let codesOfMessageArr = codesOfMessage.reduce(function(a, b) { return a.concat(b);});    
    //codesOfMessage = [ 0, 4, 8, 7, 16, 23, 18, 23, 3, 11, 11, 20, '!' ]
    
    let key = k.toUpperCase().split('');
    let codesOfKey = key.map(char => {
      return alphabet.indexOf(char);
    });
    // codesOfKey = [ 0, 11, 15, 7, 14, 13,  18, 4 ]

    let wordsLengthArr = messageWordsByChars.map(el => el.length);
    // wordsLengthArr = [ 6, 2, 5 ]
    let wordsLength = wordsLengthArr.reduce( function(a, b) { return a + b;});
    // wordsLength = 13

    let integerNumberOfKeysInMessage = Math.trunc(wordsLength / key.length); // 1
    let arrayOfSolution = [];  
    for (let i=0; i < integerNumberOfKeysInMessage; i++){
      arrayOfSolution = [...arrayOfSolution, ...codesOfKey]
    }
    // arrayOfSolution =  [ 0, 11, 15, 7, 14, 13,  18, 4 ]

    let rest = wordsLength % key.length; // 5
    for(let i = 0; i < rest; i++){
      arrayOfSolution.push(codesOfKey[i]) 
    }
    // arrayOfSolution = [0, 11, 15, 7, 14, 13, 18, 4, 0, 11, 15, 7, 14 ]

    let codesOfSolution = codesOfMessageArr.map((char, index) => {
      if (typeof char == 'string'){
        return char;
      }
      return ((char + 26 - arrayOfSolution[index]) % 26);
    })    
    // codesOfSolution = [ [ 0, 19, 19, 0, 2, 10 ], [ 0, 19 ], [ 3, 0, 22, 13, '!' ] ]
    
    let solutionChars = codesOfSolution.map(el => {
      if (typeof el == 'string'){
        return el;
      }
      return alphabet.charAt(el);
    })
    // solutionChars = [ [ 'A', 'T', 'T', 'A', 'C', 'K' ], ['A', 'T'], [ 'D', 'O', 'W', 'N', '!' ] ]
    
    let solutionWords = [];
    wordsLengthArr.forEach(el => {
      let word = solutionChars.splice(0, el)
      solutionWords.push(word)
    })
    // solutionWords = ['ATTACK', 'AT', 'DAWN!']

    let solution = solutionWords.map(el => el.join('')).join(' ')
    // solution = 'ATTACK AT DAWN!'
    return solution; 

  }
}

module.exports = VigenereCipheringMachine;
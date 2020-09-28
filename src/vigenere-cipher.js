class VigenereCipheringMachine {
  encrypt() {
    
  }    
  decrypt() {
    
  }
}

module.exports = VigenereCipheringMachine;


// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%';

// function encrypt(m , k) {
//   let message = m.split(' ').toUpperCase();
  
//   let words = message.map(el => {
//     let word = el.split('');
//     return word;
//   });

//   let codesOfMessage = words.map(word => {
//     return word.map(el => {    
//       if (alphabet.indexOf(el) > 25){
//         return el;
//       }
//       return alphabet.indexOf(el);
//     })
//   })

//   let key = k.split('').toUpperCase();
//   let codesOfKey = key.map(char => {
//     return alphabet.indexOf(char);
//   })

  
// }

// console.log(encrypt(m , k))
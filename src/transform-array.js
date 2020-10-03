module.exports = function transform(arr) {
  if (typeof arr == 'undefined' || typeof arr !== 'object' || arr == null) {
    throw Error;
  } else if (!(arr instanceof Array)){
    throw Error;
  } else if (arr.length == 0) {
    return arr;
  } else {
    let newArray = arr.map((el, index, arr) => {    
      if (el === '--double-next') {
        if (index+1 === arr.length) return null
        return arr[index+1]
      }
      arr.lenght 
      if (el === '--double-prev') {
        if (arr[index-2] === '--discard-next') {
          return null
        } else {
          if (index === 0) return null
          return arr[index-1]
        }      
      }
  
      if(arr[index-1] === '--discard-next') return null;
      if(arr[index+1] === '--discard-prev') return null;
  
      if (el !== '--discard-next' && el !== '--discard-prev') {
        return el
      } else {
        return null
      }    
    })
    let newArray2 = [];
    newArray.forEach(el=> {
      if(el !== null) {newArray2.push(el)}
    });
    
    return newArray2; 
  }
}
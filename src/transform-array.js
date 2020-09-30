module.exports = function transform(arr) {
  if (typeof arr == 'undefined' || typeof arr !== 'object' || arr == null) {
    throw Error;
  } else if (!(arr instanceof Array)){
    throw Error;
  } else if (arr.length == 0) {
    return arr;
  } else {
    arr.forEach( (item, index, arr) => {
      if (item == undefined || item instanceof Array) {
        return [];
      } else {
        switch(item) {
          case '--discard-next': 
            if (arr[index+1] > arr.length) {
              arr.splice(index, 1);
            } else {
              arr.splice(index, 2);
            }
            break;
          case '--discard-prev': 
            if (arr[index-1] < 0 || index === 0) {
              arr.splice(index, 1);
            } else {
              arr.splice(index-1, 2);
            }
            break;
          case '--double-next':
            if (index+1 > arr.length-1) {
              arr.splice(index, 1);
            } else {
              arr.splice(index, 1, arr[index+1]);
            }
            break;
          case '--double-prev':
            if (arr[index-1] < 0 || index === 0) {
              arr.splice(index, 1);
            } else {
              arr.splice(index, 1, arr[index-1]);
            }
            break;
          default: break;                      
        }        
      }
    })
    return arr;
  }
}
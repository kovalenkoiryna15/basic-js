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
      } else if (item == '--discard-next') {
        if (arr[index+1] > arr.length) {
          arr.splice(index, 1);
        } else {
          arr.splice(index, 2);
        }        
      } else if (item == '--discard-prev') {
        if (arr[index-1] < 0) {
          arr.splice(index, 1);
        } else {
          arr.splice(index-1, 2);
        }         
      } else if (item == '--double-next') {
        if (arr[index+1] > arr.length) {
          arr.splice(index, 1);
        } else {
          arr.splice(index, 1, arr[index+1]);
        }        
      } else if (item == '--double-prev') {
        if (arr[index-1] < 0) {
          arr.splice(index, 1);
        } else {
          arr.splice(index, 1, arr[index-1]);
        }        
      }
    });
    return arr;
  };
};
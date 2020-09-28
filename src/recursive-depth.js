module.exports = class DepthCalculator {
  calculateDepth(arr) {    
    
    let depths = arr.map(element => {

      let elementDepth = 1;

      if (element instanceof Array) {        
        let i = this.calculateDepth(element);
        elementDepth += i;           
      }       
      return elementDepth;
    });     
    return (depths.length === 0)? 1: Math.max(...depths);
  }

};
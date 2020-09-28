const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value == 'undefined') {      
      this.chain.push(`( )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this
  },
  removeLink(position) {
    if (position < 0 || position > this.chain.length || !(Number.isInteger(position)) ) {
      this.chain.push('Error');
      throw Error;
    } else {
      this.chain.splice(position-1, 1);
    }
    return this   
  },
  reverseChain() {
    if (this.chain.length < 2 ) {

    } else {
      this.chain.reverse();
    }
    return this
  },
  finishChain() {
    if (this.chain.includes('Error')) {
      this.chain = [];
    } else {
      let chain = this.chain.join(`~~`); 
      this.chain = Array(0);
      return chain;
    }    
  }
};

module.exports = chainMaker;
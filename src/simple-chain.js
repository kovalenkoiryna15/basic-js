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
  },
  removeLink(position) {
    if (position < 0 || position > this.chain.length || !(Number.isInteger(value)) ) {
      this.chain.push('Error');
      return Error;
    } else {
      this.chain.splice(position, 1);
    }    
  },
  reverseChain() {
    if (this.chain.length < 2 ) {

    } else {
      this.chain.reverse();
    }
  },
  finishChain() {
    if (this.chain.includes('Error')) {
      this.chain = [];
    } else {
      return this.chain.join(`~~`);
    }    
  }
};

module.exports = chainMaker;

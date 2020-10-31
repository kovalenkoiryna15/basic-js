const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    // if (typeof value === 'undefined') {      
    //   this.chain.push(`( )`);
    // } else {
      this.chain.push(`( ${value} )`);
    // }
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && (position ^ 0) === position) {
      if (position < 1 || position > this.getLength() ) {
        this.chain.length = 0;
        throw new Error ('Linked position is out of range.');
      } else if (position === 0) {
        this.chain.splice(position, 1);
      } else {
        this.chain.splice(position-1, 1);
      }      
      return this;
    }
    this.chain.length = 0;    
    return new Error ('Position must be an integer.');
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.chain.join(`~~`); 
    this.chain.length = 0;     
    return chain;  
  }
};

module.exports = chainMaker;
const CustomError = require("../extensions/custom-error");



const chainMaker = {
  _chain: [],
  _callCount: 0,
  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let filteredChain = this._chain.filter( (item) => item );
    return filteredChain.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here\
    if ( value === undefined ) value = ' ';
    //if ( typeof value == 'number' && value % 1 !== 0 ) return this;
    this._chain.push(`( ${value} )`);
    //console.log('addLink: ' + this._chain);
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
   if ( !Number.isInteger(position) || position <= 0 || position > this._chain.length ) {
    this._chain.length = 0;
    throw Error ('Error :-(');
   };
    this._chain[position-1] = '^deleted^';
    this._chain = this._chain.filter( (item) => {
      if (item !== '^deleted^') return true;
    });
    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this._chain = this._chain.reverse();
    //console.log('reverseLink: ' + this._chain);
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this._callCount++;
    let result = this._chain.filter( (item) => {
      if (item !== '^deleted^') return true;
    });
    this._chain.length = 0;
    return result.join('~~');
  }
};


module.exports = chainMaker;

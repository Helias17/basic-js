const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {


  constructor () {
    this.depth = 1;
  }

  calculateDepth( arr ) {

    let filteredArr = [];

    arr.map( (item) => {
      if ( Array.isArray(item) ) {
        if ( item.length == 0 ) {
          filteredArr.push('23');
        } else {

          item.map( (item) => {
            filteredArr.push(item);
          } )

        }
      }

    } )

    if ( filteredArr.length == 0 ) {
        let result = this.depth;
        this.depth = 1;
        return result;
    }

    this.depth++;
    return this.calculateDepth(filteredArr);
  }


};
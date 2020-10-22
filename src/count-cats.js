const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let cats = [];

  matrix.forEach( (item) => {

    result = item.filter( (item) => {

      if ( item === '^^' ) {
        return true;
      } else return false;

    } )

    cats = cats.concat(result);

  } )

  return cats.length;
};

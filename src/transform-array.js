const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here



  let action = '';
  let newArr = [...arr];

  arr.map( (item, index) => {

    if ( typeof item == 'string' && item.startsWith('--') ) {
      action = item;

      switch(action) {
        case '--double-next':
        newArr[index] = newArr[index+1];
        break;

        case '--double-prev':
        newArr[index] = newArr[index-1];
        break;

        case '--discard-prev':
        newArr[index] = null;
        newArr[index-1] = null;
        break;

        case '--discard-next':
        newArr[index] = null;
        newArr[index+1] = null;
        break;
      }

    }

  } )

  if ( action == '' ) return newArr;

  return newArr.filter( (item,index) => {
    if (item !== null && item !== undefined) return true;
  } );



};

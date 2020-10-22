const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if ( !Array.isArray(array) ) return false;


  let newArr = array.filter( (item) => {

    let regex = /^\s*\w+/g;

    if ( typeof(item) == 'string' && item.match(regex) && item ) {
      item = item.replace(/ /g, '');
      return true;
    }

  } )

  // console.log(newArr);

  let dreamName = newArr.map( (item) => {
    item = item.replace(/ /g, '');
    return item[0];
  } )

  // console.log(dreamName.sort());

  return dreamName.sort((a, b) => a.localeCompare(b))
  .join('').toUpperCase();


};

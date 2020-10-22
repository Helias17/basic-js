const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  //console.log( date.getMonth() );

  let  parsedDate = Date.parse(date);


  if (date == null) return 'Unable to determine the time of year!';
  if ( typeof date.getMonth !== 'function' ) throw Error('ашибка');
  if ( isNaN(date) || isNaN(parsedDate) )  throw Error('ашибка');

  let monthNum = date.getMonth();

  if ( monthNum >= 0 && monthNum <= 1 || monthNum == 11 ) {
    return 'winter';
  }
  if ( monthNum >= 2 && monthNum <= 4 ) {
    return 'spring';
  }
  if ( monthNum >= 5 && monthNum <= 7 ) {
    return 'summer';
  }
  if ( monthNum >= 8 && monthNum <= 10 ) {
    return 'autumn';
  }


};

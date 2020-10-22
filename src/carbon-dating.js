const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  sampleActivity = parseInt(sampleActivity);

  if (!sampleActivity || !sampleActivity || typeof(sampleActivity) !== 'string' ) return false;
  if ( sampleActivity <= 0 || sampleActivity > 15 ) return false;


  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  sampleActivity = +sampleActivity;

  let age = Math.log(15 / sampleActivity) / 1.22 * Math.pow(10, 4);

  return Math.ceil(age);

};

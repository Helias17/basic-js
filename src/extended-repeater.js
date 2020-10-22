const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here


  let {
        repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|'
      } = options;

  let additionStr = '';

  for ( let i = 0; i < additionRepeatTimes; i++ ) {

    additionStr += addition + additionSeparator;

  }

  additionStr = additionStr.slice(0, additionStr.length-additionSeparator.length);

  let result = '';

      for ( let i = 0; i < repeatTimes; i++ ) {

        result += str + additionStr + separator;

      }

  return result.slice(0, result.length-separator.length);



};

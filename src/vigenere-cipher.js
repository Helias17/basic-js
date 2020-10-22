const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type) {
    this.type = type;
    this._letArr =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }

  encrypt(str,key, decrypt) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here

    let strLength = str.length;
    let strArr = [];
    let keyArr = [];
    let encodedArr = [];
    if ( strLength > 0 ) strArr = str.split('');
    if (key.length < strLength) {
      // увеличиваем длину ключа не меньше чем длина строки
      key = key.repeat( Math.ceil(strLength/key.length) );
    }

    keyArr = key.split('');

    // добавляем пробелы в ключ, если есть что-то кроме букв в строке
    strArr.forEach( (item, index) => {

      let regex = /\w/g;

      if ( !item.match(regex) ) {
        keyArr.splice(index, 0, ' ');
      }

    } )

    strArr.forEach( (item, index) => {
      let encodedLetterNum = null;
      let itemLowCase = item.toLowerCase();

      //console.log(item + ' ' + index);

      // если символ открой строки - буква
      if ( this._letArr.includes(itemLowCase) ) {

        // если есть параметр decrypt, то расшифруем символ
        if ( decrypt ) {

          encodedLetterNum =
          ( 26 + this._letArr.indexOf( itemLowCase ) -
          this._letArr.indexOf( keyArr[index].toLowerCase() ) ) % 26 ;

        } else {

          encodedLetterNum =
          ( this._letArr.indexOf( itemLowCase ) +
          this._letArr.indexOf( keyArr[index].toLowerCase() ) ) % 26 ;

        }

        //console.log( encodedLetterNum );

        // сохраняем шифрованную букву в массив
        encodedArr.push( this._letArr[encodedLetterNum].toUpperCase() );
      } else {
        encodedArr.push( item );
      }
    } )

    if ( this.type === false ) encodedArr = encodedArr.reverse();

    return encodedArr.join('');

}
  decrypt(str,key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    //console.log( this.type );
    return this.encrypt(str,key,true);

  }
}

module.exports = VigenereCipheringMachine;

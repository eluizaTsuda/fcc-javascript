/*
Roman Numeral ConverterPassed
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

// ******************************************* second code 

function convertToRoman(num) {

  let resultRoman = '';

  while (num > 0) {
    if (num < 4) {setRomanNro (1, "I")
    } else if (num < 5) {setRomanNro (4, "IV")
    } else if (num >= 5 && num < 9) {setRomanNro (5, "V")
    } else if (num >= 9 && num < 10) {setRomanNro (9, "IX")
    } else if (num >= 10 && num < 40) {setRomanNro (10, "X")
    } else if (num >= 40 && num < 50) {setRomanNro (40, "XL")
    } else if (num >= 50 && num < 90) {setRomanNro (50, "L")
    } else if (num >= 90 && num < 100) {setRomanNro (90, "XC")
    } else if (num >= 100 && num < 400) {setRomanNro (100, "C")
    } else if (num >= 400 && num < 500) {setRomanNro (400, "CD")
    } else if (num >= 500 && num < 900) {setRomanNro (500, "D")
    } else if (num >= 900 && num < 1000) {setRomanNro (900, "CM")
    } else if (num >= 1000) {setRomanNro (1000, "M")
    }
  }

  function setRomanNro (nroSubtract, nroRoman) {
    num -= nroSubtract;
    resultRoman += nroRoman;
  }

  return resultRoman;
}

console.log(convertToRoman(3999));

// ==-=-=-=-===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

/*
// ******************************************* first code
function convertToRoman(num) {
  
  let arrNum = num.toString().split('')
  let arrResult = [];
  let repeatConcat = '';
  let result = '';
  let romanRepeat = '';
  let repeat = 0;
  let multip = 0;
  let nro = 0;

  let nroRom = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let nroDec = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  
  for (let i = arrNum.length-1; i >= 0; i--) {

    switch (multip) {
      case 0:
        nro = arrNum[i] * 1;
        break;
      case 1:
        nro = arrNum[i] * 10;
        break;
      case 2:
        nro = arrNum[i] * 100;
        break;
      case 3:
        nro = arrNum[i] * 1000;
        break;
    }

    multip++
    result = ''

    for (let j = 0; j < nroDec.length; j++) {
      if (nroDec[j] == nro) {
        result = result + nroRom[j]
        break;
      } else if (nroDec[j] < nro) {
          repeatConcat = '';
          repeat = nro - nroDec[j]

          if (repeat < 10) { 
            romanRepeat = "I"
          } else if (repeat < 100) { 
            repeat = repeat / 10
            romanRepeat = "X"
          } else if (repeat < 1000) { 
            repeat = repeat / 100
            romanRepeat = "C"
          } else if (repeat < 10000) { 
            repeat = repeat / 1000
            romanRepeat = "M"
          }

          for (let k=0; k < repeat; k++) {
            repeatConcat = repeatConcat + romanRepeat
          }

          result = result + nroRom[j] + repeatConcat;
          break;
      }
    }
    arrResult.unshift(result)
  }
 return arrResult.join("");
}
*/

//console.log(convertToRoman(2));
//console.log(convertToRoman(3999)); // should return the string MMMCMXCIX
//console.log(convertToRoman(110));

// ----------------------------------------------Second code

function telephoneCheck(str) {

// ^ inicio da linha
// $ fim da linha
// s space
// | or 
// ? zero ou uma ocorrencia
// * zero ou mais ocorrencia
// + one or more occurrences
// g todas as ocorrencias
// i ignore case sensitive
// m multilinha, lida com caracteres de inicio e fim (^ e $)
// [^a-z] negacao

    let regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;

    return (regex.test(str));

}
// ----------------------------------------------First code
/*
function telephoneCheck(str) {

  let findBracketOpen = str.includes("(");
  let findBracketClose = str.includes(")");
  let strOnlyNro = str.replace(/ |\(|\)|\-/g, "");
  let regex = /(\d{1}\s?)?(\(?\d{3}\)?)\-?\s?(\d{3})+\-?\s?(\d{4})+/g;

  if ((strOnlyNro.length == 11 && (str[0] != 1)) || 
      (strOnlyNro.length > 11) || 
      (strOnlyNro.length < 10) ||
      (str[0] == "(" &&  str[str.length-1] == ")") ||
      (findBracketOpen === true && findBracketClose === false) ||
      (findBracketOpen === false && findBracketClose === true)
     ) {return false;
     }

  return (regex.test(str));
}
*/

//console.log(telephoneCheck("1 (555) 555-5555"));// should return true.
//console.log(telephoneCheck("1(555)555-5555"));// should return true.
//console.log(telephoneCheck("1 555)555-5555")); // should return false.
//console.log(telephoneCheck("555)-555-5555")); // should return false.
//console.log(telephoneCheck("(555-555-5555")); // should return false.


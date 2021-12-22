function rot13(str) {

  let rot13_First  = ['A','B','C','D','E','F','G','H','I','J','K','L','M']
  let rot13_Second = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  let resultRot13 = '';
  let letterRot13 = '';

  for (let i = 0; i < str.length; i++) {
    if (rot13_First.indexOf(str[i]) === -1) {     // dont find rot13_First
      if (rot13_Second.indexOf(str[i]) === -1) {  // dont find rot13_Second
          letterRot13 = str[i];                   // copy original letter
      } else {
        letterRot13 = rot13_First[rot13_Second.indexOf(str[i])];  // // find in rot13_First
      }
    } else {                                      // find in rot13_Second
      letterRot13 = rot13_Second[rot13_First.indexOf(str[i])];
    }
    resultRot13 += letterRot13;
  }
  return resultRot13;
}

console.log(rot13("SERR PBQR PNZC"));
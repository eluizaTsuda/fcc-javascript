/*

Palindrome Checker
 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {

  //let regexSpecial = /[;:,_()\/| \-.! \s]/g;
  //let newStr = str.replace(regexSpecial, '').toLowerCase();
  
  let newStr = str.replace(/\W+|_/g, "").toLowerCase();

  console.log("str (original) >> ", str.length, str)
  console.log("newStr (clear) >> ",newStr.length, newStr)

  let strPalindrome =  newStr.split("").reverse().join("")

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>Substitute for.reverse()
  let strPalindrome = '';
  for (let i = (newStr.length-1); i >= 0; i--) {
    strPalindrome += newStr[i]
  }
*/
  console.log("strPalindrome  >> ", strPalindrome.length, strPalindrome)

  return newStr === strPalindrome
}

console.log("=======>     is ", palindrome("  _E-Y,e!.  "));
console.log("=======>     is ", palindrome("0_0 (: /-\ :) 0-0"));
console.log("=======>     is ", palindrome("  f i v e |\_/|four"));
console.log("=======>     is ", palindrome("A man, a plan, a canal. Panama"));
console.log("=======>     is ", palindrome("almostomla"));
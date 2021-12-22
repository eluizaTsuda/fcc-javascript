// ==================================================> SECOND CODE

var denoCurrency = [
	{name: 'ONE HUNDRED', value: 100.00},
	{name: 'TWENTY',      value: 20.00},
	{name: 'TEN',         value: 10.00},
	{name: 'FIVE',        value: 5.00},
	{name: 'ONE',	        value: 1.00},
	{name: 'QUARTER',     value: 0.25},
	{name: 'DIME',        value: 0.10},
	{name: 'NICKEL',      value: 0.05},
	{name: 'PENNY',       value: 0.01}];

function checkCashRegister(price, cash, cid) {

  let result = {};
  let possibleChange = [];
  let possibleCid = [];
  let change = (cash - price);
  let arrayCid = cid.reverse();

  //console.log(">>> change: ", change)
 
  for (const x of denoCurrency.entries()) {
      if (x[1].value <= change) {possibleChange.push(x[1])}
  }
  for (let i = 0; i < possibleChange.length; i++) {
    for (const x of arrayCid.entries()) {
      if (x[1][0] == possibleChange[i].name && x[1][1] > 0) {possibleCid.push(x[1])}
    }
  }

  let totCid = possibleCid.reduce(function(acc, next) {	return acc + next[1]}, 0.0);

  if (totCid == change) {
    result.status = "CLOSED";
    result.change = cid.reverse();   

  } else if (totCid < change) {
    result.status = "INSUFFICIENT_FUNDS" 
    result.change = [];

  } else {

    let arrayChange = possibleChange.reduce(function(getResult, currentElem, currentIndex) {
      if (change >= currentElem.value) {

        //console.log(">> Out WHILE >> change >= currentElem.value && possibleCid[currentIndex][1] >= currentElem.value", change, ">=", currentElem.value, " && ", possibleCid[currentIndex][1], ">=", currentElem.value)

        let nowValue = 0.0;

        while (change >= currentElem.value && possibleCid[currentIndex][1] >= currentElem.value) {

          //console.log(">> In WHILE >> change >= currentElem.value && possibleCid[currentIndex][1] >= currentElem.value", change, ">=", currentElem.value, " && ", possibleCid[currentIndex][1], ">=", currentElem.value)

          nowValue += currentElem.value;

          change -= currentElem.value;  // update the change - subtract the allowed value
          change = Math.round(change * 100 + Number.EPSILON ) / 100;

          possibleCid[currentIndex][1] -= currentElem.value; // update the cid - subtract the allowed value

        }
        getResult.push([currentElem.name, nowValue]); // add allowed name and value
      } 
      return getResult;
    }, []);
    result.status = "OPEN" 
    result.change = arrayChange;
  }
  return result;
}

/* 
//==================================================> FIRST CODE

const unitCurrency = [
  ["HUNDRED","100"],
  ["TWENTY","20"],
  ["TEN","10"], 
  ["FIVE","5"],
  ["ONE","1"],
  ["QUARTER","0.25"],
  ["DIME","0.1"],
  ["NICKEL","0.05"],
  ["PENNY","0.01"]
];

function checkCashRegister(price, cash, cid) {

  let totCid = 0;
  let valueSubtract = 0
  let result = {};
  let arrayChange = [];
  let possibleChange = [];
  let possibleCid = [];

  let change = (cash - price);
  let arrayCid = cid.reverse();
 
  loadArrays(change);

  for (const x of possibleCid.values()) {totCid += x[1];}

  if (totCid == change) {
    result.status = "CLOSED";
    result.change = cid.reverse();   
  } else if (totCid < change) {
    result.status = "INSUFFICIENT_FUNDS" 
    result.change = [];
  } else {

  //======================================= Start - Status OPEN

    while(change != 0) {

      //console.log(">>>>> 1  <<<<< ****************** Now, change value is ", change, "==")

      let nowPossible = loadNowPossible(change)

      let nowPossibleChange = [nowPossible[0][0], nowPossible[0][1]]
      let nowPossibleCid = [nowPossible[1][0], nowPossible[1][1]]

      let divid = parseInt(change / nowPossibleChange[1])
      let resto = Math.round(((divid * nowPossibleChange[1]) - change)  * 100 + Number.EPSILON ) / 100

      if (nowPossibleCid[1] >= change && resto === 0){
        arrayChange.push([nowPossibleCid[0], change]);
        valueSubtract = (divid * nowPossibleChange[1])

      } else if (nowPossibleCid[1] > change && resto !== 0){
        arrayChange.push([nowPossibleCid[0], (divid * nowPossibleChange[1])]);
        valueSubtract = (divid * nowPossibleChange[1])

      } else if (nowPossibleCid[1] < change){
        arrayChange.push([nowPossibleCid[0], nowPossibleCid[1]]);
        valueSubtract = (nowPossibleCid[1])
      }
      change = Math.round((change - valueSubtract) * 100 + Number.EPSILON ) / 100;
      updateArrayCid(valueSubtract, nowPossibleCid[0])
    }  

    result.status = "OPEN";
    result.change = arrayChange;
  } 

  return result; 

  //======================================= FUNCTIONS

  function loadArrays(atualChange) {

    for (const x of unitCurrency.entries()) {
      if (x[1][1] <= atualChange) {
        possibleChange.push(x[1])    
        }
    }
    for (let i = 0; i < possibleChange.length; i++) {
      for (const x of arrayCid.entries()) {
        if (x[1][0] == possibleChange[i][0] && x[1][1] > 0) {
          possibleCid.push(x[1])}
      }
    }
  }
  //=======================================================
  function loadNowPossible(nowChange) {
      for (let i = 0; i < possibleChange.length; i++){
        if (possibleChange[i][1] <= nowChange) {
          for (let j = 0; j < possibleCid.length; j++) {
            if (possibleCid[j][0] == possibleChange[i][0] && possibleCid[j][1] > 0) {
              return [(possibleChange[i]), (possibleCid[j])]
            }
          }
        }
      }
    }
  // =====================================================

  function updateArrayCid(updateValue, currency) {
    for (let i = 0; i <= arrayCid.length; i++){
        if (arrayCid[i][0] === currency) {
          arrayCid[i][1] = arrayCid[i][1] - updateValue;
          break;
        }
    }
  }
}
*/

//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

console.log(checkCashRegister(3.5, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function (array){
    return array.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
  }


  const fareDoubler = function(int){
        return int * 2;
  }

  const fareTripler = function(int){
    return int * 3;
}
  
function selectDifferentDrivers(arr, callback){
    return  callback(arr);
}

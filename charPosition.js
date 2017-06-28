function charPosition(string){
  var resultObj = {};
  var i = 0;
  noSpaces = string.split(' ').join('');
  while(i < noSpaces.length){
    var letterCount = 0;
    var letterPosition = "";
    for (var j = 0; j < string.length; j++){
      if(noSpaces[i]===string[j] && string[j] != " "){
        letterCount++;
        letterPosition += j.toString() + " ";
      }
    }
    resultObj[noSpaces[i]] = letterCount;
    resultObj["position(s) of " + noSpaces[i]] = letterPosition;
    i++;
  }
  return resultObj;
}

console.log(charPosition("lighthouse in the house"));
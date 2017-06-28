function countLetters(string){
  var resultObj = {};
  var i = 0;
  string = string.split(' ').join('');
  while(i < string.length){
    var letterCount = 0;
    for (var j = 0; j < string.length; j++){
      if(string[i]===string[j]){
        letterCount++;
      }
    }
    resultObj[string[i]] = letterCount;
    i++;
  }
  return resultObj;
}

console.log(countLetters("lighthouse in the house"));
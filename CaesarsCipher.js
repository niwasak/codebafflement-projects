function rot13(str){
    var result = "";
    for (var i = 0; i < str.length; i++){
      var asciiCode = str[i].charCodeAt();
      if (asciiCode < 65 || asciiCode > 90){
        result += str[i]
      } else if (asciiCode < 78){
        result += String.fromCharCode(asciiCode + 13);
      } else {
        result += String.fromCharCode(asciiCode - 13);
      }
    }
return result;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"))
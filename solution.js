function findWord(text, data) {
  // ваше решение пишите здесь
  var str = "", row = "";
for(let i = 0;i< data.length;i++ ){
str = str + data[i];
}
var indexLength = data[0];
for(var j = 0; j < indexLength.length; j++){
for(var i = 0; i< data.length; i++){
row = row + data[i][j]; 
}
};
var b = reverseString(text);
function reverseString(text) {
  return (text === '') ? '' : reverseString(text.substr(1)) + text.charAt(0);
};
var re = new RegExp(b, 'g');
var regexp = new RegExp(text, 'g');
if (regexp.test(str)) {
return true;
} else if (re.test(str)) {
  return true;
} else if (regexp.test(row)) {
  return true;
  } else if (re.test(row)) {
    return true;}
  return false;
}

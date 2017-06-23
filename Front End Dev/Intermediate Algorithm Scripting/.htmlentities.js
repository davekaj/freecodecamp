
function convertHTML(str) {
  // &colon;&rpar;
  //&​gt; is >      &lt; is <  &​amp; is &    &​apos; is '      &​quot; is ""

  var greater = />/g;
  var less = /</g;
  var amper = /&/g;
  var apos = /'/g;
  var quote = /"/g;

  var newStr1 = str.replace(amper, "&​amp;");
  var newStr2 = newStr1.replace(less, "&lt;");
  var newStr3 = newStr2.replace(greater, "&​gt;");
  var newStr4 = newStr3.replace(apos, "&​apos;");
  var newStr5 = newStr4.replace(quote, "&​quot;");

  return newStr5;
}

console.log(convertHTML("<>"));
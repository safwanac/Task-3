function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  var reversed = str.split("").reverse().join("");

  return str === reversed;
}

var string1 = "racecar";
console.log(isPalindrome(string1));

var string2 = "hello";
console.log(isPalindrome(string2));

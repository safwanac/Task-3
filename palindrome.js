function isPalindrome(number) {
  var originalNumber = number;
  var reversedNumber = 0;

  while (number > 0) {
    var remainder = number % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    number = Math.floor(number / 10);
  }

  if (reversedNumber === originalNumber) {
    return true;
  } else {
    return false;
  }
}

var number = 12320;

var isPalindromic = isPalindrome(number);

if (isPalindromic) {
  console.log(number + " is a palindrome.");
} else {
  console.log(number + " is not a palindrome.");
}

/*Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.*/


function palindrome(str) {

    // find globally any non word character or underscore
    var reg = /[\W_]/g;

    // replace reg to an empty string (remove it)
    var smallStr = str.toLowerCase().replace(reg, "");

    var reversedString = smallStr.split("").reverse().join("");

    if (reversedString === smallStr) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye");







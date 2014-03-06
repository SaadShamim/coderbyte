function Palindrome(str) { 

  return str.split(' ').join('') == str.split(' ').join('').split('').reverse().join('');
         
}

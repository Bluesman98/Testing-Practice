function reverseString(string) {
  console.log(string.length);
  let string_reversed = "";
  let i = string.length - 1;
  while (i >= 0) {
    string_reversed += string[i];
    i--;
  }
  return string_reversed.toString();
}
module.exports = reverseString;

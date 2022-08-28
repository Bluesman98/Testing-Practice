function capitalize(string) {
  let first_char = string.substring(0, 1).toUpperCase();
  let rest = string.substring(1);
  return first_char + rest;
}
module.exports = capitalize;

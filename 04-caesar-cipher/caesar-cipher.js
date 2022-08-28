function cipher(text, s) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i].charCodeAt();
    if (char >= 65 && char <= 90) {
      let ch = String.fromCharCode(((char + s - 65) % 26) + 65);
      result += ch;
    } else {
      let ch = String.fromCharCode(((char + s - 97) % 26) + 97);
      result += ch;
    }
  }
  return result;
}

module.exports = cipher;

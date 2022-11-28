const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

length = Math.floor(Math.random() * 20) + 1;

function generateKey(length, characters) {
  let symbols = "";
  for (let i = 0; i < length; i++) {
    symbols += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return symbols;
}

console.log(generateKey(length, characters));

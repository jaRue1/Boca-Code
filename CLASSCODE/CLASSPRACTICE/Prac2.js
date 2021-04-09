const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};
let myName = "rue";
const convertToMorse = function (str){
  
  return str.toUpperCase().split("").map((el) => {
      // comparison using a ternary
      return morseCode[el] ? morseCode[el] : el;
    })
    .join("");
};
console.log(convertToMorse("rue"))
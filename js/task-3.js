"use strict";
const findLongestWord = function (string) {
  const splitString = string.split(" ");
  let longestWord = splitString[0];

  for (let i = 1; i < splitString.length; i += 1) {
    if (splitString[i].length > longestWord.length) {
      longestWord = splitString[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));

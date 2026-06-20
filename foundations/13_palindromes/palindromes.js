const palindromes = function (string) {
  return (
    string
      .toLowerCase()
      .replaceAll(",", "")
      .replaceAll(" ", "")
      .replaceAll(".", "")
      .replaceAll("!", "") ===
    string
      .split("")
      .reverse()
      .join("")
      .toLowerCase()
      .replaceAll(",", "")
      .replaceAll(" ", "")
      .replaceAll(".", "")
      .replaceAll("!", "")
  );
};

console.log(palindromes("Racecar"));

// Do not edit below this line
module.exports = palindromes;

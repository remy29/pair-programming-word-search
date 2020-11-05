const transpose = require('./matrix_transposition');

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const transposed = transpose(letters);
  const verticalJoin = transposed.map(ls => ls.join(''));

  for (const row of verticalJoin) {
    let wordCheck = "";
    if (row.includes(word[0])) {
      for (let i = row.indexOf(word[0]); wordCheck.length < word.length; i++) {
        wordCheck += row[i];
      }
    }
    if (word === wordCheck) return true;
  }

  if (horizontalJoin.includes(word)) {
    return true;
  } else {
    return false;
  }
};

wordSearch([
  ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['E', 'I', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['I', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['N', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['F', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['E', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['L', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['D', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD');


module.exports = wordSearch;
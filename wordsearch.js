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


module.exports = wordSearch;
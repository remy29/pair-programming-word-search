const transpose = require('./matrix_transposition')

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const transposed = transpose(letters);
  const verticalJoin = transposed.map(ls => ls.join(''));

  for (const row of verticalJoin) {
    let wordCheck = "";
    for (let i = 0; i < word.length; i++) {
      wordCheck += row[i];
    }
    if (word === wordCheck) {
      return true;
    }
  }

  if (horizontalJoin.includes(word)) {
    return true;
  } else {
    return false;
  }
};


module.exports = wordSearch;
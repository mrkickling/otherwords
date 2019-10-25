function getIndexOfWordInList(word, list) {
  var L = 0;
  var R = list.length - 1
  while (L <= R) {
    var index = Math.floor( (L + R) / 2 )
    if (word == list[index].word) {
      console.log("FOUND WORD");
      return index;
    }
    else if (list[index].word > word) {
      R = index - 1;
    } else if (list[index].word < word) {
      L = index + 1
    }
  }
  return false;
}

module.exports = getIndexOfWordInList;

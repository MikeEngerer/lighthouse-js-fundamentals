function lastIndexOf(array, value) {
  var x = array.length;
  for (var i = (x - 1); i >= 0; i -= 1) {
    if (value === array[i]) {
      return i;
    }
  }
  if (x === (array.length)) {
    return -1;
  }
}

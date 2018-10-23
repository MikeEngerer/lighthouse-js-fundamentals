function range(start, end, step) {
  var arrayResult = []
  if (start === undefined || end === undefined || step === undefined) {
    return arrayResult;
  } else if (start > end) {
    return arrayResult;
  } else if (step < 0) {
    return arrayResult;
  } else {
    for (var i = start; i < end; i += step) {
      arrayResult.push(i);
      if (i + step === end) {
        arrayResult.push(end);
      }
    }
  }
  return arrayResult;
}
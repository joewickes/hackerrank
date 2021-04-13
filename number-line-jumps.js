function kangaroo(x1, v1, x2, v2) {
  const faster = v1 > v2 ? [x1, v1] : [x2, v2];
  const slower = v1 > v2 ? [x2, v2] : [x1, v1];

  while (faster[0] <= slower[0]) {
    if (faster[0] === slower[0]) {
      console.log('YES');
      return 'YES;
    } else {
      faster[0] += faster[1];
      slower[0] += slower[1];
      }
  }
  
  console.log('NO');
  return 'NO;
}

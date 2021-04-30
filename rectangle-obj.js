function Rectangle(a, b) {
  const rectangleInfo = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b
  }  
  
  return rectangleInfo;
}
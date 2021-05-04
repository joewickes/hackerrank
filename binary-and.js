function getMaxLessThanK(n, k) {
  // console.log('n', n, typeof n);
  // console.log('k', k, typeof k)
  const solved = parseInt(n) === parseInt(k) ? parseInt(k) - 2 : parseInt(k) - 1;
  // console.log(solved);
  return solved;
  // let maxLessThanK = 0;
  // let lastArr = [0, 0, 0];
  
  // for (let i = 1; i < n; i++) {
  //     const current = (i).toString(2);
  //     const currentArr = [];
  //     let sumArr = [];
  //     let binSum = '';
      
  //     for (let i = 0 ; i < current.length; i++) {
  //         currentArr.push(current[i]);
  //     }
      
  //     for (let i = 0; i < currentArr.length; i++) {
  //         sumArr.push(parseInt(lastArr[i]) * parseInt(currentArr[i]));
  //     }
      
  //     for (let i = 0; i < sumArr.length; i++) {
  //         binSum += sumArr[i];
  //     }
      
  //     const sum = parseInt(binSum, 2);
      
  //     if (sum > maxLessThanK && sum < k) {
  //         maxLessThanK = sum;
  //     }
      
  //     lastArr = currentArr;
  // }
  
  // return maxLessThanK;
}
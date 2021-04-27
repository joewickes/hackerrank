function getSecondLargest(nums) {
  // Complete the function
  let largest = 0;
  let sLargest = 0;
  
  for (let i = 0; i < nums.length; i++) {
      if (largest < nums[i]) {
          largest = nums[i];
      }
  }
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] < largest && nums[i] > sLargest) {
          sLargest = nums[i];
      }
  }
  
  return sLargest;
}
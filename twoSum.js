/*
Write a function named twoSum whichtakes two parameters:nums and target. Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to the target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

*/

function twoSum([nums],target){


}

function twoSum(nums, target) {
    const numMap = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (numMap.has(complement)) {
        return [numMap.get(complement), i];
      }
  
      numMap.set(nums[i], i);
    }
  
    return []; //Incase no solution returned
  }
  
  // Tests
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  const result = twoSum(nums, target);
  console.log(result);
  
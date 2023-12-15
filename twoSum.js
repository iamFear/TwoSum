"use strict";

/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

const nums = [2, 7, 11, 15];
const numsTwo = [3, 2, 4]; // target = 6 Output: [1,2]
const numsThree = [3, 3]; // target = 6 Output: [0,1]

var twoSum = function (nums, target) {
  const previousValues = {};

  for (let i = 0; i < nums.length; i++) {
    const neededValue = target - nums[i];
    const neededIndex = previousValues[neededValue];

    if (neededIndex != null) {
      console.log([neededIndex, i]);
      return [neededIndex, i];
    } else {
      previousValues[nums[i]] = i;
    }
  }
};

twoSum(nums, 9);
twoSum(numsTwo, 6);
twoSum(numsThree, 6);

/* PROGRAM LOGIC / EXECUTION:
WHAT WE NEED? FIND 2 NUMBERS AND THEIR INDEXES ON THE ARRAY WHICH SUM RETURNS THE TARGET NUMBER

INSIDE A FOR LOOP WHICH WILL ITERATE (MAX) ALL OVER THE ARRAY 
1. CREATE AN OBJECT TO STORE THE PREVIOUS VALUES AS THE KEY AND INDEXES AS THE VALUES OF EACH KEY
2. SUBTRACT THE CURRENT INDEX VALUE FROM THE TARGET TO GET THE SECOND NUMBER WE ARE LOOKING FOR
3. CHECK IF THE SECOND NUMBER IS INSIDE OF THE KEY VALUES
4. IF YES, RETURN PREVIOUS NUMBER AND CURRENT NUMBER
5. IF NOT, ADD THE CURRENT VALUE TO THE OBJECT AND REITERATE AGAIN
*/

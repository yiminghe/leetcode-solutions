function twoSum(nums: number[], target: number): number[] {
  const origin = [...nums];
  nums.sort((a, b) => a - b);

  let left = 0;
  const len = nums.length;
  let right = len - 1;

  let ret: number[] = [];
  while (left < right) {
    const a = nums[left];
    const b = nums[right];
    const sum = a + b;
    if (sum === target) {
      ret = [a, b];
      break;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  let data: number[] = [];
  for (let i = 0; i < len; i++) {
    const n = origin[i];
    if (data[0] === undefined && n === ret[0]) {
      data[0] = i;
    } else if (data[1] === undefined && n === ret[1]) {
      data[1] = i;
    }
    if (data[0] !== undefined && data[1] !== undefined) {
      break;
    }
  }

  return data;
}

console.log(twoSum([3, 3, 4, 4], 7));

export {};

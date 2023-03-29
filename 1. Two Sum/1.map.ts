function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const a = nums[i];
    const b = target - a;
    const index = map.get(b);
    if (index !== undefined) {
      return [i, index];
    }
    map.set(a, i);
  }
  return [];
}

console.log(twoSum([3, 3, 4, 4], 7));

export {};

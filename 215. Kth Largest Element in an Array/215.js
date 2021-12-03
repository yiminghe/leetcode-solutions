function buildHeap(nums, size) {
  let i = ((size-1) / 2) | 0;
  while (i >= 0) {
    maxifyHeap(nums, i, size);
    --i;
  }
}

function maxifyHeap(nums, i, size) {
  const leftIndex = 2 * i + 1;
  const rightIndex = leftIndex + 1;
  let largestIndex = i;
  if (leftIndex < size && nums[leftIndex] > nums[largestIndex]) {
    largestIndex = leftIndex;
  }
  if (rightIndex < size && nums[rightIndex] > nums[largestIndex]) {
    largestIndex = rightIndex;
  }
  if (largestIndex !== i) {
    swap(nums, largestIndex, i);
    maxifyHeap(nums, largestIndex, size);
  }
}

function swap(nums, i, j) {
  ([nums[i], nums[j]] = [nums[j], nums[i]]);
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let size = nums.length;
  buildHeap(nums, size);
  while (k > 1) {
    --size;
    swap(nums, 0, size);
    maxifyHeap(nums, 0, size);
    --k;
  }
  return nums[0]
};

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;

// nums = [3, 2, 1, 5, 6, 4];
// k = 2

let ret;

ret = findKthLargest(nums, k);
console.log(ret);
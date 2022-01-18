/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const l = nums.length;
  const heap = new Array(k).fill(0);
  for (let i = 0; i < k; i++) {
    insert(heap, i, nums[i]);
  }
  for (let i = k; i < l; i++) {
    const v = nums[i];
    if (v > heap[0]) {
      heap[0] = v;
      heapify(heap, 0, k);
    }
  }
  return heap[0];
};

function insert(heap, index, value) {
  heap[index] = value;
  while (index) {
    const parent = (index - 1) / 2 | 0;
    if (heap[parent] > heap[index]) {
      swap(heap, index, parent);
      index=parent;
    } else {
      break;
    }
  }
}

function heapify(heap, i, size) {
  const leftIndex = 2 * i + 1;
  const rightIndex = leftIndex + 1;
  let smallestIndex = i;
  if (leftIndex < size && heap[leftIndex] < heap[smallestIndex]) {
    smallestIndex = leftIndex;
  }
  if (rightIndex < size && heap[rightIndex] < heap[smallestIndex]) {
    smallestIndex = rightIndex;
  }
  if (smallestIndex !== i) {
    swap(heap, smallestIndex, i);
    heapify(heap, smallestIndex, size);
  }
}

function swap(nums, i, j) {
  ([nums[i], nums[j]] = [nums[j], nums[i]]);
}

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;

// nums = [3, 2, 1, 5, 6, 4];
// k = 2

nums = [7, 6, 5, 4, 3, 2, 1];
k = 5;

let ret;

ret = findKthLargest(nums, k);
console.log(ret);
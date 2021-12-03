function quickSort(nums, l, r, k) {
  if (l >= r) {
    return l === k ? nums[l] : undefined;
  }
  let left = l;
  const pivot = nums[r];
  for (let i = l; i < r; i++) {
    if (nums[i] >= pivot) {
      swap(nums, left++, i);
    }
  }
  swap(nums, left, r);
  if (left === k) {
    return nums[left];
  } else if (left > k) {
    return quickSort(nums, l, left - 1, k);
  } else {
    return quickSort(nums, left + 1, r, k);
  }
}

function swap(nums, i, j) {
  if (i === j) {
    return;
  }
  ([nums[i], nums[j]] = [nums[j], nums[i]]);
}


var findKthLargest = function (nums, k) {
  let ret = quickSort(nums, 0, nums.length - 1, k - 1);
  if (ret !== undefined) {
    return ret;
  }
  return nums[k - 1];
};

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;

// nums = [3, 2, 1, 5, 6, 4];
// k = 2

let ret;

ret = findKthLargest(nums, k);
console.log(ret);
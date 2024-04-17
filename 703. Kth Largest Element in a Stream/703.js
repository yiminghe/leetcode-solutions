/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = [];
  for (const n of nums) {
    this.add(n);
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  const { heap, k } = this;
  if (heap.length < k) {
    heap.push(val);
    let cur = heap.length - 1;
    while (cur) {
      const parent = (cur - 1) / 2 | 0;
      const v = heap[cur];
      const parentV = heap[parent];
      if (parentV > v) {
        heap[parent] = v;
        heap[cur] = parentV;
        cur = parent;
      } else {
        break;
      }
    }
  } else if(heap[0]<val){
    heap[0] = val;
    let cur = 0;
    while (cur < k) {
      let left = 2 * cur + 1;
      let right = left + 1;
      const leftV = heap[left];
      const rightV = heap[right];
      const curV = heap[cur];
      let min = curV;
      let isLeft = false;
      let isRight = false;
      if (leftV !== undefined && leftV < min) {
        min = leftV;
        isLeft = true;
      }
      if (rightV !== undefined && rightV < min) {
        min = rightV;
        isLeft = false;
        isRight = true;
      }
      if (isLeft) {
        heap[cur] = leftV;
        heap[left] = curV;
        cur = left;
      } else if (isRight) {
        heap[cur] = rightV;
        heap[right] = curV;
        cur = right;
      } else {
        break;
      }
    }
  }
  return heap[0];
};

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));   // return 4
console.log(kthLargest.add(5));   // return 5
console.log(kthLargest.add(10));  // return 5
console.log(kthLargest.add(9));   // return 8
console.log(kthLargest.add(4));   // return 8
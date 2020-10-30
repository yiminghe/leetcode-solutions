
type FindSortedIndexComparator<ArrayItem, Item> = (left: ArrayItem, right: Item, index: number, low: number, high: number) => 1 | 0 | -1;

function defaultComparator(source: any, target: any) {
  if (target === source) {
    return 0;
  } else if (source < target) {
    return -1;
  }
  return 1;
}

// https://github.com/lodash/lodash/issues/4969
module.exports.findSortedIndex = function findSortedIndex<ArrayItem, Item>(
  array: ArrayItem[],
  value: Item,
  compare: FindSortedIndexComparator<ArrayItem, Item> = defaultComparator,
) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    const mid = low + ((high - low) / 2 | 0);
    const compareResult = compare(array[mid], value, mid, low, high);
    if (compareResult === 0) {
      return {
        result: true,
        index: mid,
      };
    } else if (compareResult === -1) {
      low = mid + 1;
    } else if (compareResult === 1) {
      high = mid;
    } else {
      throw new Error(`findSortedIndex: comparator return unexpected value ${compareResult}`);
    }
  }
  return {
    result: false,
    index: high,
  };
};

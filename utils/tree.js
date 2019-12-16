

function write(s) {
  process.stdout.write(s + '');
}

function padding(n, l) {
  var s = n;
  const prefix = typeof s !== 'number' ? s : '0';
  s += '';
  while (s.length < l) {
    s = prefix + s;
  }
  return s;
}

function getMaxWidth(arr) {
  let l = -1;
  arr.forEach(t => {
    if (t) {
      t += '';
      if (t.length > l) {
        l = t.length;
      }
    }
  });
  return l;
}

function getLevel(arr) {
  const l = arr.length;
  let index = 0;
  let limit = 1;
  let element;
  let level = 0;
  while (index < l) {
    let count = 0;
    while (index < limit && index < l) {
      element = arr[index];
      if (element) {
        count++;
      }
      index++;
    }
    level++;
    limit += count * 2;
  }
  return level;
}

const api = module.exports = {
  createTree(arr) {
    arr.forEach((element, index) => {
      if (arr[index]) {
        arr[index] = {
          val: element,
        }
      }
    });
    const l = arr.length;
    let index = 0;
    let limit = 1;
    let element;
    let level = 0;
    while (index < l) {
      let count = 0;
      while (index < limit && index < l) {
        element = arr[index];
        if (element) {
          const base = count;
          const left = limit + 2 * base;
          const right = left + 1;
          element.left = arr[left];
          element.right = arr[right];
          element.level = level;
          element.count = count;
          count++;
        }
        index++;
      }
      level++;
      limit += count * 2;
    }
    return arr[0];
  },
  visualizeTree(arr) {

    const maxWidth = getMaxWidth(arr);
    const root = api.createTree(arr);
    infix(root);
    let currentLevel = 0;
    let prevEl;
    for (const currentElement of arr) {
      if (currentElement) {
        if (currentElement.level !== currentLevel) {
          console.log('');
          prevEl = null;
          currentLevel = currentElement.level;
        }
        if (!prevEl) {
          write(padding(' ', maxWidth).repeat(currentElement.order - 1));

        } else {
          write(padding(' ', maxWidth).repeat(currentElement.order - prevEl.order - 1));
        }

        prevEl = currentElement;

        write(padding(currentElement.val, maxWidth));
      }
    }
    console.log();
  }
};

function infix(root, order = [0]) {
  if (!root) {
    return;
  }
  infix(root.left, order);
  root.order = ++order[0];
  infix(root.right, order);

}
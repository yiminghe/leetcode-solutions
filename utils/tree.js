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

function paddingSpace(n, l) {
  var s = n;
  const prefix = ' ';
  s += '';
  while (s.length < l) {
    s = prefix + s;
  }
  return s;
}

function getMaxWidth(arr) {
  let l = -1;
  arr.forEach((t) => {
    if (t) {
      t += '';
      if (t.length > l) {
        l = t.length;
      }
    }
  });
  return l;
}

function getStackNode(n, state = 1) {
  if (!n) {
    return null;
  }
  return {
    n,
    state,
  };
}

function makeStackNode(node, encounter = 0) {
  return { node, encounter };
}

function traverse(root, order) {
  if (!root) {
    return [];
  }
  const ret = [];
  const stack = [makeStackNode(root)];
  while (stack.length) {
    const cur = stack.pop();
    cur.encounter++;
    const { node } = cur;
    if (cur.encounter === 1) {
      if (order === 'pre') {
        ret.push(node.val);
      }
      stack.push(cur);

      if (node.left) {
        stack.push(makeStackNode(node.left));
      }
    } else if (cur.encounter === 2) {
      if (order === 'in') {
        ret.push(node.val);
      }
      stack.push(cur);
      if (node.right) {
        stack.push(makeStackNode(node.right));
      }
    } else if (cur.encounter === 3) {
      if (order === 'post') {
        ret.push(node.val);
      }
    }
  }
  return ret;
}

function traverse2(root, order) {
  if (!root) {
    return [];
  }
  const stack = [getStackNode(root, 0)];
  const ret = [];
  let stackTop;
  while (stack.length) {
    if (!stackTop && stack.length) {
      stackTop = stack.pop();
      stackTop.state++;
    }
    if (stackTop) {
      switch (stackTop.state) {
        case 1:
          if (order === 'pre') {
            ret.push(stackTop.n.val);
          }
          stack.push(stackTop);
          stackTop = getStackNode(stackTop.n.left);
          break;
        case 2:
          if (order === 'in') {
            ret.push(stackTop.n.val);
          }
          stack.push(stackTop);
          stackTop = getStackNode(stackTop.n.right);
          break;
        case 3:
          if (order === 'post') {
            ret.push(stackTop.n.val);
          }
          stackTop = null;
          break;
      }
    }
  }
  return ret;
}

const aCharCode = 'a'.charCodeAt(0);

function collectTrie(root, s, ans) {
  if (root.isWord) {
    ans.push(s);
  }
  const { children } = root;
  for (var i = 0; i < 26; i++) {
    const c = children[i];
    if (c) {
      const ms = s + String.fromCharCode(i + aCharCode);
      collectTrie(c, ms, ans);
    }
  }
  return;
}

const api = (module.exports = {
  traverse,
  createTree(arr) {
    arr.forEach((element, index) => {
      if (arr[index] !== null) {
        arr[index] = {
          val: element,
        };
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

  printTrie(root) {
    const ans = [];
    collectTrie(root, '', ans);
    console.log(ans);
  },

  visualizeTreeArr(arr) {
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
          write(
            padding(' ', maxWidth).repeat(
              currentElement.order - prevEl.order - 1,
            ),
          );
        }

        prevEl = currentElement;
        write(padding(currentElement.val, maxWidth));
      }
    }
    console.log();
  },

  visualizeTreeNode(n, format, size) {
    infix(n);
    const maxWidth = getMaxWidthNode(n, size);
    let prevEl;
    let queue = [n];
    let ls = [];
    while (queue.length) {
      prevEl = null;
      let l = '';
      const nq = [];
      for (const currentElement of queue) {
        if (!prevEl) {
          l += ' '.repeat(maxWidth).repeat(currentElement.order - 1);
        } else {
          l += ' '
            .repeat(maxWidth)
            .repeat(currentElement.order - prevEl.order - 1);
        }
        prevEl = currentElement;
        l +=
          ' '.repeat(maxWidth - size(currentElement)) + format(currentElement);
        if (currentElement.left) {
          nq.push(currentElement.left);
        }
        if (currentElement.right) {
          nq.push(currentElement.right);
        }
      }
      queue = nq;
      ls.push(l);
    }
    return ls.join('\n');
  },
});

function getMaxWidthNode(n, fn) {
  if (!n) {
    return 0;
  }
  const my = fn(n);
  const left = getMaxWidthNode(n.left, fn);
  const right = getMaxWidthNode(n.right, fn);
  return Math.max(my, left, right);
}

function infix(root, order = [0]) {
  if (!root) {
    return;
  }
  infix(root.left, order);
  root.order = ++order[0];
  infix(root.right, order);
}

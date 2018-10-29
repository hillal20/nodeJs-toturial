/// disjoint set

// const s1 = [1, 2, 3, 4];
// const s2 = [5, 6, 7, 8];
// const s3 = [1, 2, 3, 4, 5, 6, 7, 8];
// if you take 2 numbers and they  belong to the same set , there is a cycle

//////// recursion

const fn = n => {
  let result = 0;
  if (n >= 0) {
    console.log("===>", n);
    result = 1 + fn(n - 1);
  }
  return result;
};
console.log(fn(5));
////////////////////// Binary Search

const arr = [1, 4, 2, 3, 6, 1, 9, 3, 2, 8];

const BS = (l, h, arr, key) => {
  let sArr = arr.sort((a, b) => {
    return a > b;
  });

  let middle = Math.floor((l + h + 1) / 2);

  if (l === h) {
    if (sArr[h] === key) {
      return true;
    }
  } else {
    if (key === sArr[middle]) {
      return true;
    } else if (key > sArr[middle]) {
      return BS(middle + 1, h, sArr, key);
    } else if (key < sArr[middle]) {
      return BS(l, middle - 1, sArr, key);
    }

    return false;
  }
};

console.log(BS(0, arr.length - 1, arr, 9));

//////////// mergeSort

const arr = [1, 2, 3, 8, 3, 1, 9, 6, 7];

const mergeSort = arr => {
  if (arr.length === 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let right = arr.slice(0, middle);
  let left = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    }
    if (left[0] > right[0]) {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
};

console.log(mergeSort(arr));

/////// quick sort

const arr = [1, 2, 3, 8, 3, 1, 9, 6, 7];
const quicksort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let right = [];
  let left = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
};

console.log(quicksort(arr));

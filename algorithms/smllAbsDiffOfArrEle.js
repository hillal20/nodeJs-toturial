const arr = [6, 2, 4, 10];

const bill = arr => {
  let newArr = [];
  let diff = Math.pow(10, 20);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      if (Math.abs(arr[i] - arr[j]) <= diff) {
        diff = Math.abs(arr[i] - arr[j]);
        newArr.push({ diff: diff, pair: [arr[i], arr[j]] });
      }
    }
  }
  //console.log(newArr)
  let newArr2 = newArr.filter(e => {
    return e.diff === diff;
  });
  //console.log(newArr2);
  let newArr3 = [];
  newArr2.map(e => {
    newArr3.push(e.pair);
  });
  //console.log(newArr3)
  newArr3.map(e => {
    if (e[0] > e[1]) {
      [e[0], e[1]] = [e[1], e[0]];
    }
  });
  //console.log(newArr3);
  newArr3.sort((a, b) => {
    return a[0] > b[0];
  });
  //console.log(newArr3)
  newArr3.forEach(e => {
    console.log(`${e[0]} ${e[1]}\n`);
  });
  //return newArr3
};
bill(arr);

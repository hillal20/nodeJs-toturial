///////////////  process.nextTick()

function bill(str, cb) {
  process.nextTick(() => {
    cb(str.replace(/[a-zA-Z]/g, "x"));
  });
}
const res = bill("hilal aissani", x => {
  console.log("cb ===> ", x + x);
});
// console.log(res);
console.log("end");

//////////////////////   setTimeout /////////

function delay(seconds, cb) {
  setTimeout(cb, seconds * 1000);
}

delay(2, () => {
  console.log(" ===> delay is happening ");
});
console.log("===> start delay ");

///////////////////////////////  promise //////////////

const result = new Promise((resolves, rejects) => {
  resolves("resolved1");
});
result.then(msg => {
  console.log(msg);
});
console.log("resoloved2");

///////////////////////

const delay2 = () => {
  return new Promise((resolves, rejects) => {
    // throw new Error("xxxx");
    resolves("result1");
  });
};
delay2()
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.log("err=>", err.message);
  });
console.log("result2");

///////////////////

const delay3 = cb => {
  cb(new Error("?????"), "r1");
  // cb(null, "r1");
};

delay3((err, msg) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(msg);
  }
});

console.log("r2");

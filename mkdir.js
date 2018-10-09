const fs = require("fs");

// fs.mkdirSync("stuff"); //// sync

fs.mkdir("stuff2", () => {
  console.log("==>done");
  fs.writeFile("./stuff2/bill.txt", "helollllll0", () => {
    console.log("done");
  });
}); /////  async

////// remove dir

// fs.unlink("./stuff2/bill.txt", () => {
//   fs.rmdir("stuff2", () => {
//     console.log("done");
//   });
// });

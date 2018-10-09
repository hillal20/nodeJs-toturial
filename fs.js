const fs = require("fs");

/////////////////////////////  sync version

const file = fs.readFileSync("readme.md", "utf8");
console.log(file);
console.log("hilal");

fs.writeFileSync("writeme.md", file);
console.log("hiiiiiiii");

///////////////////////////////////  async does not block the code

fs.readFile("readme.md", "utf8", (err, data) => {
  console.log(data);
  fs.writeFile("writeme.txt", data, () => {
    console.log("===> done");
  });
});
console.log("bbbbbbiiibbb");

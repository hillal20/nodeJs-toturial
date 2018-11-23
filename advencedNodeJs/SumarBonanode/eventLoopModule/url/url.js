const url = require("url");
console.log(url);
const result = url.parse("http://www.pluralsight.com/search?q=buna");
console.log(result);
console.log(url.format(result));

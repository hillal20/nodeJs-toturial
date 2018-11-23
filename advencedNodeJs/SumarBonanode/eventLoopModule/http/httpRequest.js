const http = require("http");

///// using http.request()

const req = http.request(
  {
    hostname: "www.google.com",
    method: "get"
  },
  res => {
    console.log("==> res headers", res.headers);
    console.log("==> res status code ", res.statusCode);
    res.on("data", data => {
      console.log(data.toString());
    });
  }
);
req.on("error", err => {
  console.log(err);
});
// req.write(".... hello word ");
req.end();

///////////////////////// using http.get()

// req.httpClientRequest
const req2 = http.get(
  "http://www.google.com",

  res => {
    // res.http.incomingMessage
    console.log("==> res headers", res.headers);
    console.log("==> res status code ", res.statusCode);
    res.on("data", data => {
      console.log(data.toString());
    });
  }
);
req2.on("error", err => {
  console.log(err);
});
console.log(req.agent); //http.Agent

const axios = require("axios");

process.on("message", msg => {
  console.log("fetching pid ===> ", process.pid);

  if (msg === "start Fetching") {
    fetching();
  }
});

let fetching = async () => {
  let data = { msg: "hilal" };
  let promise;
  promise = await axios.get("http://localhost:4000/data");
  data = promise.data;
  process.send({ fetchedData: data.msg });
  return data;
};

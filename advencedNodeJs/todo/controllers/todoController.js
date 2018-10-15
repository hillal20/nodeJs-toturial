const data = [
  { item: "drink milk" },
  { item: "walk dog" },
  { item: "running" }
];

const controller = server => {
  server.get("/", (req, res) => {
    res.send("api is running ");
  });
  server.get("/todo", (req, res) => {
    res.render("todo", { data: data });
  });
  server.post("/todo", (req, res) => {});
  server.delete("/todo", (req, res) => {});
  server.put("/todo", (req, res) => {});
};

module.exports = { controller };

const express = require("express");
const app = express();
const port = 8080;
const connectDb = require("./Database/Connection");
const SomeModel = require("./Models/schema");

connectDb();

app.use(express.json());
//app.use('/', require(path.join(__dirname, 'Routes/student.js')));
app.get("/", (res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Me- I am Muskan Agarwal");
});

app.get("/hello/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

app.get("/hellopost", (req, res) => {
  res.json({ success: "true" });
});

app.post("/data", async (req, res) => {
  const data = new SomeModel({
    // data: req.body.data,
    ...req.body,
  });
  await data.save();
  res.json(data);
});

app.get("/data/:id", async (req, res) => {
  //let id = req.body.id;
  let id = req.params.id;
  const data = await SomeModel.findById(id);
  //const data  = await SomeModel.find();
  res.send(data);
});

app.get("/data", async (req, res) => {
  const data = await SomeModel.find();
  res.send(data);
});

app.delete("/data/:id", async (req, res) => {
  let id = req.params.id;
  await SomeModel.deleteOne({ id });
  res.send("hogya delete");
});

app.put("/data/:id", async (req, res) => {
  let id = req.params.id;
  await SomeModel.updateOne(
    { id },
    { data: req.body.data, meta: req.body.meta }
  );
  res.send("updated successfully");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

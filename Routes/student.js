const express = require("express");
const studentRouter = express.Router();
const StudentModel = require("../Models/Student");

studentRouter.get("/info", async (req, res) => {
  const info = await StudentModel.find();
  res.send(info);
});

studentRouter.post("/info", async (req, res) => {
  const info = new StudentModel({
    ...req.body,
  });
  await info.save();
  res.send(info);
});

studentRouter.delete('/info/:id', async (req, res) => {
  let id = req.params.id;
  const query={_id:id};
  const data=await StudentModel.deleteOne(query);
  res.send(data);
});

studentRouter.put("/info/:id",async(req,res)=> {
  let id=req.params.id;
  const query = {_id:id};
  const update={...req.body};
  await StudentModel.updateOne((query),update);
  res.send("Record updated successfully");
});

module.exports = studentRouter;

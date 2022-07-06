const express = require("express");
const StudentModel = require("../Models/Student");
const router = express.Router();

router.get("/info", async (req, res) => {
  const info = await StudentModel.find();
  res.send(info);
});

router.post("/info", async (req, res) => {
  const info = new StudentModel({
    ...req.body,
  });
  await info.save();
  res.json(info);
});

module.exports = router;

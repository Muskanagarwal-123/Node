const TeacherModel = require("../Models/Teacher");
const express = require("express");
const router = express.Router();


router.get("/info", async (req, res) => {
    const info = await TeacherModel.find();
    res.send(info);
  });
  
  router.post("/info", async (req, res) => {
    const info = new TeacherModel({
      ...req.body,
    });
    await info.save();
    res.json(info);
  });

  module.exports = router;
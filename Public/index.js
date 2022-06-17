const express = require("express");
const router = express();
const port = 4000;
const StudentModel = require("../Models/Student");
const TeacherModel = require("../Models/Teacher");
const collegeDb = require("../Database/CollegeDb");

collegeDb();
router.use(express.json());

router.post("/info", async (req, res) => {
    const info = new StudentModel({
      ...req.body,
    });
    await info.save();
    res.json(info);
  });

router.get("/info", async(req,res)=>{
const info = await StudentModel.find();
res.send(info);
});

router.post("/teacher/info", async (req, res) => {
  const info = new TeacherModel({
    ...req.body,
  });
  await info.save();
  res.json(info);
});


router.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
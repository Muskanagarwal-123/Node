const express = require("express");
const router = express();
const port = 4000;
const collegeDb = require("../Database/CollegeDb");
const stu = require("../Routes/Student");
const tea = require("../Routes/Teacher");

router.use('/student',stu)
router.use('/teacher',tea)
router.use(express.json());
collegeDb();

router.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

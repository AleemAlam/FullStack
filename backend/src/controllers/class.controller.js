const { Router } = require("express");
const router = Router();
const Class = require("../models/class.model");
const Teacher = require("../models/teacher.model");
const protect = require("./../middleware/protect");

router.get("/", async (req, res) => {
  const classes = await Class.find().lean().exec();
  return res.status(200).json({ classes });
});

router.delete("/:id", async (req, res) => {
  const classes = await Class.findByIdAndDelete(req.params.id).lean().exec();
  return res.status(200).json({ classes });
});

router.patch("/:id", async (req, res) => {
  const classes = await Class.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  return res.status(200).json({ classes });
});

router.get("/:teacherId", protect, async (req, res) => {
  try {
    const teacher = await Teacher.findOne({
      $and: [
        {
          _id: req.params.teacherId,
          user: req.user,
        },
      ],
    }).exec();
    if (teacher.length == 0) {
      return res
        .status(500)
        .json({ status: "failed", message: "teacher not found" });
    }
    const classes = await Class.find({ subjects: req.params.teacherId })
      .lean()
      .exec();

    return res.status(200).json({ teacher, classes });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});
router.post("/", protect, async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    return res.status(201).json({ newClass, message: "class Added" });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

router.delete("/:id", protect, async (req, res) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(req.params.id).exec();
    return res.status(200).json({ deletedClass });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});
module.exports = router;

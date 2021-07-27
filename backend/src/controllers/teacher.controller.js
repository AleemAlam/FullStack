const { Router } = require("express");
const router = Router();
const Teacher = require("../models/teacher.model");
const protect = require("./../middleware/protect");
const upload = require("./../utils/file-upload");

router.get("/", protect, async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 2;
    const offset = (page - 1) * size;
    const { gender, sort, order } = req.query;
    let { search } = req.query;
    if (search) {
      search = new RegExp(search, "i");
    }
    const teachers = await Teacher.find(
      gender
        ? {
            $and: [
              {
                user: req.user,
                gender: gender,
                name: search ? search : new RegExp("", "i"),
              },
            ],
          }
        : { user: req.user, name: search ? search : new RegExp("", "i") }
    )
      .sort(sort ? { [sort]: order == "asc" ? 1 : -1 } : null)
      .skip(offset)
      .limit(size)
      .lean()
      .exec();
    const totalDoc = await Teacher.find(
      gender
        ? { $and: [{ user: req.user, gender: gender }] }
        : { user: req.user }
    )
      .countDocuments()
      .lean()
      .exec();
    const totalPage = Math.ceil(totalDoc / size);
    return res.status(200).json({ teachers, totalDoc, totalPage });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

router.post("/", protect, upload.single("profile_pic"), async (req, res) => {
  try {
    const { name, gender, age, subject, user } = req.body;

    const teacher = await Teacher.create({
      name,
      gender,
      age,
      subject,
      user,
      avatar: req.file.path,
    });
    return res.status(201).json({ teacher });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

router.delete("/:id", protect, async (req, res) => {
  try {
    const teachers = await Teacher.findByIdAndDelete(req.params.id);
    return res.status(200).json({ teachers });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});
module.exports = router;

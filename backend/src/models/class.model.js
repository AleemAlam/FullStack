const { Schema, model } = require("mongoose");

const classSchema = new Schema(
  {
    grade: { type: String, required: true },
    section: { type: String, required: true },
    subjects: [{ type: Schema.Types.ObjectId, ref: "teacher", required: true }],
  },
  {
    timeStamp: true,
    versionKey: false,
  }
);

module.exports = model("class", classSchema);

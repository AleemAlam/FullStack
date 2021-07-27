const { Schema, model } = require("mongoose");

const teacherSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user", required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    avatar: { type: String, required: false },
    subject: { type: String, required: false },
  },
  {
    timeStamp: true,
    versionKey: false,
  }
);

module.exports = model("teacher", teacherSchema);

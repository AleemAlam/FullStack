const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    school: { type: String, required: true },
  },
  {
    timeStamp: true,
    versionKey: false,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);

    this.password = hash;

    next();
  });
});

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) return reject(err);

      resolve(same);
    });
  });
};

module.exports = model("user", userSchema);

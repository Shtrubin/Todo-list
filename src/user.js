//for signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(422).json({
        error: "please enter all the fields",
      });
    }
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
      return res.status(422).json({
        error: "User already exists with that email",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    //save to
await new User({
      email,
      password: hashedPassword,
    }).save();

    res.status(200).json({
      message: "signup Success",
    });
  } catch (error) {
    console.log(error);
  }
});
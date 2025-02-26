require("dotenv").config();
const express = require("express");
const axiosClient = require("./axios");

const app = express();

app.use(express.static("public"));

app.get("/token", async (req, res) => {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({ message: "User id is required" });
  }

  const response = await axiosClient.post("/widget/auth/token", {
    accessKey: process.env.KAYNA_ACCESS_KEY,
    secret: process.env.KAYNA_SECRET_KEY,
    extCustomerId: userId,
  });

  return res.json({ token: response.data.token });
});

app.get("/config", async (req, res) => {
  res.json({
    productId: process.env.KAYNA_PRODUCT_ID,
    platformId: process.env.KAYNA_PLATFORM_ID,
  });
});

app.listen(3050, () => {
  console.log("Kayna server up successfully");
});

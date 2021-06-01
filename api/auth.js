const router = require("express").Router();
const https = require("https");
const axios = require("axios");

router.post("/login", async (req, res) => {
  try {
    const response = await axios.post(
      "https://ec2-18-163-183-202.ap-east-1.compute.amazonaws.com/ad/api/auth/login",
      req.body,
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );
    res.cookie("life-session", response.data.sessionToken, {
      maxAge: 1000 * 60 * 10, // 10mins
      httpOnly: true,
      secure: false,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json(error.response.data);
  }
});

router.get("/userinfo", async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    const response = await axios.get(
      "https://ec2-18-163-183-202.ap-east-1.compute.amazonaws.com/ad/api/auth/userinfo",
      {
        headers: {
          authorization,
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json(error.response.data);
  }
});

module.exports = router;

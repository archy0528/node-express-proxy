const router = require("express").Router();
const https = require("https");
const axios = require("axios");

router.post("/login", async (req, res) => {
  try {
    const response = await axios.post(
      "https://ec2-18-166-169-227.ap-east-1.compute.amazonaws.com/ad/api/auth/login",
      req.body,
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );
    res.cookie("life-session", response.data.sessionToken, {
      httpOnly: true,
      secure: true,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json(error.response.data);
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("life-session");
  res.sendStatus(200);
});

router.post("/reissue", async (req, res) => {
  try {
    const response = await axios.post(
      "https://ec2-18-166-169-227.ap-east-1.compute.amazonaws.com/ad/api/auth/reissue",
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
        headers: {
          cookie: req.headers.cookie,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json(error.response.data);
  }
});

router.get("/userinfo", async (req, res) => {
  try {
    const response = await axios.get(
      "https://ec2-18-166-169-227.ap-east-1.compute.amazonaws.com/ad/api/auth/userinfo",
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
        headers: {
          cookie: req.headers.cookie,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json(error.response.data);
  }
});

module.exports = router;

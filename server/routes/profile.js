const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/save-profile", async (req, res) => {
  const { name, location, userId } = req.body;

  try {
    const tokenRes = await axios.post(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      client_id: process.env.MGMT_CLIENT_ID,
      client_secret: process.env.MGMT_CLIENT_SECRET,
      audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
      grant_type: "client_credentials"
    });

    const accessToken = tokenRes.data.access_token;

    await axios.patch(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}`,
      { user_metadata: { name, location, profileCompleted: true } },
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    );

    res.json({ success: true });
  } catch (err) {
    console.error("Error saving profile:", err.message);
    res.status(500).json({ error: "Error saving profile" });
  }
});

module.exports = router;

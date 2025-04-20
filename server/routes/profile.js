const express = require("express");
const router = express.Router();
const axios = require("axios");
const Profile = require("../models/Profile");

router.post("/save-profile", async (req, res) => {
  const { name, location, userId } = req.body;

  try {
    // Auth0 token
    const tokenRes = await axios.post(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      client_id: process.env.MGMT_CLIENT_ID,
      client_secret: process.env.MGMT_CLIENT_SECRET,
      audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
      grant_type: "client_credentials"
    });

    const accessToken = tokenRes.data.access_token;

    // Upd Auth0
    await axios.patch(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}`,
      { user_metadata: { name, profileCompleted: true } },
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    );

    // Upd/Add MongoDB
    await Profile.findOneAndUpdate(
      { userId },
      { name, location, profileCompleted: true },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.json({ success: true });
  } catch (err) {
    console.error("Error saving profile:", err.message);
    res.status(500).json({ error: "Error saving profile" });
  }
});

router.get("/get-profile", async (req, res) => {
  const { userId } = req.query;

  try {
    const profile = await Profile.findOne({ userId });

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.json(profile);
  } catch (err) {
    console.error("Error fetching profile:", err.message);
    res.status(500).json({ error: "Error fetching profile" });
  }
});

module.exports = router;

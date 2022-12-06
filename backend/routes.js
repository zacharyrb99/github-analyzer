const express = require("express");
const router = new express.Router();
const getUserData = require("./getUserData");

/*
    GET /:username
*/
router.get("/:username", async (req, res, next) => {
    try {
        const userData = await getUserData(req.params.username);
        
        return res.json({
            "user": userData.data
        });
    } catch (e) {
        return next(e);
    }
});

module.exports = router;
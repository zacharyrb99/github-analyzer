const express = require("express");
const router = new express.Router();

/*
    GET /:username
*/
router.get("/:username", async (req, res, next) => {
    try {
        result = {
            "github-username": req.params.username
        }

        return res.json({result});
    } catch (e) {
        return next(e);
    }
});

module.exports = router;
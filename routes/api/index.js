const path = require('path');
const router = require('express').Router();
const bookRoutes = require('./books');
const googleRoutes = require('./google');

router.use("/books", bookRoutes);
router.use("/google", googleRoutes);

module.exports = router;
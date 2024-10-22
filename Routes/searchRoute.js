const express = require('express');
const { addSampleData, searchItems } = require('../controller/searchController');

const router = express.Router();
router.get('/adddata', addSampleData);
router.get('/search', searchItems);

module.exports = router;

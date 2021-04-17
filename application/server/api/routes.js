// use the express router to create endpoints in our server
const express = require('express');
const router = express.Router();

// require in the custom node module previously built
const menuModule = require('custom-module');

// localhost:8888/api/play
router.post('/search', async (req, res) => {
    try {
        const {searchItem} = req.body
        const menuResponse = await menuModule.search(searchItem)
        res.json(menuResponse);
    } catch (err) {
        res.json({ err });
    }
});

// localhost:8888/api/throwaway
router.post('/fetch', async (req, res) => {
    try {
        const {id} = req.body
        const menuInformation = await menuModule.fetch(id)
        res.json(menuInformation);
    } catch (err) {
        res.json({ err });
    }
});

module.exports = router;

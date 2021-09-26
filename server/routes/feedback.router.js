const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

router.post('/', (req, res) => {
    let newFeedback = req.body;

    let queryText = `INSERT INTO "books" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4)`;

    pool.query(queryText, [ newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments ])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            res.sendStatus(500);
        });
});

modules.exports = router;
const trends = require('node-google-search-trends');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/:country/:count', function(req, res){
    const { country, count } = req.params;

    trends(country, count, function(err, data) {
        if(err) {
            console.log(err);
            res.json({ status: false, message: 'technicalError' });
        }

        res.json({ status: true, objects: data });
    });
});

app.listen(3000, () => console.log('Google Trends API listening on port ' + port + '!'))
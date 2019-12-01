const fs = require('fs');
const request = require("request");
const diskusage = require("diskusage");

const express = require('express');
const app = express();

const port = 9899;

app.get("/diskusage",(req,res)=>{
    diskusage.check("/", function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info.available);
            console.log(info.free);
            console.log(info.total);

            res.json({
                available: info.available,
                free: info.free,
                freePercent: (info.free/info.total),
                total: info.total
            })
        }
    });
});


app.listen(port, () => console.log(`app listening on port ${ port }!`));


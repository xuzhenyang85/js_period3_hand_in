const express = require('express')
const app = express()

const gameArea =  require("./gameData").gameArea.geometry;
const players = require("./gameData").players;
const gju = require("geojson-utils");

app.get('/', (req, res) => res.send('Geo Demo!'))
app.get("/geoapi/isuserinarea/:lon/:lat",(req,res)=>{
    const pos =  {"type": "Point", "coordinates": [req.params.lon, req.params.lat]};
    //onsole.log(JSON.stringify(gameArea));
    //console.log(pos);
    const found = gju.pointInPolygon(pos,gameArea);
    let returnObj = {status: found};
    const msg = found ? "Point was inside gameArea": "Point was NOT inside gameArea";
    returnObj.msg = msg;
    res.json({returnObj});
});

app.get("/geoapi/isuserinarea/:lon/:lat/:rad",(req,res)=>{
    const center =  {"type": "Point", "coordinates": [req.params.lon, req.params.lat]};
    const radius = req.params.rad;    
    results =[];
    players.map((player) => {
        if(gju.geometryWithinRadius(player.geometry, center, radius)){
            results.push(player);
        }
    })
    res.json({results});
});
app.get("/geoapi/distanceToUser/:lon/:lat/:username",(req,res)=>{
    const center =  {"type": "Point", "coordinates": [req.params.lon, req.params.lat]};
    const username = req.params.username;    
    let currentPlayer;
    players.map((player)=> {
        if( player.properties.name = username) {
            currentPlayer = player;
        }
    });
    let distance = gju.pointDistance(center, currentPlayer.geometry);
    res.json({distance});
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))

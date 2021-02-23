//require('dotenv').config()

//import express
const express = require("express");
//import the mongo client
const MongoClient = require("mongodb").MongoClient;

const router = express.Router();

const url =
  process.env.DB_URL;

const client = new MongoClient(url);

const locationStorage = {
  locations: [],
};

router.post("/add-location", (req, res, next) => {
  const id = Math.random();

  client.connect(function (err, client) {
    const db = client.db('Locations');
    //Insert one document
    db.collection("user-locations").insertOne(
      {
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
      },
      function (err, r) {
        console.log(r);
        res.status(201).json({
          message: "Stored location!",
          locationId: id,
        });
      });
  });

  // locationStorage.locations.push({
  //   id: id,
  //   address: req.body.address,
  //   coords: {
  //     lat: req.body.lat,
  //     lng: req.body.lng,
  //   },
  // });
});

router.get("/location/:lid", (req, res, next) => {
  const locationId = +req.params.lid;
  const location = locationStorage.locations.find((location) => {
    return location.id === locationId;
  });
  if (!location) {
    return res.status(404).json({
      message: "Not found!",
    });
  }
  res
    .status(200)
    .json({ address: location.address, coordinates: location.coords });
});

module.exports = router;

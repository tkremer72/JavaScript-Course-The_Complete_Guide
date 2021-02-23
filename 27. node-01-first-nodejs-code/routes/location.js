//require('dotenv').config()

//import express
const express = require("express");
//import the mongo client
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const router = express.Router();

const url = process.env.DB_URL;

const client = new MongoClient(url);

const locationStorage = {
  locations: [],
};

router.post("/add-location", (req, res, next) => {
  //const id = Math.random();

  client.connect(function (err, client) {
    const db = client.db("Locations");
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
          locationId: r.insertedId,
        });
      }
    );
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
  //const locationId = +req.params.lid;
  const locationId = req.params.lid;

  client.connect(function (err, client) {
    const db = client.db("Locations");
    //Insert one document
    db.collection("user-locations").findOne(
      {
        _id: new mongodb.ObjectId(locationId),
      },
      function (err, doc) {
        console.log(doc);
        if (!doc) {
          return res.status(404).json({
            message: "Not found!",
          });
        }
        res
          .status(200)
          .json({ address: doc.address, coordinates: doc.coords });
      }
    );
  });
});

// const location = locationStorage.locations.find((location) => {
//   return location.id === locationId;
// });

module.exports = router;

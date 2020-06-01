const mongoose = require("mongoose");

const URI = "mongodb://ulh7uxwmzgh9karxrdsf:5MaHW9DpBN7IXOrmhX1R@bxybxtj8smatat5-mongodb.services.clever-cloud.com:27017/bxybxtj8smatat5";

mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log("conectado"))
    .catch(err => console.log("error"));
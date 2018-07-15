var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/app/public/home', function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
})
app.get('/app/public/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
})


var friends = [
    {
        routeName: "yoda",
        name: "Yoda",
        Job: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "darthmaul",
        name: "Darth Maul",
        Job: "Sith Lord",
        age: 200,
        forcePoints: 1200
    },
    {
        routeName: "obiwankenobi",
        name: "Obi Wan Kenobi",
        Job: "Jedi Master",
        age: 55,
        forcePoints: 1350
    }
];



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
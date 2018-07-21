var path = require("path");

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    })
    app.get('/api/friends', function (req, res) {
        res.sendFile(path.join(__dirname, "/api/friends.js"));
    })
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    })
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    })

}
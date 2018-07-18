var friendsData = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        console.log("This is reading my api friends route!")
        res.json(friendsData);
    })

    app.post('/api/friends', function (req, res) {
        friendsData.push(res.body);
        res.json(true);
    })

}
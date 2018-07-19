var friendsData = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        console.log("This is reading my api friends route!")
        res.json(friendsData);
    })

    app.post('/api/friends', function (req, res) {
        console.log(req, body);

        //this is a placeholder object to store objects while you run your
        //calculation to determine best matches.
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference;

        for (var i = 0; i < friendsData.length; i++) {
            var currentFriend = friendsData[i];
            totalDifference = 0;

            console.log(currentFriend.name);

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                //returns the absolute value of the currentUserScore - the currentFriendScore
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }

        friendsData.push(userData);
        console.log(bestMatch);
        res.json(bestMatch);
    })

}
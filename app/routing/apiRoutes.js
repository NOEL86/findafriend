var friendsData = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        console.log("This is reading my api friends route!")
        res.json(friendsData);
    })

    app.post('/api/friends', function (req, res) {


        // We will use this object to hold the "best match". We will constantly update it as we
        // loop through all of the options
        // console.log(req.body);
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        // Here we take the result of the user"s survey POST and parse it.
        var userData = req.body;
        var userScores = userData.scores;

        // This variable will calculate the difference between the user"s scores and the scores of
        // each user in the database
        var totalDifference;

        // Here we loop through all database.
        for (var i = 0; i < friendsData.length; i++) {
            var currentFriend = friendsData[i];
            totalDifference = 0;

            console.log(currentFriend.name);

            // We then loop through all the scores of each friend in database
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            // If the sum of differences is less then the differences of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {
                // Reset the bestMatch to be the new friend.
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }


        friendsData.push(userData);

        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        console.log(bestMatch.name + " I'm on the back end");

        res.json(bestMatch);
    })


}


var friendData = require("..data/friends");
var questionData = require("../data/questions");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
        res.json(questionData);
    });

    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        res.json(true);

        questionData.push(req.body);
        res.json(true);
    });
    
};
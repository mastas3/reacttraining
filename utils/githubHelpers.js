var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOU_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) { 
    return axios.get('http://api.github.com/users/' + username + param);
 }

var helpers = {
    getPlatersInfo: function (players) {
        //fetch some data from github
        return axios.all(players.map(function (username) {
            return getUserInfo(username);
        })).then(function (info) {
            return info.map(function (user) {
                return user.data;
            })
        }).catch(function (err) {
            console.warn('Error in getPlatersInfo', err);
        });
    }
};

module.exports = helpers;
//require packages
const axios = require("axios");

const api = {
  getUser({username}) {
    //https request to github api
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios.get(queryUrl).then(function (data) {
      console.log(data)
    }
    )}
};

module.exports = api;

//require packages
const axios = require("axios");

const api = {
  getUser(username) {
    //https request to github api
    const queryUrl = `https://api.github.com/users/${username}`;
    axios.get(queryUrl).then(function (data) {
      console.log(data)
      const avatar = data.data.avatar_url
      return avatar
    }
    )}
};

module.exports = api;

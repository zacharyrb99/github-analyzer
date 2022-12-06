const axios = require("axios");
const baseGithubAPI = "https://api.github.com";

const getUserData = (username) => {
    const url = `${baseGithubAPI}/users/${username}`;
    let user = axios.get(url);
    return user;
}

module.exports = getUserData;
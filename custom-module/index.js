const superagent = require("superagent");
const config = require("./config.json")

const search = async menuItem => {
    searchUrl = `${config.url}search?apiKey=${config.apikey}&query=${menuItem}&number=10`;
    try{
        const searchResponse = await superagent.get(searchUrl);
        return searchResponse.body;
    } catch (error) {
        return error;
    }
}

const fetch = async menuId=> {
    fetchUrl = `${config.url}${menuId}?apiKey=${config.apikey}`
    try{
        const fetchResponse = await superagent.get(fetchUrl);
        return fetchResponse.body;
    } catch(error){
        return error;
    }
}

module.exports = {
    search,
    fetch
}
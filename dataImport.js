import fetch from "node-fetch";
const apiURL = "https://swapi.dev/api/people/2"
fetch(apiURL)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        console.log("all data was received successfully");
    });
console.log(`Getting data`);
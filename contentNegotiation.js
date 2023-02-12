import fetch from "node-fetch";

var query = "https://swapi.dev/api/people/1";

    fetch(query, {
                method: "GET",
                headers: {
                    "Content-Type": "application/xml",
                    "accept": "application/json",
                    "User-Agent": "*"    
                    },
                }
        ).then(function(response){
            console.log(`response = ${response}`);
            return response.text();
        })
        .then(function(xml) {
            console.log(`XML = ${xml}`);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
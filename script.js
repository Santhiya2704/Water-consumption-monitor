var api_key = "GRC6J13352GAZHUE"; 
var channel_id = "2066678"; 
var field_number = "1"; 

var latestData = {};

function fetchData() {
    var url = `https://api.thingspeak.com/channels/${channel_id}/fields/${field_number}/last.json?api_key=${api_key}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            latestData = data;
            if (latestData.hasOwnProperty(`field${field_number}`)) {
                var waterLevel = latestData[`field${field_number}`];
                document.getElementById("water-level").textContent = waterLevel + " cm";
            } else {
                console.error(`Property 'field${field_number}' not found in the data.`);
            }
        })
        .catch(error => {
            console.error("Error fetching data: " + error);
        });
}

fetchData();
setInterval(fetchData, 15000);

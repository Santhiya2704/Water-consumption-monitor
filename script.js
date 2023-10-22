document.addEventListener("DOMContentLoaded", function () {
    // Replace with your ThingSpeak API Key and Channel ID
    const apiKey = 'LAFUEZRAICUDWSTN';
    const channelId = '2066678';
    const waterConsumption = latestData.field1; // Use the appropriate field number

    // Create the ThingSpeak API URL
    const apiUrl = `https://api.thingspeak.com/channels/${2066678}/feed.json?api_key=${LAFUEZRAICUDWSTN}`;

    // Make a GET request to ThingSpeak's API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the retrieved data and update the webpage as needed
            if (data.feeds && data.feeds.length > 0) {
                const latestData = data.feeds[data.feeds.length - 1];
                const waterConsumption = latestData.field1; // Adjust field number as needed
                const unit = "L"; // Replace with the appropriate unit

                const waterConsumptionElement = document.getElementById("waterConsumption");
                const dataParagraph = waterConsumptionElement.querySelector("p");
                dataParagraph.textContent = `Current waterConsumption: ${waterConsumption} ${unit}`;
            }
        })
        .catch(error => {
            console.error('Error fetching data from ThingSpeak:', error);
        });
});

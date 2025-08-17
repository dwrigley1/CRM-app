// event listener will trigger when the DOM is loaded
// aka upon visiting the wbpage

addEventListener("DOMContentLoaded", async function() {
    
    const response = await fetch("https://crm-app-zfvz.onrender.com/api/clients")

    const clients = await response.json();

    let html = ""; // blank screen
    for (let client of clients) {
        let clientID = client._id
        html+=`<li>${clientID} - ${client.result}</li>`
    }

    document.querySelector("#list_of_clients").innerHTML = html;
});
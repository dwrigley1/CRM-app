// event listener will trigger when the DOM is loaded
// aka upon visiting the wbpage

addEventListener("DOMContentLoaded", async function() {
    
    const response = await fetch("https://backend-yjzl.onrender.com/api/songs/") // keep local

    const clients = await response.json();

    let html = ""; // blank screen
    for (let client of clients) {
        let clientID = client._id
        html+=`<li>${clientID}`
    }

    document.querySelector("#list_of_clients").innerHTML = html;
});
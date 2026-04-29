// I actually made it work, holy fuck 
document.addEventListener("DOMContentLoaded", () => {
    //oh yeah, I forgot you, I'll clean you tomorrow
    document.getElementById("csa").innerHTML =  "<p>Current Scheduled Appointment: 10:00 AM - 11:00 AM </p>";
    
    const receivingBox = document.getElementById("receivingBox");
    const releasingBox = document.getElementById("releasingBox");

    const btnReceiving = document.getElementById("testBtn1");
    const btnReleasing = document.getElementById("testBtn2");

    btnReceiving.addEventListener("click", () => {
        const value = receivingBox.textContent;
        speechAction("Receiving", receivingBox);
    })

    btnReleasing.addEventListener("click", () => {
        const value = releasingBox.textContent;
        speechAction("Releasing", releasingBox);
    });

});
function speech(text) {
    const utterThis = new SpeechSynthesisUtterance(text);

    //I know it is shit for now, just give me some time to read the documentation for this then I'll cook smth
    utterThis.lang = "en-US";
    utterThis.rate = 1;
    utterThis.pitch = 1;
    utterThis.volume = 1;

    speechSynthesis.speak(utterThis);
}

async function getData(){
    const response = await fetch("./data.json");
    return await response.json();
}
//bridge
async function speechAction(type) {

    const data = await getData();

    let value;

    if(type === "Receiving"){
        value = data.receiving;
    }
    else if(type === "Releasing"){
        value = data.retrieving;
    }

    speech(`${type}, ${value}`)
    
}

async function plsPrint(){
    const data = await getData();
    
    document.getElementById("receivingBox").innerHTML = `<h2>${data.receiving}</h2>`;
    document.getElementById("releasingBox").innerHTML = `<h2>${data.retrieving}</h2>`;
}

//what the hell sure, I give up
document.addEventListener("DOMContentLoaded", plsPrint);
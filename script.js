
function speech(text) {
    const utterThis = new SpeechSynthesisUtterance(text);
    
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

async function speechAction(type) {
    
    const data = await getData();

    let value;
    
    if(type === "Receiving"){
        value = data.receiving;
    }
    else if(type === "Releasing"){
        value = data.releasing;
    }

    speech(`${type}, ${value}`)
    
}

async function plsPrint(){
    const data = await getData();
    
    document.getElementById("receivingBox").innerHTML = `<h2>${data.receiving}</h2>`;
    document.getElementById("releasingBox").innerHTML = `<h2>${data.releasing}</h2>`;
    document.getElementById("csa").innerHTML += data.sched;
}

document.addEventListener("DOMContentLoaded", async () => {

    plsPrint();
    
    setInterval(() => {
        const type = localStorage.getItem("speakType");

        if(type){

            speechAction(type);

            localStorage.removeItem("speakType");
        }
    }, 500)
});
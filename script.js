
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("csa").innerHTML =  "<p>Current Scheduled Appointment: 10:00 AM - 11:00 AM </p>";
    
    const receivingBox = document.getElementById("receivingBox");
    const releaseingBox = document.getElementById("releasingBox");

    receivingBox.innerHTML = "<h2>23</h2>";
    releaseingBox.innerHTML = "<h2>19</h2>";

    const btnReceiving = document.getElementById("testBtn1");
    const btnReleasing = document.getElementById("testBtn2");

    btnReceiving.addEventListener("click", () => {
        const value = receivingBox.textContent;
        speech(`Receiving ${value}`);
    })

    btnReleasing.addEventListener("click", () => {
        const value = releaseingBox.textContent;
        speech(`Releasing${value}`);
    });

});

function speech(text) {
    const utterThis = new SpeechSynthesisUtterance(text);

    //I know it is shit for now, just give me some time to read the documentation for this then I'll cook smth
    utterThis.lang = "en-GB";
    utterThis.rate = 1;
    utterThis.pitch = 1;
    utterThis.volume = 1;

    speechSynthesis.speak(utterThis);
}


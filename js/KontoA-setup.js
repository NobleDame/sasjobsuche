function buildKontoA(){
    const jobJN = true;
    const bewerbungJN = true;
    const ersterFirmenName = "Schwarzgroup";
    const erstesGehalt = "19";
    const bewerbungsFirma = "PixelAg"
    const bewerbungsGehalt ="18"
    const bewerbungsSchreiben = "Ich blala blala"

    document.getElementById("first-job-name").innerHTML = ersterFirmenName;
    document.getElementById("first-job-hourly-rate").innerHTML = erstesGehalt

    document.getElementById("first-bewerbung-name").innerHTML = bewerbungsFirma
    document.getElementById("first-bewerbung-hourly-rate").innerHTML = bewerbungsGehalt
    document.getElementById("bewerbung-details").innerHTML = bewerbungsSchreiben


    if(!jobJN){
        const elementsToRemove = ['#jobHeadline', '#ContoinerOne'];
        elementsToRemove.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.remove();
            }
        });
    }

    if(!bewerbungJN){
        const elementsToRemove = ['#bewerbungHeadline', '#ContainerTwo'];
        elementsToRemove.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.remove();
            }
        });
    }
    

}

function bewerbungZurueckziehen() {
    fetch("http://192.168.0.41:8000/bewerbung-zurueckziehen", { // Flask-Server aufrufen
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Bewerbung zurückgezogen" })
    })
    .then(response => response.text())
    .then(data => console.log("Server antwortet:", data))
    .catch(error => console.error("Fehler:", error));
}
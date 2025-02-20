function buildWebsite(){
    makeCompany();
}

function makeInnerHtml(){
    let output = "";

    const company_name = "Name der Firma"
    const company_description = "Wir sind Firma und werden durch Waffel den Markt dominieren!";
    const hourlyrate = "18"
    const available_Jobs = "83"
    

    const htmlpartOne = `<div class="company-info-box"><div class="company-name"><p>`
    const htmlpartTwo = `</p></div><div class="company-description"><p>`
    const htmlpartThree = `</p></div><div class="hourlyrate"><p>Gehalt: </p>  <p>`
    const htmlpartFour = `</p>  <p>L.</p></div>
            </div>
            <div class="company-bottom-bar">
                <button class="company-more-button">
                    Bewerben
                </button>
                <div class="free-places">
                    <p>`
    const htmlpartFive = `</p><p>Pl.</p></div></div>`

    output = htmlpartOne + company_name + htmlpartTwo + company_description + htmlpartThree + hourlyrate + htmlpartFour + available_Jobs + htmlpartFive;
    console.log(output);
    return output;
}

function makeCompany(){
    const nextCompany_htmltag = "div";
    const allContainer = document.getElementById("all-info-container");
    const createCompany = document.createElement(nextCompany_htmltag);
    createCompany.className = "company-info-container";
    createCompany.innerHTML = makeInnerHtml();

    console.log(createCompany);
    allContainer.appendChild(createCompany);
}
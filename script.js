/*
TO DO:
put in some animation when the language is changed
finish changing the language to apply to all text on page

*/


let languageSetToPolish = true

let languageSwitch = document.getElementById("clicked-switch");
let title = document.title;
let about = document.getElementById("about-link");
let projects = document.getElementById("projects-link");
let contact = document.getElementById("contact-link");


let projectEtchASketch = document.getElementById("project-etch-a-sketch");
let projectCalculator = document.getElementById("project-calculator");
let projectLibrary = document.getElementById("project-library");
let projectsHead = document.getElementById("projects-head");
let welcomeSection = document.getElementById("welcome-section");

let allTranslatedElements = document.getElementsByClassName("translated")

languageSwitch.addEventListener("click", (e) => {
    console.log("event happens")
    e.stopPropagation();
    e.stopImmediatePropagation();
    //e.preventDefault()

    console.log(e.target)
    changeLanguage();
    setTimeout(function() {
        fillTheAreasWithAppropriateLanguageContent();
    }, 900);
})

function changeLanguage() {
    languageSetToPolish = !languageSetToPolish;
    for (i = 0; i < allTranslatedElements.length; i++) {
        allTranslatedElements[i].classList.add("disappearing")
    }
    // document.addEventListener("transitionend", () => {
    //     fillTheAreasWithAppropriateLanguageContent();
    // })
}

function fillTheAreasWithAppropriateLanguageContent() {
    // document.removeEventListener("transitionend", () => {
    //     fillTheAreasWithAppropriateLanguageContent();
    // })
    console.log("timeout should start")

    if (languageSetToPolish === true) {
        about.innerText = "o mnie";
        projects.innerText = "projekty";
        contact.innerText = "kontakt";
    } else {
        about.innerText = "about";
        projects.innerText = "projects";
        contact.innerText = "contact";
    }

    for (i = 0; i < allTranslatedElements.length; i++) {
        allTranslatedElements[i].classList.remove("disappearing")
    }


}

fillTheAreasWithAppropriateLanguageContent();
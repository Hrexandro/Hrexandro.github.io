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
let jobTitle = document.getElementById("job-title")
let descriptionLineOne = document.getElementById("description-line-one");
let descriptionLineTwo = document.getElementById("description-line-two");

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
        jobTitle.innerText = "Webdev i tłumacz języka angielskiego";
        descriptionLineOne.innerText = "Jestem web developerem ze znajomością HTML, CSS i JavaScript, tworzę strony internetowe oraz aplikacje sieciowe. Poniżej można zapoznać się z kilkoma z moich projektów.";
        descriptionLineTwo.innerText = "Zajmuję się również tłumaczeniami z języka angielskiego.";
        projectsHead.innerText = "MOJE PROJEKTY";
        projectEtchASketch.innerText = "Znikopis";
        projectCalculator.innerText = "Kalkulator";
        projectLibrary.innerText = "Biblioteka";

    } else {
        about.innerText = "about";
        projects.innerText = "projects";
        contact.innerText = "contact";
        jobTitle.innerText = "Webdev and translator";
        descriptionLineOne.innerText = "I'm a web developer experienced with HTML, CSS, and JavaScript. I make websites and web applications. You can check out some of my projects below";
        descriptionLineTwo.innerText = "I also perform English-Polish translation.";
        projectsHead.innerText = "MY PROJECTS";
        projectEtchASketch.innerText = "Etch-a-sketch";
        projectCalculator.innerText = "Calculator";
        projectLibrary.innerText = "Library";
    }

    for (i = 0; i < allTranslatedElements.length; i++) {
        allTranslatedElements[i].classList.remove("disappearing")
    }


}

fillTheAreasWithAppropriateLanguageContent();
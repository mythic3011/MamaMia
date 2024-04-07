/*
    dropdown-language.js
    This script is used to change the language of the page when the user clicks on the dropdown button.
 */

// dropdown button
const dropdownButton = document.querySelector(".dropdown-language-button");

// dropdown content
const dropdownContent = document.querySelector(".dropdown-language-content");

// dropdown button click event
dropdownButton.addEventListener("click", function () {
    // toggle the dropdown content
    dropdownContent.classList.toggle("hidden");
});

// dropdown content click event
dropdownContent.addEventListener("click", function (event) {
    // if the clicked element is not the dropdown content, close the dropdown content
    if (!event.target.closest(".dropdown-language-content")) {
        dropdownContent.classList.add("hidden");
    }
});

// change language when the user clicks on the dropdown button
dropdownButton.addEventListener("click", function () {
    // get the value of the selected dropdown button
    const selectedValue = dropdownButton.querySelector("button").dataset.value;

    // change the language of the page
    changeLanguage(selectedValue);
});

// change language when the user clicks on the dropdown content
dropdownContent.addEventListener("click", function (event) {
    // get the value of the selected dropdown button
    const selectedValue = event.target.dataset.value;

    // change the language of the page
    changeLanguage(selectedValue);
});

// change language function
function changeLanguage(selectedValue) {
    // get the current language
    const currentLanguage = localStorage.getItem("language");

    // if the current language is not the selected value, change the language
    if (currentLanguage !== selectedValue) {
        // set the language in local storage
        localStorage.setItem("language", selectedValue);

        // change the language of the page
        changeLanguageOnPage(selectedValue);
    }
}

function changeLanguageOnPage(selectedValue) {
    // get the language dictionary
    const languageDictionary = languageMap.get(selectedValue);

    // set the language of the page
    document.documentElement.lang = selectedValue;

    // set the language of the page
    document.body.setAttribute("dir", selectedValue === "zh-CN" ? "ltr" : "rtl");

    // set the language of the page
    document.querySelector("html").setAttribute("lang", selectedValue);

    // set the language of the page
    document.querySelector("body").setAttribute("dir", selectedValue === "zh-CN" ? "ltr" : "rtl");

    // set the language of the page
    document.querySelector("html").setAttribute("lang", selectedValue);
}

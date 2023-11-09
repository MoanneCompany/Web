$(document).ready(function() {
    var lang;

    if (navigator.language.includes("-")) {
        lang = navigator.language.split("-")[0];
    } else {
        lang = navigator.language;
    }
});
$(document).ready(function() {
    var lang;

    if (navigator.language.includes("-")) {
        lang = navigator.language.split("-")[0];
    } else {
        lang = navigator.language;
    }

    if (lang === "pt") {
		document.title = 'Olá!';
	} else if (lang === "es") {
		document.title = 'Hola!';
	} else if (lang === "fr") {
		document.title = 'Salut!';
	} else if (lang === "de") {
		document.title = 'Hallo!';
	} else if (lang === "it") {
		document.title = 'Ciao!';
	} else if (lang === "ja") {
		document.title = 'こんにちは！';
	} else if (navigator.language === "zh-cn") {
		document.title = '你好！';
	} else if (navigator.language === "zh-tw") {
		document.title = '你好！';
	} else if (lang === "ko") {
		document.title = '안녕하세요!';
	}
});
$(document).ready(function() {
    var lang;

    if (navigator.language.includes("-")) {
        lang = navigator.language.split("-")[0];
    } else {
        lang = navigator.language;
    }

    if (lang === "pt") {
		
	} else if (lang === "es") {
		text.innerHTML = "Una vez que haya iniciado sesión, su cuenta permanecerá guardada en ese dispositivo.";
		text.style.width = "270px";
		text.style.marginLeft = "17%";
		start.innerHTML = "Empezar ahora";
		btn.innerHTML = "Entregar";
		user.setAttribute("placeholder", "Usuario");
		pass.setAttribute("placeholder", "Contraseña");
	} else if (lang === "fr") {
		text.innerHTML = "Une fois connecté, votre compte restera enregistré sur cet appareil.";
		text.style.width = "270px";
		text.style.marginLeft = "16%";
		start.innerHTML = "Commencez maintenant";
		btn.innerHTML = "Soumettre";
		user.setAttribute("placeholder", "Utilisateur");
		pass.setAttribute("placeholder", "Mot de passe");
	} else if (lang === "de") {
		text.innerHTML = "Sobald Sie angemeldet sind, bleibt Ihr Konto auf diesem Gerät gespeichert.";
		text.style.width = "270px";
		text.style.marginLeft = "16.5%";
		start.innerHTML = "Jetzt anfangen";
		btn.innerHTML = "Einreichen";
		user.setAttribute("placeholder", "Benutzer");
		pass.setAttribute("placeholder", "Passwort");
	} else if (lang === "it") {
		text.innerHTML = "Una volta effettuato l'accesso, il tuo account rimarrà salvato su quel dispositivo.";
		text.style.width = "270px";
		text.style.marginLeft = "16.5%";
		start.innerHTML = "Parti ora";
		btn.innerHTML = "Invia";
		user.setAttribute("placeholder", "Utente");
		pass.setAttribute("placeholder", "Parola d'ordine");
	} else if (lang === "ja") {
		text.innerHTML = "ログインすると、アカウントはそのデバイスに保存されたままになります。";
		text.style.width = "260px";
		text.style.marginLeft = "17%";
		start.innerHTML = "今すぐ始めましょう";
		btn.innerHTML = "提出する";
		user.setAttribute("placeholder", "ユーザー");
		pass.setAttribute("placeholder", "パスワード");
		moanne.innerHTML = "モアネー";
	} else if (navigator.language === "zh-cn") {
		text.innerHTML = "登录后，您的帐户将保留在该设备上。";
		text.style.width = "270px";
		text.style.marginLeft = "18%";
		start.innerHTML = "现在开始";
		btn.innerHTML = "提交";
		user.setAttribute("placeholder", "用户");
		pass.setAttribute("placeholder", "密码");
		moanne.innerHTML = "莫安";
	} else if (navigator.language === "zh-tw") {
		text.innerHTML = "登入後，您的帳戶將保留在該裝置上。";
		text.style.width = "270px";
		text.style.marginLeft = "18%";
		start.innerHTML = "現在開始";
		btn.innerHTML = "提交";
		user.setAttribute("placeholder", "使用者");
		pass.setAttribute("placeholder", "密碼");
		moanne.innerHTML = "莫安";
	} else if (lang === "ko") {
		//document.title
	}
});
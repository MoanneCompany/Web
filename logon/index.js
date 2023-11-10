const mysql = require("mysql2");
const User = require('./models/Users');

const dados = null;
var user = document.getElementById("user");
var pass = document.getElementById("pass");

$(document).ready(function () {
	var text = document.getElementById("text2");
	var start = document.getElementById("text");
	var btn = document.getElementById("submit");
	var moanne = document.getElementById("moanne");
	var errorUser = document.getElementById("error_user");
	var errorPass = document.getElementById("error_pass");
	var img = document.getElementById("head");
	var h = document.getElementById('h');
	var body = document.querySelector('#body');
	var userIn = false;
	var passIn = false;
	var password = 0;
	var lang;

	if (!mobile_check()) {
		body.style.alignItems = ''
		user.style.width = '300px';
		user.style.height = '30px';
		user.style.fontSize = '13px';
		pass.style.fontSize = '13px';
		pass.style.width = '300px';
		pass.style.height = '30px';
		img.style.width = '85px';
		img.style.height = '85px';
		moanne.style.fontSize = '19px';
		start.style.fontSize = '12px';
		text.style.fontSize = '9px';
		h.style.marginTop = '0';
		btn.style.width = '150px';
		btn.style.height = '27px';
		btn.style.fontSize = '11px';
		btn.style.borderWidth = '1.5px';
		errorPass.style.fontSize = '9px';
		errorUser.style.fontSize = '9px';
		errorPass.style.transform = 'translateX(35px)';
		errorUser.style.transform = 'translateX(35px)';
		text.style.transform = 'translateY(50px)';
	}

	if (navigator.language.includes("-")) {
		lang = navigator.language.split("-")[0];
	} else {
		lang = navigator.language;
	}

	if (lang === "pt") {
		text.innerHTML = "Uma vez logada, sua conta permanecerá salva nesse dispositivo.";
		text.style.width = "240px";
		text.style.marginLeft = "19%";
		start.innerHTML = "Comece agora";
		btn.innerHTML = "Enviar";
		user.setAttribute("placeholder", "Usuário");
		pass.setAttribute("placeholder", "Senha");
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
		text.innerHTML = "로그인하면 귀하의 계정은 해당 장치에 계속 저장됩니다.";
		text.style.width = "220px";
		text.style.marginLeft = "22%";
		start.innerHTML = "지금 시작하세요";
		btn.innerHTML = "제출하다";
		user.setAttribute("placeholder", "사용자");
		pass.setAttribute("placeholder", "비밀번호");
		moanne.innerHTML = "모아네";
	}

	btn.addEventListener("click", async function () {
		if (user.value === "" && pass.value === "") {
			errorUser.style.visibility = "visible";
			errorPass.style.visibility = "visible";
			userIn = true;
			passIn = true;
			if (lang === "pt") {
				errorUser.innerHTML = "Preencha este campo.";
				errorPass.innerHTML = "Preencha este campo.";
			} else if (lang === "es") {
				errorUser.innerHTML = "Complete este campo.";
				errorPass.innerHTML = "Complete este campo.";
			} else if (lang === "fr") {
				errorUser.innerHTML = "Remplissez ce champ.";
				errorPass.innerHTML = "Remplissez ce champ.";
			} else if (lang === "de") {
				errorUser.innerHTML = "Füllen Sie dieses Feld aus.";
				errorPass.innerHTML = "Füllen Sie dieses Feld aus.";
			} else if (lang === "it") {
				errorUser.innerHTML = "Compila questo campo.";
				errorPass.innerHTML = "Compila questo campo.";
			} else if (lang === "ja") {
				errorUser.innerHTML = "このフィールドに入力します。";
				errorPass.innerHTML = "このフィールドに入力します。";
			} else if (navigator.language === "zh-cn") {
				errorUser.innerHTML = "填写此字段。";
				errorPass.innerHTML = "填写此字段。";
			} else if (navigator.language === "zh-tw") {
				errorUser.innerHTML = "填寫此欄位。";
				errorPass.innerHTML = "填寫此欄位。";
			} else if (lang === "ko") {
				errorUser.innerHTML = "이 필드를 작성하세요.";
				errorPass.innerHTML = "이 필드를 작성하세요.";
			} else {
				errorUser.innerHTML = "Fill in this field.";
				errorPass.innerHTML = "Fill in this field.";
			}
		} else if (pass.value === "") {
			errorPass.style.visibility = "visible";
			passIn = true;
			if (lang === "pt") {
				errorPass.innerHTML = "Preencha este campo.";
			} else if (lang === "es") {
				errorPass.innerHTML = "Complete este campo.";
			} else if (lang === "fr") {
				errorPass.innerHTML = "Remplissez ce champ.";
			} else if (lang === "de") {
				errorPass.innerHTML = "Füllen Sie dieses Feld aus.";
			} else if (lang === "it") {
				errorPass.innerHTML = "Compila questo campo.";
			} else if (lang === "ja") {
				errorPass.innerHTML = "このフィールドに入力します。";
			} else if (navigator.language === "zh-cn") {
				errorPass.innerHTML = "填写此字段。";
			} else if (navigator.language === "zh-tw") {
				errorPass.innerHTML = "填寫此欄位。";
			} else if (lang === "ko") {
				errorPass.innerHTML = "이 필드를 작성하세요.";
			} else {
				errorPass.innerHTML = "Fill in this field.";
			}
		} else if (user.value === "") {
			errorUser.style.visibility = "visible";
			userIn = true;
			if (lang === "pt") {
				errorUser.innerHTML = "Preencha este campo.";

			} else if (lang === "es") {
				errorUser.innerHTML = "Complete este campo.";
			} else if (lang === "fr") {
				errorUser.innerHTML = "Remplissez ce champ.";
			} else if (lang === "de") {
				errorUser.innerHTML = "Füllen Sie dieses Feld aus.";
			} else if (lang === "it") {
				errorUser.innerHTML = "Compila questo campo.";
			} else if (lang === "ja") {
				errorUser.innerHTML = "このフィールドに入力します。";
			} else if (navigator.language === "zh-cn") {
				errorUser.innerHTML = "填写此字段。";
			} else if (navigator.language === "zh-tw") {
				errorUser.innerHTML = "填寫此欄位。";
			} else if (lang === "ko") {
				errorUser.innerHTML = "이 필드를 작성하세요.";
			} else {
				errorUser.innerHTML = "Fill in this field.";
			}
		} else {
			fetchData();
		}
	});

	user.addEventListener("input", function () {
		if (userIn) {
			errorUser.style.visibility = "hidden";
			userIn = false;
		}
	});

	pass.addEventListener("input", function () {
		if (passIn) {
			errorPass.style.visibility = "hidden";
			passIn = false;
		}
	});
});

function mobile_check() {
	if (navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)) {
		return true;
	} else {
		return false;
	}
}

async function fetchData() {
	const connection = mysql.createConnection({
		host: 'danrley-Inspiron-15-3520',
		user: 'root',
		password: '200915',
		database: 'moanne_users'
	});

	connection.connect((err) => {
		if (err) {
			console.error('Erro ao conectar ao MySQL:', err);
			return;
		}
		console.log('Conexão com o MySQL estabelecida com sucesso!');

		const username = user.value;
		
		// Agora você pode executar consultas SQL e interagir com o banco de dados MySQL.
	});

	/*fetch('https://raw.githubusercontent.com/MoanneCompany/web/main/1x/a.json')
		.then(response => response.json())
		.then(data => {
			dados = data;
			if (data.x.includes(user.value)) {
				fetch('https://raw.githubusercontent.com/MoanneCompany/web/main/2x/' + user.value + '.json')
					.then(response => response.json())
					.then(d => {
						if (d.a.a2 === pass.value) {
							console.log("senha correta");
						} else {
							fetch2();
						}
					})
					.catch(error => {

					});
			} else {
				fetch3();
			}
		})
		.catch(error => {

		});*/
}

async function fetch2() {

	password++;
	passIn = true;
	errorPass.style.visibility = "visible";
	if (password >= 2) {
		var link = document.createElement("a");
		link.href = "https://moannecompany.github.io/web/password.html";
		link.style.color = "#555555";

		if (lang === "pt") {
			link.textContent = "Tente recuperar a senha.";
		} else if (lang === "es") {
			link.textContent = "Intente recuperar la contraseña.";
		} else if (lang === "fr") {
			link.textContent = "Essayez de récupérer le mot de passe.";
		} else if (lang === "de") {
			link.textContent = "Versuchen Sie, das Passwort wiederherzustellen.";
		} else if (lang === "it") {
			link.textContent = "Prova a recuperare la password.";
		} else if (lang === "ja") {
			link.textContent = "パスワードを回復してみてください。";
		} else if (navigator.language === "zh-cn") {
			link.textContent = "尝试恢复密码。";
		} else if (navigator.language === "zh-tw") {
			link.textContent = "嘗試恢復密碼。";
		} else if (lang === "ko") {
			link.textContent = "비밀번호를 복구해 보세요.";
		} else {
			link.textContent = "Try recovering the password.";
		}

		errorPass.innerHTML = errorPass.innerText + " ";
		errorPass.appendChild(link);
	} else {
		if (lang === "pt") {
			errorPass.innerHTML = "Senha incorreta.";
		} else if (lang === "es") {
			errorPass.innerHTML = "Contraseña incorrecta.";
		} else if (lang === "fr") {
			errorPass.innerHTML = "Mot de passe incorrect.";
		} else if (lang === "de") {
			errorPass.innerHTML = "Falsches Passwort.";
		} else if (lang === "it") {
			errorPass.innerHTML = "Password incorretta.";
		} else if (lang === "ja") {
			errorPass.innerHTML = "パスワードが間違っています。";
		} else if (navigator.language === "zh-cn") {
			errorPass.innerHTML = "密码错误。";
		} else if (navigator.language === "zh-tw") {
			errorPass.innerHTML = "密碼錯誤。";
		} else if (lang === "ko") {
			errorPass.innerHTML = "잘못된 비밀번호.";
		} else {
			errorPass.innerHTML = "Incorrect password.";
		}
	}
}

async function fetch3() {
	var lang;

	if (navigator.language.includes("-")) {
		lang = navigator.language.split("-")[0];
	} else {
		lang = navigator.language;
	}

	var sim = false;

	if (lang === "pt") {
		if (confirm('Deseja criar uma nova conta com o nome "' + user.value + '"?')) {
			sim = true;
		}
	} else if (lang === "es") {
		if (confirm('¿Quieres crear una nueva cuenta con el nombre "' + user.value + '"?')) {
			sim = true;
		}
	} else if (lang === "fr") {
		if (confirm('Voulez-vous créer un nouveau compte avec le nom "' + user.value + '"?')) {
			sim = true;
		}
	} else if (lang === "de") {
		if (confirm('Möchten Sie ein neues Konto mit dem Namen „danzito' + user.value + '“ erstellen?')) {
			sim = true;
		}
	} else if (lang === "it") {
		if (confirm('Vuoi creare un nuovo account con il nome "' + user.value + '"?')) {
			sim = true;
		}
	} else if (lang === "ja") {
		if (confirm('「' + user.value + '」という名前で新しいアカウントを作成しますか?')) {
			sim = true;
		}
	} else if (navigator.language === "zh-cn") {
		if (confirm('您想创建一个名为“' + user.value + '”的新帐户吗？')) {
			sim = true;
		}
	} else if (navigator.language === "zh-tw") {
		if (confirm('您想建立一個名為「' + user.value + '」的新帳戶嗎？')) {
			sim = true;
		}
	} else if (lang === "ko") {
		if (confirm('"' + user.value + '"라는 이름으로 새 계정을 만드셨나요?')) {
			sim = true;
		}
	} else {
		if (confirm('Do you want to create a new account with the name "' + user.value + '"?')) {
			sim = true;
		}
	}

	if (sim) {
		console.log(dados.x);
		const url = 'https://raw.githubusercontent.com/MoanneCompany/web/main/1x/a.json';
		dados.x.push(user.value);
		const userJSON = {
			"a": {
				"a1": user.value,
				"a2": pass.value
			}
		};

		const updateResponse = {
			method: "PUT",
			headers: {
				"Authorization": "token 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",
				"ContentType": "application/json",
			},
			body: JSON.stringify(userJSON)
		};

		const updateResponse2 = {
			method: "PUT",
			headers: {
				"Authorization": "token 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",
				"ContentType": "application/json",
			},
			body: JSON.stringify(dados)
		};


		try {
			const rs = await fetch("https://api.github.com/repos/moannecompany/web/contents/2x/" + user.value + ".json", updateResponse);

			if (rs.status === 200) {
				console.log('S');
			} else {
				console.error('N');
			}
		} catch (error) {
			console.error('E');
		}

		try {
			const rs2 = await fetch("https://api.github.com/repos/moannecompany/web/contents/1x/a.json", updateResponse2);

			if (rs2.status === 200) {
				console.log('S');
			} else {
				console.error('N');
			}
		} catch (error) {
			console.error('E');
		}

	}
}

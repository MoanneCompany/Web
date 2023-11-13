<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Start on Moanne</title>
	<link rel="icon" type="img/png" href="moanne.png">
	<style>
		@font-face {
			font-family: poppins;
			font-weight: normal;
			src: url('/web/Poppins-Regular.ttf');
		}

		@font-face {
			font-family: poppins_semi;
			font-weight: normal;
			src: url('/web/Poppins-SemiBold.ttf');
		}

		@font-face {
			font-family: poppins_light;
			font-weight: normal;
			src: url('/web/Poppins-Light.ttf');
		}

		body {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #111111;
			background-size: cover;
		}

		#h {
			display: table-cell;
			align-items: center;
			text-align: center;
			justify-content: center;
			margin-top: 30%;
			vertical-align: middle;
		}

		#head {
			width: 150px;
			height: 150px;
		}

		#moanne {
			font-size: 29px;
			transform: translateY(-20px);
			color: white;
			font-weight: normal;
			font-family: poppins_semi;
		}

		#text {
			font-size: 20px;
			transform: translateY(-35px);
			color: white;
			font-weight: normal;
			font-family: poppins_light;
		}

		#log {
			width: 380px;
			display: table-cell;
			align-items: center;
			justify-content: center;
			vertical-align: middle;
			transform: translateY(-15px);
		}

		#log #user {
			width: 380px;
			height: 45px;
			background-color: white;
			border-radius: 15px;
			font-size: 15px;
			padding-left: 12px;
			font-weight: normal;
			font-family: poppins;
			color: #111;
		}

		#log #pass {
			margin-top: 19px;
			width: 380px;
			font-size: 15px;
			height: 45px;
			background-color: white;
			border-radius: 15px;
			padding-left: 12px;
			font-weight: normal;
			font-family: poppins;
			color: #111;
			transform: translateY(-10px);
			visibility: hidden;
			display: none;
		}

		#log #user:placeholder #log #pass:placeholder {
			color: #494949;
		}

		#log #submit {
			width: 180px;
			height: 40px;
			border-radius: 17px;
			background-color: #111;
			border-color: white;
			border-width: 3px;
			color: white;
			font-size: 15px;
			margin-top: 40px;
			font-weight: normal;
			font-family: poppins;
		}

		#text2 {
			width: 200px;
			transform: translateY(100px);
			margin-left: 23.5%;
			margin-right: 50%;
			font-size: 12px;
			font-weight: normal;
			color: #838383;
			font-family: poppins;
		}

		#error_user {
			font-weight: normal;
			font-size: 10px;
			font-family: poppins_semi;
			width: 100%;
			text-align: left;
			margin: 0;
			color: white;
			transform: translateX(10px);
			visibility: hidden;
		}

		#error_pass {
			font-weight: normal;
			font-size: 10px;
			font-family: poppins_semi;
			width: 100%;
			text-align: left;
			margin: 0;
			color: white;
			transform: translate(10px, -10px);
			visibility: hidden;
		}
	</style>
</head>

<body>
	<?php

	$servername = "localhost";
	$username = "root";
	$password = "Moanne1315114145031513161141425!!";
	$dbname = "moanne_users";

	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
		echo $conn->connect_error;
	}

	if (isset($_GET['usuario'])) {
		$user = $_GET['usuario'];

		$sql = "SELECT * FROM users WHERE name = '$user'";
		$result = $conn->query($sql);
		$true;

		if ($result->num_rows > 0) {
			$true = "true";
		} else {
			$true = "false";
		}

		$conn->close();
	} else {
		$var = "no var";
		echo "<script>var getPHP = '$var'</script>";
	}

	?>

	<div id="h">
		<img id="head" src="/web/white-ic.png">
		<h1 id="moanne">Moanne</h1>
		<h1 id="text">Start now</h1>
		<div id="log">
			<input placeholder="User" id="user" type="text">
			<h6 id="error_user">teste</h6>
			<input placeholder="Password" id="pass" type="password">
			<h6 id="error_pass">teste</h6>
			<button id="submit">Next</button>
		</div>
		<h4 id="text2">Once logged in, your account will remain saved on that device.</h4>
	</div>

</body>
<script>
	const moanne = document.getElementById('moanne');
	const startnow = document.getElementById('text');
	const user = document.getElementById('user');
	const pass = document.getElementById('pass');
	const erroruser = document.getElementById('error_user');
	const errorpass = document.getElementById('error_pass');
	const btn = document.getElementById('submit');
	const text = document.getElementById('text2');
	const body = document.querySelector('body');
	const head = document.getElementById('h');

	document.addEventListener('DOMContentLoaded', function() {


		var userOn = false;
		var lang = getLang();

		if (lang === 'pt') {
			document.title = 'Comece na Moanne';
			startnow.innerHTML = 'Comece agora';
			user.setAttribute('placeholder', 'Usuário');
			pass.setAttribute('placeholder', 'Senha');
			btn.innerHTML = 'Próximo';
			text.innerHTML = 'Uma vez logada, sua conta permanecerá salva neste dispositivo.';
			text.style.width = '230px'
			text.style.marginLeft = '20%';
			erroruser.innerHTML = 'Preencha este campo.'
		}

		if (!detectar_mobile()) {
			body.style.alignItems = 'top';
			body.style.justifyContent = 'top';
			head.style.margin = '0';
			head.style.marginTop = '5%';
		}

		btn.addEventListener('click', function() {
			if (!userOn) {
				if (user.value === '') {
					erroruser.style.visibility = 'visible';
				} else {
					senddatatophp(user.value);
					alert(getPHP);
				}
			}
		});

		inputs();
	});

	function senddatatophp(usuario) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
			}
		};

		xmlhttp.open("GET", "mysql.php?usuario=" + usuario, true);
		xmlhttp.send();
	}

	function inputs() {
		user.addEventListener('input', function() {
			erroruser.style.visibility = 'hidden';
		});

		pass.addEventListener('input', function() {
			errorpass.style.visibility = 'hidden';
		});
	}

	function getLang() {
		var lang;
		if (navigator.language.includes("-")) {
			lang = navigator.language.split("-")[0];
		} else {
			lang = navigator.language;
		}

		if (navigator.language === 'zh-cn') {
			lang = 'zh-cn';
		} else if (navigator.language === 'zh-tw') {
			lang = 'zh-tw';
		}

		return lang;
	}

	function detectar_mobile() {
		if (navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			return true;
		} else {
			return false;
		}
	}
</script>

</html>
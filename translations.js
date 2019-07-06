// This scripts purpose it to show the site in either english or german

var translations = {	//object that contains all translations

	"en" : {
		// Header-texts:
		"home" : "Home",
		"projects" : "Projects",
		"contact" : "Contact",

		// index.html-texts:
		"whatAmI" : "I'm a Software Engineer",
		"experience" : "Experienced in Python and JavaScript",
		"whatIdo" : "Working on AI, Games, IoT and Networking",
		"tools" : "Tools I use: Unity3D, Tensorflow.js and Django",
		"AI-header": "Artificial Intelligence",
		"AI-text": "Lorem ipsum-eng",
	},

	"de" : {
		// Header-texts:
		"home" : "Start",
		"projects" : "Projekte",
		"contact" : "Kontakt",

		// index.html-texts:
		"whatAmI" : "Ich bin  Software-Ingenieur",
		"experience" : "Ich schreibe in Python und JavaScript",
		"whatIdo" : "Ich arbeite an IoT, Netzwerkskripts, KI und Spielen",
		"tools" : "Ich nutze Tensorflow.js, Django und Unity3D",
		"AI-header": "Künstliche Intelligenz",
		"AI-text": "Lorem ipsum-de",
	}
}

// function used for translating
function translate(language){
	for(var key in translations[language]) {
		var element = document.getElementById(key)
		if (element != null){
			element.textContent = translations[language][key]
		}
	}
}

//change language and save it
function setLanguage(language){
	localStorage.setItem("lang", language)
	translate(language)
}


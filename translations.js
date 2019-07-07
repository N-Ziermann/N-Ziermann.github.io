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
		"game-header": "Game Development",
		"game-text": "Lorem ipsum-de",
		"software-header": "Software Development",
		"software-text": "Lorem ipsum-de",
		"cert-header": "Certified in Algorithms and Data Structures",
		"cert-text": "Lorem ipsum-de",


		// projects.html-texts:
		"Ai1-header" : "Placeholder",
		"Ai1-text" : "Lorem ipsum-eng",

		"game1-header" : "Placeholder",
		"game1-text" : "Lorem ipsum-eng",

		"software1-header" : "Pi-Deck",
		"software1-text" : "A raspberry-pi based macro tool inspired by the elgato stream deck that can be used wirelessly and is configured through the webbrowser.",
		
		"software2-header" : "Placeholder",
		"software2-text" : "Lorem ipsum-eng",


		// contact.html-texts:
		"touch" : "Get in touch",
		"phone" : "Phone: 1 - 555 555 5555",


		//projects/pi-deck.html - texts:
		"pi-deck-intro" : "The pi-deck is a raspberry-pi based macro tool inspired by the elgato stream deck that can be used wirelessly and is configured through the webbrowser.",
		"pi-deck-config" : "The configuration page is based on <i>django</i> and stores the pi-deck's commands inside a <i>sqlite3 database</i>.<br>This database then gets accessed through the <i>PyQt5</i> based GUI program.",
		"pi-deck-usage" : "When now pressing one of the twelfe Buttons in the GUI, the command associated with it will be send to the PC that's meant to be controlled with the pi-deck.<br>This PC wil then interpret the command and do one of four things:<br><br><ul><li>Open a program or file</li><li>Open a webpage</li><li>Type a string</li><li>Press a certain key combination</li></ul></h5>",

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
		"game-header": "Spieleentwicklung",
		"game-text": "Lorem ipsum-de",
		"software-header": "Softwareentwicklung",
		"software-text": "Lorem ipsum-de",
		"cert-header": "Zertifiziert in Algorithmen and Datenstrukturen",
		"cert-text": "Lorem ipsum-de",


		// projects.html-texts:
		"Ai1-header" : "Platzhalter",
		"Ai1-text" : "Lorem ipsum-de",
		
		"game1-header" : "Platzhalter",
		"game1-text" : "Lorem ipsum-de",
		
		"software1-header" : "Pi-Deck",
		"software1-text" : "Ein auf dem Raspberry-pi basierender Macro-Kontroller, welcher vom Elgato-Stream-Deck inspiriert ist und, durch die Nutzung einer Webkonfiguration, sogar kabellos funktioniert.",
		
		"software2-header" : "Platzhalter",
		"software2-text" : "Lorem ipsum-de",


		// contact.html-texts:
		"touch" : "Mich kontaktieren",
		"phone" : "Tel. : 1 - 555 555 5555",


		//projects/pi-deck.html - texts:
		"pi-deck-intro" : "Das Pi-Deck is ein auf dem Raspberry-pi basierender Macro-Kontroller, welcher vom Elgato-Stream-Deck inspiriert ist und, durch die Nutzung einer Webkonfiguration, sogar kabellos funktioniert.",
		"pi-deck-config" : "Die Webkonfiguration basieret auf <i>Django</i> und speichert die Kommandos des Pi-Deck in einer <i>sqlite3 Datenbank</i>.<br>Diese Datenbank kann daraufhin das, auf <i>PyQt5</i> basierende, GUI nutzen.",
		"pi-deck-usage" : "Wird nun einer der zwölf GUI-Knöpfe gedrückt, wir das damit verbundende Kommando an den, mit dem Pi-Deck verbundenden, Computer gesendet.<br>Dieser Computer interpretiert dieses Kommando daraufhin um eines von vier Dingen zu tun:<br><br><ul><li>Ein/e Programm/Datei öffnen</li><li>Eine Website öffnen</li><li>Einen Text tippen</li><li>Eine Tastenkombination drücken</li></ul></h5>",

	}
}

// function used for translating
function translate(language){
	for(var key in translations[language]) {
		var element = document.getElementById(key)
		if (element != null){
			element.innerHTML = translations[language][key]
		}
	}
}

//change language and save it
function setLanguage(language){
	localStorage.setItem("lang", language)
	translate(language)
}


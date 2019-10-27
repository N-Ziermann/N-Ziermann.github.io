// This scripts purpose it to show the site in either english or german

var translations = {	//object that contains all translations

	"en" : {
		// Header-texts:
		"home" : "Home",
		"projects" : "Projects",
		"contact" : "Contact",


		// index.html-texts:
		"whatAmI" : "I'm a Software Engineer",
		"experience" : "Experienced in Linux, Python and JavaScript",
		"whatIdo" : "Working on AI, Games, IoT and Networking",
		"tools" : "Tools I use: Unity3D, Tensorflow.js and Django",
		"AI-header": "Artificial Intelligence",
		"AI-text": "My projects for solving mashine learning problems in Python and JavaScripts using Tensorflow.",
		"game-header": "Game Development",
		"game-text": "Game Development Projects ranging from Game-Jam-Submissions to Fantasy-Console-Games.",
		"software-header": "Software Development",
		"software-text": "Software Development Projects like Internet of Things Devices or Full-Stack-Webdevelopment.",
		"cert-header": "Certified in Algorithms and Data Structures",
		"cert-text": "This certificate from freecodecamp.org represents approximately 300 hours of coursework in the field of Algorithms and Data Structures.",


		// projects.html-texts:
		"Ai1-header" : "Placeholder",
		"Ai1-text" : "Lorem ipsum-eng",

		"game1-header" : "Love Potion",
		"game1-text" : "Love Potion is a jump and run made in a group of 4 people within a week using the Unity game engine.",

		"software1-header" : "Pi-Deck",
		"software1-text" : "A raspberry-pi based macro tool inspired by the elgato stream deck that can be used wirelessly and is configured through the webbrowser.<br><br>Made with Python",

		"software2-header" : "Placeholder",
		"software2-text" : "Lorem ipsum-eng",


		// contact.html-texts:
		"touch" : "Get in touch",
		"phone" : "Phone: 01575 4639530",


		//projects/pi-deck.html - texts:
		"pi-deck-intro" : "The pi-deck is a raspberry-pi based macro tool inspired by the elgato stream deck that can be used wirelessly and is configured through the webbrowser.",
		"pi-deck-config" : "The configuration page is based on <i>django</i> and stores the pi-deck's commands inside a <i>sqlite3 database</i>.<br>This database then gets accessed through the <i>PyQt5</i> based GUI program.",
		"pi-deck-usage" : "When now pressing one of the twelfe Buttons in the GUI, the command associated with it will be send to the PC that's meant to be controlled with the pi-deck.<br>This PC wil then interpret the command and do one of four things:<br><br><ul><li>Open a program or file</li><li>Open a webpage</li><li>Type a string</li><li>Press a certain key combination</li></ul></h5>",

		//projects/love_potion.html - texts:
		"love-potion-one" : "Love Potion is a jump and run made in a group of 4 people within a week.",
		"love-potion-two" : "It was made for the second Brackey's Game Jam and scored 23. place out of 325 entries.",
		"love-potion-three" : "I was the main coder and only got assistance near the end to do some final bugfixing.",

	},

	"de" : {
		// Header-texts:
		"home" : "Start",
		"projects" : "Projekte",
		"contact" : "Kontakt",


		// index.html-texts:
		"whatAmI" : "Ich bin Software-Ingenieur",
		"experience" : "Ich schreibe primär in Python und JavaScript und nutze Linux sowie Windows",
		"whatIdo" : "Ich arbeite an IoT, Netzwerkskripts, KI und Spielen",
		"tools" : "Ich nutze Tensorflow.js, Django und Unity3D",
		"AI-header": "Künstliche Intelligenz",
		"AI-text": "Meine Projekte zur Lösung von Mashine-Learning-Problemen, welche in Python und JavaScript mit Hilfe von Tensorflow geschrieben sind.",
		"game-header": "Spieleentwicklung",
		"game-text": "Spieleentwicklungsprojekte wie Fantasy-Console-Spiele oder die Teilnahme an Game-Jams.",
		"software-header": "Softwareentwicklung",
		"software-text": "Softwareentwicklungsprojekte wie IoT Geräte oder Full-Stack-Webentwicklung.",
		"cert-header": "Zertifiziert in Algorithmen and Datenstrukturen",
		"cert-text": "Diese Zertifikat von freecodecamp.org representiert etwa 300 Stunden an Kursarbeit im Feld der Algorithmen und Datenstrukturen.",


		// projects.html-texts:
		"Ai1-header" : "Platzhalter",
		"Ai1-text" : "Lorem ipsum-de",

		"game1-header" : "Love Potion",
		"game1-text" : "Love Potion ist ein Jump and Run welches, mit der Unity-Game-Engine, von vier Personen innerhalb einer Woche erstellt wurde.",

		"software1-header" : "Pi-Deck",
		"software1-text" : "Ein auf dem Raspberry-pi basierender Macro-Kontroller, welcher vom Elgato-Stream-Deck inspiriert ist und, durch die Nutzung einer Webkonfiguration, sogar kabellos funktioniert.<br><br>Geschrieben in Python",

		"software2-header" : "Platzhalter",
		"software2-text" : "Lorem ipsum-de",


		// contact.html-texts:
		"touch" : "Mich kontaktieren",
		"phone" : "Tel. : 01575 4639530",


		//projects/pi-deck.html - texts:
		"pi-deck-intro" : "Das Pi-Deck is ein auf dem Raspberry-pi basierender Macro-Kontroller, welcher vom Elgato-Stream-Deck inspiriert ist und, durch die Nutzung einer Webkonfiguration, sogar kabellos funktioniert.",
		"pi-deck-config" : "Die Webkonfiguration basieret auf <i>Django</i> und speichert die Kommandos des Pi-Deck in einer <i>sqlite3 Datenbank</i>.<br>Diese Datenbank kann daraufhin das, auf <i>PyQt5</i> basierende, GUI nutzen.",
		"pi-deck-usage" : "Wird nun einer der zwölf GUI-Knöpfe gedrückt, wir das damit verbundende Kommando an den, mit dem Pi-Deck verbundenden, Computer gesendet.<br>Dieser Computer interpretiert dieses Kommando daraufhin um eines von vier Dingen zu tun:<br><br><ul><li>Ein/e Programm/Datei öffnen</li><li>Eine Website öffnen</li><li>Einen Text tippen</li><li>Eine Tastenkombination drücken</li></ul></h5>",

		//projects/love_potion.html - texts:
		"love-potion-one" : "Love Potion ist ein Jump and Run welches von vier Personen innerhalb einer Woche erstellt wurde.",
		"love-potion-two" : "Es wurde zur Teilnahme am zweiten Brackey's Game Jam erstellt und erreichte den 23. Platz bei insgesammt 325 Einsendungen.",
		"love-potion-three" : "Ich hatte die Rolle des Programmierers und bekam nur am Ende Unterstützung beim Bugfixing.",

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

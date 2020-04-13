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
		"whatIdo" : "Working on Games, IoT and Networking",
		"tools" : "Tools I use: Django, Bootstrap, React and Unity3D",
		"web-header": "Web Development",
		"web-text": "Full Stack Web Development Projects.",
		"game-header": "Game Development",
		"game-text": "Game Development Projects ranging from Game-Jam-Submissions to Fantasy-Console-Games.",
		"software-header": "Software Development",
		"software-text": "Software Development Projects like Internet of Things Devices or Full-Stack-Webdevelopment.",
		"cert-header": "Certified in Algorithms and Data Structures",
		"cert-text": "This certificate from freecodecamp.org represents approximately 300 hours of coursework in the field of Algorithms and Data Structures.",
		"cert2-header": "Certified in Front End Libraries",
		"cert2-text": "This certificate from freecodecamp.org represent approximately 300 hours of coursework in the field of Front End Libraries, especially focussing on React and Redux.",


		// projects.html-texts:
		"web1-header" : "Password Manager",
		"web1-text" : "A password manager website written in Django that uses a combination of hashing(PBKDF2) and encryption(AES) to insure the secure transmission of data. ",

		"game1-header" : "Love Potion",
		"game1-text" : "Love Potion is a jump and run made in a group of 4 people within a week using the Unity game engine.",

		"software1-header" : "Pi-Deck",
		"software1-text" : "A raspberry-pi based macro tool inspired by the elgato stream deck that can be used wirelessly and is configured through the webbrowser.<br><br>Made with Python",

		"software2-header" : "Placeholder",
		"software2-text" : "Lorem ipsum-eng",


		// contact.html-texts:
		"touch" : "Get in touch",
		"phone" : "Phone: 01575 4639530",
		"contactNote" : "This contact page also serves as the contact page for: <br><b>GitHub:</b> github.com/N-Ziermann<br><b>linked projects</b>: niklasziermann.pythonanywhere.com/password</p>",


		//projects/pi-deck.html - texts:
		"pi-deck-intro" : "The pi-deck is a raspberry-pi based macro tool inspired by the elgato stream deck that can be used wirelessly and is configured through the webbrowser.",
		"pi-deck-config" : "The configuration page is based on <i>django</i> and stores the pi-deck's commands inside a <i>sqlite3 database</i>.<br>This database then gets accessed through the <i>PyQt5</i> based GUI program.",
		"pi-deck-usage" : "When now pressing one of the twelfe Buttons in the GUI, the command associated with it will be send to the PC that's meant to be controlled with the pi-deck.<br>This PC wil then interpret the command and do one of four things:<br><br><ul><li>Open a program or file</li><li>Open a webpage</li><li>Type a string</li><li>Press a certain key combination</li></ul></h5>",

		//projects/love_potion.html - texts:
		"love-potion-one" : "Love Potion is a jump and run made in a group of 4 people within a week.",
		"love-potion-two" : "It was made for the second Brackey's Game Jam and scored 23. place out of 325 entries.",
		"love-potion-three" : "I was the main coder and only got assistance near the end to do some final bugfixing.",

		//projects/nikscript.html - texts:
		"run-button" : "Run",
		"fizz-button" : "FizzBuzz",
		"recursion-button" : "Recursion",
		"math-button" : "Math Operations",
		"nikscript-intro" : "Nikscript is a programming language written in JavaScript.",
		"nikscript-inspiration" : "It's inspired by JavaScript (variables) and Python (# for comments) but also has some language specific syntax like its for loops: for (i = lowerLimit < upperLimit).",
		"nikscript-features" : "Its featureset includes:",
		"nikscript-feature-1" : "Variables (floats and strings)",
		"nikscript-feature-2" : "for and while loops",
		"nikscript-feature-3" : "Buildin functions (print and len)",
		"nikscript-feature-4" : "Function definitions",
		"nikscript-feature-5" : "Recursion",

	},

	"de" : {
		// Header-texts:
		"home" : "Start",
		"projects" : "Projekte",
		"contact" : "Kontakt",


		// index.html-texts:
		"whatAmI" : "Ich bin Software-Ingenieur",
		"experience" : "Ich schreibe primär in Python und JavaScript und nutze Linux sowie Windows",
		"whatIdo" : "Ich arbeite an IoT, Netzwerkskripts und Spielen",
		"tools" : "Ich nutze unter anderem Django, Bootstrap, React und Unity3D",
		"web-header": "Webentwicklung",
		"web-text": "Full-Stack-Webentwicklungs Projekte.",
		"game-header": "Spieleentwicklung",
		"game-text": "Spieleentwicklungsprojekte wie Fantasy-Console-Spiele oder die Teilnahme an Game-Jams.",
		"software-header": "Softwareentwicklung",
		"software-text": "Softwareentwicklungsprojekte wie IoT Geräte oder Full-Stack-Webentwicklung.",
		"cert-header": "Zertifiziert in Algorithmen and Datenstrukturen",
		"cert-text": "Diese Zertifikat von freecodecamp.org representiert etwa 300 Stunden an Kursarbeit im Feld der Algorithmen und Datenstrukturen.",
		"cert2-header": "Zertifiziert im Feld der Front End Libraries",
		"cert2-text": "Diese Zertifikat von freecodecamp.org representiert etwa 300 Stunden an Kursarbeit im Feld der Front End Libraries, mit einem Fokus auf React und Redux.",

		// projects.html-texts:
		"web1-header" : "Passwort Manager",
		"web1-text" : "Eine Passwort-Manager Seite welche in Django geschrieben ist und eine Kombination aus Hashing(PBKDF2)- und Verschlüsselungsalgorithmen(AES) zur sicheren Datenübertragung nutzt.",

		"game1-header" : "Love Potion",
		"game1-text" : "Love Potion ist ein Jump and Run welches, mit der Unity-Game-Engine, von vier Personen innerhalb einer Woche erstellt wurde.",

		"software1-header" : "Pi-Deck",
		"software1-text" : "Ein auf dem Raspberry-pi basierender Macro-Kontroller, welcher vom Elgato-Stream-Deck inspiriert ist und, durch die Nutzung einer Webkonfiguration, sogar kabellos funktioniert.<br><br>Geschrieben in Python",

		"software2-header" : "Platzhalter",
		"software2-text" : "Lorem ipsum-de",


		// contact.html-texts:
		"touch" : "Mich kontaktieren",
		"phone" : "Tel. : 01575 4639530",
		"contactNote" : "Dieses Impressum gilt ebenfalls als Impressum für: <br><b>GitHub:</b> github.com/N-Ziermann<br><b>verlinkte Projekte</b>: niklasziermann.pythonanywhere.com/password</p>",


		//projects/pi-deck.html - texts:
		"pi-deck-intro" : "Das Pi-Deck is ein auf dem Raspberry-pi basierender Macro-Kontroller, welcher vom Elgato-Stream-Deck inspiriert ist und, durch die Nutzung einer Webkonfiguration, sogar kabellos funktioniert.",
		"pi-deck-config" : "Die Webkonfiguration basieret auf <i>Django</i> und speichert die Kommandos des Pi-Deck in einer <i>sqlite3 Datenbank</i>.<br>Diese Datenbank kann daraufhin das, auf <i>PyQt5</i> basierende, GUI nutzen.",
		"pi-deck-usage" : "Wird nun einer der zwölf GUI-Knöpfe gedrückt, wir das damit verbundende Kommando an den, mit dem Pi-Deck verbundenden, Computer gesendet.<br>Dieser Computer interpretiert dieses Kommando daraufhin um eines von vier Dingen zu tun:<br><br><ul><li>Ein/e Programm/Datei öffnen</li><li>Eine Website öffnen</li><li>Einen Text tippen</li><li>Eine Tastenkombination drücken</li></ul></h5>",

		//projects/love_potion.html - texts:
		"love-potion-one" : "Love Potion ist ein Jump and Run welches von vier Personen innerhalb einer Woche erstellt wurde.",
		"love-potion-two" : "Es wurde zur Teilnahme am zweiten Brackey's Game Jam erstellt und erreichte den 23. Platz bei insgesammt 325 Einsendungen.",
		"love-potion-three" : "Ich hatte die Rolle des Programmierers und bekam nur am Ende Unterstützung beim Bugfixing.",

		//projects/nikscript.html - texts:
		"run-button" : "Ausführen",
		"fizz-button" : "FizzBuzz",
		"recursion-button" : "Rekursion",
		"math-button" : "Mathematische Operationen",

		"nikscript-intro" : "Nikscript ist eine in JavaScript geschriebene Programmiersprache.",
		"nikscript-inspiration" : "Sie ist von JavaScript (Variablen) und Python (# für Kommentare) inspiriert, enthällt jedoch auch eigenen Syntax, welcher zum Beispiel bei for-Schleifen zu sehen ist: for (i = Minimum < Maximum).",
		"nikscript-features" : "Nikscript unterstützt:",

		"nikscript-feature-1" : "Variablen (Floats und Strings)",
		"nikscript-feature-2" : "for und while Schleifen",
		"nikscript-feature-3" : "Eingebaute Funktionen (print und len)",
		"nikscript-feature-4" : "Funktionsdefinitionen",
		"nikscript-feature-5" : "Rekursion",

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

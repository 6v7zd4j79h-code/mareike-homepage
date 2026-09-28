# Gehirn

Das Gedächtnis zwischen den Sitzungen. `/shutdown` schreibt es fort, `/start` liest es. Kurz halten: Stand, Entscheidungen, offene Punkte. Keine Passwörter, Schlüssel oder Kundendaten hier eintragen.

## Über Mareike und das Projekt

- Mareike Krohnen, Coach. Themen: Körperbewusstsein, Breathwork, Entlastung im Alltag, Brand your Voice, Rooted Tarot und Rooted Lenormand, 1:1- und Premium-Begleitung.
- Homepage mareikekrohnen.de: statisches HTML, GitHub Pages, Repository `6v7zd4j79h-code/mareike-homepage`, Hauptzweig `main`.
- Jede Seite ist ein eigener Ordner mit `index.html` (zum Beispiel `breathwork/`, `angebote/`, `tarot/`). Gemeinsames Design in `assets/style.css`, Skripte in `assets/app.js`.
- Werkzeuge rundherum: Brevo (Newsletter, Double-Opt-in), Stripe (Zahlung mit PayPal und Klarna), Canva, Wix, Zoom, Google Kalender, Trello.
- Sie spricht ihre Nachrichten oft ein. Antworten auf Deutsch, klar und ohne Technikwörter.

## Aktueller Stand der Homepage

- Startseite mit zwei Kacheln. Zwei Produkttreppen: Körperbewusstsein (mit Breathwork) und Entlastung im Alltag (mit „Ich baue es dir“).
- Newsletter und Anmeldungen laufen mit Double-Opt-in über Brevo, Formulare schicken im Hintergrund ab.
- Letzte Arbeiten: Datenschutz um PayPal und Klarna ergänzt, Dankeseite der 1:1-Begleitung löst die Kaufmail aus, Widerrufshinweis bei Tarot und Lenormand.

## Ideen und Projekte

### Atem-App (Idee, Prototyp steht)
- Eigene Breathwork-App, nur Atmung. Einstieg über das Gefühl: „Wie geht es mir, was brauche ich, was soll die Atmung bewirken?“ Notfallatmung immer mit einem Tipp erreichbar.
- Übungen, die Mareike will: Notfallatmung (Stress, Alltag mit Kindern), Einschlafbegleitung, sanft wach werden (Alternative zur Feueratmung), Atmung für mehr Weiblichkeit, für mehr Männlichkeit, Balance-Atmung, Atmen beim Spazierengehen, Fehlatmung erkennen und richtig atmen lernen.
- Namensideen: „Atme deinen Schlüssel“ (Favorit), „Under your breath“, „Atemschlüssel“, „KeyBreath“. Marke und Domain noch nicht geprüft.
- Prototyp: `.claude/projekte/atem-app/prototyp.html`, auch als Artifact: https://claude.ai/artifact/CBXcBGSvshWqjMTYm2jAFA
- Die Übungen im Prototyp sind Platzhalter. Weiblichkeit und Männlichkeit fehlen noch, die Technik dafür muss von Mareike kommen.
- Eigenes Repository `atem-app` ist geplant, aber noch nicht angelegt. Claude kann keine Repositories anlegen; Mareike legt es auf github.com/new an (privat).
- Wichtig: keine Heilversprechen, Sicherheitshinweise (Schwangerschaft, Herz, Epilepsie, psychische Krisen), Stimmungsdaten nur auf dem Gerät.

### Coach-App (Idee)
- Frage: Gibt es eine App, die Coaches vom Anfang an begleitet (Positionierung, erste Klient:innen, Sessions vor- und nachbereiten, eigene Reflexion, Methodensammlung)? Nichts gefunden, das das auf Deutsch zusammen abdeckt. Nächstes Coaching-nahes Werkzeug: Coachingspace. Noch nicht weiterverfolgt.

## Offene Punkte

- [ ] Repository `atem-app` anlegen, dann den Prototyp dorthin umziehen.
- [ ] Mareike: Welche Atemtechniken nutzt sie für Weiblichkeit und Männlichkeit? Eigene Tonaufnahmen?
- [ ] Namen der Atem-App auf Marke und Domain prüfen.

## Sitzungsprotokoll

- 2026-09-28: Ideen Coach-App und Atem-App besprochen, Atem-Prototyp gebaut, Befehle `/start` und `/shutdown` mit diesem Gehirn eingerichtet.

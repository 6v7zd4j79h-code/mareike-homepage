---
name: shutdown
description: Sitzung beenden. Sichert alle Änderungen (commit und push), schreibt das Gehirn (.claude/gehirn.md) fort und bringt es auf main, damit die nächste Sitzung mit /start dort weitermachen kann. Verwenden, wenn Mareike /shutdown tippt oder „wir machen Schluss“ sagt.
---

# /shutdown: alles sichern und das Gehirn fortschreiben

## 1. Gehirn aktualisieren
Überarbeite `.claude/gehirn.md` anhand dieser Sitzung:
- „Aktueller Stand“, „Ideen und Projekte“ und „Offene Punkte“ auf den neuen Stand bringen. Erledigtes abhaken oder streichen, Neues ergänzen, Entscheidungen festhalten.
- Unter „Sitzungsprotokoll“ eine Zeile anhängen: Datum und in einem Satz, was passiert ist. Nur die letzten 15 Einträge behalten.
- Kurz bleiben. Das Gehirn ist eine Zusammenfassung, kein Gesprächsverlauf.
- Niemals Passwörter, API-Schlüssel, Zugangsdaten oder persönliche Daten von Kund:innen hineinschreiben.
- Das Repository ist öffentlich, jeder kann das Gehirn auf GitHub lesen. Unveröffentlichte Ideen nur als Verweis auf ihr privates Repository eintragen, ohne Details.
- Alles außerhalb von `.claude/` erscheint auf der Webseite. Eigene Projekte wie die Atem-App liegen in ihren eigenen privaten Repositories, nicht hier.

## 2. Alles auf dem Arbeitszweig sichern
- `git status` prüfen. Alle Änderungen dieser Sitzung committen, mit einer klaren deutschen Nachricht im Stil der bisherigen Commits.
- Auf den Zweig dieser Sitzung pushen: `git push -u origin <aktueller-zweig>`.

## 3. Das Gehirn auf `main` bringen
Die nächste Sitzung startet von `main`. Damit sie das Gehirn sieht, muss es dort liegen.
- Nur die Dateien unter `.claude/` kommen auf `main`, keine Änderungen an der Webseite. Webseiten-Änderungen gehen erst online, wenn Mareike das ausdrücklich sagt.
- Vorgehen:
  ```
  git fetch origin main
  git checkout -B gehirn-sync origin/main
  git checkout <arbeitszweig> -- .claude
  git commit -m "Gehirn: Stand vom <Datum>"
  git push origin gehirn-sync:main
  git checkout <arbeitszweig>
  ```
- Mareike hat erlaubt, dass `/shutdown` den Ordner `.claude/` auf `main` schreibt. Das gilt nur für `.claude/`.

## 4. Abschluss melden
Kurz auf Deutsch, höchstens 6 Zeilen:
- Was gesichert wurde.
- Ob Webseiten-Änderungen noch auf dem Arbeitszweig warten und nicht online sind.
- Die offenen Punkte fürs nächste Mal.
- Hinweis: „Du kannst dieses Fenster jetzt schließen. Im neuen Fenster tippst du /start.“

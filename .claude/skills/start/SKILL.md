---
name: start
description: Sitzung starten. Lädt den gespeicherten Projektstand aus dem Gehirn (.claude/gehirn.md), damit nicht alles neu gelesen werden muss. Verwenden, wenn Mareike /start tippt oder „wir starten“ sagt.
---

# /start: Projektstand laden

1. Hol den neuesten Stand von `main`: `git fetch origin main`. Wenn der aktuelle Zweig hinter `main` liegt und keine eigenen Änderungen hat, `git merge origin/main`.
2. Lies `.claude/gehirn.md` vollständig. Das ist das Gedächtnis. Lies andere Dateien erst, wenn eine Aufgabe sie braucht.
3. Schau mit `git log --oneline -5` und `git status`, ob seit dem letzten Protokolleintrag etwas dazugekommen ist.
4. Antworte Mareike kurz auf Deutsch, höchstens 8 Zeilen:
   - Wo wir stehen (ein, zwei Sätze).
   - Die offenen Punkte aus dem Gehirn.
   - Eine Frage: „Woran machen wir heute weiter?“
5. Nichts ändern, nichts committen. `/start` liest nur.

---
published: true
---

# Rsync Anwendungsfälle

:::sticky

```bash
# Kopiere symlinks als Dateien  -> Wenn lokal source gesymlinked, aber remote nicht.
rsync -aL --exclude "symlinkedSourceDir" sourceDir user@example.com:/targetDir
```

:::

Mittels `rsync` werden Dateien/Ordner von einem Ausgangsordner in einen Zielordner synchronisiert. Ähnlich wie `cp` (kopieren), nur dass es auch über SSH funktioniert und viele weitere Optionen möglich sind.

Unter anderem:

- Dateien abhängig von ihrem Änderungszeitpunkt synchronisieren -> verringert Volumen
- Dateien löschen, die im Ausgangsordner nicht vorhanden sind
- Symbolische Links erhalten

## Drupal 7 mit symlinked Source

Ein Beispielszenario:
Als Agentur betreut man mehrere Drupal 7 Webseiten, die alle up-to-date gehalten werden müssen.
Im Falle eines Updates möchte man das Grundsystem nur einmal updaten.

Die Ordnerstruktur könnte wie im Beispiel aussehen.

```
.
+-- project1
|   +-- includes -> ../drupalSource/includes
|   +-- misc -> ../drupalSource/misc
|   +-- ...
+-- project2
|   +-- includes -> ../drupalSource/includes
|   +-- ...
+-- project3
|   +-- ...
+-- drupalSource
|   +-- includes
|   +-- misc
|   +-- ...
```

Nun muss im Falle eines Updates nur der drupalSource Ordner upgedated werden.

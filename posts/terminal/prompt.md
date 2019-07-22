---
date: 2019-03-15
author: Lukas
thumbnail: './command-line.svg'
tags:
    - terminal
---
# Prompt / Eingabeaufforderung anpassen 

:::sticky Bash Prompt anpassen
```bash
# Unser Standard Prompt
export PS1="\[\e]0;\w: \u@\h\a\]\[\033[01;32m\]\h:[\033[01;34m\]\W \[\033[01;34m\]\u\[\033[00m\]\$ "
# Screencasts
export PS1="owl-tut:\W \u $ "

# Möglicherweise müssen Farben aktiviert werden
export CLICOLOR=1
```
:::

Mit der Eingabeaufforderung bzw. "prompt" fordert das Terminal den Nutzer auf eine Eingabe zu machen.

Dabei werden oft der momentan eingeloggte Nutzer und das Host System, ggf. auch der Ordnerpfad angezeigt.
zB. `root@example.com:dev $`

Manchmal möchte man den prompt anpassen. Wenn man einen Screencast aufnimmt, Live-Coding durchführt oder einfach andere Informationen wichtig findet.

Der Prompt wird in der Umgebungsvariable `PS1` gespeichert und kann mit `echo "$PS1"` ausgegeben werden.
Dabei sind Farben und spezielle Platzhalter möglich.

| Code | Bedeutung                                                        |
| ---- | ---------------------------------------------------------------- |
| \u   | Aktueller Nutzer                                                 |
| \h   | Hostsystem                                                       |
| \w   | aktueller Pfad                                                   |
| \W   | letzter Ordner im aktuellen Pfad                                 |
|      | [weitere](https://wiki.ubuntuusers.de/Bash/Prompt/#Zeichenkette) |

:::tip
Auch der Titel des Konsolenfensters lässt anpassen.
:::

---
date: 2019-04-13
author: Lukas
thumbnail: ./process.svg
title: Cron-Jobs
tags:
    - devops
---

:::hero #EEE857
![Owl showing a circular process](./process.svg)
:::

# Cron-Jobs

:::sticky Cron-Job anlegen
```bash
 * * * * * [user] auszuführender Befehl
#┬ ┬ ┬ ┬ ┬
#│ │ │ │ │
#│ │ │ │ └──── Wochentag (0-7, Sonntag ist 0 oder 7)
#│ │ │ └────── Monat (1-12)
#│ │ └──────── Tag (1-31)
#│ └────────── Stunde (0-23)
#└──────────── Minute (0-59)
```
:::

> Der Cron-Daemon dient der zeitbasierten Ausführung von Prozessen [...] um wiederkehrende Aufgaben – sogenannte Cronjobs – zu automatisieren. [[1](https://de.wikipedia.org/wiki/Cron)]

Dabei definiert man in einer Datei Ausführungszeitpunkt(e) und den auszuführenden Befehl.
Gegebenenfalls kann man auch den Nutzer angeben, mit dessen Rechten der Befehl ausgeführt werden soll.

Der Cron-Daemon liest Dateien in den `/etc/cron*`Verzeichnissen automatisch.
Üblicherweise wird für jeden Cron-Job eine eigene Datei angelegt. Man könnte theoretisch auch mehrere Befehle zeilenweise in der selben Datei angeben. Beispielsweise um zusammengehörige Befehle zu gruppieren.

Cronjobs können auch mit dem Befehl `(sudo) crontab -e` definiert werden.
Allerdings erlaubt die Aufteilung auf Dateien einen besseren Überblick.

`crontab -u user -l` gibt die Cronjobs eines bestimmten Nutzers aus.

Ein Beispiel für einen sinnvollen Cronjob ist die automatische Erneuerung von Letsencrypt SSL Zertifikaten:

```bash
38 4 * * * root /opt/certbot-auto renew --post-hook "systemctl reload nginx"
# Wird jede Nacht um 4:38 ausgeführt.
# (Certbot erneuert Zertifikate nur falls sie bald auslaufen)
# Der post-hook startet ggf. nach einem Update den nginx Server neu.
```

---
date: 2019-04-06
author: Lukas E.
tags:
    - email
    - devops
    - mailgun
---

# Emails versenden mit der eigenen Domain

Um Emails von einer eigenen Domain zu versenden, braucht man einen Mailserver.

Will man diesen Server nicht selbst betreiben, beötigt man einen Service. Im folgenden beschreibe ich, wie man [Mailgun](https://mailgun.com) nutzen kann um via SMTP Emails von der eigenen Domain zu verschicken.

Das funktioniert dann mit Gmail, Thunderbird oder beliebigen anderen Email Clients.

Die Schritte hierfür sind:

1. Account bei [Mailgun](https://mailgun.com) erstellen.
2. Domain bei Mailgun anlegen.
   - vermutlich die Root-Domain nutzen, auch wenn Mailgun anderes empfiehlt.
   - darauf achten, das als Region "EU" ausgewählt ist. DSGVO und so.
3. Domain verifizieren und DNS Einträge anlegen

   - dafür einfach der Anleitung von Mailgun folgen

4. Email Client mit den SMTP Daten von Mailgun konfigurieren

## Domain auswählen

Bei der Auswahl der Domain kommt es darauf an, ob man Marketing-Mails, Newsletter oder einfach "normale" Emails versenden möchte.

Für "normale" Mails würde ich die Basis-Domain wählen. Mailgun empfiehlt das nicht zu tun. Hat aber in der FAQ dazu auch wiedersprüchliche Angaben.

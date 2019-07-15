---
date: 2019-04-06
author: Lukas
thumbnail: 'thumbs/email-owl.png'
tags:
    - email
    - devops
    - mailgun
---

# Wie verhindere ich, dass meine Emails im Spam landen?

Angeblich sind bis zu 90% des gesamten Emailverkehrs Spam-Mails. Alle Anbieter versuchen diese Mails auszufiltern. Wie verhindere ich, dass meine legitimen Mails gefiltert werden?

Zunächst kann man Tools wie beispielsweise [Mail-tester.com](https://www.mail-tester.com) nutzen um seine Mails zu testen. Möglichst mit Originalinhalt, da auch dieser eine Rolle spielt.

Zusätzlich kommt es auf die richtige Konfiguration der Domain an.

## SPF

:::sticky DNS TXT Eintrag für SPF
```
v=spf1 include:eu.mailgun.org -all
```
:::

Sender Policy Framework ist ein Verfahren mit dem Phishing verhindert werden soll.

Dabei wird für die Domain von der eine Email gesendet wird ein DNS txt Eintrag angelegt.
Dieser Eintrag enthält alle Server (Domains/IPs) die authorisiert sind Emails im Namen der Email-Domain zu senden.

Es wird außerdem angegeben wie unauthorisierte Emails bevorzugt behandelt werden sollen.
<!-- Wie wird das angegeben? Muss ich das angeben? Wo geb ich das an? -->

## DKIM

:::sticky DNS TXT Eintrag für DKIM
```
k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrrHhSmeUs0gfWL04DgtHF6hhaz0GKNRPd9i7txhu0j6QY8ZvZCCtnjtWwV7beDcqvHrzRpwsKy2jS2RGj2EEv1fszrqAWKD0QPKdi1KqhcruXRTz/jiy9STjYWAXd/pqxABLVAJf43tIKsLQtHb2TTaWPNojzZQR+J68RT0QoEQIDAQAB
```
:::

DomainKeys Identified Mail beschreibt ein ganz ähnliches Verfahren zu SPF. Dabei wird allerdings ein Public-Key Verfahren verwendet.

Im DNS TXT Eintrag wird ein öffentlicher Schlüssel hinterlegt. Jede versendete Email enthält eine mittels dem privaten Schlüssel erstellte Signatur, die der Empfänger mit dem öffentlichen Schlüssel verifizieren kann.
<!-- Auch hier: wie mach ich das denn? kann ich den code oben irgendwo hin copy pasten? -->

## DMARC

:::sticky DNS TXT Eintrag für DMARC
```
v=DMARC1; p=quarantine; pct=100; rua=mailto:re+nnsetxssyna@dmarc.postmarkapp.com,mailto:dmarc@owlabout.de; sp=quarantine; aspf=r;
```
:::

Konfiguriert Reporting für Verletzungen von SPF bzw DKIM.

Man muss einen DNS txt Eintrag anlegen. Im Beispiel werden die Mails als Spam abgelegt.

[dmarc.postmarkapp.com](https://dmarc.postmarkapp.com/) ist ein kostenloser Service, der wöchentliche Reports zu SPF/DKIM Verletzungen erstellt.
Das hilft natürlich auch initial festzustellen, von welchen Servern man überhaupt Emails sendet und ob alles korrekt konfiguriert ist.

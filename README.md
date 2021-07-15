# PDF-PrintInfo

## Übersicht

[![Total alerts](https://img.shields.io/lgtm/alerts/g/THWillert/PDF-PrintInfo.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/THWillert/PDF-PrintInfo/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/THWillert/PDF-PrintInfo.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/THWillert/PDF-PrintInfo/context:javascript)

Script, das das Menü des Adobe Reader erweitert.

![Willert_PDF-PrintInfo](https://user-images.githubusercontent.com/54273574/124302875-08738b00-db62-11eb-83fe-f2219e6158c7.png)

Fügt Seitenzahlen, Dateinamen usw. auf allen Seiten einer PDF-Datei ein.


## Voraussetzungen
Getestet mit Adobe Reader DC

## Installation
Windows:
%appdata%\Roaming\Adobe\Acrobat\Privileged\DC\JavaScripts

### Anpassungen

Die einzelnen Menüpunkte können am Anfang des Scripts angepaßt werden (siehe Quellcode).

Beispiele für *cExec*

``` JavaScript
// Dateiname, Datum, Uhrzeit LF Seiten
SetFooter("%FileNameNoExt% | %Date% %Time%%n%Seite: %Page% / %Pages%")

// Dateiname - oben - grün - groß
SetFooter("%FileName%"); MoveTo("top",15); ChangeColor([ "RGB", 0,0.7,0 ]); ChangeSize(12)
```

Platzhalter:
<dl>
 <dt>%FileName%</dt>
 <dd>Dateiname</dd>
 
 <dt>%FileNameNoExt%</dt>
 <dd>Dateiname ohne Suffix</dd>
 
 <dt>%FullPath%</dt>
 <dd>Dateifad mit Datenamen</dd>
 
 <dt>%FullPathNP%</dt>
 <dd>Dateipfad mit Datenamen / Betriebsystem unabhängig</dd>
 
 <dt>%Date%</dt>
 <dd>Aktuelles Datum</dd>
 
 <dt>%Time%</dt>
 <dd>Aktuelle Uhrzeit</dd>
 
 <dt>%CreationDate%</dt>
 <dd>Erstellungsdatum</dd>
 
 <dt>%CreationTime%</dt>
 <dd>Erstellungszeit</dd>
 
  <dt>%Page%</dt>
 <dd>Aktuelle Seite</dd>
 
  <dt>%Pages%</dt>
 <dd>Gesamtseitenzahl</dd>
 
  <dt>%n%</dt>
 <dd>Zeilenumbruch</dd>
 
 <dt>%t%</dt>
 <dd>Tabulator</dd>
</dl>

## ToDo

Die Reihenfolge entspricht keiner Priorität.

 - [ ] Dokumentation
 - [ ] Dialog für die Einstellungen.
 - [ ] Information aufteilen z. B. in Kopf- und Fusszeile

 ## Author
 Thorsten Willert

 [Homepage](https://www.thorsten-willert.de/)
 
 ___
 Basierend auf PrintFooter v2.2 von Thorsten Eggeling;
 
 https:www.myria.de/computer/599-adobe-reader-dateinamen-auf-jede-seite-drucken

 ## Lizenz
 Das ganze steht unter der [Apache 2.0](https://github.com/THWillert/PDF-PrintInfo/blob/master/LICENSE) Lizenz.
.


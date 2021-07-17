# PDF-PrintInfo

## Übersicht

[![Total alerts](https://img.shields.io/lgtm/alerts/g/THWillert/PDF-PrintInfo.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/THWillert/PDF-PrintInfo/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/THWillert/PDF-PrintInfo.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/THWillert/PDF-PrintInfo/context:javascript)

Script, das das Menü des Adobe Reader erweitert.

![Willert_PDF-PrintInfo](https://www.thorsten-willert.de/images/Dokumentenoptimierung/PDF-PrintInfo/Thorsten_H_Willert_-_PDF-PrintInfo_Menue.png)

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
AddField( Text , Datums-Format {dd.mm.yyyy], Zeit-Format [HH:MM], Seite [-1 = alle] -2 = letzte Seite)

// Eine Kombination aus den Befehlen ist in jedem Menüpunkt möglich z. B.:
AddField("%FileName%"); SetPosition("top",15); ChangeColor([ "RGB", 0,0.7,0 ]); ChangeSize(12)
```

Platzhalter:
<dl>
 <dt>%Author%
 <dd>Author</dd>
 
 <dt>%Producer%
 <dd>Erstellt mit</dd>
    
 <dt>%Creator%</dt>
 <dd></dd>
 
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
 
 <dt>%ModifiedDate%</dt>
 <dd>Datum der letzten Änderung</dd>
 <dt>%ModifiedTime%</dt>
 <dd>Zeit der letzten Änderung</dd>
 
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
 - [ ] Information an verschiedenen Stellen positionieren z. B. in Kopf- und Fusszeile

 ## Author
 Thorsten Willert

 [Homepage](https://www.thorsten-willert.de/)
 
 ___
 Basierend auf PrintFooter v2.2 von Thorsten Eggeling;
 
 https:www.myria.de/computer/599-adobe-reader-dateinamen-auf-jede-seite-drucken

 ## Lizenz
 Das ganze steht unter der [Apache 2.0](https://github.com/THWillert/PDF-PrintInfo/blob/master/LICENSE) Lizenz.
.


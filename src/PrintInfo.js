// :autoIndent=full:collapseFolds=0:deepIndent=false:folding=indent:indentSize=4:maxLineLen=80:mode=javascript:noTabs=false:noWordSep=_:tabSize=4:wordBreakChars=,+-\=<>/?^&*:wrap=none:
// windows-1252
/*
 PrintInfo
 V3.1.1, 07/17/2021
 + %ModifiedDate% Datum der letzten Änderung
 + %ModifiedTime% Zeit der letzten Änderung

 V3.1.0, 06/16/2021
 * Funktionsnamen geändert

 V3.0.3, 2021
 + %Producer%
 + %Creator%
 + Fortschrittsanzeige

 V3.0.2, 2021
 * Code Optimierung
 + höhere Geschwindgkeit
 + Fortschrittsanzeige

 V3.0.1, 2021
 * Code Optimierung
 * Fußzeile kann in Kopzeile umgewandelt werden
 * Fußzeile kann gedreht und an die Ränder gesetzt werden
 * Farbauswahl
 * Auswahl Schriftgröße
 * Auswahl Ausrichtung

 Installation:
 Acrobat Reader DC (Windows): %appdata%\Roaming\Adobe\Acrobat\Privileged\DC\JavaScripts

 Basierend auf PrintFooter v2.2 von Thorsten Eggeling;
 https:www.myria.de/computer/599-adobe-reader-dateinamen-auf-jede-seite-drucken

 JavaScript for Acrobat API Reference:
 https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/pdfs/acrobatsdk_jsapiref.pdf
*/

// Menue =======================================================================
// cName   = Interner Name des Untermenüs
// cUser   = Sichtbare Beschriftung
// cParent = Übergeordnetes Menü
// nPos    = Position im Menü
app.addSubMenu({
    cName: 'Field',
    cUser: 'Fußzeile und Kopfzeile',
    cParent: 'File',
    nPos: 20
})
/*
Platzhalter:

	%Author%
		Author
	%Producer%
		Erstellt mit
    %Creator%

    %FileName%
        Dateiname
    %FileNameNoExt%
        Dateiname ohne Suffix
    %FullPath%
        Dateifad mit Datenamen
    %FullPathNP%
    	Dateipfad mit Datenamen / Betriebsystem unabhängig
    %Date%
        Aktuelles Datum
    %Time%
        Aktuelle Uhrzeit
    %CreationDate%
        Erstellungsdatum
    %CreationTime%
        Erstellungszeit
    %ModifiedDate%
        Datum der letzten Änderung
    %ModifiedTime%
        Zeit der letzten Änderung
    %Page%
        Aktuelle Seite
    %Pages%
        Gesamtseitenzahl
    %n%
        Zeilenumbruch (nur in Kopf und Fußzeile wirksam)
    %t%
        Tab

    Groß- und Kleinschreibung beachten!

    AddField( Text , Datums-Format {dd.mm.yyyy], Zeit-Format [HH:MM], Seite [-1 = alle] -2 = letzte Seite)

    * Eine Kombination aus den Befehlen ist in jedem Menüpunkt möglich z. B.:
    'AddField("%FileName%"); MoveTo("top",15); ChangeColor([ "RGB", 0,0.7,0 ]); ChangeSize(12)'
*/

app.addMenuItem({
    cName: 'Author, Dateiname, Datum, Uhrzeit LF Seiten',
    cParent: 'Field',
    cExec: 'AddField("%Author% | %FileNameNoExt% | %Date% %Time%%n%Seite: %Page% / %Pages%")'
})
app.addMenuItem({
    cName: 'Dateiname, Datum, Uhrzeit, Seiten',
    cParent: 'Field',
    cExec: 'AddField("%FileNameNoExt% | %Date% %Time% | Seite: %Page% / %Pages%")'
})
app.addMenuItem({
    cName: 'Dateiname, Erstellungsdatum, Datum, Uhrzeit, Seiten',
    cParent: 'Field',
    cExec: 'AddField("%FileNameNoExt% | Erstellt: %CreationDate% %CreationTime% | Datum: %Date% %Time% | Seite: %Page% / %Pages%")'
})
app.addMenuItem({
    cName: 'Dateiname - oben - grün - groß',
    cParent: 'Field',
    cExec: 'AddField("%FileName%"); SetPosition("top",15); ChangeColor([ "RGB", 0,0.7,0 ]); ChangeSize(12)'
})
app.addMenuItem({
    cName: '1 / n',
    cParent: 'Field',
    cExec: 'AddField("%Page% / %Pages%")'
})
app.addMenuItem({
    cName: 'Seite 1 von n',
    cParent: 'Field',
    cExec: 'AddField("Seite %Page% von %Pages%")'
})
app.addMenuItem({
    cName: 'Dateipfad und Name, nur erste Seite',
    cParent: 'Field',
    cExec: 'AddField("%FullPath%",undefined,undefined, 1)'
})
app.addMenuItem({
    cName: '_______________________________________________________',
    cParent: 'Field',
    cExec: '{}'
})
// Menu: Position --------------------------------------------------------------
app.addSubMenu({
    cName: 'Position',
    cUser: 'Position',
    cParent: 'Field',
    nPos: 8
})
app.addMenuItem({
    cName: 'Kopfzeile',
    cParent: 'Position',
    cExec: 'SetPosition("top",15)'
})
app.addMenuItem({
    cName: 'Fußzeile',
    cParent: 'Position',
    cExec: 'SetPosition("bottom",0)'
})
app.addMenuItem({
    cName: '90° links',
    cParent: 'Position',
    cExec: 'SetPosition("left", 40)'
})
app.addMenuItem({
    cName: '90° rechts',
    cParent: 'Position',
    cExec: 'SetPosition("right", 15)'
})
// Menu: Text-align ------------------------------------------------------------
app.addSubMenu({
    cName: 'Align',
    cUser: 'Ausrichtung',
    cParent: 'Field',
    nPos: 9
})
app.addMenuItem({
    cName: 'Mitte',
    cParent: 'Align',
    cExec: 'ChangeAlign("center")'
})
app.addMenuItem({
    cName: 'Links (unten)',
    cParent: 'Align',
    cExec: 'ChangeAlign("left")'
})
app.addMenuItem({
    cName: 'Rechts (oben)',
    cParent: 'Align',
    cExec: 'ChangeAlign("right")'
})
// Menu: Font-color ------------------------------------------------------------
app.addSubMenu({
    cName: 'Color',
    cUser: 'Farbe',
    cParent: 'Field',
    nPos: 10
})
app.addMenuItem({
    cName: 'Rot',
    cParent: 'Color',
    cExec: 'ChangeColor(color.red)'
})
app.addMenuItem({
    cName: 'Blau',
    cParent: 'Color',
    cExec: 'ChangeColor(color.blue)'
})
app.addMenuItem({
    cName: 'Grün',
    cParent: 'Color',
    cExec: 'ChangeColor([ "RGB", 0,0.7,0 ])'
})
app.addMenuItem({
    cName: 'Orange',
    cParent: 'Color',
    cExec: 'ChangeColor([ "RGB", 1, 0.7, 0 ])'
})
app.addMenuItem({
    cName: 'Schwarz',
    cParent: 'Color',
    cExec: 'ChangeColor(color.black)'
})
// Für dunklen Hintergrund
app.addMenuItem({
    cName: 'Weiß',
    cParent: 'Color',
    cExec: 'ChangeColor(color.white)'
})
// Menu: Font-size -------------------------------------------------------------
app.addSubMenu({
    cName: 'Size',
    cUser: 'Schriftgröße',
    cParent: 'Field',
    nPos: 11
})
app.addMenuItem({
    cName: '6',
    cParent: 'Size',
    cExec: 'ChangeSize(6)'
})
app.addMenuItem({
    cName: '8',
    cParent: 'Size',
    cExec: 'ChangeSize(8)'
})
app.addMenuItem({
    cName: '10',
    cParent: 'Size',
    cExec: 'ChangeSize(10)'
})
app.addMenuItem({
    cName: '_______________________________________________________',
    cParent: 'Field',
    cExec: '{}'
})
// Menu: Remove ----------------------------------------------------------------
app.addMenuItem({
    cName: 'Entfernen',
    cParent: 'Field',
    cExec: 'RemoveField()'
})

// =============================================================================
// Pfad in Windows-Pfad umwandeln
function PathToWinPath(aPath) {
    var sWinPath
    if (aPath[1].length === 1) {
        // nur ein Zeichen? Also (hoffentlich) lokales Laufwerk
        sWinPath = aPath[1] + ':'
    } else {
        // für Netzwerklaufwerke \\Server\Freigabe
        sWinPath = '\\\\' + aPath[1]
    }

    for (var i = 2; i < aPath.length; i++) {
        sWinPath += '\\' + aPath[i]
    }
    return sWinPath
}

// =============================================================================
// Fußzeile setzen
function AddField(sValue, sDateFormat = 'dd.mm.yyyy', sTimeFormat = 'HH:MM', iPage = -1) {
    RemoveField()

    const iPages = this.numPages
    const sText = ReplacePlaceHolders(sValue, sDateFormat, sTimeFormat, iPages)
    var aRect
    var iTotWidth

    var tObj = app.thermometer

    if (iPage === -1) { // alle Seiten
        tObj.duration = iPages
        tObj.begin()

        for (var p = 0; p < iPages; p++) {
            tObj.value = p
            tObj.text = 'Processing page: ' + p

            aRect = this.getPageBox('Crop', p)
            iTotWidth = aRect[2] - aRect[0]

            AddTextField(this, sText.replace(/%Page%/g, String(p + 1)), p, iTotWidth)
        } // end for loop

        tObj.end()
    } else if (iPage >= 0) { // nur angegebene Seite
        aRect = this.getPageBox('Crop', iPage - 1)
        iTotWidth = aRect[2] - aRect[0]
        AddTextField(this, sText.replace(/%Page%/g, String(iPage - 1)), iPage - 1, iTotWidth)
    } else if (iPage === -2) { // nur letzte Seite
        aRect = this.getPageBox('Crop', iPages - 1)
        iTotWidth = aRect[2] - aRect[0]
        AddTextField(this, sText.replace(/%Page%/g, String(iPages - 1)), iPages - 1, iTotWidth)
    }
}

// =============================================================================
// Textfeld einfügen
function AddTextField(myDoc, myTextValue, myPageNum, myPageWidth) {
    try {
        var fd = myDoc.addField('xftDate' + myPageNum + 1, 'text', myPageNum, [30, 15, myPageWidth - 30, 35])
        fd.delay = true

        fd.multiline = true // Zeilenumbruch erlauben, Seitenzahl zweite Zeile
        fd.textSize = 6 // Font-Größe
        fd.readonly = true // schreibgeschützt
        fd.alignment = 'center' // Ausrichtung zentriert
        // fd.fillColor = color.yellow; //Hintergundfarbe für das Textfeld
        fd.rotation = 0
        fd.textColor = color.red // Textfarbe
        fd.value = myTextValue

        fd.delay = false

        return fd
    } catch (e) {
        for (var i in e) {
            console.println(i + ': ' + e[i])
        }
    }
}

// =============================================================================
// Position
function SetPosition(sPos, iOffset) {
    const iPages = this.numPages
    var fdText

    try {
        for (var p = 0; p < iPages; p++) {
            const aRect = this.getPageBox('Crop', p)
            fdText = this.getField(String('xftDate' + p + 1))
            fdText.delay = true

            switch (sPos) {
                default:
                    // [nLeft, nTop, nRight, nBottom]
                    fdText.rect = [
                        30,
                        14,
                        aRect[2] - aRect[0] - 30,
                        35
                    ]
                    // Rotation muß nach der Größenänderung ausgeführt werden!
                    fdText.rotation = 0
                    fdText.multiline = true
                    break
                case 'top':
                    fdText.rect = [
                        30,
                        aRect[1] - iOffset,
                        aRect[2] - aRect[0] - 30,
                        aRect[1] - 20 - iOffset
                    ]
                    fdText.rotation = 0
                    fdText.multiline = true
                    break
                case 'left':
                    fdText.rect = [
                        aRect[0] + iOffset,
                        aRect[1] - 20,
                        aRect[0] + iOffset + 20,
                        aRect[3] + 20
                    ]
                    fdText.rotation = 90
                    fdText.multiline = false
                    break
                case 'right':
                    fdText.rect = [
                        aRect[2] - iOffset - 20,
                        aRect[1] - 20,
                        aRect[2] - iOffset,
                        aRect[3] + 20
                    ]
                    fdText.rotation = 90
                    fdText.multiline = false
            }
            fdText.delay = false
        }
    } catch (e) {};
}

// =============================================================================
function ReplacePlaceHolders(sString, sDateFormat, sTimeFormat, iPages) {
    const FileNM = this.documentFileName // nur Dateiname
    const FileNMNoExt = FileNM.substr(0, FileNM.lastIndexOf('.')) // Dateiname ohne Suffix ( .PDF)
    const AcDate = new Date()
    const CrDate = this.creationDate
    const ModDate = this.modDate
    const aPath = this.path.split('/')
    const sFilePathNP = this.path // Dateiname mit Pfad plattformunabhängiges Format
    const sFilePath = PathToWinPath(aPath) // Pfad im Windows-Format

    var replacements = {
    	'%Author%': this.info.Author,
    	'%Producer%': this.info.Producer,
    	'%Creator%': this.info.Creator,

        '%FileName%': FileNM,
        '%FileNameNoExt%': FileNMNoExt,
        '%FullPath%': sFilePath,
        '%FullPathNP%': sFilePathNP,

        '%Date%': util.printd(sDateFormat, AcDate),
        '%Time%': util.printd(sTimeFormat, AcDate),

        '%ModifiedDate%': util.printd(sDateFormat, ModDate),
        '%ModifiedTime%': util.printd(sTimeFormat, ModDate),

        '%CreationDate%': util.printd(sDateFormat, CrDate),
        '%CreationTime%': util.printd(sTimeFormat, CrDate),

        '%Pages%': iPages,

        '%t%': '\t',
        '%n%': '\n'
    }

    return sString.replace(/%\w+%/g, function(all) {
        return all in replacements ? replacements[all] : all
    })
}

// =============================================================================
function SetStyle(sType, sValue) {
    const iPages = this.numPages

    try {
        for (var p = 0; p < iPages; p++) {
            this.getField(String('xftDate' + p + 1))[sType] = sValue
        }
    } catch (e) {};
}
// =============================================================================
// Farbe ändern
function ChangeColor(oColor) {
    SetStyle('textColor', oColor)
}
// =============================================================================
// Schriftgröße
function ChangeSize(iSize) {
    SetStyle('textSize', iSize)
}
// =============================================================================
// Ausrichtung
function ChangeAlign(sAlign) {
    SetStyle('alignment', sAlign)
}

// =============================================================================
// Entfernen
function RemoveField() {
    const iPages = this.numPages

    var tObj = app.thermometer
    tObj.duration = iPages
    tObj.begin()

    for (var p = 0; p < iPages; p++) {
    	 tObj.value = p
         tObj.text = 'Removing ' + p

        this.removeField(String('xftDate' + p + 1))
    }

    tObj.end()
}

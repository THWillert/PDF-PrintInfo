 /*
 PrintInfo
 V3.0, 2021, Thorsten Willert
 * Code Optimierung
 * Fusszeile kann in Kopzeile umgewandelt werden
 * Fusszeile kann gedreht und an die Raender gesetzt werden
 * Farbauswahl
 * Auswahl Schriftgroesse
 * Auswahl Ausrichtung

 Installation:
 Acrobat Reader DC (Windows): %appdata%\Roaming\Adobe\Acrobat\Privileged\DC\JavaScripts

 Basierend auf PrintFooter v2.2 von Thorsten Eggeling;
 https:www.myria.de/computer/599-adobe-reader-dateinamen-auf-jede-seite-drucken
*/

// Menue =======================================================================
app.addSubMenu({
    cName: 'Footer',
    cUser: 'Fusszeile und Kopfzeilen',
    cParent: 'File',
    nPos: 20
})
/*
Platzhalter:

    %FileName%
        Dateiname
    %FileNameNoExt%
        Dateiname ohne Suffix
    %FullPath%
        Dateifad mit Datenamen
    %Date%
        Aktuelles Datum
    %Time%
        Aktuelle Uhrzeit
    %CreationDate%
        Erstellungsdatum
    %CreationTime%
        Erstellungszeit
    %Page%
        Aktuelle Seite
    %Pages%
        Gesamtseitenzahl
    %n%
        Zeilenumbruch
    %t%
        Tab

    Gross- und Kleinschreibung beachten!

    SetFooter( Text , Datums-Format {dd.mm.yyyy], Zeit-Format [HH:MM], Seite [-1 = alle] -2 = letzte Seite)

    * Eine Kombination aus den Befehlen ist in jedem Menuepunkt moeglich z. B.:
    'SetFooter("%FileName%"); MoveTo("top",15); ChangeColor([ "RGB", 0,0.7,0 ]); ChangeSize(12)'
*/

app.addMenuItem({
    cName: 'Dateiname, Datum, Uhrzeit LF Seiten',
    cParent: 'Footer',
    cExec: 'SetFooter("%FileNameNoExt% | %Date% %Time%%n%Seite: %Page% / %Pages%")'
})
app.addMenuItem({
    cName: 'Dateiname, Datum, Uhrzeit, Seiten',
    cParent: 'Footer',
    cExec: 'SetFooter("%FileNameNoExt% | %Date% %Time% | Seite: %Page% / %Pages%")'
})
app.addMenuItem({
    cName: 'Dateiname, Erstellungsdatum, Datum, Uhrzeit, Seiten',
    cParent: 'Footer',
    cExec: 'SetFooter("%FileNameNoExt% | Erstellt: %CreationDate% %CreationTime% | Datum: %Date% %Time% | Seite: %Page% / %Pages%")'
})
app.addMenuItem({
    cName: 'Dateiname - oben - gruen - gross',
    cParent: 'Footer',
    cExec: 'SetFooter("%FileName%"); MoveTo("top",15); ChangeColor([ "RGB", 0,0.7,0 ]); ChangeSize(12)'
})
app.addMenuItem({
    cName: '1 / n',
    cParent: 'Footer',
    cExec: 'SetFooter("%Page% / %Pages%")'
})
app.addMenuItem({
    cName: 'Seite 1 von n',
    cParent: 'Footer',
    cExec: 'SetFooter("Seite %Page% von %Pages%")'
})
app.addMenuItem({
    cName: 'Dateipfad und Name, nur erste Seite',
    cParent: 'Footer',
    cExec: 'SetFooter("%FullPath%",undefined,undefined, 1)'
})
app.addMenuItem({
    cName: '_______________________________________________________',
    cParent: 'Footer',
    cExec: '{}'
})
// Menu: Position --------------------------------------------------------------
app.addSubMenu({
    cName: 'Position',
    cUser: 'Position',
    cParent: 'Footer',
    nPos: 8
})
    app.addMenuItem({
        cName: 'Kopfzeile',
        cParent: 'Position',
        cExec: 'MoveTo("top",15)'
    })
    app.addMenuItem({
        cName: 'Fusszeile',
        cParent: 'Position',
        cExec: 'MoveTo("bottom",0)'
    })
    app.addMenuItem({
        cName: '90° links',
        cParent: 'Position',
        cExec: 'MoveTo("left", 40)'
    })
    app.addMenuItem({
        cName: '90° rechts',
        cParent: 'Position',
        cExec: 'MoveTo("right", 15)'
    })
// Menu: Text-align ------------------------------------------------------------
app.addSubMenu({
    cName: 'Align',
    cUser: 'Ausrichtung',
    cParent: 'Footer',
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
    cParent: 'Footer',
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
        cName: 'Gruen',
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
    // Fuer dunklen Hintergrund
    app.addMenuItem({
        cName: 'Weiss',
        cParent: 'Color',
        cExec: 'ChangeColor(color.white)'
    })
// Menu: Font-size -------------------------------------------------------------
app.addSubMenu({
    cName: 'Size',
    cUser: 'Schriftgroesse',
    cParent: 'Footer',
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
    cParent: 'Footer',
    cExec: '{}'
})
// Menu: Remove ----------------------------------------------------------------
app.addMenuItem({
    cName: 'Entfernen',
    cParent: 'Footer',
    cExec: 'RemoveFooter()'
})

// =============================================================================
// Pfad in Windows-Pfad umwandeln
function PathToWinPath(pathArray) {
    var WinPath
    if (pathArray[1].length === 1) {
        // nur ein Zeichen? Also (hoffentlich) lokales Laufwerk
        WinPath = pathArray[1] + ':'
    } else {
        // fuer Netzwerklaufwerke \\Server\Freigabe
        WinPath = '\\\\' + pathArray[1]
    }

    for (var i = 2; i < pathArray.length; i++) {
        WinPath = WinPath + '\\' + pathArray[i]
    }
    return WinPath
}

// =============================================================================
// Fusszeile setzen, alle Seiten
function SetFooter(sValue, sDateFormat = "dd.mm.yyyy", sTimeFormat = "HH:MM", iPage = -1) {
    RemoveFooter()

    const iPages = this.numPages
    const sText = ReplacePlaceHolders(sValue, sDateFormat, sTimeFormat, iPages)
    var aRect
    var TotWidth

    if ( iPage === -1) {
        for (var p = 0; p < iPages; p++) {
            aRect = this.getPageBox('Crop', p)
            TotWidth = aRect[2] - aRect[0]

            addTextField(this, sText.replace(/%Page%/g, String(p + 1) ) , p, TotWidth)
        } // end for loop
    } else if ( iPage >= 0) {
        aRect = this.getPageBox('Crop', iPage-1)
        TotWidth = aRect[2] - aRect[0]
        addTextField(this, sText.replace(/%Page%/g, String(iPage-1) ) , iPage-1, TotWidth)
    }  else if ( iPage === -2)  {
        aRect = this.getPageBox('Crop', iPages-1)
        TotWidth = aRect[2] - aRect[0]
        addTextField(this, sText.replace(/%Page%/g, String(iPages-1) ) , iPages-1, TotWidth)
    }
}

// =============================================================================
// Textfeld in die Fusszeile einfuegen
function addTextField(myDoc, myTextValue, myPageNum, myPageWidth) {
    try {
        var fd = myDoc.addField('xftDate' + myPageNum + 1, 'text', myPageNum, [30, 15, myPageWidth - 30, 35])
        fd.multiline = true // Zeilenumbruch erlauben, Seitenzahl zweite Zeile
        fd.textSize = 6 // Font-Groesse
        fd.readonly = true // schreibgeschuetzt
        fd.alignment = 'center' // Ausrichtung zentriert
        // fd.alignment="left"; //Ausrichtung links
        // fd.alignment="right"; //Ausrichtung rechts
        // fd.fillColor = color.yellow; //Hintergundfarbe fuer das Textfeld
        // fd.rotation = 90;
        fd.textColor = color.red // Textfarbe
        fd.value = myTextValue
        return fd
        // Anmerkungen zur Positionierung:
        // addField: Parameters: cName, cFieldType, nPageNum, oCoords, Returns: object
        // oCoords: upper-left x , upper-left y, lower-right x, lower-right y
        // addField erstellt ein Text-Feld am unteren Seitenrand, bestimmt
        // durch die angegebenen Koordinaten
        // es hat einen Abstand von 30 Pixeln vom linken Seitenrand und 15 vom unteren Rand
        // das Feld nimmt die gesamte Breite des Dokuments ein, mit einem Abstand von
        // 30 Pixeln links und rechts (myPageWidth-30).
        // Es ist 20 Pixel hoch (35-15)
    } catch (e) {
        for (var i in e) {
            console.println(i + ': ' + e[i])
        }
    }
}

// =============================================================================
// Position
function MoveTo(sPos, iOffset) {

    const iPages = this.numPages
    var fdText

    try {
        for (var p = 0; p < iPages; p++) {
            const aRect = this.getPageBox('Crop', p)
            fdText = this.getField(String('xftDate' + p + 1))

            switch (sPos) {
                default:
                    // [nLeft, nTop, nRight, nBottom]
                    fdText.rect = [
                        30,
                        14,
                        aRect[2] - aRect[0] - 30,
                        35]
                    // Rotation muss nach der Groessenaenderung ausgefuehrt werden!
                    fdText.rotation = 0
                    fdText.multiline = true
                break;
                case 'top':
                    fdText.rect = [
                        30,
                        aRect[1] - iOffset,
                        aRect[2] - aRect[0] - 30,
                        aRect[1] - 20 - iOffset]
                    fdText.rotation = 0
                    fdText.multiline = true
                break;
                case 'left':
                    fdText.rect = [
                        aRect[0] + iOffset,
                        aRect[1] - 20,
                        aRect[0] + iOffset + 20,
                        aRect[3] + 20]
                    fdText.rotation = 90
                    fdText.multiline = false
                break;
                case 'right':
                    fdText.rect = [
                        aRect[2] - iOffset - 20,
                        aRect[1] - 20,
                        aRect[2] - iOffset,
                        aRect[3] + 20]
                    fdText.rotation = 90
                    fdText.multiline = false
            }
        }
    } catch (e) {};
}

//=============================================================================
function ReplacePlaceHolders(sString, sDateFormat, sTimeFormat, iPages) {

    // var pathArray = this.path.split("/");
    // var FileNM = this.path //Dateiname mit Pfad plattformunabhaengiges Format
    // var FileNM = PathToWinPath(pathArray); //Pfad im Windows-Format
    const FileNM = this.documentFileName // nur Dateiname
    const FileNMNoExt = FileNM.substr(0, FileNM.lastIndexOf('.')) // nur Dateiname ohne Erweiterung (ohne .PDF)
    const AcDate = new Date()
    //const AcDateFormat = 'dd.mm.yyyy HH:MM'
    const CrDate = this.creationDate
    //const CrDateFormat = 'dd.mm.yyyy HH:MM'
    // var AcDateFormat = "yyyy/mm/dd"
    const pathArray = this.path.split('/')
    const sFilePath = PathToWinPath(pathArray) // Pfad im Windows-Format

    var res = sString.replace(/%FileName%/g, FileNM );
    res = res.replace(/%FileNameNoExt%/g, FileNMNoExt );
    res = res.replace(/%FullPath%/g, sFilePath );
    res = res.replace(/%Date%/g, util.printd(sDateFormat, AcDate));
    res = res.replace(/%Time%/g, util.printd(sTimeFormat, AcDate));
    res = res.replace(/%CreationDate%/g, util.printd(sDateFormat, CrDate ));
    res = res.replace(/%CreationTime%/g, util.printd(sTimeFormat, CrDate ));
    res = res.replace(/%Pages%/g, iPages );
    res = res.replace(/%t%/g, '\t' );
    return res.replace(/%n%/g, '\n' );
}

// =============================================================================
// Farbe aendern
function ChangeColor(oColor) {
    const iPages = this.numPages

    try {
        for (var p = 0; p < iPages; p++) {
            this.getField(String('xftDate' + p + 1)).textColor = oColor
        }
    } catch (e) {};
}

// =============================================================================
// Schriftgroesse
function ChangeSize(iSize){
    const iPages = this.numPages

    try {
        for (var p = 0; p < iPages; p++) {
            this.getField(String('xftDate' + p + 1)).textSize = iSize
        }
    } catch (e) {};
}

// =============================================================================
// Ausrichtung
function ChangeAlign(sAlign) {
    const iPages = this.numPages

    try {
        for (var p = 0; p < iPages; p++) {
            this.getField(String('xftDate' + p + 1)).alignment = sAlign
        }
    } catch (e) {};
}

// =============================================================================
// Fusszeile(n) entfernen
function RemoveFooter() {
    const iPages = this.numPages

    for (var p = 0; p < iPages; p++) {
        this.removeField(String('xftDate' + p + 1))
    }
}

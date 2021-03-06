s4aTempDict = {

    /*
       Special characters: (see <http://0xcc.net/jsescape/>)

       Ä, ä   \u00c4, \u00e4
       Ö, ö   \u00d6, \u00f6
       Ü, ü   \u00dc, \u00fc
       ß      \u00df
       */
    // primitive blocks:

    /*
       Attention Translators:
       ----------------------
       At this time your translation of block specs will only work
       correctly, if the order of formal parameters and their types
       are unchanged. Placeholders for inputs (formal parameters) are
       indicated by a preceding % prefix and followed by a type
       abbreviation.

       For example:

       'say %s for %n secs'

       can currently not be changed into

       'say %n secs long %s'

       and still work as intended.

       Similarly

       'point towards %dst'

       cannot be changed into

       'point towards %cst'

       without breaking its functionality.
       */

    // arduino:

    'digital input':
        'entrada digital',

    'digital output':
        'sortida digital',

    'PWM':
        'PWM',

    'servo':
        'servo',

    'clockwise':
        'sentit horari',

    'clockwise (1500-1000)':
        'sentit horari (1500-1000)',

    'counter-clockwise':
        'sentit anti-horari',

    'counter-clockwise (1500-2000)':
        'sentit anti-horari (1500-2000)',

    'stopped':
        'aturat',

    'stopped (1500)':
        'aturat (1500)',

    'disconnected':
        'desconnectat',

    'angle (0-180)':
        'angle (0-180)',

    'connect to Arduino':
        'connecta a Arduino',

    'disconnect Arduino':
        'desconnecta Arduino',

    'Connect Arduino':
        'Connecta Arduino',

    'Disconnect Arduino':
        'Desconnecta Arduino',

    'arduino connected?':
        'arduino connectat?',

    'analog reading %analogPin':
        'lectura analògica %analogPin',

    'digital reading %digitalPin':
        'lectura digital %digitalPin',

    'connect arduino at %s':
        'connecta l\'Arduino al port %s',

    'disconnect arduino':
        'desconnecta l\'Arduino',

    'setup digital pin %digitalPin as %pinMode':
        'configura pin %digitalPin com a %pinMode',

    'set digital pin %digitalPin to %b':
        'posa el pin digital %digitalPin a %b',

    'set servo %digitalPin to %servoValue':
        'posa el servo %digitalPin a %servoValue',

    'set pin %pwmPin to value %n':
        'posa el pin %pwmPin al valor %n',

    'Connecting board at port\n': 
        'Connectant placa al port\n',

    'An Arduino board has been connected. Happy prototyping!':
        'S\'ha connectat correctament una placa Arduino.\nFeliç prototipatge!',

    'Board was disconnected from port\n':
        'S\'ha desconnectat la placa del port\n',

    'It seems that someone pulled the cable!':
        'Sembla que algú ha desconnectat el cable!',

    'Error connecting the board.':
        'Error en connectar a la placa',

    'There is already a board connected to this sprite':
        'Aquest objecte ja té una placa connectada',

    'Could not connect an Arduino\nNo boards found':
        'No s\'ha pogut connectar cap Arduino\nNo s\'ha trobat cap placa',

    'Could not talk to Arduino in port\n':
        'No s\'ha pogut establir comunicació amb Arduino al port\n',

    'Check if firmata is loaded.':
        'Reviseu que Firmata hi estigui carregat.',

    'An error was detected on the board\n\n':
        'S\'ha detectat un error a la placa\n\n',

    'Board is not connected':
        'La placa no està connectada',

    'New Arduino translatable project':
        'Nou projecte traduïble a Arduino', 

    'select a port':
        'selecciona un port',

    'Network port':
        'Port de xarxa',

    'Enter hostname or ip address:':
        'Introdueix el nom de l\'host o adreça IP',

    'Connecting to network port:\n':
        'Connectant a port de xarxa:\n',

    'This may take a few seconds...':
        'Aquesta operació pot trigar uns segons...',

    'Network serial ports':
        'Ports sèrie sobre xarxa',

    'Open from URL...':
        'Obre des d\'una URL...',

    'Save, share and get URL...':
        'Desa, comparteix i mostra la URL...',

    'This project is now public at the following URL:':
        'Aquest projecte és públic, accessible des de la URL:',

    'About Snap4Arduino...':
        'Sobre Snap4Arduino...',
   
    'Snap4Arduino website':
        'Web de Snap4Arduino',
  
    'Snap4Arduino repository':
        'Repositori de Snap4Arduino',
 
    'Start a Snap Jr. session':
        'Inicia una sessió de Snap Júnior',

    'Start Snap4Arduino in an\nicon-based blocks mode\nfor the youngest programmers':
        'Inicia Snap4Arduino en un\nmode de blocs amb icones\nper els/les programadors/es més joves',

    'Loading Snap Jr.':
        'S\'està carregant Snap Júnior',

    'Show project URL':
        'Mostra la URL del projecte',

    'HTTP server':
        'Servidor HTTP',

    'uncheck to stop\nHTTP server':
        'desmarqueu per aturar\nel servidor HTTP',

    'check to start\nHTTP server, allowing\nremote control\nof Snap4Arduino':
        'marqueu per iniciar\nel servidor HTTP, permetent\nel control remot\nde Snap4Arduino',

    'Public stage':
        'Escenari públic',

    'uncheck to prevent the stage\nfrom being viewed\nfrom the HTTP server':
        'desmarqueu per evitar que l\'escenari\nes vegi des del servidor HTTP',

    'check to allow the stage\nto be viewed\nfrom the HTTP server':
        'marqueu per permetre que l\'escenari\nes vegi des del servidor HTTP',
    'red':
        'vermell',
    'blue':
        'blau',
    'SnapJunior Blocks':
        'Blocs de l\'Snap Junior',
    'SnapJuniorPlus Blocks':
        'Més blocs per l\'Snap Junior',
    'Icon-based blocks for the youngest programmers.':
        'Blocs amb icones per als programadors i programadores més joves.',
    'Extra blocks for SnapJunior.':
        'Blocs per afegir funcionalitats a l\'Snap Junior',
    'Blocks for TdRSTEAM shield v1, using SA5Firmata firmware.':
        'Blocs per la TdRSTEAM v1, utilitzant el SA5Firmata.',
    'Blocks for TdRSTEAM shield v2, using SA5Firmata firmware.':
        'Blocs per la TdRSTEAM v2, utilitzant el SA5Firmata.',
    'Libraries below this point are specific to Snap4Arduino.':
        'Les llibreries de sota són específiques per Snap4Arduino.',
    'End of Snap4Arduino libraries.':
        'Final de les llibreries d\'Snap4Arduino.'

};

// Add attributes to original SnapTranslator.dict.ca
for (var attrname in s4aTempDict) { SnapTranslator.dict.ca[attrname] = s4aTempDict[attrname]; }

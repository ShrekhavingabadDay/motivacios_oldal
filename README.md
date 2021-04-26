# Motivációs oldal!

## Végtelen motiváció!

Ez az oldal Szabó Péter idézetes motivációs képeket generál egy Markov-lánc nevű algoritmus segítségével. 
Az idézeteknek többnyire nincs értelmük, de nagyon motiválóak.
Az oldal minden betöltésénél új képet kapunk, az alkalmazás a szerveroldali JSON fájl segítségével állítja össze az idézeteket.

*A JSON-fájlt [ez a python script](https://github.com/ShrekhavingabadDay/szabo_peter/blob/main/szabo.py) készíti el.*

## Mit tartalmaz?
* NodeJS + ExpressJS alapú szerver
* 7 motiváló kép
* [pug](https://pugjs.org/api/getting-started.html)-fájlok
* és kliensoldali JavaScript, ami lehetővé teszi, hogy a motivációt képként le is tölthessük. (HTML5 canvas-ra "rendereli")

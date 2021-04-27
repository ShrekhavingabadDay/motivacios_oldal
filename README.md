# Motivációs oldal!
![kedv](https://user-images.githubusercontent.com/80597697/116042249-79805900-a66e-11eb-965d-ed7dfae57457.png)
![matematikus](https://user-images.githubusercontent.com/80597697/116042278-82712a80-a66e-11eb-8ef3-05ef32826505.png)

*Az alkalmazás által generált motiváció.*

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

## Hogy lehet kipróbálni?
Telepítsük a NodeJS-t! (pl.: `sudo pacman -S nodejs`)
1. `git clone https://github.com/ShrekhavingabadDay/motivacios_oldal`
2. `cd motivacios_oldal`
3. `npm start`
4. A böngészőben látogassuk meg a *localhost:3000* url-t!

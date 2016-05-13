<h1> README.md </h1>

<h2> BT Assignment 2.1 </h2>

<h3> Feature detection </h3> 

<h4> HTML 5 features </h4> 

<h5> Meter tag </h5> 

<p>
  De meter tag is te vergelijken met de progress tag. 
  Mocht de meter tag niet ondersteund worden heb ik 
  op de volgende wijze een fallback geprogrammeerd:
  
  <div class="meter-gauge">
    <span style="width: 46.42%;">Disk Usage - 55.93GB out of 120GB</span>
  </div>
  
  Deze wordt gestyled met css. 
</p>
  
<h5> Srcset </h5> 

<p>
  Srcset is een HTML 5 tag die op basis van de viewport groote een afbeelding meestuurt. 
  Mocht srcset niet ondersteund worden dan valt deze terug naar een standaard <img> tag.
</p> 

<h4> CSS 3 features </h4> 

<h5> Viewport values </h5> 

<p> 
  vh en vw zijn niet values voor het aangeven van hoe breed of hoe hoog iets bijvoorbeeld moet zijn. 
  Mochten viewport values nog niet ondersteund worden door een browser kun je als fallback eerst de 
  waarde in pixels aangeven. 
  
  Voorbeeld: 
  
  div { 
    height: 700px;
    height: 45vh;
  }
  
  Mocht een browser viewport values dus niet ondersteunen dan herkent hij deze ook niet in de css. 
  Daardoor negeert de browser die regel, maar pakt deze wel de regel 'height: 700px;'. Als een browser 
  wel viewport values ondersteund dan wordt de 'height: 700px' overschreven door 'height: 45vh;'. 
</p>

<h5> Direction </h5> 

<p>
  Met direction is het mogelijk om de richting van een zin te kunnen omdraaien. Waardoor alles achterstevoren 
  komt te staan. Dit doe je door in css 'unicode-bidi: bidi-override;' te gebruiken. Mocht unicode-bidi niet 
  ondersteund worden kun je als fallback transform gebruiken. 
  
  Voorbeeld: 
  
  span[dir] {
    display: inline-block; 
    -webkit-transform: scale(-1, 1);  
    transform: scale(-1, 1); 
    unicode-bidi: bidi-override;
  }
</p>

<h4> ES6 features </h4>

<h5> Geolocation </h5>

<p>
  Met de feature geolocation is het mogelijk om te detecteren of een apparaat geolocatie ondersteunt. 
  Mocht een apparaat dit niet ondersteunen maar zou hij/zij toch de lat en long willen verkrijgen 
  dan zou je een input box kunnen tonen waar de gebruiker zijn/haar locatie kan invoeren. 
</p>

<h5> Service worker </h5>

<p>
  Met de feature service worker kun je detecteren of een browser service worker ondersteund. 
  Met service worker zou je bestanden kunnen opslaan in de cache van de service worker voor 
  offline gebruik. Mocht een browser dit nou niet ondersteunen dan zou je het in de browser 
  cache kunnen opslaan.
</p>

#BT eindopdracht beatbox

[Demo](http://sembakkum.github.io/BT/index.html "Beatbox demo")

##Onderzoek

Uit de cases die beschikbaar waren voor de eindopdracht heb ik gekozen voor de beatbox.
Voor deze case ben ik aller eerst de audio tag gaan onderzoeken. Het blijkt dat deze in bijna alle browsers (behalve IE 8 & Opera Mini 8) wordt ondersteund, maar wat zijn de mogelijkheden van de audio tag?

###Browser support

De audio tag heeft meerdere attributen die er toepasbaar op zijn, zoals: 

1. src — Address of the resource
2. crossorigin — How the element handles crossorigin requests
3. preload — Hints how much buffering the media resource will likely need
4. autoplay — Hint that the media resource can be started automatically when the page is loaded
5. mediagroup — Groups media elements together with an implicit MediaController
6. loop — Whether to loop the media resource
7. muted — Whether to mute the media resource by default
8. controls — Show user agent controls

Deze attributen kunnen elk ook hun eigen keywords hebben. Het preload attribuut kan bijvoorbeeld 'none' en 'auto' als keyword hebben. None houdt in dat de src van de audio tag niet gepreload hoeft te worden. Auto geeft aan dat de src gepreload kan worden, mits de browser dit ondersteund. Alle browsers ondersteunen daarnaast ook niet elk audio format. Als voorbeeld wordt de audio extensie .wav door zo goed als alle IE browsers niet ondersteund. MP3 daarin tegen weer wel. 

Met dit in het achterhoofd ben ik audio samples gaan uitzoeken voor mijn beatbox en deze gaan converten naar mp3. 

####Can I use audio tag support
[Can I use audio](http://caniuse.com/#feat=audio "Audio")

####Can I use mp3 support
[Can I use mp3](http://caniuse.com/#feat=mp3 "MP3")

###Audio tag attributes
[whatwg.org audio tag](https://html.spec.whatwg.org/multipage/embedded-content.html#the-audio-element "Audio attributues")

##HTML

Bij het opzetten van de HTML heb ik nagedacht over de structuur en hoe deze ook met de tab nog steeds goed te gebruiken is. 

```
 <main>
            <header>
                <h1>Vunzige deuntjes</h1>
            </header>
            <div id="panel"> 
                    <h2 class="controlTitle">Sounds</h2>
                    <section class="section">
                        <h2>Hard kick</h2>
                        <audio id="hardKick" src="sounds/hard-kick.mp3" data-key="65" preload="auto" controls loop>
                            <a href="sounds/hard-kick.mp3">Play</a>
                        </audio>
                    </section>
            </div>
  </main>
```

In de code is al een soort van fallback te zien. Binnen de audio tag leeft een a tag. Mocht de audio tag niet ondersteund worden (zoals in IE 8) dan krijgt de gebruiker als nog een link te zien. Zodra er op deze link geklikt wordt kan het geluidje via een externe player afgespeeld worden. Dit heb ik gestest in IE 8, windows media player wordt dan geopend en speelt het geluidje af. 

Wordt de audio tag wel ondersteund dan krijgt de gebruiker de standaard controls te zien en kan hij/zij deze afspelen. Zo is de gebruiker instaat om een eigen beat te maken met de beschikbare geluiden. In weze is de beatbox bij deze al gerealiseerd, maar nog niet enhanced voor een betere/fijnere gebruikers ervaring. 

##Enhancement met JS

###Buttons

Nu zijn de standaard controls natuurlijk niet echt mooi, maar de basis is er en nu kan ik deze enhancen met JavaScript. 

```javascript
for (var i = 0; i < sections.length; i += 1) {
    var key = sections[i].querySelector('audio').getAttribute('data-key');
    var keyString = String.fromCharCode(key);
    var btn = document.createElement('button');
    btn.innerHTML = sections[i].querySelector('h2').innerHTML + ' (' + keyString + ')';
    sections[i].appendChild(btn);
    btn.addEventListener(handler, play, false);
    audios[i].removeAttribute('controls');
    keys[key] = btn;
}
```

Met JavaScript ben ik gaan kijken hoeveel sections er zijn. Op basis van dat aantal heb ik via JavaScript buttons laten maken die als tekst de h2 tekst uit de HTML mee krijgen. De buttons maak ik omdat de audio tag minimaal te stylen is met CSS. 

De buttons worden vervolgens in de section geplaatst waar ze thuis horen en het attribuut controls wordt verwijderd van de audio tag binnen die sectie. Dit doe ik zodat de player niet meer zichtbaar is, omdat we het geluid nu gaan afspelen via de button. Op de button zit een eventhandler die kijkt of er op de button geklikt (of via een keypress) wordt. Als dit zo is wordt de functie play aangeroepen.

```javascript
function play(evt, btn) {

    if(this) btn = this;

    var audio = btn.parentNode.querySelector('audio');

    if(audio.paused){

        audio.play();
        audio.currentTime = 0;
        btn.classList.add('active');
        return;
    } 

    audio.pause();
    btn.classList.remove('active');
};
```
Om dit voor elkaar te krijgen wordt er gekeken op welke button er geklikt wordt. Binnen de section waar de button in zit wordt vervolgens de audio tag gezocht en afgespeeld. audio.currentTime = 0; geeft aan dat het afspelen van het geluid bij 0 moet beginnen elke keer als de gebruiker op de button klikt. Om meer interactie toe te voegen en de gebruikers ervaring verder te enhancen heb ik er voor gezorgd dat de geluiden ook d.m.v. keypress kunnen worden afgespeeld. Dit kan door de toetsen a, s, d, f, g, h, j, k in te drukken. Alle audio tags krijgen in de HTML een data-key mee die staat voor het cijfer dat bij de toets hoort.

```
<audio id="hardKick" src="sounds/hard-kick.mp3" data-key="65" preload="auto" controls loop>
```
```
window.addEventListener('keydown', function(evt) {
    if(keys[evt.keyCode]) play(null, keys[evt.keyCode]);
});
```
Dit cijfer wordt bij het aanmaken van de button opgeslagen en omgezet naar de letter die erbij hoort. Deze letters worden aan de buttons toegevoegd voor key-hinting. Door de window.addEventListener wordt er gekeken welke toets er ingedrukt word en welk cijfer dit is, als deze over een komt met een data-key kan het geluid worden afgespeeld dat er bij hoort.  

Om de buttons die via JavaScript zijn aangemaakt een eigenstyling te geven voeg ik de volgende class toe via JavaScript.

```javascript 
document.body.classList.add('enhanced-with-js')
```

Hier mee zeg ik dat de body vanuit CSS de class enhanced-with-js toegewezen krijgt.

###CSS

De body heeft nu de class enhanced-with-js. Door deze class telkens te gebruiken kan ik de enhancede versie stylen. 

Het doel van de buttons was dat deze wel gestyled konden worden met CSS en de audio tag bijna niet. Dus als volgt heb ik deze buttons gestyled met CSS via de class enhanced-with-js. 

```
.enhanced-with-js button {
    width: 100px;
    height: 100px;
    background: #676caf;
    color: azure;
    font-size: 16px;
    font-size: 1em;
    margin: 8px;
    border-radius: 6px;
}
```
###Touch devices

De beatbox heb ik ook getest op touch devices. Hier kwam de touch ervring op de buttons niet vrij natuurlijk over. 
Er zat een delay tussen de touch en het daadwerkelijk afspelen van het geluid. Dit komt doordat bijna alle browsers een delay van 300ms op een touch event hebben ziiten. Dit doen de browser om te controleren of de gebruiker bijvoorbeeld niet een dubbel tap doet. Om dit natuurlijk te laten aanvoelen moest ik deze delay er af halen zodat het geluid direct afgespeeld zou worden. Dit heb ik d.m.v. de volgende code gedaan. 

```javascript
if ('ontouchstart' in document.documentElement) {
            handler = 'touchstart';
        } else {
            handler = 'click';
        }
```

Er wordt gekeken of het device ontouchstart ondersteund, als dat zo is wordt de handler touchstart en geen click meer. Zo is de reactie snelheid van de button 0 en is de delay van 300ms eraf. 

Om er voor te zorgen dat de enhance zeker ondersteund wordt maak ik gebruik van de volgend echecks in javascript. 

```javascript
if( 'AudioContext' in window || 'webkitAudioContext' in window)

else if ('querySelector' in document && 'addEventListener' in window && 'classList' in document.createElement('a') && document.createElement('audio').canPlayType)
```

Zolang dit niet ondersteund wordt val je terug naar de standaard versie. 

Om de beatbox nog meer te enhancen heb ik (dankzij Emiel) gebruik gemaakt van de web audio api. Deze api maakt het mogelijk om geluiden te manipuleren en effecten toe te passen. 

Hiervoor heb ik de volgende code geschreven.

```javascript
if( 'AudioContext' in window || 'webkitAudioContext' in window) {
        var effects = document.getElementById('controls');
        effects.classList.add('display');
        
        // Make all the buttons
        var buttons = document.querySelectorAll('audio');
        console.log(buttons);
        
        var audios = document.querySelectorAll('audio');
        var sections = document.querySelectorAll('section');
        var handler;
        var keys = {};

        if ('ontouchstart' in document.documentElement) handler = 'touchstart';
        else handler = 'click';
        
        for (var i = 0; i < sections.length; i += 1) {
            var key = sections[i].querySelector('audio').getAttribute('data-key');
            var keyString = String.fromCharCode(key);
            var btn = document.createElement('button');
            btn.innerHTML = sections[i].querySelector('h2').innerHTML + ' (' + keyString + ')';
            btn.setAttribute('id', i);
            btn.addEventListener('click', playSound);
            sections[i].appendChild(btn);
            audios[i].removeAttribute('controls');
            keys[key] = btn;
        }
        
        document.body.classList.add('enhanced-with-js')
        
        // Get all sources
        var source = new Audio.MultiSource(['sounds/hard-kick.mp3', 'sounds/clap-tape.mp3', 'sounds/cowbell-808.mp3', 'sounds/hihat-plain.mp3', 'sounds/kick-tape.mp3', 'sounds/openhat-tight.mp3', 'sounds/perc-nasty.mp3', 'sounds/snare-big.mp3', 'sounds/hiphop.mp3', 'sounds/what.mp3'], function () {
            console.log(source);
        }, true);
        
        // Effects for the sound
        var notch = new Audio.Effect({
            type: 'notch',
            frequency: 350
        });
        
        var lowPass = new Audio.Effect({
            type: 'lowpass',
            frequency: 10000,
            destination: notch
        });
        
        var highPass = new Audio.Effect({
            type: 'highpass',
            frequency: 0,
            destination: lowPass
        });
        
        // Play the sound
        function playSound(e) {
            var button = document.getElementById(e.target.id);
            console.log(button);
            if (!button.classList.contains('active')) {
                var player = new Audio.Player({
                    source: source.buffer[e.target.id],
                    onended: function () {
                        button.classList.remove('active');
                    }
                }).play({
                    destination: highPass
                });

                button.classList.add('active');
            }
        }
        
        var sliders = document.querySelectorAll('input[type="range"]');
        console.log(sliders);
        
        function effectControls() {
            notch.source.frequency.value = sliders[0].value;
            lowPass.source.frequency.value = sliders[1].value;
            highPass.source.frequency.value = sliders[2].value;
        }
        
        for (var i=0; i < sliders.length; i++){
            sliders[i].addEventListener('input', effectControls, false);
        }
        
        // ADD KEYBOARD CONTROLS
        function keypress(event) {
            var keyCode = event.keyCode;
            var foo = {
                target: {
                    id: 0
                }
            }
            console.log(keyCode);
            switch(keyCode) {
                case 65:
                    foo.target.id = 0;
                    playSound(foo);
                    break;
                case 83:
                    foo.target.id = 1;
                    playSound(foo);
                    break;
                case 68:
                    foo.target.id = 2;
                    playSound(foo);
                    break;
                case 70:
                    foo.target.id = 3;
                    playSound(foo);
                    break;
                case 71:
                    foo.target.id = 4;
                    playSound(foo);
                    break;
                case 72:
                    foo.target.id = 5;
                    playSound(foo);
                    break;
                case 74:
                    foo.target.id = 6;
                    playSound(foo);
                    break;
                case 75:
                    foo.target.id = 7;
                    playSound(foo);
                    break;
                case 76:
                    foo.target.id = 8;
                    playSound(foo);
                    break;
                case 77:
                    foo.target.id = 9;
                    playSound(foo);
                    break;
            }
        }
        
        window.addEventListener('keydown', keypress, false);
    }
```

Door de web audio api moeten de geluiden nogmaals ingeladen worden in JavaScript. De geluiden worden eerst door alle effecten heen gehaald voor dat ze bij de speakers komen. 
De waardes van de effecten worden vervolgens gekoppeld aan de waardes van de sliders van de effecten. de switch zorgt ervoor dat op keypress de geluiden kunnen worden afgespeeld.




    
    
    
    
    
    
    
    
    






  

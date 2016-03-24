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

##Onderzoek

Uit de cases die beschikbaar waren voor de eindopdracht heb ik gekozen voor de beatbox.
Voor deze case ben ik aller eerst de audio tag gaan onderzoeken. Het blijkt dat deze in bijna alle browsers (behalve IE 8 & Opera Mini 8) wordt ondersteund, maar wat zijn de mogelijkheden van de audio tag?

###Browser support

De audio tag heeft meerdere attributen die er toepasbaar op zijn, zoals: 

src — Address of the resource
crossorigin — How the element handles crossorigin requests
preload — Hints how much buffering the media resource will likely need
autoplay — Hint that the media resource can be started automatically when the page is loaded
mediagroup — Groups media elements together with an implicit MediaController
loop — Whether to loop the media resource
muted — Whether to mute the media resource by default
controls — Show user agent controls

Deze attributen kunnen elk ook hun eigen keywords hebben. Het preload attribuut kan bijvoorbeeld 'none' en 'auto' als keyword hebben. None houdt in dat de src van de audio tag niet gepreload hoeft te worden. Auto geeft aan dat de src gepreload kan worden, mits de browser dit ondersteund. Alle browsers ondersteunen daarnaast ook niet elk audio format. Als voorbeeld wordt de audio extensie .wav door zo goed als alle IE browsers niet ondersteund. MP3 daarin tegen weer wel. 

Met dit in het achterhoofd ben ik audio samples gaan uitzoeken voor mijn beatbox en deze gaan converten naar mp3. 

####Can I use audio tag support
[Can I use audio](http://caniuse.com/#feat=audio "Audio")

####Can I use mp3 support
[Can I use mp3](http://caniuse.com/#feat=mp3 "MP3")

##HTML

Bij het opzetten van de HTML heb ik nagedacht over de structuur en hoe deze ook met de tab nog steeds goed te gebruiken is. 

```
 <main>
            
            <h1>Vunzige deuntjes</h1>
            <div>
                <section>
                    <h2>Hard kick</h2>
                    <audio id="hardKick" src="sounds/hard-kick.mp3" preload="auto" controls loop>
                        <a href="sounds/hard-kick.mp3">Download hard kick</a>
                    </audio>
                </section>
  </main>
```






  

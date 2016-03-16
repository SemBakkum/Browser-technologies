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
  
  Voorbeeld: 
  
  <img class="support" src="static/images/header-small.jpg" srcset="static/images/header-small.jpg 480w, static/images/header-medium.jpg 960w, static/images/header-large.jpg 1920w" alt="House of Cards">
</p> 


  

(function () {
    var x = document.getElementById("demo");
    var y = document.getElementById("sw");

        if (navigator.geolocation) {
            document.getElementById('crapy').classList.add('fuckOff');;
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    
        function showPosition(position) {
            x.innerHTML = "Latitude: " + position.coords.latitude + 
            "<br>Longitude: " + position.coords.longitude; 
        }	
    
    if ('serviceWorker' in navigator) {  
    navigator.serviceWorker.register('/service-worker.js')  
    .then(initialiseState);  
  } else {  
    y.innerHTML = "Service workers aren\'t supported in this browser." ;  
  }
    
}());


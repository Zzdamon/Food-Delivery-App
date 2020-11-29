function getLocation(map) {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(function(pos){
        //   console.log(pos.coords)
        const markHome =new google.maps.Marker({
            position:{lat:pos.coords.latitude, lng:pos.coords.longitude},
            map:map
        });

        //   return pos.coords;
      } );
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function initMap(){
      const page=document.querySelector("#root");
      
      page.innerHTML+=`<div id="map"> </div>`;
      const options ={
          zoom:15,
          center: {lat:APP.cart[0].restaurant.address[0], lng:APP.cart[0].restaurant.address[1]
          }
      }
      let map= new google.maps.Map(document.querySelector("#map"),options);
      let markRest= new google.maps.Marker({
          position:{lat:APP.cart[0].restaurant.address[0], lng:APP.cart[0].restaurant.address[1]},
          map:map
      });
      let homeCoordinates= getLocation(map);
      console.log(homeCoordinates);
      
    // getLocation();
  }

  
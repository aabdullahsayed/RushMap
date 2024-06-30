// Initialize and add the map
function initMap() {
    // The location of the user's current position
    navigator.geolocation.getCurrentPosition(position => {
        const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        // The map, centered at the user's current position
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: userLocation
        });

        // Add a marker at the user's current position
        const marker = new google.maps.Marker({
            position: userLocation,
            map: map
        });

        // Add the Traffic Layer
        const trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
    });
}

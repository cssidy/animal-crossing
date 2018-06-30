// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function getGeo() {
    var output = document.getElementById("geo_output");
    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser/device.</p>";
        return;
    }
    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude us ' + longitude + '°</p>';
    }
    function error() {
        output.innerHTML = "Unable to retrieve your location.";
    }
    output.innerHTML = "<p>Asking for permission...</p>";
    navigator.geolocation.getCurrentPosition(success, error);
}



function convertAddressToGeo() {

}
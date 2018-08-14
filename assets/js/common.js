// get geolocation, date and time from user's device

document.addEventListener("DOMContentLoaded", function() {

    // get current datetime
    const date_output = document.getElementById("date_output");
    let now = new Date();

    date_output.innerHTML = now;


    // geolocation
    // Note: This example requires that you consent to location sharing when prompted by your browser.

    function getGeo() {
        const output = document.getElementById("geo_output");
        if (!navigator.geolocation) {
            output.innerHTML = "<p>Geolocation is not supported by your browser/device.</p>";
            return;
        }
        function success(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

        }
        function errorCallback(error) {
            output.innerHTML = '<p>There was an error obtaining your position.</p>';
            console.log('ERROR CODE: ' + error.code + ': ' + error.message);
        }
        output.innerHTML = "<p>Asking for permission...</p>";
        navigator.geolocation.getCurrentPosition(success, errorCallback);
    }
    getGeo();



});

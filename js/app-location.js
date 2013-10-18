var location;

var onLocationSuccess = function onLocationSuccess(position){
		location = position.coords.latitude + "," + position.coords.longitude;
};

var onLocationError = function onLocationError(error){
		alert('Error code: ' + error.code + '; message: ' + error.message);
};

var gps = {


	returnLocation: function() {
			navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);
			return location;
		}
	
};
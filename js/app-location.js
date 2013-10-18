var location = {
	function onLocationSuccess(position){
		return position.coords.latitude + ',' + position.coords.longitude;
	}

	function onLocationError(error){
		alert('Error code: ' + error.code + '; message: ' + error.message);
	}

	function returnLocation(){
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}
	
};
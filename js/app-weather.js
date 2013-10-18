var weather = {
	// location: app.location,
	// time: app.infos,
	var temperature;

	$.get("https://api.forecast.io/forecast/11f2ff2735120793fdbe88a5aa70752d/" + app.location.returnLocation() + "," + app.info.gettime() + "?units=si", function(data){
		temperature = data.currently.temperature;
	});
};

// API Key 11f2ff2735120793fdbe88a5aa70752d
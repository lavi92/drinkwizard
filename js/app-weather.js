var weather = {

	getTemperature: function() {
		var temperature;
		$.get("https://api.forecast.io/forecast/11f2ff2735120793fdbe88a5aa70752d/" + "45.8,24.15" + "," + app.info.gettime() + "?units=si", function(data){
			temperature = data.currently.temperature;
		});
		return temperature;
	}

};

// API Key 11f2ff2735120793fdbe88a5aa70752d
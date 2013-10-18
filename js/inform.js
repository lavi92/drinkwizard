var infos = {
    gettime: function(){
      var currentDate = new Date();
      var hour = currentDate.getHours();
      var minute = currentDate.getMinutes();
      if(minute<= 9)
        minute="0"+minute;
      var currentTime= hour + ":" + minute;
      document.getElementById('time').innerHTML = currentTime;
    },
    
    gettemp: function(){
    }
};

//e5e5aecd6b08ebcdb0e25978556abcd8 APIKEY
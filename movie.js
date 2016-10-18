var http = require("http")
//var movieTitle = "Empire Strikes Back"

function get(movieTitle){
	var request = http.get("http://www.omdbapi.com/?t=" + threeFavouriteMovies + "&y=&plot=short&r=json", function(response){
	//var request = http.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json", function(response){
		
		var body = "";
		response.on("data", function(chunk){
			console.log("BODY: " + chunk)
			body += chunk;
		})
		response.on("end", function(){
			// var movieTitle = JSON.parse(body)
			// console.log(movieTitle)
			var threeFavouriteMovies = JSON.parse(body)
			console.log(threeFavouriteMovies)
		})
	})

}

//get(movieTitle);
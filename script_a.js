//script file
//Event Handling
/*
//without JSON
document.addEventListener ("DOMContentLoaded",
	function(event) {
		
		//unobstrusive event binding
		document.querySelector("button")
			.addEventListener("click",function() {
				//var self = this;
				//var name = "";
				//call server to get the name
				$ajaxUtils.sendGetRequest("data/name.txt",
					function(request) {
						//self.name = request.responseText;
						
						var name = request.responseText;

						document.querySelector("#content")
							.innerHTML = "<h2>Hello "+name+"!</h2>";
					});
				
				
			});
	}
);
*/
//with JSON
document.addEventListener ("DOMContentLoaded",
	function(event) {
		
		//unobstrusive event binding
		document.querySelector("button")
			.addEventListener("click",function() {
				//var self = this;
				//var name = "";
				//call server to get the name
				$ajaxUtils.sendGetRequest("data/name.json",
					function (res) {
						var message = 
							res.firstName + " " +res.lastName;
						if(res.likesChineseFood) {
							message += " likes Chinese Food";
						}
						else {
							message += " doesn't like Chinese Food";
						}
						message += " and uses ";
						message += res.numberOfDisplays +1;
						message += " displays for Coding";

						document.querySelector("#content")
							.innerHTML = "<h2>" +message+"</h2>";
						console.log("hi");
					}
				);
				
				
			});
	}
);
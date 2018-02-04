//javascript file
//module 5
//DOM Manipulation
//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument);

/*
function SayHello(event) {

	//console.log(document.getElementById("name").value);
	//console.log(this);
	this.textContent = "Said it!";
	var name = document.getElementById("name").value;
	//var message = "Hello " + name +"!";
	//document.getElementById("content").textContent = message;
	var message = "<h2>Hello " +name+ "!</h2";
	document.getElementById("content").innerHTML = message;

	if (name==="student") {
		//var title = document.getElementById("title").value;
		var title = document.querySelector("#title").textContent;
		title += " & Lovin' it!";
		document.querySelector("#title").textContent = title;
	}
	else {
		var title = "Lecture 53";
		document.querySelector("#title").textContent = title;
	}
}

//ubobstrusive event binding
//document.querySelector("button").addEventListener("click",SayHello);

document.querySelector("button").onclick = SayHello;

*/

//Event handling
//For this javascript line in html can be written on top
document.addEventListener("DOMContentLoaded",
	function (event) {
		function SayHello(event) {
			this.textContent = "Said it!";
			var name = document.getElementById("name").value;	
			var message = "<h2>Hello "+name+"!</h2>";

			document.getElementById("content").innerHTML = message;

			if (name ==="student") {
				var title = document.querySelector("#title").textContent;
				title += " & Lovin' it!";
				document.querySelector("#title").textContent = title;
			}
			else {
				title = "Lecture 54";
				document.querySelector("#title").textContent = title;
			}
		}

		document.querySelector("button").onclick = SayHello;

		document.querySelector("body").addEventListener("mousemove",
			function (event) {
				//console.log(event.clientX,"	",event.clientY);
				if(event.shiftKey ===true) {
					console.log("x: " +event.clientX +"  y: "+event.clientY);
				}
			}
		); 
	}
);

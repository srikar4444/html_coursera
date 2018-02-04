(function (global) {
	//Using JSON in this
	//setup namespace for our utility
	var ajaxUtils = {};

	//Returns an HTTP request object
	function getRequestObject() {
		if(global.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (global.ActiveXObject) {
			//For very old IE browsers (optional)
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else
		{
			global.alert("Ajax is not supported!");
			return (null);
		}
	} 

	//Makes an Ajax GET request to "requestUrl"
	ajaxUtils.sendGetRequest = 
		function(requestUrl, responseHandler,isJsonResponse) {
			var request = getRequestObject();
			request.onreadystatechange = 
				function() {
					handleResponse(request,responseHandler,isJsonResponse);
				};
				//true here stands for allowing asynchronous
				request.open("GET", requestUrl, true); 
				request.send(null); //for POST Only
			};

	//only calls user provided 'responseHandler' function if 
	// response is ready and not an error
	function handleResponse(request, responseHandler,isJsonResponse) {
		if((request.readyState ==4) &&
			(request.status ==200)) {
			
			if(isJsonResponse == undefined) {
				isJsonResponse = true;
			}
			if(isJsonResponse) {
				responseHandler(JSON.parse(request.responseText));
			}
			else {
				responseHandler(request.responseText);
			}
		}
	}

	global.$ajaxUtils = ajaxUtils;

}) (window);
/*
//Without using JSON
(function (global) {
	//setup namespace for our utility
	var ajaxUtils = {};

	//Returns an HTTP request object
	function getRequestObject() {
		if(global.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (global.ActiveXObject) {
			//For very old IE browsers (optional)
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else
		{
			global.alert("Ajax is not supported!");
			return (null);
		}
	} 

	//Makes an Ajax GET request to "requestUrl"
	ajaxUtils.sendGetRequest = 
		function(requestUrl, responseHandler) {
			var request = getRequestObject();
			request.onreadystatechange = 
				function() {
					handleResponse(request,responseHandler);
				};
				//true here stands for allowing asynchronous
				request.open("GET", requestUrl, true); 
				request.send(null); //for POST Only
			};

	//only calls user provided 'responseHandler' function if 
	// response is ready and not an error
	function handleResponse(request, responseHandler) {
		if((request.readyState ==4) &&
			(request.status ==200)) {
			responseHandler(request);
		}
	}

	global.$ajaxUtils = ajaxUtils;

}) (window);
*/
//Using JSON and modifying accordingly

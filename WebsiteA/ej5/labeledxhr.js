var headID = document.getElementsByTagName("head")[0];         
var checker = document.createElement('script');
checker.type = 'text/javascript';
checker.async = false ; 
checker.src = 'http://alice.com:8080/ej5/xhr.js';
// Tell the parent that we are ready after loading the script
checker.onload = ready_to_go ;
headID.appendChild(checker);
 
onmessage = function(url) {
	xhr(
		url,
		"GET",
		function onSuccess(response) {
			//postMessage(response);
			alert(response);
		},
		function onFailure(errorMessage) {
			//postMessage(errorMessage);
			alert(errorMessage);
		}
	);
};

function ready_to_go() {
	postMessage('ready') ;
};

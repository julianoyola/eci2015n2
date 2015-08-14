var headID = document.getElementsByTagName("head")[0];         
var checker = document.createElement('script');
checker.type = 'text/javascript';
checker.async = false ; 
checker.src = 'http://alice.com:8080/zxcvbn.js';
// Tell the parent that we are ready after loading the script
checker.onload = ready_to_go ;
headID.appendChild(checker);
 
onmessage = function(lblob) {
		// After that, the password checker is confined to http://alice.com:8080/
		COWL.privacyLabel = COWL.privacyLabel.and(lblob.privacy);
		var password = lblob.blob, 
		    result = zxcvbn(password) ;

		if (result.score >= 3) postMessage('strong') ;
		else postMessage('weak') ;
};

function ready_to_go() {
	postMessage('ready') ;
} ;




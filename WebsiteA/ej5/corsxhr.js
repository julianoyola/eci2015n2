function corsxhr(url, httpMethod, onSuccess, onFailure, iframe) {

	// Insert xhr.js in iframe
	var doc = iframe.contentDocument;
	iframe.srcdoc = 
	  ' <!DOCTYPE html>                                '
	+ ' <html>                                         '
	+ ' <head>                                         '
	+ ' 	<meta charset="UTF-8">                     '
	+ ' </head>                                        '
	+ ' <body>                                         '
	+ ' 	<script src="xhr.js"></script>             '
	+ ' 	<script>                                   '
	+ ' 	window.onload = function () {          	   '
	+ '			COWL.enable();                         '
	+ '			var remoteLabel = new Label("' + url + '");  			 '
	+ '			COWL.privacyLabel = COWL.privacyLabel.and(remoteLabel);  '
	+ '			alert(COWL.privacyLabel);              '
	+ '			xhr("' + url + '",                     '
	+ '				"GET",                             '
	+ '				function (lblob) {                 '
	+ '					alert(lblob);                  '
	+ '				},                                 '
	+ '				function (errorMessage) {          '
	+ '					alert(errorMessage);           '
	+ '				}                                  '
	+ ' 		);                                     '
	+ ' 	}                                          '
	+ ' 	</script>                                  '
	+ ' </body>                                        '
	+ ' </html>                                        ';
}

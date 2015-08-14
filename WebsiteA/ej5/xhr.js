function xhr(url, httpMethod, onSuccess, onFailure) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				//alert("200");
				var response = xmlhttp.responseText;
				var lblob = new LabeledBlob(response, url);
				onSuccess(lblob);
			} else if (xmlhttp.status == 0) {
				var errorMessage = "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource";
				onFailure(errorMessage);
			}
		}
	}
	
	//COWL.privacyLabel = new Label(url);
	//alert(COWL.privacyLabel);
	
	xmlhttp.open(httpMethod, url, true);
	xmlhttp.send();
}

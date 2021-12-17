uri = window.location.pathname;

request = new XMLHttpRequest();
request.open('GET', 'logger/logger.php?uri=' + uri);
request.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById('hit-count').innerHTML = this.responseText;
	}
};
request.send();
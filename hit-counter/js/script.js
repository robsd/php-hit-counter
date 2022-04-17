request = new XMLHttpRequest();
request.open('GET', 'hit-counter/counter.php');
request.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById('hit-count').innerHTML = this.responseText;
	}
};
request.send();
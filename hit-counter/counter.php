<?php
	$request = $_GET['uri'];

	$hits = file_get_contents("hits.json");
	
	$hits = json_decode($hits, true);

	if (array_key_exists($request, $hits))
	{
		echo ++$hits[$request];
	}
	else
	{
		echo $hits[$request] = 1;
	}

	file_put_contents("hits.json", json_encode($hits, JSON_PRETTY_PRINT));
?>
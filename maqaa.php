<?php
	header("Content-Type: text/html;charset=UTF-8");
    mysql_connect("r.mysql.kotisivut.com", "zelealemcom", "V2FQHnE8") or die("Error connecting to database: ".mysql_error());
    mysql_select_db("zelealemcom_db") or die(mysql_error());
	$data = mysql_query("SELECT * FROM maqaa WHERE `saala` = 0 ORDER BY RAND() LIMIT 5") or die(mysql_error()); 
		
	Print "<div id='names'>"; 
	print "<ul>"
	 while($info = mysql_fetch_array( $data )) 
	 { 
	
	 Print "<li>".$info['maqaa'] . "</li> "; 
	 
	 }
	print "</ul>"	 
	Print "</div>"; 
 ?> 


<html>
	<head>
		<title>MAQAA</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		
		 <style type="text/css">
		 .main {
			position:absolute;
			top: 20px;
			left:20px;		
		 }
				
		</style>
		
	</head>
	<body>
	<p>hi</p>
	<div id="main">
	<h1>hi</h1>
	</div>
	</body>
</html

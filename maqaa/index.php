<?php
	header("Content-Type: text/html;charset=UTF-8");
    mysql_connect("r.mysql.kotisivut.com", "zelealemcom", "V2FQHnE8") or die("Error connecting to database: ".mysql_error());
    mysql_select_db("zelealemcom_db") or die(mysql_error());
	
	
	function b($saala){
	$data = mysql_query("SELECT * FROM maqaa WHERE `saala` = $saala or `saala` = 2 ORDER BY RAND() LIMIT 5") or die(mysql_error());
	
	print "<ul>";
	while($info = mysql_fetch_array( $data ))  { 	
		Print "<li> <a class='link' href='#' onclick='myFunction();return false;'>" .$info['maqaa']."</a></li> "; 	 
	 }
		print "</ul>";	 	
	}	
?> 


<html>
	<head>
		<title>BM</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		
		 <style type="text/css">
		 #main {
			position:absolute;
			top: 50px;
			left:200px;
			background-image:url(img/bkg.png);
			background-repeat: no-repeat;
			height:600px;
			width:800px;
		 }
		 #names{
		 position: relative;
		 left:160px;
		 top:160px;
		 font: 100 2em/125% 'Walter Turncoat', Helvetica, Sans-serif;
		 text-shadow: 2px 2px #333333;
		 
		 }
		 #sal1{color:#0197fd;}
		 #sal0{color:#ff9bff;}
		 ul {
				list-style-type: none;
				padding: 0px;
				margin: 0px;
			}
		#form{
		position:relative;
		top:30px;
		right:20px;
		}
		.btn0{			 
			background: url('img/0.png') no-repeat top left;
			background-size: 100px auto;
			opacity:0.7;
		}
		.btn1{
		
			background: url('img/1.png') no-repeat top left;
			background-size: 100px auto;
			opacity:0.7;
		}
		.btn{
			border:none;
			width:100px;
			height:100px; 
			font-size: 0;
			line-height: 0;	;
		}
		.btn:hover {opacity:2; }
		.link{text-decoration:none;
			 color: inherit;}
		#cart{
		width:200px;
		height:350px;
		font:size: 12;
		position:absolute;
		top:200px;
		left:700px;
		
		}
		</style>
		<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Walter+Turncoat" />

		
	</head>
	<body>
	
	<div id="main">
		<div id="names">
			<?php 			
				if($_POST['submit']==0)  
				{
				print "<div id='sal0'>"; b(0); print "</div>";
				}
				else if($_POST['submit']==1) 
				{ 
				print "<div id='sal1'>"; b(1); print "</div>";
				}
			?>
			<form id="form" action='index.php' method="POST">
			<input type="submit" class="btn0 btn" name="submit" value="0" src="img/0.png" width="80px" />
			<input type="submit" class="btn1 btn" name="submit" value="1" src="img/1.png" width="80px" />
			</form>
		</div>
	</div>
	<div id="cart"></div>
	</body>
	<script>
//function myFunction() {
//    cart=document.getElementById("cart");
//	var newcontent = document.createElement('div');
//   newcontent.innerHTML = "bar";
//	cart.appendChild(newcontent);
//}

</script>
</html>

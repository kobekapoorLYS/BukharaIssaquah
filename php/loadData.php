<?php
	$servername = "bukharaissaquah.com:3306";
	$username = "lys_webAccess";
	$password = "9JQP&P3H]v3c";
	$dbname = "lys_bukhara_buffet";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT id, menu FROM Buffet";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0)
	{
		// output data of each row
		while($row = mysqli_fetch_assoc($result))
		{
			//echo "id: " . $row["id"]. " - Menu: " . $row["menu"]. "<br>";

			$text = $row["menu"];
			$text = preg_replace( "/\r|\n/", "", $text);
			$items = preg_split("/<.*?>/", $text);
			$items = array_filter($items, create_function('$value', 'return $value !== "" || $value == " ";'));

			/*foreach($items as &$item)
			{
				echo "item: " . $item . "<br>";
			}*/

			echo "<script type='text/javascript'> printBuffet(" . json_encode($items) . "); </script>";

			break;
		}
	}
	else 
	{
		echo "0 results";
	}



	mysqli_close($conn);
?>

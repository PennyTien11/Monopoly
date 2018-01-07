<!DOCTYPE html>
<html>
<head>
	<title>大富翁</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/field.js"></script>
	<script type="text/javascript" src="js/player.js"></script>
	<script type="text/javascript" src="js/game.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<table>
		<tbody>
			<tr>
				<td id="100"></td>
				<td id="101"></td>
				<td id="102"></td>
				<td id="103"></td>
				<td id="104"></td>
				<td id="105"></td>
			</tr>
			<tr>
				<td id="119"></td>
				<td id="main" colspan="4" rowspan="4"><div id="title"><p>大富翁</p></div><div id="die"></div></td>
				<td id="106"></td>
			</tr>
			<tr>
				<td id="118"></td>
				<td id="107"></td>
			</tr>
			<tr>
				<td id="117"></td>
				<td id="108"></td>
			</tr>
			<tr>
				<td id="116"></td>
				<td id="109"></td>
			</tr>
			<tr>
				<td id="115"></td>
				<td id="114"></td>
				<td id="113"></td>
				<td id="112"></td>
				<td id="111"></td>
				<td id="110"></td>
			</tr>
		</tbody>
	</table>
	<svg width="20" height="20" class="mark" id="0">
		<circle cx="10" cy="10" r="10" stroke-width="2" stroke="black" fill="yellow" /></svg>
	<svg width="20" height="20" class="mark" id="1">
		<circle cx="10" cy="10" r="10" stroke-width="2" stroke="black" fill="red" /></svg>
	<svg width="20" height="20" class="mark" id="2">
		<circle cx="10" cy="10" r="10" stroke-width="2" stroke="black" fill="orange" /></svg>
	<svg width="20" height="20" class="mark" id="3">
		<circle cx="10" cy="10" r="10" stroke-width="2" stroke="black" fill="green" /></svg>

	<div class="player" id="player0">1
		<div class="name"></div>
		<div class="money"></div>
		<button type="button" class="roll" id="p0">roll button</button>
	</div>
	<div class="player" id="player1">2
		<div class="name"></div>
		<div class="money"></div>
		<button type="button" class="roll" id="p1">roll button</button>
	</div>
	<div class="player" id="player2">3
		<div class="name"></div>
		<div class="money"></div>
		<button type="button" class="roll" id="p2">roll button</button>
	</div>
	<div class="player" id="player3">4
		<div class="name"></div>
		<div class="money"></div>
		<button type="button" class="roll" id="p3">roll button</button>
	</div>
</body>
</html>
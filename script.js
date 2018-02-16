document.querySelector('button.menu').addEventListener('click', function() {		// MENU
	document.body.classList.add('menu');
});

document.querySelector('.menu .close').addEventListener('click', function() {
	document.body.classList.remove('menu');
});

document.querySelector('div.dark').addEventListener('click', function() {
	document.body.classList.remove('menu');
});

document.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) document.body.classList.remove('menu');
});

document.querySelector('.menu > ul > li > button').addEventListener('click', function() {
	document.querySelector('.menu ul ul').classList.add('open');
});

document.querySelector('.menu ul ul button').addEventListener('click', function() {
	document.querySelector('.menu ul ul').classList.remove('open');
});




document.querySelector('button.modal').addEventListener('click', function(event) {	// MODAL
	document.body.classList.add('modal');
});

document.querySelector('.modal .close').addEventListener('click', function() {
	document.body.classList.remove('modal');
});

document.querySelector('div.dark').addEventListener('click', function() {
	document.body.classList.remove('modal');
});

document.addEventListener('keydown', function(event) {
	document.body.classList.remove('modal');
});




function initMap() {																// MAP
	var par = {lat: 59.843041, lng: 30.3200435},
		isspa = {lat: 59.842766, lng: 30.3162032},
		luxury = {lat: 59.9671712, lng: 30.2711788};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: par
	});

	var marker = new google.maps.Marker({
		position: par,
		map: map
	});

	document.getElementById('par').addEventListener('change', function() {
		if (this.checked) map.setCenter(par);
		marker.setMap(null);
		marker = new google.maps.Marker({
			position: par,
			map: map,
		});
	});

	document.getElementById('isspa').addEventListener('change', function() {
		if (this.checked) map.setCenter(isspa);
		marker.setMap(null);
		marker = new google.maps.Marker({
			position: isspa,
			map: map,
		});
	});

	document.getElementById('luxury').addEventListener('change', function() {
		if (this.checked) map.setCenter(luxury);
		marker.setMap(null);
		marker = new google.maps.Marker({
			position: luxury,
			map: map,
		});
	});
}
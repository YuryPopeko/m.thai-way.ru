document.querySelector('button.menu').addEventListener('click', function() {		// MENU
	document.body.classList.add('menu');
});

document.querySelector('.menu .close').addEventListener('click', function() {
	closeMenu();
});

document.querySelector('div.dark').addEventListener('click', function() {
	closeMenu();
});

const servicesList = document.querySelector('.menu ul ul');

document.addEventListener('keydown', function(event) {
	if (event.keyCode === 27)
		closeMenu();
});

document.querySelector('.menu > ul > li > button').addEventListener('click', function() {
	document.querySelector('.menu ul ul').classList.add('open');
});

document.querySelector('.menu ul ul button').addEventListener('click', function() {
	document.querySelector('.menu ul ul').classList.remove('open');
});

function closeMenu() {
	document.body.classList.remove('menu');
	if (servicesList.classList.contains('open'))
		servicesList.classList.remove('open');
}




if (document.querySelector('section.salons')) {
	document.querySelector('section.salons').addEventListener('click', function(event) {
		if (event.target.classList.contains('modal'))
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
}




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





if (document.location.href.indexOf('service') > 0) {
	document.querySelector('.salons').addEventListener('click', function(event) {
		if (event.target.innerHTML === '360') {
			const tourContainer = event.target.parentElement;
			tourContainer.classList.add('open');
			const close = document.querySelector('.tour.open .close');

			close.addEventListener('click', function() {
		        tourContainer.classList.remove('open');
		    });
		}
	});
}




if (document.location.href.indexOf('gallery') > 0) {
	const gallery = document.querySelector('main.gallery'),
		  images = document.querySelectorAll('main.gallery > a');
	document.querySelector('select').addEventListener('change', function(event) {
		gallery.className = 'gallery clearfix';
		gallery.classList.add(event.target.value);
	});
}

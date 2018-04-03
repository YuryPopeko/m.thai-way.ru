document.querySelector('button.menu').addEventListener('click', function() {		// MENU
	document.body.classList.add('menu');
});

document.querySelector('.menu .close').addEventListener('click', function() {
	closeMenu();
});

document.querySelector('div.dark').addEventListener('click', function() {
	closeMenu();
});

document.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) closeMenu();
});

document.querySelector('.menu > ul > li > button').addEventListener('click', function() {
	document.querySelector('.menu ul ul').classList.add('open');
});

document.querySelector('.menu ul ul button').addEventListener('click', function() {
	document.querySelector('.menu ul ul').classList.remove('open');
});

const servicesList = document.querySelector('.menu ul ul');

function closeMenu() {
	document.body.classList.remove('menu');
	if (servicesList.classList.contains('open')) servicesList.classList.remove('open');
}




const callRequest = document.querySelectorAll('section.salons button.modal');				// ЗАКАЗАТЬ ЗВОНОК
if (callRequest) {
	callRequest.forEach(function(i) {
		i.addEventListener('click', function(event) {
			document.body.classList.add('modal');
		})
	});

	document.querySelectorAll('.modal .close').forEach(function(i) {
		i.addEventListener('click', function() {
			document.body.classList.remove('modal');
		})
	});

	document.querySelector('div.dark').addEventListener('click', function() {
		document.body.classList.remove('modal');
	});

	document.addEventListener('keydown', function(event) {
		if (event.keyCode === 27) document.body.classList.remove('modal');
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

	const luxuryTab = document.getElementById('luxury');
	if (luxuryTab) {
		luxuryTab.addEventListener('change', function() {
			if (this.checked) map.setCenter(luxury);
			marker.setMap(null);
			marker = new google.maps.Marker({
				position: luxury,
				map: map,
			});
		});
	}
}





const tours = document.querySelectorAll('.tour div');										// 3D-TOUR
if (tours) {
	tours.forEach(function(i) {
		i.addEventListener('click', function(event) {
			const tourContainer = event.target.parentElement;
			tourContainer.classList.add('open');
			const close = document.querySelector('.tour.open .close');
			close.addEventListener('click', function() {
		        tourContainer.classList.remove('open');
		    });
		})
	});
}




const toggleContent = document.querySelector('select.toggle-content');					// ЗАМЕНА КОНТЕНТА ПОД СЕЛЕКТОМ
if (toggleContent) {
	const main = document.querySelector('main');
	toggleContent.addEventListener('change', function(event) {
		main.dataset.content = event.target.value;
	});
}
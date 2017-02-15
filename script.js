var current = 'home';

//document.addEventListener('contextmenu', event => event.preventDefault());

function toPhoto() {
    document.getElementById('page').innerHTML = 'photos';
	document.getElementById('home').style.opacity = '0';
	setTimeout(function () {
		document.getElementById('home').style.display = 'none';
        document.getElementById('caterphoto').style.display = 'block'; //or relative works too
		setTimeout(function () {
			document.getElementById('caterphoto').style.opacity = '1';
		}, 5);
	}, 1000);
    current = 'caterphoto';
}

function toVid(){
    document.getElementById('home').style.opacity = '0';
	setTimeout(function () {
		document.getElementById('home').style.display = 'none';
        document.getElementById('catervid').style.display = 'block'; //or relative works too
		setTimeout(function () {
			document.getElementById('catervid').style.opacity = '1';
		}, 5);
	}, 1000);
    current = 'catervid';
}

function toGraphic(){
    document.getElementById('home').style.opacity = '0';
	setTimeout(function () {
		document.getElementById('home').style.display = 'none';
        document.getElementById('catergraphic').style.display = 'block'; //or relative works too
		setTimeout(function () {
			document.getElementById('catergraphic').style.opacity = '1';
		}, 5);
	}, 1000);
    current = 'catergraphic';
}

function toCode(){
    document.getElementById('home').style.opacity = '0';
	setTimeout(function () {
		document.getElementById('home').style.display = 'none';
        document.getElementById('catercode').style.display = 'block'; //or relative works too
		setTimeout(function () {
			document.getElementById('catercode').style.opacity = '1';
		}, 5);
	}, 1000);
    current = 'catercode';
}

function transitionBack() {
    document.getElementById('page').innerHTML = 'home';
    document.getElementById(current).style.opacity = '0';
	setTimeout(function () {
		document.getElementById(current).style.display = 'none';
        document.getElementById('home').style.display = 'block'; //or relative works too
		setTimeout(function () {
			document.getElementById('home').style.opacity = '1';
		}, 5);
	}, 1000);
}

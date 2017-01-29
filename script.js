var current = 'home'

function toPhoto() {
	document.getElementById(current).style.opacity = '0';
	setTimeout(function () {
		document.getElementById(current).style.display = 'none';
        document.getElementById('caterphoto').style.display = 'block'; //or relative works too
		setTimeout(function () {
			document.getElementById('caterphoto').style.opacity = '1';
		}, 5);
	}, 2000);
}

function toVid(){
    document.getElementById(current).style.opacity = '0';
	setTimeout(function () {
		document.getElementById(current).style.display = 'none';
        document.getElementById('catervid').style.display = 'block'; //or relative works too
		setTimeout(function () {
			document.getElementById('catervid').style.opacity = '1';
		}, 5);
	}, 2000);
}

function transitionBack() {
    document.getElementById('caterphoto').style.opacity = '0';
	setTimeout(function () {
		document.getElementById('caterphoto').style.display = 'none';
        document.getElementById('home').style.display = 'block'; //or relative works too
		setTimeout(function () {
			document.getElementById('home').style.opacity = '1';
		}, 5);
	}, 2000);
}

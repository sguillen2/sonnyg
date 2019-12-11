q = document.getElementById ("lol") ;
t = document.getElementById ("03") ;
w = document.getElementById ("Flex") ;
k = document.getElementById ("Blueface") ;
j = document.getElementById ("Drizzy") ;
d = document.getElementById ("Da") ;
c = document.getElementById ("Ohgeesy") ;
n = document.getElementById ("Wayne") ;
var audio1= new Audio('sounds/sherm.mp3');
var audio2= new Audio('sounds/Rude03.mp3');
var audio3= new Audio('sounds/fenix.mp3');
var audio4= new Audio('sounds/bluefacesc.mp3');
var audio5= new Audio('sounds/drakeaudio.mp3');
var audio6= new Audio('sounds/dababya.mp3');
var audio7= new Audio('sounds/ohgeesy.mp3');
var audio8= new Audio('sounds/abortion.mp3');


function changeImg() {
	q.src="Images/mikeshermlyrics.PNG";
	audio1.play();
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
}
function changeGreedo() {
	t.src="Images/03lyric.PNG";
	audio1.pause();
	audio1.currentTime = 0
	audio2.play();
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
}
function changeFenix() {
	w.src="Images/FFlyric.PNG";
	audio1.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.play();
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
}
function changeBface() {
	k.src="Images/Bface.PNG";
	audio4.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.play();
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
}
function changeDrake() {
	j.src="Images/Drake.PNG";
	audio1.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
	audio5.play();
}
function changeBaby() {
	d.src="Images/Dababy.PNG";
	audio1.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.pause();
	audio8.currentTime = 0
	audio6.play();
}
function changeOhgeesy() {
	c.src="Images/ohgeesylyric.PNG";
	audio1.pause();
	audio6.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.play();
	audio8.pause();
	audio8.currentTime = 0
}
function changeWayne() {
	n.src="Images/waynelyric.PNG";
	audio6.pause();
	audio1.currentTime = 0
	audio2.pause();
	audio2.currentTime = 0
	audio3.pause();
	audio3.currentTime = 0
	audio4.pause();
	audio4.currentTime = 0
	audio5.pause();
	audio5.currentTime = 0
	audio6.pause();
	audio6.currentTime = 0
	audio7.pause();
	audio7.currentTime = 0
	audio8.play();
	
}
function resetImages() {
	//MIKE
	q.src="Images/mike sherm.jpg";
	audio1.pause();
	audio1.currentTime = 0;
	
	//03-GREEDO
	t.src="Images/03-Greedo.jpg";
	audio2.pause();
	audio2.currentTime = 0;
	
	//FENIXFLEXIN
	w.src="Images/unnamed.jpg";
	audio3.pause();
	audio3.currentTime = 0;
	
	//Blueface
    k.src="Images/Blueface.jpg"
	audio4.pause();
	audio4.currentTime = 0;
	
	//drake
	j.src="Images/Drake.jpg";
	audio5.pause();
	audio5.currentTime = 0;
	
	//dababy
	d.src="Images/Dababy.jpg";
	audio6.pause();
	audio6.currentTime = 0;
	
	//ohgeesy
	c.src="Images/ohgeesy.jpg";
	audio7.pause();
	audio7.currentTime = 0;
	
	
	// lilwayne
	n.src="Images/lilwayne.jpg";
	audio8.pause();
	audio8.currentTime = 0;
	

	
}
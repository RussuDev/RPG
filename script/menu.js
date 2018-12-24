
var canvas = document.getElementById('canvas')
var cnvs = canvas.getContext('2d')

//создать фон
var fon_menu = new Image()
//загрузить фон
fon_menu.src = "img/menu/fon_menu.png"
fon_menu.onload=function() {
	//нарисовать фон
	cnvs.drawImage(fon_menu,0,0)
}




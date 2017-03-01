// ------------------------------------------ Javascript ------------------------------------------ //

/*///Para hacer una nueva clase donde se ven como hacer los metodos
function car(type, color, miles){
	this.type = type;
	this.color = color;
	this.miles = miles;

	this.toString = function(){
		return this.type + " - " + this.color + " - " + this.miles + " ";
	};
};
var lala = new car("asd", "asd", "qwe");
document.write(lala.toString());
/**/

/*///Para agregar un nuevo campo en tiempo de ejecucion al objeto y tambien muestra como borrarlo
var persona = {
	nombre:"Fernando  ",
	edad: 26,
	hijos: false,

	gritar: function(){
		document.write(this.nombre);
	}
};
persona.nombre2 = "asda";
delete persona.nombre2;
persona.gritar();
/**/

/*///Como usar loops e ifs
var i = 10;
if (i == 10){
	document.write("este es el if ");
}
else if(i < 0){
	document.write("este es el else if ");
}
else
{
	document.write("este es el else ");
}
while(i > 0){
	document.write(i);
	i--;
};
i = 10;
document.write(" - ");
for (var j = 0; j < i; j++) {
	document.write(j);
};
document.write(" - ");
/**/

/*///Tipo de dato Date fecha
var fecha = new Date();
var fechaString = fecha.toDateString();
fecha.setYear(2000);
var fechaString = fecha.getFullYear();
document.write(fechaString);
/**/

/*/// Modificar un elemento obtenido por su ID
function doMethod() {
	var text = document.getElementById("myID1");
	text.style.color = "blue";
	text.style.backgroundColor = "red";
	text.style.fontStyle = "italic";
}
function doOtherMethod() {
	var text = document.getElementById("myID1");
	text.style.color = "black";
	text.style.backgroundColor = "white";
	text.style.fontStyle = "normal";
}
/**/

/*/// Modificar un elemento obtenido por su Tag
function doMethod() {
	var text = document.getElementsByTagName("p");
	for (var i = 0; i < text.length; i++) {
		text[i].style.backgroundColor = "blue";
		text[i].style.fontStyle = "italic";
	}
}
function doOtherMethod() {
	var text = document.getElementsByTagName("p");
	for (var i = 0; i < text.length; i++) {
	text[i].style.backgroundColor = "red";
	text[i].style.fontStyle = "bold";
	}
}
/**/

/*/// Modificar un elemento obtenido por su clase
function doMethod() {
	var text = document.getElementsByClassName("myClass");
	for (var i = 0; i < text.length; i++) {
		text[i].style.backgroundColor = "red";
		text[i].style.fontStyle = "bold";
	}
}
function doOtherMethod() {
	var text = document.getElementsByClassName("myClass");
	for (var i = 0; i < text.length; i++) {
		text[i].style.border = "5px solid blue";
		text[i].style.backgroundColor = "green";
	}
}
/**/

/*/// Modificar el contenido de un elemento de HTML
function doMethod() {
	var text = document.getElementsByClassName("myClass");
	for (var i = 0; i < text.length; i++) {
		text[i].innerHTML = "Cambiamos el texto en click";
	}
}
function doOtherMethod() {
	var text = document.getElementsByClassName("myClass");
	for (var i = 0; i < text.length; i++) {
		text[i].innerHTML = "Cambiamos el texto en mouseLeave";
	}
}
/**/

/*/// Crear un nuevo elemento especificando el tag y borrandolo
function doMethod() {
	var element = document.createElement("p");
	var principal = document.getElementById("principal");
	principal.appendChild(element);
	var texto = document.createTextNode("Aca esta el otro elemento ! ! !");
	element.appendChild(texto);
}
function doOtherMethod() {
	var elemento = document.getElementsByTagName("p")[6];
	var padre = elemento.parentNode;
	padre.removeChild(elemento);
}
/**/

/*/// Setear un nuevo atributo a algun elemento del DOM, tener en cuenta que se complica cuando se crea un nuevo elemento y se cambia el atributo id
function doMethod() {
	var element = document.createElement("p");
	var principal = document.getElementById("myID3");
	principal.appendChild(element);
	var texto = document.createTextNode("Aca esta el otro elemento ! ! !");
	element.appendChild(texto);
	var nuevoAtributo = document.createAttribute("class");
	nuevoAtributo.value = "prueba";
	element.setAttributeNode(nuevoAtributo);
}
function doOtherMethod() {
}
/**/

/*/// Moverse dentro del DOM, obteniendo hijos, padres, y hermanos
function doMethod() {
	var padre = document.getElementById("principal");
	var hijo = padre.firstElementChild;
	hijo.style.color = "red";

	hijo = padre.lastElementChild;
	hijo.style.color = "red";

	hijo = padre.childNodes;

	var nHijo = padre.firstElementChild;
	var n = 3;
	for (var i = 0; i < n - 1; i++) {
		nHijo = nHijo.nextElementSibling;
	}
	nHijo.style.color = "blue";

	var elemento = document.getElementById("as");
	var elementoPadre = elemento.parentNode;
	elementoPadre.style.backgroundColor = "#3cc";
}
function doOtherMethod() {
}
/**/

/*/// Preguntar si la caja de texto esta vacia a traves del value que es lo que contiene como texto
function doMethod() {
	var cajaTexto = document.getElementById("cajaDeTexto");
	if(cajaTexto.value == ""){
		confirm("esta vacia la caja de texto");
	}
	else{
		cajaTexto.value = "";
	}
}
function doOtherMethod() {
}
/**/

/*/// Trabajar con el MessageBox Confirm
function doMethod() {
	var confirmacion = confirm("Desea poner algo en la caja de texto?");
	var cajaTexto = document.getElementById("cajaDeTexto");
	if(confirmacion){
		cajaTexto.value = "algo";
	}
	else{
		cajaTexto.value = "nada";
	}
}
function doOtherMethod() {
}
/**/


// ------------------------------------------ JQuery ------------------------------------------ //

/*/// Usando selectores
$(document).ready(function(){
	$("#as, .myClass").hide();
	$("button").click(function(){
		$("#as").show();
	});
	$("button").mouseleave(function(){
		$("#as").hide();
	});
});
/**/

/*/// Ampliando selectores
$(document).ready(function(){
//	$("div").style.backgroundColor = "#aaa";
	$("p:not(.myClass)").hide();
//	$("div:first").show();
});
/**/

/*/// Trabajando con el even/odd que selecciona los elementos pares/impares y el contains que selecciona los elementos que contengan el texto
$(document).ready(function(){
	$("p:even").hide();
	$("p:contains('2')").hide();
});
/**/

/*/// Has selector selecciona los elementos del lado izq que contengan elementos del lado derecho, nth-child se fija el n-esimo elemento y el empty se fija si la etiqueta no tiene contenido
$(document).ready(function(){
	$("div:has(button)").hide(700);
	$("#secundario p:nth-child(3)").hide();
	$("p:empty").show();
});
/**/

/*///Propiedades de CSS, en el primer parametro se indica que propiedad se desea modificar, en el segundo se elije el valor nuevo
$(document).ready(function(){
	$("div:last").css("border", "solid 2px red");
});
/**/

/*/// Propiedades de CSS con mas de una regla
$(document).ready(function(){
	$("div:first").css({"border" : "solid 5px blue", "background-color" : "green"});
});
/**/

/*/// Convertir elementos de HTML
$(document).ready(function(){
	$("p").html("<h2>NUEVOOOO</h2>");
});
/**/

/*/// Cambiar el texto de un elemento, notar que es la cadena tal cual lo que va en el texto, no se especifican etiquetas, tener en cuenta que lo que hay entre las etiquetas especificadas es reemplazado solamente por el texto plano
$(document).ready(function(){
	$("p").text("<h2>NUEVOOOO</h2>");
//	$("div").text("<h2>NUEVOOOO</h2>");
});
/**/

/*/// Concatenar propiedades y fadeOut
$(document).ready(function(){
	$("div:first").css("border", "solid 5px blue").css("background-color", "green").fadeOut(1000);
});
/**/

/*/// Agregar, quitar y alternar una clase de HTML. fadeTo y fadeToggle
$(document).ready(function(){
	$("div:first").addClass("prueba").fadeTo(1000, 0.4);
//	$("div:first").removeClass("prueba").fadeToggle(2500);
//	$("div:first").toggleClass("prueba");
});
/**/

/*/// Append, prepend, after y before para poder anexar de las 4 distintas formas que existen
$(document).ready(function(){
	$("p:first").append("<h2>Luego de</h2>");
	$("p:first").prepend("<h2>Antes de</h2>");
	$("p:first").after("<h2>After</h2>");
	$("p:first").before("<h2>Before</h2>");
});
/**/

/*/// Remove y replaceWith para poder alterar lo elementos de HTML
$(document).ready(function(){
	$("p:first").replaceWith("<h2>After</h2>");
	$("p:last").remove();
});
/**/

/*/// Atributos, agregarlos y quitarlos
$(document).ready(function(){
	$("p:first").attr("id", "wep");
	$("#wep").css("color", "green");
	$("p:first").removeAttr("id");	
});
/**/

/*/// Evento hover on/off, se crean dos funciones dentro del metodo, la primera es cuando esta on, la segunda cuando esta off
$(document).ready(function(){
	$("button").hover(function(){
		$("button").css("color", "red");
	}, 
	function(){
		$("button").css("color", "blue");
	});
});
/**/

/*/// El load funciona similar al ready, solamente que el load pregunta cuando tal elemento termino completamente de cargarse PARA JQUERY 1.XX
$(window).load(function(){
	confirm("se cargo!");
});
/**/

/*/// El load funciona similar al ready, solamente que el load pregunta cuando tal elemento termino completamente de cargarse PARA JQUERY 3.XX
$(window).on("load", function(){
	alert("se cargo!");
});
/**/

/*/// Each y this para iterar un conjunto
$(document).ready(function(){
	$("button").click(function(){
		$("div p").each(function(){
			$(this).text("asd");
		});
	});
});
/**/

/*/// Slide Up, Down, Toggle son efectos para deslizar un elemento HTML
$(document).ready(function(){
	$("button").click(function(){
		$("div:last").slideToggle();
	});
});
/**/

// ------------------------------------------ JQueryUI ------------------------------------------ //

/*/// DatePicker con sus funcionalidades
$(document).ready(function(){
//	$("#datePicker").datepicker();
//	$("#datePicker").datepicker({numberOfMonths:2});
//	$("#datePicker").datepicker({changeMonth: true});
//	$("#datePicker").datepicker({changeYear: true, showWeek: true});
//	$("#datePicker").datepicker({showOtherMonths: true});
//	$("#datePicker").datepicker({minDate: new Date(2017,11,25)});
	$("#datePicker").datepicker({showButtonPanel: true, closeText: "Cerrar calendario", currentText: "Actual", yearSuffix: " sufijo"});
});
/**/

/*/// Tooltip y sus funcionalidades con efectos como fadeIn, bounce, explode, pulsate, blind
$(document).ready(function(){
//	$("img").tooltip();
//	$("img").tooltip({content: "Contenido nuevo"});
//	$("img").tooltip({track : true});
	$("img").tooltip({show : {effect : "bounce", duration : 800}},
					  {hide : {effect : "fadeOut", duration : 1200}}
	);
});
/**/

/*/// Accordion mas funcionalidades
$(document).ready(function(){
	$("#paneles").accordion();
//	$("#paneles").accordion({collapsible: true});
//	$("#paneles").accordion({event: "mouseover"});
//	$("#paneles").accordion({animate: 700});
	$("#paneles").accordion({active: 2}, {heightStyle: "content"});
	$("#paneles").accordion({icons:{header: "ui-icon-plus", activeHeader: "ui-icon-minus"}});
});
/**/

/*/// Menu y dialog
$(document).ready(function(){
//	$("#paneles").menu({menus: "div"});
//	$("#cajita").dialog();
//	$("#cajita").dialog({title: "Probando el titulo"}, {draggable: false}, {resizable: false});
//	$("#cajita").dialog({title: "Probando el titulo"}, {show: "bounce", hide: 700});
//	$("#cajita").dialog({closeOnEscape: false});
	$("#cajita").dialog({modal: true});
});
/**/

/*/// Tabs y funcionalidades similares a accordion
$(document).ready(function(){
	$("#maincontainer").tabs();
	$("#maincontainer").tabs({active: 1});
	$("#maincontainer").tabs({collapsible: true});
	$("#maincontainer").tabs({heightStyle: "fill"}); // "content", etc
	$("#maincontainer").tabs({event: "mouseover"});
	$("#maincontainer").tabs({disabled: [1, 2]});
});
/**/

/*/// Draggable y sortable, este ultimo funciona cuando draggeamos varios objetos y se reordenan
$(document).ready(function(){
//	$("#cajita").draggable();
//	$("#cajita").draggable({grid: [50, 50]}); // movimientos fijos
//	$("#cajita").draggable({containment: "parent"}); // para que no se pueda mover fuera del padre
//	$("#cajita").draggable({cursor: "crosshair"});
//	$("#cajita").draggable({delay: "250"});
	$("#cajita").draggable({revert: true});
	$("#cajita").draggable({axis: "y"});
	$("#cajita").draggable({opacity: 0.5});
	$("#cajita").draggable({distance: 200});
	$("#cajita").draggable({disabled: true}); // para que no se pueda mover
});
/**/

/*/// Resizable
$(document).ready(function(){
//	$("#imagen").resizable({minWidth: 200});
//	$("#imagen").resizable({autoHide: true});
	$("#imagen").resizable({ghost: true});
	$("#imagen").resizable({aspectRatio: true});
});
/**/

/*///
$(document).ready(function(){
	$("#combo").selectmenu();
});
/**/
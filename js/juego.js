//Mapeammos los botones que tendra nuestro juego mediante su id
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');

//creamos la clase juego
class Juego {
	//creamos el constructor de la clase
	constructor() {
		//funcion como atributo para inicializar el juego
		this.inicializar();
	}

	//funcion para iniciar el juego
	inicializar() {
		//agregarle al boton una clase de css
		btnEmpezar.classList.add('hide');
	}
}

//funcion para iniciar el juego
function empezarJuego() {
	//iniciar todo el proceso del juego
	let juego = new Juego();
}

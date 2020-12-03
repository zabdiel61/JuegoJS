/* //Mapeammos los botones que tendra nuestro juego mediante su id
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
const ULTIMO_NIVEL = 10;

//creamos la clase juego
class Juego {
	//creamos el constructor de la clase
	constructor() {
		//funcion como atributo para inicializar el juego
		this.inicializar();
		this.generarSecuencia();
		setTimeout(this.siguienteNivel(), 500);
	}

	//funcion para iniciar el juego
	inicializar() {
		this.siguienteNivel = this.siguienteNivel.bind(this);
		this.elegirColor = this.elegirColor.bind(this);
		//agregarle al boton una clase de css
		btnEmpezar.classList.add('hide');
		//nivel actual es el 1, a medida que el usuario
		//repita el patron correctamentavanzara de nivel
		this.nivel = 1;

		//guardamos los colores
		this.colores = {
			//celeste: celeste,
			celeste,
			violeta,
			naranja,
			verde,
		};
	}

	generarSecuencia() {
		//generar secuencia de numeros aleatoria
		this.secuencia = new Array(ULTIMO_NIVEL)
			.fill(0)
			.map((n) => Math.floor(Math.random() * 4));
	}

	//funcion que llamara a iluminar secuencia
	siguienteNivel() {
		this.subNivel = 0;
		//cada ves que se llegue a un nuevo nivel se iluminara la secuencia
		this.iluminarSecuencia();
		this.agregarEventosClick();
	}

	//asignarle un color a cada numero dentro del arrray que va del 0 al 3
	transformarNumeroAColor(numero) {
		switch (numero) {
			case 0:
				return 'celeste';
			case 1:
				return 'violeta';
			case 2:
				return 'naranja';
			case 3:
				return 'verde';
		}
	}

	transformarColorANumero(color) {
		switch (color) {
			case 'celeste':
				return 0;
			case 'violeta':
				return 1;
			case 'naranja':
				return 2;
			case 'verde':
				return 3;
		}
	}

	iluminarSecuencia() {
		//recorrer la secuencai dada por el array aleatorio
		for (let i = 0; i < this.nivel; i++) {
			const color = this.transformarNumeroAColor(this.secuencia[i]);

			//tiempo para iluminar otro color
			setTimeout(() => this.iluminarColor(color), 1000 * i);
		}
	}

	iluminarColor(color) {
		//agregar la clase ligth a los botones traidos
		//medianate el metodo iluminar secuencia
		this.colores[color].classList.add('light');

		//para iluminarlo cierta cantidad de tiempo a un color
		setTimeout(() => this.apagarColor(color), 350);
	}

	apagarColor(color) {
		this.colores[color].classList.remove('light');
	}

	agregarEventosClick() {
		//el metodo bin me sirve para especificar quien sera this en el codigo
		//si no estuviera el metodo elegir color tendra a this como el boton
		//en fin para no perder la referencia a this
		//se traslado al metodo inicializ<ar
		this.colores.celeste.addEventListener('click', this.elegirColor);
		this.colores.violeta.addEventListener('click', this.elegirColor);
		this.colores.naranja.addEventListener('click', this.elegirColor);
		this.colores.verde.addEventListener('click', this.elegirColor);
	}

	eliminarEventosClick() {
		this.colores.celeste.removeEventListener('click', this.elegirColor);
		this.colores.violeta.removeEventListener('click', this.elegirColor);
		this.colores.naranja.removeEventListener('click', this.elegirColor);
		this.colores.verde.removeEventListener('click', this.elegirColor);
	}

	elegirColor(ev) {
		const nombreColor = ev.target.dataset.color;
		const numeroColor = this.transformarColorANumero(nombreColor);
		this.iluminarColor(numeroColor);
		if (numeroColor === this.secuencia[this.subNivel]) {
			this.subNivel++;
			if (this.subNivel === this.nivel) {
				this.nivel++;
				this.eliminarEventosClick();
				if (this.nivel === ULTIMO_NIVEL + 1) {
					//gano
				} else {
					setTimeout(this.siguienteNivel, 2000);
				}
			}
		} else {
			//perdio
		}
	}
}

//funcion para iniciar el juego
function empezarJuego() {
	//iniciar todo el proceso del juego
	window.juego = new Juego();
} */

const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
const ULTIMO_NIVEL = 1;

class Juego {
	constructor() {
		this.inicializar = this.inicializar.bind(this);
		this.inicializar();
		this.generarSecuencia();
		setTimeout(this.siguienteNivel, 500);
	}

	inicializar() {
		this.siguienteNivel = this.siguienteNivel.bind(this);
		this.elegirColor = this.elegirColor.bind(this);
		this.toggleBtnEmpezar();
		this.nivel = 1;
		this.colores = {
			celeste,
			violeta,
			naranja,
			verde,
		};
	}

	toggleBtnEmpezar() {
		if (btnEmpezar.classList.contains('hide')) {
			btnEmpezar.classList.remove('hide');
		} else {
			btnEmpezar.classList.add('hide');
		}
	}

	generarSecuencia() {
		this.secuencia = new Array(ULTIMO_NIVEL)
			.fill(0)
			.map((n) => Math.floor(Math.random() * 4));
	}

	siguienteNivel() {
		this.subnivel = 0;
		this.iluminarSecuencia();
		this.agregarEventosClick();
	}

	transformarNumeroAColor(numero) {
		switch (numero) {
			case 0:
				return 'celeste';
			case 1:
				return 'violeta';
			case 2:
				return 'naranja';
			case 3:
				return 'verde';
		}
	}

	transformarColorANumero(color) {
		switch (color) {
			case 'celeste':
				return 0;
			case 'violeta':
				return 1;
			case 'naranja':
				return 2;
			case 'verde':
				return 3;
		}
	}

	iluminarSecuencia() {
		for (let i = 0; i < this.nivel; i++) {
			const color = this.transformarNumeroAColor(this.secuencia[i]);
			setTimeout(() => this.iluminarColor(color), 1000 * i);
		}
	}

	iluminarColor(color) {
		this.colores[color].classList.add('light');
		setTimeout(() => this.apagarColor(color), 350);
	}

	apagarColor(color) {
		this.colores[color].classList.remove('light');
	}

	agregarEventosClick() {
		this.colores.celeste.addEventListener('click', this.elegirColor);
		this.colores.verde.addEventListener('click', this.elegirColor);
		this.colores.violeta.addEventListener('click', this.elegirColor);
		this.colores.naranja.addEventListener('click', this.elegirColor);
	}

	eliminarEventosClick() {
		this.colores.celeste.removeEventListener('click', this.elegirColor);
		this.colores.verde.removeEventListener('click', this.elegirColor);
		this.colores.violeta.removeEventListener('click', this.elegirColor);
		this.colores.naranja.removeEventListener('click', this.elegirColor);
	}

	elegirColor(ev) {
		const nombreColor = ev.target.dataset.color;
		const numeroColor = this.transformarColorANumero(nombreColor);
		this.iluminarColor(nombreColor);
		if (numeroColor === this.secuencia[this.subnivel]) {
			this.subnivel++;
			if (this.subnivel === this.nivel) {
				this.nivel++;
				this.eliminarEventosClick();
				if (this.nivel === ULTIMO_NIVEL + 1) {
					this.ganoElJuego();
				} else {
					setTimeout(this.siguienteNivel, 1500);
				}
			}
		} else {
			this.perdioElJuego();
		}
	}

	ganoElJuego() {
		swal('Platzi', 'Felicitaciones, ganaste el juego!', 'success').then(
			this.inicializar
		);
	}

	perdioElJuego() {
		swal('Platzi', 'Lo lamentamos, perdiste :(', 'error').then(() => {
			this.eliminarEventosClick();
			this.inicializar();
		});
	}
}

function empezarJuego() {
	window.juego = new Juego();
}

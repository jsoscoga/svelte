<script>
	let botonHabilitado = true;
	let numeroIzquierda = 1, numeroDerecha = 1;
	let mensaje = '';
	let rutaDados = 'assets/img/dice';
	const extPng = ".png";

	function tirarDados() {
		botonHabilitado = false;
		mensaje = 'Lanzando...';
		let ciclos = 0;
		let animacion = setInterval(() => {
			numeroIzquierda = obtenerNumero();
			numeroDerecha = obtenerNumero();
			ciclos++;
			if (ciclos == 50) {
				clearInterval(animacion);
				botonHabilitado = true;
				mensaje = numeroIzquierda == numeroDerecha? 'Ganaste!' : '';
			}
		}, 50);
		
	}

	function obtenerNumero() {
		return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
	}

	
	
</script>

<main>
	<h1 class="text-center">Juego de Dados</h1>
	<p>Presiona el botón Tirar Dados. Si sale par, ganaste.</p>
	<p>¡Buena suerte!</p>
	<div class="jumbotron text-center">
		<button class="btn btn-success lg" disabled={botonHabilitado ? "" : true} on:click={tirarDados}>Tirar Dados</button>
		<br />
		<img src={rutaDados}{numeroIzquierda}{extPng} alt="Dado 1" class="dado">
		<img src={rutaDados}{numeroDerecha}{extPng} alt="Dado 2" class="dado">
	</div>
	<h2 class="text-center">{mensaje}</h2>
</main>

<style>
	.dado {
		width: 300px;
		height: 300px;
		background-color: beige;
		margin: 30px;
		border-radius: 40px;
	}
</style>

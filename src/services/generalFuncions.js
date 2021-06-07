import moment from 'moment';

const cleanAllSession = () => {
	//console.log('clear Session all')
	sessionStorage.removeItem('token');
};

const countTime = (dateIn) => {
	
	const Date = moment(dateIn).format('MM/DD/YYYY')
	let dateForuser = moment(Date, 'MM/DD/YYYY'); // Fecha Seleccionada formateada
	let dateActually = moment(); // Fecha de hoy
	let diff = moment.preciseDiff(dateForuser, dateActually, true);
	
	
	return diff;
	
}

const  formatRut = (rut) =>{
	if(rut !== undefined){
		var string = rut.toString();
		var actual = string.replace(/^0+/, "");
		if (actual != '') {
			var sinPuntos = actual.replace(/\./g, "");
			var actualLimpio = sinPuntos.replace(/-/g, "");
			var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
			var rutPuntos = "";
			var i = 0;
			var j = 1;
			for (i = inicio.length - 1; i >= 0; i--) {
				var letra = inicio.charAt(i);
				rutPuntos = letra + rutPuntos;
				if (j % 3 == 0 && j <= inicio.length - 1) {
					rutPuntos = "." + rutPuntos;
				}
				j++;
			}
			var dv = actualLimpio.substring(actualLimpio.length - 1);
			rutPuntos = rutPuntos + "-" + dv;
		}
		return rutPuntos;
	}
};

const rutIsValid = (rut) => {
	if (!rut || rut.trim().length < 3) return false;
	
	const rutLimpio = rut.replace(/[^0-9kK-]/g, "");
	
	if (rutLimpio.length < 3) return false;
	
	const split = rutLimpio.split("-");
	if (split.length !== 2) return false;
	
	const num = parseInt(split[0], 10);
	const dgv = split[1];
	
	const dvCalc = calculateDV(num);
	return dvCalc === dgv;
}

function calculateDV(rut) {
	const cuerpo = `${rut}`;
	// Calcular Dígito Verificador
	let suma = 0;
	let multiplo = 2;
	
	// Para cada dígito del Cuerpo
	for (let i = 1; i <= cuerpo.length; i++) {
		// Obtener su Producto con el Múltiplo Correspondiente
		const index = multiplo * cuerpo.charAt(cuerpo.length - i);
		
		// Sumar al Contador General
		suma += index;
		
		// Consolidar Múltiplo dentro del rango [2,7]
		if (multiplo < 7) {
			multiplo += 1;
		} else {
			multiplo = 2;
		}
	}
	
	// Calcular Dígito Verificador en base al Módulo 11
	const dvEsperado = 11 - (suma % 11);
	if (dvEsperado === 10) return "K";
	if (dvEsperado === 11) return "0";
	return `${dvEsperado}`;
}
export {
	countTime,
	formatRut,
	rutIsValid,
	cleanAllSession
}
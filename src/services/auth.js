import {URL_GLOBAL} from "../constants/constants";
import axios from 'axios';
import {loginSuccessToken} from "../actions/auth";

//API metodo de comunicación que define con total exactitud su metodo de conexión o integracion para la comunicacion con otros sistemas por ejemplo webPay sistemas de pago, mailchimp entre otros

//Servicio web usara la mayor parte de las veces el protocolo HTTP para lograr la comuncacion aunque tambien puede implementar SOAP o REST es espcifica simple y sin tantas reglas.
export const login = (username, password) => {
	return (dispatch) => {
		//HEADERS
		const config = {
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin" : "*"
			}
		};
		
		//REQUEST BODY
		const body = JSON.stringify({ username, password });
		
		axios.post(`${URL_GLOBAL}/mutual/login`, body, config)
			.then(res => {
				console.log('respuesta', res)
				if (res.status === 200) {
					console.log('respuesta', res)
					dispatch(loginSuccessToken(res.data.object))
				} else {
					console.log('respuesta', res)
					
				}
			}).catch(err => {
			console.log('respuesta', err)
			
		});
	}
}
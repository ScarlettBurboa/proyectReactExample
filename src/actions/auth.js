import {LOGIN_SUCCES} from "./types/types";


const loginSuccessToken = (token) => ({
	type: LOGIN_SUCCES,
	payload: token,
})

export  {
	loginSuccessToken
}
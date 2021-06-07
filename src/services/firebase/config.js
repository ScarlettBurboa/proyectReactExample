import firebase from './firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyCVT3yFm2192bH0YWULUeMm0DOkToEqM_Y",
	authDomain: "react-proyect-d7f41.firebaseapp.com",
	projectId: "react-proyect-d7f41",
	storageBucket: "react-proyect-d7f41.appspot.com",
	messagingSenderId: "70015486939",
	appId: "1:70015486939:web:3f9b3603ad6a272346f5fe",
	measurementId: "G-C90PQK3KLZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()

const auth = firebase.auth.EmailAuthProvider()

export {
	firebase,
	db,
	auth
}
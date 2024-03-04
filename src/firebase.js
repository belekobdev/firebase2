// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCRVpgasA8hjlvITIY2T3GDllG4yum5HBY',
	authDomain: 'practic-103f5.firebaseapp.com',
	projectId: 'practic-103f5',
	storageBucket: 'practic-103f5.appspot.com',
	messagingSenderId: '835339642915',
	appId: '1:835339642915:web:8a5cb8cca11b712c762996',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app

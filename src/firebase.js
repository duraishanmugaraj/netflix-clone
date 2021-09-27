import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDOTV97xiWc05-flp2IVsEGqgfTylmd4b0",
	authDomain: "netflix-clone-wiz.firebaseapp.com",
	projectId: "netflix-clone-wiz",
	storageBucket: "netflix-clone-wiz.appspot.com",
	messagingSenderId: "395370820819",
	appId: "1:395370820819:web:329e5b3abef6ede4fbd026",
	measurementId: "G-MGVCEG339V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const API = "1dc8c277de96e15ccb994de495ba801b"
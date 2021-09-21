import {
    initializeApp
}
from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
}
from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

import {
    getAuth,
    signInAnonymously,
    onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

import {
    getAnalytics,
    logEvent
}
from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";



const firebaseConfig = {
    apiKey: "AIzaSyBfnSNpBPkSZ3ksU9siLKwQaPFskL7Ohgs",
    authDomain: "swivvle-official-cs.firebaseapp.com",
    projectId: "swivvle-official-cs",
    storageBucket: "swivvle-official-cs.appspot.com",
    messagingSenderId: "314552405421",
    appId: "1:314552405421:web:d1b6d319fe1f5afaa8e524",
    measurementId: "G-G21EN5KVCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const analytics = getAnalytics();

logEvent(analytics, 'select_content');
logEvent(analytics, 'generate_lead');
logEvent(analytics, 'scroll');
logEvent(analytics, 'page_view');
logEvent(analytics, 'click');
logEvent(analytics, 'click');
logEvent(analytics, 'click');



signInAnonymously(auth)
    .then(() => {
        console.log("succesfully logged in as an annonymous user");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        // ...
    }
});

document.getElementById("userinfo").addEventListener("submit", (e) => {
    e.preventDefault();
    submitData(e);

});

async function submitData(e) {
    console.log(e);
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first_name: e.target[1].value,
            last_name: e.target[2].value,
            country: e.target[4].value,
            zipcode: e.target[5].value,
            email: e.target[6].value,
            newsletter: e.target[8].checked,
            business_partner: e.target[9].checked,
            early_adopter: e.target[10].checked
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
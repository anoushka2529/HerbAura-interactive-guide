import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getDatabase, ref, set, push } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCkdpAFqX4MG1tlVOcGx7KRELUCkNfezX0",
    authDomain: "contact-form-e27dc.firebaseapp.com",
    databaseURL: "https://contact-form-e27dc-default-rtdb.firebaseio.com",
    projectId: "contact-form-e27dc",
    storageBucket: "contact-form-e27dc.firebasestorage.app",
    messagingSenderId: "411346049001",
    appId: "1:411346049001:web:68f94b94c73f7bf01e5d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Set up your reference to Firebase Realtime Database
const contactFormDB = ref(db, 'contactForm');

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var message = getElementVal('message');
    console.log(email, subject, message);
    saveToFirebase(email, subject, message);
}

// Function to get input field values
const getElementVal = (id) => {
    return document.getElementById(id).value;
};

// Function to save data to Firebase (using push to create a unique entry)
function saveToFirebase(email, subject, message) {
    // Using push to create a unique key for each submission
    const newContactRef = push(contactFormDB);

    set(newContactRef, {
        email: email,
        subject: subject,
        message: message
    }).then(() => {
        alert("Message sent successfully!");
    }).catch((error) => {
        console.error("Error saving to Firebase: ", error);
    });
}
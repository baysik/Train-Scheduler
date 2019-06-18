// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBsesCbeSBjDSsvQ8UqU9P9DEKhZCo5UPs",
    authDomain: "trainscheduler-3f222.firebaseapp.com",
    databaseURL: "https://trainscheduler-3f222.firebaseio.com",
    projectId: "trainscheduler-3f222",
    storageBucket: "trainscheduler-3f222.appspot.com",
    messagingSenderId: "88806088749",
    appId: "1:88806088749:web:7c8366ac777369d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dataRef = firebase.database();

// iniital values
var trainName = "";
var destination = "";
var firstTrainTime = "";
var frequency = "";
// capture button click
$("#submit-button").click(function(event){
    event.preventDefault();
    // logic for storing and retrieving train paramaters
    
})

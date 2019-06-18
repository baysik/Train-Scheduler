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
$("#add-train-button").on("click", function(event) {
    event.preventDefault();
    // logic for storing and retrieving train paramaters
    trainName = $("#train-name-form").val();
    destination = $("#destination-form").val();
    firstTrainTime = $("#train-time-form").val();
    frequency = $("#frequency-form").val();
    // push code to database
    dataRef.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

// firebase watcher
dataRef.ref().on("child_added", function(childSnapshot){

    // log everything fromt he snapshot
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().firstTrainTime);
    console.log(childSnapshot.val().frequency);

    // append to table
    $("tbody").append("<tr><td scope='row' id='train-name'>" + childSnapshot.val().trainName +
    "</td><td id='destination'>" + childSnapshot.val().destination +
    "</td><td id='frequency'>" + childSnapshot.val().frequency +
    "</td><td id='next-arrival'>" + childSnapshot.val().firstTrainTime +
    "</td></tr>");
})

dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
    $("train-name-form").text(snapshot.val().trainName);
    $("destination-form").text(snapshot.val().destination);
    $("train-time-form").text(snapshot.val().firstTrainTime);
    $("frequency-form").text(snapshot.val().frequency);
});
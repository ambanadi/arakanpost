// Initialize Firebase
var config = {
  apiKey: "AIzaSyB8YnuEKDpReaiJm6pkEy9-CrXYhXaZD6U",
  authDomain: "arakan-654ee.firebaseapp.com",
  databaseURL: "https://arakan-654ee-default-rtdb.firebaseio.com",
  projectId: "arakan-654ee",
  storageBucket: "arakan-654ee.firebasestorage.app",
  messagingSenderId: "142677853865",
  appId: "1:142677853865:web:4b6d285e7926e644900bb8",
  measurementId: "G-S5X00BNPSH"
};

firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('political');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('political/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}



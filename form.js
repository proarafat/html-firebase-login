
  var firebaseConfig = {
    apiKey: "AIzaSyDEgTH8WaZuthHvrnCuGEnEnATDRgzgUHc",
    authDomain: "html-firebase-login.firebaseapp.com",
    projectId: "html-firebase-login",
    storageBucket: "html-firebase-login.appspot.com",
    messagingSenderId: "177433178785",
    appId: "1:177433178785:web:7fc0938dba5595c27f76e0",
    measurementId: "G-NLFW88QB93"
  };




  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  

  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }



  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }




  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }



  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
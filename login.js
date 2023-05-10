// login.addEventListener('click',(e)=>{
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
 
//        signInWithEmailAndPassword(auth, email, password)
//        .then((userCredential) => {
//          // Signed in 
//          const user = userCredential.user;
 
//          const dt = new Date();
//           update(ref(database, 'users/' + user.uid),{
//            last_login: dt,
//          })
 
//           alert('User loged in!');
//          // ...
//        })
//        .catch((error) => {
//          const errorCode = error.code;
//          const errorMessage = error.message;
 
//          alert(errorMessage);
//    });
 
//   });
document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("index1.html")
    }
    
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
        
    })
}
function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}
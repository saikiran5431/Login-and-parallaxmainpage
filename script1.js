//                 for parallax effect

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    text.style.marginTop = value*2.5+'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
});

//                 for scrolling time

document.querySelector('.about').style.display = 'none';


setTimeout(function() {
  document.querySelector('.about').style.display = 'block';

  const targetPosition = document.querySelector('.about').offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 3000;
  let startTime = null;

  function scrollToMain(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);
    window.scrollTo(0, startPosition + distance * percentage);

    if (progress < duration) {
      window.requestAnimationFrame(scrollToMain);
    }
  }

  window.requestAnimationFrame(scrollToMain);
}, 1000);


firebase.auth().onAuthStateChanged((user)=>{
  if(!user){
      location.replace("login.html");
  }else{
      // 
      console.log("th6hh");
  }
})


function logout(){
  firebase.auth().signOut()
}
/*=====toggle icon navbar=====*/
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=====scroll section active link=====*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   SpeechRecognitionResult.forEach (sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');


    if (top >= offset && top <offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add(active);
        });

    };

   });
   /*=====sticky navbar=====*/
   let header = document.querySelector('header');

   header.classList.toggle('sticky', window.screenY > 100);


   
};

 /*=====scroll reval=====*/

 ScrollReveal({ 
    
    reset: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=====typed js=====*/

const typed = new Typed('.multiple-text', {
    strings: ['IT Student.', 'Web Designer.', 'Cricketer.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

/*===================contact page script===============*/
function message() {

let fullname = document.getElementById('name');
let email = document.getElementById('email');
let num = document.getElementById('number');
let sub = document.getElementById('subject');
let txtarea = document.getElementById('area');



if(fullname.value ==='' || email.value ==='' || num.value ==='' || sub.value ==='' || txtarea.value ===''){
    Swal.fire({
        title: "ERROR!",
        text: "Your Message has not been Sent",
        icon: "error"
      });
}
else{
    Swal.fire({
        title: "Success!",
        text: "Your Message Sent Successfully!",
        icon: "success"
      });
}
}
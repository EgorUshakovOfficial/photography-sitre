const navBar = document.getElementById('nav-bar'); 

const hamburgerMenu = document.getElementById('hamburger-menu'); 

const close = document.getElementById('close'); 

const aboutSection = document.getElementById('about-section');

//  Hamburger Menu
hamburgerMenu.addEventListener('click', () =>{
	navBar.classList.add('show');

	close.style.display = 'block';
});

close.addEventListener('click', () =>{
	navBar.classList.remove('show');
	
	close.style.display = 'none';

	


})

// Scroll animation 
document.addEventListener('scroll', ()=>{
	const triggerBottom = (window.innerHeight / 2) ;

	const aboutSectionTop = aboutSection.getBoundingClientRect().top;

	if (triggerBottom > aboutSectionTop){
		aboutSection.classList.add('show-element');
	}


})



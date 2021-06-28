const navBar = document.getElementById('nav-bar'); 

const hamburgerMenu = document.getElementById('hamburger-menu'); 

const close = document.getElementById('close'); 

const aboutDescription = document.getElementById('about-section');

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
// document.addEventListener('scroll', ()=>{
// 	const triggerBottom = (window.innerHeight / 2) ;

// 	const aboutDescriptionTop = aboutDescription.getBoundingClientRect().top;

// 	if (triggerBottom > aboutDescriptionTop){
// 		document.getElementById('about-description').classList.add('show-text');
// 		document.getElementById('profile-picture').classList.add('show-picture');
// 	}


// })



// Navbar

let hamburger = document.getElementById('hamburger');

let mobileNav = document.getElementById('mobile-nav');

function openNav () {
	mobileNav.classList.toggle('open-menu');
}

// On Mouse Hover

let images = document.querySelectorAll('.images');

let imageArray = Array.from(images);

let imageSources = imageArray.map(function(image) {
    image.addEventListener('mouseover', () => {
		image.style.transform = 'translateY(-90%)';
	})

	image.addEventListener('mouseout', () => {
		image.style.transform = 'translateY(0%)';
	})
});



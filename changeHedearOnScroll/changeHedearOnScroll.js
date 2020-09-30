// DOM cache
let header = document.querySelector('header');
let logo = document.querySelector('.logo');

let onScrollHandler = function(event) {
	// console.log(`Scroll Y: ${window.scrollY}`);
	if(window.scrollY > headerHeight){
		header.classList.add("header-scrolled");
	}else{
		header.classList.remove("header-scrolled");
	}
}

// get header height in pixels:
let headerHeight = header.offsetHeight;
// console.log(`headerHeight: ${headerHeight}`);


window.addEventListener('scroll', onScrollHandler);
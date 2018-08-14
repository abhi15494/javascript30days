const sliderImages = document.querySelectorAll(".slide-in");

// This function is used to make sure that the checkslide or any callback function in scrll will wait 20 ms for execution 
// completely
function debounce(func){
    wait = 20;
    immediate = true;
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function(){
            timeout =  null;
            if( !immediate ) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout( timeout );
        timeout = setTimeout(later, wait);
        if( callNow ) func.apply(context, args);
    }
}

function checkSlide(e){
    sliderImages.forEach(sliderImage => {
		// Half way thorugh image
		const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2 ;
		// Bottom of image
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;
		if(isHalfShown && isNotScrolledPast) sliderImage.classList.add("active");
		else sliderImage.classList.remove("active");
		
    });
}

window.addEventListener("scroll", debounce(checkSlide));
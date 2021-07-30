var slideIndex = 0;
showSlides(slideIndex);

function Click(n) {
    showSlides(slideIndex += n);
    console.log(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    console.log(n)
}

function showSlides(n) {
    // get slides
    var slides = document.getElementsByClassName("myslides");

    //if statement check n
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";


}
$(document).ready(function(){
    var botao = $('.bnt-genero');// class do link que vai ser clicado "genero"
    var dropDown = $('.dropdown-menu');// class do sub menu que vai abri ao clicar 'dropdown-menu
    botao.on('click', function(event)
    {
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    
})
})
























let slides = document.querySelectorAll('.slideshow');
        let dots = document.querySelectorAll('.dot');
        let slideIndex = 1;
        let timeoutID;
        const showSlides = (n) => {
            let i;
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < slides.length; i++) {
                dots[i].setAttribute('class', 'dot');
            }
            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].setAttribute('class', 'dot ativo');
            clearTimeout(timeoutID);
            timeoutID = setTimeout(autoSlides, 4000);
        };
        const plusSlides = (n) => {
            showSlides(slideIndex += n);
        };
        const currentSlide = (n) => {
            showSlides(slideIndex = n);
        };
        function autoSlides() {
            let i;
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            for (i = 0; i < slides.length; i++) {
                dots[i].setAttribute('class', 'dot');
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].setAttribute('class', 'dot ativo');
            timeoutID = setTimeout(autoSlides, 4000);
        }
        autoSlides();

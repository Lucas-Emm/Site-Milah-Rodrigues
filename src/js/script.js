$(document).ready(function(){
    $('#mobile-btn').on('click',function(){
        
        $('#mobile_menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItem = $('.nav-item');

    $(window).on('scroll',function (){
        const header = $('header');
        // variavel que pega as posições//
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;
        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        }
        else{
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
        }

        //loopque percorre a seção
        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top -96;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom ){
                activeSectionIndex= i;
                console.log(activeSectionIndex);
                return false;
            }
        })

        navItem.removeClass('active');
        $(navItem[activeSectionIndex]).addClass('active');
    })

    ScrollReveal().reveal('#cta',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.testimonials-chef',{
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback',{
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.sobremim',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.sobre-image',{
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('#banner',{
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.mapv-title',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.mapv-subtitle',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.mapv-description',{
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.ebooks',{
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
    });
    $(function() {
        $("#carrousel"). jCarouselLite({
            btnPrev: '.prev', 
            btnNext: '.next',
            visible: 3
        })
    })
});

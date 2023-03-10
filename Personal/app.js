$('#btnDarkMode').on('click', function(){
    $('#body').toggleClass('dark-mode-body');
    $('.card').toggleClass('dark-mode-cardBorder');
    $('.navbar, .hero').toggleClass('dark-mode-nav');
    $('.hero').toggleClass('dark-mode-hero');
    $('.int').toggleClass('dark-int');
    $('.footer').toggleClass('dark-mode-footer');
    $('.card-title').toggleClass('dark-mode-cardTitle');
    $('.card-body').toggleClass('dark-mode-cardBody');
    $('#currentProjects').toggleClass('dark-mode-container');

    var cards = $('.card-header');
    for (let i = 0; i < cards.length; i++){
        cards[i].classList.toggle('dark-mode-cardHeader');
    }

    var cards = $('.card-body');
    for (let i = 0; i < cards.length; i++){
        cards[i].classList.toggle('dark-mode-card');
    }

    var cards = $('.card-footer');
    for (let i = 0; i < cards.length; i++){
        cards[i].classList.toggle('dark-mode-cardFooter');
    }
})

$('#btnContact').click(function(){
    Swal.fire({
        toast: true,
        position: 'top',
        showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `
          },
        hideClass: {
            popup: `
              animate__animated
              animate__fadeOutUp
              animate__faster
            `
        },
        showConfirmButton: false,
        showCloseButton: true,
        timerProgressBar: true,
        html: 
            `
            <h3 class="text-center">Alex Grimaldo</h3>
            <h5><i class="bi bi-envelope-fill"></i> : <a href="mailto: grimaldoj53@gmail.com" aria-label="Email Address">grimaldoj53@gmail.com</a></h5>
            `
    })
})

$('#btnMenu').click(function(){
    Swal.fire({
        toast: true,
        position: 'top',
        showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `
        },
        hideClass: {
        popup: `
            animate__animated
            animate__fadeOutUp
            animate__faster
        `
        },
        showConfirmButton: true,
        confirmButtonColor: '#58b953', 
        confirmButtonText: 'Continue',
        showCancelButton: true,
        cancelButtonColor: '#ed3c3c',
        cancelButtonText: 'Cancel',
        html: '<p class="text-center">For the best experience, view the Digital Menu on a large device.</p>'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "https://exceptionalbean.swollenhippo.com/alexMenu/Menu/menu.html"
            console.log('hello');
        }
    })
})

function myFunction(x) {
    x.classList.toggle("change");
}
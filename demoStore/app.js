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


/* Get all Products */
$.getJSON('https://fakestoreapi.com/products', function(result){
    $.each(result, function(i, items){
        let strHTML = `
            <div class="col-xl-3 col-lg-4 col-md-6 int gx-5">
                <h3>`+ items.title + `</h3>
                <img src="` + items.image + `" alt="Exceptional Bean Menu" class="img-fluid product">
                <div class="card-text">$` + items.price + `</div>
                <button class="btn btn-cards btn-md" type="button" aria-labelledby="Button to Digital Menu" id="btnMenu">Add to Cart</button>
            </div>
        `;
        $('#cardItems').append(strHTML);
    })
})

/* Get all Categories */
$.getJSON('https://fakestoreapi.com/products/categories', function(result){
    $.each(result, function(i, category){
        let strHTML = `
            <li><a class="dropdown-item" href="#">` + category + `</a></li>
        `;
        $('#liCategories').append(strHTML);
    })
    console.log(result);
})

/* Get all Users */
$.getJSON('https://fakestoreapi.com/users', function(result){
    //console.log(result);
})

/* Login Authorization */
/* $.getJSON('https://fakestoreapi.com/auth/login', function(result){
    
}) */
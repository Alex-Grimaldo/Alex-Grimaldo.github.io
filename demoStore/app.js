$('#btnDarkMode').on('click', function(){
    $('#body').toggleClass('dark-mode-body');
    $('.card').toggleClass('dark-mode-cardBorder');
    $('.navbar, .hero').toggleClass('dark-mode-nav');
    $('.hero').toggleClass('dark-mode-hero');
    $('.footer').toggleClass('dark-mode-footer');
    $('.card-title').toggleClass('dark-mode-cardTitle');
    $('.card-body').toggleClass('dark-mode-cardBody');
    $('#currentProjects').toggleClass('dark-mode-container');
    $('.card-header').toggleClass('dark-mode-cardHeader');
    $('.card-body').toggleClass('dark-mode-card');
    $('.card-footer').toggleClass('dark-mode-cardFooter')
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
        //console.log(items);
        let strHTML = `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-3 justify-content-center align-items-center d-flex">
                        <img src="` + items.image + `" class="img-fluid rounded-start" alt="img">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">` + items.title + `</h5>
                            <p class="card-text"><small class="text-muted">$` + items.price + `</small></p>
                        </div>
                    </div>
                </div>
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
})

/* Get all Users */
$.getJSON('https://fakestoreapi.com/users', function(result){
    console.log(result);
})

/* Login Authorization */

/* 
    Two users: Username and Password
    If successful, return token
    else return error
*/

/* $.getJSON('https://fakestoreapi.com/auth/login', function(result){
    
}) */
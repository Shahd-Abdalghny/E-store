
// counters


jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// scrolling
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}


// JSON
fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        const usersDataDiv = document.getElementById('sliding');
        data.forEach(user => {
            usersDataDiv.innerHTML += `
            <div class="slide swiper-slide">
            <img src="${user.image}" alt="" class="image">
                        <p>${user.description}</p>
                        <i class="fa-solid fa-quote-right quote-icon"></i>
                        <div class="details">
                            <span class="name">${user.name}</span>
                            <span class="job">${user.job}</span>
                            <span class="icons">
                            <a href="${user.linkedin}"> <i class="fa-brands fa-linkedin"></i></a>
                            <a href="${user.githup}"> <i class="fa-brands fa-github"></i></a>
                            </span>
                            </div>
                            `;
                            });
                            })
                                .catch(error => console.log('Error:', error));


/*=============== SWIPER JS ===============*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    //  spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

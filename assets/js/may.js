
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

const stars = document.querySelectorAll('#rating-stars .star');
const ratingInput = document.getElementById('rating');
let selectedRating = 0;

function updateStars(rating) {
    stars.forEach((s, i) => {
        if (i < rating) {
            s.classList.add('selected');
        } else {
            s.classList.remove('selected');
        }
    });
}

stars.forEach((star, idx) => {
    star.addEventListener('click', () => {
        selectedRating = idx + 1;
        ratingInput.value = selectedRating;
        updateStars(selectedRating);
    });

    star.addEventListener('mouseover', () => {
        updateStars(idx + 1);
    });

    star.addEventListener('mouseleave', () => {
        updateStars(selectedRating);
    });
});


// Restore affix effect for navbar
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 20) {
        $(".custom-navbar").addClass("affix");
    } else {
        $(".custom-navbar").removeClass("affix");
    }
});
// NAVBAR 
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-75px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});
// TYPED
var typed = new Typed('.typed', {
    strings: ["Bonjour à vous chers visiteurs", "Bienvenue et je vous remercie de visiter ma page, Je me présente je m'apelle Sylvain",
    "J'ai eu un parcours qui m'a fait découvrir plusieurs milieux professionnels et exercer plus d'une dizaine de métiers différents. J'ai finalement pris la décision d'arpenter la voie de développeur.",
    "Cela fait maintentant deux mois que je me suis lancé en autodidacte en commençant par les languages Front tels que CSS, HTML et Javascript afin d'avoir des bases pour être développeur plus facilement",
    "En plus de m'y voir dans l'avenir et dans une carrière, j'apprends à aimer à coder"],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true
  });
  // COMPTEUR LIVE
  let compteur = 0;

  $(window).scroll(function() {

    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
          let $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum : countTo
          },
          {
            duration: 10000,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
          });       
        });
        compteur = 1;
    }    
  
}); 
     
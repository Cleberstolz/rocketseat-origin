//abre e fecha o menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show');
    })
}

// quando clicar em um item do menu esconder o menu
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    })
}

//mudar o header da page quando der scroll
function changeHeaderWhenSroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    
    if(window.scrollY >= navHeight) {
        //scroll é maior que a altura do header
        header.classList.add('scroll');
    } else {
        // menor que a altura do header
        header.classList.remove('scroll');
    }

}

// Testimonials slide swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});

// ScrollReveal: mostrar elementos quando der scroll

const scrollReveal = ScrollReveal({
    
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  });
  
scrollReveal.reveal(
    `#home .img, #home .text
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    footer .brand, footer .social
    `,
    { interval: 100 }
)
      
// back to top para voltar para o top

function backToTop() {
    
    const backToTopButton = document.querySelector('.back-to-top')
    window.addEventListener('scroll', () => {
        if(window.scrollY >= 560) {
            backToTopButton.classList.add('show')
          } else {
              backToTopButton.classList.remove('show')
          }
      })

}
        
window.addEventListener('scroll', () => {

    changeHeaderWhenSroll()
    backToTop()
})
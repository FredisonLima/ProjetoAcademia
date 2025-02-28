let mains = document.querySelectorAll('h2');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    mains.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add
                ('active');
            });
        };
    });
};


/*******************************************************************************************/

// Seleciona o botão de rolar para o topo
const scrollToTopButton = document.getElementById("scrollToTop");

// Função para mostrar ou esconder o botão conforme o scroll
window.onscroll = function() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Mostrar o botão com efeito de fade-in quando o scroll passar de 100px
    if (scrollPosition > 100) {
        scrollToTopButton.style.opacity = "1";
        scrollToTopButton.style.transition = "transform 0.3s, opacity 0.3s"; // Transição suave
    } else {
        scrollToTopButton.style.opacity = "0";
    }

    // Efeito de rotação e aumento de tamanho se passar da metade da página
    if (scrollPosition > docHeight / 2) {
        scrollToTopButton.style.transform = "scale(1.5) rotate(360deg)"; // Aumenta e rota o botão
    } else {
        scrollToTopButton.style.transform = "scale(1) rotate(0deg)"; // Volta ao tamanho e rotação original
    }
};

// Função de rolagem suave para voltar ao topo
scrollToTopButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Efeito de rolagem suave
    });
});

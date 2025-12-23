// 1. LOADER (Com Barra de Progresso)
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const loaderBar = document.querySelector('.loader-bar');
    const loaderText = document.querySelector('.loader-text');
    
    let progress = 0;
    
    // Simula o carregamento (approx 1.5s a 2s)
    const interval = setInterval(() => {
        // Incrementa aleatoriamente para parecer natural
        progress += Math.floor(Math.random() * 5) + 1;
        
        if (progress > 100) {
            progress = 100;
        }
        
        // Atualiza a largura da barra e o texto
        loaderBar.style.width = `${progress}%`;
        loaderText.innerText = `${progress}%`;
        
        // Quando chegar em 100%, finaliza
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500); // Tempo do fade-out
            }, 500); // Espera um pouco no 100%
        }
    }, 50); // Atualiza a cada 50ms
});

// 2. NAVBAR SCROLL EFFECT
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) { // Diminui um pouco o gatilho do scroll
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 3. MENU MOBILE
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 4. ACCORDION (FAQ)
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
    });
});

// 5. SMOOTH SCROLL PARA LINKS INTERNOS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Fecha menu mobile se estiver aberto
        navLinks.classList.remove('active');

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Ajuste para o scroll não ficar escondido atrás do header flutuante
            const headerOffset = 100; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
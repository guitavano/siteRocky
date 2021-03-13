//JQuery para animação do header.
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('header').addClass('scroll');
    }
    else {
        $('header').removeClass('scroll');
    }
})

//JQuery para efeito deslizante no anchor
var page = $("html, body");
var animationDuration = 1000;
$(".anchor").click(function () {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, animationDuration);
    return false;
});

//Menu mobile responsivo

let show = true;

const menuMobile = document.querySelector(".menu-mobile");
const menuToggle = menuMobile.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial";
    menuMobile.classList.toggle("on", show);
    if (show == true) {
        document.getElementById('logo-web').style.display = "none";
    }
    else {
        document.getElementById('logo-web').style.display = "block";
    }
    show = !show;
})

function fecha() {
    document.body.style.overflow = show ? "hidden" : "initial";
    menuMobile.classList.toggle("on", show);
    show = !show;
    document.getElementById('logo-web').style.display = "block";
}

//Troca as imagens web/mobile se necessário

verificaMobile();

window.onresize = function (event) {
    verificaMobile();
};


function verificaMobile() {
    let imagem1Servicos = document.getElementById('imagem1-servicos').src;

    if (window.innerWidth < 880) {
        if (imagem1Servicos != "imagens/mobile/s3 ft1.png") {
            document.getElementById('imagem1-servicos').src = "imagens/mobile/s3 ft1.png";
            document.getElementById('imagem2-servicos').src = "imagens/mobile/s3 ft2.png";
            document.getElementById('imagem3-servicos').src = "imagens/mobile/s3 ft3.png";
            document.getElementById('imagem1-diferenciais').src = "imagens/mobile/s4 ft1.png";
            document.getElementById('imagem2-diferenciais').src = "imagens/mobile/s4 ft2.png";
            document.getElementById('imagem3-diferenciais').src = "imagens/mobile/s4 ft3.png";
        }
    }
    else {
        if (imagem1Servicos != "imagens/web/s3 ft1.png") {
            document.getElementById('imagem1-servicos').src = "imagens/web/s3 ft1.png";
            document.getElementById('imagem2-servicos').src = "imagens/web/s3 ft2.png";
            document.getElementById('imagem3-servicos').src = "imagens/web/s3 ft3.png";
            document.getElementById('imagem1-diferenciais').src = "imagens/web/s4 ft1.png";
            document.getElementById('imagem2-diferenciais').src = "imagens/web/s4 ft2.png";
            document.getElementById('imagem3-diferenciais').src = "imagens/web/s4 ft3.png";
        }
    }
}

//Abrir ver mais da parte Servicos


function abrirVerMais() {
    document.getElementById('ver-mais').style.display = 'flex';
    document.body.style.overflow = "hidden";
}

function fechar() {
    document.getElementById('ver-mais').style.display = 'none';
    document.body.style.overflow = "initial";
}
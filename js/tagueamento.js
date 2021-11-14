(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

var menuEntreContato = document.querySelector('ul.menu-lista .menu-lista-contato'),
    menuDownloadPDF = document.querySelector('ul.menu-lista .menu-lista-download');

menuEntreContato && menuEntreContato.addEventListener('click', function (event) {
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
});

menuDownloadPDF && menuDownloadPDF.addEventListener('click', function (event) {
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
});

location.pathname.match(/\/analise.html/) && (function () {
    var cardsMontadoras = document.querySelectorAll('div.cards-montadoras .card-montadoras');
    Array.prototype.slice.call(cardsMontadoras || []).map(function (card) {
        card.addEventListener('click', function (event) {
            ga('send', 'event', 'analise', 'ver_mais', this.dataset.name);
        });
    });
})();

location.pathname.match(/\/sobre.html/) && (function () {
    var inputs = document.querySelectorAll('form.contato input');
    Array.prototype.slice.call(inputs || []).map(function (input) {
        input.addEventListener('change', function (event) {
            ga('send', 'event', 'contato', this.id, 'preencheu');
        });
    });

    var bodySetAttribute = document.body.__proto__.setAttribute;
    document.body.setAttribute = function () {
        var isLightboxOpen = this.className.indexOf('lightbox-open');
        bodySetAttribute.apply(this, arguments);
        if (
            isLightboxOpen == -1 &&
            arguments.length == 2 &&
            arguments[0] == 'class' &&
            arguments[1].indexOf('lightbox-open') != -1
        ) {
            var lightboxTitle = document.querySelector('.lightbox .lightbox-title');
            if (lightboxTitle && lightboxTitle.textContent == 'Contato enviado') {
                ga('send', 'event', 'contato', 'enviado', 'enviado');
            }
        }
    }
})();
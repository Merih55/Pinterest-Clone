
// Kaydet Butonuna tıkladığında resimin indrilmesi için
document.addEventListener('DOMContentLoaded', function() {
    const indirDugmeleri = document.querySelectorAll('.kaydet');
    indirDugmeleri.forEach(function(dugme) {
        dugme.addEventListener('click', function() {
            const resimUrl = this.getAttribute('data-url');
            const dosyaAdi = this.getAttribute('data-filename');
            indir(resimUrl, dosyaAdi);
        });
    });

    function indir(url, dosyaAdi) {
        const baglanti = document.createElement('a');
        baglanti.href = url;
        baglanti.download = dosyaAdi + '.jpg';
        baglanti.style.display = 'none';
        document.body.appendChild(baglanti);
        baglanti.click();
        document.body.removeChild(baglanti);
    }
});
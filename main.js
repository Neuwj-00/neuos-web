// Sadece basit bir dropdown aç-kapa mantığı
document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('menuToggleBtn');
    var mainMenu = document.getElementById('mainMenu');

    // Butona tıklandığında menüyü aç/kapat
    menuBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Tıklamanın body'ye yayılmasını engelle
        mainMenu.classList.toggle('show');
    });

    // Sayfanın herhangi bir yerine tıklandığında menüyü kapat
    document.addEventListener('click', function(event) {
        if (!mainMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            mainMenu.classList.remove('show');
        }
    });
});

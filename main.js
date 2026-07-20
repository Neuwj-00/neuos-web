document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('menuToggleBtn');
    var mainMenu = document.getElementById('mainMenu');

    menuBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        mainMenu.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!mainMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            mainMenu.classList.remove('show');
        }
    });
});

const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');

      line1.classList.toggle('rotate-45');
      line1.classList.toggle('translate-y-[0.25rem]');

      line2.classList.toggle('opacity-0');

      line3.classList.toggle('-rotate-45');
      line3.classList.toggle('-translate-y-[0.25rem]');
    });

    document.getElementById('media-button').addEventListener('click', function () {
      const dropdown = document.getElementById('media-dropdown');
      dropdown.classList.toggle('hidden');
    });
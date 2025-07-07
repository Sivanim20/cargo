const img=document.getElementById("myimg");
                img.addEventListener("click",
                function()
                {
                    img.classList.toggle("rotated");
                });
const img2=document.getElementById("myimg2");
    img2.addEventListener("click",
     function()
     {
        img2.classList.toggle("rotated");
      });
            const img3=document.getElementById("myimg3");
                img3.addEventListener("click",
                    function()
                    {
                        img3.classList.toggle("rotated");
                    });
            const img4=document.getElementById("myimg4");
                img4.addEventListener("click",
                    function()
                    {
                        img4.classList.toggle("rotated");
                    });
            const img5=document.getElementById("myimg5");
                img5.addEventListener("click",
                    function()
                    {
                        img5.classList.toggle("rotated");
                    });
const img6=document.getElementById("myimg6");
  img6.addEventListener("click",
  function()
  {
    img6.classList.toggle("rotated");
  });
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
  // trackking form
  function showTab(tabId1, clickedButton) {
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));

      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('text-blue-900', 'border-blue-900');
        btn.classList.add('text-blue-900', 'border-transparent');
      });
      document.getElementById(tabId).classList.remove('hidden');
      clickedButton.classList.add('text-blue-900', 'border-blue-900');
      clickedButton.classList.remove('text-blue-900', 'border-transparent');
  }

  function showTabMobile(tabId, clickedButton) {
  document.querySelectorAll('.tab-content-mobile').forEach(tab => tab.classList.add('hidden'));

  document.querySelectorAll('.tab-btn-mobile').forEach(btn => {
    btn.classList.remove('text-blue-900', 'border-blue-900');
    btn.classList.add('text-blue-900', 'border-transparent');
  });

  document.getElementById(tabId).classList.remove('hidden');
  clickedButton.classList.add('text-blue-900', 'border-blue-900');
  clickedButton.classList.remove('border-transparent');
}

// newsticker
const newsItems = [
  '<span class="text-[#1949b8] font-bold mr-2 ml-2">11 JUN 2025</span><a href="#"> | NBF (New Bunker Factor*) update </a>',
  '<span class="text-[#1949b8] font-bold mr-2 ml-2">11 JUN 2025</span><a href="#"> | Green Fuel Surcharge (GFS) update</a>',
  '<span class="text-[#1949b8] font-bold mr-2 ml-2">15 JUN 2025</span><a href="#"> | Israel war situation update</a>',
  '<span class="text-[#1949b8] font-bold mr-2 ml-2">04 JUN 2025</span><a href="#"> | New Emission Fee (NEF) charge update - July 1st, 2025</a>'
];

let currentIndex = 0;

const newsBox = document.getElementById("news-box");
const newsContent = document.getElementById("news-content");

function showNextNews() {
  newsBox.style.transform = "translateY(-24px)";
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % newsItems.length;
    newsContent.innerHTML = newsItems[currentIndex];
    newsBox.style.transition = "none";
    newsBox.style.transform = "translateY(24px)"; 
    void newsBox.offsetWidth;
    newsBox.style.transition = "transform 0.5s ease-in-out";
    newsBox.style.transform = "translateY(0)";
  }, 500);
}
setInterval(showNextNews, 3000);

// card scroll
document.addEventListener("DOMContentLoaded", function () {
      const carousel = document.querySelector(".carousel");
      const arrowBtns = document.querySelectorAll(".fa-angle-left, .fa-angle-right");
      const firstCard = carousel.querySelector(".card");
      const firstCardWidth = firstCard.offsetWidth;
      let isDragging = false, startX, startScrollLeft;

      const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("cursor-grabbing");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
      };

      const dragging = (e) => {
        if (!isDragging) return;
        const newScrollLeft = startScrollLeft - (e.pageX - startX);
        if (newScrollLeft <= 0 || newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
          isDragging = false;
          return;
        }
        carousel.scrollLeft = newScrollLeft;
      };

      const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("cursor-grabbing");
      };

      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);
      carousel.addEventListener("mouseleave", dragStop);

      arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
      });
    });

document.addEventListener("DOMContentLoaded", function () {
      const carousel1 = document.querySelector(".carousel1");
      const arrowBtns1 = document.querySelectorAll(".fa-angle-left, .fa-angle-right");
      const firstCard1 = carousel1.querySelector(".card1");
      const firstCardWidth1 = firstCard1.offsetWidth;
      let isDragging1 = false, startX, startScrollLeft;

      const dragStart = (e) => {
        isDragging1 = true;
        carousel1.classList.add("cursor-grabbing");
        startX = e.pageX;
        startScrollLeft = carousel1.scrollLeft;
      };

      const dragging = (e) => {
        if (!isDragging1) return;
        const newScrollLeft = startScrollLeft - (e.pageX - startX);
        if (newScrollLeft <= 0 || newScrollLeft >= carousel1.scrollWidth - carousel1.offsetWidth) {
          isDragging1 = false;
          return;
        }
        carousel1.scrollLeft = newScrollLeft;
      };

      const dragStop = () => {
        isDragging1 = false;
        carousel1.classList.remove("cursor-grabbing");
      };

      carousel1.addEventListener("mousedown", dragStart);
      carousel1.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);
      carousel1.addEventListener("mouseleave", dragStop);

      arrowBtns1.forEach((btn) => {
        btn.addEventListener("click", () => {
          carousel1.scrollLeft += btn.id === "left" ? -firstCardWidth1 : firstCardWidth1;
        });
      });
    });
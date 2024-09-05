var swiper = new Swiper(".mySwiper", {
      loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
       breakpoints: {
         380: {
               slidesPerView: 1,
         },
         600: {
          slidesPerView: 2,
         },
         900: {
          slidesPerView: 3,
         },
       },
    });
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
    simulateTouch: false,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    autoplay: {
      delay: 3000,
    },

    speed: 1500
  });
})
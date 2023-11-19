document.addEventListener('DOMContentLoaded', function () {
  const mySwiper = new mySwiper('.swiper-container', {
    // 슬라이드 옵션 및 설정
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 각 이미지에 대한 페이지 이동 처리
  document.querySelectorAll('.slide-box').forEach(function (box) {
    box.addEventListener('click', function () {
      var slideIndex = parseInt(box.dataset.slideIndex);
      // 각 이미지에 맞는 페이지 경로 설정
      var pagePath = '/page' + (slideIndex + 1);
      window.location.href = pagePath;
    });
  });
});
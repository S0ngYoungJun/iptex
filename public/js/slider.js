document.addEventListener('DOMContentLoaded', function () {
  const mySwiper = new Swiper('.swiper-container', {
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
  mySwiper.on('click', function () {
    // 슬라이드 클릭 시 연결된 페이지로 이동
    let currentSlideIndex = mySwiper.activeIndex;
    let slideLink = document.querySelectorAll('.slide-link')[currentSlideIndex];
    if (slideLink) {
      window.location.href = slideLink.href;
    }})

  let thumbnails = document.querySelectorAll('.thumbnail'); 
    thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
    // 클릭한 thumbnail과 연결된 슬라이드를 표시
    mySwiper.slideTo(parseInt(thumbnail.dataset.thumbnailIndex));
  });
  });
})



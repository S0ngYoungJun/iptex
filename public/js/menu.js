document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  
  const menuItems = document.querySelectorAll('.menu-item');
  const mainPage = document.querySelector('.main-page');
  // 햄버거 메뉴 관련 스크립트
  mainPage.addEventListener('mouseenter', function () {
    menuItems.forEach(item => item.style.display = 'block');
  });

  mainPage.addEventListener('mouseleave', function () {
    menuItems.forEach(item => item.style.display = 'none');
  });

  // 메인페이지 위에 마우스를 올리면 햄버거 메뉴가 아래로 나오도록 설정
  

  mainPage.addEventListener('mouseenter', function () {
    hamburgerMenu.style.bottom = '0'; // 햄버거 메뉴를 아래로 나타나게 함
  });

  mainPage.addEventListener('mouseleave', function () {
    hamburgerMenu.style.bottom = '-50px'; // 햄버거 메뉴를 다시 숨김
  });
});
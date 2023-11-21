document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.getElementById('login');
  const signupButton = document.getElementById('signup');

  // 로그인 버튼 클릭 시 이벤트
  loginButton.addEventListener('click', function () {
    window.location.href = '/login'; // 로그인 페이지로 이동
  });

  // 회원가입 버튼 클릭 시 이벤트
  signupButton.addEventListener('click', function () {
    window.location.href = '/signup'; // 회원가입 페이지로 이동
  });
});
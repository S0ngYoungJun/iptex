document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // 직접 각 필드의 값을 수집
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // 수집한 값을 객체로 만들어서 서버로 전송
    const userData = {
      id,
      password,
      dob,
      gender,
      email,
      phone,
    };

    // 서버로 데이터 전송
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(userData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // 회원가입 성공 시 처리
          alert('회원가입이 성공적으로 완료되었습니다.');
          // 원하는 페이지로 이동
          window.location.href = '/login';
        } else {
          // 회원가입 실패 시 처리
          alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
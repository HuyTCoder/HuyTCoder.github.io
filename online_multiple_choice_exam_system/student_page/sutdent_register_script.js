document.addEventListener('DOMContentLoaded', function() {
    var registerForm = document.getElementById('registerForm');
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var confirmPassword = document.getElementById('confirmPassword').value;
  
      if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
      }
  
      if (password !== confirmPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp.');
        return;
      }
  
      // Xử lý đăng ký ở đây
      // Ví dụ: gửi dữ liệu đến máy chủ để đăng ký tài khoản mới
      // Sau khi xử lý thành công, có thể chuyển hướng người dùng đến trang đăng nhập hoặc thực hiện hành động khác
      // Ví dụ: window.location.href = 'student_login.html';
    });
  });
  
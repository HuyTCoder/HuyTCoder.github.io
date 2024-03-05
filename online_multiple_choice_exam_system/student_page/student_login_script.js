document.addEventListener('DOMContentLoaded', function() {
  // Lấy form đăng nhập
  var loginForm = document.getElementById('loginForm');

  // Lắng nghe sự kiện submit form đăng nhập
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Lấy giá trị từ các trường nhập liệu
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kiểm tra tính hợp lệ của thông tin đăng nhập
    if (username.trim() === '' || password.trim() === '') {
      alert('Vui lòng nhập tên đăng nhập và mật khẩu.');
      return;
    }

    // Xử lý đăng nhập ở đây (có thể gửi dữ liệu đến máy chủ, bằng cách sử dụng AJAX hoặc fetch)
    // Ví dụ: fetch('url_dang_nhap', { method: 'POST', body: JSON.stringify({ username: username, password: password }) })
    //   .then(function(response) {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error('Có lỗi xảy ra khi đăng nhập.');
    //   })
    //   .then(function(data) {
    //     // Xử lý kết quả đăng nhập ở đây
    //   })
    //   .catch(function(error) {
    //     alert(error.message);
    //   });
  });

  // Lấy form đăng ký
  var registerForm = document.getElementById('registerForm');

  // Lắng nghe sự kiện submit form đăng ký
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Lấy giá trị từ các trường nhập liệu
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Kiểm tra tính hợp lệ của thông tin đăng ký
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }

    // Xử lý đăng ký ở đây (có thể gửi dữ liệu đến máy chủ, bằng cách sử dụng AJAX hoặc fetch)
    // Ví dụ: fetch('url_dang_ky', { method: 'POST', body: JSON.stringify({ name: name, email: email, password: password }) })
    //   .then(function(response) {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error('Có lỗi xảy ra khi đăng ký.');
    //   })
    //   .then(function(data) {
    //     // Xử lý kết quả đăng ký ở đây
    //   })
    //   .catch(function(error) {
    //     alert(error.message);
    //   });
  });
});

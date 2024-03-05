// Hàm để tải nội dung từ các trang và hiển thị trong phần content
function loadContent(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => document.getElementById('content').innerHTML = html)
    .catch(error => console.error('Error loading content:', error));
}

// Gắn sự kiện click cho các nút điều hướng chính
document.getElementById('editExam').addEventListener('click', function(event) {
  event.preventDefault();
  loadContent('edit_exam.html');
});

document.getElementById('viewResults').addEventListener('click', function(event) {
  event.preventDefault();
  loadContent('view_results.html');
});

document.getElementById('statistics').addEventListener('click', function(event) {
  event.preventDefault();
  loadContent('statistics.html');
});

// Hàm để thực hiện đăng xuất khi người dùng click vào nút Sign out
document.querySelector('.sign-out a').addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = event.target.href;
});

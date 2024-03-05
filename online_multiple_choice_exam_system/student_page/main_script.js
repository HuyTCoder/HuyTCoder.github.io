document.addEventListener("DOMContentLoaded", function() {
    // Code xử lý tại đây
    // ...
  
    // Điều hướng tới trang Bài Thi (exam.html) khi người dùng bấm vào một kỳ thi
    document.getElementById("examsList").addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        window.location.href = "exam.html"; // Đường dẫn tới trang Bài Thi
      }
    });
  
    // Điều hướng tới trang Kết Quả (result.html) khi người dùng bấm vào nút xem kết quả
    document.getElementById("viewResultBtn").addEventListener("click", function() {
      window.location.href = "result.html"; // Đường dẫn tới trang Kết Quả
    });
  });
  
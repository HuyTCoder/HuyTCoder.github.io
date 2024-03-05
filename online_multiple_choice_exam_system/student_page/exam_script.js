// Lấy thời gian bắt đầu
const startTime = Date.now();

// Đặt thời gian tối đa cho bài thi (ví dụ: 30 phút)
const maxTime = 30 * 60 * 1000; // Đổi miligiây thành phút

// Cập nhật thời gian còn lại sau mỗi giây
setInterval(updateTime, 1000);

function updateTime() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  const remainingTime = maxTime - elapsedTime;

  // Chuyển miligiây thành phút và giây
  const minutes = Math.floor(remainingTime / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Hiển thị thời gian còn lại trên trang HTML
  document.getElementById("time").textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // Kiểm tra nếu hết thời gian
  if (remainingTime <= 0) {
    alert("Hết giờ!");
    // Thực hiện các hành động khi hết giờ (ví dụ: tự động nộp bài)
    // ...
  }
}

// Xử lý sự kiện khi nộp bài
document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn gửi form mặc định

  // Thực hiện các xử lý khi nộp bài (ví dụ: gửi dữ liệu lên máy chủ)
  // ...

  // Hiển thị thông báo khi nộp bài thành công hoặc thất bại
  alert("Bài của bạn đã được nộp!");
});

document.addEventListener("DOMContentLoaded", function() {
    // Dữ liệu mẫu (cần thay thế bằng dữ liệu thực tế)
    const correctAnswers = 7;
    const totalQuestions = 10;
    const score = 70;
    const answersDetail = [
      { question: "Câu hỏi 1", userAnswer: "A", correctAnswer: "B" },
      { question: "Câu hỏi 2", userAnswer: "C", correctAnswer: "C" },
      // Thêm các dữ liệu cho các câu hỏi khác ở đây
    ];
  
    // Hiển thị số câu trả lời đúng và tổng số câu hỏi
    document.getElementById("correctAnswers").textContent = correctAnswers;
    document.getElementById("totalQuestions").textContent = totalQuestions;
  
    // Hiển thị điểm số
    document.getElementById("score").textContent = score;
  
    // Hiển thị chi tiết câu trả lời
    const answersContainer = document.getElementById("answers");
    answersDetail.forEach(function(detail) {
      const answerItem = document.createElement("div");
      answerItem.innerHTML = `<p><strong>${detail.question}:</strong> Câu của bạn: ${detail.userAnswer}, Đáp án đúng: ${detail.correctAnswer}</p>`;
      answersContainer.appendChild(answerItem);
    });
  
    // Xử lý sự kiện khi người dùng bấm nút xem lại câu trả lời
    document.getElementById("reviewBtn").addEventListener("click", function() {
      // Thực hiện các hành động khi bấm nút xem lại câu trả lời
      // Ví dụ: hiển thị lại câu hỏi và câu trả lời của người dùng
    });
  });
  
document.getElementById("examForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Xử lý dữ liệu form ở đây
  let examName = document.getElementById("examName").value;
  let examDescription = document.getElementById("examDescription").value;
  let examType = document.getElementById("examType").value;
  let questionListContainer = document.getElementById("questionListContainer");
  let questionItems = questionListContainer.getElementsByClassName("question-item");

  // Kiểm tra nếu loại kỳ thi là "Thời gian cụ thể"
  if (examType === "specificTime") {
    let examTime = document.getElementById("examTime").value;
    // Xử lý thời gian thi ở đây
    console.log("Thời gian thi:", examTime, "phút");
  }

  // Xử lý danh sách câu hỏi ở đây
  let questions = [];
  for (let i = 0; i < questionItems.length; i++) {
    let questionText = questionItems[i].querySelector('.question-text').textContent;
    let options = questionItems[i].querySelectorAll('.option');
    let correctAnswerIndex = questionItems[i].querySelector('.correct-answer').selectedIndex;
    let correctAnswer = String.fromCharCode(65 + correctAnswerIndex); // Chuyển đổi thành ký tự từ A đến D
    let optionsText = [];
    options.forEach(function(option) {
      optionsText.push(option.textContent);
    });
    questions.push({
      question: questionText,
      options: optionsText,
      correctAnswer: correctAnswer
    });
  }
  console.log("Danh sách câu hỏi:", questions);
});

// Thêm sự kiện để hiển thị hoặc ẩn phần nhập thời gian thi khi thay đổi loại kỳ thi
document.getElementById("examType").addEventListener("change", function() {
  let specificTimeContainer = document.getElementById("specificTimeContainer");
  if (this.value === "specificTime") {
    specificTimeContainer.style.display = "block";
  } else {
    specificTimeContainer.style.display = "none";
  }
});

// Thêm sự kiện để thêm câu hỏi vào danh sách
document.getElementById("addQuestionButton").addEventListener("click", function() {
  let questionText = document.getElementById("question").value.trim();
  let option1 = document.getElementById("option1").value.trim();
  let option2 = document.getElementById("option2").value.trim();
  let option3 = document.getElementById("option3").value.trim();
  let option4 = document.getElementById("option4").value.trim();
  let correctAnswerIndex = document.getElementById("correctAnswer").selectedIndex;

  // Kiểm tra liệu đã điền đầy đủ thông tin của câu hỏi và các câu trả lời chưa
  if (questionText === "" || option1 === "" || option2 === "" || correctAnswerIndex === -1) {
    alert("Vui lòng điền đầy đủ thông tin của câu hỏi và các câu trả lời trước khi thêm.");
    return;
  }

  // Tạo HTML cho câu hỏi mới
  let questionHTML = `
    <div class="question-item">
      <p class="question-text"><strong>Câu hỏi:</strong> ${questionText}</p>
      <ul class="options">
        <li class="option">${option1}</li>
        <li class="option">${option2}</li>
        <li class="option">${option3 !== "" ? option3 : ''}</li>
        <li class="option">${option4 !== "" ? option4 : ''}</li>
      </ul>
      <p class="correct-answer"><strong>Đáp án đúng:</strong> ${String.fromCharCode(65 + correctAnswerIndex)}</p>
      <div class="actions">
        <button class="edit-button">Sửa</button>
        <button class="delete-button">Xoá</button>
      </div>
    </div>
  `;

  // Thêm câu hỏi vào danh sách
  let questionListContainer = document.getElementById("questionListContainer");
  questionListContainer.insertAdjacentHTML('beforeend', questionHTML);

  // Xóa nội dung của các trường input sau khi thêm câu hỏi thành công
  document.getElementById("question").value = "";
  document.getElementById("option1").value = "";
  document.getElementById("option2").value = "";
  document.getElementById("option3").value = "";
  document.getElementById("option4").value = "";
  document.getElementById("correctAnswer").selectedIndex = 0; // Đặt giá trị mặc định cho đáp án đúng là lựa chọn 1
});

// Thêm sự kiện để sửa hoặc xoá câu hỏi
document.getElementById("questionListContainer").addEventListener("click", function(event) {
  if (event.target.classList.contains("edit-button")) {
    let questionItem = event.target.closest(".question-item");
    let questionText = questionItem.querySelector('.question-text').textContent.replace("Câu hỏi:", "").trim();
    let options = questionItem.querySelectorAll('.option');
    let correctAnswer = questionItem.querySelector('.correct-answer').textContent.replace("Đáp án đúng:", "").trim();
    let correctAnswerIndex = correctAnswer.charCodeAt(0) - 65; // Chuyển đổi lại thành số từ 0 đến 3
    document.getElementById("question").value = questionText;
    document.getElementById("option1").value = options[0].textContent;
    document.getElementById("option2").value = options[1].textContent;
    document.getElementById("option3").value = options[2] ? options[2].textContent : "";
    document.getElementById("option4").value = options[3] ? options[3].textContent : "";
    document.getElementById("correctAnswer").selectedIndex = correctAnswerIndex;
    questionItem.remove();
  } else if (event.target.classList.contains("delete-button")) {
    event.target.closest(".question-item").remove();
  }
});
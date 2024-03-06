// editExam_script.js

// Lắng nghe sự kiện khi tài liệu được tải hoàn toàn
document.addEventListener("DOMContentLoaded", function() {
  // Lấy phần tử button thêm câu hỏi
  const addQuestionButton = document.getElementById("addQuestionButton");
  // Lấy phần tử container để chứa danh sách câu hỏi
  const questionListContainer = document.getElementById("questionListContainer");

  // Lắng nghe sự kiện khi người dùng bấm nút "Thêm câu hỏi"
  addQuestionButton.addEventListener("click", function() {
    // Tạo phần tử div mới để chứa câu hỏi
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("form-group");

    // Tạo phần tử label cho câu hỏi
    const questionLabel = document.createElement("label");
    questionLabel.textContent = "Câu hỏi:";
    questionDiv.appendChild(questionLabel);

    // Tạo phần tử input cho câu hỏi
    const questionInput = document.createElement("input");
    questionInput.type = "text";
    questionInput.name = "question";
    questionInput.required = true;
    questionDiv.appendChild(questionInput);

    // Thêm câu hỏi vào container
    questionListContainer.appendChild(questionDiv);
  });
});

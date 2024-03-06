// Khai báo một mảng để lưu trữ các câu trả lời của người dùng
let userAnswers = [];

document.getElementById("personal-info-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ẩn form thông tin cá nhân và hiển thị khảo sát
    document.getElementById("personal-info-form").classList.add("hidden");
    document.getElementById("survey").classList.remove("hidden");

    // Hiển thị câu hỏi
    let surveyContainer = document.getElementById("survey");
    for (let i = 0; i < questions.length; i++) {
        let question = document.createElement("div");
        question.innerHTML = "<p>Câu hỏi " + (i + 1) + ": " + questions[i].question + "</p>";

        // Nếu câu hỏi có phương án trả lời, thêm vào
        if (questions[i].choices) {
            for (let j = 0; j < questions[i].choices.length; j++) {
                if (questions[i].multiple) {
                    question.innerHTML += "<input type='checkbox' name='question" + (i + 1) + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j] + "<br>";
                } else {
                    question.innerHTML += "<input type='radio' name='question" + (i + 1) + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j] + "<br>";
                }
            }
        }

        surveyContainer.appendChild(question);
    }
});

// Mảng chứa các câu hỏi và phương án trả lời
let questions = [
    // Câu hỏi lựa chọn đúng/sai
    {
        question: "Có phải làm việc nhóm giúp cải thiện kỹ năng giao tiếp không?",
        choices: ['Đúng', 'Sai']
    },
    {
        question: "Đối với nhiều sinh viên, việc tham gia vào các hoạt động ngoại khóa có ý nghĩa gì?",
        choices: ['Đúng', 'Sai']
    },
    {
        question: "Phương pháp học tập tự học có thể hiệu quả như phương pháp học theo nhóm không?",
        choices: ['Đúng', 'Sai']
    },
    {
        question: "Sử dụng công nghệ thông tin trong giáo dục có thể tăng cường hiệu suất học tập của sinh viên?",
        choices: ['Đúng', 'Sai']
    },
    {
        question: "Trong việc lập kế hoạch học tập, việc thiết lập mục tiêu rõ ràng có thể giúp sinh viên tiến xa hơn không?",
        choices: ['Đúng', 'Sai']
    },
    {
        question: "Có phải việc tham gia vào các hoạt động xã hội và tình nguyện có thể giúp sinh viên phát triển kỹ năng lãnh đạo không?",
        choices: ['Đúng', 'Sai']
    },
    {
        question: "Kỹ năng quản lý thời gian đóng vai trò quan trọng trong việc thành công của sinh viên?",
        choices: ['Đúng', 'Sai']
    },
    {
        question: "Có phải việc duy trì sức khỏe tốt có ảnh hưởng tích cực đến hiệu suất học tập của sinh viên không?",
        choices: ['Đúng', 'Sai']
    },
    {
        question: "Việc thường xuyên tham gia vào các cuộc trò chuyện với giáo viên có thể giúp sinh viên hiểu bài học tốt hơn không?",
        choices: ['Đúng', 'Sai']
    },
    {
        question: "Có phải việc thường xuyên ôn tập làm cho thông tin dễ dàng hơn để ghi nhớ không?",
        choices: ['Đúng', 'Sai']
    },
    // Câu hỏi lựa chọn 1 trong 4 đáp án
    {
        question: "Nơi nào được coi là môi trường học tập hiệu quả nhất?",
        choices: ['Thư viện', 'Phòng học', 'Quán cà phê', 'Phòng ngủ']
    },
        
    {
        question: "Kỹ năng giao tiếp quan trọng nhất trong học tập là?",
        choices: ['Nghe', 'Nói', 'Đọc', 'Viết']
    },
        
    {
        question: "Công nghệ thông tin được sử dụng hiệu quả nhất trong giáo dục để?",
        choices: ['Tăng cường tương tác giữa sinh viên và giáo viên', 'Giảm chi phí giáo dục', 'Tạo ra các tài liệu học tập phong phú', 'Cả 3 điều trên']
    },
        
    {
        question: "Khi cảm thấy căng thẳng và áp lực học tập, sinh viên nên làm gì?",
        choices: ['Tiếp tục học', 'Nghỉ ngơi và thư giãn', 'Tăng cường thời gian học', 'Sử dụng chất kích thích để thức đêm']
    },
        
    {
        question: "Phương pháp học tập hiệu quả nhất là?",
        choices: ['Học thuộc lòng', 'Học bằng hiểu biết', 'Học qua ví dụ', 'Học qua trò chơi']
    },
        
    {
        question: "Khi gặp khó khăn trong việc hiểu một bài học, bạn thường làm gì?",
        choices: ['Tìm kiếm sự giúp đỡ từ giáo viên hoặc bạn bè', 'Tự tìm hiểu trên internet hoặc sách vở', 'Bỏ qua vấn đề và chuyển sang một bài khác', 'Nghỉ ngơi và thư giãn']
    },
    
    {
        question: "Việc sử dụng phương tiện hỗ trợ như máy tính và internet trong quá trình học có ảnh hưởng gì đến hiệu quả học tập của bạn?",
        choices: ['Giúp tăng cường kiến thức', 'Gây phân tâm', 'Không có ảnh hưởng gì', 'Tất cả các phương án trên']
    },
        
    {
        question: "Khi cảm thấy mất tập trung, bạn sẽ làm gì để cải thiện tình trạng này?",
        choices: ['Thực hiện các bài tập thể dục nhẹ nhàng', 'Thực hành thiền', 'Tổ chức không gian làm việc sạch sẽ và gọn gàng', 'Tất cả các phương án trên']
    },
    
    {
        question: "Trong quá trình học, việc thực hiện các bài tập thực hành và áp dụng kiến thức vào thực tế có ảnh hưởng gì đến việc hiểu bài của bạn?",
        choices: ['Củng cố kiến thức', 'Tăng khả năng hiểu bài', 'Phát triển kỹ năng giải quyết vấn đề', 'Tất cả các phương án trên']
    },
    
    {
        question: "Bạn nghĩ gì về việc thúc đẩy kỹ năng tự học ở sinh viên?",
        choices: ['Rất quan trọng', 'Không quan trọng', 'Tùy thuộc vào mỗi người', 'Không biết']
    },
    // Câu hỏi nhiều đáp án
    {
        question: "Trong quá trình học, bạn thường học ở đâu?",
        choices: ['a. Thư viện', 'b. Phòng học', 'c. Quán cà phê', 'd. Phòng ngủ', 'e. Đi bộ'],
        multiSelect: true
    },
    {
        question: "Bạn thường dành bao nhiêu thời gian cho việc học tập mỗi ngày?",
        choices: ['a. Dưới 1 tiếng', 'b. 1-2 tiếng', 'c. 2-3 tiếng', 'd. 3-4 tiếng', 'e. Trên 4 tiếng'],
        multiSelect: true
    },
    {
        question: "Môn học nào bạn cảm thấy hứng thú nhất?",
        choices: ['a. Toán học', 'b. Khoa học tự nhiên', 'c. Khoa học xã hội', 'd. Ngôn ngữ', 'e. Nghệ thuật'],
        multiSelect: true
    },
    {
        question: "Bạn thường tham gia các hoạt động ngoại khóa nào?",
        choices: ['a. Câu lạc bộ học thuật', 'b. Câu lạc bộ thể thao', 'c. Câu lạc bộ nghệ thuật', 'd. Hoạt động tình nguyện', 'e. Không tham gia hoạt động nào'],
        multiSelect: true
    },
    {
        question: "Bạn hài lòng với chất lượng giảng dạy của nhà trường như thế nào?",
        choices: ['a. Rất hài lòng', 'b. Hài lòng', 'c. Bình thường', 'd. Không hài lòng', 'e. Rất không hài lòng'],
        multiSelect: true
    },
    {
        question: "Bạn đánh giá cơ sở vật chất của nhà trường như thế nào?",
        choices: ['a. Hiện đại, đầy đủ', 'b. Đủ đáp ứng nhu cầu học tập', 'c. Cần cải thiện', 'd. Kém chất lượng', 'e. Rất tệ'],
        multiSelect: true
    },
    {
        question: "Bạn thường gặp khó khăn gì trong quá trình học tập?",
        choices: ['a. Áp lực học tập', 'b. Khó khăn tài chính', 'c. Khó khăn trong việc tiếp thu kiến thức', 'd. Khó khăn trong giao tiếp', 'e. Khó khăn khác (ghi rõ)'],
        multiSelect: true
    },
    {
        question: "Bạn mong muốn nhà trường cải thiện điều gì?",
        choices: ['a. Chất lượng giảng dạy', 'b. Cơ sở vật chất', 'c. Hệ thống học bổng', 'd. Hoạt động ngoại khóa', 'e. Chương trình đào tạo'],
        multiSelect: true
    },
    {
        question: "Bạn dự định sẽ làm gì sau khi tốt nghiệp?",
        choices: ['a. Tìm kiếm việc làm', 'b. Học lên cao', 'c. Khởi nghiệp', 'd. Đi du học', 'e. Chưa có định hướng'],
        multiSelect: true
    },
    {
        question: "Bạn có hài lòng với cuộc sống sinh viên của mình hiện nay?",
        choices: ['a. Rất hài lòng', 'b. Hài lòng', 'c. Bình thường', 'd. Không hài lòng', 'e. Rất không hài lòng'],
        multiSelect: true
    },
    // Câu hỏi tự luận
    {
        question: "Tại sao việc tham gia vào các hoạt động ngoại khóa có thể có lợi ích đối với sinh viên?",
        freeText: true
    },
    {
        question: "Hãy mô tả cách bạn tự quản lý thời gian trong quá trình học tập.",
        freeText: true
    },
    {
        question: "Nêu ý kiến của bạn về vai trò của công nghệ thông tin trong giáo dục hiện đại.",
        freeText: true
    },
    {
        question: "Bạn nghĩ gì về việc duy trì sức khỏe tốt để cải thiện hiệu suất học tập?",
        freeText: true
    },
    {
        question: "Làm thế nào bạn nghĩ về việc thiết lập mục tiêu và kế hoạch để đạt được mục tiêu trong học tập?",
        freeText: true
    },
    {
        question: "Có những kỹ năng mềm nào bạn nghĩ rằng sinh viên cần phát triển để thành công trong sự nghiệp sau này?",
        freeText: true
    },
    {
        question: "Hãy chia sẻ cách bạn xử lý stress và áp lực trong quá trình học tập.",
        freeText: true
    },
    {
        question: "Theo bạn, tại sao việc thường xuyên ôn tập là một phần quan trọng của quá trình học?",
        freeText: true
    },
    {
        question: "Hãy mô tả cách bạn tìm kiếm nguồn cảm hứng và động lực trong học tập.",
        freeText: true
    },
    {
        question: "Bạn nghĩ gì về việc thúc đẩy kỹ năng tự học ở sinh viên?",
        freeText: true
    },
];

document.getElementById("submitSurvey").addEventListener("click", function() {
    // Xử lý khi người dùng ấn nút Submit
    // Thu thập câu trả lời từ người dùng
    for (let i = 0; i < questions.length; i++) {
        let answer;
        // Nếu câu hỏi có phương án trả lời, thu thập giá trị của phương án được chọn
        if (questions[i].choices) {
            let selectedChoices = document.querySelectorAll("input[name='question" + (i + 1) + "']:checked");
            answer = [];
            for (let choice of selectedChoices) {
                answer.push(choice.value);
            }
        } else { // Nếu câu hỏi tự luận, thu thập nội dung của ô input
            answer = document.querySelector("input[name='question" + (i + 1) + "']").value;
        }
        userAnswers.push(answer);
    }

    // Hiển thị kết quả khảo sát
    let resultContainer = document.getElementById("survey");
    resultContainer.innerHTML = "<h2>Kết quả khảo sát</h2>";
    for (let i = 0; i < userAnswers.length; i++) {
        resultContainer.innerHTML += "<p>Câu " + (i + 1) + ": " + userAnswers[i] + "</p>";
    }

    // Xóa mảng userAnswers để chuẩn bị cho lượt khảo sát tiếp theo
    userAnswers = [];
});
let studentList = [];

function displayStudentList() {
  const studentListElement = document.getElementById("studentList");
  studentListElement.innerHTML = "";

  studentList.forEach((student, index) => {
    const li = document.createElement("li");
    li.textContent = `Tên sinh viên: ${student.name}, Mã sinh viên: ${student.id}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => deleteStudent(index));

    li.appendChild(deleteButton);
    studentListElement.appendChild(li);
  });
}

function addStudent(event) {
  event.preventDefault();

  const studentName = document.getElementById("studentName").value;
  const studentID = document.getElementById("studentID").value;

  if (studentName && studentID) {
    const newStudent = {
      name: studentName,
      id: studentID
    };

    studentList.push(newStudent);
    displayStudentList();
  }
}

function deleteStudent(index) {
  studentList.splice(index, 1);
  displayStudentList();
}

document.addEventListener("DOMContentLoaded", function() {
  const studentForm = document.getElementById("studentForm");
  studentForm.addEventListener("submit", addStudent);
});

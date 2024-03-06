document.addEventListener('DOMContentLoaded', function () {
  const studentSearchInput = document.getElementById('studentSearch');
  const searchButton = document.getElementById('searchButton');
  const studentInfo = document.getElementById('studentInfo');
  const examList = document.getElementById('examList');

  searchButton.addEventListener('click', function () {
      const searchTerm = studentSearchInput.value.trim();
      if (searchTerm !== '') {
          // Simulate fetching student data from the server based on search term
          const studentData = {
              name: 'John Doe',
              id: '12345',
              exams: [
                  { name: 'Math Exam', score: '80%', status: 'Completed', time: '45 minutes' },
                  { name: 'English Exam', score: '90%', status: 'Completed', time: '60 minutes' },
                  { name: 'Science Exam', score: '75%', status: 'Completed', time: '40 minutes' }
              ]
          };

          // Display student information
          studentInfo.innerHTML = `<h2>Student Information</h2><p><strong>Name:</strong> ${studentData.name}</p><p><strong>Student ID:</strong> ${studentData.id}</p>`;
          studentInfo.classList.remove('hidden');

          // Display list of exams
          let examRows = '';
          studentData.exams.forEach(exam => {
              examRows += `<tr><td>${exam.name}</td><td>${exam.score}</td><td>${exam.status}</td><td>${exam.time}</td></tr>`;
          });
          examList.querySelector('tbody').innerHTML = examRows;
          examList.classList.remove('hidden');
      }
  });
});

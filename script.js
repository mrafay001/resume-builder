document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const resumeData = { name, email, phone, jobTitle, experience, education, skills };
    localStorage.setItem('resumeData', JSON.stringify(resumeData));

    window.location.href = 'resume.html';
});

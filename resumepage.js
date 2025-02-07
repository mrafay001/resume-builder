window.onload = function() {
    // Retrieve the resume data from localStorage
    const savedResume = localStorage.getItem('resumeData');
    if (savedResume) {
        const resumeData = JSON.parse(savedResume);

        // Get the element to display the resume
        const resumeDetails = document.getElementById('resumeDetails');

        // Create the resume content
        const resumeContent = `
            <div>
                <h3>${resumeData.name}</h3>
                <p><strong>Job Title:</strong> ${resumeData.jobTitle}</p>
                <p><strong>Email:</strong> ${resumeData.email}</p>
                <p><strong>Phone:</strong> ${resumeData.phone}</p>
            </div>

            <div>
                <h3>Experience</h3>
                <p>${resumeData.experience}</p>
            </div>

            <div>
                <h3>Education</h3>
                <p>${resumeData.education}</p>
            </div>

            <div>
                <h3>Skills</h3>
                <p>${resumeData.skills}</p>
            </div>
        `;

        // Insert the resume content into the page
        resumeDetails.innerHTML = resumeContent;
    }
}

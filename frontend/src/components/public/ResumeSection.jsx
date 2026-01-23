const ResumeSection = () => {
    return (
        <div className="resume-section">
            <h3>My CV</h3>
            <p>Download my latest resume in PDF format.</p>
            {/* This link should point to your public file or an API endpoint */}
            <a href="/resume.pdf" download className="pastel-button">
                Download Resume (PDF)
            </a>
        </div>
    );
};
// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('感謝您的聯絡！我們將儘快回覆您。');
});

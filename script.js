// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Language switching functionality
let currentLang = 'zh';

// Load language data
let langData = {};
fetch('/lang.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load language data');
        }
        return response.json();
    })
    .then(data => {
        console.log('Language data loaded:', data);
        langData = data;
        updatePageLanguage();
    })
    .catch(error => {
        console.error('Error loading language data:', error);
    });

// Handle language selection
document.getElementById('language-select').addEventListener('change', function(e) {
    currentLang = e.target.value;
    updatePageLanguage();
    localStorage.setItem('selectedLang', currentLang);
});

// Update page content based on selected language
function updatePageLanguage() {
    const lang = langData[currentLang];
    if (!lang) return;

    // Update navigation
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
}

// Restore selected language from localStorage
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang) {
        currentLang = savedLang;
        document.getElementById('language-select').value = savedLang;
        updatePageLanguage();
    }
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('感謝您的聯絡！我們將儘快回覆您。');
});

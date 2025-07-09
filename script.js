// Global variables
let copiedCode = null;

// Navigation function
function navigateToTutorial(page) {
    window.location.href = page;
}

function navigateToHome() {
    window.location.href = 'home.html';
}

// Copy to clipboard functionality
function copyToClipboard(code, title) {
    navigator.clipboard.writeText(code).then(() => {
        copiedCode = title;
        
        // Find the button that was clicked and update its content
        const buttons = document.querySelectorAll('.copy-btn');
        buttons.forEach(btn => {
            if (btn.dataset.title === title) {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '✓';
                btn.classList.add('text-green-400');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.classList.remove('text-green-400');
                    copiedCode = null;
                }, 2000);
            }
        });
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Toggle lesson visibility
function toggleLesson(lessonId) {
    const lesson = document.getElementById(lessonId);
    if (lesson) {
        lesson.classList.toggle('hidden');
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for copy buttons
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const code = this.dataset.code;
            const title = this.dataset.title;
            copyToClipboard(code, title);
        });
    });

    // Add event listeners for lesson toggles
    const lessonHeaders = document.querySelectorAll('.lesson-header');
    lessonHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const targetId = this.dataset.target;
            toggleLesson(targetId);
        });
    });

    // Add hover effects to cards
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key to go back to home
        if (e.key === 'Escape') {
            navigateToHome();
        }
        
        // Ctrl/Cmd + K for search (placeholder)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            // Future: implement search functionality
            console.log('Search functionality coming soon!');
        }
    });

    // Add progress tracking
    trackPageProgress();
    
    // Initialize syntax highlighting
    initializeSyntaxHighlighting();
});

// Progress tracking
function trackPageProgress() {
    const progressKey = `progress_${window.location.pathname}`;
    const currentProgress = localStorage.getItem(progressKey) || 0;
    
    // Update progress based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        localStorage.setItem(progressKey, Math.round(scrollPercent));
    });
}

// Syntax highlighting (basic)
function initializeSyntaxHighlighting() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        highlightSyntax(block);
    });
}

function highlightSyntax(codeBlock) {
    let code = codeBlock.textContent;
    
    // Basic syntax highlighting patterns
    const patterns = [
        // HTML tags
        { regex: /(&lt;\/?)([a-zA-Z][a-zA-Z0-9]*)(.*?)(&gt;)/g, replacement: '$1<span class="text-orange-400">$2</span>$3$4' },
        // CSS properties
        { regex: /([a-zA-Z-]+)(\s*:\s*)([^;]+)(;)/g, replacement: '<span class="text-blue-400">$1</span>$2<span class="text-green-400">$3</span>$4' },
        // JavaScript keywords
        { regex: /\b(function|var|let|const|if|else|for|while|return|class|import|export)\b/g, replacement: '<span class="text-purple-400">$1</span>' },
        // Strings
        { regex: /(['"`])(.*?)\1/g, replacement: '<span class="text-green-400">$1$2$1</span>' },
        // Comments
        { regex: /(\/\*.*?\*\/|\/\/.*$|&lt;!--.*?--&gt;)/gm, replacement: '<span class="text-gray-400">$1</span>' },
        // Numbers
        { regex: /\b(\d+\.?\d*)\b/g, replacement: '<span class="text-yellow-400">$1</span>' }
    ];
    
    patterns.forEach(pattern => {
        code = code.replace(pattern.regex, pattern.replacement);
    });
    
    codeBlock.innerHTML = code;
}

// Theme toggle (if needed in future)
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Search functionality (placeholder for future implementation)
function searchTutorials(query) {
    console.log('Searching for:', query);
    // Future: implement search across all tutorials
}

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    // Future: implement analytics tracking
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Future: implement error reporting
});

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log('Page loaded in:', Math.round(loadTime), 'ms');
    trackEvent('page_load', { loadTime: Math.round(loadTime) });
});

// Service worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Future: register service worker for offline functionality
        console.log('Service worker support detected');
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for global use
window.KatProgrammers = {
    navigateToTutorial,
    navigateToHome,
    copyToClipboard,
    toggleLesson,
    scrollToSection,
    toggleTheme,
    searchTutorials,
    trackEvent
};
const apps = [
    {
        name: "Visual Studio Code",
        description: "Code space for building user interfaces and applications",
        image: "images/apps/vscode.webp", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-blue",
        url: "https://vscode.download.prss.microsoft.com/dbazure/download/stable/7adae6a56e34cb64d08899664b814cf620465925/VSCodeUserSetup-x64-1.102.1.exe",
        category: "Frontend Framework"
    },
    {
        name: "Visual Studio 2022",
        description: "New version of Visual Studio for building applications",
        image: "images/apps/visualstudio.png", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-green",
        url: "https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false",
        category: "Frontend Framework"
    },
    {
        name: "Python",
        description: "Platform for building mobile and desktop web applications",
        image: "images/apps/python.jpg", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-red",
        url: "https://www.python.org",
        category: "Frontend Framework"
    },
    {
        name: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
        image: "images/apps/nodejs.png", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-green-600",
        url: "https://nodejs.org",
        category: "Backend Runtime"
    },
    {
        name: "MongoDB",
        description: "The most popular database for modern applications",
        image: "images/apps/mongodb.png", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-green-700",
        url: "https://www.mongodb.com",
        category: "Database"
    },
    {
        name: "Trae",
        description: "A modern, open-source, and powerful code space for building applications",
        image: "images/apps/trae.jpg", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-blue-600",
        url: "https://trae.ai",
        category: "Frontend Framework"
    },
    {
        name: "MySQL",
        description: "The world's most popular open-source database",
        image: "images/apps/mysql.png", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-black",
        url: "https://www.mysql.com",
        category: "Full-stack Framework"
    },
    {
        name: "Xampp",
        description: "A free and open-source cross-platform web server solution stack package",
        image: "images/apps/xampp.png", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-cyan",
        url: "https://www.apachefriends.org/index.html",
        category: "CSS Framework"
    },
    {
        name: "Express.js",
        description: "Fast, unopinionated, minimalist web framework for Node.js",
        icon: "zap",
        iconColor: "icon-yellow",
        url: "https://expressjs.com",
        category: "Backend Framework"
    },
    {
        name: "Flutter",
        description: "Google's UI toolkit for building natively compiled applications",
        icon: "smartphone",
        iconColor: "icon-blue-400",
        url: "https://flutter.dev",
        category: "Mobile Framework"
    },
    {
        name: "Firebase",
        description: "Google's platform for creating mobile and web applications",
        icon: "shield",
        iconColor: "icon-orange",
        url: "https://firebase.google.com",
        category: "Backend as a Service"
    },
    {
        name: "Vercel",
        description: "The platform for frontend developers",
        icon: "globe",
        iconColor: "icon-black",
        url: "https://vercel.com",
        category: "Deployment Platform"
    }
];

// Function to create app card HTML
function createAppCard(app) {
    return `
        <div class="app-card">
            <div class="card-header">
                <div class="card-icon-section">
                    ${app.image ? `<img src="${app.image}" alt="${app.name} logo" class="app-logo" />` : ''}
                    <i data-lucide="${app.icon}" class="card-icon ${app.iconColor}"></i>
                    <div>
                        <h3 class="card-title">${app.name}</h3>
                        <span class="card-category">${app.category}</span>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <p class="card-description">${app.description}</p>
                <button class="visit-btn" onclick="handleRedirect('${app.url}')">
                    Download
                    <i class="fa fa-download"></i>
                </button>
            </div>
        </div>
    `;
}// Function to handle redirect
function handleRedirect(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Function to render apps
function renderApps() {
    const appsGrid = document.getElementById('appsGrid');
    const appsHTML = apps.map(app => createAppCard(app)).join('');
    appsGrid.innerHTML = appsHTML;
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderApps();
});

// Re-initialize icons if lucide loads after DOM
window.addEventListener('load', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
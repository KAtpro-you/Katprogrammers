const apps = [
    {
        name: "Visual Studio Code",
        description: "Code space for building user interfaces and applications",
        image: "images/apps/vscode.webp", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-blue",
        url: "https://vscode.download.prss.microsoft.com/dbazure/download/stable/7adae6a56e34cb64d08899664b814cf620465925/VSCodeUserSetup-x64-1.102.1.exe",
        url1: "https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal",
        category: "Frontend Framework"
    },
    {
        name: "Visual Studio 2022",
        description: "New version of Visual Studio for building applications",
        image: "images/apps/visualstudio.png", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-green",
        url: "https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false",
        url1: "https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false",
        category: "Frontend Framework"
    },
    {
        name: "Python",
        description: "Platform for building mobile and desktop web applications",
        image: "images/apps/python.jpg", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-red",
        url: "https://www.python.org/ftp/python/3.13.5/python-3.13.5-amd64.exe",
        url1: "https://www.python.org/ftp/python/3.13.5/python-3.13.5-macos11.pkg",
        category: "Frontend Framework"
    },
    {
        name: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
        image: "images/apps/nodejs.png", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-green-600",
        url: "https://nodejs.org/dist/v22.17.1/node-v22.17.1-x64.msi",
        url1: "https://nodejs.org/dist/v22.17.1/node-v22.17.1.pkg",
        category: "Backend Runtime"
    },
    {
        name: "MongoDB",
        description: "The most popular database for modern applications",
        image: "images/apps/mongodb.png", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-green-700",
        url: "https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-8.0.11.zip",
        url1: "https://fastdl.mongodb.org/osx/mongodb-macos-x86_64-8.0.11.tgz",
        category: "Database"
    },
    {
        name: "Trae",
        description: "A modern, open-source, and powerful code space for building applications",
        image: "images/apps/trae.jpg", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-blue-600",
        url: "https://lf-cdn.trae.ai/obj/trae-ai-us/pkg/app/releases/stable/1.0.15790/win32/Trae-Setup-x64.exe",
        url1: "https://lf-cdn.trae.ai/obj/trae-ai-us/pkg/app/releases/stable/1.0.15790/darwin/Trae-Setup-x64.dmg",
        category: "Frontend Framework"
    },
    {
        name: "MySQL",
        description: "The world's most popular open-source database",
        image: "images/apps/mysql.png", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-black",
        url: "https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-community-8.0.42.0.msi",
        url1: "https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.42-macos15-x86_64.dmg",
        category: "Database"
    },
    {
        name: "Xampp",
        description: "A free and open-source cross-platform web server solution stack package",
        image: "images/apps/xampp.png", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-cyan",
        url: "https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.12/xampp-windows-x64-8.2.12-0-VS16-installer.exe",
        url1: "https://sourceforge.net/projects/xampp/files/XAMPP%20Mac%20OS%20X/8.2.4/xampp-osx-8.2.4-0-installer.dmg",
        category: "Web Server"
    },
    {
        name: "Git",
        description: "A free and open-source distributed version control system",
        image: "images/apps/git.jpeg", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-yellow",
        url: "https://github.com/git-for-windows/git/releases/download/v2.50.1.windows.1/Git-2.50.1-64-bit.exe",
        url1: "https://git-scm.com/downloads/mac",
        category: "Version Control"
    },
    {
        name: "IntelliJ IDEA",
        description: "An integrated development environment (IDE) for Java development",
        image: "images/apps/intellijidea.jpeg", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-blue-400",
        url: "https://download.jetbrains.com/idea/ideaIU-2025.1.3.exe?_gl=1*1a4wsqd*_gcl_au*NzcwMzAyMTM0LjE3NTI3NTA5MzU.*FPAU*NzcwMzAyMTM0LjE3NTI3NTA5MzU.*_ga*NjA0Nzc3NjY4LjE3NTI3NTA5NDA.*_ga_9J976DJZ68*czE3NTI3NTA5MzckbzEkZzEkdDE3NTI3NTA5ODckajEwJGwwJGgw",
        url1: "https://download.jetbrains.com/idea/ideaIU-2025.1.3.dmg?_gl=1*1a4wsqd*_gcl_au*NzcwMzAyMTM0LjE3NTI3NTA5MzU.*FPAU*NzcwMzAyMTM0LjE3NTI3NTA5MzU.*_ga*NjA0Nzc3NjY4LjE3NTI3NTA5NDA.*_ga_9J976DJZ68*czE3NTI3NTA5MzckbzEkZzEkdDE3NTI3NTA5ODckajEwJGwwJGgw",
        category: "Frontend Framework"
    },
    {
        name: "Code::Blocks",
        description: "A free, open-source cross-platform IDE that supports multiple compilers including GCC and MSVC with C/C++ languages.",
        image: "images/apps/codeblocks.png", // Placeholder for image, can be replaced with actual URL
        iconColor: "icon-orange",
        url: "https://sourceforge.net/projects/codeblocks/files/Binaries/20.03/Windows/codeblocks-20.03mingw-setup.exe/download",
        url1: "https://sourceforge.net/projects/codeblocks/files/Binaries/20.03/MacOSX/codeblocks-20.03-macosx.dmg/download",
        category: "IDE"
    },
    {
        name: "Vercel",
        description: "A platform for frontend frameworks and static sites, built to integrate with headless content, commerce, or database.",
        icon: "globe",
        iconColor: "icon-black",
        url: "https://vercel.com",
        url1: "https://vercel.com",
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
                <i class="fa-brands fa-windows"></i>
                    Download for Windows
                    <i class="fa fa-download"></i>
                </button><br>
                <button class="visit-btn" onclick="handleRedirect('${app.url1}')">
                <i class="fa-brands fa-apple"></i>
                    Download for Mac
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
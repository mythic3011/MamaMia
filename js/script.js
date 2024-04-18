// logo-menu on hover or click show sidebar
const logoMenu = document.getElementById("logo-menu");
logoMenu.addEventListener("click", () => {
    logoMenu.classList.toggle("logo-menu-open");
});
logoMenu.addEventListener("mouseover", () => {
    logoMenu.classList.toggle("logo-menu-open");
});

// dark mode button
const darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener("click", changeTheme);

// change theme site css to dark mode
function changeTheme() {
    const darkModeButton = document.getElementById("dark-mode-button");
    if (darkModeButton.innerHTML === "Dark Mode") {
        darkModeButton.innerHTML = "Light Mode";
        document.getElementById('theme-icon').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-moon-stars-fill" viewBox="0 0 16 16" id="theme-icon">
                <path
                    d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                <path
                    d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
            </svg>`;
    } else {
        darkModeButton.innerHTML = "Dark Mode";
        document.body.classList.remove("dark-theme");
        document.getElementById('theme-icon').innerHTML =
            `<svg xmlns="http://www.w3.org/2000/svg" id="theme-icon" width="16" height="16" fill="currentColor"
class="bi bi-sun" 
viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
  </svg>`;
        document.body.classList.add("dark-theme");
    }
}

// detect firefox
function detectFirefox() {
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if (isFirefox) {
        const notification = document.createElement('div');
        notification.textContent = notificationLanguage[language].notificationFirefox;
        notification.style.fontSize = '1.5rem';
        notification.style.fontWeight = 'bold';
        notification.style.backgroundColor = '#ffcccc';
        notification.style.color = '#ff0000';
        notification.style.padding = '10px';
        notification.style.position = 'fixed';
        notification.style.top = '0';
        notification.style.left = '0';
        notification.style.width = '100%';
        notification.style.textAlign = 'center';
        document.body.appendChild(notification);
        const hideDiv = document.getElementById('Not-show-on-firefox');
        window.onload = function () {
            hideDiv.style.display = 'block';
        }
    }
}

// notification language map
const notificationLanguage = {
    en: {
        notification: 'Notification',
        notificationFirefox: 'We are sorry, but this website is not supported in Firefox. Please use Chrome or Safari instead.'
    },
    "zh-hant": {
        notification: '通知',
        notificationFirefox: '我們很抱歉，這個網站不支援 Firefox。請使用 Chrome 或 Safari 代替。'
    },
    "zh-hans": {
        notification: '通知',
        notificationFirefox: '我们很抱歉，这个网站不支持 Firefox。请使用 Chrome 或 Safari 代替。'
    },
    ja: {
        notification: '通知',
        notificationFirefox: '申し訳ありませんが、このウェブサイトは Firefox ではサポートされていません。Chrome または Safari を使用してください。'
    }
}

function changeLanguage(language) {
    const translations = languageMap[language];
    for (const key in translations) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[key];
        }
    }
}
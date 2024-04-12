/*
    Languages array
    index 0 = English
    index 1 = Chinese-Traditional zh-TW zh-HK
    index 2 = Chinese-Simplified zh-CN zh-SG zh-MO

    index 3 = japanese ja
 */

const languageMap = {
        "en": {
            "title": "Welcome to MamaMia Bar",
            "subtitle": "Experience the best drinks and a vibrant atmosphere..",
            "unwind-and-enjoy": "Unwind and Enjoy",
            "discover-your-favorite": "Discover Your Favorite",
            "discover-new-drinks": "Discover new drinks",
            "drink-selection": "Crafting Exquisite Cocktails",
            "drink-selection-1": "Indulge in our handcrafted cocktails.",
            "drink-selection-2": "Our expert mixologists use the finest ingredients to create unique flavors.",
            "drink-selection-3": "Whether you prefer classic or innovative cocktails, we have something for everyone.",
            "drink-selection-4": "Join us and experience the art of mixology at MamaMia Bar.",
            "join-us": "Join Us at MamaMia Bar",
            "enjoy-the-nightlife": "Experience the vibrant nightlife and unforgettable moments.",
            "visit-our-menu": "Visit our menu to explore our drink selection and find your perfect sip.",
            "footer-link": "Mama Mia",
            "rights-reserved": "All Rights Reserved.",
            "language-select": "Language",
            "language-select-en": "English",
            "language-select-zh-hant": "Chinese Traditional",
            "language-select-zh-hans": "Chinese Simplified",
            "language-select-ja": "Japanese",
            "home": "Home",
            "menu": "Menu",
            "about": "About",
            "contact": "Contact Us",
            "address": "New York, NY",
            "phone": "Phone:",
            "email": "Email:",
            "website": "Website:",
            "useful-links": "Useful Links",
            "copyright": "Copyright © 2024 Mama Mia All Rights Reserved.",
            "newsletter-subscribe": "Subscribe",
            "newsletter-subscribe-form": "Newsletter Subscribe Form",
            "newsletter-subscribe-success": "Thank you for subscribing to our newsletter!",
            "newsletter-subscribe-error": "There was an error subscribing to our newsletter. Please try again later.",
            "navbar-menu": "Menu",
            "navbar-about": "About",
            "navbar-contact": "Contact Us",
            "navbar-home": "Home",
        },
        "zh-hant": {
            "title": "歡迎來到 MamaMia 酒吧",
            "subtitle": "品味最棒的飲品和充滿活力的氛圍...",
            "unwind-and-enjoy": "放鬆並享受",
            "discover-new-drinks": "發現新飲品",
            "discover-your-favorite": "發現您最喜愛的",
            "drink-selection": "精心調製的美酒",
            "drink-selection-1": "盡情享受我們手工調製的美酒。",
            "drink-selection-2": "我們的專業調酒師運用最優質的原料創造獨特的口味。",
            "drink-selection-3": "無論您偏愛經典還是創新的雞尾酒，我們都能滿足每個人的口味。",
            "drink-selection-4": "加入我們，體驗 MamaMia 酒吧的調酒藝術。",
            "join-us": "加入我們的 MamaMia 酒吧",
            "enjoy-the-nightlife": "體驗充滿活力的夜生活和難忘的時刻。",
            "visit-our-menu": "請查看我們的菜單，探索我們的飲品選擇，找到您完美的一口。",
            "footer-link": "Mama Mia",
            "rights-reserved": "版權所有。",
            "language-select": "語言",
            "language-select-en": "英文",
            "language-select-zh-hant": "繁體中文",
            "language-select-zh-hans": "簡體中文",
            "language-select-ja": "日文",
            "home": "首頁",
            "menu": "菜單",
            "about": "關於我們",
            "contact": "聯繫我們",
            "address": "紐約，紐約州",
            "phone": "電話：",
            "email": "電子郵件：",
            "website": "網站：",
            "useful-links": "有用連結",
            "copyright": "版權所有 © 2024 Mama Mia。",
            "newsletter-subscribe": "訂閱",
            "newsletter-subscribe-form": "電子報訂閱表格",
            "newsletter-subscribe-success": "感謝您訂閱我們的電子報！",
            "newsletter-subscribe-error": "訂閱我們的電子報時出錯。請稍後再試。",
            "navbar-menu": "菜單",
            "navbar-about": "關於我們",
            "navbar-contact": "聯繫我們",
            "navbar-home": "首頁",
        }
        , "zh-hans": {
            "title": "歡迎來到 MamaMia 酒吧",
            "subtitle": "體驗最棒的飲品和充滿活力的氛圍...",
            "unwind-and-enjoy": "放鬆並享受",
            "discover-your-favorite": "發現您最喜愛的",
            "discover-new-drinks": "發現新飲品",
            "drink-selection": "精心調製的美酒",
            "drink-selection-1": "盡情享受我們手工調製的美酒。",
            "drink-selection-2": "我們的專業調酒師運用最優質的原料創造獨特的口味。",
            "drink-selection-3": "無論您偏愛經典還是創新的雞尾酒，我們都能滿足每個人的口味。",
            "drink-selection-4": "加入我們，體驗 MamaMia 酒吧的調酒藝術。",
            "join-us": "加入我們的 MamaMia 酒吧",
            "enjoy-the-nightlife": "體驗充滿活力的夜生活和難忘的時刻。",
            "visit-our-menu": "請查看我們的菜單，探索我們的飲品選擇，找到您完美的一口。",
            "footer-link": "Mama Mia",
            "rights-reserved": "版權所有。",
            "language-select": "語言",
            "language-select-en": "英文",
            "language-select-zh-hant": "中文繁體",
            "language-select-zh-hans": "中文簡體",
            "language-select-ja": "日文",
            "home": "首頁",
            "menu": "菜單",
            "about": "關於我們",
            "contact": "聯繫我們",
            "address": "紐約，紐約州",
            "phone": "電話：",
            "email": "電子郵件：",
            "website": "網站：",
            "useful-links": "有用鏈接",
            "copyright": "版權所有 © 2024 Mama Mia。",
            "newsletter-subscribe": "訂閱",
            "newsletter-subscribe-form": "電子報訂閱表格",
            "newsletter-subscribe-success": "感謝您訂閱我們的電子報！",
            "newsletter-subscribe-error": "訂閱我們的電子報時出錯。請稍後再試。",
            "navbar-menu": "菜單",
            "navbar-about": "關於我們",
            "navbar-contact": "聯繫我們",
            "navbar-home": "首頁",
        }, "ja": {
            "title": "ママミアバーへようこそ",
            "subtitle": "最高のドリンクと活気ある雰囲気を體験してください。",
            "unwind-and-enjoy": "リラックスしてお楽しみください",
            "discover-new-drinks": "新しいドリンクを見つける",
            "discover-your-favorite": "お気に入りを見つける",
            "drink-selection": "洗練されたカクテルのクラフト",
            "drink-selection-1": "手作りのカクテルを堪能してください。",
            "drink-selection-2": "當店のエキスパートなミキショロジストが最高の材料を使用してユニークな味わいを生み出します。",
            "drink-selection-3": "クラシックなカクテルから革新的なカクテルまで、お好みのカクテルがきっと見つかります。",
            "drink-selection-4": "ママミアバーでミキソロジーの芸術を體験しましょう。",
            "join-us": "ママミアバーへのご參加をお待ちしています",
            "enjoy-the-nightlife": "活気あるナイトライフと忘れられ���い瞬間を體験してください。",
            "visit-our-menu": "當店のメニューをご覧いただき、お好みのドリンクを見つけてください。",
            "footer-link": "ママミア",
            "rights-reserved": "著作権所有。",
            "language-select": "言語",
            "language-select-en": "英語",
            "language-select-zh-hant": "繁體中文",
            "language-select-zh-hans": "簡體中文",
            "language-select-ja": "日本語",
            "home": "ホーム",
            "menu": "メニュー",
            "about": "お店について",
            "contact": "お問い合わせ",
            "address": "ニューヨーク、NY",
            "phone": "電話番號：",
            "email": "メール：",
            "website": "ウェブサイト：",
            "useful-links": "便利なリンク",
            "copyright": "© 2024 ママミア。全著作権所有。",
            "newsletter-subscribe": "購読する",
            "newsletter-subscribe-form": "ニュースレター購読フォーム",
            "newsletter-subscribe-success": "ニュースレターの購読ありがとうございます！",
            "newsletter-subscribe-error": "ニュースレターの購読中にエラーが発生しました。後でもう一度お試しください。",
            "navbar-menu": "メニュー",
            "navbar-about": "お店について",
            "navbar-contact": "お問い合わせ",
            "navbar-home": "ホーム",
        },
    }
;

window.onload = function () {
    const languageSelect = document.getElementById("language");
    const savedLanguage = localStorage.getItem("language") || "en";
    languageSelect.value = savedLanguage;
    updatePageLanguage(savedLanguage);

    languageSelect.addEventListener('change', function () {
        const selectedLanguage = this.value;
        localStorage.setItem("language", selectedLanguage);
        updatePageLanguage(selectedLanguage);
    });
}

function updatePageLanguage(language) {
    const translations = languageMap[language];
    for (const key in translations) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[key];
        }
    }
}

// detect language and use changeLanguage function
function detectLanguage() {
    const language = navigator.language.split("-")[0];
    if (language === "en") {
        changeLanguage("en");
    } else if (language === "zh") {
        changeLanguage("zh-hant");
    } else if (language === "ja") {
        changeLanguage("ja");
    }
}



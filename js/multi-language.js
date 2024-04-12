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
        "drink-selection": "Crafting Exquisite Cocktails",
        "drink-selection-1": "Indulge in our handcrafted cocktails.",
        "drink-selection-2": "Our expert mixologists use the finest ingredients to create unique flavors.",
        "drink-selection-3": "Whether you prefer classic or innovative cocktails, we have something for everyone.",
        "drink-selection-4": "Join us and experience the art of mixology at MamaMia Bar.",
        "join-us": "Join Us at MamaMia Bar",
        "enjoy-the-nightlife": "Experience the vibrant nightlife and unforgettable moments.",
        "visit-our-menu": "Visit our menu to explore our drink selection and find your perfect sip.",
        "menu": "Menu",
        "copyright": "Copyright",
        "footer-link": "Mama Mia",
        "rights-reserved": "All Rights Reserved."
    },
    "zh-hant": {
        "title": "歡迎來到 MamaMia 酒吧",
        "subtitle": "感受最好的飲品和熱鬧的氛圍。",
        "unwind-and-enjoy": "放鬆享受",
        "drink-selection": "精心調製的精緻雞尾酒",
        "drink-selection-1": "品嚐我們手工調製的雞尾酒。",
        "drink-selection-2": "我們的專業調酒師使用最優質的材料創造獨特的風味。",
        "drink-selection-3": "無論您喜歡經典還是創新的雞尾酒，我們都有適合每個人的選擇。",
        "drink-selection-4": "加入我們，在 MamaMia 酒吧體驗調酒的藝術。",
        "join-us": "加入我們的 MamaMia 酒吧",
        "enjoy-the-nightlife": "體驗充滿活力的夜生活和難忘的時刻。",
        "visit-our-menu": "訪問我們的菜單，探索我們的飲品選擇，找到您完美的一口。",
        "menu": "菜單",
        "copyright": "版權",
        "footer-link": "Mama Mia",
        "rights-reserved": "保留所有權利。"
    }, "zh-hans": {
        "title": "欢迎来到 MamaMia 酒吧",
        "subtitle": "体验最好的饮品和充满活力的氛围。",
        "unwind-and-enjoy": "放松享受",
        "drink-selection": "精心调制的精致鸡尾酒",
        "drink-selection-1": "品尝我们手工调制的鸡尾酒。",
        "drink-selection-2": "我们的专业调酒师使用最优质的材料创造独特的风味。",
        "drink-selection-3": "无论您喜欢经典还是创新的鸡尾酒，我们都有适合每个人的选择。",
        "drink-selection-4": "加入我们，在 MamaMia 酒吧体验调酒的艺术。",
        "join-us": "加入我们的 MamaMia 酒吧",
        "enjoy-the-nightlife": "体验充满活力的夜生活和难忘的时刻。",
        "visit-our-menu": "访问我们的菜单，探索我们的饮品选择，找到您完美的一口。",
        "menu": "菜单",
        "copyright": "版权",
        "footer-link": "Mama Mia",
        "rights-reserved": "保留所有权利。"
    }, "ja": {
        "title": "MamaMia バーへようこそ",
        "subtitle": "最高のドリンクと活気ある雰囲気を体験してください。",
        "unwind-and-enjoy": "リラックスして楽しむ",
        "drink-selection": "洗練されたカクテルを作り上げる",
        "drink-selection-1": "手作りのカクテルを堪能してください。",
        "drink-selection-2": "当店のエキスパートミキサーが最高の材料を使用し、ユニークなフレーバーを作り出します。",
        "drink-selection-3": "クラシックなカクテルから革新的なカクテルまで、お好みのスタイルをお楽しみいただけます。",
        "drink-selection-4": "MamaMia バーでミキシングの芸術を体験してください。",
        "join-us": "MamaMia バーで一緒に楽しもう",
        "enjoy-the-nightlife": "活気溢れるナイトライフと忘れられないひとときをお楽しみください。",
        "visit-our-menu": "当店のメニューをご覧いただき、お好みのドリンクを見つけてください。",
        "menu": "メニュー",
        "copyright": "著作権",
        "footer-link": "Mama Mia",
        "rights-reserved": "全著作権所有。"
    }
};


languageMap.add("en", "English");
languageMap.add("zh-TW", "Chinese-Traditional");
languageMap.add("zh-CN", "Chinese-Simplified");
languageMap.add("ja", "Japanese");
languageMap.add("zh-HK", "Chinese-Traditional");
languageMap.add("zh-SG", "Chinese-Simplified");
languageMap.add("zh-MO", "Chinese-Simplified");
languageMap.add("zh-han", "Chinese-Simplified");
languageMap.add("zh-hant", "Chinese-Traditional");

// use dropdown button to change language and reload the page
function changeLanguage(selectElement) {
    const language = selectElement.value;
    const translations = languageMap[language];

    const elements = {
        "title": document.getElementById("title"),
        "subtitle": document.getElementById("subtitle"),
        "unwind-and-enjoy": document.getElementById("unwind-and-enjoy"),
        "drink-selection": document.getElementById("drink-selection"),
        "drink-selection-1": document.getElementById("drink-selection-1"),
        "drink-selection-2": document.getElementById("drink-selection-2"),
        "drink-selection-3": document.getElementById("drink-selection-3"),
        "drink-selection-4": document.getElementById("drink-selection-4"),
        "join-us": document.getElementById("join-us"),
        "enjoy-the-nightlife": document.getElementById("enjoy-the-nightlife"),
        "visit-our-menu": document.getElementById("visit-our-menu"),
        "menu": document.getElementById("menu"),
        "copyright": document.getElementById("copyright"),
        "footer-link": document.getElementById("footer-link"),
        "rights-reserved": document.getElementById("rights-reserved")
    };

    for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
            elements[key].textContent = translations[key];
        }
    }

    // Save the selected language to local storage
    localStorage.setItem("language", language);
}

// Retrieve the saved language from local storage
const savedLanguage = localStorage.getItem("language");

// Set the selected language in the dropdown
const languageSelect = document.getElementById("language");
if (savedLanguage) {
    languageSelect.value = savedLanguage;
}

// Call the changeLanguage function when the page loads
changeLanguage(languageSelect);

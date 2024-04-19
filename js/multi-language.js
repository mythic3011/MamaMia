/*
    Languages array
    index 0 = English
    index 1 = Chinese-Traditional zh-TW zh-HK
    index 2 = Chinese-Simplified zh-CN zh-SG zh-MO

    index 3 = japanese ja
 */

const languageMap = {
  en: {
    title: "Welcome to MamaMia Bar",
    subtitle: "Experience the best drinks and a vibrant atmosphere..",
    "unwind-and-enjoy": "Unwind and Enjoy",
    "discover-your-favorite": "Discover Your Favorite",
    "discover-new-drinks": "Discover new drinks",
    "drink-selection": "Crafting Exquisite Cocktails",
    "drink-selection-1": "Indulge in our handcrafted cocktails.",
    "drink-selection-2":
      "Our expert mixologists use the finest ingredients to create unique flavors.",
    "drink-selection-3":
      "Whether you prefer classic or innovative cocktails, we have something for everyone.",
    "drink-selection-4":
      "Join us and experience the art of mixology at MamaMia Bar.",
    "join-us": "Join Us at MamaMia Bar",
    "enjoy-the-nightlife":
      "Experience the vibrant nightlife and unforgettable moments.",
    "visit-our-menu":
      "Visit our menu to explore our drink selection and find your perfect sip.",
    "footer-link": "Mama Mia",
    "rights-reserved": "All Rights Reserved.",
    "language-select": "Language",
    "language-select-en": "English",
    "language-select-zh-hant": "Chinese Traditional",
    "language-select-zh-hans": "Chinese Simplified",
    "language-select-ja": "Japanese",
    home: "Home",
    menu: "Menu",
    about: "About",
    contact: "Contact Us",
    address: "New York, NY",
    phone: "Phone:",
    email: "Email:",
    website: "Website:",
    "useful-links": "Useful Links",
    copyright: "Copyright © 2024 Mama Mia All Rights Reserved.",
    "newsletter-subscribe": "Subscribe",
    "newsletter-subscribe-form": "Newsletter Subscribe Form",
    "newsletter-subscribe-success":
      "Thank you for subscribing to our newsletter!",
    "newsletter-subscribe-error":
      "There was an error subscribing to our newsletter. Please try again later.",
    "navbar-menu": "Menu",
    "navbar-about": "About",
    "navbar-contact": "Contact Us",
    "navbar-home": "Home",
    "Menu-title": "Featured Drink",
    "drink-1-title": "Premium Coffee Blend",
    "drink-1-description":
      "Indulge in the captivating allure of our meticulously crafted premium coffee blend. Immerse yourself in the rich, aromatic symphony that dances on your palate with every sip. Carefully handpicked coffee beans are expertly blended to perfection, resulting in a harmonious fusion of flavors. Delight in the smooth and satisfying taste that will awaken your senses and leave you craving for more. Join us for an unparalleled coffee experience that will elevate your mornings and enchant your taste buds.",
    "drink-2-title": "Handcrafted Cocktail Set",
    "drink-2-description":
      "Embrace the art of mixology and impress your guests with our exquisite handcrafted cocktail set. Our premium selection of spirits, mixers, and garnishes will elevate your cocktail game to new heights. With our carefully curated ingredients, you can create a wide range of tantalizing cocktails in the comfort of your own home. Whether you're a seasoned bartender or a novice enthusiast, our cocktail set is perfect for anyone who loves to drink and appreciates the art of mixology.",
    "drink-3-title": "Artisanal Cheese Selection",
    "drink-3-description":
      "Indulge in our artisanal cheese selection, featuring a variety of handcrafted cheeses from local farms. Each cheese is carefully aged to perfection, offering a unique and flavorful experience. Discover a symphony of tastes crafted by local cheesemakers, where passion and tradition converge. Each cheese is lovingly aged to perfection, resulting in a harmonious blend of textures and flavors that will captivate your palate. From creamy and mild to bold and robust, our selection offers a diverse range of cheeses that will elevate your cheese board experience to new heights. Indulge in this gastronomic delight and savor the essence of true craftsmanship.",
    "drink-4-title": "Mojito",
    "drink-4-description":
      "A classic cocktail made with rum, fresh mint, lime juice, sugar, and soda water. Crafted with the finest rum, handpicked fresh mint leaves, zesty lime juice, a touch of sugar, and a splash of invigorating soda water, this classic libation is a symphony of refreshing flavors. Each sip unveils a symphony of taste, where the richness of rum blends harmoniously with the citrusy notes of lime juice, while the sweetness of sugar and the tartness of soda water add a perfect balance of sweetness and complexity. Indulge in the perfect balance of flavors and savor the art of cocktail perfection. Cheers to the art of cocktail creation!",
    "drink-5-title": "Old Fashioned",
    "drink-5-description":
      "Immerse yourself in the allure of the Old Fashioned cocktail, a timeless masterpiece that embodies sophistication and refinement. This classic blend harmoniously combines the richness of bourbon, the subtle sweetness of sugar, the complexity of bitters, and a tantalizing twist of orange zest. Every sip unveils a symphony of flavors, where the smoothness of bourbon intertwines with the aromatic essence of orange, creating a sensory experience that transcends time. Indulge in the elegance of this iconic cocktail and savor the perfect balance of tradition and modernity. Raise your glass to the enduring legacy of the Old Fashioned. Cheers!",
    "drink-6-title": "Cosmopolitan",
    "drink-6-description":
      "Embrace the vibrant spirit of the Cosmopolitan cocktail, a delightful fusion of flavors that will ignite your senses. This captivating libation blends the smoothness of vodka with the tangy allure of cranberry juice, complemented by the subtle sweetness of orange liqueur and a refreshing twist of lime juice. Each sip unveils a symphony of taste, where the tartness of cranberry dances harmoniously with the citrusy notes, creating a perfectly balanced and invigorating concoction. Immerse yourself in the cosmopolitan lifestyle and let this iconic cocktail transport you to a world of sophistication and excitement. Cheers to the cosmopolitan experience!",
    "drink-7-title": "Manhattan",
    "drink-7-description":
      "Elevate your taste buds with the timeless sophistication of the Manhattan cocktail. This exquisite blend combines the rich complexity of whiskey, the velvety sweetness of sweet vermouth, and a dash of aromatic bitters. With each sip, you'll be captivated by the harmonious marriage of flavors, where the robustness of whiskey intertwines with the luscious notes of vermouth, while the bitters add a subtle yet tantalizing depth. Whether you're unwinding after a long day or celebrating a special occasion, the Manhattan cocktail is a symbol of refined taste and elegance. Immerse yourself in its allure and savor the art of cocktail craftsmanship. Cheers to the Manhattan!",
    "drink-8-title": "Sazerac",
    "drink-8-description":
      "Transport yourself to the vibrant streets of New Orleans with the iconic Sazerac cocktail. This classic libation, steeped in history and tradition, combines the boldness of rye whiskey, the enchanting essence of absinthe, a touch of sugar, and the aromatic allure of Peychaud's bitters. With each sip, you'll be immersed in a symphony of flavors, where the robustness of rye whiskey mingles with the subtle herbal notes of absinthe, while the sugar and bitters add a perfect balance of sweetness and complexity. Indulge in the timeless charm of the Sazerac cocktail and let its rich heritage captivate your senses. Cheers to the spirit of New Orleans!",
    "drink-9-title": "Gin and Tonic",
    "drink-9-description":
      "Quench your thirst with the timeless allure of the Gin and Tonic cocktail. This refreshing libation combines the crispness of gin, the effervescence of tonic water, and a vibrant squeeze of fresh lime. With each sip, you'll be greeted by a harmonious fusion of flavors, where the botanical notes of gin intertwine with the subtle bitterness of tonic water, while the zesty lime adds a burst of citrusy freshness. Whether you're lounging on a sunny day or enjoying a night out, the Gin and Tonic is the perfect companion for moments of relaxation and indulgence. Raise your glass and celebrate the simple yet exquisite pleasure of this classic cocktail. Cheers!",
    "drink-10-title": "Daiquiri",
    "drink-10-description":
      "Immerse yourself in the refreshing simplicity of the Daiquiri cocktail, a timeless blend of rum, lime juice, and sugar that will transport you to a tropical paradise. This classic libation is the ultimate summer drink, offering a refreshing and invigorating experience. Each sip tantalizes your taste buds with the perfect balance of sweetness and tanginess, where the smoothness of rum blends harmoniously with the zesty lime and sugar. For an extra touch of freshness, garnish with a slice of lemon or a sprig of mint. Indulge in the simple pleasures of the Daiquiri and let its tropical charm transport you to a moment of pure bliss and relaxation. Cheers to the perfect summer drink!",
    "drink-11-title": "Whiskey Sour",
    "drink-11-description":
      "Experience the perfect balance of tanginess and sweetness with the Whiskey Sour cocktail. This delightful libation combines the robustness of whiskey, the zesty tang of lemon juice, and a touch of sweetness to create a harmonious blend of flavors. Each sip reveals a symphony of taste, where the richness of whiskey intertwines with the refreshing citrus notes of lemon juice, while the touch of sweetness adds a delightful contrast. Whether you're unwinding after a long day or enjoying a social gathering, the Whiskey Sour is a timeless classic that never fails to please. Raise your glass and savor the tangy delight of this beloved cocktail. Cheers!",
    "drink-12-title": "Martini",
    "drink-12-description":
      "Step into the world of timeless elegance with the iconic Martini cocktail. This classic libation, made with either gin or vodka, and a hint of dry vermouth, is a symbol of sophistication and refinement. Each sip unveils a harmonious fusion of flavors, where the smoothness of the spirit intertwines with the subtle herbal notes of vermouth, creating a drink that is both smooth and complex. To garnish, you can choose between the traditional olive or a twist of lemon, adding a touch of visual appeal and a hint of citrusy freshness. Whether you prefer it shaken or stirred, the Martini is a symbol of timeless allure and a perfect choice for any occasion. Raise your glass and celebrate the elegance of this classic cocktail. Cheers!",
  },
  "zh-hant": {
    title: "歡迎來到 MamaMia 酒吧",
    subtitle: "品味最棒的飲品和充滿活力的氛圍...",
    "unwind-and-enjoy": "放鬆並享受",
    "discover-new-drinks": "發現新飲品",
    "discover-your-favorite": "發現您最喜愛的",
    "drink-selection": "精心調製的美酒",
    "drink-selection-1": "盡情享受我們手工調製的美酒。",
    "drink-selection-2": "我們的專業調酒師運用最優質的原料創造獨特的口味。",
    "drink-selection-3":
      "無論您偏愛經典還是創新的雞尾酒，我們都能滿足每個人的口味。",
    "drink-selection-4": "加入我們，體驗 MamaMia 酒吧的調酒藝術。",
    "join-us": "加入我們的 MamaMia 酒吧",
    "enjoy-the-nightlife": "體驗充滿活力的夜生活和難忘的時刻。",
    "visit-our-menu":
      "請查看我們的菜單，探索我們的飲品選擇，找到您完美的一口。",
    "footer-link": "Mama Mia",
    "rights-reserved": "版權所有。",
    "language-select": "語言",
    "language-select-en": "英文",
    "language-select-zh-hant": "繁體中文",
    "language-select-zh-hans": "簡體中文",
    "language-select-ja": "日文",
    home: "首頁",
    menu: "菜單",
    about: "關於我們",
    contact: "聯繫我們",
    address: "紐約，紐約州",
    phone: "電話：",
    email: "電子郵件：",
    website: "網站：",
    "useful-links": "有用連結",
    copyright: "版權所有 © 2024 Mama Mia。",
    "newsletter-subscribe": "訂閱",
    "newsletter-subscribe-form": "電子報訂閱表格",
    "newsletter-subscribe-success": "感謝您訂閱我們的電子報！",
    "newsletter-subscribe-error": "訂閱我們的電子報時出錯。請稍後再試。",
    "navbar-menu": "菜單",
    "navbar-about": "關於我們",
    "navbar-contact": "聯繫我們",
    "navbar-home": "首頁",
    "Menu-title": "特色飲品",
    "drink-1-title": "頂級咖啡",
    "drink-1-description":
      "沉浸在我們精心製作的頂級咖啡混合物的迷人魅力中。每一口都將在您的味蕾上展開豐富而芳香的交響樂。我們精心挑選的咖啡豆經過巧妙的混合，完美地融合了各種風味。請享受這款滑順而令人滿足的口感，喚醒您的感官，讓您無法抗拒。加入我們，體驗無與倫比的咖啡之旅，提升您的早晨，陶醉於美味之中。",
    "drink-2-title": "手工調製雞尾酒套裝",
    "drink-2-description":
      "擁抱調酒藝術，以我們精緻的手工調製雞尾酒套裝給您的客人留下深刻印象。我們精選的高級烈酒、調和劑和裝飾品將提升您的調酒技巧。憑藉我們精心挑選的材料，您可以在家中輕鬆製作出各種誘人的雞尾酒。無論您是經驗豐富的調酒師還是新手愛好者，我們的雞尾酒套裝都非常適合喜愛飲酒並欣賞調酒藝術的人。",
    "drink-3-title": "芝士選集",
    "drink-3-description":
      "品味我們的工藝芝士選集，其中包括來自當地農場的各種手工製作的芝士。每種芝士都經過精心陳年，提供獨特而豐富的風味。探索由當地芝士師傅精心製作的風味交響樂，激情與傳統相融合。每種芝士都經過精心陳年，呈現出豐富的質地和風味的完美結合。從柔滑而溫和的芝士到豪邁而濃郁的芝士，我們的選集提供了多樣化的芝士，將提升您的芝士盤體驗到新的高度。沉浸在這個美食的享受中，品味真正的工藝。",
    "drink-4-title": "莫吉托",
    "drink-4-description":
      "莫吉托是一款由朗姆酒、新鮮薄荷、青檸汁、糖和蘇打水製成的經典雞尾酒。以最上等的朗姆酒、手摘的新鮮薄荷葉、活潑的青檸汁、一點糖和熱情的蘇打水，這款經典酒品展現了令人耳目一新的風味。每一口都揭示了一個風味的交響樂，朗姆酒的豐富與青檸汁的柑橘風味相融，而糖和蘇打水的甜度和酸味則增添了完美的平衡。享受這款風味平衡的美酒，品味調酒的藝術。乾杯，向調酒的藝術致敬！",
    "drink-5-title": "老式雞尾酒",
    "drink-5-description":
      "沉浸在老式雞尾酒的魅力中，這是一款代表著精緻和優雅的永恆傑作。這款經典混合物融合了波旁威士忌的豐富、糖的微甜、苦艾酒的複雜和橙皮的誘人風味。每一口都展現了一個風味的交響樂，波旁威士忌的柔滑與橙的香氣交織在一起，營造出一種超越時空的感官體驗。沉浸在這款標誌性雞尾酒的優雅中，品味傳統和現代的完美平衡。舉杯向老式的持久傳奇致敬。乾杯！",
    "drink-6-title": "紅餐酒",
    "drink-6-description":
      "擁抱紅餐酒雞尾酒的活力，這是一款令人興奮的風味融合。這款迷人的酒品將順滑的伏特加與酸甜的蔓越莓汁、微妙的橙利口酒和清新的青檸汁融合在一起。每一口都展現了一個風味的交響樂，蔓越莓的酸味與柑橘的風味和諧共舞，營造出完美平衡且令人振奮的調和。沉浸在紅餐酒的活力中，讓這款標誌性雞尾酒將您帶入一個充滿精緻和刺激的世界。乾杯，向紅餐酒的體驗致敬！",
    "drink-7-title": "曼哈頓",
    "drink-7-description":
      "提升您的味蕾，感受曼哈頓雞尾酒的永恆精緻。這款精緻混合物結合了威士忌的豐富複雜性、甜味苦艾酒的柔滑甜美和少許香草苦艾酒的芳香。每一口都會讓您陶醉於風味的交響樂中，威士忌的豐滿與苦艾酒的豐富風味交織，而苦艾酒和香草苦艾酒則增添了微妙的深度。無論您是在一天結束後放鬆身心，還是慶祝特殊場合，曼哈頓雞尾酒都是優雅品味和高雅氣質的象徵。沉浸於它的魅力中，品味調酒的藝術。乾杯，向曼哈頓致敬！",
    "drink-8-title": "薩扎拉克",
    "drink-8-description":
      "讓自己沉浸在薩扎拉克雞尾酒的活力中，這是一款代表著紐奧良活力的標誌性酒品。這款經典雞尾酒融合了黑麥威士忌的大膽、艾布森的迷人香氣、少許糖和Peychaud's苦艾酒的芳香。每一口都展現了一個風味的交響樂，黑麥威士忌的豐滿與艾布森的微妙草本風味交織在一起，而糖和苦艾酒則增添了甜度和複雜性的完美平衡。沉浸在薩扎拉克雞尾酒的永恆魅力中，讓其豐富的傳統體驗感動您的感官。乾杯，向紐奧良的精神致敬！",
    "drink-9-title": "琴通",
    "drink-9-description":
      "以琴通雞尾酒的永恆魅力解渴。這款清爽的酒品結合了琴酒的清爽、通寧水的氣泡和一片新鮮青檸的活力。每一口都迎接著琴酒的植物香氣與通寧水的微妙苦味相融，而青檸則增添了一絲柑橘清新的風味。無論您是在陽光明媚的日子裡休閒，還是享受夜晚出門的時刻，琴通是放鬆和享受的完美伴侶。舉杯慶祝這款經典雞尾酒的簡單而精緻的愉悅。乾杯！",
    "drink-10-title": "戴奇利",
    "drink-10-description":
      "沉浸在戴奇利雞尾酒的清新簡潔中，這是一款由朗姆酒、青檸汁和糖混合而成的經典酒品，將您帶入熱帶天堂。這款經典酒品是夏天的終極飲品，提供清爽和振奮的體驗。每一口都以完美的甜度和酸度平衡來撫慰您的味蕾，朗姆酒的柔滑與青檸的酸味和糖的甜度完美融合。為了增添額外的清新感，可加入一片檸檬或一枝薄荷。沉浸在戴奇利的簡單愉悅中，讓它的熱帶魅力將您帶入純粹的幸福和放鬆的時刻。乾杯，向完美的夏日飲品致敬！",
    "drink-11-title": "威士忌酸",
    "drink-11-description":
      "以威士忌酸雞尾酒的酸甜平衡感受完美。這款美味的酒品結合了威士忌的豐富、檸檬汁的酸爽和一絲甜味，創造出風味的和諧。每一口都展現了一個風味的交響樂，威士忌的豐富與檸檬汁的清爽柑橘風味交織，而甜味則增添了愉快的對比。無論您是在一天結束後放鬆身心，還是享受社交聚會，威士忌酸是一款永恆的經典，永遠令人愉悅。舉杯，品味這款心愛酒品的酸爽悅人。乾杯！",
    "drink-12-title": "馬提尼",
    "drink-12-description":
      "以馬提尼雞尾酒的經典優雅感受永恆的優雅。這款經典酒品，以琴酒或伏特加和一絲干味苦艾酒製成，是精緻和優雅的象徵。每一口都展現了風味的和諧，烈酒的柔滑與干味苦艾酒微妙的草本風味交織，創造出一款既柔滑又複雜的酒品。作為裝飾，您可以選擇傳統的橄欖或一絲檸檬，增添視覺吸引力和微妙的柑橘清新風味。無論您喜歡搖勻還是攪拌，馬提尼是永恆魅力的象徵，是任何場合的完美選擇。舉杯，慶祝這款經典酒品的優雅。乾杯！",
  },
  "zh-hans": {
    title: "欢迎来到MamaMia酒吧",
    subtitle: "体验最佳饮品和充满活力的氛围...",
    "unwind-and-enjoy": "放松并享受",
    "discover-your-favorite": "发现您喜爱的饮品",
    "discover-new-drinks": "探索新的饮品",
    "drink-selection": "精心调制的美酒选择",
    "drink-selection-1": "尽情享受我们精心调制的美酒。",
    "drink-selection-2": "我们的专业调酒师使用最优质的原料制作独特的口感。",
    "drink-selection-3":
      "无论您喜欢经典还是创新的鸡尾酒，我们都有适合每个人的选择。",
    "drink-selection-4": "加入我们，在MamaMia酒吧体验调酒的艺术。",
    "join-us": "加入MamaMia酒吧",
    "enjoy-the-nightlife": "体验充满活力的夜生活和难忘时刻。",
    "visit-our-menu": "访问我们的菜单，探索我们的饮品选择，找到您完美的一杯。",
    "footer-link": "Mama Mia",
    "rights-reserved": "版权所有。",
    "language-select": "语言选择",
    "language-select-en": "英语",
    "language-select-zh-hant": "繁体中文",
    "language-select-zh-hans": "简体中文",
    "language-select-ja": "日语",
    home: "首页",
    menu: "菜单",
    about: "关于我们",
    contact: "联系我们",
    address: "纽约，纽约州",
    phone: "电话：",
    email: "电子邮件：",
    website: "网站：",
    "useful-links": "有用链接",
    copyright: "版权 © 2024 Mama Mia。",
    "newsletter-subscribe": "订阅",
    "newsletter-subscribe-form": "订阅通讯",
    "newsletter-subscribe-success": "感谢您订阅我们的通讯！",
    "newsletter-subscribe-error": "订阅通讯时出错，请稍后再试。",
    "navbar-menu": "菜单",
    "navbar-about": "关于我们",
    "navbar-contact": "联系我们",
    "navbar-home": "首页",
    "Menu-title": "特色饮品",
    "drink-1-title": "优质咖啡 ",
    "drink-1-description":
      "品尝我们精心挑选的咖啡豆制成的优质咖啡，感受浓郁的风味和香气。这款咖啡口感顺滑，令人满足。 / 沉浸在我们精心制作的顶级咖啡混合物的迷人魅力中。每一口都将在您的味蕾上展开丰富而芳香的交响乐。我们精心挑选的咖啡豆经过巧妙的混合，完美地融合了各种风味。请享受这款顺滑而令人满足的口感，唤醒您的感官，让您无法抗拒。加入我们，体验无与伦比的咖啡之旅，提升您的早晨，陶醉于美味之中。",
    "drink-2-title": " 手工调制鸡尾酒套装",
    "drink-2-description":
      "用我们的手工鸡尾酒套装提升您的家庭酒吧水平。套装包括各种优质烈酒、混合饮料和装饰品，让您在家中制作美味的鸡尾酒。 / 拥抱调酒艺术，以我们精致的手工调制鸡尾酒套装给您的客人留下深刻印象。我们精选的高级烈酒、调和剂和装饰品将提升您的调酒技巧。凭借我们精心挑选的材料，您可以在家中轻松制作出各种诱人的鸡尾酒。无论您是经验丰富的调酒师还是新手爱好者，我们的鸡尾酒套装都非常适合喜爱饮酒并欣赏调酒艺术的人。",
    "drink-3-title": "工艺奶酪",
    "drink-3-description":
      "品尝我们的工艺奶酪，包括来自当地农场的各种手工制作奶酪。每种奶酪都经过精心陈化，提供独特而丰富的口感。 / 品味我们的工艺芝士选集，其中包括来自本地农场的各种手工制作的芝士。每种芝士都经过精心陈年，提供独特而丰富的风味。探索由本地芝士师傅精心制作的风味交响乐，激情与传统相融合。每种芝士都经过精心陈年，呈现出丰富的质地和风味的完美结合。从柔滑而温和的芝士到豪迈而浓郁的芝士，我们的选集提供了多样化的芝士，将提升您的芝士拼盘体验到新的高度。沉浸在这个美食的享受中，品味真正的工艺。",
    "drink-4-title": "Mojito / 莫吉托",
    "drink-4-description":
      "一款经典鸡尾酒，由朗姆酒、新鲜薄荷、青柠汁、糖和苏打水制成。 / 莫吉托是一款由朗姆酒、新鲜薄荷、青柠汁、糖和苏打水制成的经典鸡尾酒。以最上等的朗姆酒、手摘的新鲜薄荷叶、活泼的青柠汁、一点糖和令人振奋的苏打水，这款经典酒品展现了令人耳目一新的风味。",
    "drink-5-title": "Old Fashioned / 老式雞尾酒",
    "drink-5-description":
      "一款经典混合饮料，由波旁威士忌、糖、苦艾酒和一片橙皮制成。 / 沉浸在老式鸡尾酒的魅力中，这是一款代表着精致和优雅的永恒杰作。这款经典混合物融合了波旁威士忌的丰富、糖的微甜、苦艾酒的复杂和橙皮的诱人风味。",
    "drink-6-title": "Cosmopolitan / 红餐酒",
    "drink-6-description":
      "一款鲜艳的混合饮料，由伏特加、蔓越莓汁、橙利口酒和青柠汁制成。 / 拥抱红餐酒鸡尾酒的活力，这是一款令人兴奋的风味融合。这款迷人的酒品将顺滑的伏特加与酸甜的蔓越莓汁、微妙的橙利口酒和清新的青柠汁融合在一起。",
    "drink-7-title": "Manhattan / 曼哈顿",
    "drink-7-description":
      "一款精致混合饮料，由威士忌、甜味苦艾酒和少许苦味制成。 / 提升您的味蕾，感受曼哈顿鸡尾酒的永恒精致。这款精致混合物结合了威士忌的丰富复杂性、甜味苦艾酒的柔滑甜美和少许香草苦艾酒的芳香。",
    "drink-8-title": "Sazerac / 萨扎拉克",
    "drink-8-description":
      "一款新奥尔良经典鸡尾酒，由黑麦威士忌、苦艾酒、糖和Peychaud苦艾酒制成。 / 让自己沉浸在萨扎拉克鸡尾酒的活力中，这是一款代表着纽奥尔良活力的标志性酒品。这款经典鸡尾酒融合了黑麦威士忌的大胆、艾布森的迷人香气、少许糖和Peychaud's苦艾酒的芳香。",
    "drink-9-title": "Gin and Tonic / 琴通",
    "drink-9-description":
      "一款清爽的混合饮料，由金酒、汤尼水和一挤新鲜青柠汁制成。 / 以琴通鸡尾酒的永恒魅力解渴。这款清爽的酒品结合了琴酒的清爽、通宁水的气泡和一片新鲜青柠的活力。",
    "drink-10-title": "Daiquiri / 戴奇利",
    "drink-10-description":
      "一款由朗姆酒、青柠汁和糖制成的简单而美味的混合饮料。 / 沉浸在戴奇利鸡尾酒的清新简洁中，这是一款由朗姆酒、青柠汁和糖混合而成的经典酒品，将您带入热带天堂。",
    "drink-11-title": "Whiskey Sour / 威士忌酸",
    "drink-11-description":
      "一款由威士忌、柠檬汁和少许甜味制成的酸爽混合饮料。 / 以威士忌酸雞尾酒的酸甜平衡感受完美。这款美味的酒品结合了威士忌的丰富、柠檬汁的酸爽和一丝甜味，创造出风味的和谐。",
    "drink-12-title": "Martini / 马提尼",
    "drink-12-description":
      "一款经典鸡尾酒，由金酒（或伏特加）和少量干味美酒制成，搭配橄榄或柠檬皮装饰。 / 以马提尼雞尾酒的经典优雅感受永恒的优雅。这款经典酒品，以琴酒或伏特加和一丝干味苦艾酒制成，是精致和优雅的象征。作为装饰，您可以选择传统的橄榄或一丝柠檬，增添视觉吸引力和微妙的柑橘清新风味。",
  },
  ja: {
    title: "ママミアバーへようこそ",
    subtitle: "最高のドリンクと活気ある雰囲気を體験してください。",
    "unwind-and-enjoy": "リラックスしてお楽しみください",
    "discover-new-drinks": "新しいドリンクを見つける",
    "discover-your-favorite": "お気に入りを見つける",
    "drink-selection": "洗練されたカクテルのクラフト",
    "drink-selection-1": "手作りのカクテルを堪能してください。",
    "drink-selection-2":
      "當店のエキスパートなミキショロジストが最高の材料を使用してユニークな味わいを生み出します。",
    "drink-selection-3":
      "クラシックなカクテルから革新的なカクテルまで、お好みのカクテルがきっと見つかります。",
    "drink-selection-4": "ママミアバーでミキソロジーの芸術を體験しましょう。",
    "join-us": "ママミアバーへのご參加をお待ちしています",
    "enjoy-the-nightlife":
      "活気あるナイトライフと忘れられい瞬間を體験してください。",
    "visit-our-menu":
      "當店のメニューをご覧いただき、お好みのドリンクを見つけてください。",
    "footer-link": "ママミア",
    "rights-reserved": "著作権所有。",
    "language-select": "言語",
    "language-select-en": "英語",
    "language-select-zh-hant": "繁體中文",
    "language-select-zh-hans": "簡體中文",
    "language-select-ja": "日本語",
    home: "ホーム",
    menu: "メニュー",
    about: "お店について",
    contact: "お問い合わせ",
    address: "ニューヨーク、NY",
    phone: "電話番號：",
    email: "メール：",
    website: "ウェブサイト：",
    "useful-links": "便利なリンク",
    copyright: "© 2024 ママミア。全著作権所有。",
    "newsletter-subscribe": "購読する",
    "newsletter-subscribe-form": "ニュースレター購読フォーム",
    "newsletter-subscribe-success":
      "ニュースレターの購読ありがとうございます！",
    "newsletter-subscribe-error":
      "ニュースレターの購読中にエラーが発生しました。後でもう一度お試しください。",
    "navbar-menu": "メニュー",
    "navbar-about": "お店について",
    "navbar-contact": "お問い合わせ",
    "navbar-home": "ホーム",
    "Menu-title": "精選飲品",
    "drink-1-title": "プレミアムコーヒーブレンド",
    "drink-1-description":
      "魅惑的な魅力に浸って、丹念に作られたプレミアムコーヒーブレンドを楽しんでください。豊かで芳醇なシンフォニーが口に広がります。厳選されたコーヒー豆を手作業で完璧にブレンドし、調和の取れた味わいを実現しました。感覚を目覚めさせ、もっと飲みたくなるような滑らかで満足感のある味わいをお楽しみください。朝を彩り、味蕾を魅了する非凡なコーヒー体験にぜひご参加ください。",
    "drink-2-title": "手作りカクテルセット",
    "drink-2-description":
      "ミクソロジーの芸術を受け入れ、当店の精巧な手作りカクテルセットでゲストを感動させてください。当店のプレミアムなスピリッツ、ミキサー、ガーニッシュは、あなたのカクテルのレベルを新たな高みに引き上げます。厳選された材料で、自宅でさまざまな魅惑的なカクテルを作ることができます。経験豊富なバーテンダーでも初心者の愛好家でも、カクテルセットは飲むことが好きでミクソロジーの芸術を高く評価する人に最適です。",
    "drink-3-title": "アルティザンチーズセレクション",
    "drink-3-description":
      "地元の農場で手作りされた様々なチーズを取り揃えた、アルティザンチーズセレクションを堪能してください。各チーズは完熟され、独特な風味を提供します。地元のチーズ職人が作り上げる味のシンフォニーを発見してください。各チーズは愛情を込めて完熟させ、テクスチャーと風味の調和が魅力です。クリーミーでマイルドなものからボールドで風味豊かなものまで、当店のセレクションはチーズボードの体験を新たな高みに引き上げます。この美食の喜びにぜひふけり、真の職人技のエッセンスを味わってください。",
    "drink-4-title": "モヒート",
    "drink-4-description":
      "ラム、新鮮なミント、ライムジュース、砂糖、ソーダ水を使用したクラシックカクテルです。最上のラム、選りすぐりの新鮮なミントの葉、爽やかなライムジュース、ほんのり甘い砂糖、さわやかなソーダ水のスプラッシュが、爽やかなフレーバーのシンフォニーを奏でます。ラムの豊かさがライムジュースの柑橘系のノートと調和し、砂糖とソーダ水の甘さと酸味が完璧なバランスを加えます。完璧なフレーバーのバランスを楽しんで、カクテルの完成度を味わってください。カクテルの芸術に乾杯！",
    "drink-5-title": "オールドファッション",
    "drink-5-description":
      "オールドファッションカクテルの魅力に浸って、洗練と上品さを体現した不朽の名作を堪能してください。このクラシックなブレンドは、��ーボンの豊かさ、砂糖の微妙な甘さ、ビターズの複雑さ、そしてオレンジの皮の鮮やかな風味が調和しています。一口ごとにフレーバーのシンフォニーが広がり、バーボンのなめらかさがオレンジの香りと絡み合い、時間を超えた感覚を生み出します。この象徴的なカクテルのエレガンスにひたり、伝統と現代性の完璧なバランスを味わってください。オールドファッションの不朽の遺産に乾杯！",
    "drink-6-title": "コスモポリタン",
    "drink-6-description":
      "コスモポリタンカクテルの活気あるスピリットに包まれ、感覚を刺激するフレーバーの融合を楽しんでください。この魅惑的なカクテルは、滑らかなウォッカと酸味のあるクランベリージュースの魅力に、さわやかなオレンジリキュールの微妙な甘さとさわやかなライムジュースを加えたものです。一口ごとに、クランベリーの酸味が柑橘系のノートと調和し、完璧なバランスのさわやかなカクテルが生まれます。都会的なライフスタイルに浸り、この象徴的なカクテルによって洗練と興奮の世界へと旅立ちましょう。コスモポリタンの体験に乾杯！",
    "drink-7-title": "マンハッタン",
    "drink-7-description":
      "マンハッタンカクテルの永遠の洗練を味わってください。この絶妙なブレンドは、ウイスキーの豊かな複雑さ、スイートベルモットのなめらかな甘さ、そして少量の芳香ビターズを組み合わせています。一口ごとに、ウイスキーの風味の豊かさがベルモットの豊かなノートと絡み合い、ビターズが微妙な深みを加えます。長い一日の終わりにリラックスしたり、特別な場を祝ったりするときに、マンハッタンカクテルは洗練された味とエレガンスの象徴です。その魅力に浸り、カクテルの職人技を堪能してください。マンハッタンに乾杯！",
    "drink-8-title": "サザラック",
    "drink-8-description":
      "サザラックカクテルの象徴的な魅力によって、活気あるニューオーリンズの街に浸ってください。このクラシックなカクテルは、ライウイスキーの大胆さ、アブサンの魅惑的なエッセンス、少量の砂糖、そしてペイショーズビターズの芳醇な魅力を組み合わせています。一口ごとに、ライウイスキーの豊かさがアブサンの微妙なハーブのノートと調和し、砂糖とビターズが甘さと複雑さの完璧なバランスを加えます。サザラックカクテルのタイムレスな魅力にひたり、その豊かな歴史に触れて感覚を魅了してください。ニューオーリンズのスピリットに乾杯！",
    "drink-9-title": "ジントニック",
    "drink-9-description":
      "ジントニックカクテルの永遠の魅力で喉を潤してください。このさわやかなカクテルは、ジンの爽やかさ、トニックウォーターのシュワシュワ感、そしてフレッシュなライムの爽やかな酸味を組み合わせています。一口ごとに、ジンのボタニカルなノートがトニックウォーターの微妙な苦味と絡み合い、ライムの爽やかな風味がシトラスの爽快感を加えます。晴れた日にくつろいだり、夜の外出を楽しんだりするときに、ジントニックはリラックスと贅沢なひとときの完璧な相棒です。グラスを持ち上げ、このクラシックカクテルのシンプルで洗練された喜びを祝福しましょう。ジントニックに乾杯！",
    "drink-10-title": "ダイキリ",
    "drink-10-description":
      "ダイキリカクテルの爽快なシンプルさに浸って、ラム、ライムジュース、砂糖があなたを熱帯の楽園へと連れて行きます。このクラシックなカクテルは、さわやかで活気に満ちた体験を提供します。一口ごとに、ラムのなめらかさがライムの爽やかさと砂糖との絶妙なバランスを生み出します。さらなる新鮮さを加えるために、レモンのスライスやミントの枝で飾り付けることもできます。ダイキリのシンプルな喜びにひたり、その熱帯の魅力に身を委ねて純粋な幸福とリラックスのひとときを体験してください。完璧な夏のドリンクに乾杯！",
    "drink-11-title": "ウイスキーサワー",
    "drink-11-description":
      "ウイスキーサワーカクテルで酸味と甘さの完璧なバランスを体験してください。この楽しいカクテルは、ウイスキーの豊かさ、レモンジュースの爽やかな酸味、そして少量の甘さを組み合わせて、調和の取れた味わいを作り出します。一口ごとに、ウイスキーの豊かさがさわやかなレモンの香りと絡み合い、甘さが酸味との鮮やかな対比を加えます。長い一日の終わりにリラックスしたり、社交の場で楽しんだりするときには、ウイスキーサワーはいつでも喜ばれる不朽のクラシックです。グラスを持ち上げ、愛されるカクテルの酸味の喜びを味わってください。ウイスキーサワーに乾杯！",
    "drink-12-title": "マティーニ",
    "drink-12-description":
      "象徴的なマティーニカクテルの世界に足を踏み入れて、時を超えた優雅さを体験してください。このクラシックなカクテルは、ジンまたはウォッカと少量のドライベルモットで作られ、洗練と上品さの象徴です。一口ごとに、スピリッツのなめらかさがベルモットの微妙なハーブのノートと絡み合い、滑らかで複雑なドリンクが生まれます。ガーニッシュには、伝統的なオリーブまたはレモンのツイストのいずれかを選ぶことができます。シェイクするかステアするかにかかわらず、マティーニは時を超えた魅力の象徴であり、あらゆる場面にふさわしい選択肢です。グラスを持ち上げ、このクラシックカクテルのエレガンスを祝福しましょう。マティーニに乾杯！",
  },
};

const languageMap_about = {
  en: {
    "about-title": "About MamaMia Bar",
    "about-h2-1": "What is MamaMia Bar?",
    "about-p1":
      "MamaMia Bar is a bar located in the city of New York. It is a place where people can enjoy a drink and have a good time. Our bar offers a wide selection of beverages, including cocktails, beers, and spirits. We also have a friendly and welcoming atmosphere, making it the perfect place to hang out with friends or meet new people.",
    "about-h2-2": "Our Staff",
    "about-p2":
      "At MamaMia Bar, we strive to provide excellent service and create memorable experiences for our customers. Our staff is knowledgeable and passionate about mixology, ensuring that every drink is crafted with care and precision. Whether you're looking for a classic cocktail or a unique creation, our talented bartenders will exceed your expectations.",
    "about-h2-3": "Our History",
    "about-p3":
      "Our bar is also known for its vibrant and lively events. From live music performances to themed parties, there's always something exciting happening at MamaMia Bar. We believe in creating a fun and energetic environment where people can dance, socialize, and have a great time.",
    "about-h2-4": "Our Mission",
    "about-p4":
      "Visit MamaMia Bar today and experience the vibrant nightlife of New York City. We look forward to serving you!",
  },
  "zh-hant": {
    "about-title": "關於 MamaMia 酒吧",
    "about-h2-1": "什麼是 MamaMia 酒吧？",
    "about-p1":
      "MamaMia 酒吧位於紐約，紐約州。它是一個讓人可以喝飲料和一起過去的地方。我們酒吧提供了一個很大的飲料選擇，包括飲料、糖果和酒精。我們也有一個歡迎和友善的環境，使得它是一個非常適合和聯繫朋友或新人的地方。",
    "about-h2-2": "我們的員工",
    "about-p2":
      "在 MamaMia 酒吧，我們努力提供令人驕傲的服務和創造興趣的熱情。我們的員工是一群知識和憧憬的混合飲料家，保證每一飲料都是創造精巧的。不管你是想要一個經典飲料或一個非常有趣的创作，我們的傾聽飲料師都會超越你的期待。",
    "about-h2-3": "我們的歷史",
    "about-p3":
      "我們酒吧也是一個非常活躍的地方。從聽音樂演出到主題性派對，我們都有一個極適合的環境。我們相信在我們的環境中，人們可以一起舞蹈、一起讀書、一起享受興趣。",
    "about-h2-4": "我們的任務",
    "about-p4":
      "今天，訪問 MamaMia 酒吧，可以了解紐約的興趣夜life。我們期待服務您！",
  },
  "zh-hans": {
    "about-title": "关于 MamaMia 酒吧",
    "about-h2-1": "什么是 MamaMia 酒吧？",
    "about-p1":
      "MamaMia 酒吧位于纽约，纽约州。它是一家让人可以喝饮料和一起过去的地方。我们酒吧提供了一个很大的饮料选择，包括饮料、糖果和酒精。我们也有一种愉快和友好的环境，使得它是一家非常适合和联系朋友或新人的地方。",
    "about-h2-2": "我们的员工",
    "about-p2":
      "在 MamaMia 酒吧，我们努力提供令人驕傲的服务和创造兴趣的热情。我们的员工是一群知识和憧憬的混合饮料家，保证每一饮料都是创造精巧的。不管你是想要一种经典饮料或一种非常有趣的创作，我们的厨师都会超越你的期待。",
    "about-h2-3": "我们的历史",
    "about-p3":
      "我们酒吧也是一家非常活跃的地方。从听音乐演出到主题性派对，我们都有一种极其适合的环境。我们相信在我们的环境中，人们可以一起舞蹈、一起读书、一起享受兴趣。",
    "about-h2-4": "我们的任务",
    "about-p4":
      "今天，访问 MamaMia 酒吧，可以了解纽约的舒适夜life。我们期待服务您！",
  },
  ja: {
    "about-title": "ママミアバーへようこそ",
    "about-h2-1": "ママミアバーとは？",
    "about-p1":
      "ママミアバーは、ニューヨーク、ニューヨーク州にある一家の酒場です。人々が飲み飲みして、楽しい時間を過ごすことができます。ママミアバーは、飲料の大きな選択肢と、コックテル、ビール、スピリッツ、および酸爽な飲料を提供しています。また、友好した環境と、人々が一緒に飲み飲みして楽しんでいることを目指しています。",
    "about-h2-2": "ママミアバーの役員",
    "about-p2":
      "ママミアバーは、飲料の高品質な服務と、興味深い飲料を作り、人々に楽しい時間を過ごすことを目指しています。役員は、知識と憧れの混合飲料家として、飲料の作り方を詳細に理解し、精巧に作ります。飲料の種類によっては、特定の飲料を選択することができます。",
    "about-h2-3": "ママミアバーの歴史",
    "about-p3":
      "ママミアバーは、ニューヨークの興味深い夜lifeを楽しんでいる地方です。音楽の演奏、主題性の派对、および人々が一緒に飲み飲みして楽しんでいることを目指しています。ママミアバーは、興味深い夜lifeを楽しむための環境を提供しています。",
    "about-h2-4": "ママミアバーの任務",
    "about-p4":
      "今日、ママミアバーに行って、ニューヨークの興味深い夜lifeを楽しんでいます。私たちは、あなたにとって最高の服務を提供しています！",
  },
};
const languageMap_Context = {
  en: {
    "contact-title": "Contact Us",
    "contact-description":
      "We're always looking for ways to improve our services and create a better experience for our customers.",
    "contact-title-form": "Send us a message",
    "contact-form-name-error": "Please enter only letters and numbers.",
    "contact-form-email-error": "Please enter a valid email address.",
    "contact-form-message-error": "Please enter only letters and numbers.",
    "contact-form-checkbox-error": "Please select a checkbox.",
  },
  "zh-hant": {
    "contact-title": "聯繫我們",
    "contact-description": "我們儘量探索改善我們的服務並創造更好的客戶體驗。",
    "contact-title-form": "請給我們發送一則訊息。",
    "contact-form-name-error": "請輸入只包含字母和數字的字串。",
    "contact-form-email-error": "請輸入有效的電子郵件地址。",
    "contact-form-message-error": "請輸入只包含字母和數字的字串。",
    "contact-form-checkbox-error": "請選擇一個勾選框。",
  },
  "zh-hans": {
    "contact-title": "联系我们",
    "contact-description": "我们努力改进我们的服务并创造更好的客户体验。",
    "contact-title-form": "给我们发送消息",
    "contact-form-name-error": "请输入只包含字母和数字的字串。",
    "contact-form-email-error": "请输入有效的电子邮件地址。",
    "contact-form-message-error": "请输入只包含字母和数字的字串。",
    "contact-form-checkbox-error": "请选择一个复选框。",
  },
  ja: {
    "contact-title": "お問い合わせ",
    "contact-description":
      "私たちは、客観的な夜lifeを楽しむための環境を提供しています。",
    "contact-title-form": "メッセージを送信",
    "contact-form-name-error": "名前のみ英数字を入力してください。",
    "contact-form-email-error": "有効なメールアドレスを入力してください。",
    "contact-form-message-error": "メッセージのみ英数字を入力してください。",
    "contact-form-checkbox-error": "チェックボックスを選択してください。",
  },
};

window.onload = function () {
  const languageSelect = document.getElementById("language");
  const savedLanguage = localStorage.getItem("language") || "en";
  languageSelect.value = savedLanguage;
  updatePageLanguage(savedLanguage);

  languageSelect.addEventListener("change", function () {
    const selectedLanguage = this.value;
    localStorage.setItem("language", selectedLanguage);
    updatePageLanguage(selectedLanguage);
  });
};

function updatePageLanguage(language) {
  updateTranslations(language, languageMap);
  updateTranslations(language, languageMap_about);
  updateTranslations(language, languageMap_Context);
}

function updateTranslations(language, translations) {
  const languageTranslations = translations[language];
  for (const key in languageTranslations) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = languageTranslations[key];
    }
  }
}

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

function changeLanguage() {
  const selectedLanguage = languageSelect.value;
  localStorage.setItem("language", selectedLanguage);
  updatePageLanguage(selectedLanguage);
}

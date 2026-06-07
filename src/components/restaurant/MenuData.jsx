// @ts-ignore
import * as Images from '../../images/images.js';

export const menuData = {
  starters: {
    id: "starters",
    title: { en: "Appetizers", he: "מנות ראשונות", ar: "مقبلات" },
    items: [
      {
        name: { en: "Focaccia", he: "פוקאצ'ה מהטאבון", ar: "فوكاتشا من الطابون" },
        description: { en: "Served with house dips.", he: "מוגשת עם מטבלי הבית.", ar: "تُقدم مع مغمسات البيت." },
        price: "₪38", image: Images.focaccia
      },
      {
        name: { en: "Sirloin Carpaccio", he: "קרפצ'יו סינטה", ar: "كرباتشو سينتا" },
        description: { en: "Thinly sliced sirloin, pickled onions, seasonal fruit, parmesan, spiced sesame oil, arugula, and balsamic reduction.", he: "נתח סינטה פרוס דק עם בצל מוחמץ, פרי עונתי, פרמזן, שמן שומשום מתובל, רוקט, ובלסמי מצומצם.", ar: "شرائح سيرلوين رقيقة مع بصل مخلل، فاكهة موسمية، بارميزان، زيت سمسم متبل، جرجير وبلسميك مخفف." },
        price: "₪70", image: Images.carpaccio
      },
      {
        name: { en: "Vitello Tonnato", he: "ויטלו טונאטו", ar: "فيتيلو توناتو" },
        description: { en: "Thinly sliced veal, tuna cream, dried cherry tomatoes, capers, and pickled onions.", he: "פרוסות וייס פארטן דקות עם קרם טונה, עגבניות שרי מיובשות, צלפים,ובצל מוחמץ.", ar:"شرائح لحم عجل رقيقة مع كريم التونة، بندورة شيري مجففة، اللفت الالماني،بصل مخلل، ." },
        price: "₪80", image: Images.vitelloTonato
      },
      {
        name: { en: "Veal Tartare", he: "טרטר עגל", ar: "تارتار لحم العجل" },
        description: { en: "Seasoned raw beef, polenta toast, truffle aioli, and black eggplant cream.", he: "בשר בקר נא מתובל מוגש עם טוסט פולנטה, איולי כמהין וקרם חציל שחור.", ar: "لحم بقر نيئ متبل يُقدم مع توست بولينتا، صبيح، أيولي تروفل وكريم باذنجان أسود." },
        price: "₪70", image: Images.tartar
      },
      {
        name: { en: "Salmon Tabayoka", he: "סלמון טבייוקה", ar: "سالمون تابيوكا" },
        description: { en: "Chopped salmon, potato, carrot, and pecan nuts in a chipotle sauce coating over a tapioca crisp.", he: "סלמון קצוץ עם תפו״א, גזר ואגוזי פקאן בציפוי צ'יפוטלה על חטיף טאפיוקה.", ar: "سالمون مفروم مع تفاح، جزر وجوز بيكان بصلصة تشيبوتلي على رقائق التابيوكا." },
        price: "₪60", image: Images.salmonTabioka
      },
      {
        name: { en: "Arancini Pomodoro", he: "ארנצ'יני פומודורו", ar: "أرانشيني بومودورو" },
        description: { en: "Crispy risotto balls filled with mozzarella and tomato sauce on pesto cream.", he: "כדורי ריזוטו בציפוי פריך במילוי מוצרלה ורוטב עגבניות על מצע שמנת פסטו.", ar: "كرات ريزوتو مقرمشة محشوة بالموزاريلا وصلصة البندورة على كريمة البيستو." },
        price: "₪60", image: Images.arnchine
      },
      {
        name: { en: "Asado Croquette", he: "קרוקטה אסאדו", ar: "كروكيت أسادו" },
        description: { en: "Potato balls filled with beef asado, chipotle aioli, and pickled onions.", he: "כדורי תפוח אדמה במילוי אסאדו בקר על מצע איולי חריף מתוקה, סלק ובצל מוחמץ.", ar: "كرات بطاطا محشوة بأسادו لحم البقر على أيولي حار،وبصل مخلل." },
        price: "₪68", image: Images.assadoKroketa
      },
      {
        name: { en: "Mazzancolle al Limone", he: "שרimpes אל לימונה", ar: "قريدس بالليمون" },
        description: { en: "Crystal shrimp in lemon and herb butter sauce.", he: "שרimpes קריסטל ברוטב חמאת לימון ועשבי תיבול.", ar: "قريدس كريستال بصلصة زبدة الليمون والأعشاب." },
        price: "₪88", image: Images.shrimps
      },
    ]
  },


  salads: {
    id: "salads",
    title: { en: "Salads", he: "סלטים", ar: "سلطات" },
    items: [
      {
        name: { en: "Caesar Salad", he: "סלט קיסר", ar: "سلطة قيصر" },
        description: { en: "Romaine hearts, Caesar dressing, sourdough croutons, seasoned breadcrumbs, pickled onions, and parmesan.", he: "לבבות חסה, רוטב קיסר, קרעי לחם מחמצת, פרמזן ובצל מוחמץ.", ar: "قلوب الخس، صلصة قيصر، خبز محمص (ساوردو)، بارميزان وبصل مخلل." },
        price: "₪60", image: Images.cesar
      },
      {
        name: { en: "Cavolo Salad", he: "סלט קאבולו", ar: "سلطة كافولو" },
        description: { en: "Smoked beetroot and kohlrabi shreds, mozzarella cheese shreds, feta crumble, fresh hyssop leaves and balsamic vinaigrette.", he: "קרעי סלק וקולוראבי מעושנים תקרעי גבינת מוצרלה,קרמבל פטה עלי זעתר טריים וויניגרט בלסמי.", ar: "شرائح الشمندر المدخن والكرنب، وشرائح جبن الموزاريلا، وفتات جبن الفيتا، وأوراق الزعتر الطازجة، وصلصة الخل البلسمي." },
        price: "₪60", image: Images.cavolo
      },
      {
        name: { en: "Pomi Salad", he: "סלט פומי", ar: "سلطة بومي" },
        description: { en: "Tomato slices, burrata, olive oil, balsamic reduction, lemon zest, and pesto flakes.", he: "קרפצו עגבניות ת בוראטה תשרי צבעונית קרמבל זיתי קלמטה מיובש וקרספי פסטה", ar: "شرائح بندورة، بوراتا، زيت زيتون، بلسميك مخفف، برش ليمون وبيستو." },
        price: "₪60", image: Images.pomi
      },
      {
        name: { en: "Totani Salad", he: "סלט טוטני", ar: "سلطة توتاني" },
        description: { en: "Seared calamari, arugula, cherry tomatoes, red onion, and radishes.", he: "קלמרי סגול צרוב, עלי ארוגולה, עגבניות שרי, בצל סגול וצנונית.", ar: "كلاماري بنفسجي مشوي، جرجير، بندورة شيري، بصل بنفسجي وفجل." },
        price: "₪60", image: Images.totani
      },
      {
        name: { en: "Tabbouleh Salad", he: "סלט טבולה", ar: "سلطة تبولة" },
        description: { en: "Sunflower sprouts, cherry tomatoes, labneh, garlic cream, and toasted pita.", he: "נבטי חמניה, עגבניות שרי ולבנה בקרם שום, פיתה קלויה ושמנת חמוצה.", ar: "براعم دوار الشمس، بندورة شيري ولبنة بكريم الثوم، خبز محمص وكريمة حامضة." },
        price: "₪60", image: Images.tabouleh
      },
    ]
  },


  intermediate: {
    id: "intermediate",
    title: { en: "Intermediate & Mains", he: "ביניים ועיקריות", ar: "أطباق رئيسية" },
    items: [
      {
        name: { en: "Funghi Gnocchi", he: "ניוקי פונגי", ar: "نيوكي فطر" },
        description: { en: "Shimeji, peas, spinach, chestnuts, demi-glace cream, and basil caramel.", he: "שימאג'י, אפונה, תרד, ערמונים בקרם דמיגלאס וקרמל בזיליקום.", ar: "شيميجي، بازيلاء، سبانخ، كستناء بكريم ديمي جلاس وكاراميل الريحان." },
        price: "₪70", image: Images.gnocciFunghi    
      },
      {
        name: { en: "Verde Gnocchi", he: "ניוקי ורדה", ar: "نيوكي فيردي" },
        description: { en: "", he: "", ar: "" },
        price: "₪70", image: Images.gnocciVerde
      },
      {
        name: { en: "Shimeji Risotto", he: "ריזוטו שימאג'י", ar: "ريزوتو شيميجي" },
        description: { en: "Mushroom trio, demi-glace cream, and basil caramel.", he: "פטריות שימאג'י, דמיגלאס שמנת וקרמל בזיליקום.", ar: "فطر شيميجي، ديمي جلاس كريم وكاراميل الريحان." },
        price: "₪64", image: Images.rissotoShimagi
      },
      {
        name: { en: "Risotto San Marsano", he: "ריזוטו סן מרסנו", ar: "ريزوتو سان مارسنو" },
        description: { en: "", he: "", ar: "" },
        price: "₪64", image: Images.rissotoSanMarsano
      },
      {
        name: { en: "Scampi Risotto", he: "ריזוטו סקאמפי", ar: "ريزوتو سكامبي" },
        description: { en: "Spinach cream, broccoli, shrimp on the plancha, and artichoke caramel.", he: "קרם תרד, ברוקולי, שרימפס לבן על הפלאנצ'ה וקרמל ארטישוק.", ar: "كريم سبانخ، بروكلي، قريدس أبيض על البلانش וكاراميل الأرضي شوكي." },
        price: "₪88", image: Images.scampi
      },
      {
        name: { en: "Risotto allo scoglio", he: "ריזוטו אלו סקוגליו", ar: "ريزوتو ألو سكوغليو" },
        description: { en: "", he: "", ar: "" },
        price: "₪64", image: Images.rissotoAlloScoglio
      },
      {
        name: { en: "Salmon Risotto", he: "ריזוטו סלמון", ar: "ريزوتو سالمون" },
        description: { en: "Peas, dried cherry tomatoes, spinach, salmon on the plancha, and Persian lemon.", he: "אפונה, עגבניות שרי, תרד, סלמון על הפלאנצ'ה ולימון פרסי.", ar: "بازيلاء، بندورة شيري، سبانخ، سالمون על البلانش וليمون فارسي." },
        price: "₪92", image: Images.salmonRissoto
      },
      {
        name: { en: "saffron Risotto", he: "ריזוטו זעפרן", ar: "ريزوتو زعفران" },
        description: { en: "Veal stock, parmesan, slow-cooked beef ossobuco, and black onion powder.", he: "ציר עגל, פרמזן, תבשיל ארוך של אוסובוקו בקר ואבקת בצל שחור.", ar: "مرق العجل، بارميزان، أوسوبوكو لحم بقر مطبوخ طويلاً وبودرة بصل أسود." },
        price: "₪88", image: Images.zaafaran
      },
      {
        name: { en: "Risotto animelle", he: "ריזוטו אנימיל", ar: "ريزوتو انيميلي" },
        description: { en: "", he: "", ar: "" },
        price: "₪64", image: Images.rissotoAnimelle
      },
    ]
  },


  pasta: {
    id: "pasta",
    title: { en: "Pastas & Pizzas", he: "פסטות ופיצות", ar: "باستا وبيتزا" },
    items: [
      {
        name: { en: "Tomato Cream Pasta (Tre colore)", he: "פסטה קרם עגבניות", ar: "باستا كريم البندورة" },
        description: { en: "Spaghetti in nutmeg tomato cream, stracciatella cheese, and basil caramel.", he: "ספגטי ברוטב קרם עגבניות מוסקט עם גבינת סטרצ'יאטלה וקרמל בזיליקום.", ar: "سباغيتي بصلصة كريم البندورة وجوزة الطيب مع جبنة ستراتشياتيلا وكاراميل الريحان." },
        price: "₪72", image: Images.pastaCreamTomato
      },
      {
        name: { en: "Carbonara", he: "קרבונרה", ar: "كربونارا" },
        description: { en: "Lamb bacon, truffle cream, sage, and parmesan.", he: "בייקון טלה, שמנת כמהין, מרווה ופרמזן.", ar: "لحم ضأن مقدد، كريم تروفل، ميرمية وبارميزان." },
        price: "₪78", image: Images.carbonara
      },
      {
        name: { en: "Funghi", he: "פונגי", ar: "فطر" },
        description: { en: "Shimeji mushrooms, basil, truffle puree, truffle cream, and parmesan.", he: "פטריות שימאג'י, בזיליקום, מחית כמהין, שמנת כמהין, פרמזן.", ar: "فطر شيمיגي، ريحان، مهروس التروفل، كريم تروفل וبارميزן." },
        price: "₪68", image: Images.funghi
      },
      {
        name: { en: "Ossobuco Paccheri", he: "פאקרי אוסובוקו", ar: "باكيري أوسوبوكو" },
        description: { en: "Slow-cooked beef ossobuco and root vegetables.", he: "תבשיל ארוך של אוסובוקו בקר וירקות שורש.", ar: "لحم بقر أوسوبوكو مطبوخ لفترة طويلة وخضروات جذرية." },
        price: "₪78", image: Images.pakriAussubuko
      },
      {
        name: { en: "Pasta Nera", he: "פסטה נירה", ar: "باستا نيرو (سوداء)" },
        description: { en: "Seafood, fish stock, cherry tomatoes, and micro-basil.", he: "פירות ים, ציר דגים, עגבניות שרי, מיקרו בזיליקום.", ar: "ثمار البحر، مرق السمك، بندورة شيري וريحان صغير." },
        price: "₪92", image: Images.pastaNera
      },
      {
        name: { en: "Polenta Ravioli", he: "רביולי פולנטה", ar: "رافيولي بولينتا" },
        description: { en: "Corn cream, chestnuts, spinach, pasta crumble, and hyssop leaves.", he: "קרם תירס, ערמונים, תרד, קרמבל פסטה ועלי זעתר.", ar: "كريم ذرة، كستناء، سبانخ، فتات باستا وأوراق زعتر." },
        price: "₪78", image: Images.polenta
      },
      {
        name: { en: "Parmesan Ravioli", he: "רביולי פרמזן", ar: "رافيولي بارميزان" },
        description: { en: "Almond cream and almond crumble.", he: "קרם שמנת שקדים וקרמבל שקדים.", ar: "كريم لوز וفتات لوز." },
        price: "₪78", image: Images.raviolliParmisan
      },
      {
        name: { en: "Lasagna", he: "לוניה", ar: "لازانيا" },
        description: { en: "Fresh pasta sheets, veal bolognese ragu, root vegetables, béchamel, mozzarella, and parmesan.", he: "דפי פסטה טריים, ראגו אל בולונז, ירקות שורש, בשמל, מוצרלה, פרמזן.", ar: "شرائح باستا طازجة، راغو بولونيز عجل، خضروات جذرية، بيشاميل، موزاريلا وبارميزان." },
        price: "₪82", image: Images.lasagna
      },
      {
        name: { en: "Fagioli é ceci", he: "מקרוני פאג'ולי", ar: "ماكروني فاجولي" },
        description: { en: "White fish fillet on the plancha, lemon-chili fish stock, spicy red beans, and hummus spread.", he: "נתח פילה לברק על הפלאנצ'ה, על ציר דגי לימוני, שעועית אדומה חריפה, גרגירי חומוס.", ar: "فيليه سمك لبراك على البلانش، مرق سمك بالليمون، فاصولياء حمراء حارة وحبوب حمص." },
        price: "₪92", image:    Images.macroni
      },


      {
        name: { en: "Carbonara Pizza", he: "פיצה קרבונרה", ar: "بيتزا كربونارا" },
        description: { en: "Mozzarella, parmesan, truffle cream, lamb bacon, and fried onion.", he: "מוצרלה, פרמזן, שמנת כמהין, בייקון טלה ובצל מוזהב.", ar: "موزاريلا، بارميزان، كريم تروفل، لحم ضأن مقدد وبصل ذهبي." },
        price: "₪78", image: Images.pizzacarbonara
      },
      {
        name: { en: "Porcini Pizza", he: "פיצה פורצ'יני", ar: "بيتزا بورتشيني" },
        description: { en: "Mozzarella, parmesan, truffle cream, and shimeji mushrooms.", he: "מוצרלה, פרמזן, שמנת כמהין, שימאג'י.", ar: "موزاريلا، بارميزان، كريم تروفل وشيميجي." },
        price: "₪74", image: Images.pizzaporcini
      },
      {
        name: { en: "Pepperoni Pizza", he: "פיצה פפרוני", ar: "بيتزا ببروني" },
        description: { en: "Mozzarella, parmesan, tomato sauce, spicy salami, red onion, and Kalamata olives.", he: "מוצרלה פרמזן, רוטב עגבניות, סלמי מפולפל, בצל סגול, זיתי קלמטה.", ar: "موزاريلا، بارميزان، صلصة بندورة، سلامي متبل، بصل بنفسجي وزيتون كالاماتا." },
        price: "₪68", image: Images.pizzaPepproni
      },
      {
        name: { en: "Margherita Pizza", he: "פיצה מרגריטה", ar: "بيتزا مارغريتا" },
        description: { en: "Mozzarella, parmesan, and tomato sauce.", he: "מוצרלה, פרמזן, רוטב עגבניות.", ar: "موزاريلا، بارميزان וصلصة בנדورة." },
        price: "₪58", image: Images.pizzaMargarita 
      },
      {
        name: { en: "Ossobuco Pizza", he: "פיצה אוסובוקו", ar: "بيتزا أوسوبوكو" },
        description: { en: "Mozzarella, parmesan, corn cream, shredded beef ossobuco, jalapeño, and balsamic reduction.", he: "מוצרלה, פרמזן, קרם תירס, אוסובוקו בקר מפורק, חלפיניו ובלסמי מצומצם.", ar: "موزاريلا، بارميزان، كريم ذرة، أوسوبوكو لحم بقر مفتت، هلابينو وبلسميك مخفف." },
        price: "₪78", image: Images.pizzaOssubuko
      },
      {
        name: { en: "Verde Pizza", he: "פיצה ורדה", ar: "بيتزا فيردي (خضراء)" },
        description: { en: "Mozzarella, parmesan, corn cream, spinach, broccoli, green chili, and stracciatella cheese.", he: "מוצרלה, פרמזן, קרם תירס, תרד, ברוקולי, צ'ילי חריף וגבינת סטרצ'יאטלה.", ar: "موزاريلا، بارميزان، كريم ذرة، سبانخ، بروكلي، فلفل حار וجبنة ستراتשياتيلا." },
        price: "₪74", image: Images.pizzaVerde
      },
      {
        name: { en: "Frutti di Mare Pizza", he: "פיצה פירות ים", ar: "بيتزا ثمار البحر" },
        description: { en: "Mozzarella, parmesan, red curry cream, seafood, ginger, and green chili.", he: "מוצרלה, פרמזן, קרם קארי אדום, פירות ים, ג'ינג'ר, צ'ילי חריף ויוזו.", ar: "موزاريلا، بارميزان، كريم كاري أحمر، ثمار البحر، زنجبيل وفلفل حار." },
        price: "₪78", image: Images.pizzaSeafood
      },
    ]
  },

  meats: {
    id: "meats",
    title: { en: "Special Meats", he: "בשרים מיוחדים", ar: "لحوم خاصة" },
    items: [
      {
        name: { en: "Wagyu Fillet (220g)", he: "פילה וואגיו (220 גר')", ar: "فيليه واغيو (220 غرام)" },
        description: { en: "", he: "", ar: "" },
        price: "₪180", image: Images.fillet
      },
      {
        name: { en: "Wagyu Sirloin (220g)", he: "סינטה וואגיו (220 גר')", ar: "سيرلوين واغيو (220 غرام)" },
        description: { en: "", he: "", ar: "" },
        price: "₪160", image: Images.sienta
      },
      {
        name: { en: "Baladi Lamb Chops (300g)", he: "צלעות בלדי (300 גר')", ar: "ريش غنم بلدي (300 غرام)" },
        description: { en: "", he: "", ar: "" },
        price: "₪180", image: Images.ribs
      },
    ]
  },

 desserts: {
  id: "desserts",
  title: { en: "Desserts", he: "קינוח", ar: "حلويات" },
  items: [
    {
      name: { en: "Tiramisu", he: "טירמיסו", ar: "تيراميسو" },
      description: { en: "", he: "", ar: "" },
      price: "₪55", image: Images.tiramisu
    },
    {
      name: { en: "Limoncello Panna Cotta", he: "פנקוטה לימונצילו", ar: "بانا كوتا بالليمونتشيلو" },
      description: { en: "", he: "", ar: "" },
      price: "₪55", image: null
    },
    {
      name: { en: "Chocolate Mousse", he: "מוס שוקולד", ar: "موس شوكولاتة" },
      description: { en: "", he: "", ar: "" },
      price: "₪55", image: Images.moose
    },
    {
      name: { en: "Creme Brûlée", he: "קרם בורלי", ar: "كريم بلولي" },
      description: { en: "", he: "", ar: "" },
      price: "₪55", image: Images.creme
    },
    {
      name: { en: "Cheesecake", he: "עוגת גבינה", ar: "تشيز كيك" },
      description: { en: "", he: "", ar: "" },
      price: "₪55", image: Images.cheesecake
    },
  ]
}
};

export const menuCategories = {
  en: [
    { id: "starters", label: "Appetizers" },
    { id: "salads", label: "Salads" },
    { id: "intermediate", label: "Mains" },
    { id: "pasta", label: "Pasta & Pizza" },
    { id: "meats", label: "Meats" },
    { id: "desserts", label: "Desserts" },
  ],
  he: [
    { id: "starters", label: "ראשונות" },
    { id: "salads", label: "סלטים" },
    { id: "intermediate", label: "ביניים" },
    { id: "pasta", label: "פסטות ופיצות" },
    { id: "meats", label: "בשרים" },
    { id: "desserts", label: "קינוח" },
  ],
  ar: [
    { id: "starters", label: "مقبلات" },
    { id: "salads", label: "سلطات" },
    { id: "intermediate", label: "رئيسية" },
    { id: "pasta", label: "باستا وبيتزا" },
    { id: "meats", label: "لحوم" },
    { id: "desserts", label: "حلويات" },
  ],
};

export const languages = [
  { code: "en", label: "EN", dir: "ltr" },
  { code: "he", label: "עב", dir: "rtl" },
  { code: "ar", label: "AR", dir: "rtl" },
];
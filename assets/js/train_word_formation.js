//Массив с титулами таблицы и массив объектов с данными.

const tableTitlesArr = [{title: "Производное слово", place: "base"}, {title: "Слово", place: "word"}, {title: "Перевод пр. слова", place: "unicTransl"}, {title: "Перевод", place: "translation"}];
const paramGlobal = ['firstTransl', 'withoutKind'];
const globalArray = 
[
    {
        "word": "ελέγχω",
        "base": "έλεγχος",
        "groups": {
            "morfology": "<em>ελέγχω </em>→ έλεγχ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ω</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἐλέγχω</span> – посрамлять, исследовать, испытывать < <span style=\"color:#054728\">ἔλεγχος</span> – позор, опровержение)."
        },
        "qws": [
            "Проверять"
        ],
        "transls": [
            "От слова Έλεγχος — проверка"
        ],
        "translation": "Проверять",
        "kind": "Глаголы на -ω от существительных",
        "unicTransl": "Проверка",
        "notice": ""
    },
    {
        "word": "πυροβολώ",
        "base": "πυροβόλο",
        "groups": {
            "morfology": "<em>πυροβολώ </em>→ πυροβόλ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">πυροβόλο</span> – огнестрельное оружие, пушка."
        },
        "qws": [
            "Выстрелить"
        ],
        "transls": [
            "От слова Πυροβόλο — огнестрельное оружие, пушка"
        ],
        "translation": "Выстрелить",
        "kind": "Глаголы на -ω от существительных",
        "unicTransl": "Огнестрельное оружие, пушка",
        "notice": ""
    },
    {
        "word": "πολεμώ",
        "base": "πόλεμος",
        "groups": {
            "morfology": "<em>πολεμώ </em>→ πόλεμ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ω</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">πολεμῶ</span>, <span style=\"color:#054728\">πολεμέω</span> – воевать < <span style=\"color:#054728\">πόλεμος</span> – война)."
        },
        "qws": [
            "Воевать"
        ],
        "transls": [
            "От слова Πόλεμος — война"
        ],
        "translation": "Воевать",
        "kind": "Глаголы на -ω от существительных",
        "unicTransl": "Война",
        "notice": ""
    },
    {
        "word": "αγοράζω",
        "base": "αγορά",
        "groups": {
            "morfology": "<em>αγοράζω </em>→ αγορ<span style=\"color: #900101\">ά</span> +<span style=\"color: #900101\"> -άζω</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">ἀγορά</span> – собрание, товар."
        },
        "qws": [
            "Покупать"
        ],
        "transls": [
            "От слова Αγορά — покупка-вещь"
        ],
        "translation": "Покупать",
        "kind": "Глаголы на -άζω, -ιάζω от существительных",
        "unicTransl": "Покупка-вещь",
        "notice": ""
    },
    {
        "word": "δηλητηριάζω",
        "base": "δηλητήριο",
        "groups": {
            "morfology": "<em>δηλητηριάζω </em>→ δηλητήρ<span style=\"color: #900101\">ιο</span> +<span style=\"color: #900101\"> -ιάζω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">δηλητήριο</span> – яд < др.греч. (<span style=\"color:#054728\">δηλητήρῐον</span> < <span style=\"color:#054728\">δήλησις</span> < <span style=\"color:#054728\">δηλέομαι</span>)."
        },
        "qws": [
            "Отравить"
        ],
        "transls": [
            "От слова Δηλητήριο — яд"
        ],
        "translation": "Отравить",
        "kind": "Глаголы на -άζω, -ιάζω от существительных",
        "unicTransl": "Яд",
        "notice": ""
    },
    {
        "word": "δοξάζω",
        "base": "δόξα",
        "groups": {
            "morfology": "<em>δοξάζω </em>→ δόξ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -άζω</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">δόξα</span> - слава."
        },
        "qws": [
            "Славить"
        ],
        "transls": [
            "От слова Δόξα — слава"
        ],
        "translation": "Славить",
        "kind": "Глаголы на -άζω, -ιάζω от существительных",
        "unicTransl": "Слава",
        "notice": ""
    },
    {
        "word": "εμβολιάζω",
        "base": "εμβόλιο",
        "groups": {
            "morfology": "<em>εμβολιάζω </em>→ <span style=\"color: #900101\">εμ-</span> + βόλι<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -άζω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">εμβόλιο</span> – прививка < койне <span style=\"color:#054728\">ἐμβόλιον</span> – дротик, копьё < др.греч (<span style=\"color:#054728\">ἔμβολον</span> – клин; нос корабля < <span style=\"color:#054728\">ἐμβάλλω</span> – бросать, вкладывать, вставлять < <span style=\"color:#054728\">ἐμ-</span> (<span style=\"color:#054728\">ἐν-</span> / <span style=\"color:#054728\">ἐγ-</span>) (в, внутрь) + <span style=\"color:#054728\">βάλλω</span> – бросать, ударять)",
        },
        "qws": [
            "Делать прививку"
        ],
        "transls": [
            "От слова Εμβόλιο — прививка"
        ],
        "translation": "Делать прививку",
        "kind": "Глаголы на -άζω, -ιάζω от существительных",
        "unicTransl": "Прививка",
        "notice": ""
    },
    {
        "word": "επισκευάζω",
        "base": "επισκευή",
        "groups": {
            "morfology": "<em>επισκευάζω </em>→ <span style=\"color: #900101\">έπι-</span> + σκευ<span style=\"color: #900101\">ή</span> + <span style=\"color: #900101\">-άζω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">επι-</span> (обозначает следование, сопровождение; положение: на) + <span style=\"color:#054728\">σκευάζω</span> – изготовлять < др.греч. (<span style=\"color:#054728\">σκευάζω</span> < <span style=\"color:#054728\">σκεῦος</span> – сосуд или <span style=\"color:#054728\">σκευή</span> – оборудование)."
        },
        "qws": [
            "Ремонтировать"
        ],
        "transls": [
            "От слова Επισκευή — починка"
        ],
        "translation": "Ремонтировать",
        "kind": "Глаголы на -άζω, -ιάζω от существительных",
        "unicTransl": "Починка",
        "notice": ""
    },
    {
        "word": "κατσουφιάζω",
        "base": "κατσούφης",
        "groups": {
            "morfology": "<em>κοπιάζω </em>→ κατσούφ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -ιάζω</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">κατηφιάω</span> / <span style=\"color:#054728\">κατηφιῶ</span> – пасть духом < <span style=\"color:#054728\">κατηφής</span> – мрачный)."
        },
        "qws": [
            "Становиться угрюмым"
        ],
        "transls": [
            "От слова Κατσούφης — угрюмый"
        ],
        "translation": "Становиться угрюмым",
        "kind": "Глаголы на -άζω, -ιάζω от существительных",
        "unicTransl": "Угрюмый",
        "notice": ""
    },
    {
        "word": "κοπιάζω",
        "base": "κόπος",
        "groups": {
            "morfology": "<em>κοπιάζω </em>→ κόπ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ιάζω</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">κόπος</span> – труд < <span style=\"color:#054728\">κόπτω</span> – толкать, бить)."
        },
        "qws": [
            "Трудиться, стараться, напрягаться"
        ],
        "transls": [
            "От слова Κόπος — труд, усилие"
        ],
        "translation": "Трудиться, стараться, напрягаться",
        "kind": "Глаголы на -άζω, -ιάζω от существительных",
        "unicTransl": "Труд, усилие",
        "notice": ""
    },
    {
        "word": "νυστάζω",
        "base": "νύστα",
        "groups": {
            "morfology": "<em>νυστάζω </em>→ νύστ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -άζω</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">νυστάζω</span> < <span style=\"color:#054728\">νευστάζω</span> – качать < <span style=\"color:#054728\">νεύω</span> – трясти)."
        },
        "qws": [
            "Хотеть спать"
        ],
        "transls": [
            "От слова Νύστα — сонливость"
        ],
        "translation": "Хотеть спать",
        "kind": "Глаголы на -άζω, -ιάζω от существительных",
        "unicTransl": "Сонливость",
        "notice": ""
    },
    {
        "word": "σκουριάζω",
        "base": "σκουριά",
        "groups": {
            "morfology": "<em>σκουριάζω </em>→ σκουρ<span style=\"color: #900101\">ιά</span> +<span style=\"color: #900101\"> -ιάζω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">σκουριά</span> < др.греч. (<span style=\"color:#054728\">σκωρία</span> – ржавчина < <span style=\"color:#054728\">σκῶρ</span> – сор, экскременты)."
        },
        "qws": [
            "Ржаветь"
        ],
        "transls": [
            "От слова Σκουριά — ржавчина"
        ],
        "translation": "Ржаветь",
        "kind": "Глаголы на -άζω, -ιάζω от существительных",
        "unicTransl": "Ржавчина",
        "notice": ""
    },
    {
        "word": "θεμελιώνω",
        "base": "θεμέλιο",
        "groups": {
            "morfology": "<em>θεμελιώνω </em>→ θεμέλι<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ώνω</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">θεμελιῶ</span>."
        },
        "qws": [
            "Основывать"
        ],
        "transls": [
            "От слова Θεμέλιο — основа, фундамент"
        ],
        "translation": "Основывать",
        "kind": "Глаголы на -ώνω от существительных и наречий",
        "unicTransl": "Основа, фундамент",
        "notice": ""
    },
    {
        "word": "καρφώνω",
        "base": "καρφί",
        "groups": {
            "morfology": "<em>καρφώνω </em>→ καρφ<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -ώνω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">καρφί</span> – гвоздь < сред.греч. <span style=\"color:#054728\">καρφίον</span>, <span style=\"color:#054728\">καρφίν</span> – присоски < др.греч. <span style=\"color:#054728\">κάρφος</span> – палочка, сухая щепка."
        },
        "qws": [
            "Прибивать гвоздем, забивать гвоздь"
        ],
        "transls": [
            "От слова Καρφί — гвоздь"
        ],
        "translation": "Прибивать гвоздем, забивать гвоздь",
        "kind": "Глаголы на -ώνω от существительных и наречий",
        "unicTransl": "Гвоздь",
        "notice": ""
    },
    {
        "word": "κλειδώνω",
        "base": "κλειδί",
        "groups": {
            "morfology": "<em>κλειδώνω </em>→ κλειδ<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -ώνω</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">κλείς</span> – засов, ключ."
        },
        "qws": [
            "Запирать"
        ],
        "transls": [
            "От слова Κλειδί — ключ"
        ],
        "translation": "Запирать",
        "kind": "Глаголы на -ώνω от существительных и наречий",
        "unicTransl": "Ключ",
        "notice": ""
    },
    {
        "word": "φορτώνω",
        "base": "φορτίο",
        "groups": {
            "morfology": "<em>φορτώνω </em>→ φορτ<span style=\"color: #900101\">ίο</span> +<span style=\"color: #900101\"> -ώνω</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">φορτώνω</span> < др.греч. (<span style=\"color:#054728\">φόρτος</span> – груз, ноша < <span style=\"color:#054728\">φέρω</span> – нести)."
        },
        "qws": [
            "Грузить"
        ],
        "transls": [
            "От слова Φορτίο — груз"
        ],
        "translation": "Грузить",
        "kind": "Глаголы на -ώνω от существительных и наречий",
        "unicTransl": "Груз",
        "notice": ""
    },
    {
        "word": "χαμηλώνω",
        "base": "χαμηλά",
        "groups": {
            "morfology": "<em>χαμηλώνω </em>→ χαμηλ<span style=\"color: #900101\">ά</span> +<span style=\"color: #900101\"> -ώνω</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">χαμηλά</span> – низко < <span style=\"color:#054728\">χαμηλός</span> – низкий, незначительный) < др.греч. <span style=\"color:#054728\">χαμαί</span> – на земле, на землю."
        },
        "qws": [
            "Опускать, опускаться"
        ],
        "transls": [
            "От слова Χαμηλά — низко"
        ],
        "translation": "Опускать, опускаться",
        "kind": "Глаголы на -ώνω от существительных и наречий",
        "unicTransl": "Низко",
        "notice": ""
    },
    {
        "word": "ακριβαίνω",
        "base": "ακριβός",
        "groups": {
            "morfology": "<em>ακριβαίνω </em>→ ακριβ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -αίνω</span>",
            "etymology": "<br>От койне <span style=\"color:#054728\">ἀκριβός</span> – ценный < др.греч. (<span style=\"color:#054728\">ἀκριβής</span> – ценный < <span style=\"color:#054728\">ἄκρος</span> – острый, лучший, крайний)."
        },
        "qws": [
            "Дорожать, повышать цену"
        ],
        "transls": [
            "От слова Ακριβός — дорогой"
        ],
        "translation": "Дорожать, повышать цену",
        "kind": "Глаголы на -αίνω от прилагательных",
        "unicTransl": "Дорогой",
        "notice": ""
    },
    {
        "word": "ζεσταίνω",
        "base": "ζεστός",
        "groups": {
            "morfology": "<em>ζεσταίνω </em>→ ζεστ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -αίνω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ζεστός</span> – горячий < др.греч. <span style=\"color:#054728\">ζέω</span> – бурлить, кипеть."
        },
        "qws": [
            "Нагревать, греться"
        ],
        "transls": [
            "От слова Ζεστός — горячий"
        ],
        "translation": "Нагревать, греться",
        "kind": "Глаголы на -αίνω от прилагательных",
        "unicTransl": "Горячий",
        "notice": ""
    },
    {
        "word": "φαρδαίνω",
        "base": "φαρδύς",
        "groups": {
            "morfology": "<em>φαρδαίνω </em>→ φαρδ<span style=\"color: #900101\">ύς</span> +<span style=\"color: #900101\"> -αίνω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">φαρδύς</span> – широкий < сред.греч. <span style=\"color:#054728\">φαρδύς</span> < койне <span style=\"color:#054728\"></span><span style=\"color:#054728\">εὺφραδής</span> < др.греч. <span style=\"color:#054728\">φράζω</span> – изъяснять, излагать."
        },
        "qws": [
            "Расширять, расширяться"
        ],
        "transls": [
            "От слова Φαρδύς — широкий"
        ],
        "translation": "Расширять, расширяться",
        "kind": "Глаголы на -αίνω от прилагательных",
        "unicTransl": "Широкий",
        "notice": ""
    },
    {
        "word": "αντικρίζω",
        "base": "αντίκρυ",
        "groups": {
            "morfology": "<em>αντικρίζω </em>→ αντίκρ<span style=\"color: #900101\">υ</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">αντίκρυ</span> < сред.греч. <span style=\"color:#054728\">ἀντίκρυ</span> < др.греч. <span style=\"color:#054728\">ἀντικρύ</span>."
        },
        "qws": [
            "Стоять на другой стороне"
        ],
        "transls": [
            "От слова Αντίκρυ — на противоположной стороне"
        ],
        "translation": "Стоять на другой стороне",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "На противоположной стороне",
        "notice": ""
    },
    {
        "word": "αρχίζω",
        "base": "αρχή",
        "groups": {
            "morfology": "<em>αρχίζω </em>→ αρχ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">ἀρχίζω</span> < др.греч. <span style=\"color:#054728\">ἀρχή</span> – начало, основание."
        },
        "qws": [
            "Начинать"
        ],
        "transls": [
            "От слова Αρχή — начало"
        ],
        "translation": "Начинать",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Начало",
        "notice": ""
    },
    {
        "word": "αφρίζω",
        "base": "αφρός",
        "groups": {
            "morfology": "<em>αφρίζω </em>→ αφρ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">ἀφρίζω</span> – пениться < <span style=\"color:#054728\">ἀφρός</span> – пена."
        },
        "qws": [
            "Пениться"
        ],
        "transls": [
            "От слова Αφρός — пена"
        ],
        "translation": "Пениться",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Пена",
        "notice": ""
    },
    {
        "word": "ζωγραφίζω",
        "base": "ζωγράφος",
        "groups": {
            "morfology": "<em>ζωγραφίζω </em>→ ζωγράφ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">ζωγραφίζω</span> – рисовать < др.греч. <span style=\"color:#054728\">ζωγραφέω</span>, <span style=\"color:#054728\">ζωγραφῶ</span>."
        },
        "qws": [
            "Рисовать"
        ],
        "transls": [
            "От слова Ζωγράφος — художник"
        ],
        "translation": "Рисовать",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Художник",
        "notice": ""
    },
    {
        "word": "κερδίζω",
        "base": "κέρδος",
        "groups": {
            "morfology": "<em>κερδίζω </em>→ κέρδ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">κερδίζω</span> < сред.греч. <span style=\"color:#054728\">κέρδος</span> < др.греч. <span style=\"color:#054728\">κερδαίνω</span> – нажиться."
        },
        "qws": [
            "Выиграть, заработать"
        ],
        "transls": [
            "От слова Κέρδος — прибыль, доход"
        ],
        "translation": "Выиграть, заработать",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Прибыль, доход",
        "notice": ""
    },
    {
        "word": "καλημερίζω",
        "base": "καλημέρα",
        "groups": {
            "morfology": "<em>καλημερίζω </em>→ καλημέρ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">καλημερίζω</span> < <span style=\"color:#054728\">καλημέρα</span> – добрый день < <span style=\"color:#054728\">καλήν</span> <span style=\"color:#054728\">ἡμέραν</span>)."
        },
        "qws": [
            "Здороваться"
        ],
        "transls": [
            "От слова Καλημέρα — добрый день"
        ],
        "translation": "Здороваться",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Добрый день",
        "notice": ""
    },
    {
        "word": "καπνίζω",
        "base": "καπνός",
        "groups": {
            "morfology": "<em>καπνίζω </em>→ καπν<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">καπνός</span> – дым."
        },
        "qws": [
            "Курить"
        ],
        "transls": [
            "От слова Καπνός — дым"
        ],
        "translation": "Курить",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Дым",
        "notice": ""
    },
    {
        "word": "κλαφουρίζω",
        "base": "κλαίω, έκλαψα",
        "groups": {
            "morfology": "<em>κλαφουρίζω </em>→ κλαψούρ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">κλαφουρίζω</span> < <span style=\"color:#054728\">κλαψούρα</span> – нытьё < <span style=\"color:#054728\">κλάψα</span> – нытьё) < др.греч. <span style=\"color:#054728\">κλαίω</span>."
        },
        "qws": [
            "Всплакивать по любому поводу"
        ],
        "transls": [
            "От слова Κλαίω, έκλαψα — плакать, плакал"
        ],
        "translation": "Всплакивать по любому поводу",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Плакать",
        "notice": ""
    },
    {
        "word": "κουδουνίζω",
        "base": "κουδούνι",
        "groups": {
            "morfology": "<em>κουδουνίζω </em>→ κουδούν<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">κωδωνίζω</span> < др.греч. <span style=\"color:#054728\">κώδων</span> – колокол, звонок."
        },
        "qws": [
            "Звонить, звякать"
        ],
        "transls": [
            "От слова Κουδούνι — звонок, колокол"
        ],
        "translation": "Звонить, звякать",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Звонок, колокол",
        "notice": ""
    },
    {
        "word": "μαυρίζω",
        "base": "μαύρο",
        "groups": {
            "morfology": "<em>μαυρίζω </em>→ μαύρ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">μαυρίζω</span> < др.греч. <span style=\"color:#054728\">μαῦρος</span> – чёрный, темнокожий."
        },
        "qws": [
            "Загорать"
        ],
        "transls": [
            "От слова Μαύρο — чёрный"
        ],
        "translation": "Загорать",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Чёрный",
        "notice": ""
    },
    {
        "word": "παραμερίζω",
        "base": "παράμερα",
        "groups": {
            "morfology": "<em>παραμερίζω </em>→ παραμέρ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">παραμερίζω</span> < <span style=\"color:#054728\">παραμέρα</span> – в стороне < <span style=\"color:#054728\">παραμέρος</span> – находящийся в стороне < <span style=\"color:#054728\">πάρα</span> <span style=\"color:#054728\">μέρος</span> – в сторону)"
        },
        "qws": [
            "Отодвигать, отодвигаться"
        ],
        "transls": [
            "От слова Παράμερα — в стороне"
        ],
        "translation": "Отодвигать, отодвигаться",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "В стороне",
        "notice": ""
    },
    {
        "word": "πλημμυρίζω",
        "base": "πλημμύρα",
        "groups": {
            "morfology": "<em>πλημμυρίζω </em>→ πλημμύρ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">πλημμυρίζω</span> < др.греч. (<span style=\"color:#054728\">πλημυρέω</span>, <span style=\"color:#054728\">πλημυρῶ</span> < <span style=\"color:#054728\">πλημύρα</span> – наводнение)."
        },
        "qws": [
            "Затопить"
        ],
        "transls": [
            "От слова Πλημμύρα — наводнение"
        ],
        "translation": "Затопить",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Наводнение",
        "notice": ""
    },
    {
        "word": "πριονίζω",
        "base": "πριόνι",
        "groups": {
            "morfology": "<em>πριονίζω </em>→ πριόν<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">πριονίζω</span> < др.греч. <span style=\"color:#054728\">πρίων</span> – пила."
        },
        "qws": [
            "Пилить"
        ],
        "transls": [
            "От слова Πριόνι — пила"
        ],
        "translation": "Пилить",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Пила",
        "notice": ""
    },
    {
        "word": "προγραμματίζω",
        "base": "πρόγραμμα",
        "groups": {
            "morfology": "<em>προγραμματίζω </em>→ πρόγραμμα<span style=\"color: #900101\">τ</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От франц. <span style=\"color:#054728\">programmer</span> или англ. <span style=\"color:#054728\">program</span>."
        },
        "qws": [
            "Программировать"
        ],
        "transls": [
            "От слова Πρόγραμμα — программа"
        ],
        "translation": "Программировать",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Программа",
        "notice": ""
    },
    {
        "word": "σκανδαλίζω",
        "base": "σκάνδαλο",
        "groups": {
            "morfology": "<em>σκανδαλίζω </em>→ σκάνδαλ<span style=\"color: #900101\">ον</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">σκάνδαλον</span> – соблазн; дощечка в западне, к которой прикреплялась приманка < др.греч. <span style=\"color:#054728\">σκάνδαλον</span>."
        },
        "qws": [
            "Скандалить"
        ],
        "transls": [
            "От слова Σκάνδαλο — скандал"
        ],
        "translation": "Скандалить",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Скандал",
        "notice": ""
    },
    {
        "word": "συνηθίζω",
        "base": "συνήθης",
        "groups": {
            "morfology": "<em>συνηθίζω </em>→ συνήθ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">συνηθίζω</span> < <span style=\"color:#054728\">συνήθης</span> – привыкший)."
        },
        "qws": [
            "Привыкать"
        ],
        "transls": [
            "От слова Συνήθης — привычный"
        ],
        "translation": "Привыкать",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Привычный",
        "notice": ""
    },
    {
        "word": "συχνάζω",
        "base": "συχνά",
        "groups": {
            "morfology": "<em>συχνάζω </em>→ συχν<span style=\"color: #900101\">ά</span> +<span style=\"color: #900101\"> -άζω</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">συχνός</span> – постоянный."
        },
        "qws": [
            "Часто посещать"
        ],
        "transls": [
            "От слова Συχνά — часто"
        ],
        "translation": "Часто посещать",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Часто",
        "notice": ""
    },
    {
        "word": "φεγγίζω",
        "base": "φέγγω",
        "groups": {
            "morfology": "<em>φεγγίζω </em>→ φέγγ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ίζω</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">φεγγίζω</span> < <span style=\"color:#054728\">συνήθης</span> – привыкший < др.греч. <span style=\"color:#054728\">φέγγος</span> – свет, блеск."
        },
        "qws": [
            "Просвечивать, просвечиваться"
        ],
        "transls": [
            "От слова Φέγγω — светить, светиться"
        ],
        "translation": "Просвечивать, просвечиваться",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Светить, светиться",
        "notice": "Происходит либо от слова φέγγω – светить, либо от слова φέγγος – свет, блеск."
    },
    {
        "word": "ορκίζομαι",
        "base": "όρκος",
        "groups": {
            "morfology": "<em>ορκίζομαι </em>→ όρκ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ίζο</span> + <span style=\"color: #900101\">-ομαι</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ὁρκίζω</span> – заклинать, умолять < <span style=\"color:#054728\">ὅρκος</span> – клятва)"
        },
        "qws": [
            "Клясться"
        ],
        "transls": [
            "От слова Όρκος — клятва"
        ],
        "translation": "Клясться",
        "kind": "Глаголы на -ίζω от разных частей речи",
        "unicTransl": "Клятва",
        "notice": ""
    },
    {
        "word": "ξοδεύω",
        "base": "έξοδα",
        "groups": {
            "morfology": "<em>ξοδεύω </em>→ <span style=\"color: #900101\">έ-</span> + ξοδ<span style=\"color: #900101\">α</span> + <span style=\"color: #900101\">-εύω</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">ἐξοδεύω</span> < др.греч. <span style=\"color:#054728\">ἔξοδος</span> – уход, исход.."
        },
        "qws": [
            "Тратить, расходовать"
        ],
        "transls": [
            "От слова Έξοδα — расходы"
        ],
        "translation": "Тратить, расходовать",
        "kind": "Глаголы на -εύω от разных частей речи",
        "unicTransl": "Расходы",
        "notice": ""
    },
    {
        "word": "αγναντεύω",
        "base": "αγνάντια",
        "groups": {
            "morfology": "<em>αγναντεύω </em>→ αγνάντ<span style=\"color: #900101\">ια</span> +<span style=\"color: #900101\"> -εύω</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">αγναντεύω</span> < <span style=\"color:#054728\">αγνάντια</span> – напротив)"
        },
        "qws": [
            "Стоять напротив"
        ],
        "transls": [
            "От слова Αγνάντια — напротив"
        ],
        "translation": "Стоять напротив",
        "kind": "Глаголы на -εύω от разных частей речи",
        "unicTransl": "Напротив",
        "notice": ""
    },
    {
        "word": "δουλεύω",
        "base": "δουλειά",
        "groups": {
            "morfology": "<em>δουλεύω </em>→ δουλ<span style=\"color: #900101\">ειά</span> +<span style=\"color: #900101\"> -εύω</span>",
            "etymology": "<br>От койне <span style=\"color:#054728\">δουλεύω</span> – быть рабом, служить < др.греч. (<span style=\"color:#054728\">δουλόω</span> – порабощать < <span style=\"color:#054728\">δοῦλος</span> – раб)."
        },
        "qws": [
            "Работать"
        ],
        "transls": [
            "От слова Δουλειά — работа"
        ],
        "translation": "Работать",
        "kind": "Глаголы на -εύω от разных частей речи",
        "unicTransl": "Работа",
        "notice": ""
    },
    {
        "word": "κοντεύω",
        "base": "κοντά",
        "groups": {
            "morfology": "<em>κοντεύω </em>→ κοντ<span style=\"color: #900101\">ά</span> +<span style=\"color: #900101\"> -εύω</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">κοντεύω</span> < <span style=\"color:#054728\">κοντά</span> – близко) < др.греч. <span style=\"color:#054728\">κοντός</span> – шест, жердь."
        },
        "qws": [
            "Приближаться"
        ],
        "transls": [
            "От слова Κοντά — близко"
        ],
        "translation": "Приближаться",
        "kind": "Глаголы на -εύω от разных частей речи",
        "unicTransl": "Близко",
        "notice": ""
    },
    {
        "word": "σημαδεύω",
        "base": "σημάδι",
        "groups": {
            "morfology": "<em>σημαδεύω </em>→ σημάδ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -εύω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">σημάδι</span> — знак, метка < сред.греч. <span style=\"color:#054728\">σημάδιον</span> (ласкательное от др.греч. <span style=\"color:#054728\"></span>σῆμ<span style=\"color:#054728\">α</span> – метка, знак)."
        },
        "qws": [
            "Отмечать, ставить клеймо, целиться"
        ],
        "transls": [
            "От слова Σημάδι — знак, метка"
        ],
        "translation": "Отмечать, ставить клеймо, целиться",
        "kind": "Глаголы на -εύω от разных частей речи",
        "unicTransl": "Знак, метка",
        "notice": ""
    },
    {
        "word": "ψαχουλεύω",
        "base": "ψάχνω",
        "groups": {
            "morfology": "<em>ψαχουλεύω </em>→ ψάχ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> χουλεύω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ψάχνω</span> – искать, щупать и <span style=\"color:#054728\">χαλεύω</span> – искать, просить."
        },
        "qws": [
            "Исследовать"
        ],
        "transls": [
            "От слова Ψάχνω — искать"
        ],
        "translation": "Исследовать",
        "kind": "Глаголы на -εύω от разных частей речи",
        "unicTransl": "Искать",
        "notice": ""
    },
    {
        "word": "ψαρεύω",
        "base": "ψάρι",
        "groups": {
            "morfology": "<em>ψαρεύω </em>→ ψάρ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -εύω</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ψάρι</span> – рыба < сред.греч. <span style=\"color:#054728\">ψάρι</span> – рыба < др.греч. (<span style=\"color:#054728\">ὀψάριον</span> – деликатесик < <span style=\"color:#054728\">ὄψον</span> – деликатеc)."
        },
        "qws": [
            "Рыбачить"
        ],
        "transls": [
            "От слова Ψάρι — рыба"
        ],
        "translation": "Рыбачить",
        "kind": "Глаголы на -εύω от разных частей речи",
        "unicTransl": "Рыба",
        "notice": ""
    },
    {
        "word": "ονειρεύομαι",
        "base": "όνειρο",
        "groups": {
            "morfology": "<em>ονειρεύομαι </em>→ όνειρ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -εύω</span> + <span style=\"color: #900101\">-ομαι</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">ὀνειρεύομαι</span> < др.греч. (<span style=\"color:#054728\">ὄνειρος</span> – сон; призрак, видение < <span style=\"color:#054728\">ὄναρ</span> – сон; призрак, видение)."
        },
        "qws": [
            "Мечтать"
        ],
        "transls": [
            "От слова Όνειρο — мечта"
        ],
        "translation": "Мечтать",
        "kind": "Глаголы на -εύω от разных частей речи",
        "unicTransl": "Мечта",
        "notice": ""
    },
    {
        "word": "γραφέας / γραφιάς",
        "base": "γράφω",
        "groups": {
            "morfology": "<em>γραφέας, γραφιάς </em>→ γράφ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -έας</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">γραφεύς</span> < <span style=\"color:#054728\">γράφω</span> – писать)",
            "aplication": "<br>Существительные на -έας, -ιάς означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -(ά)τορας."
        },
        "qws": [
            "Писатель"
        ],
        "transls": [
            "От слова Γράφω — писать"
        ],
        "translation": "Писатель",
        "kind": "Существительные на -έας, -ιάς от глаголов",
        "unicTransl": "Писать",
        "notice": "Существительные на -έας, -ιάς означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -(ά)τορας."
    },
    {
        "word": "εισαγωγέας",
        "base": "εισάγω",
        "groups": {
            "morfology": "<em>εισαγωγέας </em>→ <span style=\"color: #900101\">εισ-</span> + άγ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ωγέας</span>",
            "etymology": "От др.греч. (<span style=\"color:#054728\">εἰσάγω</span> – импортировать, вводить, ввозить < <span style=\"color:#054728\">είς-</span> (в) + <span style=\"color:#054728\">ἄγω</span> – вести)",
            "aplication": "<br>Существительные на -έας, -ιάς означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -(ά)τορας."
        },
        "qws": [
            "Импортер"
        ],
        "transls": [
            "От слова Εισάγω — импортировать"
        ],
        "translation": "Импортер",
        "kind": "Существительные на -έας, -ιάς от глаголов",
        "unicTransl": "Импортировать",
        "notice": "Существительные на -έας, -ιάς означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -(ά)τορας."
    },
    {
        "word": "εξαγωγέας",
        "base": "εξάγω",
        "groups": {
            "morfology": "<em>εξαγωγέας </em>→ εξάγ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ωγέας</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἐξάγω</span> – экспортировать, выводить < <span style=\"color:#054728\">εξ-</span> (с, из) + <span style=\"color:#054728\">ἄγω</span> — вести)",
            "aplication": "<br>Существительные на -έας, -ιάς означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -(ά)τορας."
        },
        "qws": [
            "Экспортер"
        ],
        "transls": [
            "От слова Εξάγω — экспортировать"
        ],
        "translation": "Экспортер",
        "kind": "Существительные на -έας, -ιάς от глаголов",
        "unicTransl": "Экспортировать",
        "notice": "Существительные на -έας, -ιάς означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -(ά)τορας."
    },
    {
        "word": "κουρέας",
        "base": "κουρεύω",
        "groups": {
            "morfology": "<em>κουρέας </em>→ κουρ<span style=\"color: #900101\">εύω</span> +<span style=\"color: #900101\"> -έας</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">κουρεύω</span> – стричь < сред.греч. <span style=\"color:#054728\">κουρεύω</span> < койне (<span style=\"color:#054728\">κουρεύομαι</span> — стричься < <span style=\"color:#054728\">κούρα</span> – стрижка, подстригание)",
            "aplication": "<br>Существительные на -έας, -ιάς означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -(ά)τορας."
        },
        "qws": [
            "Парикмахер"
        ],
        "transls": [
            "От слова Κουρεύω — стричь"
        ],
        "translation": "Парикмахер",
        "kind": "Существительные на -έας, -ιάς от глаголов",
        "unicTransl": "Стричь",
        "notice": "Существительные на -έας, -ιάς означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -(ά)τορας."
    },
    {
        "word": "σκαφτιάς",
        "base": "σκάβω",
        "groups": {
            "morfology": "<em>σκαφτιάς </em>→ σκάβ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -τιάς</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">σκάφτω, σκάβω</span> – копать < др.греч. <span style=\"color:#054728\">σκάπτω</span> — копать.",
            "aplication": "<br>Существительные на -έας, -ιάς означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -(ά)τορας."
        },
        "qws": [
            "Землекоп"
        ],
        "transls": [
            "От слова Σκάβω — копать"
        ],
        "translation": "Землекоп",
        "kind": "Существительные на -έας, -ιάς от глаголов",
        "unicTransl": "Копать",
        "notice": "Существительные на -έας, -ιάς означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -(ά)τορας."
    },
    {
        "word": "ερχομός",
        "base": "έρχομαι",
        "groups": {
            "morfology": "<em>ερχομός </em>→ έρχ<span style=\"color: #900101\">ομαι</span> +<span style=\"color: #900101\"> -ομός</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">ερχομός</span> < др.греч. <span style=\"color:#054728\">ἔρχομαι</span> — приходить.",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Приход, приезд"
        ],
        "transls": [
            "От слова Έρχομαι — приходить"
        ],
        "translation": "Приход, приезд",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Приходить",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "ακρωτηριασμός",
        "base": "ακρωτηριάζω",
        "groups": {
            "morfology": "<em>ακρωτηριασμός </em>→ ακρωτηριάζ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -μός</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀκρωτηριασμός</span> < <span style=\"color:#054728\">ἀκρωτηριάζω</span> — ампутировать < <span style=\"color:#054728\">ἀκρωτήριον</span> — вершина, выступ, край < <span style=\"color:#054728\">ἄκρος</span> острый, лучший, крайний)",
	    "synonims": "<strong><i>Синонимы</i></strong>: ακρωτηρίαση.",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Ампутация"
        ],
        "transls": [
            "От слова Ακρωτηριάζω — ампутировать"
        ],
        "translation": "Ампутация",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Ампутировать",
        "notice": "Синоним – ακρωτηρίαση. <br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "ανταγωνισμός",
        "base": "ανταγωνίζομαι",
        "groups": {
            "morfology": "<em>ανταγωνισμός </em>→ ανταγωνίζ<span style=\"color: #900101\">ομαι</span> +<span style=\"color: #900101\"> -μός</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">ἀνταγωνίζομαι</span> – соревноваться < <span style=\"color:#054728\">ἀγωνίζομαι</span> – соревноваться < <span style=\"color:#054728\">ἀγών</span> – собрание < <span style=\"color:#054728\">ἄγω</span> – возить.",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Конкуренция"
        ],
        "transls": [
            "От слова Ανταγωνίζομαι — конкурировать"
        ],
        "translation": "Конкуренция",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Конкурировать",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "βιασμός",
        "base": "βιάζω",
        "groups": {
            "morfology": "<em>βιασμός </em>→ βιάζ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -μός</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">βιάζω</span> – применять силу < <span style=\"color:#054728\">βία</span> – сила, насилие.",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Изнасилование"
        ],
        "transls": [
            "От слова Βιάζω — насиловать"
        ],
        "translation": "Изнасилование",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Насиловать",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "διωγμός",
        "base": "διώχνω",
        "groups": {
            "morfology": "<em>διωγμός </em>→ διώχ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -μός</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">διωγμός</span> < <span style=\"color:#054728\">διώκω</span> – гнать < <span style=\"color:#054728\">δίω</span> – прогонять, преследовать)",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Изгнание"
        ],
        "transls": [
            "От слова Διώχνω — изгонять, выгонять"
        ],
        "translation": "Изгнание",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Изгонять, выгонять",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "ενθουσιασμός",
        "base": "ενθουσιάζομαι",
        "groups": {
            "morfology": "<em>ενθουσιασμός </em>→ ενθουσιάζ<span style=\"color: #900101\">ομαι</span> +<span style=\"color: #900101\"> -μός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ενθουσιάζω</span> – быть вдохновлённым < др.греч. (<span style=\"color:#054728\">ἐνθουσιάζω</span> < <span style=\"color:#054728\">ἔνθους</span> – вдохновлённый, воодушевлённый < <span style=\"color:#054728\">ἔνθεος</span> – воодушевлённый < <span style=\"color:#054728\">ἐν</span> + <span style=\"color:#054728\">θεός</span> – с богом).",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Энтузиазм"
        ],
        "transls": [
            "От слова Ενθουσιάζομαι — проявить энтузиазм"
        ],
        "translation": "Энтузиазм",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Проявить энтузиазм",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "λυτρωμός",
        "base": "λυτρώνω",
        "groups": {
            "morfology": "<em>λυτρωμός </em>→ λυτρ<span style=\"color: #900101\">ώνω</span> +<span style=\"color: #900101\"> -μός</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">λυτρωμός</span> < др.греч. <span style=\"color:#054728\">λυτρόω</span> – освобождать, отпускать.",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Избавление"
        ],
        "transls": [
            "От слова Λυτρώνω — освобождать, спасать"
        ],
        "translation": "Избавление",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Освобождать, спасать",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "πυροβολισμός",
        "base": "πυροβολώ",
        "groups": {
            "morfology": "<em>πυροβολισμός </em>→ πυροβολ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ισμος</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">πυροβολώ</span> – выстрелить < <span style=\"color:#054728\">πυροβόλο</span> – огнестрельное оружие, пушка).",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Выстрел"
        ],
        "transls": [
            "От слова Πυροβολώ — выстрелить"
        ],
        "translation": "Выстрел",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Выстрелить",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "σεβασμός",
        "base": "σέβομαι",
        "groups": {
            "morfology": "<em>σεβασμός </em>→ σέβ<span style=\"color: #900101\">ομαι</span> +<span style=\"color: #900101\"> -ασμός</span>",
            "etymology": "<br>От койне <span style=\"color:#054728\">σεβάζω</span> < др.греч. <span style=\"color:#054728\">σέβομαι</span> – уважать.",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Уважение"
        ],
        "transls": [
            "От слова Σέβομαι — уважать"
        ],
        "translation": "Уважение",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Уважать",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "σύνδεσμος",
        "base": "συνδέω",
        "groups": {
            "morfology": "<em>σύνδεσμος </em>→ <span style=\"color: #900101\">συν-</span> + δέ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -σμος</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">σύνδεσμος</span> < <span style=\"color:#054728\">συνδέω</span> – соединять < <span style=\"color:#054728\">σύν-</span> (вместе) + <span style=\"color:#054728\">δέω</span> – связывать, привязывать)",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Союз, связь"
        ],
        "transls": [
            "От слова Συνδέω — соединять"
        ],
        "translation": "Союз, связь",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Соединять",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "τραυματισμός",
        "base": "τραυματίζω",
        "groups": {
            "morfology": "<em>τραυματισμός </em>→ τραυματίζ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -μός</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">τραυματίζω</span> – повредить, поранить < <span style=\"color:#054728\">τραῦμα, τρῶμᾰ</span> – рана < <span style=\"color:#054728\">τιτρώσκω</span> – повреждать)",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Повреждение, рана"
        ],
        "transls": [
            "От слова Τραυματίζω — повредить, поранить"
        ],
        "translation": "Повреждение, рана",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Повредить, поранить",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "χαμός",
        "base": "χάνω",
        "groups": {
            "morfology": "<em>χαμός </em>→ χάν<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -μός</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">χαμός</span> < <span style=\"color:#054728\">χάνω</span> – терять).",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Потеря, гибель"
        ],
        "transls": [
            "От слова Χάνω — терять"
        ],
        "translation": "Потеря, гибель",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Терять",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "αθλητισμός",
        "base": "αθλητής",
        "groups": {
            "morfology": "<em>αθλητισμός </em>→ αθλητ<span style=\"color: #900101\">ής</span> +<span style=\"color: #900101\"> -ισμος</span>",
            "etymology": "<br>От франц. <span style=\"color:#054728\">athlétisme</span> – атлетика < др.греч. (<span style=\"color:#054728\">ἀθλητής</span> – атлет, чемпион < <span style=\"color:#054728\">ἀθλέω</span> – бороться, быть спортсменом < <span style=\"color:#054728\">ἆθλος</span> – соревнование, борьба; или <span style=\"color:#054728\">ἆθλον</span> – состязание, приз)",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Спорт, атлетика"
        ],
        "transls": [
            "От слова Αθλητής — спортсмен, атлет"
        ],
        "translation": "Спорт, атлетика",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Спортсмен, атлет",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "εμπρησμός",
        "base": "εμπρηστής",
        "groups": {
            "morfology": "<em>εμπρησμός </em>→ εμπρηστ<span style=\"color: #900101\">ής</span> +<span style=\"color: #900101\"> -μός</span>",
            "etymology": "<br>От койне <span style=\"color:#054728\">ἐμπρησμός</span> < др.греч. (<span style=\"color:#054728\">ἐμπίμπρημι</span> – гореть, жечь < <span style=\"color:#054728\">ἐμ-</span> (<span style=\"color:#054728\">ἐν-</span> / <span style=\"color:#054728\">ἐγ-</span>) (в, внутрь) + <span style=\"color:#054728\">πίμπρημι</span> – дуть; гореть, жечь)",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Поджог"
        ],
        "transls": [
            "От слова Εμπρηστής — поджигатель"
        ],
        "translation": "Поджог",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Поджигатель",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "τουρισμός",
        "base": "τουρίστας",
        "groups": {
            "morfology": "<em>τουρισμός </em>→ τουρίσ<span style=\"color: #900101\">τας</span> +<span style=\"color: #900101\"> -μός</span>",
            "etymology": "<br>От франц. <span style=\"color:#054728\">tourisme</span> – туризм < англ. (<span style=\"color:#054728\">tourism</span> – туризм < <span style=\"color:#054728\">tour</span> – тур) < лат. <span style=\"color:#054728\">tornare</span> – возвращаться < др.греч. <span style=\"color:#054728\">τόρνος</span> – то, что крутится; токарный станок; циркуль.",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Туризм"
        ],
        "transls": [
            "От слова Τουρίστας — турист"
        ],
        "translation": "Туризм",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Турист",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "χριστιανισμός",
        "base": "χριστιανός",
        "groups": {
            "morfology": "<em>χριστιανισμός </em>→ χριστιαν<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ισμος</span>",
            "etymology": "<br>От койне (<span style=\"color:#054728\">χριστιανισμός</span> – христианство < <span style=\"color:#054728\">χριστιανός</span> — христианин < <span style=\"color:#054728\">Χριστός</span> – Христос)",
            "aplication": "<br>Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Христианство"
        ],
        "transls": [
            "От слова Χριστιανός — христианин"
        ],
        "translation": "Христианство",
        "kind": "Существительные на -μός, -ισμος от разных частей речи",
        "unicTransl": "Христианин",
        "notice": "Существительные на -μός, -ισμος означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -ση, -ηση (-ξη,-φη), на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "αγανάκτηση",
        "base": "αγανακτώ",
        "groups": {
            "morfology": "<em>αγανάκτηση </em>→ αγανακτ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀγανάκτησις</span> – досада, раздражение < <span style=\"color:#054728\">ἀγανακτέω</span> – раздражать, действовать на нервы < <span style=\"color:#054728\">ἄγαν</span> (много) + <span style=\"color:#054728\">κτείνω</span> – убить)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Возмущение"
        ],
        "transls": [
            "От слова Αγανακτώ — возмущаться"
        ],
        "translation": "Возмущение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Возмущаться",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "ακύρωση",
        "base": "ακυρώνω",
        "groups": {
            "morfology": "<em>ακύρωση </em>→ ακυρώ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀκύρωσις</span> < <span style=\"color:#054728\">ἀκυρόω</span> – отклонять, отменять < <span style=\"color:#054728\">ἄκυρος</span> – бессильный, ленивый < <span style=\"color:#054728\">α-</span>(приставка отрицания, отсутствия, лишения) + <span style=\"color:#054728\">κῦρος</span> – высшая власть, авторитет; достоверность, подтверждение)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Отмена"
        ],
        "transls": [
            "От слова Ακυρώνω — отменить"
        ],
        "translation": "Отмена",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Отменить",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "ανάκριση",
        "base": "ανακρίνω",
        "groups": {
            "morfology": "<em>ανάκριση </em>→ ανακρί<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀνάκρισις</span> – исследование; обследование; спор < <span style=\"color:#054728\">ἀνακρίνω</span> – допрашивать, расспрашивать < <span style=\"color:#054728\">ἀνα-</span> (до, вверх, назад, снова; выражает повторность, усиленность) + <span style=\"color:#054728\">κρίνω</span> – разделять, решать, осуждать)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Допрос, настойчивый поиск истины"
        ],
        "transls": [
            "От слова Ανακρίνω — допрашивать"
        ],
        "translation": "Допрос, настойчивый поиск истины",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Допрашивать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "ανάλυση",
        "base": "αναλύω",
        "groups": {
            "morfology": "<em>ανάλυση </em>→ αναλύ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀνάλυσις</span> – решение проблемы; разложение, анализ; уход, отступление < <span style=\"color:#054728\">ἀναλύω</span> – разложить; отречься < <span style=\"color:#054728\">ἀνα-</span> (до, вверх, назад, снова; выражает повторность, усиленность) + <span style=\"color:#054728\">λύω</span> – решать; освободить; ослабить)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Анализ"
        ],
        "transls": [
            "От слова Αναλύω — анализировать"
        ],
        "translation": "Анализ",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Анализировать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "αναχώρηση",
        "base": "αναχωρώ",
        "groups": {
            "morfology": "<em>αναχώρηση </em>→ αναχ<span style=\"color: #900101\">ωρώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀναχώρησις</span> – отступление, отхождение < <span style=\"color:#054728\">ἀναχωρέω</span> – отступать, вернуться назад < <span style=\"color:#054728\">ἀνα-</span> (до, вверх, назад, снова; выражает повторность, усиленность) + <span style=\"color:#054728\">χωρέω</span> – уйти, освободить место < <span style=\"color:#054728\">χῶρος</span> – место, район, местонахождение)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Отправление поезда"
        ],
        "transls": [
            "От слова Αναχωρώ — отходить"
        ],
        "translation": "Отправление поезда",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Отходить",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "απάντηση",
        "base": "απαντώ",
        "groups": {
            "morfology": "<em>απάντηση </em>→ απαντ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀπάντησης</span> – отвечать < <span style=\"color:#054728\">ἀπαντάω</span> < <span style=\"color:#054728\">ἀπό-</span> (указывает место удаления: с, от; исходный момент времени: с, от, после; причину: от, из-за) + <span style=\"color:#054728\">ἀντάω</span> – встретить, сталкиваться < <span style=\"color:#054728\">ἀντη</span> – вместо, кроме, в сравнении с)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Ответ"
        ],
        "transls": [
            "От слова Απαντώ — отвечать"
        ],
        "translation": "Ответ",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Отвечать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "απογοήτευση",
        "base": "απογοητεύω",
        "groups": {
            "morfology": "<em>απογοήτευση </em>→ <span style=\"color: #900101\">απο-</span> + γοητεύ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">απογοητεύω</span> – разочаровывать < <span style=\"color:#054728\">ἀπό-</span> (указывает место удаления: с, от; <u>отрицание</u>; исходный момент времени: с, от, после; причину: от, из-за) + <span style=\"color:#054728\">γοητεύω</span> – околдовать, очаровать) < др.греч. (<span style=\"color:#054728\">γόης</span> – колдун, чародей < <span style=\"color:#054728\">γοάω</span> – стонать, плакать; оплакивать)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Разочарование"
        ],
        "transls": [
            "От слова Απογοητεύω — разочаровать"
        ],
        "translation": "Разочарование",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Разочаровать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "απόδειξη",
        "base": "αποδεικνύω",
        "groups": {
            "morfology": "<em>απόδειξη </em>→ αποδει<span style=\"color: #900101\">κνύω</span> +<span style=\"color: #900101\"> -ξη</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀπόδειξις</span> – показывать < <span style=\"color:#054728\">ἀπό-</span> (указывает место удаления: с, от; исходный момент времени: с, от, после; причину: от, из-за) + <span style=\"color:#054728\">δείκνῡμι</span> – указывать, показывать, выявлять)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Улика, доказательство"
        ],
        "transls": [
            "От слова Αποδεικνύω — доказывать"
        ],
        "translation": "Улика, доказательство",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Доказывать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "απομόνωση",
        "base": "απομονώνομαι",
        "groups": {
            "morfology": "<em>απομόνωση </em>→ απομονώ<span style=\"color: #900101\">νομαι</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">απομονώνω</span> – изолировать, исключить < др.греч. <span style=\"color:#054728\">ἀπομονόομαι</span> – быть изолированным < <span style=\"color:#054728\">ἀπό-</span> (указывает место удаления: с, от; исходный момент времени: с, от, после; причину: от, из-за) + <span style=\"color:#054728\">μονόω</span> – изолировать < <span style=\"color:#054728\">μόνος</span> – одинокий)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Уединение"
        ],
        "transls": [
            "От слова Απομονώνομαι — уединиться"
        ],
        "translation": "Уединение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Уединиться",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "άρνηση",
        "base": "αρνούμαι",
        "groups": {
            "morfology": "<em>άρνηση </em>→ αρν<span style=\"color: #900101\">ούμαι</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">αρνούμαι</span> – отказываться < др.греч. <span style=\"color:#054728\">ἀρνέομαι</span> – отказываться, отрицать.",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Отказ"
        ],
        "transls": [
            "От слова Αρνούμαι — отказываться"
        ],
        "translation": "Отказ",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Отказываться",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "γέννηση",
        "base": "γεννώ",
        "groups": {
            "morfology": "<em>γέννηση </em>→ γενν<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">γέννηση</span> – рождение < др.греч. (<span style=\"color:#054728\">γέννησις</span> – рождение < <span style=\"color:#054728\">γεννάω</span> – рожать < <span style=\"color:#054728\">γίγνομαι</span> – стать, родиться)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Рождение"
        ],
        "transls": [
            "От слова Γεννώ — рожать"
        ],
        "translation": "Рождение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Рожать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "διαφήμιση",
        "base": "διαφημίζω",
        "groups": {
            "morfology": "<em>διαφήμιση </em>→ διαφημί<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">διαφημίζω</span> – рекламировать < др.греч. (<span style=\"color:#054728\">διαφημίζω</span> – делать известным, называть < <span style=\"color:#054728\">δια-</span> (префикс со смыслами: через, в разных направлениях, между и др.) + <span style=\"color:#054728\">φημί</span> – известность)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Реклама"
        ],
        "transls": [
            "От слова Διαφημίζω — рекламировать"
        ],
        "translation": "Реклама",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Рекламировать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "διεύθυνση",
        "base": "διευθύνω",
        "groups": {
            "morfology": "<em>διεύθυνση </em>→ διευθύν<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">διευθύνω</span> – управлять, руководить, направлять < др.греч. (<span style=\"color:#054728\">δια-</span> (префикс со смыслами: через, в разных направлениях, между и др.) + <span style=\"color:#054728\">εὐθύνω</span> – выпрямлять, призвать к ответу < <span style=\"color:#054728\">εὐθύς</span>, <span style=\"color:#054728\">ἰθύς</span> – прямой, прозрачный, честный)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Направление, адрес, руководство"
        ],
        "transls": [
            "От слова Διευθύνω — управлять, руководить, направлять"
        ],
        "translation": "Направление, адрес, руководство",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Управлять, руководить, направлять",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "έγκριση",
        "base": "εγκρίνω",
        "groups": {
            "morfology": "<em>έγκριση </em>→ εγκρί<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От койне (<span style=\"color:#054728\">ἔγκρισις</span> < <span style=\"color:#054728\">ἐγκρίνω</span> – одобрить) < др.греч. <span style=\"color:#054728\">ἐγ-</span> (<span style=\"color:#054728\">ἐν-</span> / <span style=\"color:#054728\">ἐμ-</span>) (в, внутрь) + <span style=\"color:#054728\">κρίνω</span> – разделять, решать, осуждать.",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Одобрение"
        ],
        "transls": [
            "От слова Εγκρίνω — одобрить"
        ],
        "translation": "Одобрение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Одобрить",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "έκδοση",
        "base": "εκδίδω",
        "groups": {
            "morfology": "<em>έκδοση </em>→ εκδ<span style=\"color: #900101\">ίδω</span> +<span style=\"color: #900101\"> -οση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἐκδοσής</span> – сдача < <span style=\"color:#054728\">ἐκδίδωμι</span> – сдаваться < <span style=\"color:#054728\">δίδωμι</span> – давать).",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Издание"
        ],
        "transls": [
            "От слова Εκδίδω — издавать"
        ],
        "translation": "Издание",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Издавать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "εκδίκηση",
        "base": "εκδικούμαι",
        "groups": {
            "morfology": "<em>εκδίκηση </em>→ εκδικ<span style=\"color: #900101\">ούμαι</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἐκδίκησις</span> – месть < <span style=\"color:#054728\">ἐκδικέω</span> – отомстить < <span style=\"color:#054728\">ἔκδῐκος</span> – несправедливый, мстительный)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Месть"
        ],
        "transls": [
            "От слова Εκδικούμαι — мстить"
        ],
        "translation": "Месть",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Мстить",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "εκκένωση",
        "base": "εκκενώνω",
        "groups": {
            "morfology": "<em>εκκένωση </em>→ εκκενώ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">εκκενώνω</span> – эвакуировать < древ.греч. (<span style=\"color:#054728\">ἐκκενόω</span> – эвакуировать < <span style=\"color:#054728\">κενόω</span> – оставлять позицию пустой < <span style=\"color:#054728\">κενός</span> – пустой, тщеславный)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Эвакуация"
        ],
        "transls": [
            "От слова Εκκενώνω — эвакуировать"
        ],
        "translation": "Эвакуация",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Эвакуировать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "έκπληξη",
        "base": "εκπλήσσω",
        "groups": {
            "morfology": "<em>έκπληξη </em>→ εκπλή<span style=\"color: #900101\">σσω</span> +<span style=\"color: #900101\"> -ξη</span>",
            "etymology": "<br>От древ.греч. (<span style=\"color:#054728\">ἔκπληξις</span> – изумление < <span style=\"color:#054728\">ἐκπλήσσω</span> – изумить, потрясти < <span style=\"color:#054728\">ἐκ-</span>, <span style=\"color:#054728\">ἐξ-</span> (приставка удаления: из) + <span style=\"color:#054728\">πλήσσω</span> – наносить удары, поразить)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Удивление"
        ],
        "transls": [
            "От слова Εκπλήσσω — удивлять"
        ],
        "translation": "Удивление",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Удивлять",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "εκτέλεση",
        "base": "εκτελώ",
        "groups": {
            "morfology": "<em>εκτέλεση </em>→ εκτε<span style=\"color: #900101\">λώ</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">εκτελώ</span> – казнить < др.греч. (<span style=\"color:#054728\">ἐκτελέω</span> < <span style=\"color:#054728\">ἐκ-</span>, <span style=\"color:#054728\">ἐξ-</span> (приставка вычитания; удаления: из; чего-то за рамками) + <span style=\"color:#054728\">τέλος</span> – конец)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Казнь"
        ],
        "transls": [
            "От слова Εκτελώ — казнить"
        ],
        "translation": "Казнь",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Казнить",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "εξαπάτηση",
        "base": "εξαπατώ",
        "groups": {
            "morfology": "<em>εξαπάτηση </em>→ <span style=\"color: #900101\">εξ-</span> + απατ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">εξαπατώ</span> - обмануть < др.греч. (<span style=\"color:#054728\">ἐξαπαταω</span> < <span style=\"color:#054728\">ἐξ-</span>, <span style=\"color:#054728\">ἐκ-</span> (приставка вычитания; удаления: из; чего-то за рамками) + <span style=\"color:#054728\">ἀπατάω</span> – обманывать, разбивать надежды < <span style=\"color:#054728\">ἀπάτη</span> – обман, мошенничество)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Обман"
        ],
        "transls": [
            "От слова Εξαπατώ — обмануть"
        ],
        "translation": "Обман",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Обмануть",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "επένδυση",
        "base": "επενδύω",
        "groups": {
            "morfology": "<em>επένδυση </em>→ <span style=\"color: #900101\">επ-</span> + <span style=\"color: #900101\">εν-</span> + δύ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">επενδύω</span> - инвестировать, вкладывать < др.греч. (<span style=\"color:#054728\">ἐπενδύω</span> – накрыть, одеться < <span style=\"color:#054728\">ἐπί-</span> (на, к, в) + <span style=\"color:#054728\">ἐνδύω</span> – облечься, надеть < <span style=\"color:#054728\">ἐν-</span> (в, внутрь) + <span style=\"color:#054728\">δύω</span> – помещать, погружаться, проникнуть)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Инвестиция, вклад"
        ],
        "transls": [
            "От слова Επενδύω — инвестировать, вкладывать"
        ],
        "translation": "Инвестиция, вклад",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Инвестировать, вкладывать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "επιβεβαίωση",
        "base": "επιβεβαιώνω",
        "groups": {
            "morfology": "<em>επιβεβαίωση </em>→ <span style=\"color: #900101\">επι-</span> + βεβαιώ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">επιβεβαιώνω</span> - подтверждать < <span style=\"color:#054728\">επι-</span> (приставка вычитания; удаления: из; чего-то за рамками) + <span style=\"color:#054728\">βεβαιώνω</span> – подтверждать, заверять) < др.греч. (<span style=\"color:#054728\">βεβαιόω</span> – укреплять, гарантировать < <span style=\"color:#054728\">βέβαιος</span> – определённый, уверенный, твёрдый < <span style=\"color:#054728\">βαίνω</span> – идти)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Подтверждение"
        ],
        "transls": [
            "От слова Επιβεβαιώνω — подтверждать"
        ],
        "translation": "Подтверждение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Подтверждать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "επίδεση",
        "base": "επιδένω",
        "groups": {
            "morfology": "<em>επίδεση </em>→ <span style=\"color: #900101\">επι-</span> + δέ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἐπίθεσις</span> – наложение, возложение < <span style=\"color:#054728\">ἐπιτίθημι</span> – класть, накладывать < <span style=\"color:#054728\">ἐπι-</span> (обозначает следование, сопровождение; положение: на) + <span style=\"color:#054728\">τῐθημῐ</span> – класть, учреждать)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Перевязка"
        ],
        "transls": [
            "От слова Επιδένω — перевязывать"
        ],
        "translation": "Перевязка",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Перевязывать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "επίσκεψη",
        "base": "επισκέπτομαι",
        "groups": {
            "morfology": "<em>επίσκεψη </em>→ <span style=\"color: #900101\">επι-</span> + σκέ<span style=\"color: #900101\">πτομαι</span> +<span style=\"color: #900101\"> -ψη</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἐπισκέπτομαι</span> — посещать < <span style=\"color:#054728\">ἐπι-</span> (обозначает следование, сопровождение; положение: на) + <span style=\"color:#054728\">σκέπτομαι</span> – смотреть, наблюдать).",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Посещение"
        ],
        "transls": [
            "От слова Επισκέπτομαι — посещать"
        ],
        "translation": "Посещение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Посещать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "θύμηση",
        "base": "θυμάμαι",
        "groups": {
            "morfology": "<em>θύμηση </em>→ θυμ<span style=\"color: #900101\">άμαι</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">θυμάμαι</span> – помнить < <span style=\"color:#054728\">θυμοῡμαι</span>) < др.греч (<span style=\"color:#054728\">ἐνθυμέομαι</span> – продумать, обдумать; принять близко к сердцу < <span style=\"color:#054728\">ἐν-</span> (в, внутрь) + <span style=\"color:#054728\">θῡμός</span> – душа, разум, воля; гнев)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Память, воспоминание"
        ],
        "transls": [
            "От слова Θυμάμαι — помнить"
        ],
        "translation": "Память, воспоминание",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Помнить",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "καταδίωξη",
        "base": "καταδιώκω",
        "groups": {
            "morfology": "<em>καταδίωξη </em>→ <span style=\"color: #900101\">κατα-</span> + διώ<span style=\"color: #900101\">κω</span> +<span style=\"color: #900101\"> -ξη</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">καταδιώκω</span> – преследовать < др.греч (<span style=\"color:#054728\">καταδιώκω</span> – преследовать, гнаться по пятам < <span style=\"color:#054728\">κατα-</span> (обозначает враждебность; усиление; направления: назад, вниз) + <span style=\"color:#054728\">διώκω</span> – отгонять, заставить бежать, преследовать < <span style=\"color:#054728\">δίω</span> – прогонять, преследовать)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Погоня"
        ],
        "transls": [
            "От слова Καταδιώκω — преследовать"
        ],
        "translation": "Погоня",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Преследовать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "κατάθεση",
        "base": "καταθέτω",
        "groups": {
            "morfology": "<em>κατάθεση </em>→ <span style=\"color: #900101\">κατα-</span> + θέ<span style=\"color: #900101\">τω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">καταθέτω</span> – вкладывать < др.греч (<span style=\"color:#054728\">κατατίθημι</span> – класть, складывать < <span style=\"color:#054728\">κατα-</span> (обозначает враждебность; усиление; направления: назад, вниз) + <span style=\"color:#054728\">τίθημι</span> – класть, ставить, полагать)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Сделать вклад"
        ],
        "transls": [
            "От слова Καταθέτω — вкладывать"
        ],
        "translation": "Сделать вклад",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Вкладывать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "κούραση",
        "base": "κουράζομαι",
        "groups": {
            "morfology": "<em>κούραση </em>→ κουρά<span style=\"color: #900101\">ζομαι</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">κούραση</span> < <span style=\"color:#054728\">κουράζω</span> – утомлять) < др.греч. <span style=\"color:#054728\">κουρά</span> – стрижка, подстригание.",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Усталость"
        ],
        "transls": [
            "От слова Κουράζομαι — устать"
        ],
        "translation": "Усталость",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Устать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "κρίση",
        "base": "κρίνω",
        "groups": {
            "morfology": "<em>κρίση </em>→ κρί<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> ση</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">κρίσις</span> – разделение, мнение, решение < <span style=\"color:#054728\">κρίνω</span> – разделять, решать, осуждать)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Кризис, мнение"
        ],
        "transls": [
            "От слова Κρίνω — решать, судить"
        ],
        "translation": "Кризис, мнение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Решать, судить",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "λάμψη",
        "base": "λάμπω",
        "groups": {
            "morfology": "<em>λάμψη </em>→ λαμ<span style=\"color: #900101\">πώ</span> +<span style=\"color: #900101\"> -ψη</span>",
            "etymology": "<br>От койне <span style=\"color:#054728\">λάμψις</span> < др.греч. <span style=\"color:#054728\">λάμπω</span> – светить, сиять.",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Cвечение, блеск"
        ],
        "transls": [
            "От слова Λάμπω — светить, сиять"
        ],
        "translation": "Cвечение, блеск",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Светить, сиять",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "λίπανση",
        "base": "λιπαίνω",
        "groups": {
            "morfology": "<em>λίπανση </em>→ λιπαίν<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "От койне <span style=\"color:#054728\">λίπανσις</span> – смазывание < др.греч. (<span style=\"color:#054728\">λιπαίνω</span> – смазывать < <span style=\"color:#054728\">λίπα</span> – богато, роскошно)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Смазывание"
        ],
        "transls": [
            "От слова Λιπαίνω – удобрять, смазать"
        ],
        "translation": "Смазывание",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Удобрять, смазать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα.",
        "voicePath": "/wp-content/themes/alfa-greek/assets/music/voices/word_formation_train/joanna_6.mp3"
    },
    {
        "word": "παραβίαση / παράβαση",
        "base": "παραβιάζω",
        "groups": {
            "morfology": "<em>παραβίαση, παράβαση </em>→ <span style=\"color: #900101\">παρα-</span> + βιά<span style=\"color: #900101\">ζω</span> + <span style=\"color: #900101\">-ση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">παραβιάζω</span> < <span style=\"color:#054728\">βιάζω</span> – применять силу < <span style=\"color:#054728\">βία</span> – сила, насилие).",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Нарушение"
        ],
        "transls": [
            "От слова Παραβιάζω — нарушать"
        ],
        "translation": "Нарушение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Нарушать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "παράλυση",
        "base": "παραλύω",
        "groups": {
            "morfology": "<em>παράλυση </em>→ <span style=\"color: #900101\">παρα-</span> + λύ<span style=\"color: #900101\">ω</span> + <span style=\"color: #900101\">-ση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">παραλύω</span> < <span style=\"color:#054728\">λύω</span> – освободить).",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Паралич"
        ],
        "transls": [
            "От слова Παραλύω — парализовать"
        ],
        "translation": "Паралич",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Парализовать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "περιφρόνηση",
        "base": "περιφρονώ",
        "groups": {
            "morfology": "<em>περιφρόνηση </em>→ περιφρον<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Презрение"
        ],
        "transls": [
            "От слова Περιφρονώ — презирать"
        ],
        "translation": "Презрение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Презирать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "ποίηση",
        "base": "ποιώ",
        "groups": {
            "morfology": "<em>ποίηση </em>→ ποι<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ποιώ</span> – делать, творить < др.греч. <span style=\"color:#054728\">ποιέω</span>, <span style=\"color:#054728\">ποιῶ</span>.",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Поэзия"
        ],
        "transls": [
            "От слова Ποιώ — творить, делать"
        ],
        "translation": "Поэзия",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Творить, делать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "προειδοποίηση",
        "base": "προειδοποιώ",
        "groups": {
            "morfology": "<em>προειδοποίηση </em>→ προειδοποι<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">προειδοποιώ</span> – предупреждать < <span style=\"color:#054728\">ειδοποιώ</span> – извещать).",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Предупреждение"
        ],
        "transls": [
            "От слова Προειδοποιώ — предупреждать"
        ],
        "translation": "Предупреждение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Предупреждать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "προπόνηση",
        "base": "προπονώ",
        "groups": {
            "morfology": "<em>προπόνηση </em>→ προπον<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Тренировка"
        ],
        "transls": [
            "От слова Προπονώ — тренировать"
        ],
        "translation": "Тренировка",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Тренировать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "πρόσδεση",
        "base": "προσδένω",
        "groups": {
            "morfology": "<em>πρόσδεση </em>→ προσδέ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Стыковка"
        ],
        "transls": [
            "От слова Προσδένω — стыковать"
        ],
        "translation": "Стыковка",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Стыковать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "πρόσκληση",
        "base": "προσκαλώ",
        "groups": {
            "morfology": "<em>πρόσκληση </em>→ προσκαλ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Приглашение-документ"
        ],
        "transls": [
            "От слова Προσκαλώ — приглашать"
        ],
        "translation": "Приглашение-документ",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Приглашать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "συζήτηση",
        "base": "συζητώ",
        "groups": {
            "morfology": "<em>συζήτηση </em>→ συζητ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Обсуждение, беседа"
        ],
        "transls": [
            "От слова Συζητώ — обсуждать, беседовать"
        ],
        "translation": "Обсуждение, беседа",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Обсуждать, беседовать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "σύλληψη",
        "base": "συλλαμβάνω",
        "groups": {
            "morfology": "<em>σύλληψη </em>→ συλλ<span style=\"color: #900101\">αμβάνω</span> +<span style=\"color: #900101\"> -ηψη</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">σύλληψις</span> < <span style=\"color:#054728\">συλλαμβάνω</span> – арестовать, собирать, забирать < <span style=\"color:#054728\">συλ-</span>, <span style=\"color:#054728\">συν-</span> (обозначает соучастность, одновременность) + <span style=\"color:#054728\">λαμβάνω</span> – получать, принимать, брать)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Арест"
        ],
        "transls": [
            "От слова Συλλαμβάνω — арестовать, собирать, забирать"
        ],
        "translation": "Арест",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Арестовать, собирать, забирать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "συνάντηση",
        "base": "συναντιέμαι",
        "groups": {
            "morfology": "<em>συνάντηση </em>→ συναντ<span style=\"color: #900101\">ιέμαι</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Встреча"
        ],
        "transls": [
            "От слова Συναντιέμαι — встречаться"
        ],
        "translation": "Встреча",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Встречаться",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "σύνδεση",
        "base": "συνδέω",
        "groups": {
            "morfology": "<em>σύνδεση </em>→ συνδέ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Подключение, союз"
        ],
        "transls": [
            "От слова Συνδέω — соединять"
        ],
        "translation": "Подключение, союз",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Соединять",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "σύνθεση",
        "base": "συνθέτω",
        "groups": {
            "morfology": "<em>σύνθεση </em>→ συνθέ<span style=\"color: #900101\">τω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Сочинение"
        ],
        "transls": [
            "От слова Συνθέτω — сочинять"
        ],
        "translation": "Сочинение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Сочинять",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "ταπείνωση",
        "base": "ταπεινώνω",
        "groups": {
            "morfology": "<em>ταπείνωση </em>→ ταπεινώ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Унижение"
        ],
        "transls": [
            "От слова Ταπεινώνω — унижать"
        ],
        "translation": "Унижение",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Унижать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "τοποθέτηση",
        "base": "τοποθετώ",
        "groups": {
            "morfology": "<em>τοποθέτηση </em>→ τοποθετ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Позиционирование"
        ],
        "transls": [
            "От слова Τοποθετώ — позиционировать"
        ],
        "translation": "Позиционирование",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Позиционировать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "μετάφραση",
        "base": "μεταφράζω",
        "groups": {
            "morfology": "<em>μετάφραση </em>→ μεταφρά<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Перевод"
        ],
        "transls": [
            "От слова Μεταφράζω — переводить"
        ],
        "translation": "Перевод",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Переводить",
        "notice": ""
    },
    {
        "word": "ξεκούραση",
        "base": "ξεκουράζομαι",
        "groups": {
            "morfology": "<em>ξεκούραση </em>→ ξεκουρά<span style=\"color: #900101\">ζομαι</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ξε-</span> (выражает противоположное, отмену) + <span style=\"color:#054728\">κούραση</span> – усталость < сред.греч. (<span style=\"color:#054728\">κούραση</span> – усталость < <span style=\"color:#054728\">κουράζω</span> – утомлять) < др.греч. <span style=\"color:#054728\">κουρά</span> – стрижка, подстригание.",
        },
        "qws": [
            "Отдых"
        ],
        "transls": [
            "От слова Ξεκουράζομαι — отдыхать"
        ],
        "translation": "Отдых",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Отдыхать",
        "notice": ""
    },
    {
        "word": "ύπνωση",
        "base": "υπνώνω",
        "groups": {
            "morfology": "<em>ύπνωση </em>→ υπνώ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">υπνώνω</span> – усыплять < др.греч. <span style=\"color:#054728\">ὕπνος</span> – сон",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Гипноз"
        ],
        "transls": [
            "От слова Υπνώνω — усыплять"
        ],
        "translation": "Гипноз",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Усыплять",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "υπόθεση",
        "base": "υποθέτω",
        "groups": {
            "morfology": "<em>υπόθεση </em>→ <span style=\"color: #900101\">υπο-</span> + θέ<span style=\"color: #900101\">τω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ὑπόθεσις</span> – предположение, гипотеза < <span style=\"color:#054728\">ὑποτίθημι</span> – подставлять, подкладывать < <span style=\"color:#054728\">ὑπο-</span> (под) + <span style=\"color:#054728\">τίθημι</span> – класть, ставить, полагать)",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Предположение, гипотеза"
        ],
        "transls": [
            "От слова Υποθέτω — предполагать"
        ],
        "translation": "Предположение, гипотеза",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Предполагать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "υποχώρηση",
        "base": "υποχωρώ",
        "groups": {
            "morfology": "<em>υποχώρηση </em>→ υποχωρ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ηση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Отступление"
        ],
        "transls": [
            "От слова Υποχωρώ — отступать"
        ],
        "translation": "Отступление",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Отступать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "υπόσχεση",
        "base": "υπόσχομαι",
        "groups": {
            "morfology": "<em>υπόσχεση </em>→ υπόσχ<span style=\"color: #900101\">ομαι</span> +<span style=\"color: #900101\"> -εση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Обещание"
        ],
        "transls": [
            "От слова Υπόσχομαι — обещать"
        ],
        "translation": "Обещание",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Обещать",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "φόρτωση",
        "base": "φορτώνω",
        "groups": {
            "morfology": "<em>φόρτωση </em>→ φορτώ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -ση</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Погрузка"
        ],
        "transls": [
            "От слова Φορτώνω — грузить"
        ],
        "translation": "Погрузка",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Грузить",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "φύλαξη",
        "base": "φυλάγω",
        "groups": {
            "morfology": "<em>φύλαξη </em>→ φυλά<span style=\"color: #900101\">γω</span> +<span style=\"color: #900101\"> -ξη</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
        },
        "qws": [
            "Хранение, охрана"
        ],
        "transls": [
            "От слова Φυλάγω — сторожить, хранить"
        ],
        "translation": "Хранение, охрана",
        "kind": "Существительные на -ση, -ηση (-ξη,-φη) от глаголов",
        "unicTransl": "Сторожить, хранить",
        "notice": "Существительные на -ση, -ηση (-ξη,-φη) означают действие (процесс) или его результат и образуются в основном от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -σίμο, -ξίμω, -φίμω и на -μα."
    },
    {
        "word": "αγάπη",
        "base": "αγαπάω",
        "groups": {
            "morfology": "<em>αγάπη </em>→ αγαπ<span style=\"color: #900101\">άω</span> +<span style=\"color: #900101\"> -η</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Любовь"
        ],
        "transls": [
            "От слова Αγαπάω — любить"
        ],
        "translation": "Любовь",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Любить",
        "notice": ""
    },
    {
        "word": "απειλή",
        "base": "απειλώ",
        "groups": {
            "morfology": "<em>απειλή </em>→ απειλ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Угроза"
        ],
        "transls": [
            "От слова Απειλώ — угрожать"
        ],
        "translation": "Угроза",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Угрожать",
        "notice": ""
    },
    {
        "word": "αστραπή",
        "base": "αστράπτω",
        "groups": {
            "morfology": "<em>αστραπή </em>→ αστράπ<span style=\"color: #900101\">τω</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Молния"
        ],
        "transls": [
            "От слова Αστράπτω — сверкать"
        ],
        "translation": "Молния",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Сверкать",
        "notice": ""
    },
    {
        "word": "βροντή",
        "base": "βροντάω",
        "groups": {
            "morfology": "<em>βροντή </em>→ βροντ<span style=\"color: #900101\">άω</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Гром"
        ],
        "transls": [
            "От слова Βροντάω — греметь"
        ],
        "translation": "Гром",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Греметь",
        "notice": ""
    },
    {
        "word": "βοσκή",
        "base": "βόσκω",
        "groups": {
            "morfology": "<em>βοσκή </em>→ βόσκ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">βοσκή</span> < <span style=\"color:#054728\">βόσκω</span> — пасти)"
        },
        "qws": [
            "Пастбище"
        ],
        "transls": [
            "От слова Βόσκω — пасти"
        ],
        "translation": "Пастбище",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Пасти",
        "notice": ""
    },
    {
        "word": "εισαγωγή",
        "base": "εισάγω",
        "groups": {
            "morfology": "<em>εισαγωγή </em>→ εισάγ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -γή</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">εἰσαγωγή</span> < <span style=\"color:#054728\">είς-</span> (в) + <span style=\"color:#054728\">ἀγωγή</span> — увод, перемещение < <span style=\"color:#054728\">ἄγω</span> — вести)",
        },
        "qws": [
            "Импорт"
        ],
        "transls": [
            "От слова Εισάγω — импортировать"
        ],
        "translation": "Импорт",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Импортировать",
        "notice": ""
    },
    {
        "word": "εμπιστοσύνη",
        "base": "εμπιστεύομαι",
        "groups": {
            "morfology": "<em>εμπιστοσύνη </em>→ εμπιστ<span style=\"color: #900101\">εύομαι</span> +<span style=\"color: #900101\"> -οσύνη</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Доверять, верить"
        ],
        "transls": [
            "От слова Εμπιστεύομαι — доверие"
        ],
        "translation": "Доверять, верить",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Доверие",
        "notice": ""
    },
    {
        "word": "εξαγωγή",
        "base": "εξάγω",
        "groups": {
            "morfology": "<em>εξαγωγή </em>→ εξάγ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -γή</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἐξᾰγωγή</span> < <span style=\"color:#054728\">ἀγωγή</span> — ведение, движение < <span style=\"color:#054728\">εξ-</span> (с, из) + <span style=\"color:#054728\">ἄγω</span> — вести)"
        },
        "qws": [
            "Экспорт, вывоз"
        ],
        "transls": [
            "От слова Εξάγω — экспортировать"
        ],
        "translation": "Экспорт, вывоз",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Экспортировать",
        "notice": ""
    },
    {
        "word": "ευχή",
        "base": "εύχομαι",
        "groups": {
            "morfology": "<em>ευχή </em>→ εύχ<span style=\"color: #900101\">ομαι</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">εὐχή</span> – мольба, молитва < <span style=\"color:#054728\">εὔχομαι</span> — пожелать, молить)"
        },
        "qws": [
            "Пожелание"
        ],
        "transls": [
            "От слова Εύχομαι — пожелать"
        ],
        "translation": "Пожелание",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Пожелать",
        "notice": ""
    },
    {
        "word": "λύπη",
        "base": "λυπάμαι",
        "groups": {
            "morfology": "<em>λύπη </em>→ λυπ<span style=\"color: #900101\">άμαι</span> +<span style=\"color: #900101\"> -η</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">λύπη</span>"
        },
        "qws": [
            "Сожалеть"
        ],
        "transls": [
            "От слова Λυπάμαι — сожаление"
        ],
        "translation": "Сожалеть",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Сожаление",
        "notice": ""
    },
    {
        "word": "περιγραφή",
        "base": "περιγράφω",
        "groups": {
            "morfology": "<em>περιγραφή </em>→ περιγράφ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -η</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">περιγραφή</span> < <span style=\"color:#054728\">περῐγρᾰφω</span> – описать < <span style=\"color:#054728\">περι-</span> (вокруг) + <span style=\"color:#054728\">γράφω</span> – писать)",
        },
        "qws": [
            "Описание"
        ],
        "transls": [
            "От слова Περιγράφω — описать"
        ],
        "translation": "Описание",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Описать",
        "notice": ""
    },
    {
        "word": "προσβολή",
        "base": "προσβάλλω",
        "groups": {
            "morfology": "<em>προσβολή </em>→ προσβάλ<span style=\"color: #900101\">λω</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Оскорбление"
        ],
        "transls": [
            "От слова Προσβάλλω — оскорблять"
        ],
        "translation": "Оскорбление",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Оскорблять",
        "notice": ""
    },
    {
        "word": "συμμετοχή",
        "base": "σημμετέχω",
        "groups": {
            "morfology": "<em>συμμετοχή </em>→ σημμετ<span style=\"color: #900101\">έχω</span> +<span style=\"color: #900101\"> -οχή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Участие"
        ],
        "transls": [
            "От слова Σημμετέχω — участвовать"
        ],
        "translation": "Участие",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Участвовать",
        "notice": ""
    },
    {
        "word": "σιωπή",
        "base": "σιωπώ",
        "groups": {
            "morfology": "<em>σιωπή </em>→ σιωπ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Молчание"
        ],
        "transls": [
            "От слова Σιωπώ — молчать"
        ],
        "translation": "Молчание",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Молчать",
        "notice": ""
    },
    {
        "word": "στροφή",
        "base": "στρίβω",
        "groups": {
            "morfology": "<em>στροφή </em>→ στρ<span style=\"color: #900101\">ίβω</span> +<span style=\"color: #900101\"> -οφή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Поворот"
        ],
        "transls": [
            "От слова Στρίβω — поворачивать"
        ],
        "translation": "Поворот",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Поворачивать",
        "notice": ""
    },
    {
        "word": "συλλογή",
        "base": "συλλέγω",
        "groups": {
            "morfology": "<em>συλλογή </em>→ συλλ<span style=\"color: #900101\">έγω</span> +<span style=\"color: #900101\"> -ογή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Коллекция"
        ],
        "transls": [
            "От слова Συλλέγω — коллекционировать"
        ],
        "translation": "Коллекция",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Коллекционировать",
        "notice": ""
    },
    {
        "word": "συμβουλή",
        "base": "συμβουλεύω",
        "groups": {
            "morfology": "<em>συμβουλή </em>→ συμβουλ<span style=\"color: #900101\">εύω</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Совет"
        ],
        "transls": [
            "От слова Συμβουλεύω — советовать"
        ],
        "translation": "Совет",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Советовать",
        "notice": ""
    },
    {
        "word": "υπογραφή",
        "base": "υπογράφω",
        "groups": {
            "morfology": "<em>υπογραφή </em>→ υπογράφ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ὑπογραφή</span> < <span style=\"color:#054728\">ὑπογράφω</span> – подписать < <span style=\"color:#054728\">ὑπό-</span> (под) + <span style=\"color:#054728\">γράφω</span> – писать)",
        },
        "qws": [
            "Подпись"
        ],
        "transls": [
            "От слова Υπογράφω — подписать"
        ],
        "translation": "Подпись",
        "kind": "Существительные на -η от глаголов",
        "unicTransl": "Подписать",
        "notice": ""
    },
    {
        "word": "δέσιμο",
        "base": "δένω",
        "groups": {
            "morfology": "<em>δέσιμο </em>→ δέ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -σιμο</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">δένω</span> – связывать, привязывать < др.греч. <span style=\"color:#054728\">δέω</span>, <span style=\"color:#054728\">δένω</span> – связывать, привязывать.",
            "aplication": "<br>Существительные на -σίμο, -ξίμω, -φίμω означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -μα."
        },
        "qws": [
            "Связывание, привязываниe, перевязкa"
        ],
        "transls": [
            "От слова Δένω — завязывать, связывать"
        ],
        "translation": "Связывание, привязываниe, перевязкa",
        "kind": "Существительные на -σίμο, -ξίμω, -φίμω от глаголов",
        "unicTransl": "Завязывать, связывать",
        "notice": "Существительные на -σίμο, -ξίμω, -φίμω означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -μα."
    },
    {
        "word": "δάρσιμο",
        "base": "δέρνω",
        "groups": {
            "morfology": "<em>δάρσιμο </em>→ δ<span style=\"color: #900101\">έρνω</span> +<span style=\"color: #900101\"> -άρσιμο</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">δέρνω</span> – бить < др.греч. <span style=\"color:#054728\">δέρω</span> – сдирать, обдирать, лупить.",
            "aplication": "<br>Существительные на -σίμο, -ξίμω, -φίμω означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -μα."
        },
        "qws": [
            "Избиение"
        ],
        "transls": [
            "От слова Δέρνω — бить"
        ],
        "translation": "Избиение",
        "kind": "Существительные на -σίμο, -ξίμω, -φίμω от глаголов",
        "unicTransl": "Бить",
        "notice": "Существительные на -σίμο, -ξίμω, -φίμω означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -μα."
    },
    {
        "word": "σκάψιμο",
        "base": "σκάβω",
        "groups": {
            "morfology": "<em>σκάψιμο </em>→ σκά<span style=\"color: #900101\">βω</span> +<span style=\"color: #900101\"> -ψιμο</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">σκάφτω, σκάβω</span> – копать < др.греч. <span style=\"color:#054728\">σκάπτω</span> — копать.",
            "aplication": "<br>Существительные на -σίμο, -ξίμω, -φίμω означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -μα."
        },
        "qws": [
            "Рытьё"
        ],
        "transls": [
            "От слова Σκάβω — рыть"
        ],
        "translation": "Рытьё",
        "kind": "Существительные на -σίμο, -ξίμω, -φίμω от глаголов",
        "unicTransl": "Рыть",
        "notice": "Существительные на -σίμο, -ξίμω, -φίμω означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -μα."
    },
    {
        "word": "τρέξιμο",
        "base": "τρέχω",
        "groups": {
            "morfology": "<em>τρέξιμο </em>→ τρέ<span style=\"color: #900101\">χω</span> +<span style=\"color: #900101\"> ξιμο</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">τρέξιμον</span> – бить < др.греч. <span style=\"color:#054728\">τρέχω</span> – бежать, течь.",
            "aplication": "<br>Существительные на -σίμο, -ξίμω, -φίμω означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -μα."
        },
        "qws": [
            "Бег, течение"
        ],
        "transls": [
            "От слова Τρέχω — бежать"
        ],
        "translation": "Бег, течение",
        "kind": "Существительные на -σίμο, -ξίμω, -φίμω от глаголов",
        "unicTransl": "Бежать",
        "notice": "Существительные на -σίμο, -ξίμω, -φίμω означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -μα."
    },
    {
        "word": "χάσιμο",
        "base": "χάνω",
        "groups": {
            "morfology": "<em>χάσιμο </em>→ χά<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -σιμο</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">χάνω</span> < др.греч. <span style=\"color:#054728\">χάνω</span> – терять.",
            "aplication": "<br>Существительные на -σίμο, -ξίμω, -φίμω означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -μα."
        },
        "qws": [
            "Потеря, проигрыш"
        ],
        "transls": [
            "От слова Χάνω — терять, проиграть"
        ],
        "translation": "Потеря, проигрыш",
        "kind": "Существительные на -σίμο, -ξίμω, -φίμω от глаголов",
        "unicTransl": "Терять, проиграть",
        "notice": "Существительные на -σίμο, -ξίμω, -φίμω означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -μα."
    },
    {
        "word": "αγόρασμα",
        "base": "αγοράζω",
        "groups": {
            "morfology": "<em>αγόρασμα </em>→ αγορά<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -σμα</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀγόρασμα</span> < <span style=\"color:#054728\">ἀγοράζω</span> – покупать < <span style=\"color:#054728\">ἀγορά</span> – собрание, товар)",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Покупка-процесс"
        ],
        "transls": [
            "От слова Αγοράζω — покупать"
        ],
        "translation": "Покупка-процесс",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Покупать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "γάυγισμα",
        "base": "γαυγίζω",
        "groups": {
            "morfology": "<em>γάυγισμα </em>→ γαυγί<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -σμα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">γαυγίζω</span> – лаять < <span style=\"color:#054728\">γαβ</span> – гав (звукоподражание)",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Лай"
        ],
        "transls": [
            "От слова Γαυγίζω — лаять"
        ],
        "translation": "Лай",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Лаять",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "δέμα",
        "base": "δένω",
        "groups": {
            "morfology": "<em>δέμα </em>→ δέ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -μα</span>",
            "etymology": "<br>От койне <span style=\"color:#054728\">δέμα</span> < др.греч. <span style=\"color:#054728\">δέω</span>, <span style=\"color:#054728\">δένω</span> – связывать, привязывать.",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Связка, пучок, тюк, пакет, шнурок, повязка"
        ],
        "transls": [
            "От слова Δένω — связывать, привязывать"
        ],
        "translation": "Связка, пучок, тюк, пакет, шнурок, повязка",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Связывать, привязывать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "έμβασμα",
        "base": "εμβάζω",
        "groups": {
            "morfology": "<em>έμβασμα </em>→ εμβά<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -σμα</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">εμβάζω</span> – переводить деньги < <span style=\"color:#054728\">εμβιβάζω</span> – сажать, грузить, приводить < <span style=\"color:#054728\">εν-</span> (в) + <span style=\"color:#054728\">βιβάζω</span> – поднимать) < др.греч. <span style=\"color:#054728\">βαίνω</span> – идти.",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Денежный перевод"
        ],
        "transls": [
            "От слова Εμβάζω — переводить деньги"
        ],
        "translation": "Денежный перевод",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Переводить деньги",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "κάπνισμα",
        "base": "καπνίζω",
        "groups": {
            "morfology": "<em>κάπνισμα </em>→ καπνί<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -σμα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">καπνίζω</span> – курить < др.греч. <span style=\"color:#054728\">καπνός</span> – дым.",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Курение"
        ],
        "transls": [
            "От слова Καπνίζω — курить"
        ],
        "translation": "Курение",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Курить",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "κέντημα",
        "base": "κεντώ",
        "groups": {
            "morfology": "<em>κέντημα </em>→ κεντ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ημα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Вышивка"
        ],
        "transls": [
            "От слова Κεντώ — вышивать"
        ],
        "translation": "Вышивка",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Вышивать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "κουδούνισμα",
        "base": "κουδουνίζω",
        "groups": {
            "morfology": "<em>κουδούνισμα </em>→ κουδουνί<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -σμα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Звон"
        ],
        "transls": [
            "От слова Κουδουνίζω — звонить, звякать"
        ],
        "translation": "Звон",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Звонить, звякать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "κρυολόγημα",
        "base": "κρυολογώ",
        "groups": {
            "morfology": "<em>κρυολόγημα </em>→ κρυολογ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ημα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Простуда"
        ],
        "transls": [
            "От слова Κρυολογώ — простудиться"
        ],
        "translation": "Простуда",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Простудиться",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "λίπασμα",
        "base": "λιπαίνω",
        "groups": {
            "morfology": "<em>λίπασμα </em>→ λιπ<span style=\"color: #900101\">αίνω</span> +<span style=\"color: #900101\"> -ασμα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Удобрение-вещество"
        ],
        "transls": [
            "От слова Λιπαίνω — удобрять, смазать"
        ],
        "translation": "Удобрение-вещество",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Удобрять, смазать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "μαύρισμα",
        "base": "μαυρίζω",
        "groups": {
            "morfology": "<em>μαύρισμα </em>→ μαυρί<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -σμα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Загар"
        ],
        "transls": [
            "От слова Μαυρίζω — загорать"
        ],
        "translation": "Загар",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Загорать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "μήνυμα",
        "base": "μηνώ",
        "groups": {
            "morfology": "<em>μήνυμα </em>→ μην<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -υμα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Уведомление, вызов"
        ],
        "transls": [
            "От слова Μηνώ — уведомлять, вызывать к себе"
        ],
        "translation": "Уведомление, вызов",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Уведомлять, вызывать к себе",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "πέταμα",
        "base": "πετώ",
        "groups": {
            "morfology": "<em>πέταμα </em>→ πετώ +<span style=\"color: #900101\"> -αμα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Полет, бросание, выбрасывание"
        ],
        "transls": [
            "От слова Πετώ — летать, бросать"
        ],
        "translation": "Полет, бросание, выбрасывание",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Летать, бросать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "ποίημα",
        "base": "ποιώ",
        "groups": {
            "morfology": "<em>ποίημα </em>→ ποι<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ημα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ποιώ</span> – делать, творить < др.греч. <span style=\"color:#054728\">ποιέω</span>, <span style=\"color:#054728\">ποιῶ</span>.",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Стих, поэма"
        ],
        "transls": [
            "От слова Ποιώ — творить, делать"
        ],
        "translation": "Стих, поэма",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Творить, делать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "πότισμα",
        "base": "ποτίζω",
        "groups": {
            "morfology": "<em>πότισμα </em>→ ποτί<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -σμα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Полив"
        ],
        "transls": [
            "От слова Ποτίζω — поливать"
        ],
        "translation": "Полив",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Поливать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "σφράγισμα",
        "base": "σφραγίζω",
        "groups": {
            "morfology": "<em>σφράγισμα </em>→ σφραγί<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -σμα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Пломба"
        ],
        "transls": [
            "От слова Σφραγίζω — пломбировать"
        ],
        "translation": "Пломба",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Пломбировать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "τραγούδησμα",
        "base": "τραγουδώ",
        "groups": {
            "morfology": "<em>τραγούδησμα </em>→ τραγουδ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ησμα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Пение"
        ],
        "transls": [
            "От слова Τραγουδώ — петь"
        ],
        "translation": "Пение",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Петь",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "φόρτωμα",
        "base": "φορτώνω",
        "groups": {
            "morfology": "<em>φόρτωμα </em>→ φορτώ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -μα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Груз, ноша, надоедливость"
        ],
        "transls": [
            "От слова Φορτώνω — нагружать"
        ],
        "translation": "Груз, ноша, надоедливость",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Нагружать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "ψάρεμα",
        "base": "ψαρεύω",
        "groups": {
            "morfology": "<em>ψάρεμα </em>→ ψαρε<span style=\"color: #900101\">ύω</span> +<span style=\"color: #900101\"> -μα</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">ψάρεμα</span> < <span style=\"color:#054728\">ψάρευμα</span> < <span style=\"color:#054728\">ψαρεύω</span> – рыбачить) < др.греч. <span style=\"color:#054728\">ὀψάριον</span> – деликатесик < <span style=\"color:#054728\">ὄψον</span> – деликатеc).",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Рыбалка"
        ],
        "transls": [
            "От слова Ψαρεύω — рыбачить"
        ],
        "translation": "Рыбалка",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Рыбачить",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "ψιθύρισμα",
        "base": "ψιθυρίζω",
        "groups": {
            "morfology": "<em>ψιθύρισμα </em>→ ψιθυρί<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -σμα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
        },
        "qws": [
            "Шёпот"
        ],
        "transls": [
            "От слова Ψιθυρίζω — шептать"
        ],
        "translation": "Шёпот",
        "kind": "Существительные на -μα от глаголов",
        "unicTransl": "Шептать",
        "notice": "Существительные на -μα означают действие (процесс) или его результат и образуются от глаголов. С тем же смыслом образуются существительные на -μός, -ισμος, на -ση, -ηση (-ξη,-φη), -φίμω и на -σίμο, -ξίμω, -φίμω."
    },
    {
        "word": "σκουπίδι",
        "base": "σκουπίζω",
        "groups": {
            "morfology": "<em>σκουπίδι </em>→ σκουπ<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -ίδι</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Мусор"
        ],
        "transls": [
            "От слова Σκουπίζω — подметать, вытирать"
        ],
        "translation": "Мусор",
        "kind": "Существительные на -ίδι от глаголов",
        "unicTransl": "Подметать, вытирать",
        "notice": ""
    },
    {
        "word": "στολίδι",
        "base": "στολίζω",
        "groups": {
            "morfology": "<em>στολίδι </em>→ στολ<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -ίδι</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Украшение"
        ],
        "transls": [
            "От слова Στολίζω — украшать"
        ],
        "translation": "Украшение",
        "kind": "Существительные на -ίδι от глаголов",
        "unicTransl": "Украшать",
        "notice": ""
    },
    {
        "word": "τρεξίδι",
        "base": "τρέχω, έτρεξα",
        "groups": {
            "morfology": "<em>τρεξίδι </em>→ τρέχω, έτρεξ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ίδι</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Бег"
        ],
        "transls": [
            "От слова Τρέχω, έτρεξα — бежать"
        ],
        "translation": "Бег",
        "kind": "Существительные на -ίδι от глаголов",
        "unicTransl": "Бежать",
        "notice": ""
    },
    {
        "word": "βογκητό",
        "base": "βογκώ",
        "groups": {
            "morfology": "<em>βογκητό </em>→ βογκ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ητό</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Стон"
        ],
        "transls": [
            "От слова Βογκώ — стонать"
        ],
        "translation": "Стон",
        "kind": "Существительные на -ητό от глаголов",
        "unicTransl": "Стонать",
        "notice": ""
    },
    {
        "word": "ξεφωνητό",
        "base": "ξεφωνίζω",
        "groups": {
            "morfology": "<em>ξεφωνητό </em>→ ξεφων<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -ητό</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Вопль"
        ],
        "transls": [
            "От слова Ξεφωνίζω — вопить"
        ],
        "translation": "Вопль",
        "kind": "Существительные на -ητό от глаголов",
        "unicTransl": "Вопить",
        "notice": ""
    },
    {
        "word": "παραμιλητό",
        "base": "παραμιλώ",
        "groups": {
            "morfology": "<em>παραμιλητό </em>→ παραμιλ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ητό</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Бред"
        ],
        "transls": [
            "От слова Παραμιλώ — бредить"
        ],
        "translation": "Бред",
        "kind": "Существительные на -ητό от глаголов",
        "unicTransl": "Бредить",
        "notice": ""
    },
    {
        "word": "κλεισούρα",
        "base": "κλείνω",
        "groups": {
            "morfology": "<em>κλεισούρα </em>→ κλεί<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -σούρα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Узкое место, ущелье"
        ],
        "transls": [
            "От слова Κλείνω — закрывать, запирать"
        ],
        "translation": "Узкое место, ущелье",
        "kind": "Существительные на -ούρα от глаголов",
        "unicTransl": "Закрывать, запирать",
        "notice": ""
    },
    {
        "word": "απεργός",
        "base": "απεργώ",
        "groups": {
            "morfology": "<em>απεργός </em>→ απεργ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Забастовщик"
        ],
        "transls": [
            "От слова Απεργώ — бастовать"
        ],
        "translation": "Забастовщик",
        "kind": "Существительные на -ος, -ί, -ιο, от глаголов",
        "unicTransl": "Бастовать",
        "notice": ""
    },
    {
        "word": "βοσκός",
        "base": "βόσκω",
        "groups": {
            "morfology": "<em>βοσκός </em>→ βόσκ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ος</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">βοσκός</span> < <span style=\"color:#054728\">βόσκω</span> — пасти)"
        },
        "qws": [
            "Пастух"
        ],
        "transls": [
            "От слова Βόσκω — пасти"
        ],
        "translation": "Пастух",
        "kind": "Существительные на -ος, -ί, -ιο, от глаголов",
        "unicTransl": "Пасти",
        "notice": ""
    },
    {
        "word": "κόστος",
        "base": "κοστίζω",
        "groups": {
            "morfology": "<em>κόστος </em>→ κοστ<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -ος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Цена, стоимость"
        ],
        "transls": [
            "От слова Κοστίζω — стоить"
        ],
        "translation": "Цена, стоимость",
        "kind": "Существительные на -ος, -ί, -ιο, от глаголов",
        "unicTransl": "Стоить",
        "notice": ""
    },
    {
        "word": "σημμέτοχος",
        "base": "σημμετέχω",
        "groups": {
            "morfology": "<em>σημμέτοχος </em>→ σημμετ<span style=\"color: #900101\">έχω</span> +<span style=\"color: #900101\"> -οχος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Участник"
        ],
        "transls": [
            "От слова Σημμετέχω — участвовать"
        ],
        "translation": "Участник",
        "kind": "Существительные на -ος, -ί, -ιο, от глаголов",
        "unicTransl": "Участвовать",
        "notice": ""
    },
    {
        "word": "γέλιο",
        "base": "γελώ",
        "groups": {
            "morfology": "<em>γέλιο </em>→ γελ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ιο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Смех"
        ],
        "transls": [
            "От слова Γελώ — смеяться"
        ],
        "translation": "Смех",
        "kind": "Существительные на -ος, -ί, -ιο, от глаголов",
        "unicTransl": "Смеяться",
        "notice": ""
    },
    {
        "word": "ζυγί",
        "base": "ζυγιάζω",
        "groups": {
            "morfology": "<em>ζυγί </em>→ ζυγ<span style=\"color: #900101\">ιάζω</span> +<span style=\"color: #900101\"> -ί</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Вес, тяжесть, гиря"
        ],
        "transls": [
            "От слова Ζυγιάζω — весить, взвешивать"
        ],
        "translation": "Вес, тяжесть, гиря",
        "kind": "Существительные на -ος, -ί, -ιο, от глаголов",
        "unicTransl": "Весить, взвешивать",
        "notice": ""
    },
    {
        "word": "κολύμπι",
        "base": "κολυμπώ",
        "groups": {
            "morfology": "<em>κολύμπι </em>→ κολυμπ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ι</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Плавание"
        ],
        "transls": [
            "От слова Κολυμπώ — плавать"
        ],
        "translation": "Плавание",
        "kind": "Существительные на -ος, -ί, -ιο, от глаголов",
        "unicTransl": "Плавать",
        "notice": ""
    },
    {
        "word": "λουτρός / λουτρό",
        "base": "λούζω",
        "groups": {
            "morfology": "<em>λουτρός </em>→ λού<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -ός</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">λουτρόν</span> – ванная, <span style=\"color:#054728\">λούω</span> – купать)",
        },
        "qws": [
            "Ванна"
        ],
        "transls": [
            "От слова Λούζω — купать"
        ],
        "translation": "Ванна",
        "kind": "Существительные на -ος, -ί, -ιο, от глаголов",
        "unicTransl": "Купать",
        "notice": ""
    },
    {
        "word": "τραγούδι",
        "base": "τραγουδώ",
        "groups": {
            "morfology": "<em>τραγούδι </em>→ τραγουδ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ι</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Песня"
        ],
        "transls": [
            "От слова Τραγουδώ — петь"
        ],
        "translation": "Песня",
        "kind": "Существительные на -ος, -ί, -ιο, от глаголов",
        "unicTransl": "Петь",
        "notice": ""
    },
    {
        "word": "ανάσα",
        "base": "ανασαίνω",
        "groups": {
            "morfology": "<em>ανάσα </em>→ ανασ<span style=\"color: #900101\">αίνω</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Дыхание"
        ],
        "transls": [
            "От слова Ανασαίνω — дышать"
        ],
        "translation": "Дыхание",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Дышать",
        "notice": ""
    },
    {
        "word": "πάστρα",
        "base": "παστρεύω",
        "groups": {
            "morfology": "<em>πάστρα </em>→ παστρ<span style=\"color: #900101\">εύω</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Чистота, опрятность"
        ],
        "transls": [
            "От слова Παστρεύω — чистить"
        ],
        "translation": "Чистота, опрятность",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Чистить",
        "notice": ""
    },
    {
        "word": "γιατρειά",
        "base": "γιατρεύω",
        "groups": {
            "morfology": "<em>γιατρειά </em>→ γιατρ<span style=\"color: #900101\">εύω</span> +<span style=\"color: #900101\"> -εια</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Лечение"
        ],
        "transls": [
            "От слова Γιατρεύω — лечить"
        ],
        "translation": "Лечение",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Лечить",
        "notice": ""
    },
    {
        "word": "δουλειά",
        "base": "δουλεύω",
        "groups": {
            "morfology": "<em>δουλειά </em>→ δουλ<span style=\"color: #900101\">εύω</span> +<span style=\"color: #900101\"> -ειά</span>",
            "etymology": "<br>От койне (<span style=\"color:#054728\">δουλεία</span> – работа, рабство < <span style=\"color:#054728\">δουλεύω</span> – быть рабом, служить) < др.греч. (<span style=\"color:#054728\">δουλόω</span> – порабощать < <span style=\"color:#054728\">δοῦλος</span> – раб)",
        },
        "qws": [
            "Работа"
        ],
        "transls": [
            "От слова Δουλεύω — работать"
        ],
        "translation": "Работа",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Работать",
        "notice": ""
    },
    {
        "word": "ζωγραφιά",
        "base": "ζωγραφίζω",
        "groups": {
            "morfology": "<em>ζωγραφιά </em>→ ζωγράφ<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">ζωγραφιά</span> < др.греч. (<span style=\"color:#054728\">ζωγραφία</span> < др.греч. <span style=\"color:#054728\">ζωγράφος</span> – художник < <span style=\"color:#054728\">ζωός</span> (живой) или <span style=\"color:#054728\">ζωή</span> (жизнь) + <span style=\"color:#054728\">γράφος</span> – писатель < <span style=\"color:#054728\">γράφω</span> – писать)",
        },
        "qws": [
            "Картина"
        ],
        "transls": [
            "От слова Ζωγραφίζω — художник"
        ],
        "translation": "Картина",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Художник",
        "notice": ""
    },
    {
        "word": "θεραπεία",
        "base": "θεραπεύω",
        "groups": {
            "morfology": "<em>θεραπεία </em>→ θεραπ<span style=\"color: #900101\">εύω</span> +<span style=\"color: #900101\"> -εία</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">θεραπεία</span> < <span style=\"color:#054728\">θεραπεύω</span> – лечить, ухаживать < <span style=\"color:#054728\">θεράπων</span> – соратник, товарищ; слуга)",
        },
        "qws": [
            "Лечение, уход, забота"
        ],
        "transls": [
            "От слова Θεραπεύω — лечить, ухаживать"
        ],
        "translation": "Лечение, уход, забота",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Лечить, ухаживать",
        "notice": ""
    },
    {
        "word": "καλλιέργεια",
        "base": "καλλιεργώ",
        "groups": {
            "morfology": "<em>καλλιέργεια </em>→ καλλιέργ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -εια</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">καλλιέργεια</span> < койне (<span style=\"color:#054728\">καλλιεργεία</span> < <span style=\"color:#054728\">καλλιεργώ</span>, <span style=\"color:#054728\">καλλιεργέω</span> – культивировать, возделывать) < др.греч. <span style=\"color:#054728\">κάλλος</span> (прекрасный) + <span style=\"color:#054728\">ἔργον</span> – дело, труд, действие.",
        },
        "qws": [
            "Культивирование, разведение, возделывание, усердное занятие"
        ],
        "transls": [
            "От слова Καλλιέργω — культивировать, возделывать"
        ],
        "translation": "Культивирование, разведение, возделывание, усердное занятие",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Культивировать, возделывать",
        "notice": ""
    },
    {
        "word": "λατρεία",
        "base": "λατρεύω",
        "groups": {
            "morfology": "<em>λατρεία </em>→ λατρ<span style=\"color: #900101\">εύω</span> +<span style=\"color: #900101\"> -εία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Обожание"
        ],
        "transls": [
            "От слова Λατρεύω — обожать, поклоняться"
        ],
        "translation": "Обожание",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Обожать, поклоняться",
        "notice": ""
    },
    {
        "word": "προσπάθεια",
        "base": "προσπαθώ",
        "groups": {
            "morfology": "<em>προσπάθεια </em>→ προσπαθ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -εια</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Старание, усердие"
        ],
        "transls": [
            "От слова Προσπαθώ — стараться"
        ],
        "translation": "Старание, усердие",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Стараться",
        "notice": ""
    },
    {
        "word": "ωφέλεια",
        "base": "ωφελώ",
        "groups": {
            "morfology": "<em>ωφέλεια </em>→ ωφελ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -εια</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Польза, выгода, прибыль"
        ],
        "transls": [
            "От слова Ωφελώ — приносить пользу, помогать"
        ],
        "translation": "Польза, выгода, прибыль",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Приносить пользу, помогать",
        "notice": ""
    },
    {
        "word": "αλληλογραφία",
        "base": "αλληλογραφώ",
        "groups": {
            "morfology": "<em>αλληλογραφία </em>→ αλληλογραφ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">αλληλο-</span> (указывает взаимность: меж-, пере-) + <span style=\"color:#054728\">γραφία</span>, <span style=\"color:#054728\">γραφή</span> – письмо, рисование < <span style=\"color:#054728\">γράφω</span> – писать, рисовать) < др.греч. γράφω – писать, рисовать."
        },
        "qws": [
            "Переписка"
        ],
        "transls": [
            "От слова Αλληλογραφώ — переписываться"
        ],
        "translation": "Переписка",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Переписываться",
        "notice": ""
    },
    {
        "word": "ανησυχία",
        "base": "ανησυχώ",
        "groups": {
            "morfology": "<em>ανησυχία </em>→ ανησυχ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ανήσυχος</span> – беспокойный, тревожный < др.греч. (<span style=\"color:#054728\">ἀνήσυχος</span> < <span style=\"color:#054728\">ἀν-</span> / <span style=\"color:#054728\">ἀ-</span> (приставка отсутствия, объединения, усиления или не влияет на смысл) + <span style=\"color:#054728\">ἥσυχος</span> – тихий, спокойный.",
        },
        "qws": [
            "Беспокойство"
        ],
        "transls": [
            "От слова Ανησυχώ — беспокоить, беспокоиться"
        ],
        "translation": "Беспокойство",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Беспокоить, беспокоиться",
        "notice": ""
    },
    {
        "word": "απατία",
        "base": "απατώ",
        "groups": {
            "morfology": "<em>απατία </em>→ απατ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Измена"
        ],
        "transls": [
            "От слова Απατώ — изменить"
        ],
        "translation": "Измена",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Изменить",
        "notice": ""
    },
    {
        "word": "απεργία",
        "base": "απεργώ",
        "groups": {
            "morfology": "<em>απεργία </em>→ απεργ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">απεργός</span> – забастовщик < др.греч. <span style=\"color:#054728\">απο-</span> (удаление, разделение; лишение; усиление) + <span style=\"color:#054728\">ἔργον</span> – работа, труд.",
        },
        "qws": [
            "Забастовка"
        ],
        "transls": [
            "От слова Απεργώ — бастовать"
        ],
        "translation": "Забастовка",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Бастовать",
        "notice": ""
    },
    {
        "word": "απουσία",
        "base": "απουσιάζω",
        "groups": {
            "morfology": "<em>απουσία </em>→ απουσ<span style=\"color: #900101\">ιάζω</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Пропуск, отсутствие"
        ],
        "transls": [
            "От слова Απουσιάζω — отсутствовать"
        ],
        "translation": "Пропуск, отсутствие",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Отсутствовать",
        "notice": ""
    },
    {
        "word": "δωροδοκία",
        "base": "δωροδοκώ",
        "groups": {
            "morfology": "<em>δωροδοκία </em>→ δωροδοκ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Подкуп"
        ],
        "transls": [
            "От слова Δωροδοκώ — подкупать"
        ],
        "translation": "Подкуп",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Подкупать",
        "notice": ""
    },
    {
        "word": "επικοινωνία",
        "base": "επικοινωνώ",
        "groups": {
            "morfology": "<em>επικοινωνία </em>→ επικοινων<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Общение"
        ],
        "transls": [
            "От слова Επικοινωνώ — общаться"
        ],
        "translation": "Общение",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Общаться",
        "notice": ""
    },
    {
        "word": "κατηγορία",
        "base": "κατηγορώ",
        "groups": {
            "morfology": "<em>κατηγορία </em>→ κατηγορ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Обвинение"
        ],
        "transls": [
            "От слова Κατηγορώ — обвинять"
        ],
        "translation": "Обвинение",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Обвинять",
        "notice": ""
    },
    {
        "word": "λιποθυμία",
        "base": "λιποθυμώ",
        "groups": {
            "morfology": "<em>λιποθυμία </em>→ λιποθυμ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Обморок"
        ],
        "transls": [
            "От слова Λιποθυμώ — упасть в обморок"
        ],
        "translation": "Обморок",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Упасть в обморок",
        "notice": ""
    },
    {
        "word": "προστασία",
        "base": "προστατεύω",
        "groups": {
            "morfology": "<em>προστασία </em>→ προστ<span style=\"color: #900101\">ατεύω</span> +<span style=\"color: #900101\"> -ασία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Охрана"
        ],
        "transls": [
            "От слова Προστατεύω — охранять"
        ],
        "translation": "Охрана",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Охранять",
        "notice": ""
    },
    {
        "word": "συσκευασία",
        "base": "συσκευάζω",
        "groups": {
            "morfology": "<em>συσκευασία </em>→ συσκευ<span style=\"color: #900101\">άζω</span> +<span style=\"color: #900101\"> -ασία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Упаковка-действие"
        ],
        "transls": [
            "От слова Συσκευάζω — упаковать"
        ],
        "translation": "Упаковка-действие",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Упаковать",
        "notice": ""
    },
    {
        "word": "τιμωρία",
        "base": "τιμωρώ",
        "groups": {
            "morfology": "<em>τιμωρία </em>→ τιμωρ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Наказание"
        ],
        "transls": [
            "От слова Τιμωρώ — наказывать"
        ],
        "translation": "Наказание",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Наказывать",
        "notice": ""
    },
    {
        "word": "τοποθεσία",
        "base": "τοποθετώ",
        "groups": {
            "morfology": "<em>τοποθεσία </em>→ τοποθ<span style=\"color: #900101\">ετώ</span> +<span style=\"color: #900101\"> -εσία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Местоположение"
        ],
        "transls": [
            "От слова Τοποθετώ — позиционировать"
        ],
        "translation": "Местоположение",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Позиционировать",
        "notice": ""
    },
    {
        "word": "χρεοκοπία",
        "base": "χρεοκοπώ",
        "groups": {
            "morfology": "<em>χρεοκοπία </em>→ χρεοκοπ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Банкротство, разорение"
        ],
        "transls": [
            "От слова Χρεοκοπώ — разориться"
        ],
        "translation": "Банкротство, разорение",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Разориться",
        "notice": ""
    },
    {
        "word": "χρεοκοπία",
        "base": "χρεοκοπώ",
        "groups": {
            "morfology": "<em>χρεοκοπία </em>→ χρεοκοπ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Банкротство"
        ],
        "transls": [
            "От слова Χρεοκοπώ — обанкротиться"
        ],
        "translation": "Банкротство",
        "kind": "Существительные на -α, -εια, -ια от глаголов",
        "unicTransl": "Обанкротиться",
        "notice": ""
    },
    {
        "word": "εισπράκτορας",
        "base": "εισπράττω",
        "groups": {
            "morfology": "<em>εισπράκτορας </em>→ εισπρ<span style=\"color: #900101\">άττω</span> +<span style=\"color: #900101\"> -άκτορας</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -(ά)τορας означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -έας, -ιάς."
        },
        "qws": [
            "Кондуктор на транспорте"
        ],
        "transls": [
            "От слова Εισπράττω — взыскивать, взымать"
        ],
        "translation": "Кондуктор на транспорте",
        "kind": "Существительные на -(ά)τορας от глаголов",
        "unicTransl": "Взыскивать, взымать",
        "notice": "Существительные на -(ά)τορας означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -έας, -ιάς ."
    },
    {
        "word": "συμβουλάτορας",
        "base": "συμβουλεύω",
        "groups": {
            "morfology": "<em>συμβουλάτορας </em>→ συμβουλ<span style=\"color: #900101\">εύω</span> +<span style=\"color: #900101\"> -άτορας</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -(ά)τορας означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -έας, -ιάς."
        },
        "qws": [
            "Советчик"
        ],
        "transls": [
            "От слова Συμβουλεύω — советовать"
        ],
        "translation": "Советчик",
        "kind": "Существительные на -(ά)τορας от глаголов",
        "unicTransl": "Советовать",
        "notice": "Существительные на -(ά)τορας означают лицо-исполнителя действия и образуются от глаголов. С тем же смыслом образуются существительные на -της, -ιστης, -ότης и на -έας, -ιάς ."
    },
    {
        "word": "αναπτήρας",
        "base": "ανάβω, ανάπτω",
        "groups": {
            "morfology": "<em>αναπτήρας </em>→ ανάπτ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -τήρας</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ανάβω</span>, <span style=\"color:#054728\">ανάπτω</span> – разжигать < сред.греч. <span style=\"color:#054728\">ἀνάβω</span> < др.греч. <span style=\"color:#054728\">ἀνάπτω</span> < <span style=\"color:#054728\">ἀνά</span> + <span style=\"color:#054728\">ἅπτω</span> – завязывать",
            "aplication": "<br>Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
        },
        "qws": [
            "Зажигалка"
        ],
        "transls": [
            "От слова Ανάπτω, ανάβω — зажигать"
        ],
        "translation": "Зажигалка",
        "kind": "Существительные на -τήρας, -τήρι от глаголов",
        "unicTransl": "Зажигать",
        "notice": "Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
    },
    {
        "word": "καταβρεχτήρας",
        "base": "καταβρέχω",
        "groups": {
            "morfology": "<em>καταβρεχτήρας </em>→ καταβρέχ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -τήρας</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">καταβρέχω</span> – поливать < др.греч. (<span style=\"color:#054728\">καταβρέχω</span> < <span style=\"color:#054728\">κατά</span> + <span style=\"color:#054728\">βρέχω</span> – мочить)",
            "aplication": "<br>Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
        },
        "qws": [
            "Поливальная машина"
        ],
        "transls": [
            "От слова Καταβρέχω — поливать, обливать"
        ],
        "translation": "Поливальная машина",
        "kind": "Существительные на -τήρας, -τήρι от глаголов",
        "unicTransl": "Поливать, обливать",
        "notice": "Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
    },
    {
        "word": "κινητήρας",
        "base": "κινώ",
        "groups": {
            "morfology": "<em>κινητήρας </em>→ κιν<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ητήρας</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">κινητήρ</span> – колебатель",
            "aplication": "<br>Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
        },
        "qws": [
            "Двигатель"
        ],
        "transls": [
            "От слова Κινώ — двигать"
        ],
        "translation": "Двигатель",
        "kind": "Существительные на -τήρας, -τήρι от глаголов",
        "unicTransl": "Двигать",
        "notice": "Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
    },
    {
        "word": "ξυπνητήρι",
        "base": "ξυπνώ",
        "groups": {
            "morfology": "<em>ξυπνητήρι </em>→ ξυπν<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ητήρι</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">ξύπνημα</span> – пробуждение < <span style=\"color:#054728\">ξυπνώ</span> – будить, просыпаться) < сред.греч. (<span style=\"color:#054728\">ξυπνῶ</span> < <span style=\"color:#054728\">ἔξυπνος</span> – проснувшийся) < др.греч. <span style=\"color:#054728\">ὕπνος</span> – сон",
            "aplication": "<br>Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
        },
        "qws": [
            "Будильник"
        ],
        "transls": [
            "От слова Ξυπνώ — будить, просыпаться"
        ],
        "translation": "Будильник",
        "kind": "Существительные на -τήρας, -τήρι от глаголов",
        "unicTransl": "Будить, просыпаться",
        "notice": "Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
    },
    {
        "word": "ποτήρι",
        "base": "ποτίζω",
        "groups": {
            "morfology": "<em>ποτήρι </em>→ πο<span style=\"color: #900101\">τίζω</span> +<span style=\"color: #900101\"> -τήρι</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">ποτήρ</span>, <span style=\"color:#054728\">ποτήριον</span> < др.греч. (<span style=\"color:#054728\">ποτήριον</span> – стаканчик < <span style=\"color:#054728\">ποτήρ</span> – стакан < <span style=\"color:#054728\">πίνω</span> – пить)",
            "aplication": "<br>Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
        },
        "qws": [
            "Стакан"
        ],
        "transls": [
            "От слова Ποτίζω — орошать, дать пить"
        ],
        "translation": "Стакан",
        "kind": "Существительные на -τήρας, -τήρι от глаголов",
        "unicTransl": "Орошать, дать пить",
        "notice": "Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
    },
    {
        "word": "ποτιστήρι",
        "base": "ποτίζω",
        "groups": {
            "morfology": "<em>ποτιστήρι </em>→ ποτί<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -στήρι</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">ποτιστήριν</span> < др.греч. (<span style=\"color:#054728\">ποτίζω</span> — поливать < <span style=\"color:#054728\">πότος</span> – глоток)",
            "aplication": "<br>Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
        },
        "qws": [
            "Лейка"
        ],
        "transls": [
            "От слова Ποτίζω — поливать"
        ],
        "translation": "Лейка",
        "kind": "Существительные на -τήρας, -τήρι от глаголов",
        "unicTransl": "Поливать",
        "notice": "Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
    },
    {
        "word": "σκαλιστήρι",
        "base": "σκαλίζω",
        "groups": {
            "morfology": "<em>σκαλιστήρι </em>→ σκαλί<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -στήρας</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">σκαλιστήριον</span> < <span style=\"color:#054728\">σκαλίζω</span> — рыхлить, полоть) < др.греч. <span style=\"color:#054728\">σκάλλω</span> – копать, рыть",
            "aplication": "<br>Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
        },
        "qws": [
            "Тяпка, резец"
        ],
        "transls": [
            "От слова Σκαλίζω — рыть, разгребать, вырезать по дереву"
        ],
        "translation": "Тяпка, резец",
        "kind": "Существительные на -τήρας, -τήρι от глаголов",
        "unicTransl": "Рыть, разгребать, вырезать по дереву",
        "notice": "Существительные на -τήρας, -τήρι означают устройство, приспособление, и образуются в основном от глаголов."
    },
    {
        "word": "βασανιστήριο",
        "base": "βασανίζω",
        "groups": {
            "morfology": "<em>βασανιστήριο </em>→ βασανί<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -στήριο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Пытка"
        ],
        "transls": [
            "От слова Βασανίζω — пытать"
        ],
        "translation": "Пытка",
        "kind": "Существительные на -τήριο от глаголов",
        "unicTransl": "Пытать",
        "notice": ""
    },
    {
        "word": "γυναστήριο",
        "base": "γυμνάζω",
        "groups": {
            "morfology": "<em>γυναστήριο </em>→ γυμνά<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -στήριο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Гимнастический зал"
        ],
        "transls": [
            "От слова Γυμνάζω — тренировать"
        ],
        "translation": "Гимнастический зал",
        "kind": "Существительные на -τήριο от глаголов",
        "unicTransl": "Тренировать",
        "notice": ""
    },
    {
        "word": "δικαστήριο",
        "base": "δικάζω",
        "groups": {
            "morfology": "<em>δικαστήριο </em>→ δικά(ζω0 +<span style=\"color: #900101\"> -στήριο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Суд (здание, орган)"
        ],
        "transls": [
            "От слова Δικάζω — судить, осуждать"
        ],
        "translation": "Суд",
        "kind": "Существительные на -τήριο от глаголов",
        "unicTransl": "Судить, осуждать",
        "notice": ""
    },
    {
        "word": "εκπαιδευτήριο",
        "base": "εκπαιδεύω",
        "groups": {
            "morfology": "<em>εκπαιδευτήριο </em>→ εκπαιδεύ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -τήριο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Училище"
        ],
        "transls": [
            "От слова Εκπαιδεύω — обучать"
        ],
        "translation": "Училище",
        "kind": "Существительные на -τήριο от глаголов",
        "unicTransl": "Обучать",
        "notice": ""
    },
    {
        "word": "επισκεπτήριο",
        "base": "επισκέπτομαι",
        "groups": {
            "morfology": "<em>επισκεπτήριο </em>→ επισκέπτ<span style=\"color: #900101\">ομαι</span> +<span style=\"color: #900101\"> -ήριο</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἐπισκέπτομαι</span> — посещать < <span style=\"color:#054728\">σκέπτομαι</span> – смотреть, наблюдать)."
        },
        "qws": [
            "Визитка"
        ],
        "transls": [
            "От слова Επισκέπτομαι — посещать"
        ],
        "translation": "Визитка",
        "kind": "Существительные на -τήριο от глаголов",
        "unicTransl": "Посещать",
        "notice": ""
    },
    {
        "word": "καμπαναριό",
        "base": "καμπάνα",
        "groups": {
            "morfology": "<em>καμπαναριό </em>→ καμπάν<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -αριό</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -αριό говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -άδικο, -ίδικο и на -είο, -ιο."
        },
        "qws": [
            "Колокольня"
        ],
        "transls": [
            "От слова Καμπάνα — колокол"
        ],
        "translation": "Колокольня",
        "kind": "Существительные на -αριό от существительных",
        "unicTransl": "Колокол",
        "notice": "Существительные на -αριό говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -άδικο, -ίδικο и на -είο, -ιο."
    },
    {
        "word": "πλυσταριό",
        "base": "πλύστρα",
        "groups": {
            "morfology": "<em>πλυσταριό </em>→ πλύστ<span style=\"color: #900101\">ρα</span> +<span style=\"color: #900101\"> -αριό</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -αριό говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -άδικο, -ίδικο и на -είο, -ιο."
        },
        "qws": [
            "Прачечная"
        ],
        "transls": [
            "От слова Πλύστρα — прачка"
        ],
        "translation": "Прачечная",
        "kind": "Существительные на -αριό от существительных",
        "unicTransl": "Прачка",
        "notice": "Существительные на -αριό говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -άδικο, -ίδικο и на -είο, -ιο."
    },
    {
        "word": "σκουπιδαριό",
        "base": "σκουπίδι",
        "groups": {
            "morfology": "<em>σκουπιδαριό </em>→ σκουπίδ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -αριό</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -αριό говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -άδικο, -ίδικο и на -είο, -ιο."
        },
        "qws": [
            "Мусорная яма"
        ],
        "transls": [
            "От слова Σκουπίδι — мусор"
        ],
        "translation": "Мусорная яма",
        "kind": "Существительные на -αριό от существительных",
        "unicTransl": "Мусор",
        "notice": "Существительные на -αριό говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -άδικο, -ίδικο и на -είο, -ιο."
    },
    {
        "word": "ασβεστάδικο",
        "base": "ασβεστάς",
        "groups": {
            "morfology": "<em>ασβεστάδικο </em>→ ασβεστ<span style=\"color: #900101\">άς</span> +<span style=\"color: #900101\"> -άδικο</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">ασβεστάς</span> – продавец извести; владелец известкового завода < <span style=\"color:#054728\">ασβέστης</span> – известь) < сред.греч. (<span style=\"color:#054728\">ασβέστης</span> – известь < <span style=\"color:#054728\">ασβέστιν</span> – уменьш. от известь) < др.греч. (<span style=\"color:#054728\">ἄσβεστος</span> – негасимый; известь < ср.греч. <span style=\"color:#054728\">ἀ-</span> (приставка отсутствия, объединения, усиления или не влияет на смысл) + <span style=\"color:#054728\">σβέννυμι</span> – гасить)",
            "aplication": "<br>Существительные на -άδικο, -ίδικο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -είο, -ιο."
        },
        "qws": [
            "Печь для обжига извести"
        ],
        "transls": [
            "От слова Ασβεστάς — продавец извести; владелец известкового завода"
        ],
        "translation": "Печь для обжига извести",
        "kind": "Существительные на -άδικο, -ίδικο от существительных",
        "unicTransl": "Продавец извести; владелец известкового завода",
        "notice": "Существительные на -άδικο, -ίδικο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -είο, -ιο."
    },
    {
        "word": "γαλατάδικο",
        "base": "γαλατάς",
        "groups": {
            "morfology": "<em>γαλατάδικο </em>→ γαλατ<span style=\"color: #900101\">άς</span> +<span style=\"color: #900101\"> -άδικο</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">γαλατάς</span> – молочник < <span style=\"color:#054728\">γάλα</span> – молоко) < др.греч. <span style=\"color:#054728\">γάλα</span> – молоко.",
            "aplication": "<br>Существительные на -άδικο, -ίδικο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -είο, -ιο."
        },
        "qws": [
            "Молочная лавка"
        ],
        "transls": [
            "От слова Γαλατάς — молочник"
        ],
        "translation": "Молочная лавка",
        "kind": "Существительные на -άδικο, -ίδικο от существительных",
        "unicTransl": "Молочник",
        "notice": "Существительные на -άδικο, -ίδικο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -είο, -ιο."
    },
    {
        "word": "παλιατζίδικο",
        "base": "παλιατζής",
        "groups": {
            "morfology": "<em>παλιατζίδικο </em>→ παλιατζ<span style=\"color: #900101\">ής</span> +<span style=\"color: #900101\"> -ίδικο</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">παλιατζής</span> – старьевщик < <span style=\"color:#054728\">παλιός</span> – старый) < сред.греч. <span style=\"color:#054728\">παλιός</span> – старый < др.греч. (<span style=\"color:#054728\">παλαιός</span> – старый < <span style=\"color:#054728\">πάλαι</span> – давно, раньше)",
            "aplication": "<br>Существительные на -άδικο, -ίδικο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -είο, -ιο."
        },
        "qws": [
            "Лавка, где продаются старые вещи"
        ],
        "transls": [
            "От слова Παλιατζής — старьевщик"
        ],
        "translation": "Лавка, где продаются старые вещи",
        "kind": "Существительные на -άδικο, -ίδικο от существительных",
        "unicTransl": "Старьевщик",
        "notice": "Существительные на -άδικο, -ίδικο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -είο, -ιο."
    },
    {
        "word": "ραφτάδικο",
        "base": "ράφτης",
        "groups": {
            "morfology": "<em>ραφτάδικο </em>→ ράφτ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -άδικο</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ράφτης</span> – портной < сред.греч. <span style=\"color:#054728\">ράφτης</span> – портной < <span style=\"color:#054728\">ράπτω</span>, <span style=\"color:#054728\">ράβω</span> – шить) < др.греч. <span style=\"color:#054728\">ῥάπτω</span> – шить.",
            "aplication": "<br>Существительные на -άδικο, -ίδικο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -είο, -ιο."
        },
        "qws": [
            "Ателье"
        ],
        "transls": [
            "От слова Ράφτης — портной"
        ],
        "translation": "Ателье",
        "kind": "Существительные на -άδικο, -ίδικο от существительных",
        "unicTransl": "Портной",
        "notice": "Существительные на -άδικο, -ίδικο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -είο, -ιο."
    },
    {
        "word": "βιβλιοπωλείο",
        "base": "βιβλιοπώλης",
        "groups": {
            "morfology": "<em>βιβλιοπωλείο </em>→ βιβλιοπώλ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -είο</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">βιβλιοπώλης</span> – книготорговец < др.греч. (<span style=\"color:#054728\">βιβλιοπώλης</span> – книготорговец < <span style=\"color:#054728\">βιβλίον</span> – маленькая книга, письмо + <span style=\"color:#054728\">πώλης</span> – продавец < <span style=\"color:#054728\">βίβλος</span> – книга, папирус < <span style=\"color:#054728\">βύβλος</span> – папирус, книга < <span style=\"color:#054728\">Βύβλος</span> – древний и современный город Ливана, откуда привозили папирус)",
            "aplication": "<br>Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
        },
        "qws": [
            "Книжный магазин"
        ],
        "transls": [
            "От слова Βιβλιοπώλης — книготорговец"
        ],
        "translation": "Книжный магазин",
        "kind": "Существительные на -είο, -ιο от существительных",
        "unicTransl": "Книготорговец",
        "notice": "Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
    },
    {
        "word": "δασαρχείο",
        "base": "δασάρχης",
        "groups": {
            "morfology": "<em>δασαρχείο </em>→ δασάρχ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -είο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
        },
        "qws": [
            "Лесничество"
        ],
        "transls": [
            "От слова Δασάρχης — лесничий"
        ],
        "translation": "Лесничество",
        "kind": "Существительные на -είο, -ιο от существительных",
        "unicTransl": "Лесничий",
        "notice": "Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
    },
    {
        "word": "ιατρείο",
        "base": "ιατρός, γιατρός",
        "groups": {
            "morfology": "<em>ιατρείο </em>→ ιατρ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -είο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
        },
        "qws": [
            "Лечебница"
        ],
        "transls": [
            "От слова Ιατρός, γιατρός — врач"
        ],
        "translation": "Лечебница",
        "kind": "Существительные на -είο, -ιο от существительных",
        "unicTransl": "Врач",
        "notice": "Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
    },
    {
        "word": "κουρείο",
        "base": "κουρέας",
        "groups": {
            "morfology": "<em>κουρείο </em>→ κουρ<span style=\"color: #900101\">έας</span> +<span style=\"color: #900101\"> -είο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
        },
        "qws": [
            "Парикмахерская"
        ],
        "transls": [
            "От слова Κουρέας — парикмахер"
        ],
        "translation": "Парикмахерская",
        "kind": "Существительные на -είο, -ιο от существительных",
        "unicTransl": "Парикмахер",
        "notice": "Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
    },
    {
        "word": "εστιατόριο",
        "base": "εστιάτορας",
        "groups": {
            "morfology": "<em>εστιατόριο </em>→ εστιάτορ<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ιο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
        },
        "qws": [
            "Ресторан"
        ],
        "transls": [
            "От слова Εστιάτορας — радушный хозяин, владелец ресторана"
        ],
        "translation": "Ресторан",
        "kind": "Существительные на -είο, -ιο от существительных",
        "unicTransl": "Радушный хозяин, владелец ресторана",
        "notice": "Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
    },
    {
        "word": "φυλάκιο",
        "base": "φύλακας",
        "groups": {
            "morfology": "<em>φυλάκιο </em>→ φύλακ<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ιο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
        },
        "qws": [
            "Караульное помещение"
        ],
        "transls": [
            "От слова Φύλακας — сторож"
        ],
        "translation": "Караульное помещение",
        "kind": "Существительные на -είο, -ιο от существительных",
        "unicTransl": "Сторож",
        "notice": "Существительные на -είο, -ιο говорят о месте (территории), и образуются от существительных. С тем же смыслом образуются существительные на -αριό и на -άδικο, -ίδικο."
    },
    {
        "word": "αλευράς",
        "base": "αλεύρι",
        "groups": {
            "morfology": "<em>αλευράς </em>→ αλεύρ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -άς</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
        },
        "qws": [
            "Торговец мукой"
        ],
        "transls": [
            "От слова Αλεύρι — мука"
        ],
        "translation": "Торговец мукой",
        "kind": "Существительные на -άς от существительных",
        "unicTransl": "Мука",
        "notice": "Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
    },
    {
        "word": "γαλατάς",
        "base": "γάλα",
        "groups": {
            "morfology": "<em>γαλατάς </em>→ γάλ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ατάς</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">γάλα</span> – молоко < др.греч. <span style=\"color:#054728\">γάλα</span> – молоко.",
            "aplication": "<br>Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
        },
        "qws": [
            "Молочник"
        ],
        "transls": [
            "От слова Γάλα — молоко"
        ],
        "translation": "Молочник",
        "kind": "Существительные на -άς от существительных",
        "unicTransl": "Молоко",
        "notice": "Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
    },
    {
        "word": "κεραμιδάς",
        "base": "κεραμίδι",
        "groups": {
            "morfology": "<em>κεραμιδάς </em>→ κεραμίδ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -άς</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">κεραμίδι</span> – черепица < сред.греч. <span style=\"color:#054728\">κεραμίδι</span> < др.греч. (<span style=\"color:#054728\">κεραμίδιον</span> – уменьшит. от черепица < <span style=\"color:#054728\">κερᾰμῑς</span> – черепица, глина < <span style=\"color:#054728\">κέρᾰμος</span> – глина)",
            "aplication": "<br>Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
        },
        "qws": [
            "Гончар, кирпичник"
        ],
        "transls": [
            "От слова Κεραμίδι — черепица"
        ],
        "translation": "Гончар, кирпичник",
        "kind": "Существительные на -άς от существительных",
        "unicTransl": "Черепица",
        "notice": "Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
    },
    {
        "word": "μυλωνάς",
        "base": "μύλος",
        "groups": {
            "morfology": "<em>μυλωνάς </em>→ μύλ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ωνάς</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">μυλών</span> – мельница < <span style=\"color:#054728\">μύλος</span> – мельник, измельчитель < <span style=\"color:#054728\">μύλη</span> – мельница",
            "aplication": "<br>Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
        },
        "qws": [
            "Мельник"
        ],
        "transls": [
            "От слова Μύλος — мельница"
        ],
        "translation": "Мельник",
        "kind": "Существительные на -άς от существительных",
        "unicTransl": "Мельница",
        "notice": "Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
    },
    {
        "word": "σιδεράς",
        "base": "σίδερο",
        "groups": {
            "morfology": "<em>σιδεράς </em>→ σίδερ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -άς</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
        },
        "qws": [
            "Кузнец, слесарь, скобянщик"
        ],
        "transls": [
            "От слова Σίδερο — железо"
        ],
        "translation": "Кузнец, слесарь, скобянщик",
        "kind": "Существительные на -άς от существительных",
        "unicTransl": "Железо",
        "notice": "Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
    },
    {
        "word": "ψαράς",
        "base": "ψάρι",
        "groups": {
            "morfology": "<em>ψαράς </em>→ ψάρ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -άς</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">ὀψαρᾶς</span> < др.греч. (<span style=\"color:#054728\">ὀψάριον</span> – деликатесик < <span style=\"color:#054728\">ὄψον</span> – деликатеc).",
            "aplication": "<br>Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
        },
        "qws": [
            "Рыбак"
        ],
        "transls": [
            "От слова Ψάρι — рыба"
        ],
        "translation": "Рыбак",
        "kind": "Существительные на -άς от существительных",
        "unicTransl": "Рыба",
        "notice": "Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
    },
    {
        "word": "ψωμάς",
        "base": "ψωμί",
        "groups": {
            "morfology": "<em>ψωμάς </em>→ ψωμ<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -άς</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
        },
        "qws": [
            "Пекарь, булочник"
        ],
        "transls": [
            "От слова Ψωμί — хлеб"
        ],
        "translation": "Пекарь, булочник",
        "kind": "Существительные на -άς от существительных",
        "unicTransl": "Хлеб",
        "notice": "Существительные на -άς говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άριος, -άρης, -ιάρης и на -τζής."
    },
    {
        "word": "πευκιάς",
        "base": "πέυκο",
        "groups": {
            "morfology": "<em>πευκιάς </em>→ πέυκ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ίας</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ίας, -ία говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ώνας, -ιώνας."
        },
        "qws": [
            "Сосновая роща"
        ],
        "transls": [
            "От слова Πέυκο — сосна"
        ],
        "translation": "Сосновая роща",
        "kind": "Существительные на -ίας, -ία от существительных",
        "unicTransl": "Сосна",
        "notice": "Существительные на -ίας, -ία говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ώνας, -ιώνας."
    },
    {
        "word": "αμμοθδιά",
        "base": "άμμος, αμμούδα",
        "groups": {
            "morfology": "<em>αμμοθδιά </em>→ άμμ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -οθδιά</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ίας, -ία говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ώνας, -ιώνας."
        },
        "qws": [
            "Песчаный берег, пляж"
        ],
        "transls": [
            "От слова Άμμος, αμμούδα — песок"
        ],
        "translation": "Песчаный берег, пляж",
        "kind": "Существительные на -ίας, -ία от существительных",
        "unicTransl": "Песок",
        "notice": "Существительные на -ίας, -ία говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ώνας, -ιώνας."
    },
    {
        "word": "πλατανιά",
        "base": "πλατάνι",
        "groups": {
            "morfology": "<em>πλατανιά </em>→ πλατάν<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ίας, -ία говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ώνας, -ιώνας."
        },
        "qws": [
            "Платановая роща"
        ],
        "transls": [
            "От слова Πλατάνι — платан"
        ],
        "translation": "Платановая роща",
        "kind": "Существительные на -ίας, -ία от существительных",
        "unicTransl": "Платан",
        "notice": "Существительные на -ίας, -ία говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ώνας, -ιώνας."
    },
    {
        "word": "επαγγελματίας",
        "base": "επάγγελμα",
        "groups": {
            "morfology": "<em>επαγγελματίας </em>→ επάνγγελ<span style=\"color: #900101\">μα</span> +<span style=\"color: #900101\"> -ματίας</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">επάγγελμα</span> – профессия < др.греч. (<span style=\"color:#054728\">ἐπάγγελμα</span> < <span style=\"color:#054728\">ἐπαγγέλλομαι</span> – обещать; заниматься, иметь профессию < <span style=\"color:#054728\">επ-</span>, <span style=\"color:#054728\">επι-</span> (на) + <span style=\"color:#054728\">ἀγγέλλω</span> – извещать, сообщать < <span style=\"color:#054728\">ἄγγελος</span> – вестник. посланец, ангел)"
        },
        "qws": [
            "Профессионал"
        ],
        "transls": [
            "От слова Επάνγγελμα — профессия"
        ],
        "translation": "Профессионал",
        "kind": "Существительные на -ίας, -εία от существительных",
        "unicTransl": "Профессия",
        "notice": ""
    },
    {
        "word": "ληστεία",
        "base": "ληστής",
        "groups": {
            "morfology": "<em>ληστεία </em>→ ληστ<span style=\"color: #900101\">ής</span> + <span style=\"color: #900101\">-εία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Грабёж"
        ],
        "transls": [
            "От слова Ληστής — грабитель"
        ],
        "translation": "Грабёж",
        "kind": "Существительные на -ίας, -εία от существительных",
        "unicTransl": "Грабитель",
        "notice": ""
    },
    {
        "word": "κτηματίας",
        "base": "κτήμα",
        "groups": {
            "morfology": "<em>κτηματίας </em>→ κτή<span style=\"color: #900101\">μα</span> +<span style=\"color: #900101\"> -ματίας</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Собственник, владелец"
        ],
        "transls": [
            "От слова Κτήμα — собственность, имущество, усадьба"
        ],
        "translation": "Собственник, владелец",
        "kind": "Существительные на -ίας, -εία от существительных",
        "unicTransl": "Собственность, имущество, усадьба",
        "notice": ""
    },
    {
        "word": "αχερώνας",
        "base": "άχερο",
        "groups": {
            "morfology": "<em>αχερώνας </em>→ άχερ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ώνας</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
        },
        "qws": [
            "Скирда соломы"
        ],
        "transls": [
            "От слова Άχερο — солома"
        ],
        "translation": "Скирда соломы",
        "kind": "Существительные на -ώνας, -ιώνας от существительных",
        "unicTransl": "Солома",
        "notice": "Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
    },
    {
        "word": "αμπελώνας",
        "base": "αμπέλι",
        "groups": {
            "morfology": "<em>αμπελώνας </em>→ αμπέλ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ώνας</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
        },
        "qws": [
            "Виноградная плантация"
        ],
        "transls": [
            "От слова Αμπέλι — виноградник"
        ],
        "translation": "Виноградная плантация",
        "kind": "Существительные на -ώνας, -ιώνας от существительных",
        "unicTransl": "Виноградник",
        "notice": "Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
    },
    {
        "word": "ελαιώνας",
        "base": "ελία, ελαία",
        "groups": {
            "morfology": "<em>ελαιώνας </em>→ ελαί<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ώνας</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
        },
        "qws": [
            "Оливковая роща"
        ],
        "transls": [
            "От слова Ελία, ελαία — маслина, оливковое дерево"
        ],
        "translation": "Оливковая роща",
        "kind": "Существительные на -ώνας, -ιώνας от существительных",
        "unicTransl": "Маслина, оливковое дерево",
        "notice": "Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
    },
    {
        "word": "καλαμιώνας",
        "base": "καλάμι",
        "groups": {
            "morfology": "<em>καλαμιώνας </em>→ καλάμ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ιώνας</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
        },
        "qws": [
            "Заросли камыша"
        ],
        "transls": [
            "От слова Καλάμι — камыш"
        ],
        "translation": "Заросли камыша",
        "kind": "Существительные на -ώνας, -ιώνας от существительных",
        "unicTransl": "Камыш",
        "notice": "Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
    },
    {
        "word": "ξενώνας",
        "base": "ξένος",
        "groups": {
            "morfology": "<em>ξενώνας </em>→ ξέν<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ώνας</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
        },
        "qws": [
            "Гостиница"
        ],
        "transls": [
            "От слова Ξένος — чужой, чужак, иностранец"
        ],
        "translation": "Гостиница",
        "kind": "Существительные на -ώνας, -ιώνας от существительных",
        "unicTransl": "Чужой, чужак, иностранец",
        "notice": "Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
    },
    {
        "word": "περιστεριώνας",
        "base": "περιστέρι",
        "groups": {
            "morfology": "<em>περιστεριώνας </em>→ περιστέρ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ιώνας</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
        },
        "qws": [
            "Голубятня"
        ],
        "transls": [
            "От слова Περιστέρι — голубь"
        ],
        "translation": "Голубятня",
        "kind": "Существительные на -ώνας, -ιώνας от существительных",
        "unicTransl": "Голубь",
        "notice": "Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
    },
    {
        "word": "στρατώνας",
        "base": "στρατός",
        "groups": {
            "morfology": "<em>στρατώνας </em>→ στρατ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ώνας</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">στρατών</span> < <span style=\"color:#054728\">στρατός</span> – армия",
            "aplication": "<br>Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
        },
        "qws": [
            "Казарма"
        ],
        "transls": [
            "От слова Στρατός — армия"
        ],
        "translation": "Казарма",
        "kind": "Существительные на -ώνας, -ιώνας от существительных",
        "unicTransl": "Армия",
        "notice": "Существительные на -ώνας, -ιώνας говорят о большом количестве того, что означает производное существительных. С тем же смыслом образуются существительные на -ίας, -ία."
    },
    {
        "word": "επιστήμονας",
        "base": "επιστήμη",
        "groups": {
            "morfology": "<em>επιστήμονας </em>→ επιστήμ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ονας</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἐπιστήμη</span> – наука, знание < <span style=\"color:#054728\">ἐπίσταμαι</span> – хорошо знать, быть уверенным < <span style=\"color:#054728\">ἐπι-</span> (обозначает следование, сопровождение; положение: на) + <span style=\"color:#054728\">ἵστημι</span> – ставить, стоять, устанавливать)"
        },
        "qws": [
            "Учёный"
        ],
        "transls": [
            "От слова Επιστήμη — наука"
        ],
        "translation": "Учёный",
        "kind": "Существительные на -ονας от существительных",
        "unicTransl": "Наука",
        "notice": ""
    },
    {
        "word": "βαρκάρης",
        "base": "βάρκα",
        "groups": {
            "morfology": "<em>βαρκάρης </em>→ βάρκ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -άρης</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">βαρκάρης</span> < <span style=\"color:#054728\">βάρκα</span> – лодка) < поздний лат. <span style=\"color:#054728\">barca</span> < лат. <span style=\"color:#054728\">baris</span> < др.греч. <span style=\"color:#054728\">βᾶρις</span> < др.егип.<span style=\"color:#054728\">/bair/</span>.",
            "aplication": "<br>Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
        },
        "qws": [
            "Лодочник"
        ],
        "transls": [
            "От слова Βάρκα — лодка"
        ],
        "translation": "Лодочник",
        "kind": "Существительные на -άριος, -άρης, -ιάρης от существительных",
        "unicTransl": "Лодка",
        "notice": "Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
    },
    {
        "word": "περιβολάρης",
        "base": "περιβόλι",
        "groups": {
            "morfology": "<em>περιβολάρης </em>→ περιβόλ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -άρης</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">περιβολάρης</span>, <span style=\"color:#054728\">περβολάρης</span> < койне <span style=\"color:#054728\">περιβόλιον</span> – небольшая область, окруженная чем-то, напр. стеной < др.греч. (<span style=\"color:#054728\">περίβόλος</span> – область, окруженная чем-то, напр. стеной. < <span style=\"color:#054728\">περί-</span> (вокруг, возле) + <span style=\"color:#054728\">βάλλω</span> – бросать, ударять)",
            "aplication": "<br>Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
        },
        "qws": [
            "Садовник"
        ],
        "transls": [
            "От слова Περιβόλι — сад"
        ],
        "translation": "Садовник",
        "kind": "Существительные на -άριος, -άρης, -ιάρης от существительных",
        "unicTransl": "Сад",
        "notice": "Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
    },
    {
        "word": "καρβουνιάρης",
        "base": "κάρβουνο",
        "groups": {
            "morfology": "<em>καρβουνιάρης </em>→ κάρβουν<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ιάρης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
        },
        "qws": [
            "Угольщик"
        ],
        "transls": [
            "От слова Κάρβουνο — уголь"
        ],
        "translation": "Угольщик",
        "kind": "Существительные на -άριος, -άρης, -ιάρης от существительных",
        "unicTransl": "Уголь",
        "notice": "Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
    },
    {
        "word": "σκουπιδιάρης",
        "base": "σκουπίδι",
        "groups": {
            "morfology": "<em>σκουπιδιάρης </em>→ σκουπίδ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ιάρης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
        },
        "qws": [
            "Подметальщик"
        ],
        "transls": [
            "От слова Σκουπίδι — мусор"
        ],
        "translation": "Подметальщик",
        "kind": "Существительные на -άριος, -άρης, -ιάρης от существительных",
        "unicTransl": "Мусор",
        "notice": "Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
    },
    {
        "word": "αποθηκάριος",
        "base": "αποθήκη",
        "groups": {
            "morfology": "<em>αποθηκάριος </em>→ αποθήκ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -άριος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
        },
        "qws": [
            "Кладовщик"
        ],
        "transls": [
            "От слова Αποθήκη — кладовая, склад, сарай"
        ],
        "translation": "Кладовщик",
        "kind": "Существительные на -άριος, -άρης, -ιάρης от существительных",
        "unicTransl": "Кладовая, склад, сарай",
        "notice": "Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
    },
    {
        "word": "βιβλιοθηκάριος",
        "base": "βιβλιοθήκη",
        "groups": {
            "morfology": "<em>βιβλιοθηκάριος </em>→ βιβλιοθήκ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -άριος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
        },
        "qws": [
            "Библиотекарь"
        ],
        "transls": [
            "От слова Βιβλιοθήκη — библиотека"
        ],
        "translation": "Библиотекарь",
        "kind": "Существительные на -άριος, -άρης, -ιάρης от существительных",
        "unicTransl": "Библиотека",
        "notice": "Существительные на -άριος, -άρης, -ιάρης говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -τζής."
    },
    {
        "word": "καφετζής",
        "base": "καφενείο",
        "groups": {
            "morfology": "<em>καφετζής </em>→ καφ<span style=\"color: #900101\">ενείο</span> +<span style=\"color: #900101\"> -ετζής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -τζής говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -άριος, -άρης, -ιάρης."
        },
        "qws": [
            "Владелец кофейни"
        ],
        "transls": [
            "От слова Καφενείο — кофейня"
        ],
        "translation": "Владелец кофейни",
        "kind": "Существительные на -τζής от существительных",
        "unicTransl": "Кофейня",
        "notice": "Существительные на -τζής говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -άριος, -άρης, -ιάρης."
    },
    {
        "word": "κουλουρτζής",
        "base": "κουλούρι",
        "groups": {
            "morfology": "<em>κουλουρτζής </em>→ κουλούρ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -τζής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -τζής говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -άριος, -άρης, -ιάρης."
        },
        "qws": [
            "Продавец баранок"
        ],
        "transls": [
            "От слова Κουλούρι — бублик, калач"
        ],
        "translation": "Продавец баранок",
        "kind": "Существительные на -τζής от существительных",
        "unicTransl": "Бублик, калач",
        "notice": "Существительные на -τζής говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -άριος, -άρης, -ιάρης."
    },
    {
        "word": "τζαμτζής",
        "base": "τζάμι",
        "groups": {
            "morfology": "<em>τζαμτζής </em>→ τζάμ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -τζής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -τζής говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -άριος, -άρης, -ιάρης."
        },
        "qws": [
            "Стекольщик"
        ],
        "transls": [
            "От слова Τζάμι — оконное стекло"
        ],
        "translation": "Стекольщик",
        "kind": "Существительные на -τζής от существительных",
        "unicTransl": "Оконное стекло",
        "notice": "Существительные на -τζής говорят о профессии и образуются от существительных. С тем же смыслом образуются существительные на -άς и на -άριος, -άρης, -ιάρης."
    },
    {
        "word": "γιώργαινα",
        "base": "γιώργος",
        "groups": {
            "morfology": "<em>γιώργαινα </em>→ γιώργ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -αινα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -αινα, -ίνα означают жену лица по его имени или фамилии."
        },
        "qws": [
            "Жена Георгия"
        ],
        "transls": [
            "От слова Γιώργος — георгий"
        ],
        "translation": "Жена Георгия",
        "kind": "Существительные на -αινα, -ίνα от существительных",
        "unicTransl": "Георгий",
        "notice": "Существительные на -αινα, -ίνα означают жену лица по его имени или фамилии."
    },
    {
        "word": "δημήτραινα",
        "base": "δημήτρης",
        "groups": {
            "morfology": "<em>δημήτραινα </em>→ δημήτρ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -αινα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -αινα, -ίνα означают жену лица по его имени или фамилии."
        },
        "qws": [
            "Жена Димитрия"
        ],
        "transls": [
            "От слова Δημήτρης — Дмитрий"
        ],
        "translation": "Жена Димитрия",
        "kind": "Существительные на -αινα, -ίνα от существительных",
        "unicTransl": "Дмитрий",
        "notice": "Существительные на -αινα, -ίνα означают жену лица по его имени или фамилии."
    },
    {
        "word": "θοδωρίνα",
        "base": "θόδωρος",
        "groups": {
            "morfology": "<em>θοδωρίνα </em>→ θόδωρ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ίνα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -αινα, -ίνα означают жену лица по его имени или фамилии."
        },
        "qws": [
            "Жена Фёдора"
        ],
        "transls": [
            "От слова Θόδωρος — Фёдор"
        ],
        "translation": "Жена Фёдора",
        "kind": "Существительные на -αινα, -ίνα от существительных",
        "unicTransl": "Фёдор",
        "notice": "Существительные на -αινα, -ίνα означают жену лица по его имени или фамилии."
    },
    {
        "word": "ανηφοριά",
        "base": "ανήφορος",
        "groups": {
            "morfology": "<em>ανηφοριά </em>→ ανήφορ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Подъем местности"
        ],
        "transls": [
            "От слова Ανήφορος — дорога на подъем"
        ],
        "translation": "Подъем местности",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Дорога на подъем",
        "notice": ""
    },
    {
        "word": "αρχοντιά",
        "base": "άρχοντας",
        "groups": {
            "morfology": "<em>αρχοντιά </em>→ αρχοντ<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ἄρχοντας</span> – господин, правитель, богач < сред.греч. <span style=\"color:#054728\">ἄρχοντας</span> < др.греч. (<span style=\"color:#054728\">ἄρχων</span> – правитель, начальник, вождь < <span style=\"color:#054728\">ἄρχω</span> – начинать, вести, править);",
        },
        "qws": [
            "Знатность, богатство, благородное происхождение"
        ],
        "transls": [
            "От слова Άρχοντας — господин, правитель, богач, архонт"
        ],
        "translation": "Знатность, богатство, благородное происхождение",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Господин, правитель, богач, архонт",
        "notice": ""
    },
    {
        "word": "βαλανιδιά",
        "base": "βαλανίδι",
        "groups": {
            "morfology": "<em>βαλανιδιά </em>→ βαλανίδ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Дуб"
        ],
        "transls": [
            "От слова Βαλανίδι — желудь"
        ],
        "translation": "Дуб",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Желудь",
        "notice": ""
    },
    {
        "word": "βραδιά",
        "base": "βράδυ",
        "groups": {
            "morfology": "<em>βραδιά </em>→ βράδ<span style=\"color: #900101\">υ</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">βραδιά</span> < <span style=\"color:#054728\">βραδεῖα</span> < <span style=\"color:#054728\">βραδύς</span> – медленный, поздний)"
        },
        "qws": [
            "Вечернее время, вечеринка"
        ],
        "transls": [
            "От слова Βράδυ — вечер"
        ],
        "translation": "Вечернее время, вечеринка",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Вечер",
        "notice": ""
    },
    {
        "word": "καλοκεριά",
        "base": "καλοκαίρι",
        "groups": {
            "morfology": "<em>καλοκεριά </em>→ καλοκ<span style=\"color: #900101\">αίρι</span> +<span style=\"color: #900101\"> -εριά</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Хорошая погода"
        ],
        "transls": [
            "От слова Καλοκαίρι — лето"
        ],
        "translation": "Хорошая погода",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Лето",
        "notice": ""
    },
    {
        "word": "κερασιά",
        "base": "κεράσι",
        "groups": {
            "morfology": "<em>κερασιά </em>→ κεράσ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">κεράσι</span> – черешня < др.греч. <span style=\"color:#054728\">κεράσιον</span> – черешня, дерево черешни < <span style=\"color:#054728\">κερασός</span> – черёмуха)"
        },
        "qws": [
            "Дерево черешни"
        ],
        "transls": [
            "От слова Κεράσι — черешня"
        ],
        "translation": "Дерево",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Дерево черешни",
        "notice": ""
    },
    {
        "word": "μαστοριά",
        "base": "μάστορας",
        "groups": {
            "morfology": "<em>μαστοριά </em>→ μάστορ<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">μαστορεία</span> – мастерство < <span style=\"color:#054728\">μάστορας</span> – мастер < <span style=\"color:#054728\">μαΐστωρ</span> < <span style=\"color:#054728\">μαγίστωρ</span>) < лат. <span style=\"color:#054728\">magister</span> – учитель, глава"
        },
        "qws": [
            "Мастерство"
        ],
        "transls": [
            "От слова Μάστορας — мастер"
        ],
        "translation": "Мастерство",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Мастер",
        "notice": ""
    },
    {
        "word": "μηλιά",
        "base": "μήλο",
        "groups": {
            "morfology": "<em>μηλιά </em>→ μήλ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">μήλο</span> – яблоко < древ.греч. <span style=\"color:#054728\">μῆλον</span> – яблоко."
        },
        "qws": [
            "Яблоня"
        ],
        "transls": [
            "От слова Μήλο — яблоко"
        ],
        "translation": "Яблоня",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Яблоко",
        "notice": ""
    },
    {
        "word": "νυχτιά",
        "base": "νύχτα",
        "groups": {
            "morfology": "<em>νυχτιά </em>→ νύχτ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">νυχτιά</span> < <span style=\"color:#054728\">νύχτα</span> – ночь < <span style=\"color:#054728\">νύκτα</span> – ночь)< др.греч. <span style=\"color:#054728\">νύξ</span> – ночь"
        },
        "qws": [
            "Ночное время"
        ],
        "transls": [
            "От слова Νύχτα — ночь"
        ],
        "translation": "Ночное время",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Ночь",
        "notice": ""
    },
    {
        "word": "παγωνιά",
        "base": "πάγος",
        "groups": {
            "morfology": "<em>παγωνιά </em>→ πάγ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ωνιά</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">παγώνω</span> – остужать < сред.греч. <span style=\"color:#054728\">παγῶ</span> – вонзать"
        },
        "qws": [
            "Мороз"
        ],
        "transls": [
            "От слова Πάγος — лёд"
        ],
        "translation": "Мороз",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Лёд",
        "notice": ""
    },
    {
        "word": "παλικαριά",
        "base": "παλικάρι",
        "groups": {
            "morfology": "<em>παλικαριά </em>→ παλικάρ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">παλικάρι, παλληκάρι</span> – молодец, парень < койне <span style=\"color:#054728\">παλικάριν</span> < др.греч. (<span style=\"color:#054728\">πάλλαξ</span> – молодец, ребёнок < <span style=\"color:#054728\">παλικάριν</span> – наложница)"
        },
        "qws": [
            "Удаль, смелость"
        ],
        "transls": [
            "От слова Παλικάρι — молодец, парень, удалец"
        ],
        "translation": "Удаль, смелость",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Молодец, парень, удалец",
        "notice": ""
    },
    {
        "word": "πλαγιά",
        "base": "πλαί, πλάγι",
        "groups": {
            "morfology": "<em>πλαγιά </em>→ πλάγ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Склон, косогор"
        ],
        "transls": [
            "От слова Πλαί, πλάγι — бок, сторона"
        ],
        "translation": "Склон, косогор",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Бок, сторона",
        "notice": ""
    },
    {
        "word": "συννεφιά",
        "base": "σύννεφο",
        "groups": {
            "morfology": "<em>συννεφιά </em>→ σύννεφ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Облачность"
        ],
        "transls": [
            "От слова Σύννεφο — облако"
        ],
        "translation": "Облачность",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Облако",
        "notice": ""
    },
    {
        "word": "χρονιά",
        "base": "χρόνος",
        "groups": {
            "morfology": "<em>χρονιά </em>→ χρόν<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ιά</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Сезон, период"
        ],
        "transls": [
            "От слова Χρόνος — год, время"
        ],
        "translation": "Сезон, период",
        "kind": "Существительные на -ιά от существительных",
        "unicTransl": "Год, время",
        "notice": ""
    },
    {
        "word": "αρχοντολόγι",
        "base": "άρχοντας",
        "groups": {
            "morfology": "<em>αρχοντολόγι </em>→ άρχοντ<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ολόγι</span>",
            "etymology": "<br>Либо от сред.греч. (<span style=\"color:#054728\">ἀρχοντολόγιν</span> – знать < <span style=\"color:#054728\">ἄρχοντας</span> – господин, правитель, богач) < др.греч. <span style=\"color:#054728\">ἄρχων</span> – правитель, начальник, вождь < <span style=\"color:#054728\">ἄρχω</span> – начинать, вести, править); <br>Либо от совр.греч. <span style=\"color:#054728\">ἀρχοντολόγιο</span> – книга или список с именами знати какого-либо региона < кафаревуса <span style=\"color:#054728\">ἀρχοντολόγιον</span> < сред.греч. <span style=\"color:#054728\">ἀρχοντολόγιν</span> – знать < др.греч. (<span style=\"color:#054728\">ἄρχοντας</span> – господин, правитель, богач < <span style=\"color:#054728\">ἄρχων</span> – правитель, начальник, вождь < <span style=\"color:#054728\">ἄρχω</span> – начинать, вести, править);"
        },
        "qws": [
            "Знать, богачи"
        ],
        "transls": [
            "От слова Άρχοντας — господин, правитель, богач, архонт"
        ],
        "translation": "Знать, богачи",
        "kind": "Существительные на -λό(γ)ι от существительных",
        "unicTransl": "Господин, правитель, богач, архонт",
        "notice": ""
    },
    {
        "word": "συγγενολόγι",
        "base": "συγγενής",
        "groups": {
            "morfology": "<em>συγγενολόγι </em>→ συγγεν<span style=\"color: #900101\">ής</span> +<span style=\"color: #900101\"> -ολόγι</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Родня"
        ],
        "transls": [
            "От слова Συγγενής — родственник"
        ],
        "translation": "Родня",
        "kind": "Существительные на -λό(γ)ι от существительных",
        "unicTransl": "Родственник",
        "notice": ""
    },
    {
        "word": "κλεφτουριά",
        "base": "κλέφτης",
        "groups": {
            "morfology": "<em>κλεφτουριά </em>→ κλέφτ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -ουριά</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Клефты"
        ],
        "transls": [
            "От слова Κλέφτης — вор"
        ],
        "translation": "Клефты",
        "kind": "Существительные на -ουριά от существительных",
        "unicTransl": "Вор",
        "notice": ""
    },
    {
        "word": "λασπουριά",
        "base": "λάσπη",
        "groups": {
            "morfology": "<em>λασπουριά </em>→ λάσπ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ουριά</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Слякоть, трясина, болото"
        ],
        "transls": [
            "От слова Λάσπη — грязь"
        ],
        "translation": "Слякоть, трясина, болото",
        "kind": "Существительные на -ουριά от существительных",
        "unicTransl": "Грязь",
        "notice": ""
    },
    {
        "word": "αδειούχος",
        "base": "άδεια",
        "groups": {
            "morfology": "<em>αδειούχος </em>→ άδει<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ούχος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Лицо, получившее разрешение, отпускник"
        ],
        "transls": [
            "От слова Άδεια — разрешение, отпуск"
        ],
        "translation": "Лицо, получившее разрешение, отпускник",
        "kind": "Существительные на -ούχος от существительных",
        "unicTransl": "Разрешение, отпуск",
        "notice": ""
    },
    {
        "word": "αξιωματούχος",
        "base": "αξίωμα",
        "groups": {
            "morfology": "<em>αξιωματούχος </em>→ αξίω<span style=\"color: #900101\">μα</span> +<span style=\"color: #900101\"> -ματούχος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Должностное лицо, лицо, получившее научное, воинское звание, аттестат"
        ],
        "transls": [
            "От слова Αξίωμα — достоинствο, звание, должность, аксиома"
        ],
        "translation": "Должностное лицо; лицо, получившее научное, воинское звание, аттестат",
        "kind": "Существительные на -ούχος от существительных",
        "unicTransl": "Достоинствο, звание, должность, аксиома",
        "notice": ""
    },
    {
        "word": "πτυχιούχος",
        "base": "πτυχίο",
        "groups": {
            "morfology": "<em>πτυχιούχος </em>→ πτυχίο +<span style=\"color: #900101\"> -ούχος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Дипломант, аттестованный"
        ],
        "transls": [
            "От слова Πτυχίο — диплом, аттестат"
        ],
        "translation": "Дипломант, аттестованный",
        "kind": "Существительные на -ούχος от существительных",
        "unicTransl": "Диплом, аттестат",
        "notice": ""
    },
    {
        "word": "συνταξιούχος",
        "base": "σύνταξη",
        "groups": {
            "morfology": "<em>συνταξιούχος </em>→ σύνταξ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ιούχος</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">σύνταξη</span> – пенсия < др.греч. (<span style=\"color:#054728\">σύνταξις</span> – строй, устройство, войско, связь < <span style=\"color:#054728\">συντάσσω</span> – устраивать, основывать, связывать)"
        },
        "qws": [
            "Пенсионер"
        ],
        "transls": [
            "От слова Σύνταξη — пенсия"
        ],
        "translation": "Пенсионер",
        "kind": "Существительные на -ούχος от существительных",
        "unicTransl": "Пенсия",
        "notice": ""
    },
    {
        "word": "αγριάδα",
        "base": "άγριος",
        "groups": {
            "morfology": "<em>αγριάδα </em>→ άγρ<span style=\"color: #900101\">ιος</span> +<span style=\"color: #900101\"> -άδα</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">άγριος</span> – дикий < др.греч. (<span style=\"color:#054728\">ἄγριος</span> – дикий < <span style=\"color:#054728\">ἀγρός</span> – поле, деревня)"
        },
        "qws": [
            "Дикость"
        ],
        "transls": [
            "От слова Άγριος — дикий"
        ],
        "translation": "Дикость",
        "kind": "Существительные на -άδα от прилагательных",
        "unicTransl": "Страшный, дикий",
        "notice": ""
    },
    {
        "word": "εξυπνάδα",
        "base": "έξυπνος",
        "groups": {
            "morfology": "<em>εξυπνάδα </em>→ έξυπν<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -άδα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">έξυπνος</span> – умный < сред.греч. <span style=\"color:#054728\">ἔξυπνος</span> < др.греч. <span style=\"color:#054728\">ἐξ</span> (с) + <span style=\"color:#054728\">ὕπνος</span> – сон"
        },
        "qws": [
            "Сообразительность"
        ],
        "transls": [
            "От слова Έξυπνος — умный"
        ],
        "translation": "Сообразительность",
        "kind": "Существительные на -άδα от прилагательных",
        "unicTransl": "Умный",
        "notice": ""
    },
    {
        "word": "νοστιμάδα",
        "base": "νόστιμος",
        "groups": {
            "morfology": "<em>νοστιμάδα </em>→ νόστιμ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -άδα</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">νοστιμάδα</span> < <span style=\"color:#054728\">νόστιμος</span> – вкусный) < др.греч. (<span style=\"color:#054728\">νόστῐμος</span> – невредимый, приносящий возвращение, приятный на вкус, сочный < <span style=\"color:#054728\">νόστος</span> – возвращение < <span style=\"color:#054728\">νέομαι</span> – уходить, идти)"
        },
        "qws": [
            "Вкуснятина"
        ],
        "transls": [
            "От слова Νόστιμος — вкусный"
        ],
        "translation": "Вкуснятина",
        "kind": "Существительные на -άδα от прилагательных",
        "unicTransl": "Вкусный",
        "notice": ""
    },
    {
        "word": "σκληράδα",
        "base": "σκληρός",
        "groups": {
            "morfology": "<em>σκληράδα </em>→ σκληρ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -άδα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">σκληρός</span> – твёрдый, суровый < др.греч. <span style=\"color:#054728\">σκληρός</span>"
        },
        "qws": [
            "Твёрдость, жестокость"
        ],
        "transls": [
            "От слова Σκληρός — твёрдый, жесткий, суровый, жестокий"
        ],
        "translation": "Твёрдость, жестокость",
        "kind": "Существительные на -άδα от прилагательных",
        "unicTransl": "Твёрдый, жесткий, суровый, жестокий",
        "notice": ""
    },
    {
        "word": "ασπρίλα",
        "base": "άσπρος",
        "groups": {
            "morfology": "<em>ασπρίλα </em>→ άσπρ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ίλα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">άσπρος</span> – белый < койне <span style=\"color:#054728\">ἄσπρος</span> < лат. <span style=\"color:#054728\">asper</span> – твёрдый, шероховатый, трудный"
        },
        "qws": [
            "Белизна"
        ],
        "transls": [
            "От слова Άσπρος — белый"
        ],
        "translation": "Белизна",
        "kind": "Существительные на -ίλα от прилагательных",
        "unicTransl": "Белый",
        "notice": ""
    },
    {
        "word": "κοκκινίλα",
        "base": "κόκκινος",
        "groups": {
            "morfology": "<em>κοκκινίλα </em>→ κόκκιν<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ίλα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">κόκκινος</span> – красный < койне <span style=\"color:#054728\">κόκκινος</span> < др.греч. <span style=\"color:#054728\">κόκκος</span> – зерно, крупинка"
        },
        "qws": [
            "Краснота"
        ],
        "transls": [
            "От слова Κόκκινος — красный"
        ],
        "translation": "Краснота",
        "kind": "Существительные на -ίλα от прилагательных",
        "unicTransl": "Красный",
        "notice": ""
    },
    {
        "word": "μαυρίλα",
        "base": "μαύρος",
        "groups": {
            "morfology": "<em>μαυρίλα </em>→ μαύρ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ίλα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">μαύρος</span> – чёрный < др.греч. <span style=\"color:#054728\">μαυρός</span> – тёмный, тусклый"
        },
        "qws": [
            "Чернота"
        ],
        "transls": [
            "От слова Μαύρος — чёрный"
        ],
        "translation": "Чернота",
        "kind": "Существительные на -ίλα от прилагательных",
        "unicTransl": "Чёрный",
        "notice": ""
    },
    {
        "word": "σαπίλα",
        "base": "σάπιος",
        "groups": {
            "morfology": "<em>σαπίλα </em>→ σάπ<span style=\"color: #900101\">ιος</span> +<span style=\"color: #900101\"> -ίλα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">σάπιος</span> – гнилой < сред.греч. (<span style=\"color:#054728\">σάπιος</span> < <span style=\"color:#054728\">σαπίζω</span> – гнить) < др.греч. <span style=\"color:#054728\">σήπομαι</span> – гнить"
        },
        "qws": [
            "Гниль"
        ],
        "transls": [
            "От слова Σάπιος — гнилой"
        ],
        "translation": "Гниль",
        "kind": "Существительные на -ίλα от прилагательных",
        "unicTransl": "Гнилой",
        "notice": ""
    },
    {
        "word": "αγραμματοσύνη",
        "base": "αγράμματος",
        "groups": {
            "morfology": "<em>αγραμματοσύνη </em>→ αγράμματ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -οσύνη</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Неграмотность"
        ],
        "transls": [
            "От слова Αγράμματος — неграмотный"
        ],
        "translation": "Неграмотность",
        "kind": "Существительные на -οσύνη от прилагательных",
        "unicTransl": "Неграмотный",
        "notice": ""
    },
    {
        "word": "καλοσύνη",
        "base": "καλός",
        "groups": {
            "morfology": "<em>καλοσύνη </em>→ καλ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -οσύνη</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Добро, доброта"
        ],
        "transls": [
            "От слова Καλός — добрый"
        ],
        "translation": "Добро, доброта",
        "kind": "Существительные на -οσύνη от прилагательных",
        "unicTransl": "Добрый",
        "notice": ""
    },
    {
        "word": "αβεβαιότητα",
        "base": "αβέβαιος",
        "groups": {
            "morfology": "<em>αβεβαιότητα </em>→ αβέβαι<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ότητα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Неуверенность"
        ],
        "transls": [
            "От слова Αβέβαιος — неуверенный"
        ],
        "translation": "Неуверенность",
        "kind": "Существительные на -ότητα, -ύτητα от прилагательных",
        "unicTransl": "Неуверенный",
        "notice": ""
    },
    {
        "word": "αθωότητα",
        "base": "αθώος",
        "groups": {
            "morfology": "<em>αθωότητα </em>→ αθώ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ότητα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Невиновность, невинность, наивность"
        ],
        "transls": [
            "От слова Αθώος — невиновный, невинный, наивный"
        ],
        "translation": "Невиновность, невинность, наивность",
        "kind": "Существительные на -ότητα, -ύτητα от прилагательных",
        "unicTransl": "Невиновный, невинный, наивный",
        "notice": ""
    },
    {
        "word": "γενναιότητα",
        "base": "γενναίος",
        "groups": {
            "morfology": "<em>γενναιότητα </em>→ γενναί<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ότητα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Храбрость, мужество, щедрость"
        ],
        "transls": [
            "От слова Γενναίος — храбрый, мужественный, щедрый"
        ],
        "translation": "Храбрость, мужество, щедрость",
        "kind": "Существительные на -ότητα, -ύτητα от прилагательных",
        "unicTransl": "Храбрый, мужественный, щедрый",
        "notice": ""
    },
    {
        "word": "σεμνότητα",
        "base": "σεμνός",
        "groups": {
            "morfology": "<em>σεμνότητα </em>→ σεμν<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ότητα</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">σεμνότης</span> – торжественность < <span style=\"color:#054728\">σεμνός</span> – свято чтимый < <span style=\"color:#054728\">σέβομαι</span> – почитать)"
        },
        "qws": [
            "Скромность"
        ],
        "transls": [
            "От слова Σεμνός — скромный"
        ],
        "translation": "Скромность",
        "kind": "Существительные на -ότητα, -ύτητα от прилагательных",
        "unicTransl": "Скромный",
        "notice": ""
    },
    {
        "word": "τιμιότητα",
        "base": "τίμιος",
        "groups": {
            "morfology": "<em>τιμιότητα </em>→ τίμι<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ότητα</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">στρογγυλότης</span> – округлость < <span style=\"color:#054728\">στρογγύλος</span> – круглый < <span style=\"color:#054728\">στράγγω</span> – сжимать)"
        },
        "qws": [
            "Честность"
        ],
        "transls": [
            "От слова Τίμιος — честный"
        ],
        "translation": "Честность",
        "kind": "Существительные на -ότητα, -ύτητα от прилагательных",
        "unicTransl": "Честный",
        "notice": ""
    },
    {
        "word": "τρυφερότητα",
        "base": "τρυφερός",
        "groups": {
            "morfology": "<em>τρυφερότητα </em>→ τρυφερ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ότητα</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">τρυφερότης</span> – нега, изнеженность, роскошь < <span style=\"color:#054728\">τρυφερός</span> – нежный, роскошный < <span style=\"color:#054728\">τρυφή</span> – нега, наслаждение)"
        },
        "qws": [
            "Нежность"
        ],
        "transls": [
            "От слова Τρυφερός — нежный"
        ],
        "translation": "Нежность",
        "kind": "Существительные на -ότητα, -ύτητα от прилагательных",
        "unicTransl": "Нежный",
        "notice": ""
    },
    {
        "word": "βαρύτητα",
        "base": "βαρύς",
        "groups": {
            "morfology": "<em>βαρύτητα </em>→ βαρ<span style=\"color: #900101\">ύς</span> +<span style=\"color: #900101\"> -ύτητα</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">βᾰρύτης</span> – вес, надменность < <span style=\"color:#054728\">βᾰρύς</span> – тяжёлый)"
        },
        "qws": [
            "Вес, тяжесть, важность, серьезность"
        ],
        "transls": [
            "От слова Βαρύς — тяжелый, тяжкий, важный, серьезный"
        ],
        "translation": "Вес, тяжесть, важность, серьезность",
        "kind": "Существительные на -ότητα, -ύτητα от прилагательных",
        "unicTransl": "Тяжёлый, тяжкий, важный, серьёзный",
        "notice": ""
    },
    {
        "word": "ταχύτητα",
        "base": "ταχύς",
        "groups": {
            "morfology": "<em>ταχύτητα </em>→ ταχ<span style=\"color: #900101\">ύς</span> +<span style=\"color: #900101\"> -ύτητα</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ταχυτής</span> – скорость < <span style=\"color:#054728\">τᾰχύς</span> – быстрый)"
        },
        "qws": [
            "Скорость"
        ],
        "transls": [
            "От слова Ταχύς — быстрый"
        ],
        "translation": "Скорость",
        "kind": "Существительные на -ότητα, -ύτητα от прилагательных",
        "unicTransl": "Быстрый",
        "notice": ""
    },
    {
        "word": "αδικία",
        "base": "άδικος",
        "groups": {
            "morfology": "<em>αδικία </em>→ άδικ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀδικία</span> < <span style=\"color:#054728\">ἄδικος</span> – несправедливый < <span style=\"color:#054728\">ἀ-</span> (приставка отсутствия, объединения, усиления или не влияет на смысл) + <span style=\"color:#054728\">δίκη</span> – правосудие, суд)"
        },
        "qws": [
            "Несправедливость"
        ],
        "transls": [
            "От слова Άδικος — несправедливый"
        ],
        "translation": "Несправедливость",
        "kind": "Существительные на -ία, -εία от прилагательных",
        "unicTransl": "Несправедливый",
        "notice": ""
    },
    {
        "word": "αϋπνία",
        "base": "άυπνος",
        "groups": {
            "morfology": "<em>αϋπνία </em>→ άυπν<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ία</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀϋπνία</span> < <span style=\"color:#054728\">ἀ-</span> (приставка отсутствия, объединения, усиления или не влияет на смысл) + <span style=\"color:#054728\">ὕπνος</span> – сон)"
        },
        "qws": [
            "Бессонница"
        ],
        "transls": [
            "От слова Άυπνος — бессонный"
        ],
        "translation": "Бессонница",
        "kind": "Существительные на -ία, -εία от прилагательных",
        "unicTransl": "Бессонный",
        "notice": ""
    },
    {
        "word": "ξηρασία",
        "base": "ξηρός",
        "groups": {
            "morfology": "<em>ξηρασία </em>→ ξηρ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ασία</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Засуха"
        ],
        "transls": [
            "От слова Ξηρός — засушливый"
        ],
        "translation": "Засуха",
        "kind": "Существительные на -ία, -εία от прилагательных",
        "unicTransl": "Засушливый",
        "notice": ""
    },
    {
        "word": "προδοσία",
        "base": "προδοτικός",
        "groups": {
            "morfology": "<em>προδοσία </em>→ προδο<span style=\"color: #900101\">τικός</span> +<span style=\"color: #900101\"> -σία</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">προδοσία</span> < <span style=\"color:#054728\">προδοτικός</span> – предательский)"
        },
        "qws": [
            "Предательство"
        ],
        "transls": [
            "От слова Προδοτικός — предательский"
        ],
        "translation": "Предательство",
        "kind": "Существительные на -ία, -εία от прилагательных",
        "unicTransl": "Предательский",
        "notice": ""
    },
    {
        "word": "συνήθεια",
        "base": "συνήθης",
        "groups": {
            "morfology": "<em>συνήθεια </em>→ συνήθ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -εία</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">συνήθεια</span> < <span style=\"color:#054728\">συνήθης</span> – привычный < <span style=\"color:#054728\">συν</span> + <span style=\"color:#054728\">ἦθος</span> – местопребывание < <span style=\"color:#054728\">ἔθος</span> – привычка, обычай < <span style=\"color:#054728\">ἔθω</span> – иметь обыкновение)"
        },
        "qws": [
            "Привычка"
        ],
        "transls": [
            "От слова Συνήθης — привычный"
        ],
        "translation": "Привычка",
        "kind": "Существительные на -ία, -εία от прилагательных",
        "unicTransl": "Привычный",
        "notice": ""
    },
    {
        "word": "αλμύρα",
        "base": "αλμυρός",
        "groups": {
            "morfology": "<em>αλμύρα </em>→ αλμυρ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Солоноватость"
        ],
        "transls": [
            "От слова Αλμυρός — солёный, солоноватый"
        ],
        "translation": "Солоноватость",
        "unicTransl": "Солёный, солоноватый",
        "notice": "",
        "kind": "Существительные на -α, -η от прилагательных"
    },
    {
        "word": "γλύκα",
        "base": "γλυκός",
        "groups": {
            "morfology": "<em>γλύκα </em>→ γλυκ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Сладость, нежность"
        ],
        "transls": [
            "От слова Γλυκός — сладкий, нежный, ласковый"
        ],
        "translation": "Сладость, нежность",
        "unicTransl": "Сладкий, нежный, ласковый",
        "notice": "",
        "kind": "Существительные на -α, -η от прилагательных"
    },
    {
        "word": "ζέστη",
        "base": "ζεστός",
        "groups": {
            "morfology": "<em>ζέστη </em>→ ζεστ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">ζέστη</span> < койне <span style=\"color:#054728\">ζεστός</span> – горячий < др.греч. <span style=\"color:#054728\">ζέω</span> – бурлить, кипеть."
        },
        "qws": [
            "Жар, жара, тепло"
        ],
        "transls": [
            "От слова Ζεστός — горячий, жаркий"
        ],
        "translation": "Жар, жара, тепло",
        "unicTransl": "Горячий, жаркий",
        "notice": "",
        "kind": "Существительные на -α, -η от прилагательных"
    },
    {
        "word": "ζωγραφική",
        "base": "ζωγραφικός",
        "groups": {
            "morfology": "<em>ζωγραφική </em>→ ζωγραφικ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Живопись"
        ],
        "transls": [
            "От слова Ζωγραφικός — изобразительный, графический"
        ],
        "translation": "Живопись",
        "unicTransl": "Изобразительный, графический",
        "notice": "",
        "kind": "Существительные на -α, -η от прилагательных"
    },
    {
        "word": "ξέρα",
        "base": "ξερός",
        "groups": {
            "morfology": "<em>ξέρα </em>→ ξερ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Сухость, сушь, отмель, риф"
        ],
        "transls": [
            "От слова Ξερός — сухой, безводный, тощий"
        ],
        "translation": "Сухость, сушь, отмель, риф",
        "unicTransl": "Сухой, безводный, тощий",
        "notice": "",
        "kind": "Существительные на -α, -η от прилагательных"
    },
    {
        "word": "πίκρα",
        "base": "πικρός",
        "groups": {
            "morfology": "<em>πίκρα </em>→ πικρ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Горечь, горе"
        ],
        "transls": [
            "От слова Πικρός — горький"
        ],
        "translation": "Горечь, горе",
        "unicTransl": "Горький",
        "notice": "",
        "kind": "Существительные на -α, -η от прилагательных"
    },
    {
        "word": "φοβέρα",
        "base": "φοβερός",
        "groups": {
            "morfology": "<em>φοβέρα </em>→ φοβερ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Угроза, запугивание"
        ],
        "transls": [
            "От слова Φοβερός — ужасный, страшный"
        ],
        "translation": "Угроза, запугивание",
        "unicTransl": "Ужасный, страшный",
        "notice": "",
        "kind": "Существительные на -α, -η от прилагательных"
    },
    {
        "word": "ψύχρα",
        "base": "ψυχρός",
        "groups": {
            "morfology": "<em>ψύχρα </em>→ ψυχρ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Холод, мороз"
        ],
        "transls": [
            "От слова Ψυχρός — холодный"
        ],
        "translation": "Холод, мороз",
        "unicTransl": "Холодный",
        "notice": "",
        "kind": "Существительные на -α, -η от прилагательных"
    },
    {
        "word": "ανταγωνιστής",
        "base": "ανταγωνίζομαι",
        "groups": {
            "morfology": "<em>ανταγωνιστής </em>→ ανταγων +<span style=\"color: #900101\"> -ιστής</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">ἀνταγωνίζομαι</span> – соревноваться < <span style=\"color:#054728\">ἀγωνίζομαι</span> – соревноваться < <span style=\"color:#054728\">ἀγών</span> – собрание < <span style=\"color:#054728\">ἄγω</span> – возить.",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Конкурент"
        ],
        "transls": [
            "От слова Ανταγωνίζομαι — конкурировать"
        ],
        "translation": "Конкурент",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Конкурировать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "βιαστής",
        "base": "βιάζω",
        "groups": {
            "morfology": "<em>βιαστής </em>→ βιάζ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -της</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">βιάζω</span> – применять силу < <span style=\"color:#054728\">βία</span> – сила, насилие.",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Насильник"
        ],
        "transls": [
            "От слова Βιάζω — насиловать"
        ],
        "translation": "Насильник",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Насиловать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "εκδότης",
        "base": "εκδίδω",
        "groups": {
            "morfology": "<em>εκδότης </em>→ εκδ<span style=\"color: #900101\">ίδω</span> +<span style=\"color: #900101\"> -ότης</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">εκδίδω</span> – издавать.",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Издатель"
        ],
        "transls": [
            "От слова Εκδίδω — издавать"
        ],
        "translation": "Издатель",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Издавать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "ενθουσιαστής",
        "base": "ενθουσιάζω",
        "groups": {
            "morfology": "<em>ενθουσιαστής </em>→ ενθουσιάζ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -της</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ενθουσιάζω</span> – быть вдохновлённым < др.греч. (<span style=\"color:#054728\">ἐνθουσιάζω</span> < <span style=\"color:#054728\">ἔνθους</span> – вдохновлённый, воодушевлённый < <span style=\"color:#054728\">ἔνθεος</span> – воодушевлённый < <span style=\"color:#054728\">ἐν</span> + <span style=\"color:#054728\">θεός</span> – с богом).",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Энтузиаст"
        ],
        "transls": [
            "От слова Ενθουσιάζω — быть вдохновлённым"
        ],
        "translation": "Энтузиаст",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Быть вдохновлённым",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "επενδυτής",
        "base": "επενδύω",
        "groups": {
            "morfology": "<em>επενδυτής </em>→ επενδύ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -τής</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">ἐπενδύτης</span> < <span style=\"color:#054728\">ἐπενδύω</span> – надевать < <span style=\"color:#054728\">ἐνδύω</span> – одевать, входить < <span style=\"color:#054728\">δύω</span> – погружаться, входить .",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Инвестор"
        ],
        "transls": [
            "От слова Επενδύω — инвестировать"
        ],
        "translation": "Инвестор",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Инвестировать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "επισκέπτης",
        "base": "επισκέπτομαι",
        "groups": {
            "morfology": "<em>επισκέπτης </em>→ επισκέπτ<span style=\"color: #900101\">ομαι</span> +<span style=\"color: #900101\"> -της</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἐπισκέπτης</span> < <span style=\"color:#054728\">ἐπισκέπτομαι</span> — посещать < <span style=\"color:#054728\">σκέπτομαι</span> – смотреть, наблюдать).",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Посетитель"
        ],
        "transls": [
            "От слова Επισκέπτομαι — посещать"
        ],
        "translation": "Посетитель",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Посещать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "θεριστής",
        "base": "θερίζω",
        "groups": {
            "morfology": "<em>θεριστής </em>→ θερ<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -ιστης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Жнец"
        ],
        "transls": [
            "От слова Θερίζω — жать"
        ],
        "translation": "Жнец",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Жать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "καπνιστής",
        "base": "καπνίζω",
        "groups": {
            "morfology": "<em>καπνιστής </em>→ καπν<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -ιστης</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">καπνίζω</span> – курить < <span style=\"color:#054728\">καπνός</span> – дым)",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Курильщик"
        ],
        "transls": [
            "От слова Καπνίζω — курить"
        ],
        "translation": "Курильщик",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Курить",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "λυτρωτής",
        "base": "λυτρώνω",
        "groups": {
            "morfology": "<em>λυτρωτής </em>→ λυτρ<span style=\"color: #900101\">ώνω</span> +<span style=\"color: #900101\"> -ωτης</span>",
            "etymology": "<br>От койне <span style=\"color:#054728\">λυτρωτής</span> < др.греч. <span style=\"color:#054728\">λυτρόω</span> – освободить, отпустить < <span style=\"color:#054728\">λύτρον</span> – искупление, выкуп < <span style=\"color:#054728\">λύω</span> – освободить, отпустить + <span style=\"color:#054728\">-τρον</span> (инструментальный суффикс существительных).",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Избавитель"
        ],
        "transls": [
            "От слова Λυτρώνω — избавлять"
        ],
        "translation": "Избавитель",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Избавлять",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "νικητής",
        "base": "νικάω",
        "groups": {
            "morfology": "<em>νικητής </em>→ νικ<span style=\"color: #900101\">άω</span> +<span style=\"color: #900101\"> -ητης</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">νικητής</span> < <span style=\"color:#054728\">νικάω, νικῶ</span> – побеждать < <span style=\"color:#054728\">νίκη</span> – победа)",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Победитель"
        ],
        "transls": [
            "От слова Νικάω — победить"
        ],
        "translation": "Победитель",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Победить",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "παίχτης",
        "base": "παίζω",
        "groups": {
            "morfology": "<em>παίχτης </em>→ παίζω, παίχ<span style=\"color: #900101\">τηκα</span> +<span style=\"color: #900101\"> -της</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">παίκτης</span> < др.греч. (<span style=\"color:#054728\">παίκτης</span> < <span style=\"color:#054728\">παίζω</span> – играть < <span style=\"color:#054728\">παῖς</span> – дитя, ребёнок)",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Игрок, исполнитель"
        ],
        "transls": [
            "От слова Παίζω — играть"
        ],
        "translation": "Игрок, исполнитель",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Играть",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "ποιητής",
        "base": "ποιώ",
        "groups": {
            "morfology": "<em>ποιητής </em>→ ποι<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ητής</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">ποιητής</span> < <span style=\"color:#054728\">ποιέω</span>, <span style=\"color:#054728\">ποιῶ</span> – делать, творить.",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Поэт"
        ],
        "transls": [
            "От слова Ποιώ — творить, делать"
        ],
        "translation": "Поэт",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Творить, делать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "πολεμιστής",
        "base": "πολεμώ",
        "groups": {
            "morfology": "<em>πολεμιστής </em>→ πολεμ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ιστής</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">πολεμῶ</span>, <span style=\"color:#054728\">πολεμέω</span> – воевать < <span style=\"color:#054728\">πόλεμος</span> – война).",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Воин"
        ],
        "transls": [
            "От слова Πολεμώ — воевать"
        ],
        "translation": "Воин",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Воевать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "προγραμματιστής",
        "base": "προγραμματίζω",
        "groups": {
            "morfology": "<em>προγραμματιστής </em>→ προγραμματ<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -ιστης</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">προγραμματίζω</span> – программировать < франц. <span style=\"color:#054728\">programmer</span> или англ. <span style=\"color:#054728\">program</span>.",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Программист"
        ],
        "transls": [
            "От слова Προγραμματίζω — программировать"
        ],
        "translation": "Программист",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Программировать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "προδότης",
        "base": "προδίδω",
        "groups": {
            "morfology": "<em>προδότης </em>→ προδ<span style=\"color: #900101\">ίδω</span> +<span style=\"color: #900101\"> -ότης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Предатель"
        ],
        "transls": [
            "От слова Προδίδω — предать"
        ],
        "translation": "Предатель",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Предать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "προπονητής",
        "base": "προπονώ",
        "groups": {
            "morfology": "<em>προπονητής </em>→ προπον<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ητής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Тренер"
        ],
        "transls": [
            "От слова Προπονώ — тренировать"
        ],
        "translation": "Тренер",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Тренировать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "ράφτης",
        "base": "ράβω",
        "groups": {
            "morfology": "<em>ράφτης </em>→ ράβ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -της</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Портной"
        ],
        "transls": [
            "От слова Ράβω — шить"
        ],
        "translation": "Портной",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Шить",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "συλλέκτης",
        "base": "συλλέγω",
        "groups": {
            "morfology": "<em>συλλέκτης </em>→ συλλέγ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -της</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Коллекционер"
        ],
        "transls": [
            "От слова Συλλέγω — коллекционировать"
        ],
        "translation": "Коллекционер",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Коллекционировать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "τραγουδιστής",
        "base": "τραγουδώ",
        "groups": {
            "morfology": "<em>τραγουδιστής </em>→ τραγουδ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ιστής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Певец"
        ],
        "transls": [
            "От слова Τραγουδώ — петь"
        ],
        "translation": "Певец",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Петь",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "υφαντής",
        "base": "υφαίνω",
        "groups": {
            "morfology": "<em>υφαντής </em>→ υφαίν<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -της</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Ткач"
        ],
        "transls": [
            "От слова Υφαίνω — ткать"
        ],
        "translation": "Ткач",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Ткать",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "φορτωτής",
        "base": "φορτώνω",
        "groups": {
            "morfology": "<em>φορτωτής </em>→ φορτώ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -τής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Грузчик"
        ],
        "transls": [
            "От слова Φορτώνω — грузить"
        ],
        "translation": "Грузчик",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Грузить",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "ανθρωπιστής",
        "base": "άνθρωπος",
        "groups": {
            "morfology": "<em>ανθρωπιστής </em>→ άνθρωπ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ιστής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Гуманист"
        ],
        "transls": [
            "От слова Άνθρωπος — человек"
        ],
        "translation": "Гуманист",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Человек",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "εγωιστής",
        "base": "εγώ",
        "groups": {
            "morfology": "<em>εγωιστής </em>→ εγ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ιστής</span>",
            "etymology": "<br>От франц. <span style=\"color:#054728\">égoïste</span> < др.греч. <span style=\"color:#054728\">ἐγώ</span> – я.",
            "aplication": "<br>Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
        },
        "qws": [
            "Эгоист"
        ],
        "transls": [
            "От слова Εγώ — я"
        ],
        "translation": "Эгоист",
        "kind": "Существительные на -της, -ιστης, -ότης от разных частей речи",
        "unicTransl": "Я",
        "notice": "Существительные на -της, -ιστης, -ότης означают лицо-исполнителя действия и образуются в основном от глаголов. С тем же смыслом образуются существительные на -(ά)τορας и на -έας, -ιάς."
    },
    {
        "word": "γεροντάκος",
        "base": "γέροντας",
        "groups": {
            "morfology": "<em>γεροντάκος </em>→ γέροντ<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -άκος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Старичок"
        ],
        "transls": [
            "От слова Γέροντας — старик"
        ],
        "translation": "Старичок",
        "kind": "Уменьшительные существительные на -άκος, -άκης, -άκι от существительных",
        "unicTransl": "Старик",
        "notice": "Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "δρομάκος",
        "base": "δρόμος",
        "groups": {
            "morfology": "<em>δρομάκος </em>→ δρόμ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -άκος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Дорожка"
        ],
        "transls": [
            "От слова Δρόμος — дорога"
        ],
        "translation": "Дорожка",
        "kind": "Уменьшительные существительные на -άκος, -άκης, -άκι от существительных",
        "unicTransl": "Дорога",
        "notice": "Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "μαθητάκος",
        "base": "μαθητής",
        "groups": {
            "morfology": "<em>μαθητάκος </em>→ μαθητ<span style=\"color: #900101\">ής</span> +<span style=\"color: #900101\"> -άκος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Ученичёк"
        ],
        "transls": [
            "От слова Μαθητής — ученик"
        ],
        "translation": "Ученичёк",
        "kind": "Уменьшительные существительные на -άκος, -άκης, -άκι от существительных",
        "unicTransl": "Ученик",
        "notice": "Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "γιωργάκης",
        "base": "γιώργος",
        "groups": {
            "morfology": "<em>γιωργάκης </em>→ γιώργ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -άκης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Жорик"
        ],
        "transls": [
            "От слова Γιώργος — георгий"
        ],
        "translation": "Жорик",
        "kind": "Уменьшительные существительные на -άκος, -άκης, -άκι от существительных",
        "unicTransl": "Георгий",
        "notice": "Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "κοσμάκης",
        "base": "κόσμος",
        "groups": {
            "morfology": "<em>κοσμάκης </em>→ κόσμ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -άκης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Мирок"
        ],
        "transls": [
            "От слова Κόσμος — мир"
        ],
        "translation": "Мирок",
        "kind": "Уменьшительные существительные на -άκος, -άκης, -άκι от существительных",
        "unicTransl": "Мир",
        "notice": "Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "αρνάκι",
        "base": "αρνί",
        "groups": {
            "morfology": "<em>αρνάκι </em>→ αρν<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -άκι</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">αρνί</span> – ягнёнок < сред.греч. <span style=\"color:#054728\">ἀρνίν</span> – ягнёнок < древ.греч. (<span style=\"color:#054728\">ἀρνίον</span> – ягнёнок < <span style=\"color:#054728\">ἀρήν</span> – баран)",
            "aplication": "<br>Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Ягнёночек"
        ],
        "transls": [
            "От слова Αρνί — ягнёнок"
        ],
        "translation": "Ягнёночек",
        "kind": "Уменьшительные существительные на -άκος, -άκης, -άκι от существительных",
        "unicTransl": "Ягнёнок",
        "notice": "Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "δαχτυλάκι",
        "base": "δάχτυλο",
        "groups": {
            "morfology": "<em>δαχτυλάκι </em>→ δάχτυλ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -άκι</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Пальчик"
        ],
        "transls": [
            "От слова Δάχτυλο — палец"
        ],
        "translation": "Пальчик",
        "kind": "Уменьшительные существительные на -άκος, -άκης, -άκι от существительных",
        "unicTransl": "Палец",
        "notice": "Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "παιδάκι",
        "base": "παιδί",
        "groups": {
            "morfology": "<em>παιδάκι </em>→ παιδ<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -άκι</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Ребёночек"
        ],
        "transls": [
            "От слова Παιδί — ребёнок"
        ],
        "translation": "Ребёночек",
        "kind": "Уменьшительные существительные на -άκος, -άκης, -άκι от существительных",
        "unicTransl": "Ребёнок",
        "notice": "Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "ψαράκι",
        "base": "ψάρι",
        "groups": {
            "morfology": "<em>ψαράκι </em>→ ψάρ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -άκι</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ψάρι</span> – рыба < сред.греч. <span style=\"color:#054728\">ψάρι</span> – рыба < др.греч. (<span style=\"color:#054728\">ὀψάριον</span> – деликатесик < <span style=\"color:#054728\">ὄψον</span> – деликатеc).",
            "aplication": "<br>Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Рыбка"
        ],
        "transls": [
            "От слова Ψάρι — рыба"
        ],
        "translation": "Рыбка",
        "kind": "Уменьшительные существительные на -άκος, -άκης, -άκι от существительных",
        "unicTransl": "Рыба",
        "notice": "Существительные на -άκος, -άκης, -άκι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -ίτσα, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "ελενίτσα",
        "base": "ελένη",
        "groups": {
            "morfology": "<em>ελενίτσα </em>→ ελέν<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ίτσα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ίτσα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Леночка"
        ],
        "transls": [
            "От слова Ελένη — Лена"
        ],
        "translation": "Леночка",
        "kind": "Уменьшительные существительные на -ίτσα от существительных",
        "unicTransl": "Лена",
        "notice": "Существительные на -ίτσα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "κλωστίτσα",
        "base": "κλωστή",
        "groups": {
            "morfology": "<em>κλωστίτσα </em>→ κλωστ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ίτσα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">κλωστή</span> – нить < сред.греч. <span style=\"color:#054728\">κλωστή</span> < др.греч. (<span style=\"color:#054728\">κλώθω</span> – прясть < др.греч. <span style=\"color:#054728\">κάλαθος</span> – корзина, плетёнка)",
            "aplication": "<br>Существительные на -ίτσα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Ниточка"
        ],
        "transls": [
            "От слова Κλωστή — нить"
        ],
        "translation": "Ниточка",
        "kind": "Уменьшительные существительные на -ίτσα от существительных",
        "unicTransl": "Нить",
        "notice": "Существительные на -ίτσα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "μηλίτσα",
        "base": "μήλο",
        "groups": {
            "morfology": "<em>μηλίτσα </em>→ μήλ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ίτσα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">μήλο</span> – яблоко < древ.греч. <span style=\"color:#054728\">μῆλον</span> – яблоко.",
            "aplication": "<br>Существительные на -ίτσα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Яблочко"
        ],
        "transls": [
            "От слова Μήλο — яблоко"
        ],
        "translation": "Яблочко",
        "kind": "Уменьшительные существительные на -ίτσα от существительных",
        "unicTransl": "Яблоко",
        "notice": "Существительные на -ίτσα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ούδα, -ούδι, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "αγγελούδι",
        "base": "άγγελος",
        "groups": {
            "morfology": "<em>αγγελούδι </em>→ άγγελ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ούδι</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ούδα, -ούδι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Ангелочек"
        ],
        "transls": [
            "От слова Άγγελος — ангел"
        ],
        "translation": "Ангелочек",
        "kind": "Уменьшительные существительные на -ούδα, -ούδι от существительных",
        "unicTransl": "Ангел",
        "notice": "Существительные на -ούδα, -ούδι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "κοπελούδα",
        "base": "κοπέλα",
        "groups": {
            "morfology": "<em>κοπελούδα </em>→ κοπέλ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ούδα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ούδα, -ούδι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Девчушка"
        ],
        "transls": [
            "От слова Κοπέλα — девушка"
        ],
        "translation": "Девчушка",
        "kind": "Уменьшительные существительные на -ούδα, -ούδι от существительных",
        "unicTransl": "Девушка",
        "notice": "Существительные на -ούδα, -ούδι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούλης, -ουλα, -ούλι и на -όπουλο, -οπούλα."
    },
    {
        "word": "αδερφούλης",
        "base": "αδερφός",
        "groups": {
            "morfology": "<em>αδερφούλης </em>→ αδερφ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ούλης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Братик"
        ],
        "transls": [
            "От слова Αδερφός — брат"
        ],
        "translation": "Братик",
        "kind": "Уменьшительные существительные на -ούλης, -ουλα, -ούλι от существительных",
        "unicTransl": "Брат",
        "notice": "Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
    },
    {
        "word": "παππούλης",
        "base": "παππούς",
        "groups": {
            "morfology": "<em>παππούλης </em>→ παππ<span style=\"color: #900101\">ούς</span> +<span style=\"color: #900101\"> -ούλης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Дедушка"
        ],
        "transls": [
            "От слова Παππούς — дед"
        ],
        "translation": "Дедушка",
        "kind": "Уменьшительные существительные на -ούλης, -ουλα, -ούλι от существительных",
        "unicTransl": "Дед",
        "notice": "Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
    },
    {
        "word": "αγγελικούλα",
        "base": "αγγελίκα",
        "groups": {
            "morfology": "<em>αγγελικούλα </em>→ αγγελ<span style=\"color: #900101\">ίκα</span> +<span style=\"color: #900101\"> -ούλα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Αнжелочка"
        ],
        "transls": [
            "От слова Αγγελίκα — анжела"
        ],
        "translation": "Αнжелочка",
        "kind": "Уменьшительные существительные на -ούλης, -ουλα, -ούλι от существительных",
        "unicTransl": "Анжела",
        "notice": "Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
    },
    {
        "word": "αδερφούλα",
        "base": "αδερφή",
        "groups": {
            "morfology": "<em>αδερφούλα </em>→ αδερφ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ούλα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Сестричка"
        ],
        "transls": [
            "От слова Αδερφή — сестра"
        ],
        "translation": "Сестричка",
        "kind": "Уменьшительные существительные на -ούλης, -ουλα, -ούλι от существительных",
        "unicTransl": "Сестра",
        "notice": "Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
    },
    {
        "word": "βρυσούλα",
        "base": "βρύση",
        "groups": {
            "morfology": "<em>βρυσούλα </em>→ βρύσ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ούλα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Родничок, краник"
        ],
        "transls": [
            "От слова Βρύση — родник, кран"
        ],
        "translation": "Родничок, краник",
        "kind": "Уменьшительные существительные на -ούλης, -ουλα, -ούλι от существительных",
        "unicTransl": "Родник, кран",
        "notice": "Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
    },
    {
        "word": "κορούλα",
        "base": "κόρη",
        "groups": {
            "morfology": "<em>κορούλα </em>→ κόρ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ούλα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Доченька"
        ],
        "transls": [
            "От слова Κόρη — дочь"
        ],
        "translation": "Доченька",
        "kind": "Уменьшительные существительные на -ούλης, -ουλα, -ούλι от существительных",
        "unicTransl": "Дочь",
        "notice": "Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
    },
    {
        "word": "μητερούλα",
        "base": "μητέρα",
        "groups": {
            "morfology": "<em>μητερούλα </em>→ μητέρ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ούλα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Мамочка"
        ],
        "transls": [
            "От слова Μητέρα — мать"
        ],
        "translation": "Мамочка",
        "kind": "Уменьшительные существительные на -ούλης, -ουλα, -ούλι от существительных",
        "unicTransl": "Мать",
        "notice": "Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
    },
    {
        "word": "σακούλι",
        "base": "σακί",
        "groups": {
            "morfology": "<em>σακούλι </em>→ σακ<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -ούλι</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
        },
        "qws": [
            "Мешочек"
        ],
        "transls": [
            "От слова Σακί — мешок"
        ],
        "translation": "Мешочек",
        "kind": "Уменьшительные существительные на -ούλης, -ουλα, -ούλι от существительных",
        "unicTransl": "Мешок",
        "notice": "Существительные на -ούλης, -ουλα, -ούλι являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -όπουλο, -οπούλα."
    },
    {
        "word": "αρχοντόπουλο / αρχοντοπούλα",
        "base": "άρχοντας",
        "groups": {
            "morfology": "<em>αρχοντόπουλο, αρχοντοπούλα </em>→ άρχοντ<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -όπουλο</span>/<span style=\"color: #900101\">-οπούλα</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">ἄρχοντας</span> – господин, правитель, богач < др.греч. (<span style=\"color:#054728\">ἄρχων</span> – правитель, начальник, вождь < <span style=\"color:#054728\">ἄρχω</span> – начинать, вести, править);",
            "aplication": "<br>Существительные на -όπουλο, -οπούλα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
        },
        "qws": [
            "Сын знати, дочь знати"
        ],
        "transls": [
            "От слова Άρχοντας — господин, правитель, богач, архонт"
        ],
        "translation": "Сын знати, дочь знати",
        "kind": "Уменьшительные существительные на -όπουλο, -οπούλα от существительных",
        "unicTransl": "Архонт",
        "notice": "Существительные на -όπουλο, -οπούλα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
    },
    {
        "word": "βασιλόπουλο / βασιλοπούλα",
        "base": "βασιλιάς",
        "groups": {
            "morfology": "<em>βασιλόπουλο, βασιλοπούλα </em>→ βασιλ<span style=\"color: #900101\">ιάς</span> +<span style=\"color: #900101\"> -όπουλο/-οπούλα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Существительные на -όπουλο, -οπούλα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
        },
        "qws": [
            "Царевич, царевна"
        ],
        "transls": [
            "От слова Βασιλιάς — царь"
        ],
        "translation": "Царевич, царевна",
        "kind": "Уменьшительные существительные на -όπουλο, -οπούλα от существительных",
        "unicTransl": "Царь",
        "notice": "Существительные на -όπουλο, -οπούλα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
    },
    {
        "word": "βοσκόπουλο, βοσκοπούλα",
        "base": "βοσκός",
        "groups": {
            "morfology": "<em>βοσκόπουλο, βοσκοπούλα </em>→ βοσκ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -όπουλο</span>/<span style=\"color: #900101\">-οπούλα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">βοσκός</span> – пастух < др.греч. (<span style=\"color:#054728\">βοσκός</span> < <span style=\"color:#054728\">βόσκω</span> – пасти)",
            "aplication": "<br>Существительные на -όπουλο, -οπούλα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
        },
        "qws": [
            "Пастушонок, пастушечка"
        ],
        "transls": [
            "От слова Βοσκός – пастух"
        ],
        "translation": "Пастушонок, пастушечка",
        "kind": "Уменьшительные существительные на -όπουλο, -οπούλα от существительных",
        "unicTransl": "Пастух",
        "notice": "Существительные на -όπουλο, -οπούλα являются уменьшительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
    },
    {
        "word": "βαρκάκι / βαρκίτσα / βαρκούλα",
        "base": "βάρκα",
        "groups": {
            "morfology": "<em>βαρκάκι, βαρκίτσα, βαρκούλα </em>→ βάρκ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -άκι/-ίτσα/-ούλα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">βάρκα</span> – лодка < поздний лат. <span style=\"color:#054728\">barca</span> < лат. <span style=\"color:#054728\">baris</span> < др.греч. <span style=\"color:#054728\">βᾶρις</span> < др.егип.<span style=\"color:#054728\">/bair/</span>.",
            "aplication": "<br>Эти существительные имеют множество окончаний и являются уменьшительными формами существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -όπουλο, -οπούλα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
        },
        "qws": [
            "Лодочка"
        ],
        "transls": [
            "От слова Βάρκα — лодка"
        ],
        "translation": "Лодочка",
        "kind": "Уменьшительные существительные множества окончаний от существительных",
        "unicTransl": "Лодка",
        "notice": "Эти существительные имеют множество окончаний и являются уменьшительными формами существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -όπουλο, -οπούλα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
    },
    {
        "word": "γατάκι / γατίτσα / γατούλα / γατούλι",
        "base": "γάτα",
        "groups": {
            "morfology": "<em>γατάκι, γατίτσα, γατούλα, γατούλι </em>→ γάτ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -άκι/-ίτσα/-ούλα/-ούλι</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">γάτα</span> – кошка < сред.греч. <span style=\"color:#054728\">γάτα</span> < сред.лат. <span style=\"color:#054728\">gatta</span> < позд.лат. <span style=\"color:#054728\">catta</span>, <span style=\"color:#054728\">cattus</span>.",
            "aplication": "<br>Эти существительные имеют множество окончаний и являются уменьшительными формами существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -όπουλο, -οπούλα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
        },
        "qws": [
            "Кошечка"
        ],
        "transls": [
            "От слова Γάτα — кошка"
        ],
        "translation": "Кошечка",
        "kind": "Уменьшительные существительные множества окончаний от существительных",
        "unicTransl": "Кошка",
        "notice": "Эти существительные имеют множество окончаний и являются уменьшительными формами существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -όπουλο, -οπούλα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
    },
    {
        "word": "πετρίτσα / πετρούλα / πετράδι / πετραδάκι",
        "base": "πέτρα",
        "groups": {
            "morfology": "<em>πετρίτσα, πετρούλα, πετράδι, πετραδάκι </em>→ πέτρα +<span style=\"color: #900101\"> -ίτσα/-ούλα/-άδι/-αδάκι</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">πέτρα</span> – камень < др.греч. <span style=\"color:#054728\">πέτρα</span> – каменная глыба, скала.",
            "aplication": "<br>Эти существительные имеют множество окончаний и являются уменьшительными формами существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -όπουλο, -οπούλα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
        },
        "qws": [
            "Камешек"
        ],
        "transls": [
            "От слова Πέτρα — камень"
        ],
        "translation": "Камешек",
        "kind": "Уменьшительные существительные множества окончаний от существительных",
        "unicTransl": "Камень",
        "notice": "Эти существительные имеют множество окончаний и являются уменьшительными формами существительного, от которого они образованы. С тем же смыслом образуются существительные на -άκος, -άκης, -άκι, на -ίτσα, на -όπουλο, -οπούλα, на -ούδα, -ούδι и на -ούλης, -ουλα, -ούλι."
    },
    {
        "word": "βαρέλα",
        "base": "βαρέλι",
        "groups": {
            "morfology": "<em>βαρέλα </em>→ βαρέλ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">βαρέλι</span> – бочка < сред.греч. <span style=\"color:#054728\">βαρέλι</span> < итал. <span style=\"color:#054728\">barella</span>",
            "aplication": "<br>Существительные на -α являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άρα, -αρας."
        },
        "qws": [
            "Большая бочка"
        ],
        "transls": [
            "От слова Βαρέλι — бочка"
        ],
        "translation": "Большая бочка",
        "kind": "Увеличительные существительные на -α от существительных",
        "unicTransl": "Бочка",
        "notice": "Существительные на -α являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άρα, -αρας."
    },
    {
        "word": "καλοκύθα",
        "base": "καλοκύθι",
        "groups": {
            "morfology": "<em>καλοκύθα </em>→ καλοκύθ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">καλοκύθι</span> – тыква < др.греч. <span style=\"color:#054728\">καλοκύνθη</span>",
            "aplication": "<br>Существительные на -α являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άρα, -αρας."
        },
        "qws": [
            "Большая тыква"
        ],
        "transls": [
            "От слова Καλοκύθι — тыква"
        ],
        "translation": "Большая тыква",
        "kind": "Увеличительные существительные на -α от существительных",
        "unicTransl": "Тыква",
        "notice": "Существительные на -α являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άρα, -αρας."
    },
    {
        "word": "κασόνα",
        "base": "κασόνι",
        "groups": {
            "morfology": "<em>κασόνα </em>→ κασόν<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">κασόνι</span> – ящик < итал. <span style=\"color:#054728\">cassone</span>",
            "aplication": "<br>Существительные на -α являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άρα, -αρας."
        },
        "qws": [
            "Большой ящик, сундук"
        ],
        "transls": [
            "От слова Κασόνι — ящик"
        ],
        "translation": "Большой ящик, сундук",
        "kind": "Увеличительные существительные на -α от существительных",
        "unicTransl": "Ящик",
        "notice": "Существительные на -α являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άρα, -αρας."
    },
    {
        "word": "κουτάλα",
        "base": "κουτάλι",
        "groups": {
            "morfology": "<em>κουτάλα </em>→ κουτάλ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">κουτάλι</span> – ложка < сред.греч. <span style=\"color:#054728\">κουτάλιν</span> < койне <span style=\"color:#054728\">κουτάλιον</span>, <span style=\"color:#054728\">κωτάλιον</span> – уменьш. от черпак < сред.греч. <span style=\"color:#054728\">κώταλις</span> – мешалка, черпак.",
            "aplication": "<br>Существительные на -α являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άρα, -αρας."
        },
        "qws": [
            "Большая ложка"
        ],
        "transls": [
            "От слова Κουτάλι — ложка"
        ],
        "translation": "Большая ложка",
        "kind": "Увеличительные существительные на -α от существительных",
        "unicTransl": "Ложка",
        "notice": "Существительные на -α являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -άρα, -αρας."
    },
    {
        "word": "φετάρα",
        "base": "φέτα",
        "groups": {
            "morfology": "<em>φετάρα </em>→ φέτ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -άρα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">φέτα</span> – ломтик < итал. <span style=\"color:#054728\">fetta</span> – ломтик < лат. (<span style=\"color:#054728\">offitta</span> – ломтик, кусочек < <span style=\"color:#054728\">offa</span> – ломоть, кусок)",
            "aplication": "<br>Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
        },
        "qws": [
            "Краюха, кусок"
        ],
        "transls": [
            "От слова Φέτα — ломтик"
        ],
        "translation": "Краюха, кусок",
        "kind": "Увеличительные существительные на -άρα, -αρας от существительных",
        "unicTransl": "Ломтик",
        "notice": "Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
    },
    {
        "word": "φωνάρα",
        "base": "φωνή",
        "groups": {
            "morfology": "<em>φωνάρα </em>→ φων<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -άρα</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">φωνή</span> – звук, голос < др.греч. <span style=\"color:#054728\">φωνή</span>",
            "aplication": "<br>Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
        },
        "qws": [
            "Вопль"
        ],
        "transls": [
            "От слова Φωνή — звук, голос"
        ],
        "translation": "Вопль",
        "kind": "Увеличительные существительные на -άρα, -αρας от существительных",
        "unicTransl": "Звук, голос",
        "notice": "Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
    },
    {
        "word": "δουλευταράς",
        "base": "δουλευτής",
        "groups": {
            "morfology": "<em>δουλευταράς </em>→ δουλευτ<span style=\"color: #900101\">ής</span> +<span style=\"color: #900101\"> -άρας</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">δουλευτής</span> – труженик, работник < койне (<span style=\"color:#054728\">δουλευτής</span> – работник, служитель, раб < <span style=\"color:#054728\">δουλεύω</span> – быть рабом, служить) < др.греч. (<span style=\"color:#054728\">δουλόω</span> – порабощать < <span style=\"color:#054728\">δοῦλος</span> – раб)",
            "aplication": "<br>Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
        },
        "qws": [
            "Трудяга"
        ],
        "transls": [
            "От слова Δουλευτής — труженик, работник"
        ],
        "translation": "Трудяга",
        "kind": "Увеличительные существительные на -άρα, -αρας от существительных",
        "unicTransl": "Труженик, работник",
        "notice": "Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
    },
    {
        "word": "κοιλαράς",
        "base": "κοιλιά",
        "groups": {
            "morfology": "<em>κοιλαράς </em>→ κοιλ<span style=\"color: #900101\">ιά</span> +<span style=\"color: #900101\"> -άρας</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">κοιλιά</span> – живот < сред.греч. <span style=\"color:#054728\">κοιλιά</span> – живот < др.греч. <span style=\"color:#054728\">κοιλία</span> – полость < <span style=\"color:#054728\">κοῖλος</span> – пустой",
            "aplication": "<br>Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
        },
        "qws": [
            "Животяра, толстобрюхий"
        ],
        "transls": [
            "От слова Κοιλιά — живот"
        ],
        "translation": "Животяра, толстобрюхий",
        "kind": "Увеличительные существительные на -άρα, -αρας от существительных",
        "unicTransl": "Живот",
        "notice": "Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
    },
    {
        "word": "χορευταράς",
        "base": "χορευτής",
        "groups": {
            "morfology": "<em>χορευταράς </em>→ χορευτ<span style=\"color: #900101\">ής</span> +<span style=\"color: #900101\"> -άρας</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">χορευτής</span> – танцор < др.греч. (<span style=\"color:#054728\">χορευτής</span> < <span style=\"color:#054728\">χορός</span> – танец)",
            "aplication": "<br>Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
        },
        "qws": [
            "Фанатичный танцор"
        ],
        "transls": [
            "От слова Χορευτής — танцор"
        ],
        "translation": "Фанатичный танцор",
        "kind": "Увеличительные существительные на -άρα, -αρας от существительных",
        "unicTransl": "Танцор",
        "notice": "Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
    },
    {
        "word": "παίδαρας",
        "base": "παιδί",
        "groups": {
            "morfology": "<em>παίδαρας </em>→ παιδ<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -άρας</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">παιδί</span> – ребёнок < сред.греч. <span style=\"color:#054728\">παιδίν</span> < др.греч. (<span style=\"color:#054728\">παιδίον</span> – ребёночек < <span style=\"color:#054728\">παῖς</span> – дитя, ребёнок)",
            "aplication": "<br>Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
        },
        "qws": [
            "Большой ребёнок"
        ],
        "transls": [
            "От слова Παιδί — ребёнок"
        ],
        "translation": "Большой ребёнок",
        "kind": "Увеличительные существительные на -άρα, -αρας от существительных",
        "unicTransl": "Ребёнок",
        "notice": "Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
    },
    {
        "word": "σκύλαρας",
        "base": "σκυλί, σκύλος",
        "groups": {
            "morfology": "<em>σκύλαρας </em>→ σκυλ<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -άρας</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">σκυλί</span>, <span style=\"color:#054728\">σκύλος</span> – собака < сред.греч. <span style=\"color:#054728\">σκυλίον</span> – собачка < др.греч. <span style=\"color:#054728\">σκύλος</span> – собака.",
            "aplication": "<br>Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
        },
        "qws": [
            "Большой кобель"
        ],
        "transls": [
            "От слова Σκυλί, σκύλος — собака"
        ],
        "translation": "Большой кобель",
        "kind": "Увеличительные существительные на -άρα, -αρας от существительных",
        "unicTransl": "Собака",
        "notice": "Существительные на -άρα, -αρας являются увеличительной формой существительного, от которого они образованы. С тем же смыслом образуются существительные на -α."
    },
    {
        "word": "ηπερώτης",
        "base": "Ήπερεις",
        "groups": {
            "morfology": "<em>ηπερώτης </em>→ Ήπερ<span style=\"color: #900101\">εις</span> +<span style=\"color: #900101\"> -ώτης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
        },
        "qws": [
            "Житель Эпира"
        ],
        "transls": [
            "От слова Ήπερεις — Эпир"
        ],
        "translation": "Житель Эпира",
        "kind": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης от существительных",
        "unicTransl": "Эпир",
        "notice": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
    },
    {
        "word": "θρακιώτης",
        "base": "Θράκη",
        "groups": {
            "morfology": "<em>θρακιώτης </em>→ Θράκ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ιώτης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
        },
        "qws": [
            "Фракиец"
        ],
        "transls": [
            "От слова Θράκη — Фракия"
        ],
        "translation": "Фракиец",
        "kind": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης от существительных",
        "unicTransl": "Фракия",
        "notice": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
    },
    {
        "word": "ρουμελιώτης",
        "base": "Ρούμελη",
        "groups": {
            "morfology": "<em>ρουμελιώτης </em>→ Ρούμελ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ιώτης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
        },
        "qws": [
            "Румелиец"
        ],
        "transls": [
            "От слова Ρούμελη — Румелия"
        ],
        "translation": "Румелиец",
        "kind": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης от существительных",
        "unicTransl": "Румелия",
        "notice": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
    },
    {
        "word": "σουλιώτης",
        "base": "Σούλι",
        "groups": {
            "morfology": "<em>σουλιώτης </em>→ Σούλ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ιώτης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
        },
        "qws": [
            "Житель Сули"
        ],
        "transls": [
            "От слова Σούλι — Сули"
        ],
        "translation": "Житель Сули",
        "kind": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης от существительных",
        "unicTransl": "Сули",
        "notice": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
    },
    {
        "word": "ανατολίτης",
        "base": "ανατολή",
        "groups": {
            "morfology": "<em>ανατολίτης </em>→ ανατολ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ίτης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
        },
        "qws": [
            "Житель востока"
        ],
        "transls": [
            "От слова Ανατολή — восток"
        ],
        "translation": "Житель востока",
        "kind": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης от существительных",
        "unicTransl": "Восток",
        "notice": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
    },
    {
        "word": "αραχοβίτης",
        "base": "Αράχοβα",
        "groups": {
            "morfology": "<em>αραχοβίτης </em>→ Αράχοβ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ίτης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
        },
        "qws": [
            "Житель Араховы"
        ],
        "transls": [
            "От слова Αράχοβα — Арахова"
        ],
        "translation": "Житель Араховы",
        "kind": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης от существительных",
        "unicTransl": "Арахова",
        "notice": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
    },
    {
        "word": "μοσχοβίτης",
        "base": "Μόσχα",
        "groups": {
            "morfology": "<em>μοσχοβίτης </em>→ Μόσχ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -οβίτης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
        },
        "qws": [
            "Житель Москвы"
        ],
        "transls": [
            "От слова Μόσχα — Москва"
        ],
        "translation": "Житель Москвы",
        "kind": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης от существительных",
        "unicTransl": "Москва",
        "notice": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
    },
    {
        "word": "πολίτης",
        "base": "πόλη",
        "groups": {
            "morfology": "<em>πολίτης </em>→ πόλ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ίτης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
        },
        "qws": [
            "Гражданин"
        ],
        "transls": [
            "От слова Πόλη — город"
        ],
        "translation": "Гражданин",
        "kind": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης от существительных",
        "unicTransl": "Город",
        "notice": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
    },
    {
        "word": "μοραίτη",
        "base": "Μοριάς",
        "groups": {
            "morfology": "<em>μοραίτη </em>→ Μορ<span style=\"color: #900101\">ιάς</span> +<span style=\"color: #900101\"> -αίτη</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
        },
        "qws": [
            "Житель Пелопоннеса"
        ],
        "transls": [
            "От слова Μοριάς — Пелопоннес"
        ],
        "translation": "Житель Пелопоннеса",
        "kind": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης от существительных",
        "unicTransl": "Пелопоннес",
        "notice": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
    },
    {
        "word": "μανιάτης",
        "base": "Μάνη",
        "groups": {
            "morfology": "<em>μανιάτης </em>→ Μάν<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ιάτης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
        },
        "qws": [
            "Житель Мани"
        ],
        "transls": [
            "От слова Μάνη — Мани"
        ],
        "translation": "Житель Мани",
        "kind": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης от существительных",
        "unicTransl": "Мани",
        "notice": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
    },
    {
        "word": "σπαρτιάτης",
        "base": "Σπάρτη",
        "groups": {
            "morfology": "<em>σπαρτιάτης </em>→ Σπάρτ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ιάτης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
        },
        "qws": [
            "Спартанец"
        ],
        "transls": [
            "От слова Σπάρτη — Спарта"
        ],
        "translation": "Спартанец",
        "kind": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης от существительных",
        "unicTransl": "Спарта",
        "notice": "Этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Также существуют этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός и на -αίος, -ιός."
    },
    {
        "word": "αλεξανδρινός",
        "base": "Αλεξάνδρεια",
        "groups": {
            "morfology": "<em>αλεξανδρινός </em>→ Αλεξάνδρ<span style=\"color: #900101\">εια</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
        },
        "qws": [
            "Александриец"
        ],
        "transls": [
            "От слова Αλεξάνδρεια — Александрия"
        ],
        "translation": "Александриец",
        "kind": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός от существительных",
        "unicTransl": "Александрия",
        "notice": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
    },
    {
        "word": "αμερικανός",
        "base": "Αμερική",
        "groups": {
            "morfology": "<em>αμερικανός </em>→ Αμερικ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ανός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
        },
        "qws": [
            "Американец"
        ],
        "transls": [
            "От слова Αμερική — Америка"
        ],
        "translation": "Американец",
        "kind": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός от существительных",
        "unicTransl": "Америка",
        "notice": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
    },
    {
        "word": "αφρικανός",
        "base": "Αφρική",
        "groups": {
            "morfology": "<em>αφρικανός </em>→ Αφρικ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ανός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
        },
        "qws": [
            "Африканец"
        ],
        "transls": [
            "От слова Αφρική — Африка"
        ],
        "translation": "Африканец",
        "kind": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός от существительных",
        "unicTransl": "Африка",
        "notice": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
    },
    {
        "word": "ουκρανός",
        "base": "Ουκρανία",
        "groups": {
            "morfology": "<em>ουκρανός </em>→ Ουκρ<span style=\"color: #900101\">ανία</span> +<span style=\"color: #900101\"> -ανός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
        },
        "qws": [
            "Украинец"
        ],
        "transls": [
            "От слова Ουκρανία — Украина"
        ],
        "translation": "Украинец",
        "kind": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός от существительных",
        "unicTransl": "Украина",
        "notice": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
    },
    {
        "word": "πατρινός",
        "base": "Πάτρα",
        "groups": {
            "morfology": "<em>πατρινός </em>→ Πάτρ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
        },
        "qws": [
            "Житель Патры"
        ],
        "transls": [
            "От слова Πάτρα — Патра"
        ],
        "translation": "Житель Патры",
        "kind": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός от существительных",
        "unicTransl": "Патра",
        "notice": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
    },
    {
        "word": "πρεβεζάνος",
        "base": "Πρεβέζα",
        "groups": {
            "morfology": "<em>πρεβεζάνος </em>→ Πρεβέζ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -άνος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
        },
        "qws": [
            "Житель Превезы"
        ],
        "transls": [
            "От слова Πρεβέζα — Превеза"
        ],
        "translation": "Житель Превезы",
        "kind": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός от существительных",
        "unicTransl": "Превеза",
        "notice": "Этнические мужские существительные на -ανός, -ιανός, -άνος, -ινός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -αίος, -ιός."
    },
    {
        "word": "πολίτισσα",
        "base": "πόλη",
        "groups": {
            "morfology": "<em>πολίτισσα </em>→ πόλ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ίτισσα</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические женские существительные на -ισσα. Также существуют этнические мужские существительные на -α, -ή."
        },
        "qws": [
            "Гражданка"
        ],
        "transls": [
            "От слова Πόλη — город"
        ],
        "translation": "Гражданка",
        "kind": "Этнические женские существительные на -ισσα от существительных",
        "unicTransl": "Город",
        "notice": "Этнические женские существительные на -ισσα. Также существуют этнические мужские существительные на -α, -ή."
    },
    {
        "word": "ουκρανή",
        "base": "ουκρανός",
        "groups": {
            "morfology": "<em>ουκρανή </em>→ ουκραν<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические женские существительные на -α от парокситонных, -ή от окситонных от существительных. Также существуют этнические мужские существительные на -ισσα."
        },
        "qws": [
            "Украинка"
        ],
        "transls": [
            "От слова Ουκρανός — украинец"
        ],
        "translation": "Украинка",
        "kind": "Этнические женские существительные на -α от парокситонных, -ή от окситонных от существительных",
        "unicTransl": "Украинец",
        "notice": "Этнические женские существительные на -α от парокситонных, -ή от окситонных от существительных. Также существуют этнические мужские существительные на -ισσα."
    },
    {
        "word": "πρεβεζάνα",
        "base": "πρεβεζάνος",
        "groups": {
            "morfology": "<em>πρεβεζάνα </em>→ πρεβεζάν<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -α</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические женские существительные на -α от парокситонных, -ή от окситонных от существительных. Также существуют этнические мужские существительные на -ισσα."
        },
        "qws": [
            "Жительница Превезы"
        ],
        "transls": [
            "От слова Πρεβεζάνος — житель Превезы"
        ],
        "translation": "Жительница Превезы",
        "kind": "Этнические женские существительные на -α от парокситонных, -ή от окситонных от существительных",
        "unicTransl": "Жительница Превезы",
        "notice": "Этнические женские существительные на -α от парокситонных, -ή от окситонных от существительных. Также существуют этнические мужские существительные на -ισσα."
    },
    {
        "word": "συριανή",
        "base": "συριανός",
        "groups": {
            "morfology": "<em>συριανή </em>→ συριαν<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ή</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические женские существительные на -α от парокситонных, -ή от окситонных от существительных. Также существуют этнические мужские существительные на -ισσα."
        },
        "qws": [
            "Жительница Сироса"
        ],
        "transls": [
            "От слова Συριανός — житель Сироса"
        ],
        "translation": "Жительница Сироса",
        "kind": "Этнические женские существительные на -α от парокситонных, -ή от окситонных от существительных",
        "unicTransl": "Жительница Сироса",
        "notice": "Этнические женские существительные на -α от парокситонных, -ή от окситонных от существительных. Также существуют этнические мужские существительные на -ισσα."
    },
    {
        "word": "αθηναίος",
        "base": "Αθήνα",
        "groups": {
            "morfology": "<em>αθηναίος </em>→ Αθήν<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -αίος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -αίος, -ιός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -ανός, -ιανός, -άνος, -ινός."
        },
        "qws": [
            "Житель Афин"
        ],
        "transls": [
            "От слова Αθήνα — Афины"
        ],
        "translation": "Житель Афин",
        "kind": "Этнические мужские существительные на -αίος, -ιός от существительных",
        "unicTransl": "Афины",
        "notice": "Этнические мужские существительные на -αίος, -ιός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -ανός, -ιανός, -άνος, -ινός."
    },
    {
        "word": "ευρωπαίος",
        "base": "Ευρώπη",
        "groups": {
            "morfology": "<em>ευρωπαίος </em>→ Ευρώπ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -αίος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -αίος, -ιός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -ανός, -ιανός, -άνος, -ινός."
        },
        "qws": [
            "Европеец"
        ],
        "transls": [
            "От слова Ευρώπη — Европа"
        ],
        "translation": "Европеец",
        "kind": "Этнические мужские существительные на -αίος, -ιός от существительных",
        "unicTransl": "Европа",
        "notice": "Этнические мужские существительные на -αίος, -ιός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -ανός, -ιανός, -άνος, -ινός."
    },
    {
        "word": "θεσσαλονικιός",
        "base": "Θεσσαλονίκη",
        "groups": {
            "morfology": "<em>θεσσαλονικιός </em>→ Θεσσαλονίκ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ιός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -αίος, -ιός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -ανός, -ιανός, -άνος, -ινός."
        },
        "qws": [
            "Житель Салоников"
        ],
        "transls": [
            "От слова Θεσσαλονίκη — Салоники"
        ],
        "translation": "Житель Салоников",
        "kind": "Этнические мужские существительные на -αίος, -ιός от существительных",
        "unicTransl": "Салоники",
        "notice": "Этнические мужские существительные на -αίος, -ιός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -ανός, -ιανός, -άνος, -ινός."
    },
    {
        "word": "μυτιληνιός",
        "base": "Μυτιλήνη",
        "groups": {
            "morfology": "<em>μυτιληνιός </em>→ Μυτιλήν<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ιός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!",
            "aplication": "<br>Этнические мужские существительные на -αίος, -ιός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -ανός, -ιανός, -άνος, -ινός."
        },
        "qws": [
            "Житель Митилини"
        ],
        "transls": [
            "От слова Μυτιλήνη — Митилини"
        ],
        "translation": "Житель Митилини",
        "kind": "Этнические мужские существительные на -αίος, -ιός от существительных",
        "unicTransl": "Митилини",
        "notice": "Этнические мужские существительные на -αίος, -ιός. Также существуют этнические мужские существительные на -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης и на -ανός, -ιανός, -άνος, -ινός."
    },
    {
        "word": "αναλυτικός",
        "base": "αναλύω",
        "groups": {
            "morfology": "<em>αναλυτικός </em>→ αναλύ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -τικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Аналитический"
        ],
        "transls": [
            "От слова Αναλύω — анализировать"
        ],
        "translation": "Аналитический",
        "kind": "Прилагательные на -τικός от глаголов",
        "unicTransl": "Анализировать",
        "notice": ""
    },
    {
        "word": "διαφημιστικός",
        "base": "διαφημίζω",
        "groups": {
            "morfology": "<em>διαφημιστικός </em>→ διαφημ<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -ιστικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Рекламный"
        ],
        "transls": [
            "От слова Διαφημίζω — рекламировать"
        ],
        "translation": "Рекламный",
        "kind": "Прилагательные на -τικός от глаголов",
        "unicTransl": "Рекламировать",
        "notice": ""
    },
    {
        "word": "δροσιστικός",
        "base": "δροσίζω",
        "groups": {
            "morfology": "<em>δροσιστικός </em>→ δροσ<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -ιστικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Освежающий, прохладительный"
        ],
        "transls": [
            "От слова Δροσίζω — охлаждать, освежать, увлажнять"
        ],
        "translation": "Освежающий, прохладительный",
        "kind": "Прилагательные на -τικός от глаголов",
        "unicTransl": "Охлаждать, освежать, увлажнять",
        "notice": ""
    },
    {
        "word": "εκδοτικός",
        "base": "εκδίδω",
        "groups": {
            "morfology": "<em>εκδοτικός </em>→ εκδ<span style=\"color: #900101\">ίδω</span> +<span style=\"color: #900101\"> -οτικός</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">έκδοσής</span> – сдача < <span style=\"color:#054728\">ἐκδίδωμι</span> – сдаваться < <span style=\"color:#054728\">δίδωμι</span> – давать)."
        },
        "qws": [
            "Издательский"
        ],
        "transls": [
            "От слова Εκδίδω — издавать"
        ],
        "translation": "Издательский",
        "kind": "Прилагательные на -τικός от глаголов",
        "unicTransl": "Издавать",
        "notice": ""
    },
    {
        "word": "εκπληκτικός",
        "base": "εκπλήσσω",
        "groups": {
            "morfology": "<em>εκπληκτικός </em>→ εκπλ<span style=\"color: #900101\">ήσσω</span> +<span style=\"color: #900101\"> -ηκτικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Удивительный"
        ],
        "transls": [
            "От слова Εκπλήσσω — удивлять"
        ],
        "translation": "Удивительный",
        "kind": "Прилагательные на -τικός от глаголов",
        "unicTransl": "Удивлять",
        "notice": ""
    },
    {
        "word": "ενοχλητικός",
        "base": "ενοχλώ",
        "groups": {
            "morfology": "<em>ενοχλητικός </em>→ ενοχλ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ητικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Беспокойный, надоедливый"
        ],
        "transls": [
            "От слова Ενοχλώ — беспокоить, мешать, надоедать"
        ],
        "translation": "Беспокойный, надоедливый",
        "kind": "Прилагательные на -τικός от глаголов",
        "unicTransl": "Беспокоить, мешать, надоедать",
        "notice": ""
    },
    {
        "word": "επενδυτικός",
        "base": "επενδύω",
        "groups": {
            "morfology": "<em>επενδυτικός </em>→ επενδύ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -τικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Инвестиционный"
        ],
        "transls": [
            "От слова Επενδύω — инвестировать"
        ],
        "translation": "Инвестиционный",
        "kind": "Прилагательные на -τικός от глаголов",
        "unicTransl": "Инвестировать",
        "notice": ""
    },
    {
        "word": "παραπονετικός",
        "base": "παραπονιέμαι",
        "groups": {
            "morfology": "<em>παραπονετικός </em>→ παραπον<span style=\"color: #900101\">ιέμαι</span> +<span style=\"color: #900101\"> -ετικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Жалующийся, брюзжащий"
        ],
        "transls": [
            "От слова Παραπονιέμαι — жаловаться, брюзжать"
        ],
        "translation": "Жалующийся, брюзжащий",
        "kind": "Прилагательные на -τικός от глаголов",
        "unicTransl": "Жаловаться, брюзжать",
        "notice": ""
    },
    {
        "word": "περαστικός",
        "base": "περνώ, πέρασα",
        "groups": {
            "morfology": "<em>περαστικός </em>→ πέρασ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -τικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Проходящий, мимолетный, кратковременный"
        ],
        "transls": [
            "От слова Περνώ, πέρασα — проходить, переходить; прошёл, провёл"
        ],
        "translation": "Проходящий, мимолетный, кратковременный",
        "kind": "Прилагательные на -τικός от глаголов",
        "unicTransl": "Проходить, переходить, прошёл, провёл",
        "notice": ""
    },
    {
        "word": "σκανδαλιστικός",
        "base": "σκανδαλίζω",
        "groups": {
            "morfology": "<em>σκανδαλιστικός </em>→ σκανδαλ<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -ιστικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Скандальный"
        ],
        "transls": [
            "От слова Σκανδαλίζω — скандалить"
        ],
        "translation": "Скандальный",
        "kind": "Прилагательные на -τικός от глаголов",
        "unicTransl": "Скандалить",
        "notice": ""
    },
    {
        "word": "θλιβερός",
        "base": "θλίβω",
        "groups": {
            "morfology": "<em>θλιβερός </em>→ θλίβ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ερός</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">θλιβερός</span> < др.греч. <span style=\"color:#054728\">θλίβω</span> – сжимать, давить, тревожить."
        },
        "qws": [
            "Печальный, грустный"
        ],
        "transls": [
            "От слова Θλίβω — сжимать, давить, тревожить, огорчать"
        ],
        "translation": "Печальный, грустный",
        "kind": "Прилагательные на -ερός, -ικός, -τήριος от глаголов",
        "unicTransl": "Сжимть, давить, тревожить, огорчать",
        "notice": ""
    },
    {
        "word": "καρτερικός",
        "base": "καρτερώ",
        "groups": {
            "morfology": "<em>καρτερικός </em>→ καρτερ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">καρτερία</span> – терпение < др.греч. <span style=\"color:#054728\">καρτερῶ</span> –  ждать, терпеть."
        },
        "qws": [
            "Терпеливый, выносливый, упорный"
        ],
        "transls": [
            "От слова Καρτερώ — ждать, терпеть"
        ],
        "translation": "Терпеливый, выносливый, упорный",
        "kind": "Прилагательные на -ερός, -ικός, -τήριος от глаголов",
        "unicTransl": "Ждать, терпеть",
        "notice": ""
    },
    {
        "word": "κινητήριος",
        "base": "κινώ",
        "groups": {
            "morfology": "<em>κινητήριος </em>→ κιν<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ητήριος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Движущий, двигательный"
        ],
        "transls": [
            "От слова Κινώ — двигать"
        ],
        "translation": "Движущий, двигательный",
        "kind": "Прилагательные на -ερός, -ικός, -τήριος от глаголов",
        "unicTransl": "Двигать",
        "notice": ""
    },
    {
        "word": "λαμπερός",
        "base": "λάμπω",
        "groups": {
            "morfology": "<em>λαμπερός </em>→ λάμπ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ερός</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">λαμπερός</span> – сияющий, солнечный < др.греч. <span style=\"color:#054728\">λάμπω</span> –  сиять, быть ярким; быть известным."
        },
        "qws": [
            "Блестящий, сияющий, превосходный"
        ],
        "transls": [
            "От слова Λάμπω — светить, сиять"
        ],
        "translation": "Блестящий, сияющий, превосходный",
        "kind": "Прилагательные на -ερός, -ικός, -τήριος от глаголов",
        "unicTransl": "Светить, сиять",
        "notice": ""
    },
    {
        "word": "μετρικός",
        "base": "μετρώ",
        "groups": {
            "morfology": "<em>μετρικός </em>→ μετρ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">μετρικός</span> < <span style=\"color:#054728\">μέτρον</span> – мера, измерение)"
        },
        "qws": [
            "Измерительный"
        ],
        "transls": [
            "От слова Μετρώ — измерять"
        ],
        "translation": "Измерительный",
        "kind": "Прилагательные на -ερός, -ικός, -τήριος от глаголов",
        "unicTransl": "Измерять",
        "notice": ""
    },
    {
        "word": "πειθαρχικός",
        "base": "πειθαρχώ",
        "groups": {
            "morfology": "<em>πειθαρχικός </em>→ πειθαρχ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Послушный, дисциплинированный, дисциплинарный"
        ],
        "transls": [
            "От слова Πειθαρχώ — слушаться, подчиняться"
        ],
        "translation": "Послушный, дисциплинированный, дисциплинарный",
        "kind": "Прилагательные на -ερός, -ικός, -τήριος от глаголов",
        "unicTransl": "Слушаться, подчиняться",
        "notice": ""
    },
    {
        "word": "σωτήριος",
        "base": "σώζω",
        "groups": {
            "morfology": "<em>σωτήριος </em>→ σώ<span style=\"color: #900101\">ζω</span> +<span style=\"color: #900101\"> -τήριος</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">σωτήριος</span> < <span style=\"color:#054728\">σωτήρ</span> – спаситель, освободитель < <span style=\"color:#054728\">σώζω</span> – спасать, освобождать < <span style=\"color:#054728\">σῶς</span> – целый и невредимый, живой)"
        },
        "qws": [
            "Спасительный, благотворный"
        ],
        "transls": [
            "От слова Σώζω — спасать, освобождать"
        ],
        "translation": "Спасительный, благотворный",
        "kind": "Прилагательные на -ερός, -ικός, -τήριος от глаголов",
        "unicTransl": "Спасать, освобождать",
        "notice": ""
    },
    {
        "word": "ακουστός",
        "base": "ακούω",
        "groups": {
            "morfology": "<em>ακουστός </em>→ ακού<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -στός</span>",
            "etymology": "<br>От др.греч. (<span style=\"color:#054728\">ἀκουστός</span> < <span style=\"color:#054728\">ἀκούω</span> – слушать, слышать)"
        },
        "qws": [
            "Известный, популярный"
        ],
        "transls": [
            "От слова Ακούω — слушать"
        ],
        "translation": "Известный, популярный",
        "kind": "Прилагательные на -τός: (-ητός, -ωτός, -στός, -φτός, -χτός и др.) от глаголов",
        "unicTransl": "Слушать",
        "notice": ""
    },
    {
        "word": "καμαρωτός",
        "base": "καμαρώνω",
        "groups": {
            "morfology": "<em>καμαρωτός </em>→ καμαρ<span style=\"color: #900101\">ώνω</span> +<span style=\"color: #900101\"> -ωτός</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">καμαρώνω</span> – гордиться, важничать < <span style=\"color:#054728\">καμάρι</span> – предмет гордости, надменность) < <span style=\"color:#054728\">καμάριον</span> < <span style=\"color:#054728\">καμάρα</span> – куполообразное сооружение)"
        },
        "qws": [
            "Гордый, сводчатый, выгнутый"
        ],
        "transls": [
            "От слова Καμαρώνω — гордиться, важничать"
        ],
        "translation": "Гордый, сводчатый, выгнутый",
        "kind": "Прилагательные на -τός: (-ητός, -ωτός, -στός, -φτός, -χτός и др.) от глаголов",
        "unicTransl": "Гордиться, важничать",
        "notice": ""
    },
    {
        "word": "ξυπνητός",
        "base": "ξυπνώ",
        "groups": {
            "morfology": "<em>ξυπνητός </em>→ ξυπν<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ητός</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">ξυπνώ</span> – будить, просыпаться) < сред.греч. (<span style=\"color:#054728\">ξυπνῶ</span> < <span style=\"color:#054728\">ἔξυπνος</span> – проснувшийся) < др.греч. <span style=\"color:#054728\">ὕπνος</span> – сон",
        },
        "qws": [
            "Разбуженный, умный, сообразительный"
        ],
        "transls": [
            "От слова Ξυπνώ — просыпаться"
        ],
        "translation": "Разбуженный, умный, сообразительный",
        "kind": "Прилагательные на -τός: (-ητός, -ωτός, -στός, -φτός, -χτός и др.) от глаголов",
        "unicTransl": "Просыпаться",
        "notice": ""
    },
    {
        "word": "πεταχτός",
        "base": "πετώ",
        "groups": {
            "morfology": "<em>πεταχτός </em>→ πετ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -αχτός</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">πεταχτός</span> < койне <span style=\"color:#054728\">πετώ</span>, <span style=\"color:#054728\">πετάω</span> – летать < др.греч. <span style=\"color:#054728\">πέτομαι</span> – летать."
        },
        "qws": [
            "Летящий, стремительный"
        ],
        "transls": [
            "От слова Πετώ — летать"
        ],
        "translation": "Летящий, стремительный",
        "kind": "Прилагательные на -τός: (-ητός, -ωτός, -στός, -φτός, -χτός и др.) от глаголов",
        "unicTransl": "Летать",
        "notice": ""
    },
    {
        "word": "σβηστός",
        "base": "σβήνω",
        "groups": {
            "morfology": "<em>σβηστός </em>→ σβή<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -στός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Потухший, погашенный, зачеркнутый"
        ],
        "transls": [
            "От слова Σβήνω — тушить, зачеркивать"
        ],
        "translation": "Потухший, погашенный, зачеркнутый",
        "kind": "Прилагательные на -τός: (-ητός, -ωτός, -στός, -φτός, -χτός и др.) от глаголов",
        "unicTransl": "Тушить, зачеркивать",
        "notice": ""
    },
    {
        "word": "σκυφτός",
        "base": "σκύβω",
        "groups": {
            "morfology": "<em>σκυφτός </em>→ σκύ<span style=\"color: #900101\">βω</span> +<span style=\"color: #900101\"> -φτός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">σκύβω</span> — нагибаться, склоняться < сред.греч. <span style=\"color:#054728\">σκύπτω</span> < др.греч. (<span style=\"color:#054728\">κύπτω</span> – наклониться < возможно от <span style=\"color:#054728\">κυφός</span> – наклоненный вперёд, горбатый)"
        },
        "qws": [
            "Согнутый, наклонный"
        ],
        "transls": [
            "От слова Σκύβω — нагибаться, склоняться"
        ],
        "translation": "Согнутый, наклонный",
        "kind": "Прилагательные на -τός: (-ητός, -ωτός, -στός, -φτός, -χτός и др.) от глаголов",
        "unicTransl": "Нагибаться, склоняться",
        "notice": ""
    },
    {
        "word": "σφιχτός",
        "base": "σφίγγω",
        "groups": {
            "morfology": "<em>σφιχτός </em>→ σφί<span style=\"color: #900101\">γγω</span> +<span style=\"color: #900101\"> -χτός</span>",
            "etymology": "<br>От сред.греч. <span style=\"color:#054728\">σφικτός</span> – тугой < др.греч. <span style=\"color:#054728\">σφιγκτός</span> – тугой < <span style=\"color:#054728\">σφίγγω</span> – крепко связывать"
        },
        "qws": [
            "Сжатый, тесный, узкий, прижимистый"
        ],
        "transls": [
            "От слова Σφίγγω — сжимать, сдавливать"
        ],
        "translation": "Сжатый, тесный, узкий, прижимистый",
        "kind": "Прилагательные на -τός: (-ητός, -ωτός, -στός, -φτός, -χτός и др.) от глаголов",
        "unicTransl": "Сжимать, сдавливать",
        "notice": ""
    },
    {
        "word": "γεμάτος",
        "base": "γεμίζω",
        "groups": {
            "morfology": "<em>γεμάτος </em>→ γεμ<span style=\"color: #900101\">ίζω</span> +<span style=\"color: #900101\"> -άτος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Полный"
        ],
        "transls": [
            "От слова Γεμίζω — наполнять, заряжать"
        ],
        "translation": "Полный",
        "kind": "Прилагательные на -άτος от существительных и глаголов",
        "unicTransl": "Наполнять, заряжать",
        "notice": ""
    },
    {
        "word": "χορτάτος",
        "base": "χορταίνω",
        "groups": {
            "morfology": "<em>χορτάτος </em>→ χορτ<span style=\"color: #900101\">αίνω</span> +<span style=\"color: #900101\"> -άτος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Наевшийся, сытый"
        ],
        "transls": [
            "От слова Χορταίνω — наедаться"
        ],
        "translation": "Наевшийся, сытый",
        "kind": "Прилагательные на -άτος от существительных и глаголов",
        "unicTransl": "Наедаться",
        "notice": ""
    },
    {
        "word": "αφράτος",
        "base": "αφρός",
        "groups": {
            "morfology": "<em>αφράτος </em>→ αφρ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -άτος</span>",
            "etymology": "<br>От сред.греч. (<span style=\"color:#054728\">ἀφράτος</span> < <span style=\"color:#054728\">ἀφρός</span> – пена)"
        },
        "qws": [
            "Пеноподобный, белый, пухлый"
        ],
        "transls": [
            "От слова Αφρός — пена"
        ],
        "translation": "Пеноподобный, белый, пухлый",
        "kind": "Прилагательные на -άτος от существительных и глаголов",
        "unicTransl": "Пена",
        "notice": ""
    },
    {
        "word": "δροσάτος",
        "base": "δροσία",
        "groups": {
            "morfology": "<em>δροσάτος </em>→ δροσ<span style=\"color: #900101\">ία</span> +<span style=\"color: #900101\"> -άτος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Прохладный, свежий, влажный"
        ],
        "transls": [
            "От слова Δροσία — прохлада, роса"
        ],
        "translation": "Прохладный, свежий, влажный",
        "kind": "Прилагательные на -άτος от существительных и глаголов",
        "unicTransl": "Прохлада, роса",
        "notice": ""
    },
    {
        "word": "μυρωδάτος",
        "base": "μυρωδιά",
        "groups": {
            "morfology": "<em>μυρωδάτος </em>→ μυρωδ<span style=\"color: #900101\">ιά</span> +<span style=\"color: #900101\"> -άτος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Ароматный, благоухающий"
        ],
        "transls": [
            "От слова Μυρωδιά — запах, аромат"
        ],
        "translation": "Ароматный, благоухающий",
        "kind": "Прилагательные на -άτος от существительных и глаголов",
        "unicTransl": "Запах, аромат",
        "notice": ""
    },
    {
        "word": "σπαθάτος",
        "base": "σπαθί",
        "groups": {
            "morfology": "<em>σπαθάτος </em>→ σπαθ<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -άτος</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">σπαθί</span> – сабля < койне <span style=\"color:#054728\">σπαθίον</span> – маленький клинок < др.греч. <span style=\"color:#054728\">σπάθη</span> – широкое лезвие из дерева или металла, клинок."
        },
        "qws": [
            "Саблевидный"
        ],
        "transls": [
            "От слова Σπαθί — сабля"
        ],
        "translation": "Саблевидный",
        "kind": "Прилагательные на -άτος от существительных и глаголов",
        "unicTransl": "Сабля",
        "notice": ""
    },
    {
        "word": "κατοικήσιμος",
        "base": "κατοικώ",
        "groups": {
            "morfology": "<em>κατοικήσιμος </em>→ κατοικ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ήσιμος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Обитаемый"
        ],
        "transls": [
            "От слова Κατοικώ — обитать, жить"
        ],
        "translation": "Обитаемый",
        "kind": "Прилагательные на -σιμος от глаголов",
        "unicTransl": "Обитать, жить",
        "notice": ""
    },
    {
        "word": "φαγώσιμος",
        "base": "τρώγω, έφαγα",
        "groups": {
            "morfology": "<em>φαγώσιμος </em>→ έφαγ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ώσιμος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Съедобный"
        ],
        "transls": [
            "От слова Τρώγω, έφαγα — кушать"
        ],
        "translation": "Съедобный",
        "kind": "Прилагательные на -σιμος от глаголов",
        "unicTransl": "Кушать",
        "notice": ""
    },
    {
        "word": "αφεραιτέος",
        "base": "αφαιρώ",
        "groups": {
            "morfology": "<em>αφεραιτέος </em>→ αφ<span style=\"color: #900101\">αιρώ</span> +<span style=\"color: #900101\"> -εραιτέος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Уменьшаемый"
        ],
        "transls": [
            "От слова Αφαιρώ — отнимать, вычитать, лишать"
        ],
        "translation": "Уменьшаемый",
        "kind": "Прилагательные на -τέος от глаголов",
        "unicTransl": "Отнимать, вычитать, лишать",
        "notice": ""
    },
    {
        "word": "διαιρετέος",
        "base": "διαιρώ",
        "groups": {
            "morfology": "<em>διαιρετέος </em>→ διαιρ<span style=\"color: #900101\">ώ</span> +<span style=\"color: #900101\"> -ετέος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Делимый"
        ],
        "transls": [
            "От слова Διαιρώ — делить"
        ],
        "translation": "Делимый",
        "kind": "Прилагательные на -τέος от глаголов",
        "unicTransl": "Делить",
        "notice": ""
    },
    {
        "word": "μειωτέος",
        "base": "μειώνω",
        "groups": {
            "morfology": "<em>μειωτέος </em>→ μειώ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -τέος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Уменьшенный, ограниченный"
        ],
        "transls": [
            "От слова Μειώνω — уменьшать, ограничивать"
        ],
        "translation": "Уменьшенный, ограниченный",
        "kind": "Прилагательные на -τέος от глаголов",
        "unicTransl": "Уменьшать, ограничивать",
        "notice": ""
    },
    {
        "word": "πληρωτέος",
        "base": "πληρώνω",
        "groups": {
            "morfology": "<em>πληρωτέος </em>→ πληρώ<span style=\"color: #900101\">νω</span> +<span style=\"color: #900101\"> -τέος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Оплачиваемый"
        ],
        "transls": [
            "От слова Πληρώνω — оплачивать"
        ],
        "translation": "Оплачиваемый",
        "kind": "Прилагательные на -τέος от глаголов",
        "unicTransl": "Оплачивать",
        "notice": ""
    },
    {
        "word": "κοκαλιάρης",
        "base": "κόκαλο",
        "groups": {
            "morfology": "<em>κοκαλιάρης </em>→ κόκαλ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ιάρης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Костлявый, костистый"
        ],
        "transls": [
            "От слова Κόκαλο — кость"
        ],
        "translation": "Костлявый, костистый",
        "kind": "Прилагательные на -άρης, -ιάρης от существительных",
        "unicTransl": "Кость",
        "notice": ""
    },
    {
        "word": "πεισματάρης",
        "base": "πείσμα",
        "groups": {
            "morfology": "<em>πεισματάρης </em>→ πείσ<span style=\"color: #900101\">μα</span> +<span style=\"color: #900101\"> -ματάρης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Упрямый, настойчивый"
        ],
        "transls": [
            "От слова Πείσμα — упрямство, настойчивость"
        ],
        "translation": "Упрямый, настойчивый",
        "kind": "Прилагательные на -άρης, -ιάρης от существительных",
        "unicTransl": "Упрямство, настойчивость",
        "notice": ""
    },
    {
        "word": "ασημένιος",
        "base": "ασήμι",
        "groups": {
            "morfology": "<em>ασημένιος </em>→ ασήμ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ένιος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Серебряный"
        ],
        "transls": [
            "От слова Ασήμι — серебро"
        ],
        "translation": "Серебряный",
        "kind": "Прилагательные на -ένιος существительных",
        "unicTransl": "Серебро",
        "notice": ""
    },
    {
        "word": "μαρμαρένιος",
        "base": "μάρμαρο",
        "groups": {
            "morfology": "<em>μαρμαρένιος </em>→ μάρμαρ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ένιος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Мраморный"
        ],
        "transls": [
            "От слова Μάρμαρο — мрамор"
        ],
        "translation": "Мраморный",
        "kind": "Прилагательные на -ένιος существительных",
        "unicTransl": "Мрамор",
        "notice": ""
    },
    {
        "word": "σανιδένιος",
        "base": "σανίδι",
        "groups": {
            "morfology": "<em>σανιδένιος </em>→ σανίδ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ένιος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Дощатый"
        ],
        "transls": [
            "От слова Σανίδι — доска"
        ],
        "translation": "Дощатый",
        "kind": "Прилагательные на -ένιος существительных",
        "unicTransl": "Доска",
        "notice": ""
    },
    {
        "word": "βρόχινος",
        "base": "βροχή",
        "groups": {
            "morfology": "<em>βρόχινος </em>→ βροχ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ινος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Дождевой"
        ],
        "transls": [
            "От слова Βροχή — дождь"
        ],
        "translation": "Дождевой",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Дождь",
        "notice": ""
    },
    {
        "word": "γυάλινος",
        "base": "γυαλί",
        "groups": {
            "morfology": "<em>γυάλινος </em>→ γυαλ<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -ινος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Стеклянный"
        ],
        "transls": [
            "От слова Γυαλί — стекло"
        ],
        "translation": "Стеклянный",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Стекло",
        "notice": ""
    },
    {
        "word": "καλοκαιρινός",
        "base": "καλοκαίρι",
        "groups": {
            "morfology": "<em>καλοκαιρινός </em>→ καλοκαίρ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Летний"
        ],
        "transls": [
            "От слова Καλοκαίρι — лето"
        ],
        "translation": "Летний",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Лето",
        "notice": ""
    },
    {
        "word": "λαστιχένιος",
        "base": "λάστιχο",
        "groups": {
            "morfology": "<em>λαστιχένιος </em>→ λάστιχ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ένιος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Резиновый"
        ],
        "transls": [
            "От слова Λάστιχο — резина"
        ],
        "translation": "Резиновый",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Резина",
        "notice": ""
    },
    {
        "word": "λινός",
        "base": "λινάρι",
        "groups": {
            "morfology": "<em>λινός </em>→ λ<span style=\"color: #900101\">ινάρι</span> +<span style=\"color: #900101\"> -ινος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Льняной"
        ],
        "transls": [
            "От слова Λινάρι — лён"
        ],
        "translation": "Льняной",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Лён",
        "notice": ""
    },
    {
        "word": "μάλλινος",
        "base": "μαλλί",
        "groups": {
            "morfology": "<em>μάλλινος </em>→ μαλλ<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -ινος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Шерстяной"
        ],
        "transls": [
            "От слова Μαλλί — волос, шерсть"
        ],
        "translation": "Шерстяной",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Волос, шерсть",
        "notice": ""
    },
    {
        "word": "μπρούντζινος",
        "base": "μπρούντζος",
        "groups": {
            "morfology": "<em>μπρούντζινος </em>→ μπρούντζ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ινος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Бронзовый"
        ],
        "transls": [
            "От слова Μπρούντζος — бронза"
        ],
        "translation": "Бронзовый",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Бронза",
        "notice": ""
    },
    {
        "word": "ξύλινος",
        "base": "ξύλο",
        "groups": {
            "morfology": "<em>ξύλινος </em>→ ξύλ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ινος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Деревянный"
        ],
        "transls": [
            "От слова Ξύλο — дерево-материал"
        ],
        "translation": "Деревянный",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Дерево-материал",
        "notice": ""
    },
    {
        "word": "πέτρινος",
        "base": "πέτρα",
        "groups": {
            "morfology": "<em>πέτρινος </em>→ πέτρ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ινος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Каменный"
        ],
        "transls": [
            "От слова Πέτρα — камень"
        ],
        "translation": "Каменный",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Камень",
        "notice": ""
    },
    {
        "word": "πήλινος",
        "base": "πηλός",
        "groups": {
            "morfology": "<em>πήλινος </em>→ πηλ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ινος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Глиняный"
        ],
        "transls": [
            "От слова Πηλός — глина"
        ],
        "translation": "Глиняный",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Глина",
        "notice": ""
    },
    {
        "word": "πορσελάνινος",
        "base": "πορσελάνη",
        "groups": {
            "morfology": "<em>πορσελάνινος </em>→ πορσελάν<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ινος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Фарфоровый"
        ],
        "transls": [
            "От слова Πορσελάνη — фарфор"
        ],
        "translation": "Фарфоровый",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Фарфор",
        "notice": ""
    },
    {
        "word": "φθινοπωρινός",
        "base": "φθινόπωρο",
        "groups": {
            "morfology": "<em>φθινοπωρινός </em>→ φθινόπωρ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Осенний"
        ],
        "transls": [
            "От слова Φθινόπωρο — осень"
        ],
        "translation": "Осенний",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Осень",
        "notice": ""
    },
    {
        "word": "χάρτινος",
        "base": "χαρτί",
        "groups": {
            "morfology": "<em>χάρτινος </em>→ χαρτ<span style=\"color: #900101\">ί</span> +<span style=\"color: #900101\"> -ινος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Бумажный"
        ],
        "transls": [
            "От слова Χαρτί — бумага"
        ],
        "translation": "Бумажный",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Бумага",
        "notice": ""
    },
    {
        "word": "χάρτινος",
        "base": "χαρτόνι",
        "groups": {
            "morfology": "<em>χάρτινος </em>→ χαρτ<span style=\"color: #900101\">όνι</span> +<span style=\"color: #900101\"> -ινος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Картонный"
        ],
        "transls": [
            "От слова Χαρτόνι — картон"
        ],
        "translation": "Картонный",
        "kind": "Прилагательные на -ινος от существительных",
        "unicTransl": "Картон",
        "notice": ""
    },
    {
        "word": "άτακτος",
        "base": "αταξία",
        "groups": {
            "morfology": "<em>άτακτος </em>→ ατ<span style=\"color: #900101\">αξία</span> +<span style=\"color: #900101\"> -ακτος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Шаловливый"
        ],
        "transls": [
            "От слова Αταξία — шалость"
        ],
        "translation": "Шаловливый",
        "kind": "Прилагательные на -ος от существительных",
        "unicTransl": "Шалость",
        "notice": ""
    },
    {
        "word": "άτολμος",
        "base": "ατολμία",
        "groups": {
            "morfology": "<em>άτολμος </em>→ ατολμ<span style=\"color: #900101\">ία</span> +<span style=\"color: #900101\"> -ος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Робкий"
        ],
        "transls": [
            "От слова Ατολμία — робость"
        ],
        "translation": "Робкий",
        "kind": "Прилагательные на -ος от существительных",
        "unicTransl": "Робость",
        "notice": ""
    },
    {
        "word": "βιομηχανικός",
        "base": "βιομηχανία",
        "groups": {
            "morfology": "<em>βιομηχανικός </em>→ βιομηχαν<span style=\"color: #900101\">ία</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Промышленный"
        ],
        "transls": [
            "От слова Βιομηχανία — промышленность"
        ],
        "translation": "Промышленный",
        "kind": "Прилагательные на -ος от существительных",
        "unicTransl": "Промышленность",
        "notice": ""
    },
    {
        "word": "γενναιόδωρος",
        "base": "γενναιοδωρία",
        "groups": {
            "morfology": "<em>γενναιόδωρος </em>→ γενναιοδωρ<span style=\"color: #900101\">ία</span> +<span style=\"color: #900101\"> -ος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Щедрый"
        ],
        "transls": [
            "От слова Γενναιοδωρία — щедрость"
        ],
        "translation": "Щедрый",
        "kind": "Прилагательные на -ος от существительных",
        "unicTransl": "Щедрость",
        "notice": ""
    },
    {
        "word": "δύσπιστος",
        "base": "δυσπιστία",
        "groups": {
            "morfology": "<em>δύσπιστος </em>→ δυσπιστ<span style=\"color: #900101\">ία</span> +<span style=\"color: #900101\"> -ος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Недоверчивый"
        ],
        "transls": [
            "От слова Δυσπιστία — недоверие"
        ],
        "translation": "Недоверчивый",
        "kind": "Прилагательные на -ος от существительных",
        "unicTransl": "Недоверие",
        "notice": ""
    },
    {
        "word": "υπεύθυνος",
        "base": "ευθύνη",
        "groups": {
            "morfology": "<em>υπεύθυνος </em>→ ευθύν<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Ответственный"
        ],
        "transls": [
            "От слова Ευθύνη — ответственность"
        ],
        "translation": "Ответственный",
        "kind": "Прилагательные на -ος от существительных",
        "unicTransl": "Ответственность",
        "notice": ""
    },
    {
        "word": "κληρονόμος",
        "base": "κληρονομία",
        "groups": {
            "morfology": "<em>κληρονόμος </em>→ κληρονομ<span style=\"color: #900101\">ία</span> +<span style=\"color: #900101\"> -ος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Наследство"
        ],
        "transls": [
            "От слова Κληρονομία — наследник"
        ],
        "translation": "Наследство",
        "kind": "Прилагательные на -ος от существительных",
        "unicTransl": "Наследник",
        "notice": ""
    },
    {
        "word": "κρύος",
        "base": "κρύο",
        "groups": {
            "morfology": "<em>κρύος </em>→ κρύ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Холодный"
        ],
        "transls": [
            "От слова Κρύο — холод"
        ],
        "translation": "Холодный",
        "kind": "Прилагательные на -ος от существительных",
        "unicTransl": "Холод",
        "notice": ""
    },
    {
        "word": "μουσικός",
        "base": "μουσική",
        "groups": {
            "morfology": "<em>μουσικός </em>→ μουσικ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Музыкант"
        ],
        "transls": [
            "От слова Μουσική — музыка"
        ],
        "translation": "Музыкант",
        "kind": "Прилагательные на -ος от существительных",
        "unicTransl": "Музыка",
        "notice": ""
    },
    {
        "word": "οικονομικός",
        "base": "οικονομία",
        "groups": {
            "morfology": "<em>οικονομικός </em>→ οικονομ<span style=\"color: #900101\">ία</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Экономический"
        ],
        "transls": [
            "От слова Οικονομία — экономика"
        ],
        "translation": "Экономический",
        "kind": "Прилагательные на -ος от существительных",
        "unicTransl": "Экономика",
        "notice": ""
    },
    {
        "word": "σίγουρος",
        "base": "σιγουρία",
        "groups": {
            "morfology": "<em>σίγουρος </em>→ σιγουρ<span style=\"color: #900101\">ία</span> +<span style=\"color: #900101\"> -ος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Уверенный"
        ],
        "transls": [
            "От слова Σιγουρία — уверенность"
        ],
        "translation": "Уверенный",
        "kind": "Прилагательные на -ος от существительных",
        "unicTransl": "Уверенность",
        "notice": ""
    },
    {
        "word": "βυσσινής",
        "base": "βύσσινο",
        "groups": {
            "morfology": "<em>βυσσινής </em>→ βύσσιν<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Вишнёвый цвет"
        ],
        "transls": [
            "От слова Βύσσινο — вишня-плод"
        ],
        "translation": "Вишнёвый цвет",
        "kind": "Прилагательные на -ής, -ύς от существительных",
        "unicTransl": "Вишня-плод",
        "notice": ""
    },
    {
        "word": "θαλασσινής",
        "base": "θάλασσα",
        "groups": {
            "morfology": "<em>θαλασσινής </em>→ θάλασσ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ινής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Цвета морской волны"
        ],
        "transls": [
            "От слова Θάλασσα — море"
        ],
        "translation": "Цвета морской волны",
        "kind": "Прилагательные на -ής, -ύς от существительных",
        "unicTransl": "Море",
        "notice": ""
    },
    {
        "word": "τριανταφυλλής",
        "base": "τριαντάφυλλο",
        "groups": {
            "morfology": "<em>τριανταφυλλής </em>→ τριαντάφυλλ<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Розовый цвет"
        ],
        "transls": [
            "От слова Τριαντάφυλλο — роза"
        ],
        "translation": "Розовый цвет",
        "kind": "Прилагательные на -ής, -ύς от существительных",
        "unicTransl": "Роза",
        "notice": ""
    },
    {
        "word": "βαθύς",
        "base": "βαθός",
        "groups": {
            "morfology": "<em>βαθύς </em>→ βαθ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Глубокий, темный цвет"
        ],
        "transls": [
            "От слова Βαθός — глубина"
        ],
        "translation": "Глубокий, темный цвет",
        "kind": "Прилагательные на -ής, -ύς от существительных",
        "unicTransl": "Глубина",
        "notice": ""
    },
    {
        "word": "παχύς",
        "base": "πάχος",
        "groups": {
            "morfology": "<em>παχύς </em>→ πάχ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Толстый, жирный"
        ],
        "transls": [
            "От слова Πάχος — сало, жир, полнота, толщина"
        ],
        "translation": "Толстый, жирный",
        "kind": "Прилагательные на -ής, -ύς от существительных",
        "unicTransl": "Сало, жир, полнота, толщина",
        "notice": ""
    },
    {
        "word": "φαρδύς",
        "base": "φάρδος",
        "groups": {
            "morfology": "<em>φαρδύς </em>→ φάρδ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ής</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Широкий, просторный"
        ],
        "transls": [
            "От слова Φάρδος — ширина"
        ],
        "translation": "Широкий, просторный",
        "kind": "Прилагательные на -ής, -ύς от существительных",
        "unicTransl": "Ширина",
        "notice": ""
    },
    {
        "word": "νόμιμος",
        "base": "νόμος",
        "groups": {
            "morfology": "<em>νόμιμος </em>→ νόμ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ιμος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Законный"
        ],
        "transls": [
            "От слова Νόμος — закон"
        ],
        "translation": "Законный",
        "kind": "Прилагательные на -ιμος от существительных",
        "unicTransl": "Закон",
        "notice": ""
    },
    {
        "word": "βροχερός",
        "base": "βροχή",
        "groups": {
            "morfology": "<em>βροχερός </em>→ βροχ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ερός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Дождливый"
        ],
        "transls": [
            "От слова Βροχή — дождь"
        ],
        "translation": "Дождливый",
        "kind": "Прилагательные на -ερός от глаголов",
        "unicTransl": "Дождь",
        "notice": ""
    },
    {
        "word": "δροσερός",
        "base": "δροσιά",
        "groups": {
            "morfology": "<em>δροσερός </em>→ δροσ<span style=\"color: #900101\">ιά</span> +<span style=\"color: #900101\"> -ερός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Прохладный, свежий, влажный"
        ],
        "transls": [
            "От слова Δροσιά — прохлада, роса"
        ],
        "translation": "Прохладный, свежий, влажный",
        "kind": "Прилагательные на -ερός от глаголов",
        "unicTransl": "Прохлада, роса",
        "notice": ""
    },
    {
        "word": "φαρμακερός",
        "base": "φαρμάκι",
        "groups": {
            "morfology": "<em>φαρμακερός </em>→ φαρμάκ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ερός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Ядовитый, едкий"
        ],
        "transls": [
            "От слова Φαρμάκι — яд, отрава"
        ],
        "translation": "Ядовитый, едкий",
        "kind": "Прилагательные на -ερός от глаголов",
        "unicTransl": "Яд, отрава",
        "notice": ""
    },
    {
        "word": "φλογερός",
        "base": "φλόγα",
        "groups": {
            "morfology": "<em>φλογερός </em>→ φλόγ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ερός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Горящий, пылающий, жгучий"
        ],
        "transls": [
            "От слова Φλόγα — пламя"
        ],
        "translation": "Горящий, пылающий, жгучий",
        "kind": "Прилагательные на -ερός от глаголов",
        "unicTransl": "Пламя",
        "notice": ""
    },
    {
        "word": "λιπαρός",
        "base": "λίπος",
        "groups": {
            "morfology": "<em>λιπαρός </em>→ λίπ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -αρός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Жирный"
        ],
        "transls": [
            "От слова Λίπος — жир"
        ],
        "translation": "Жирный",
        "kind": "Прилагательные на -αρός от глаголов",
        "unicTransl": "Жир",
        "notice": ""
    },
    {
        "word": "αγκαθωτός",
        "base": "αγκάθι",
        "groups": {
            "morfology": "<em>αγκαθωτός </em>→ αγκάθ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ωτός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Колючий"
        ],
        "transls": [
            "От слова Αγκάθι — колючка, заноза, шип"
        ],
        "translation": "Колючий",
        "kind": "Прилагательные на -ωτός от глаголов",
        "unicTransl": "Колючка, заноза, шип",
        "notice": ""
    },
    {
        "word": "μεταξωτός",
        "base": "μετάξι",
        "groups": {
            "morfology": "<em>μεταξωτός </em>→ μετάξ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ωτός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Шёлковый"
        ],
        "transls": [
            "От слова Μετάξι — шёлк"
        ],
        "translation": "Шёлковый",
        "kind": "Прилагательные на -ωτός от глаголов",
        "unicTransl": "Шёлк",
        "notice": ""
    },
    {
        "word": "φουντωτός",
        "base": "φούντωμα",
        "groups": {
            "morfology": "<em>φουντωτός </em>→ φούντ<span style=\"color: #900101\">ωμα</span> +<span style=\"color: #900101\"> -ωτός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Густой, пышный"
        ],
        "transls": [
            "От слова Φούντωμα — густота, пышность"
        ],
        "translation": "Густой, пышный",
        "kind": "Прилагательные на -ωτός от глаголов",
        "unicTransl": "Густота, пышность",
        "notice": ""
    },
    {
        "word": "ύποπτος",
        "base": "υποψία",
        "groups": {
            "morfology": "<em>ύποπτος </em>→ υπο<span style=\"color: #900101\">ψία</span> +<span style=\"color: #900101\"> -πτός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Подозрительный"
        ],
        "transls": [
            "От слова Υποψία — подозрение"
        ],
        "translation": "Подозрительный",
        "kind": "Прилагательные на -τός от глаголов",
        "unicTransl": "Подозрение",
        "notice": ""
    },
    {
        "word": "εθνικός",
        "base": "έθνος",
        "groups": {
            "morfology": "<em>εθνικός </em>→ έθν<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Национальный"
        ],
        "transls": [
            "От слова Έθνος — народ"
        ],
        "translation": "Национальный",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Народ",
        "notice": ""
    },
    {
        "word": "ελληνικός",
        "base": "έλληνας",
        "groups": {
            "morfology": "<em>ελληνικός </em>→ έλλην<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Греческий"
        ],
        "transls": [
            "От слова Έλληνας — грек"
        ],
        "translation": "Греческий",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Грек",
        "notice": ""
    },
    {
        "word": "ηλιακός",
        "base": "ήλιος",
        "groups": {
            "morfology": "<em>ηλιακός </em>→ ήλι<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ακός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Солнечный"
        ],
        "transls": [
            "От слова Ήλιος — солнце"
        ],
        "translation": "Солнечный",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Солнце",
        "notice": ""
    },
    {
        "word": "αιρετικός",
        "base": "αίρεση",
        "groups": {
            "morfology": "<em>αιρετικός </em>→ αίρε<span style=\"color: #900101\">ση</span> +<span style=\"color: #900101\"> -τικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Еретичный, еретик"
        ],
        "transls": [
            "От слова Αίρεση — ересь"
        ],
        "translation": "Еретичный, еретик",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Ересь",
        "notice": ""
    },
    {
        "word": "αδερφικός",
        "base": "αδερφός",
        "groups": {
            "morfology": "<em>αδερφικός </em>→ αδερφ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Братский"
        ],
        "transls": [
            "От слова Αδερφός — брат"
        ],
        "translation": "Братский",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Брат",
        "notice": ""
    },
    {
        "word": "ανατολικός",
        "base": "ανατολή",
        "groups": {
            "morfology": "<em>ανατολικός </em>→ ανατολ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Восточный"
        ],
        "transls": [
            "От слова Ανατολή — восток"
        ],
        "translation": "Восточный",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Восток",
        "notice": ""
    },
    {
        "word": "αστυνομικός",
        "base": "αστυνομία",
        "groups": {
            "morfology": "<em>αστυνομικός </em>→ αστυνομ<span style=\"color: #900101\">ία</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От совр.греч. (<span style=\"color:#054728\">αστυνομία</span> – полиция < <span style=\"color:#054728\">αστυνόμος</span> – полицейский работник) < др.греч. (<span style=\"color:#054728\">ἀστυνόμος</span> – охранящий безопасность города < <span style=\"color:#054728\">ἄστυ</span> – город, столица + <span style=\"color:#054728\">νόμος</span> – закон)"
        },
        "qws": [
            "Полицейский"
        ],
        "transls": [
            "От слова Αστυνομία — полиция"
        ],
        "translation": "Полицейский",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Полиция",
        "notice": ""
    },
    {
        "word": "γαλλικός",
        "base": "Γαλλία",
        "groups": {
            "morfology": "<em>γαλλικός </em>→ Γαλλ<span style=\"color: #900101\">ία</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">Γαλλία</span> – Франция < лат. <span style=\"color:#054728\">Gallia</span>."
        },
        "qws": [
            "Французский"
        ],
        "transls": [
            "От слова Γαλλία — Франция"
        ],
        "translation": "Французский",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Франция",
        "notice": ""
    },
    {
        "word": "γέρικος",
        "base": "γέρος",
        "groups": {
            "morfology": "<em>γέρικος </em>→ γέρ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">γέρος</span> – старик < сред.греч. <span style=\"color:#054728\">γέρος</span> < др.греч. <span style=\"color:#054728\">γέρων</span> – старик, старейшина."
        },
        "qws": [
            "Старческий"
        ],
        "transls": [
            "От слова Γέρος — старик"
        ],
        "translation": "Старческий",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Старик",
        "notice": ""
    },
    {
        "word": "διαστημικός",
        "base": "διάστημα",
        "groups": {
            "morfology": "<em>διαστημικός </em>→ διάστημ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">διάστημα</span> – космос, пространство < др.греч. (<span style=\"color:#054728\">διάστημα</span> – расстояние, интервал < <span style=\"color:#054728\">δια-</span> (префикс со смыслами: через, в разных направлениях, между и др.) + <span style=\"color:#054728\">ἵστημι</span> – ставить, стоять, устанавливать)"
        },
        "qws": [
            "Космический"
        ],
        "transls": [
            "От слова Διάστημα — космос, пространство"
        ],
        "translation": "Космический",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Космос, пространство",
        "notice": ""
    },
    {
        "word": "δυτικός",
        "base": "δύση",
        "groups": {
            "morfology": "<em>δυτικός </em>→ δύ<span style=\"color: #900101\">ση</span> +<span style=\"color: #900101\"> -τικός</span>",
            "etymology": "<br>От койне <span style=\"color:#054728\">δῠτικός</span> < др.греч. <span style=\"color:#054728\">δύω</span>, <span style=\"color:#054728\">δύνω</span> – погружаться, входить."
        },
        "qws": [
            "Западный"
        ],
        "transls": [
            "От слова Δύση — запад"
        ],
        "translation": "Западный",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Запад",
        "notice": ""
    },
    {
        "word": "εγωιστικός",
        "base": "εγωιστής",
        "groups": {
            "morfology": "<em>εγωιστικός </em>→ εγωιστ<span style=\"color: #900101\">ής</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">εγωιστής</span> – эгоист < франц. <span style=\"color:#054728\">égoïste</span> < др.греч. <span style=\"color:#054728\">ἐγώ</span> – я."
        },
        "qws": [
            "Эгоистичный"
        ],
        "transls": [
            "От слова Εγωιστής — эгоист"
        ],
        "translation": "Эгоистичный",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Эгоист",
        "notice": ""
    },
    {
        "word": "επιστημονικός",
        "base": "επιστήμονας",
        "groups": {
            "morfology": "<em>επιστημονικός </em>→ επιστήμον<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">επιστήμονας</span> – учёный < др.греч. (<span style=\"color:#054728\">ἐπιστήμη</span> – наука, знание < <span style=\"color:#054728\">ἐπίσταμαι</span> – хорошо знать, быть уверенным < <span style=\"color:#054728\">ἐπι-</span> (обозначает следование, сопровождение; положение: на) + <span style=\"color:#054728\">ἵστημι</span> – ставить, стоять, устанавливать)"
        },
        "qws": [
            "Научный"
        ],
        "transls": [
            "От слова Επιστήμονας — учёный"
        ],
        "translation": "Научный",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Учёный",
        "notice": ""
    },
    {
        "word": "εχθρικός",
        "base": "εχθρός",
        "groups": {
            "morfology": "<em>εχθρικός </em>→ εχθρ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От койне <span style=\"color:#054728\">ἐχθρικός</span> < др.греч. <span style=\"color:#054728\">ἐχθρός</span> – вражеский, ненавистный."
        },
        "qws": [
            "Вражеский"
        ],
        "transls": [
            "От слова Εχθρός — враг"
        ],
        "translation": "Вражеский",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Враг",
        "notice": ""
    },
    {
        "word": "ζωγραφικός",
        "base": "ζωγράφος",
        "groups": {
            "morfology": "<em>ζωγραφικός </em>→ ζωγράφ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ζωγραφική</span> – живопись < др.греч. (<span style=\"color:#054728\">ζωγρᾰφικός</span> < др.греч. <span style=\"color:#054728\">ζωγράφος</span> – художник < <span style=\"color:#054728\">ζωός</span> (живой) или <span style=\"color:#054728\">ζωή</span> (жизнь) + <span style=\"color:#054728\">γράφος</span> – писатель < <span style=\"color:#054728\">γράφω</span> – писать)",
        },
        "qws": [
            "Изобразительный, графический"
        ],
        "transls": [
            "От слова Ζωγράφος — художник"
        ],
        "translation": "Изобразительный, графический",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Художник",
        "notice": ""
    },
    {
        "word": "ηλεκτρικός",
        "base": "ηλεκτρισμός",
        "groups": {
            "morfology": "<em>ηλεκτρικός </em>→ ηλεκτρ<span style=\"color: #900101\">ισμός</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Электрический"
        ],
        "transls": [
            "От слова Ηλεκτρισμός — электричество"
        ],
        "translation": "Электрический",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Электричество",
        "notice": ""
    },
    {
        "word": "κεραμικός",
        "base": "κεραμική",
        "groups": {
            "morfology": "<em>κεραμικός </em>→ κεραμ<span style=\"color: #900101\">ική</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Керамический"
        ],
        "transls": [
            "От слова Κεραμική — керамика"
        ],
        "translation": "Керамический",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Керамика",
        "notice": ""
    },
    {
        "word": "κυκλικός",
        "base": "κύκλος",
        "groups": {
            "morfology": "<em>κυκλικός </em>→ κύκλ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Круглый"
        ],
        "transls": [
            "От слова Κύκλος — круг"
        ],
        "translation": "Круглый",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Круг",
        "notice": ""
    },
    {
        "word": "οικογενειακός",
        "base": "οικογένεια",
        "groups": {
            "morfology": "<em>οικογενειακός </em>→ οικογένει<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ακός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Семейный"
        ],
        "transls": [
            "От слова Οικογένεια — семья"
        ],
        "translation": "Семейный",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Семья",
        "notice": ""
    },
    {
        "word": "πλαστικός",
        "base": "πλαστικό",
        "groups": {
            "morfology": "<em>πλαστικός </em>→ πλαστ<span style=\"color: #900101\">ικό</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Пластмассовый"
        ],
        "transls": [
            "От слова Πλαστικό — пластмасса"
        ],
        "translation": "Пластмассовый",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Пластмасса",
        "notice": ""
    },
    {
        "word": "ποιητικός",
        "base": "ποιητής",
        "groups": {
            "morfology": "<em>ποιητικός </em>→ ποιητ<span style=\"color: #900101\">ής</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От др.греч. <span style=\"color:#054728\">ποιητής</span> < <span style=\"color:#054728\">ποιέω</span>, <span style=\"color:#054728\">ποιῶ</span> – делать, творить."
        },
        "qws": [
            "Поэтический"
        ],
        "transls": [
            "От слова Ποιητής — поэт"
        ],
        "translation": "Поэтический",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Поэт",
        "notice": ""
    },
    {
        "word": "προαστιακός",
        "base": "προάστιο",
        "groups": {
            "morfology": "<em>προαστιακός </em>→ προάστι<span style=\"color: #900101\">ο</span> +<span style=\"color: #900101\"> -ακός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Пригородный"
        ],
        "transls": [
            "От слова Προάστιο — пригород"
        ],
        "translation": "Пригородный",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Пригород",
        "notice": ""
    },
    {
        "word": "προδοτικός",
        "base": "προδότης",
        "groups": {
            "morfology": "<em>προδοτικός </em>→ προδότ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Предательский"
        ],
        "transls": [
            "От слова Προδότης — предатель"
        ],
        "translation": "Предательский",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Предатель",
        "notice": ""
    },
    {
        "word": "σεληνιακός",
        "base": "σελήνη",
        "groups": {
            "morfology": "<em>σεληνιακός </em>→ σελήν<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ιακός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Лунный"
        ],
        "transls": [
            "От слова Σελήνη — луна"
        ],
        "translation": "Лунный",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Луна",
        "notice": ""
    },
    {
        "word": "σημμετοχικός",
        "base": "σημμέτοχος",
        "groups": {
            "morfology": "<em>σημμετοχικός </em>→ σημμέτοχ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Участвующий"
        ],
        "transls": [
            "От слова Σημμέτοχος — участник"
        ],
        "translation": "Участвующий",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Участник",
        "notice": ""
    },
    {
        "word": "τουριστικός",
        "base": "τουρίστας",
        "groups": {
            "morfology": "<em>τουριστικός </em>→ τουρίστ<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">τουρίστας</span> – турист < итал. <span style=\"color:#054728\">turista</span> – турист < франц. <span style=\"color:#054728\">touriste</span> – турист < англ. (<span style=\"color:#054728\">tourist</span> – турист < <span style=\"color:#054728\">tour</span> – тур) < лат. <span style=\"color:#054728\">tornare</span> – возвращаться < др.греч. <span style=\"color:#054728\">τόρνος</span> – то, что крутится; токарный станок; циркуль."
        },
        "qws": [
            "Туристический"
        ],
        "transls": [
            "От слова Τουρίστας — турист"
        ],
        "translation": "Туристический",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Турист",
        "notice": ""
    },
    {
        "word": "φευτικός",
        "base": "φεύτης",
        "groups": {
            "morfology": "<em>φευτικός </em>→ φεύτ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -ικός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Ложный, фальшивый"
        ],
        "transls": [
            "От слова Φεύτης — лжец"
        ],
        "translation": "Ложный, фальшивый",
        "kind": "Прилагательные на -ακός, -ιακός, -ικός, -ικος от существительных",
        "unicTransl": "Лжец",
        "notice": ""
    },
    {
        "word": "ανοιξιάτικος",
        "base": "άνοιξη",
        "groups": {
            "morfology": "<em>ανοιξιάτικος </em>→ άνοιξ<span style=\"color: #900101\">η</span> +<span style=\"color: #900101\"> -ιάτικος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Весенний"
        ],
        "transls": [
            "От слова Άνοιξη — весна"
        ],
        "translation": "Весенний",
        "kind": "Прилагательные на -άτικος, -ιάτικος от существительных",
        "unicTransl": "Весна",
        "notice": ""
    },
    {
        "word": "κυριακάτικος",
        "base": "κυριακή",
        "groups": {
            "morfology": "<em>κυριακάτικος </em>→ κυριακ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -άτικος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Воскресный"
        ],
        "transls": [
            "От слова Κυριακή — воскресенье"
        ],
        "translation": "Воскресный",
        "kind": "Прилагательные на -άτικος, -ιάτικος от существительных",
        "unicTransl": "Воскресенье",
        "notice": ""
    },
    {
        "word": "χειμωνιάτικος",
        "base": "χειμώνας",
        "groups": {
            "morfology": "<em>χειμωνιάτικος </em>→ χειμών<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ιάτικος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Зимний"
        ],
        "transls": [
            "От слова Χειμώνας — зима"
        ],
        "translation": "Зимний",
        "kind": "Прилагательные на -άτικος, -ιάτικος от существительных",
        "unicTransl": "Зима",
        "notice": ""
    },
    {
        "word": "αγορίστικος",
        "base": "αγόρι",
        "groups": {
            "morfology": "<em>αγορίστικος </em>→ αγόρ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ίστικος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Предмет для мальчиков"
        ],
        "transls": [
            "От слова Αγόρι — мальчик"
        ],
        "translation": "Предмет для мальчиков",
        "kind": "Прилагательные на -ίστικος существительных",
        "unicTransl": "Мальчик",
        "notice": ""
    },
    {
        "word": "κοριτσίστικος",
        "base": "κορίτσι",
        "groups": {
            "morfology": "<em>κοριτσίστικος </em>→ κορίτσ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ίστικος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Предмет для девочек"
        ],
        "transls": [
            "От слова Κορίτσι — девочка"
        ],
        "translation": "Предмет для девочек",
        "kind": "Прилагательные на -ίστικος существительных",
        "unicTransl": "Девочка",
        "notice": ""
    },
    {
        "word": "κουκλίστικος",
        "base": "κούκλα",
        "groups": {
            "morfology": "<em>κουκλίστικος </em>→ κούκλ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ίστικος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Кукольный"
        ],
        "transls": [
            "От слова Κούκλα — кукла"
        ],
        "translation": "Кукольный",
        "kind": "Прилагательные на -ίστικος существительных",
        "unicTransl": "Кукла",
        "notice": ""
    },
    {
        "word": "αιώνιος",
        "base": "αιώνας",
        "groups": {
            "morfology": "<em>αιώνιος </em>→ αιών<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ιος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Вечный"
        ],
        "transls": [
            "От слова Αιώνας — век"
        ],
        "translation": "Вечный",
        "kind": "Прилагательные на -ιος от существительных",
        "unicTransl": "Век",
        "notice": ""
    },
    {
        "word": "ουράνιος",
        "base": "ουρανός",
        "groups": {
            "morfology": "<em>ουράνιος </em>→ ουραν<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ιος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Небесный"
        ],
        "transls": [
            "От слова Ουρανός — небо"
        ],
        "translation": "Небесный",
        "kind": "Прилагательные на -ιος от существительных",
        "unicTransl": "Небо",
        "notice": ""
    },
    {
        "word": "τίμιος",
        "base": "τιμή",
        "groups": {
            "morfology": "<em>τίμιος </em>→ τιμ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ιος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Ценный, дорогой, честный, почтенный"
        ],
        "transls": [
            "От слова Τιμή — цена"
        ],
        "translation": "Ценный, дорогой, честный, почтенный",
        "kind": "Прилагательные на -ιος от существительных",
        "unicTransl": "Цена",
        "notice": ""
    },
    {
        "word": "αντρείος",
        "base": "άντρας",
        "groups": {
            "morfology": "<em>αντρείος </em>→ άντρ<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -είος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Мужественный"
        ],
        "transls": [
            "От слова Άντρας — мужчина"
        ],
        "translation": "Мужественный",
        "kind": "Прилагательные на -ειος от существительных",
        "unicTransl": "Мужчина",
        "notice": ""
    },
    {
        "word": "γυναικείος, γυναίκειος",
        "base": "γυναίκα",
        "groups": {
            "morfology": "<em>γυναικείος, γυναίκειος </em>→ γυναίκ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -είος/-ειος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Женский"
        ],
        "transls": [
            "От слова Γυναίκα — женщина"
        ],
        "translation": "Женский",
        "kind": "Прилагательные на -ειος от существительных",
        "unicTransl": "Женщина",
        "notice": ""
    },
    {
        "word": "αριστοτέλειος",
        "base": "Αριστοτέλης",
        "groups": {
            "morfology": "<em>αριστοτέλειος </em>→ Αριστοτέλ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -ειος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Аристотелев"
        ],
        "transls": [
            "От имени Αριστοτέλης — Аристотель"
        ],
        "translation": "Аристотелев",
        "kind": "Прилагательные на -ειος от существительных",
        "unicTransl": "Аристотель",
        "notice": ""
    },
    {
        "word": "πυθαγόρειος",
        "base": "Πυθαγόρας",
        "groups": {
            "morfology": "<em>πυθαγόρειος </em>→ Πυθαγόρ<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ειος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Пифагоров"
        ],
        "transls": [
            "От имени Πυθαγόρας — Пифагор"
        ],
        "translation": "Пифагоров",
        "kind": "Прилагательные на -ειος от существительных",
        "unicTransl": "Пифагор",
        "notice": ""
    },
    {
        "word": "αρσάκειο",
        "base": "Αρσάκης",
        "groups": {
            "morfology": "<em>αρσάκειο </em>→ Αρσάκ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -ειο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Школа в Афинах"
        ],
        "transls": [
            "От имени Αρσάκης — Αрсакис"
        ],
        "translation": "Школа в Афинах",
        "kind": "Прилагательные на -ειος в среднем роде от существительных",
        "unicTransl": "Арсакис",
        "notice": ""
    },
    {
        "word": "βαρβάκειο",
        "base": "Βαρβάκης",
        "groups": {
            "morfology": "<em>βαρβάκειο </em>→ Βαρβάκ<span style=\"color: #900101\">ης</span> +<span style=\"color: #900101\"> -ειο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Учебное заведение, основанное по завещанию Варвакиса"
        ],
        "transls": [
            "От имени Βαρβάκης — Варвакис"
        ],
        "translation": "Учебное заведение, основанное по завещанию Варвакиса",
        "kind": "Прилагательные на -ειος в среднем роде от существительных",
        "unicTransl": "Варвакис",
        "notice": ""
    },
    {
        "word": "ζάππειο",
        "base": "Ζάππας",
        "groups": {
            "morfology": "<em>ζάππειο </em>→ Ζάππ<span style=\"color: #900101\">ας</span> +<span style=\"color: #900101\"> -ειο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Здание в Афинах, построенное на средства Константина Заппа"
        ],
        "transls": [
            "От имени Ζάππας — Заппа"
        ],
        "translation": "Здание в Афинах, построенное на средства Константина Заппа",
        "kind": "Прилагательные на -ειος в среднем роде от существительных",
        "unicTransl": "Заппа",
        "notice": ""
    },
    {
        "word": "μαράσλειο",
        "base": "Μαρασλής",
        "groups": {
            "morfology": "<em>μαράσλειο </em>→ Μαρασλ<span style=\"color: #900101\">ής</span> +<span style=\"color: #900101\"> -ειο</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Училища и издательства, основанные Григорием Марасли"
        ],
        "transls": [
            "От имени Μαρασλής — Марасли"
        ],
        "translation": "Училища и издательства, основанные Григорием Марасли",
        "kind": "Прилагательные на -ειος в среднем роде от существительных",
        "unicTransl": "Марасли",
        "notice": ""
    },
    {
        "word": "ακμαίος",
        "base": "ακμή",
        "groups": {
            "morfology": "<em>ακμαίος </em>→ ακμ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -αίος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Цветущий, процветающий"
        ],
        "transls": [
            "От слова Ακμή — расцвет, процветание"
        ],
        "translation": "Цветущий, процветающий",
        "kind": "Прилагательные на -αίος от существительных",
        "unicTransl": "Расцвет, процветание",
        "notice": ""
    },
    {
        "word": "μοιραίος",
        "base": "μοίρα",
        "groups": {
            "morfology": "<em>μοιραίος </em>→ μοίρ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -αίος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Роковой, гибельный, неизбежный"
        ],
        "transls": [
            "От слова Μοίρα — доля, участь"
        ],
        "translation": "Роковой, гибельный, неизбежный",
        "kind": "Прилагательные на -αίος от существительных",
        "unicTransl": "Доля, участь",
        "notice": ""
    },
    {
        "word": "διψαλέος",
        "base": "δίψα",
        "groups": {
            "morfology": "<em>διψαλέος </em>→ δίψ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -αλέος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Жаждущий"
        ],
        "transls": [
            "От слова Δίψα — жажда"
        ],
        "translation": "Жаждущий",
        "kind": "Прилагательные на -λέος от существительных",
        "unicTransl": "Жажда",
        "notice": ""
    },
    {
        "word": "πειναλέος",
        "base": "πείνα",
        "groups": {
            "morfology": "<em>πειναλέος </em>→ πείν<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -αλέος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Голодный, голодающий"
        ],
        "transls": [
            "От слова Πείνα — голод"
        ],
        "translation": "Голодный, голодающий",
        "kind": "Прилагательные на -λέος от существительных",
        "unicTransl": "Голод",
        "notice": ""
    },
    {
        "word": "αρματωλός",
        "base": "αρματία",
        "groups": {
            "morfology": "<em>αρματωλός </em>→ αρματ<span style=\"color: #900101\">ία</span> +<span style=\"color: #900101\"> -ωλός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Грешный"
        ],
        "transls": [
            "От слова Αρματία — грех, ошибка"
        ],
        "translation": "Грешный",
        "kind": "Прилагательные на -λός от существительных",
        "unicTransl": "Грех, ошибка",
        "notice": ""
    },
    {
        "word": "σιωπιλός",
        "base": "σιωπή",
        "groups": {
            "morfology": "<em>σιωπιλός </em>→ σιωπ<span style=\"color: #900101\">ή</span> +<span style=\"color: #900101\"> -ιλός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Молчаливый, безмолвный"
        ],
        "transls": [
            "От слова Σιωπή — молчание, тишина"
        ],
        "translation": "Молчаливый, безмолвный",
        "kind": "Прилагательные на -λός от существительных",
        "unicTransl": "Молчание, тишина",
        "notice": ""
    },
    {
        "word": "ασπρούλης",
        "base": "άσπρος",
        "groups": {
            "morfology": "<em>ασπρούλης </em>→ άσπρ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ούλης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Беленький"
        ],
        "transls": [
            "От слова Άσπρος — белый"
        ],
        "translation": "Беленький",
        "kind": "Прилагательные на -ούλης от прилагательных",
        "unicTransl": "Белый",
        "notice": ""
    },
    {
        "word": "κοντούλης",
        "base": "κοντός",
        "groups": {
            "morfology": "<em>κοντούλης </em>→ κοντ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ούλης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Коротенький"
        ],
        "transls": [
            "От слова Κοντός — короткий"
        ],
        "translation": "Коротенький",
        "kind": "Прилагательные на -ούλης от прилагательных",
        "unicTransl": "Короткий",
        "notice": ""
    },
    {
        "word": "μικρούλης",
        "base": "μικρός",
        "groups": {
            "morfology": "<em>μικρούλης </em>→ μικρ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ούλης</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Малюсенький"
        ],
        "transls": [
            "От слова Μικρός — маленький"
        ],
        "translation": "Малюсенький",
        "kind": "Прилагательные на -ούλης от прилагательных",
        "unicTransl": "Маленький",
        "notice": ""
    },
    {
        "word": "ζεστούτσικος",
        "base": "ζεστός",
        "groups": {
            "morfology": "<em>ζεστούτσικος </em>→ ζεστ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ούτσικος</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">ζεστός</span> – горячий < др.греч. <span style=\"color:#054728\">ζέω</span> – бурлить, кипеть."
        },
        "qws": [
            "Тёпленький"
        ],
        "transls": [
            "От слова Ζεστός — тёплый"
        ],
        "translation": "Тёпленький",
        "kind": "Прилагательные на -ούτσικος от прилагательных",
        "unicTransl": "Тёплый",
        "notice": ""
    },
    {
        "word": "καλούτσικος",
        "base": "καλός",
        "groups": {
            "morfology": "<em>καλούτσικος </em>→ καλ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ούτσικος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Хорошенький, добренький"
        ],
        "transls": [
            "От слова Καλός — хороший, добрый"
        ],
        "translation": "Хорошенький, добренький",
        "kind": "Прилагательные на -ούτσικος от прилагательных",
        "unicTransl": "Хороший, добрый",
        "notice": ""
    },
    {
        "word": "ψηλούτσικος",
        "base": "ψηλός",
        "groups": {
            "morfology": "<em>ψηλούτσικος </em>→ ψηλ<span style=\"color: #900101\">ός</span> +<span style=\"color: #900101\"> -ούτσικος</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Высоконький"
        ],
        "transls": [
            "От слова Ψηλός — высокий"
        ],
        "translation": "Высоконький",
        "kind": "Прилагательные на -ούτσικος от прилагательных",
        "unicTransl": "Высокий",
        "notice": ""
    },
    {
        "word": "αγριωπός",
        "base": "άγριος",
        "groups": {
            "morfology": "<em>αγριωπώς </em>→ άγρι<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ωπός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Страшноватый"
        ],
        "transls": [
            "От слова Άγριος — страшный"
        ],
        "translation": "Страшноватый",
        "kind": "Прилагательные на -ωπός от прилагательных",
        "unicTransl": "Страшный",
        "notice": ""
    },
    {
        "word": "κοκκινωπός",
        "base": "κόκκινος",
        "groups": {
            "morfology": "<em>κοκκινωπός </em>→ κόκκιν<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ωπός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Красноватый"
        ],
        "transls": [
            "От слова Κόκκινος — красный"
        ],
        "translation": "Красноватый",
        "kind": "Прилагательные на -ωπός от прилагательных",
        "unicTransl": "Красный",
        "notice": ""
    },
    {
        "word": "πρασινωπός",
        "base": "πράσινος",
        "groups": {
            "morfology": "<em>πρασινωπός </em>→ πράσιν<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ωπός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Зеленоватый"
        ],
        "transls": [
            "От слова Πράσινος — зелёный"
        ],
        "translation": "Зеленоватый",
        "kind": "Прилагательные на -ωπός от прилагательных",
        "unicTransl": "Зелёный",
        "notice": ""
    },
    {
        "word": "ασπριδερός",
        "base": "άσπρος",
        "groups": {
            "morfology": "<em>ασπριδερός </em>→ άσπρ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ιδερός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Беловатый"
        ],
        "transls": [
            "От слова Άσπρος — белый"
        ],
        "translation": "Беловатый",
        "kind": "Прилагательные на -ιδερός от прилагательных",
        "unicTransl": "Белый",
        "notice": ""
    },
    {
        "word": "μαυριδερός",
        "base": "μαύρος",
        "groups": {
            "morfology": "<em>μαυριδερός </em>→ μαύρ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ιδερός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Темноватый"
        ],
        "transls": [
            "От слова Μαύρος — тёмный"
        ],
        "translation": "Темноватый",
        "kind": "Прилагательные на -ιδερός от прилагательных",
        "unicTransl": "Тёмный",
        "notice": ""
    },
    {
        "word": "βαθουλός",
        "base": "βαθύς",
        "groups": {
            "morfology": "<em>βαθουλός </em>→ βαθ<span style=\"color: #900101\">ύς</span> +<span style=\"color: #900101\"> -ουλός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Углубленный, вогнутый"
        ],
        "transls": [
            "От слова Βαθύς — глубокий"
        ],
        "translation": "Углубленный, вогнутый",
        "kind": "Прилагательные на -ουλός прилагательных",
        "unicTransl": "Глубокий",
        "notice": ""
    },
    {
        "word": "μακρουλός",
        "base": "μακρύς",
        "groups": {
            "morfology": "<em>μακρουλός </em>→ μακρ<span style=\"color: #900101\">ύς</span> +<span style=\"color: #900101\"> -ουλός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Продолговатый"
        ],
        "transls": [
            "От слова Μακρύς — длинный"
        ],
        "translation": "Продолговатый",
        "kind": "Прилагательные на -ουλός прилагательных",
        "unicTransl": "Длинный",
        "notice": ""
    },
    {
        "word": "παχουλός",
        "base": "παχύς",
        "groups": {
            "morfology": "<em>παχουλός </em>→ παχ<span style=\"color: #900101\">ύς</span> +<span style=\"color: #900101\"> -ουλός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Толстоватый"
        ],
        "transls": [
            "От слова Παχύς — толстый"
        ],
        "translation": "Толстоватый",
        "kind": "Прилагательные на -ουλός прилагательных",
        "unicTransl": "Толстый",
        "notice": ""
    },
    {
        "word": "αντικρινός",
        "base": "αντίκρυ",
        "groups": {
            "morfology": "<em>αντικρινός </em>→ αντίκρ<span style=\"color: #900101\">υ</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">αντίκρυ</span> < сред.греч. <span style=\"color:#054728\">ἀντίκρυ</span> < др.греч. <span style=\"color:#054728\">ἀντικρύ</span>."
        },
        "qws": [
            "Противоположный"
        ],
        "transls": [
            "От слова Αντίκρυ — напротив, навстречу"
        ],
        "translation": "Противоположный",
        "kind": "Прилагательные на -ινός от наречий",
        "unicTransl": "Напротив, навстречу",
        "notice": ""
    },
    {
        "word": "κατοπινός",
        "base": "κατόπιν",
        "groups": {
            "morfology": "<em>κατοπινός </em>→ κατόπ<span style=\"color: #900101\">ιν</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Последующий"
        ],
        "transls": [
            "От слова Κατόπιν — потом, после"
        ],
        "translation": "Последующий",
        "kind": "Прилагательные на -ινός от наречий",
        "unicTransl": "Потом, после",
        "notice": ""
    },
    {
        "word": "κοντινός",
        "base": "κοντά",
        "groups": {
            "morfology": "<em>κοντινός </em>→ κοντ<span style=\"color: #900101\">ά</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">κοντά</span> – близко < др.греч. <span style=\"color:#054728\">κοντός</span> – шест, жердь."
        },
        "qws": [
            "Ближний"
        ],
        "transls": [
            "От слова Κοντά — близко"
        ],
        "translation": "Ближний",
        "kind": "Прилагательные на -ινός от наречий",
        "unicTransl": "Близко",
        "notice": ""
    },
    {
        "word": "μακρινός",
        "base": "μακριά",
        "groups": {
            "morfology": "<em>μακρινός </em>→ μακρ<span style=\"color: #900101\">ιά</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Дальний"
        ],
        "transls": [
            "От слова Μακριά — далеко"
        ],
        "translation": "Дальний",
        "kind": "Прилагательные на -ινός от наречий",
        "unicTransl": "Далеко",
        "notice": ""
    },
    {
        "word": "παντοτινός",
        "base": "πάντοτε",
        "groups": {
            "morfology": "<em>παντοτινός </em>→ πάντοτ<span style=\"color: #900101\">ε</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Всегдашний, непрерывный"
        ],
        "transls": [
            "От слова Πάντοτε — вечно, всегда"
        ],
        "translation": "Всегдашний, непрерывный",
        "kind": "Прилагательные на -ινός от наречий",
        "unicTransl": "Вечно, всегда",
        "notice": ""
    },
    {
        "word": "περσινός",
        "base": "πέρσι",
        "groups": {
            "morfology": "<em>περσινός </em>→ πέρσ<span style=\"color: #900101\">ι</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Прошлогодний"
        ],
        "transls": [
            "От слова Πέρσι — в прошлом году"
        ],
        "translation": "Прошлогодний",
        "kind": "Прилагательные на -ινός от наречий",
        "unicTransl": "В прошлом году",
        "notice": ""
    },
    {
        "word": "σημερινός",
        "base": "σήμερα",
        "groups": {
            "morfology": "<em>σημερινός </em>→ σήμερ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Сегодняшний"
        ],
        "transls": [
            "От слова Σήμερα — сегодня"
        ],
        "translation": "Сегодняшний",
        "kind": "Прилагательные на -ινός от наречий",
        "unicTransl": "Сегодня",
        "notice": ""
    },
    {
        "word": "τωρινός",
        "base": "τώρα",
        "groups": {
            "morfology": "<em>τωρινός </em>→ τώρ<span style=\"color: #900101\">α</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>Этимология данного слова ещё не добавлена. Вы можете прислать её нам!"
        },
        "qws": [
            "Теперешний"
        ],
        "transls": [
            "От слова Τώρα — сейчас, теперь"
        ],
        "translation": "Теперешний",
        "kind": "Прилагательные на -ινός от наречий",
        "unicTransl": "Сейчас, теперь",
        "notice": ""
    },
    {
        "word": "φετινός",
        "base": "φέτος",
        "groups": {
            "morfology": "<em>φετινός </em>→ φέτ<span style=\"color: #900101\">ος</span> +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">φέτος</span> – в этом году < койне (<span style=\"color:#054728\">ἐφετινός</span> – сего года < <span style=\"color:#054728\">ἔτος</span> – год)"
        },
        "qws": [
            "Сегогодний"
        ],
        "transls": [
            "От слова Φέτος — в этом году"
        ],
        "translation": "Сегогодний",
        "kind": "Прилагательные на -ινός от наречий",
        "unicTransl": "В этом году",
        "notice": ""
    },
    {
        "word": "χτεσινός / χθεσινός",
        "base": "χτες, χθες",
        "groups": {
            "morfology": "<em>χτεσινός </em>→ χτες +<span style=\"color: #900101\"> -ινός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">χτες</span> – вчера"
        },
        "qws": [
            "Вчерашний"
        ],
        "transls": [
            "От слова Χτες — вчера"
        ],
        "translation": "Вчерашний",
        "kind": "Прилагательные на -ινός от наречий",
        "unicTransl": "Вчера",
        "notice": ""
    },
    {
        "word": "αυριανός",
        "base": "αύριο",
        "groups": {
            "morfology": "<em>αυριανός </em>→ αύρ<span style=\"color: #900101\">ιο</span> +<span style=\"color: #900101\"> -ιανός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">αύριο</span> – завтра < сред.греч. <span style=\"color:#054728\">αὔριο</span> < др.греч. <span style=\"color:#054728\">αὔριον</span>"
        },
        "qws": [
            "Завтрашний"
        ],
        "transls": [
            "От слова Αύριο — завтра"
        ],
        "translation": "Завтрашний",
        "kind": "Прилагательные на -ιανός от наречий",
        "unicTransl": "Завтра",
        "notice": ""
    },
    {
        "word": "παρακατιανός",
        "base": "παρακάτω",
        "groups": {
            "morfology": "<em>παρακατιανός </em>→ παρακάτ<span style=\"color: #900101\">ω</span> +<span style=\"color: #900101\"> -ιανός</span>",
            "etymology": "<br>От совр.греч. <span style=\"color:#054728\">παρακάτω</span> – ниже, дальше, затем < др.греч. (<span style=\"color:#054728\">κάτω</span> – вниз, внизу < <span style=\"color:#054728\">κάτα</span> – к, около; по; против)"
        },
        "qws": [
            "Низший, худший, посредственный"
        ],
        "transls": [
            "От слова Παρακάτω — ниже, дальше, затем"
        ],
        "translation": "Низший, худший, посредственный",
        "kind": "Прилагательные на -ιανός от наречий",
        "unicTransl": "Ниже, дальше, затем",
        "notice": ""
    }
]

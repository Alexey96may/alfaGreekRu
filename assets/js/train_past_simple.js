//Массив с титулами таблицы и массив объектов с данными.

const tableTitlesArr = [{title: "Глагол", place: "base"}, {title: "Аорист", place: "baseAor"}, {title: "Перевод", place: "unicTransl"}];
const globalArray =
[
    {
        "word": "αγόρασα",
        "translation": "Я купил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Я купил "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseAor": "αγόρασ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "αγόρασες",
        "translation": "Ты купил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Ты купил "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseAor": "αγόρασ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "αγόρασε",
        "translation": "Она купила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Она купила "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseAor": "αγόρασ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "αγοράσαμε",
        "translation": "Мы купили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Мы купили "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseAor": "αγόρασ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "αγοράσατε",
        "translation": "Вы купили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Вы купили "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseAor": "αγόρασ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "αγόρασαν / αγοράσαν / αγοράσανε",
        "translation": "Они купили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Они купили "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseAor": "αγόρασ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "άκουσα",
        "translation": "Я услышал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Я услышал "
        ],
        "transls": [
            "ακούω"
        ],
        "baseAor": "άκουσ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "άκουσες",
        "translation": "Ты услышал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Ты услышал "
        ],
        "transls": [
            "ακούω"
        ],
        "baseAor": "άκουσ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "άκουσε",
        "translation": "Он услышал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Он услышал "
        ],
        "transls": [
            "ακούω"
        ],
        "baseAor": "άκουσ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "ακούσαμε",
        "translation": "Мы услышали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Мы услышали "
        ],
        "transls": [
            "ακούω"
        ],
        "baseAor": "άκουσ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "ακούσατε",
        "translation": "Вы услышали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Вы услышали "
        ],
        "transls": [
            "ακούω"
        ],
        "baseAor": "άκουσ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "άκουσαν / ακούσαν / ακούσανε",
        "translation": "Они услышали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Они услышали "
        ],
        "transls": [
            "ακούω"
        ],
        "baseAor": "άκουσ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "αγάπησα",
        "translation": "Я полюбил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Я полюбил "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseAor": "αγάπησ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "αγάπησες",
        "translation": "Ты полюбил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Ты полюбил "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseAor": "αγάπησ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "αγάπησε",
        "translation": "Он полюбил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Он полюбил "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseAor": "αγάπησ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "αγαπήσαμε",
        "translation": "Мы полюбили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Мы полюбили "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseAor": "αγάπησ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "αγαπήσατε",
        "translation": "Вы полюбили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Вы полюбили "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseAor": "αγάπησ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "αγάπησαν / αγαπήσαν / αγαπήσανε",
        "translation": "Они полюбили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Они полюбили "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseAor": "αγάπησ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "απάντησα",
        "translation": "Я ответил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Я ответил "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseAor": "απάντησ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απάντησες",
        "translation": "Ты ответил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Ты ответил "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseAor": "απάντησ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απάντησε",
        "translation": "Она ответили ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Она ответили "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseAor": "απάντησ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντήσαμε",
        "translation": "Мы ответили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Мы ответили "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseAor": "απάντησ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντήσατε",
        "translation": "Вы ответили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Вы ответили "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseAor": "απάντησ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απάντησαν / απαντήσαν / απαντήσανε",
        "translation": "Они ответили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Они ответили "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseAor": "απάντησ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "έπαιξα",
        "translation": "Я съиграл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Я съиграл "
        ],
        "transls": [
            "παίζω"
        ],
        "baseAor": "έπαιξ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "έπαιξες",
        "translation": "Ты съиграл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Ты съиграл "
        ],
        "transls": [
            "παίζω"
        ],
        "baseAor": "έπαιξ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "έπαιξε",
        "translation": "Он съиграл ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Он съиграл "
        ],
        "transls": [
            "παίζω"
        ],
        "baseAor": "έπαιξ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "παίξαμε",
        "translation": "Мы съиграли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Мы съиграли "
        ],
        "transls": [
            "παίζω"
        ],
        "baseAor": "έπαιξ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "παίξατε",
        "translation": "Вы съиграли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Вы съиграли "
        ],
        "transls": [
            "παίζω"
        ],
        "baseAor": "έπαιξ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "έπαιξαν / παίξαν / παίξανε",
        "translation": "Они съиграли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Они съиграли "
        ],
        "transls": [
            "παίζω"
        ],
        "baseAor": "έπαιξ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "άργησα",
        "translation": "Я опаздал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Я опаздал "
        ],
        "transls": [
            "αργώ"
        ],
        "baseAor": "άργησ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "άργησες",
        "translation": "Ты опаздал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Ты опаздал "
        ],
        "transls": [
            "αργώ"
        ],
        "baseAor": "άργησ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "άργησε",
        "translation": "Она опаздала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Она опаздала "
        ],
        "transls": [
            "αργώ"
        ],
        "baseAor": "άργησ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργήσαμε",
        "translation": "Мы опаздали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Мы опаздали "
        ],
        "transls": [
            "αργώ"
        ],
        "baseAor": "άργησ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργήσατε",
        "translation": "Вы опаздали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Вы опаздали "
        ],
        "transls": [
            "αργώ"
        ],
        "baseAor": "άργησ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "άργησαν / αργήσαν / αργήσανε",
        "translation": "Они опаздали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Они опаздали "
        ],
        "transls": [
            "αργώ"
        ],
        "baseAor": "άργησ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "άρεσα",
        "translation": "Я понравился ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Я понравился "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseAor": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "άρεσες",
        "translation": "Ты понравился ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Ты понравился "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseAor": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "άρεσε",
        "translation": "Он понравился ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Он понравился "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseAor": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "αρέσαμε",
        "translation": "Мы понравились ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Мы понравились "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseAor": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "αρέσατε",
        "translation": "Вы понравились ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Вы понравились "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseAor": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "άρεσαν / αρέσαν / αρέσανε",
        "translation": "Они понравились ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Они понравились "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseAor": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "αρρώστησα",
        "translation": "Я заболел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Я заболел "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστησ<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "αρρώστησες",
        "translation": "Ты заболел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Ты заболел "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστησ<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "αρρώστησε",
        "translation": "Она заболела ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Она заболела "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστησ<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "αρρωστήσαμε",
        "translation": "Мы заболел ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Мы заболел "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστησ<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "αρρωστήσατε",
        "translation": "Вы заболел ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Вы заболел "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστησ<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "αρρώστησαν / αρρωστήσαν / αρρωστήσανε",
        "translation": "Они заболел ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Они заболел "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστησ<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "έβαλα",
        "translation": "Я поставил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Я поставил "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβαλ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "έβαλες",
        "translation": "Ты поставил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Ты поставил "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβαλ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "έβαλε",
        "translation": "Он поставил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Он поставил "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβαλ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "βάλαμε",
        "translation": "Мы поставили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Мы поставили "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβαλ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "βάλατε",
        "translation": "Вы поставили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Вы поставили "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβαλ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "έβαλαν / βάλαν / βάλανε",
        "translation": "Они поставили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Они поставили "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβαλ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "βγήκα",
        "translation": "Я вышел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Я вышел "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγήκ<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "βγήκες",
        "translation": "Ты вышел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Ты вышел "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγήκ<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "βγήκε",
        "translation": "Она вышла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Она вышла "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγήκ<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "βγήκαμε",
        "translation": "Мы вышли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Мы вышли "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγήκ<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "βγήκατε",
        "translation": "Вы вышли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Вы вышли "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγήκ<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "βγήκαν / βγήκανε",
        "translation": "Они вышли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Они вышли "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγήκ<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "είδα",
        "translation": "Я увидел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Я увидел "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "είδ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "είδες",
        "translation": "Ты увидел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Ты увидел "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "είδ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "είδε",
        "translation": "Он увидел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Он увидел "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "είδ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "είδαμε",
        "translation": "Мы увидели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Мы увидели "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "είδ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "είδατε",
        "translation": "Вы увидели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Вы увидели "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "είδ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "είδαν / είδανε",
        "translation": "Они увидели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Они увидели "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "είδ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "γέλασα",
        "translation": "Я посмеялся ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Я посмеялся "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseAor": "γέλασ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "γέλασες",
        "translation": "Ты посмеялся ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Ты посмеялся "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseAor": "γέλασ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "γέλασε",
        "translation": "Она посмеялась ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Она посмеялась "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseAor": "γέλασ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "γελάσαμε",
        "translation": "Мы посмеялись ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Мы посмеялись "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseAor": "γέλασ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "γελάσατε",
        "translation": "Вы посмеялись ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Вы посмеялись "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseAor": "γέλασ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "γέλασαν / γελάσαν / γελάσανε",
        "translation": "Они посмеялись ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Они посмеялись "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseAor": "γέλασ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "έγραψα",
        "translation": "Я написал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Я написал "
        ],
        "transls": [
            "γράφω"
        ],
        "baseAor": "έγραψ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "έγραψες",
        "translation": "Ты написал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Ты написал "
        ],
        "transls": [
            "γράφω"
        ],
        "baseAor": "έγραψ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "έγραψε",
        "translation": "Он написал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Он написал "
        ],
        "transls": [
            "γράφω"
        ],
        "baseAor": "έγραψ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "γράψαμε",
        "translation": "Мы написали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Мы написали "
        ],
        "transls": [
            "γράφω"
        ],
        "baseAor": "έγραψ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "γράψατε",
        "translation": "Вы написали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Вы написали "
        ],
        "transls": [
            "γράφω"
        ],
        "baseAor": "έγραψ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "έγραψαν / γράψαν / γράψανε",
        "translation": "Они написали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Они написали "
        ],
        "transls": [
            "γράφω"
        ],
        "baseAor": "έγραψ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "διάβασα",
        "translation": "Я прочитал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Я прочитал "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseAor": "διάβασ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "διάβασες",
        "translation": "Ты прочитал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Ты прочитал "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseAor": "διάβασ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "διάβασε",
        "translation": "Он прочитал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Он прочитал "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseAor": "διάβασ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "διαβάσαμε",
        "translation": "Мы прочитали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Мы прочитали "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseAor": "διάβασ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "διαβάσατε",
        "translation": "Вы прочитали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Вы прочитали "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseAor": "διάβασ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "διάβασαν / διαβάσαν / διαβάσανε",
        "translation": "Они прочитали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Они прочитали "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseAor": "διάβασ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "έδωσα",
        "translation": "Я дал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Я дал "
        ],
        "transls": [
            "δίνω"
        ],
        "baseAor": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "έδωσες",
        "translation": "Ты дал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Ты дал "
        ],
        "transls": [
            "δίνω"
        ],
        "baseAor": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "έδωσε",
        "translation": "Он дал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Он дал "
        ],
        "transls": [
            "δίνω"
        ],
        "baseAor": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "δώσαμε",
        "translation": "Мы дали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Мы дали "
        ],
        "transls": [
            "δίνω"
        ],
        "baseAor": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "δώσατε",
        "translation": "Вы дали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Вы дали "
        ],
        "transls": [
            "δίνω"
        ],
        "baseAor": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "έδωσαν / δώσαν / δώσανε",
        "translation": "Они дали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Они дали "
        ],
        "transls": [
            "δίνω"
        ],
        "baseAor": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "ήρθα / ήλθα",
        "translation": "Я пришёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Я пришёл "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseAor": "ήρθ<b>α</b>, ήλθ<b>α</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "ήρθες / ήλθες",
        "translation": "Ты пришёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Ты пришёл "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseAor": "ήρθ<b>α</b>, ήλθ<b>α</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "ήρθε / ήλθε",
        "translation": "Она пришла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Она пришла "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseAor": "ήρθ<b>α</b>, ήλθ<b>α</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "ήρθαμε / ήλθαμε",
        "translation": "Мы пришли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Мы пришли "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseAor": "ήρθ<b>α</b>, ήλθ<b>α</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "ήρθατε / ήλθατε",
        "translation": "Вы пришли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Вы пришли "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseAor": "ήρθ<b>α</b>, ήλθ<b>α</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "ήρθαν / ήλθαν / ήρθανε / ήλθανε",
        "translation": "Они пришли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Они пришли "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseAor": "ήρθ<b>α</b>, ήλθ<b>α</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "εξήγησα",
        "translation": "Я объяснил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Я объяснил "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseAor": "εξήγησ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "εξήγησες",
        "translation": "Ты объяснил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Ты объяснил "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseAor": "εξήγησ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "εξήγησε",
        "translation": "Он объяснил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Он объяснил "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseAor": "εξήγησ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγήσαμε",
        "translation": "Мы объяснили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Мы объяснили "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseAor": "εξήγησ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγήσατε",
        "translation": "Вы объяснили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Вы объяснили "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseAor": "εξήγησ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "εξήγησαν / εξηγήσαν / εξηγήσανε",
        "translation": "Они объяснили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Они объяснили "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseAor": "εξήγησ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "γνώρισα",
        "translation": "Я узнал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Я узнал "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseAor": "γνώρισ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνώρισες",
        "translation": "Ты узнал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Ты узнал "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseAor": "γνώρισ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνώρισε",
        "translation": "Он узнал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Он узнал "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseAor": "γνώρισ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνωρίσαμε",
        "translation": "Мы узнали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Мы узнали "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseAor": "γνώρισ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνωρίσατε",
        "translation": "Вы узнали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Вы узнали "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseAor": "γνώρισ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνώρισαν / γνωρίσαν / γνωρίσανε",
        "translation": "Они узнали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Они узнали "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseAor": "γνώρισ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "έφερα",
        "translation": "Я понёс ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Я понёс "
        ],
        "transls": [
            "φέρω"
        ],
        "baseAor": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "έφερες",
        "translation": "Ты понёс ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Ты понёс "
        ],
        "transls": [
            "φέρω"
        ],
        "baseAor": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "έφερε",
        "translation": "Он понёс ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Он понёс "
        ],
        "transls": [
            "φέρω"
        ],
        "baseAor": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "φέραμε",
        "translation": "Мы понесли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Мы понесли "
        ],
        "transls": [
            "φέρω"
        ],
        "baseAor": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "φέρατε",
        "translation": "Вы понесли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Вы понесли "
        ],
        "transls": [
            "φέρω"
        ],
        "baseAor": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "έφεραν / φέραν / φέρανε",
        "translation": "Они понесли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Они понесли "
        ],
        "transls": [
            "φέρω"
        ],
        "baseAor": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "θέλησα",
        "translation": "Я захотел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Я захотел "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλησ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλησες",
        "translation": "Ты захотел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Ты захотел "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλησ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλησε",
        "translation": "Она захотела ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Она захотела "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλησ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "θελήσαμε",
        "translation": "Мы захотели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Мы захотели "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλησ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "θελήσατε",
        "translation": "Вы захотели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Вы захотели "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλησ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλησαν / θελήσαν / θελήσανε",
        "translation": "Они захотели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Они захотели "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλησ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "θεώρησα",
        "translation": "Я предположил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Я предположил "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseAor": "θεώρησ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεώρησες",
        "translation": "Ты предположил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Ты предположил "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseAor": "θεώρησ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεώρησε",
        "translation": "Он предположил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Он предположил "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseAor": "θεώρησ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρήσαμε",
        "translation": "Мы предположили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Мы предположили "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseAor": "θεώρησ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρήσατε",
        "translation": "Вы предположили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Вы предположили "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseAor": "θεώρησ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεώρησαν / θεωρήσαν / θεωρήσανε",
        "translation": "Они предположили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Они предположили "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseAor": "θεώρησ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "κάλεσα",
        "translation": "Я позвал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Я позвал "
        ],
        "transls": [
            "καλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "κάλεσες",
        "translation": "Ты позвал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Ты позвал "
        ],
        "transls": [
            "καλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "κάλεσε",
        "translation": "Она позвала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Она позвала "
        ],
        "transls": [
            "καλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "καλέσαμε",
        "translation": "Мы позвали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Мы позвали "
        ],
        "transls": [
            "καλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "καλέσατε",
        "translation": "Вы позвали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Вы позвали "
        ],
        "transls": [
            "καλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "κάλεσαν / καλέσαν / καλέσανε",
        "translation": "Они позвали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Они позвали "
        ],
        "transls": [
            "καλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "κάπνισα",
        "translation": "Я покурил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Я покурил "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseAor": "κάπνισ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "κάπνισες",
        "translation": "Ты покурил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Ты покурил "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseAor": "κάπνισ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "κάπνισε",
        "translation": "Он покурил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Он покурил "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseAor": "κάπνισ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "καπνίσαμε",
        "translation": "Мы покурили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Мы покурили "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseAor": "κάπνισ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "καπνίσατε",
        "translation": "Вы покурили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Вы покурили "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseAor": "κάπνισ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "κάπνισαν / καπνίσαν / καπνίσανε",
        "translation": "Они покурили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Они покурили "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseAor": "κάπνισ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "έκανα",
        "translation": "Я сделал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Я сделал "
        ],
        "transls": [
            "κάνω"
        ],
        "baseAor": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "έκανες",
        "translation": "Ты сделал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Ты сделал "
        ],
        "transls": [
            "κάνω"
        ],
        "baseAor": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "έκανε",
        "translation": "Она сделал ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Она сделал "
        ],
        "transls": [
            "κάνω"
        ],
        "baseAor": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "κάναμε",
        "translation": "Мы сделали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Мы сделали "
        ],
        "transls": [
            "κάνω"
        ],
        "baseAor": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "κάνατε",
        "translation": "Вы сделали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Вы сделали "
        ],
        "transls": [
            "κάνω"
        ],
        "baseAor": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "έκαναν / κάναν / κάνανε",
        "translation": "Они сделали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Они сделали "
        ],
        "transls": [
            "κάνω"
        ],
        "baseAor": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "κατάλαβα",
        "translation": "Я понял ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Я понял "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "κατάλαβ<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "κατάλαβες",
        "translation": "Ты понял ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Ты понял "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "κατάλαβ<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "κατάλαβε",
        "translation": "Он понял ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Он понял "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "κατάλαβ<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "καταλάβαμε",
        "translation": "Мы поняли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Мы поняли "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "κατάλαβ<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "καταλάβατε",
        "translation": "Вы поняли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Вы поняли "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "κατάλαβ<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "κατάλαβαν / καταλάβαν / καταλάβανε",
        "translation": "Они поняли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Они поняли "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "κατάλαβ<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "κοιμήθηκα",
        "translation": "Я поспал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Я поспал "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseAor": "κοιμήθηκ<b>α</b>",
        "unicTransl": "спать"
    },
    {
        "word": "κοιμήθηκες",
        "translation": "Ты поспал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Ты поспал "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseAor": "κοιμήθηκ<b>α</b>",
        "unicTransl": "спать"
    },
    {
        "word": "κοιμήθηκε",
        "translation": "Она поспала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Она поспала "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseAor": "κοιμήθηκ<b>α</b>",
        "unicTransl": "спать"
    },
    {
        "word": "κοιμηθήκαμε",
        "translation": "Мы поспали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Мы поспали "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseAor": "κοιμήθηκ<b>α</b>",
        "unicTransl": "спать"
    },
    {
        "word": "κοιμηθήκατε",
        "translation": "Вы поспали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Вы поспали "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseAor": "κοιμήθηκ<b>α</b>",
        "unicTransl": "спать"
    },
    {
        "word": "κοιμήθηκαν / κοιμηθήκαν / κοιμηθήκανε",
        "translation": "Они поспали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Они поспали "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseAor": "κοιμήθηκ<b>α</b>",
        "unicTransl": "спать"
    },
    {
        "word": "έκλαψα",
        "translation": "Я заплакал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Я заплакал "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseAor": "έκλαψ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "έκλαψες",
        "translation": "Ты заплакал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Ты заплакал "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseAor": "έκλαψ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "έκλαψε",
        "translation": "Он заплакал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Он заплакал "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseAor": "έκλαψ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "κλάψαμε",
        "translation": "Мы заплакали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Мы заплакали "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseAor": "έκλαψ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "κλάψατε",
        "translation": "Вы заплакали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Вы заплакали "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseAor": "έκλαψ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "έκλαψαν / κλάψαν / κλάψανε",
        "translation": "Они заплакали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Они заплакали "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseAor": "έκλαψ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "κολύμπησα",
        "translation": "Я поплавал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Я поплавал "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseAor": "κολύμπησ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "κολύμπησες",
        "translation": "Ты поплавал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Ты поплавал "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseAor": "κολύμπησ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "κολύμπησε",
        "translation": "Она поплавала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Она поплавала "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseAor": "κολύμπησ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπήσαμε",
        "translation": "Мы поплавали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Мы поплавали "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseAor": "κολύμπησ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπήσατε",
        "translation": "Вы поплавали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Вы поплавали "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseAor": "κολύμπησ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "κολύμπησαν / κολυμπήσαν / κολυμπήσανε",
        "translation": "Они поплавали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Они поплавали "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseAor": "κολύμπησ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "είπα",
        "translation": "Я сказал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Я сказал "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "είπ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "είπες",
        "translation": "Ты сказал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Ты сказал "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "είπ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "είπε",
        "translation": "Она сказала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Она сказала "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "είπ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "είπαμε",
        "translation": "Мы сказали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Мы сказали "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "είπ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "είπατε",
        "translation": "Вы сказали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Вы сказали "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "είπ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "είπαν / είπανε",
        "translation": "Они сказали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Они сказали "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "είπ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "μαγείρεψα",
        "translation": "Я приготовил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Я приготовил "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseAor": "μαγείρεψ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγείρεψες",
        "translation": "Ты приготовил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Ты приготовил "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseAor": "μαγείρεψ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγείρεψε",
        "translation": "Он приготовил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Он приготовил "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseAor": "μαγείρεψ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγειρέψαμε",
        "translation": "Мы приготовили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Мы приготовили "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseAor": "μαγείρεψ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγειρέψατε",
        "translation": "Вы приготовили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Вы приготовили "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseAor": "μαγείρεψ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγείρεψαν / μαγειρέψαν / μαγειρέψανε",
        "translation": "Они приготовили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Они приготовили "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseAor": "μαγείρεψ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "έμαθα",
        "translation": "Я выучил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Я выучил "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθ<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "έμαθες",
        "translation": "Ты выучил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Ты выучил "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθ<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "έμαθε",
        "translation": "Она выучил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Она выучил "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθ<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μάθαμε",
        "translation": "Мы выучили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Мы выучили "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθ<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μάθατε",
        "translation": "Вы выучили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Вы выучили "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθ<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "έμαθαν / μάθαν / μάθανε",
        "translation": "Они выучили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Они выучили "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθ<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "έμεινα",
        "translation": "Я остался ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μένω",
        "notice": "",
        "qws": [
            "Я остался "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "έμειν<b>α</b>",
        "unicTransl": "проживать, оставаться"
    },
    {
        "word": "έμεινες",
        "translation": "Ты остался ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μένω",
        "notice": "",
        "qws": [
            "Ты остался "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "έμειν<b>α</b>",
        "unicTransl": "проживать, оставаться"
    },
    {
        "word": "έμεινε",
        "translation": "Он остался ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μένω",
        "notice": "",
        "qws": [
            "Он остался "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "έμειν<b>α</b>",
        "unicTransl": "проживать, оставаться"
    },
    {
        "word": "μείναμε",
        "translation": "Мы остались ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μένω",
        "notice": "",
        "qws": [
            "Мы остались "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "έμειν<b>α</b>",
        "unicTransl": "проживать, оставаться"
    },
    {
        "word": "μείνατε",
        "translation": "Вы остались ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μένω",
        "notice": "",
        "qws": [
            "Вы остались "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "έμειν<b>α</b>",
        "unicTransl": "проживать, оставаться"
    },
    {
        "word": "έμειναν / μείναν / μείνανε",
        "translation": "Они остались ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μένω",
        "notice": "",
        "qws": [
            "Они остались "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "έμειν<b>α</b>",
        "unicTransl": "проживать, оставаться"
    },
    {
        "word": "μετέφρασα",
        "translation": "Я перевёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Я перевёл "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "μετέφρασ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μετέφρασες",
        "translation": "Ты перевёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Ты перевёл "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "μετέφρασ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μετέφρασε",
        "translation": "Она перевела ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Она перевела "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "μετέφρασ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μεταφράσαμε",
        "translation": "Мы перевели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Мы перевели "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "μετέφρασ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μεταφράσατε",
        "translation": "Вы перевели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Вы перевели "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "μετέφρασ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μετέφρασαν / μεταφράσαν / μεταφράσανε",
        "translation": "Они перевели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Они перевели "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "μετέφρασ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μίσησα",
        "translation": "Я возненавидел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Я возненавидел "
        ],
        "transls": [
            "μισώ"
        ],
        "baseAor": "μίσησ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μίσησες",
        "translation": "Ты возненавидел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Ты возненавидел "
        ],
        "transls": [
            "μισώ"
        ],
        "baseAor": "μίσησ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μίσησε",
        "translation": "Он возненавидел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Он возненавидел "
        ],
        "transls": [
            "μισώ"
        ],
        "baseAor": "μίσησ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισήσαμε",
        "translation": "Мы возненавидели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Мы возненавидели "
        ],
        "transls": [
            "μισώ"
        ],
        "baseAor": "μίσησ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισήσατε",
        "translation": "Вы возненавидели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Вы возненавидели "
        ],
        "transls": [
            "μισώ"
        ],
        "baseAor": "μίσησ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μίσησαν / μισήσαν / μισήσανε",
        "translation": "Они возненавидели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Они возненавидели "
        ],
        "transls": [
            "μισώ"
        ],
        "baseAor": "μίσησ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μπήκα",
        "translation": "Я вошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Я вошёл "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπήκ<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "μπήκες",
        "translation": "Ты вошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Ты вошёл "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπήκ<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "μπήκε",
        "translation": "Она вошла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Она вошла "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπήκ<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "μπήκαμε",
        "translation": "Мы вошли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Мы вошли "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπήκ<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "μπήκατε",
        "translation": "Вы вошли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Вы вошли "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπήκ<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "μπήκαν / μπήκανε",
        "translation": "Они вошли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Они вошли "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπήκ<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "μπόρεσα",
        "translation": "Я смог ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Я смог "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseAor": "μπόρεσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "μπόρεσες",
        "translation": "Ты смог ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Ты смог "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseAor": "μπόρεσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "μπόρεσε",
        "translation": "Он смог ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Он смог "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseAor": "μπόρεσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "μπορέσαμε",
        "translation": "Мы смогли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Мы смогли "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseAor": "μπόρεσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "μπορέσατε",
        "translation": "Вы смогли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Вы смогли "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseAor": "μπόρεσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "μπόρεσαν / μπορέσανε",
        "translation": "Они смогли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Они смогли "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseAor": "μπόρεσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "ξάπλωσα",
        "translation": "Я лёг ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Я лёг "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseAor": "ξάπλωσ<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξάπλωσες",
        "translation": "Ты лёг ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Ты лёг "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseAor": "ξάπλωσ<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξάπλωσε",
        "translation": "Она легла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Она легла "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseAor": "ξάπλωσ<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξαπλώσαμε",
        "translation": "Мы легли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Мы легли "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseAor": "ξάπλωσ<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξαπλώσατε",
        "translation": "Вы легли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Вы легли "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseAor": "ξάπλωσ<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξάπλωσαν / ξαπλώσαν / ξαπλώσανε",
        "translation": "Они легли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Они легли "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseAor": "ξάπλωσ<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "υπέθεσα",
        "translation": "Я предположил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Я предположил "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "υπέθεσ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υπέθεσες",
        "translation": "Ты предположил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Ты предположил "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "υπέθεσ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υπέθεσε",
        "translation": "Она предположила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Она предположила "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "υπέθεσ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υποθέσαμε",
        "translation": "Мы предположили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Мы предположили "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "υπέθεσ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υποθέσατε",
        "translation": "Вы предположили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Вы предположили "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "υπέθεσ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υπέθεσαν / υποθέσαν / υποθέσανε",
        "translation": "Они предположили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Они предположили "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "υπέθεσ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "ξέχασα",
        "translation": "Я забыл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Я забыл "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξέχασες",
        "translation": "Ты забыл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Ты забыл "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξέχασε",
        "translation": "Она забыла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Она забыла "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχάσαμε",
        "translation": "Мы забыли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Мы забыли "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχάσατε",
        "translation": "Вы забыли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Вы забыли "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξέχασαν / ξεχάσαν / ξεχάσανε",
        "translation": "Они забыли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Они забыли "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ονειρεύτηκα",
        "translation": "Мне приснилось ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Мне приснилось "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseAor": "ονειρεύτηκ<b>α</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρεύτηκες",
        "translation": "Тебе приснилось ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Тебе приснилось "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseAor": "ονειρεύτηκ<b>α</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρεύτηκε",
        "translation": "Ему приснилось ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Ему приснилось "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseAor": "ονειρεύτηκ<b>α</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρευτήκαμε",
        "translation": "Нам приснилось ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Нам приснилось "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseAor": "ονειρεύτηκ<b>α</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρευτήκατε",
        "translation": "Вам приснилось ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Вам приснилось "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseAor": "ονειρεύτηκ<b>α</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρεύτηκαν / ονειρευτήκαν / ονειρευτήκανε",
        "translation": "Им приснилось ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Им приснилось "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseAor": "ονειρεύτηκ<b>α</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "παρακάλεσα",
        "translation": "Я попросил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Я попросил "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "παρακάλεσες",
        "translation": "Ты попросил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Ты попросил "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "παρακάλεσε",
        "translation": "Она попросила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Она попросила "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλέσαμε",
        "translation": "Мы попросили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Мы попросили "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλέσατε",
        "translation": "Вы попросили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Вы попросили "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "παρακάλεσαν / παρακαλέσαν / παρακαλέσανε",
        "translation": "Они попросили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Они попросили "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseAor": "παρακάλεσ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "χρησιμοποίησα",
        "translation": "Я употребил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Я употребил "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseAor": "χρησιμοποίησ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποίησες",
        "translation": "Ты употребил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Ты употребил "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseAor": "χρησιμοποίησ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποίησε",
        "translation": "Он употребил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Он употребил "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseAor": "χρησιμοποίησ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιήσαμε",
        "translation": "Мы употребили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Мы употребили "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseAor": "χρησιμοποίησ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιήσατε",
        "translation": "Вы употребили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Вы употребили "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseAor": "χρησιμοποίησ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποίησαν / χρησιμοποιήσαν / χρησιμοποιήσανε",
        "translation": "Они употребили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Они употребили "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseAor": "χρησιμοποίησ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "πέρασα",
        "translation": "Я прошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Я прошёл "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "πέρασ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "πέρασες",
        "translation": "Ты прошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Ты прошёл "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "πέρασ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "πέρασε",
        "translation": "Она прошла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Она прошла "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "πέρασ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περάσαμε",
        "translation": "Мы прошли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Мы прошли "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "πέρασ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περάσατε",
        "translation": "Вы прошли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Вы прошли "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "πέρασ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "πέρασαν / περάσαν / περάσανε",
        "translation": "Они прошли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Они прошли "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "πέρασ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περπάτησα",
        "translation": "Я прогулялся ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Я прогулялся "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseAor": "περπάτησ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπάτησες",
        "translation": "Ты прогулялся ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Ты прогулялся "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseAor": "περπάτησ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπάτησε",
        "translation": "Он прогулялся ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Он прогулялся "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseAor": "περπάτησ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατήσαμε",
        "translation": "Мы прогулилсь ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Мы прогулилсь "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseAor": "περπάτησ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατήσατε",
        "translation": "Вы прогулилсь ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Вы прогулилсь "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseAor": "περπάτησ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπάτησαν / περπατήσαν / περπατήσανε",
        "translation": "Они прогулилсь ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Они прогулилсь "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseAor": "περπάτησ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "ήπια",
        "translation": "Я выпил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Я выпил "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "ήπι<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "ήπιες",
        "translation": "Ты выпил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Ты выпил "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "ήπι<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "ήπιε",
        "translation": "Она выпила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Она выпила "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "ήπι<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "ήπιαμε",
        "translation": "Мы выпили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Мы выпили "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "ήπι<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "ήπιατε",
        "translation": "Вы выпили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Вы выпили "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "ήπι<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "ήπιαν / ήπιανε",
        "translation": "Они выпили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Они выпили "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "ήπι<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "πήγα",
        "translation": "Я пошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Я пошёл "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseAor": "πήγ<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγες",
        "translation": "Ты пошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Ты пошёл "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseAor": "πήγ<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγε",
        "translation": "Он пошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Он пошёл "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseAor": "πήγ<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγαμε",
        "translation": "Мы пошли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Мы пошли "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseAor": "πήγ<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγατε",
        "translation": "Вы пошли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Вы пошли "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseAor": "πήγ<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγαν / πήγανε",
        "translation": "Они пошли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Они пошли "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseAor": "πήγ<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "έπλυνα",
        "translation": "Я помыл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Я помыл "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλυν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "έπλυνες",
        "translation": "Ты помыл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Ты помыл "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλυν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "έπλυνε",
        "translation": "Она помыла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Она помыла "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλυν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πλύναμε",
        "translation": "Мы помыли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Мы помыли "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλυν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πλύνατε",
        "translation": "Вы помыли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Вы помыли "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλυν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "έπλυναν / πλύναν / πλύνανε",
        "translation": "Они помыли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Они помыли "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλυν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πούλησα",
        "translation": "Я продал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Я продал "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseAor": "πούλησ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "πούλησες",
        "translation": "Ты продал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Ты продал "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseAor": "πούλησ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "πούλησε",
        "translation": "Он продал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Он продал "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseAor": "πούλησ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "πουλήσαμε",
        "translation": "Мы продали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Мы продали "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseAor": "πούλησ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "πουλήσατε",
        "translation": "Вы продали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Вы продали "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseAor": "πούλησ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "πούλησαν / πουλήσαν / πουλήσανε",
        "translation": "Они продали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Они продали "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseAor": "πούλησ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "προτίμησα",
        "translation": "Я предпочёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Я предпочёл "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseAor": "προτίμησ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτίμησες",
        "translation": "Ты предпочёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Ты предпочёл "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseAor": "προτίμησ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτίμησε",
        "translation": "Он предпочёл ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Он предпочёл "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseAor": "προτίμησ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμήσαμε",
        "translation": "Мы предпочли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Мы предпочли "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseAor": "προτίμησ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμήσατε",
        "translation": "Вы предпочли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Вы предпочли "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseAor": "προτίμησ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτίμησαν / προτιμήσαν / προτιμήσανε",
        "translation": "Они предпочли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Они предпочли "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseAor": "προτίμησ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "πρότεινα",
        "translation": "Я предложил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Я предложил "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseAor": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "πρότεινες",
        "translation": "Ты предложил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Ты предложил "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseAor": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "πρότεινε",
        "translation": "Она предложила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Она предложила "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseAor": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "προτείναμε",
        "translation": "Мы предложили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Мы предложили "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseAor": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "προτείνατε",
        "translation": "Вы предложили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Вы предложили "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseAor": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "πρότειναν / προτείναν / προτείνανε",
        "translation": "Они предложили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Они предложили "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseAor": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "σηκώθηκα",
        "translation": "Я встал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Я встал "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseAor": "σηκώθηκ<b>α</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σηκώθηκες",
        "translation": "Ты встал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Ты встал "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseAor": "σηκώθηκ<b>α</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σηκώθηκε",
        "translation": "Он встал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Он встал "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseAor": "σηκώθηκ<b>α</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σηκωθήκαμε",
        "translation": "Мы встали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Мы встали "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseAor": "σηκώθηκ<b>α</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σηκωθήκατε",
        "translation": "Вы встали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Вы встали "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseAor": "σηκώθηκ<b>α</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σηκώθηκαν / σηκωθήκαν / σηκωθήκανε",
        "translation": "Они встали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Они встали "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseAor": "σηκώθηκ<b>α</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σκέφτηκα",
        "translation": "Я подумал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Я подумал "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseAor": "σκέφτηκ<b>α</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκέφτηκες",
        "translation": "Ты подумал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Ты подумал "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseAor": "σκέφτηκ<b>α</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκέφτηκε",
        "translation": "Она подумала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Она подумала "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseAor": "σκέφτηκ<b>α</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκεφτήκαμε",
        "translation": "Мы подумали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Мы подумали "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseAor": "σκέφτηκ<b>α</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκεφτήκατε",
        "translation": "Вы подумали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Вы подумали "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseAor": "σκέφτηκ<b>α</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκέφτηκαν / σκεφτήκαν / σκεφτήκανε",
        "translation": "Они подумали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Они подумали "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseAor": "σκέφτηκ<b>α</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "έστειλα",
        "translation": "Я отослал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Я отослал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστειλ<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "έστειλες",
        "translation": "Ты отослал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Ты отослал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστειλ<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "έστειλε",
        "translation": "Он отослал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Он отослал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστειλ<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "στείλαμε",
        "translation": "Мы отослали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Мы отослали "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστειλ<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "στείλατε",
        "translation": "Вы отослали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Вы отослали "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστειλ<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "έστειλαν / στείλαν / στείλανε",
        "translation": "Они отослали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Они отослали "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστειλ<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "συμφώνησα",
        "translation": "Я согласился ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Я согласился "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseAor": "συμφώνησ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφώνησες",
        "translation": "Ты согласился ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Ты согласился "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseAor": "συμφώνησ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφώνησε",
        "translation": "Она согласилась ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Она согласилась "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseAor": "συμφώνησ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνήσαμε",
        "translation": "Мы согласились ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Мы согласились "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseAor": "συμφώνησ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνήσατε",
        "translation": "Вы согласились ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Вы согласились "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseAor": "συμφώνησ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφώνησαν / συμφωνήσαν / συμφωνήσανε",
        "translation": "Они согласились ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Они согласились "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseAor": "συμφώνησ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συνάντησα",
        "translation": "Я встретил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Я встретил "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseAor": "συνάντησ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συνάντησες",
        "translation": "Ты встретил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Ты встретил "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseAor": "συνάντησ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συνάντησε",
        "translation": "Он встретил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Он встретил "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseAor": "συνάντησ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντήσαμε",
        "translation": "Мы встретили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Мы встретили "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseAor": "συνάντησ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντήσατε",
        "translation": "Вы встретили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Вы встретили "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseAor": "συνάντησ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συνάντησαν / συναντήσαν / συναντήσανε",
        "translation": "Они встретили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Они встретили "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseAor": "συνάντησ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "ταξίδεψα",
        "translation": "Я съездил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Я съездил "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseAor": "ταξίδεψ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξίδεψες",
        "translation": "Ты съездил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Ты съездил "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseAor": "ταξίδεψ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξίδεψε",
        "translation": "Она съездила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Она съездила "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseAor": "ταξίδεψ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξιδέψαμε",
        "translation": "Мы съездили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Мы съездили "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseAor": "ταξίδεψ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξιδέψατε",
        "translation": "Вы съездили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Вы съездили "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseAor": "ταξίδεψ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξίδεψαν / ταξιδέψαν / ταξιδέψανε",
        "translation": "Они съездили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Они съездили "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseAor": "ταξίδεψ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "τελείωσα",
        "translation": "Я закончил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Я закончил "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseAor": "τελείωσ<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελείωσες",
        "translation": "Ты закончил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Ты закончил "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseAor": "τελείωσ<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελείωσε",
        "translation": "Он закончил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Он закончил "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseAor": "τελείωσ<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελειώσαμε",
        "translation": "Мы закончили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Мы закончили "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseAor": "τελείωσ<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελειώσατε",
        "translation": "Вы закончили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Вы закончили "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseAor": "τελείωσ<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελείωσαν / τελειώσαν / τελειώσανε",
        "translation": "Они закончили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Они закончили "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseAor": "τελείωσ<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τηλεφώνησα",
        "translation": "Я позвонил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Я позвонил "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseAor": "τηλεφώνησ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφώνησες",
        "translation": "Ты позвонил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Ты позвонил "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseAor": "τηλεφώνησ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφώνησε",
        "translation": "Она позвонила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Она позвонила "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseAor": "τηλεφώνησ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνήσαμε",
        "translation": "Мы позвонили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Мы позвонили "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseAor": "τηλεφώνησ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνήσατε",
        "translation": "Вы позвонили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Вы позвонили "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseAor": "τηλεφώνησ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφώνησαν / τηλεφωνήσαν / τηλεφωνήσανε",
        "translation": "Они позвонили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Они позвонили "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseAor": "τηλεφώνησ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "έφαγα",
        "translation": "Я поел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Я поел "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "έφαγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "έφαγες",
        "translation": "Ты поел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Ты поел "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "έφαγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "έφαγε",
        "translation": "Он поел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Он поел "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "έφαγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "φάγαμε",
        "translation": "Мы поели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Мы поели "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "έφαγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "φάγατε",
        "translation": "Вы поели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Вы поели "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "έφαγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "έφαγαν / φάγανε",
        "translation": "Они поели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Они поели "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "έφαγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "υπήρξα",
        "translation": "Я был ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Я был "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "υπήρξ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπήρξες",
        "translation": "Ты был ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Ты был "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "υπήρξ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπήρξε",
        "translation": "Она была ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Она была "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "υπήρξ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπήρξαμε",
        "translation": "Мы были ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Мы были "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "υπήρξ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπήρξατε",
        "translation": "Вы были ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Вы были "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "υπήρξ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπήρξαν / υπήρξανε",
        "translation": "Они были ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Они были "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "υπήρξ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "φίλησα",
        "translation": "Я поцеловал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Я поцеловал "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseAor": "φίλησ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φίλησες",
        "translation": "Ты поцеловал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Ты поцеловал "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseAor": "φίλησ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φίλησε",
        "translation": "Он поцеловал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Он поцеловал "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseAor": "φίλησ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλήσαμε",
        "translation": "Мы поцеловали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Мы поцеловали "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseAor": "φίλησ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλήσατε",
        "translation": "Вы поцеловали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Вы поцеловали "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseAor": "φίλησ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φίλησαν / φιλήσαν / φιλήσανε",
        "translation": "Они поцеловали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Они поцеловали "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseAor": "φίλησ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "έφτασα",
        "translation": "Я добрался ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Я добрался "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseAor": "έφτασ<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "έφτασες",
        "translation": "Ты добрался ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Ты добрался "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseAor": "έφτασ<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "έφτασε",
        "translation": "Она добралась ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Она добралась "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseAor": "έφτασ<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "φτάσαμε",
        "translation": "Мы добрались ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Мы добрались "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseAor": "έφτασ<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "φτάσατε",
        "translation": "Вы добрались ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Вы добрались "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseAor": "έφτασ<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "έφτασαν / φτάσαν / φτάσανε",
        "translation": "Они добрались ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Они добрались "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseAor": "έφτασ<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "χάρηκα",
        "translation": "Я порадовался ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Я порадовался "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseAor": "χάρηκ<b>α</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χάρηκες",
        "translation": "Ты порадовался ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Ты порадовался "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseAor": "χάρηκ<b>α</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χάρηκε",
        "translation": "Он порадовался ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Он порадовался "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseAor": "χάρηκ<b>α</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χαρήκαμε",
        "translation": "Мы порадовались ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Мы порадовались "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseAor": "χάρηκ<b>α</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χαρήκατε",
        "translation": "Вы порадовались ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Вы порадовались "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseAor": "χάρηκ<b>α</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χάρηκαν / χαρήκαν / χαρήκανε",
        "translation": "Они порадовались ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Они порадовались "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseAor": "χάρηκ<b>α</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χαλάρωσα",
        "translation": "Я расслабился ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Я расслабился "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseAor": "χαλάρωσ<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλάρωσες",
        "translation": "Ты расслабился ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Ты расслабился "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseAor": "χαλάρωσ<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλάρωσε",
        "translation": "Она расслабилась ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Она расслабилась "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseAor": "χαλάρωσ<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλαρώσαμε",
        "translation": "Мы расслабились ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Мы расслабились "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseAor": "χαλάρωσ<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλαρώσατε",
        "translation": "Вы расслабились ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Вы расслабились "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseAor": "χαλάρωσ<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλάρωσαν / χαλαρώσαν / χαλαρώσανε",
        "translation": "Они расслабились ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Они расслабились "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseAor": "χαλάρωσ<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "έχασα",
        "translation": "Я потерял ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Я потерял "
        ],
        "transls": [
            "χάνω"
        ],
        "baseAor": "έχασ<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "έχασες",
        "translation": "Ты потерял ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Ты потерял "
        ],
        "transls": [
            "χάνω"
        ],
        "baseAor": "έχασ<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "έχασε",
        "translation": "Он потерял ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Он потерял "
        ],
        "transls": [
            "χάνω"
        ],
        "baseAor": "έχασ<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χάσαμε",
        "translation": "Мы потеряли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Мы потеряли "
        ],
        "transls": [
            "χάνω"
        ],
        "baseAor": "έχασ<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χάσατε",
        "translation": "Вы потеряли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Вы потеряли "
        ],
        "transls": [
            "χάνω"
        ],
        "baseAor": "έχασ<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "έχασαν / χάσαν / χάσανε",
        "translation": "Они потеряли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Они потеряли "
        ],
        "transls": [
            "χάνω"
        ],
        "baseAor": "έχασ<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χόρεψα",
        "translation": "Я станцевал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Я станцевал "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseAor": "χόρεψ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "χόρεψες",
        "translation": "Ты станцевал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Ты станцевал "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseAor": "χόρεψ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "χόρεψε",
        "translation": "Она станцевала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Она станцевала "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseAor": "χόρεψ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "χορέψαμε",
        "translation": "Мы станцевали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Мы станцевали "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseAor": "χόρεψ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "χορέψατε",
        "translation": "Вы станцевали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Вы станцевали "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseAor": "χόρεψ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "χόρεψαν / χορέψαν / χορέψανε",
        "translation": "Они станцевали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Они станцевали "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseAor": "χόρεψ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "βοήθησα / βόηθησα",
        "translation": "Я помог ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Я помог "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseAor": "βοήθησ<b>α</b>, βόηθησ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "βοήθησες / βόηθησες",
        "translation": "Ты помог ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Ты помог "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseAor": "βοήθησ<b>α</b>, βόηθησ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "βοήθησε / βόηθησε",
        "translation": "Она помогла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Она помогла "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseAor": "βοήθησ<b>α</b>, βόηθησ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθήσαμε",
        "translation": "Мы помогли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Мы помогли "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseAor": "βοήθησ<b>α</b>, βόηθησ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθήσατε",
        "translation": "Вы помогли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Вы помогли "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseAor": "βοήθησ<b>α</b>, βόηθησ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "βοήθησαν / βοηθήσαν / βοηθήσανε",
        "translation": "Они помогли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Они помогли "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseAor": "βοήθησ<b>α</b>, βόηθησ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "δούλεψα",
        "translation": "Я сработал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Я сработал "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseAor": "δούλεψ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "δούλεψες",
        "translation": "Ты сработал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Ты сработал "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseAor": "δούλεψ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "δούλεψε",
        "translation": "Он сработал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Он сработал "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseAor": "δούλεψ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "δουλέψαμε",
        "translation": "Мы сработали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Мы сработали "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseAor": "δούλεψ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "δουλέψατε",
        "translation": "Вы сработали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Вы сработали "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseAor": "δούλεψ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "δούλεψαν / δουλέψαν / δουλέψανε",
        "translation": "Они сработали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Они сработали "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseAor": "δούλεψ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "έφταιξα",
        "translation": "Я стал виноват ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Я стал виноват "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφταιξ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "έφταιξες",
        "translation": "Ты стал виноват ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Ты стал виноват "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφταιξ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "έφταιξε",
        "translation": "Она стала виновата ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Она стала виновата "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφταιξ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "φταίξαμε",
        "translation": "Мы стали виноваты ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Мы стали виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφταιξ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "φταίξατε",
        "translation": "Вы стали виноваты ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Вы стали виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφταιξ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "έφταιξαν / φταίξαν / φταίξανε",
        "translation": "Они стали виноваты ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Они стали виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφταιξ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "ρώτησα",
        "translation": "Я спросил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Я спросил "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseAor": "ρώτησ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρώτησες",
        "translation": "Ты спросил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Ты спросил "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseAor": "ρώτησ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρώτησε",
        "translation": "Он спросил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Он спросил "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseAor": "ρώτησ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτήσαμε",
        "translation": "Мы спросили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Мы спросили "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseAor": "ρώτησ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτήσατε",
        "translation": "Вы спросили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Вы спросили "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseAor": "ρώτησ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρώτησαν / ρωτήσαν / ρωτήσανε",
        "translation": "Они спросили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Они спросили "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseAor": "ρώτησ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "μίλησα",
        "translation": "Я сказал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Я сказал "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseAor": "μίλησ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μίλησες",
        "translation": "Ты сказал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Ты сказал "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseAor": "μίλησ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μίλησε",
        "translation": "Она сказала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Она сказала "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseAor": "μίλησ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλήσαμε",
        "translation": "Мы сказали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Мы сказали "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseAor": "μίλησ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλήσατε",
        "translation": "Вы сказали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Вы сказали "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseAor": "μίλησ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μίλησαν / μιλήσαν / μιλήσανε",
        "translation": "Они сказали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Они сказали "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseAor": "μίλησ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "ζήτησα",
        "translation": "Я попросил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Я попросил "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseAor": "ζήτησ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζήτησες",
        "translation": "Ты попросил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Ты попросил "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseAor": "ζήτησ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζήτησε",
        "translation": "Он попросил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Он попросил "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseAor": "ζήτησ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητήσαμε",
        "translation": "Мы попросили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Мы попросили "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseAor": "ζήτησ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητήσατε",
        "translation": "Вы попросили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Вы попросили "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseAor": "ζήτησ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζήτησαν / ζητήσαν / ζητήσανε",
        "translation": "Они попросили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Они попросили "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseAor": "ζήτησ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "χτύπησα",
        "translation": "Я побил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Я побил "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseAor": "χτύπησ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτύπησες",
        "translation": "Ты побил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Ты побил "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseAor": "χτύπησ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτύπησε",
        "translation": "Она побила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Она побила "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseAor": "χτύπησ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπήσαμε",
        "translation": "Мы побили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Мы побили "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseAor": "χτύπησ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπήσατε",
        "translation": "Вы побили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Вы побили "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseAor": "χτύπησ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτύπησαν / χτυπήσαν / χτυπήσανε",
        "translation": "Они побили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Они побили "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseAor": "χτύπησ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "συγχώρησα",
        "translation": "Я простил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Я простил "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseAor": "συγχώρησ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "συγχώρησες",
        "translation": "Ты простил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Ты простил "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseAor": "συγχώρησ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "συγχώρησε",
        "translation": "Он простил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Он простил "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseAor": "συγχώρησ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρήσαμε",
        "translation": "Мы простили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Мы простили "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseAor": "συγχώρησ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρήσατε",
        "translation": "Вы простили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Вы простили "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseAor": "συγχώρησ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "συγχώρησαν / συγχωρήσαν / συγχωρήσανε",
        "translation": "Они простили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Они простили "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseAor": "συγχώρησ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "οδήγησα",
        "translation": "Я повёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Я повёл "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseAor": "οδήγησ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδήγησες",
        "translation": "Ты повёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Ты повёл "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseAor": "οδήγησ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδήγησε",
        "translation": "Она повела ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Она повела "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseAor": "οδήγησ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγήσαμε",
        "translation": "Мы повели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Мы повели "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseAor": "οδήγησ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγήσατε",
        "translation": "Вы повели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Вы повели "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseAor": "οδήγησ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδήγησαν / οδηγήσαν / οδηγήσανε",
        "translation": "Они повели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Они повели "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseAor": "οδήγησ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "κάθισα / έκατσα",
        "translation": "Я сел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Я сел "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseAor": "κάθισ<b>α</b>, έκατσ<b>α</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "κάθισες / έκατσες",
        "translation": "Ты сел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Ты сел "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseAor": "κάθισ<b>α</b>, έκατσ<b>α</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "κάθισε / έκατσε",
        "translation": "Он сел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Он сел "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseAor": "κάθισ<b>α</b>, έκατσ<b>α</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "καθίσαμε / κάτσαμε",
        "translation": "Мы сели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Мы сели "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseAor": "κάθισ<b>α</b>, έκατσ<b>α</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "καθίσατε / κάτσατε",
        "translation": "Вы сели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Вы сели "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseAor": "κάθισ<b>α</b>, έκατσ<b>α</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "κάθισαν / καθίσανε / έκατσαν / κάτσανε / καθίσαν / κάτσαν",
        "translation": "Они сели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Они сели "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseAor": "κάθισ<b>α</b>, έκατσ<b>α</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "τραγούδησα",
        "translation": "Я спел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Я спел "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseAor": "τραγούδησ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "τραγούδησες",
        "translation": "Ты спел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Ты спел "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseAor": "τραγούδησ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "τραγούδησε",
        "translation": "Он спел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Он спел "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseAor": "τραγούδησ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδήσαμε",
        "translation": "Мы спели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Мы спели "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseAor": "τραγούδησ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδήσατε",
        "translation": "Вы спели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Вы спели "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseAor": "τραγούδησ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "τραγούδησαν / τραγουδήσανε / τραγουδήσαν",
        "translation": "Они спели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Они спели "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseAor": "τραγούδησ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "σεβάστηκα",
        "translation": "Я почтил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Я почтил "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseAor": "σεβάστηκ<b>α</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "σεβάστηκες",
        "translation": "Ты почтил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Ты почтил "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseAor": "σεβάστηκ<b>α</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "σεβάστηκε",
        "translation": "Он почтил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Он почтил "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseAor": "σεβάστηκ<b>α</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "σεβαστήκαμε",
        "translation": "Мы почтили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Мы почтили "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseAor": "σεβάστηκ<b>α</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "σεβαστήκατε",
        "translation": "Вы почтили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Вы почтили "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseAor": "σεβάστηκ<b>α</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "σεβάστηκαν / σεβαστήκαν / σεβαστήκανε",
        "translation": "Они почтили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Они почтили "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseAor": "σεβάστηκ<b>α</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "θυμήθηκα",
        "translation": "Я запомнил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Я запомнил "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseAor": "θυμήθηκ<b>α</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "θυμήθηκες",
        "translation": "Ты запомнил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Ты запомнил "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseAor": "θυμήθηκ<b>α</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "θυμήθηκε",
        "translation": "Она запомнила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Она запомнила "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseAor": "θυμήθηκ<b>α</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "θυμηθήκαμε",
        "translation": "Мы запомнили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Мы запомнили "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseAor": "θυμήθηκ<b>α</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "θυμηθήκατε",
        "translation": "Вы запомнили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Вы запомнили "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseAor": "θυμήθηκ<b>α</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "θυμήθηκαν / θυμηθήκαν / θυμηθήκανε",
        "translation": "Они запомнили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Они запомнили "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseAor": "θυμήθηκ<b>α</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "φοβήθηκα",
        "translation": "Я побоялся ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Я побоялся "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseAor": "φοβήθηκ<b>α</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "φοβήθηκες",
        "translation": "Ты побоялся ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Ты побоялся "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseAor": "φοβήθηκ<b>α</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "φοβήθηκε",
        "translation": "Он побоялся ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Он побоялся "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseAor": "φοβήθηκ<b>α</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "φοβηθήκαμε",
        "translation": "Мы побоялись ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Мы побоялись "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseAor": "φοβήθηκ<b>α</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "φοβηθήκατε",
        "translation": "Вы побоялись ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Вы побоялись "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseAor": "φοβήθηκ<b>α</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "φοβήθηκαν / φοβηθήκαν / φοβηθήκανε",
        "translation": "Они побоялись ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Они побоялись "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseAor": "φοβήθηκ<b>α</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "λυπήθηκα",
        "translation": "Я пожалел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Я пожалел "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseAor": "λυπήθηκ<b>α</b>",
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπήθηκες",
        "translation": "Ты пожалел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Ты пожалел "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseAor": "λυπήθηκ<b>α</b>",
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπήθηκε",
        "translation": "Она пожалела ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Она пожалела "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseAor": "λυπήθηκ<b>α</b>",
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπηθήκαμε",
        "translation": "Мы пожалели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Мы пожалели "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseAor": "λυπήθηκ<b>α</b>",
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπηθήκατε",
        "translation": "Вы пожалели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Вы пожалели "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseAor": "λυπήθηκ<b>α</b>",
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπήθηκαν / λυπηθήκαν / λυπηθήκανε",
        "translation": "Они пожалели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Они пожалели "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseAor": "λυπήθηκ<b>α</b>",
        "unicTransl": "жалеть"
    }
]
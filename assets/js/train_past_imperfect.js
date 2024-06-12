//Массив с титулами таблицы и массив объектов с данными.

const tableTitlesArr = [{title: "Глагол", place: "base"}, {title: "Имперфект", place: "baseImp"}, {title: "Перевод", place: "unicTransl"}];
const globalArray =
[
    {
        "word": "αγόραζα",
        "translation": "Я покупал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Я покупал "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseImp": "αγόραζ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "αγόραζες",
        "translation": "Ты покупал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Ты покупал "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseImp": "αγόραζ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "αγόραζε",
        "translation": "Она покупал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Она покупал "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseImp": "αγόραζ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "αγοράζαμε",
        "translation": "Мы покупали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Мы покупали "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseImp": "αγόραζ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "αγοράζατε",
        "translation": "Вы покупали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Вы покупали "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseImp": "αγόραζ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "αγόραζαν / αγοράζαν / αγοράζανε",
        "translation": "Они покупали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Они покупали "
        ],
        "transls": [
            "αγοράζω"
        ],
        "baseImp": "αγόραζ<b>α</b>",
        "unicTransl": "покупать"
    },
    {
        "word": "άκουγα",
        "translation": "Я слушал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Я слушал "
        ],
        "transls": [
            "ακούω"
        ],
        "baseImp": "άκουγ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "άκουγες",
        "translation": "Ты слушал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Ты слушал "
        ],
        "transls": [
            "ακούω"
        ],
        "baseImp": "άκουγ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "άκουγε",
        "translation": "Он слушал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Он слушал "
        ],
        "transls": [
            "ακούω"
        ],
        "baseImp": "άκουγ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "ακούγαμε",
        "translation": "Мы слушали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Мы слушали "
        ],
        "transls": [
            "ακούω"
        ],
        "baseImp": "άκουγ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "ακούγατε",
        "translation": "Вы слушали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Вы слушали "
        ],
        "transls": [
            "ακούω"
        ],
        "baseImp": "άκουγ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "άκουγαν / ακούγανε",
        "translation": "Они слушали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Они слушали "
        ],
        "transls": [
            "ακούω"
        ],
        "baseImp": "άκουγ<b>α</b>",
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "αγαπούσα / αγάπαγα",
        "translation": "Я любил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Я любил "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseImp": "αγαπούσ<b>α</b>, αγάπαγ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "αγαπούσες / αγάπαγες",
        "translation": "Ты любил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Ты любил "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseImp": "αγαπούσ<b>α</b>, αγάπαγ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "αγαπούσε / αγάπαγε",
        "translation": "Он любил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Он любил "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseImp": "αγαπούσ<b>α</b>, αγάπαγ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "αγαπούσαμε / αγαπάγαμε",
        "translation": "Мы любили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Мы любили "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseImp": "αγαπούσ<b>α</b>, αγάπαγ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "αγαπούσατε / αγαπάγατε",
        "translation": "Вы любили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Вы любили "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseImp": "αγαπούσ<b>α</b>, αγάπαγ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "αγαπούσαν / αγάπαγαν / αγαπάγανε / αγαπούσαν",
        "translation": "Они любили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Они любили "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "baseImp": "αγαπούσ<b>α</b>, αγάπαγ<b>α</b>",
        "unicTransl": "любить"
    },
    {
        "word": "απαντούσα",
        "translation": "Я отвечал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Я отвечал "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseImp": "απαντούσ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντούσες",
        "translation": "Ты отвечал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Ты отвечал "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseImp": "απαντούσ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντούσε",
        "translation": "Она отвечал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Она отвечал "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseImp": "απαντούσ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντούσαμε",
        "translation": "Мы отвечал ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Мы отвечал "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseImp": "απαντούσ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντούσατε",
        "translation": "Вы отвечал ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Вы отвечал "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseImp": "απαντούσ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντούσαν / απαντούσανε",
        "translation": "Они отвечал ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Они отвечал "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "baseImp": "απαντούσ<b>α</b>",
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "έπαιζα",
        "translation": "Я играл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Я играл "
        ],
        "transls": [
            "παίζω"
        ],
        "baseImp": "έπαιζ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "έπαιζες",
        "translation": "Ты играл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Ты играл "
        ],
        "transls": [
            "παίζω"
        ],
        "baseImp": "έπαιζ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "έπαιζε",
        "translation": "Он играл ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Он играл "
        ],
        "transls": [
            "παίζω"
        ],
        "baseImp": "έπαιζ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "παίζαμε",
        "translation": "Мы играли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Мы играли "
        ],
        "transls": [
            "παίζω"
        ],
        "baseImp": "έπαιζ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "παίζατε",
        "translation": "Вы играли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Вы играли "
        ],
        "transls": [
            "παίζω"
        ],
        "baseImp": "έπαιζ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "έπαιζαν / παίζαν / παίζανε",
        "translation": "Они играли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Они играли "
        ],
        "transls": [
            "παίζω"
        ],
        "baseImp": "έπαιζ<b>α</b>",
        "unicTransl": "играть"
    },
    {
        "word": "αργούσα",
        "translation": "Я опаздывал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Я опаздывал "
        ],
        "transls": [
            "αργώ"
        ],
        "baseImp": "αργούσ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργούσες",
        "translation": "Ты опаздывал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Ты опаздывал "
        ],
        "transls": [
            "αργώ"
        ],
        "baseImp": "αργούσ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργούσε",
        "translation": "Она опаздывала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Она опаздывала "
        ],
        "transls": [
            "αργώ"
        ],
        "baseImp": "αργούσ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργούσαμε",
        "translation": "Мы опаздывали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Мы опаздывали "
        ],
        "transls": [
            "αργώ"
        ],
        "baseImp": "αργούσ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργούσατε",
        "translation": "Вы опаздывали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Вы опаздывали "
        ],
        "transls": [
            "αργώ"
        ],
        "baseImp": "αργούσ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργούσαν / αργούσανε",
        "translation": "Они опаздывали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Они опаздывали "
        ],
        "transls": [
            "αργώ"
        ],
        "baseImp": "αργούσ<b>α</b>",
        "unicTransl": "опаздывать"
    },
    {
        "word": "άρεσα",
        "translation": "Я нравился ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Я нравился "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseImp": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "άρεσες",
        "translation": "Ты нравился ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Ты нравился "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseImp": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "άρεσε",
        "translation": "Он нравился ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Он нравился "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseImp": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "αρέσαμε",
        "translation": "Мы нравились ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Мы нравились "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseImp": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "αρέσατε",
        "translation": "Вы нравились ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Вы нравились "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseImp": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "άρεσαν / αρέσαν / αρέσανε",
        "translation": "Они нравились ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Они нравились "
        ],
        "transls": [
            "αρέσω"
        ],
        "baseImp": "άρεσ<b>α</b>",
        "unicTransl": "нравиться"
    },
    {
        "word": "αρρώσταινα",
        "translation": "Я болел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Я болел "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseImp": "αρρώσταιν<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "αρρώσταινες",
        "translation": "Ты болел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Ты болел "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseImp": "αρρώσταιν<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "αρρώσταινε",
        "translation": "Она болел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Она болел "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseImp": "αρρώσταιν<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "αρρωσταίναμε",
        "translation": "Мы болели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Мы болели "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseImp": "αρρώσταιν<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "αρρωσταίνατε",
        "translation": "Вы болели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Вы болели "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseImp": "αρρώσταιν<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "αρρώσταιναν / αρρωσταίνανε / αρρωσταίνανε",
        "translation": "Они болели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Они болели "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseImp": "αρρώσταιν<b>α</b>",
        "unicTransl": "болеть"
    },
    {
        "word": "έβαζα",
        "translation": "Я ставил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Я ставил "
        ],
        "transls": [
            "βάζω"
        ],
        "baseImp": "έβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "έβαζες",
        "translation": "Ты ставил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Ты ставил "
        ],
        "transls": [
            "βάζω"
        ],
        "baseImp": "έβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "έβαζε",
        "translation": "Он ставил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Он ставил "
        ],
        "transls": [
            "βάζω"
        ],
        "baseImp": "έβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "βάζαμε",
        "translation": "Мы ставили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Мы ставили "
        ],
        "transls": [
            "βάζω"
        ],
        "baseImp": "έβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "βάζατε",
        "translation": "Вы ставили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Вы ставили "
        ],
        "transls": [
            "βάζω"
        ],
        "baseImp": "έβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "έβαζαν / βάζαν / βάζανε",
        "translation": "Они ставили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Они ставили "
        ],
        "transls": [
            "βάζω"
        ],
        "baseImp": "έβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "έβγαινα",
        "translation": "Я выходил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Я выходил "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseImp": "έβγαιν<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "έβγαινες",
        "translation": "Ты выходил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Ты выходил "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseImp": "έβγαιν<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "έβγαινε",
        "translation": "Она выходила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Она выходила "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseImp": "έβγαιν<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "βγαίναμε",
        "translation": "Мы выходили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Мы выходили "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseImp": "έβγαιν<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "βγαίνατε",
        "translation": "Вы выходили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Вы выходили "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseImp": "έβγαιν<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "έβγαιναν / βγαίναν / βγαίνανε",
        "translation": "Они выходили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Они выходили "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseImp": "έβγαιν<b>α</b>",
        "unicTransl": "выходить"
    },
    {
        "word": "έβλεπα",
        "translation": "Я видел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Я видел "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseImp": "έβλεπ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "έβλεπες",
        "translation": "Ты видел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Ты видел "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseImp": "έβλεπ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "έβλεπε",
        "translation": "Он видел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Он видел "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseImp": "έβλεπ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "βλέπαμε",
        "translation": "Мы видели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Мы видели "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseImp": "έβλεπ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "βλέπατε",
        "translation": "Вы видели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Вы видели "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseImp": "έβλεπ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "έβλεπαν / βλέπαν / βλέπανε",
        "translation": "Они видели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Они видели "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseImp": "έβλεπ<b>α</b>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "γελούσα / γέλαγα",
        "translation": "Я смеялся ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Я смеялся "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseImp": "γελούσ<b>α</b>, γέλαγ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "γελούσες / γέλαγες",
        "translation": "Ты смеялся ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Ты смеялся "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseImp": "γελούσ<b>α</b>, γέλαγ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "γελούσε / γέλαγε",
        "translation": "Она смеялась ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Она смеялась "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseImp": "γελούσ<b>α</b>, γέλαγ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "γελούσαμε / γελάγαμε",
        "translation": "Мы смеялись ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Мы смеялись "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseImp": "γελούσ<b>α</b>, γέλαγ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "γελούσατε / γελάγατε",
        "translation": "Вы смеялись ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Вы смеялись "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseImp": "γελούσ<b>α</b>, γέλαγ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "γελούσαν / γέλαγαν / γελούσανε / γελάγανε",
        "translation": "Они смеялись ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Они смеялись "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "baseImp": "γελούσ<b>α</b>, γέλαγ<b>α</b>",
        "unicTransl": "смеяться"
    },
    {
        "word": "έγραφα",
        "translation": "Я писал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Я писал "
        ],
        "transls": [
            "γράφω"
        ],
        "baseImp": "έγραφ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "έγραφες",
        "translation": "Ты писал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Ты писал "
        ],
        "transls": [
            "γράφω"
        ],
        "baseImp": "έγραφ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "έγραφε",
        "translation": "Он писал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Он писал "
        ],
        "transls": [
            "γράφω"
        ],
        "baseImp": "έγραφ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "γράφαμε",
        "translation": "Мы писали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Мы писали "
        ],
        "transls": [
            "γράφω"
        ],
        "baseImp": "έγραφ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "γράφατε",
        "translation": "Вы писали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Вы писали "
        ],
        "transls": [
            "γράφω"
        ],
        "baseImp": "έγραφ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "έγραφαν / γράφαν / γράφανε",
        "translation": "Они писали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Они писали "
        ],
        "transls": [
            "γράφω"
        ],
        "baseImp": "έγραφ<b>α</b>",
        "unicTransl": "писать"
    },
    {
        "word": "διάβαζα",
        "translation": "Я читал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Я читал "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseImp": "διάβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "διάβαζες",
        "translation": "Ты читал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Ты читал "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseImp": "διάβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "διάβαζε",
        "translation": "Он читал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Он читал "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseImp": "διάβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "διαβάζαμε",
        "translation": "Мы читали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Мы читали "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseImp": "διάβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "διαβάζατε",
        "translation": "Вы читали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Вы читали "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseImp": "διάβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "διάβαζαν / διαβάζαν / διαβάζανε",
        "translation": "Они читали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Они читали "
        ],
        "transls": [
            "διαβάζω"
        ],
        "baseImp": "διάβαζ<b>α</b>",
        "unicTransl": "читать"
    },
    {
        "word": "έδινα",
        "translation": "Я давал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Я давал "
        ],
        "transls": [
            "δίνω"
        ],
        "baseImp": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "έδινες",
        "translation": "Ты давал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Ты давал "
        ],
        "transls": [
            "δίνω"
        ],
        "baseImp": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "έδινε",
        "translation": "Он давал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Он давал "
        ],
        "transls": [
            "δίνω"
        ],
        "baseImp": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "δίναμε",
        "translation": "Мы давали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Мы давали "
        ],
        "transls": [
            "δίνω"
        ],
        "baseImp": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "δίνατε",
        "translation": "Вы давали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Вы давали "
        ],
        "transls": [
            "δίνω"
        ],
        "baseImp": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "έδιναν / δίναν / δίνανε",
        "translation": "Они давали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Они давали "
        ],
        "transls": [
            "δίνω"
        ],
        "baseImp": "έδιν<b>α</b>",
        "unicTransl": "давать"
    },
    {
        "word": "ερχόμουν / ερχόμουνα",
        "translation": "Я приходил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Я приходил "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseImp": "ερχ<b>όμουν</b>, ερχ<b>όμουνα</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "ερχόσουν / ερχόσουνα",
        "translation": "Ты приходил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Ты приходил "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseImp": "ερχ<b>όμουν</b>, ερχ<b>όμουνα</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "ερχόταν / ερχότανε",
        "translation": "Она приходила ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Она приходила "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseImp": "ερχ<b>όμουν</b>, ερχ<b>όμουνα</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "ερχόμασταν / ερχόμαστε",
        "translation": "Мы приходил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Мы приходил "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseImp": "ερχ<b>όμουν</b>, ερχ<b>όμουνα</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "ερχόσασταν / ερχόσαστε",
        "translation": "Вы приходил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Вы приходил "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseImp": "ερχ<b>όμουν</b>, ερχ<b>όμουνα</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "έρχονταν / ερχόντουσαν",
        "translation": "Они приходил ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Они приходил "
        ],
        "transls": [
            "έρχομαι"
        ],
        "baseImp": "ερχ<b>όμουν</b>, ερχ<b>όμουνα</b>",
        "unicTransl": "приходить, настать"
    },
    {
        "word": "εξηγούσα",
        "translation": "Я объяснял ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Я объяснял "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseImp": "εξηγούσ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγούσες",
        "translation": "Ты объяснял ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Ты объяснял "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseImp": "εξηγούσ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγούσε",
        "translation": "Он объяснял ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Он объяснял "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseImp": "εξηγούσ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγούσαμε",
        "translation": "Мы объясняли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Мы объясняли "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseImp": "εξηγούσ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγούσατε",
        "translation": "Вы объясняли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Вы объясняли "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseImp": "εξηγούσ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγούσαν / εξηγούσανε",
        "translation": "Они объясняли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Они объясняли "
        ],
        "transls": [
            "εξηγώ"
        ],
        "baseImp": "εξηγούσ<b>α</b>",
        "unicTransl": "объяснять"
    },
    {
        "word": "είχα",
        "translation": "У меня был ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У меня был "
        ],
        "transls": [
            "έχω"
        ],
        "baseImp": "είχ<b>α</b>",
        "unicTransl": "иметь"
    },
    {
        "word": "είχες",
        "translation": "У тебя был ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У тебя был "
        ],
        "transls": [
            "έχω"
        ],
        "baseImp": "είχ<b>α</b>",
        "unicTransl": "иметь"
    },
    {
        "word": "είχε",
        "translation": "У неё был ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У неё был "
        ],
        "transls": [
            "έχω"
        ],
        "baseImp": "είχ<b>α</b>",
        "unicTransl": "иметь"
    },
    {
        "word": "είχαμε",
        "translation": "У нас был ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У нас был "
        ],
        "transls": [
            "έχω"
        ],
        "baseImp": "είχ<b>α</b>",
        "unicTransl": "иметь"
    },
    {
        "word": "είχατε",
        "translation": "У вас был ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У вас был "
        ],
        "transls": [
            "έχω"
        ],
        "baseImp": "είχ<b>α</b>",
        "unicTransl": "иметь"
    },
    {
        "word": "είχαν / είχανε",
        "translation": "У них был ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У них был "
        ],
        "transls": [
            "έχω"
        ],
        "baseImp": "είχ<b>α</b>",
        "unicTransl": "иметь"
    },
    {
        "word": "έφερα",
        "translation": "Я носил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Я носил "
        ],
        "transls": [
            "φέρω"
        ],
        "baseImp": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "έφερες",
        "translation": "Ты носил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Ты носил "
        ],
        "transls": [
            "φέρω"
        ],
        "baseImp": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "έφερε",
        "translation": "Он носил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Он носил "
        ],
        "transls": [
            "φέρω"
        ],
        "baseImp": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "φέραμε",
        "translation": "Мы носили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Мы носили "
        ],
        "transls": [
            "φέρω"
        ],
        "baseImp": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "φέρατε",
        "translation": "Вы носили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Вы носили "
        ],
        "transls": [
            "φέρω"
        ],
        "baseImp": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "έφεραν / φέραν / φέρανε",
        "translation": "Они носили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Они носили "
        ],
        "transls": [
            "φέρω"
        ],
        "baseImp": "έφερ<b>α</b>",
        "unicTransl": "приносить"
    },
    {
        "word": "ήθελα",
        "translation": "Я хотел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Я хотел "
        ],
        "transls": [
            "θέλω"
        ],
        "baseImp": "ήθελ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "ήθελες",
        "translation": "Ты хотел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Ты хотел "
        ],
        "transls": [
            "θέλω"
        ],
        "baseImp": "ήθελ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "ήθελε",
        "translation": "Она хотел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Она хотел "
        ],
        "transls": [
            "θέλω"
        ],
        "baseImp": "ήθελ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλαμε",
        "translation": "Мы хотел ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Мы хотел "
        ],
        "transls": [
            "θέλω"
        ],
        "baseImp": "ήθελ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλατε",
        "translation": "Вы хотел ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Вы хотел "
        ],
        "transls": [
            "θέλω"
        ],
        "baseImp": "ήθελ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "ήθελαν / θέλαν / θέλανε",
        "translation": "Они хотел ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Они хотел "
        ],
        "transls": [
            "θέλω"
        ],
        "baseImp": "ήθελ<b>α</b>",
        "unicTransl": "хотеть"
    },
    {
        "word": "θεωρούσα",
        "translation": "Я полагал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Я полагал "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseImp": "θεωρούσ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρούσες",
        "translation": "Ты полагал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Ты полагал "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseImp": "θεωρούσ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρούσε",
        "translation": "Он полагал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Он полагал "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseImp": "θεωρούσ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρούσαμε",
        "translation": "Мы полагали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Мы полагали "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseImp": "θεωρούσ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρούσατε",
        "translation": "Вы полагали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Вы полагали "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseImp": "θεωρούσ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρούσαν / θεωρούσανε",
        "translation": "Они полагали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Они полагали "
        ],
        "transls": [
            "θεωρώ"
        ],
        "baseImp": "θεωρούσ<b>α</b>",
        "unicTransl": "считать, думать"
    },
    {
        "word": "καλούσα",
        "translation": "Я звал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Я звал "
        ],
        "transls": [
            "καλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "καλούσες",
        "translation": "Ты звал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Ты звал "
        ],
        "transls": [
            "καλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "καλούσε",
        "translation": "Она звала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Она звала "
        ],
        "transls": [
            "καλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "καλούσαμε",
        "translation": "Мы звали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Мы звали "
        ],
        "transls": [
            "καλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "καλούσατε",
        "translation": "Вы звали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Вы звали "
        ],
        "transls": [
            "καλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "καλούσαν / καλούσανε",
        "translation": "Они звали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Они звали "
        ],
        "transls": [
            "καλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "κάπνιζα",
        "translation": "Я курил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Я курил "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseImp": "κάπνιζ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "κάπνιζες",
        "translation": "Ты курил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Ты курил "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseImp": "κάπνιζ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "κάπνιζε",
        "translation": "Он курил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Он курил "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseImp": "κάπνιζ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "καπνίζαμε",
        "translation": "Мы курили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Мы курили "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseImp": "κάπνιζ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "καπνίζατε",
        "translation": "Вы курили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Вы курили "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseImp": "κάπνιζ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "κάπνιζαν / καπνίζαν / καπνίζανε",
        "translation": "Они курили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Они курили "
        ],
        "transls": [
            "καπνίζω"
        ],
        "baseImp": "κάπνιζ<b>α</b>",
        "unicTransl": "курить"
    },
    {
        "word": "έκανα",
        "translation": "Я делал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Я делал "
        ],
        "transls": [
            "κάνω"
        ],
        "baseImp": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "έκανες",
        "translation": "Ты делал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Ты делал "
        ],
        "transls": [
            "κάνω"
        ],
        "baseImp": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "έκανε",
        "translation": "Она делала ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Она делала "
        ],
        "transls": [
            "κάνω"
        ],
        "baseImp": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "κάναμε",
        "translation": "Мы делали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Мы делали "
        ],
        "transls": [
            "κάνω"
        ],
        "baseImp": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "κάνατε",
        "translation": "Вы делали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Вы делали "
        ],
        "transls": [
            "κάνω"
        ],
        "baseImp": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "έκαναν / κάναν / κάνανε",
        "translation": "Они делали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Они делали "
        ],
        "transls": [
            "κάνω"
        ],
        "baseImp": "έκαν<b>α</b>",
        "unicTransl": "делать"
    },
    {
        "word": "καταλάβαινα",
        "translation": "Я понимал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Я понимал "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseImp": "καταλάβαιν<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "καταλάβαινες",
        "translation": "Ты понимал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Ты понимал "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseImp": "καταλάβαιν<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "καταλάβαινε",
        "translation": "Он понимал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Он понимал "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseImp": "καταλάβαιν<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "καταλαβαίναμε",
        "translation": "Мы понимали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Мы понимали "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseImp": "καταλάβαιν<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "καταλαβαίνατε",
        "translation": "Вы понимали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Вы понимали "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseImp": "καταλάβαιν<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "καταλάβαιναν / καταλαβαίναν / καταλαβαίνανε",
        "translation": "Они понимали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Они понимали "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseImp": "καταλάβαιν<b>α</b>",
        "unicTransl": "понимать"
    },
    {
        "word": "κοιμόμουν / κοιμόμουνα",
        "translation": "Я спал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Я спал "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseImp": "κοιμ<b>όμουν</b>, κοιμ<b>όμουνα</b>",
        "unicTransl": "спать"
    },
    {
        "word": "κοιμόσουν / κοιμόσουνα",
        "translation": "Ты спал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Ты спал "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseImp": "κοιμ<b>όμουν</b>, κοιμ<b>όμουνα</b>",
        "unicTransl": "спать"
    },
    {
        "word": "κοιμόταν / κοιμότανε",
        "translation": "Она спала ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Она спала "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseImp": "κοιμ<b>όμουν</b>, κοιμ<b>όμουνα</b>",
        "unicTransl": "спать"
    },
    {
        "word": "κοιμόμαστε / κοιμόμασταν",
        "translation": "Мы спали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Мы спали "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseImp": "κοιμ<b>όμουν</b>, κοιμ<b>όμουνα</b>",
        "unicTransl": "спать"
    },
    {
        "word": "κοιμόσαστε / κοιμόσασταν",
        "translation": "Вы спали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Вы спали "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseImp": "κοιμ<b>όμουν</b>, κοιμ<b>όμουνα</b>",
        "unicTransl": "спать"
    },
    {
        "word": "κοιμούντανε",
        "translation": "Они спали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Они спали "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "baseImp": "κοιμ<b>όμουν</b>, κοιμ<b>όμουνα</b>",
        "unicTransl": "спать"
    },
    {
        "word": "έκλαιγα",
        "translation": "Я плакал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Я плакал "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseImp": "έκλαιγ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "έκλαιγες",
        "translation": "Ты плакал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Ты плакал "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseImp": "έκλαιγ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "έκλαιγε",
        "translation": "Он плакал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Он плакал "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseImp": "έκλαιγ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "κλαίγαμε",
        "translation": "Мы плакали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Мы плакали "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseImp": "έκλαιγ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "κλαίγατε",
        "translation": "Вы плакали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Вы плакали "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseImp": "έκλαιγ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "έκλαιγαν / κλαίγανε",
        "translation": "Они плакали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Они плакали "
        ],
        "transls": [
            "κλαίω"
        ],
        "baseImp": "έκλαιγ<b>α</b>",
        "unicTransl": "плакать"
    },
    {
        "word": "κολυμπούσα / κολύμπαγα",
        "translation": "Я плавал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Я плавал "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseImp": "κολυμπούσ<b>α</b>, κολύμπαγ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπούσες / κολύμπαγες",
        "translation": "Ты плавал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Ты плавал "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseImp": "κολυμπούσ<b>α</b>, κολύμπαγ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπούσε / κολύμπαγε",
        "translation": "Она плавала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Она плавала "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseImp": "κολυμπούσ<b>α</b>, κολύμπαγ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπούσαμε / κολυμπάγαμε",
        "translation": "Мы плавали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Мы плавали "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseImp": "κολυμπούσ<b>α</b>, κολύμπαγ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπούσατε / κολυμπάγατε",
        "translation": "Вы плавали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Вы плавали "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseImp": "κολυμπούσ<b>α</b>, κολύμπαγ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπούσαν / κολύμπαγαν / κολυμπούσανε / κολυμπάγανε",
        "translation": "Они плавали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Они плавали "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "baseImp": "κολυμπούσ<b>α</b>, κολύμπαγ<b>α</b>",
        "unicTransl": "плавать"
    },
    {
        "word": "έλεγα",
        "translation": "Я говорил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Я говорил "
        ],
        "transls": [
            "λέω"
        ],
        "baseImp": "έλεγ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "έλεγες",
        "translation": "Ты говорил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Ты говорил "
        ],
        "transls": [
            "λέω"
        ],
        "baseImp": "έλεγ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "έλεγε",
        "translation": "Она говорила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Она говорила "
        ],
        "transls": [
            "λέω"
        ],
        "baseImp": "έλεγ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "λέγαμε",
        "translation": "Мы говорили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Мы говорили "
        ],
        "transls": [
            "λέω"
        ],
        "baseImp": "έλεγ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "λέγατε",
        "translation": "Вы говорили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Вы говорили "
        ],
        "transls": [
            "λέω"
        ],
        "baseImp": "έλεγ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "έλεγαν / λέγανε",
        "translation": "Они говорили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Они говорили "
        ],
        "transls": [
            "λέω"
        ],
        "baseImp": "έλεγ<b>α</b>",
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "μαγείρευα",
        "translation": "Я готовил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Я готовил "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseImp": "μαγείρευ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγείρευες",
        "translation": "Ты готовил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Ты готовил "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseImp": "μαγείρευ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγείρευε",
        "translation": "Он готовил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Он готовил "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseImp": "μαγείρευ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγειρεύαμε",
        "translation": "Мы готовили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Мы готовили "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseImp": "μαγείρευ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγειρεύατε",
        "translation": "Вы готовили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Вы готовили "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseImp": "μαγείρευ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγείρευαν / μαγειρεύαν / μαγειρεύανε",
        "translation": "Они готовили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Они готовили "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "baseImp": "μαγείρευ<b>α</b>",
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μάθαινα",
        "translation": "Я учил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Я учил "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseImp": "μάθαιν<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μάθαινες",
        "translation": "Ты учил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Ты учил "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseImp": "μάθαιν<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μάθαινε",
        "translation": "Она учил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Она учил "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseImp": "μάθαιν<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μαθαίναμε",
        "translation": "Мы учили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Мы учили "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseImp": "μάθαιν<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μαθαίνατε",
        "translation": "Вы учили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Вы учили "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseImp": "μάθαιν<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μάθαιναν / μαθαίναν / μαθαίνανε",
        "translation": "Они учили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Они учили "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseImp": "μάθαιν<b>α</b>",
        "unicTransl": "учить, учиться"
    },
    {
        "word": "έμενα",
        "translation": "Я проживал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Я проживал "
        ],
        "transls": [
            "μένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "έμενες",
        "translation": "Ты проживал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Ты проживал "
        ],
        "transls": [
            "μένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "έμενε",
        "translation": "Он проживал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Он проживал "
        ],
        "transls": [
            "μένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "μέναμε",
        "translation": "Мы проживали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Мы проживали "
        ],
        "transls": [
            "μένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "μένατε",
        "translation": "Вы проживали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Вы проживали "
        ],
        "transls": [
            "μένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "έμεναν / μέναν / μένανε",
        "translation": "Они проживали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Они проживали "
        ],
        "transls": [
            "μένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "μετέφραζα",
        "translation": "Я переводил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Я переводил "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseImp": "μετέφραζ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μετέφραζες",
        "translation": "Ты переводил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Ты переводил "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseImp": "μετέφραζ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μετέφραζε",
        "translation": "Она переводила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Она переводила "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseImp": "μετέφραζ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μεταφράζαμε",
        "translation": "Мы переводили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Мы переводили "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseImp": "μετέφραζ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μεταφράζατε",
        "translation": "Вы переводили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Вы переводили "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseImp": "μετέφραζ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μετέφραζαν / μεταφράζαν / μεταφράζανε",
        "translation": "Они переводили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Они переводили "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseImp": "μετέφραζ<b>α</b>",
        "unicTransl": "переводить"
    },
    {
        "word": "μισούσα",
        "translation": "Я ненавидел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Я ненавидел "
        ],
        "transls": [
            "μισώ"
        ],
        "baseImp": "μισούσ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισούσες",
        "translation": "Ты ненавидел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Ты ненавидел "
        ],
        "transls": [
            "μισώ"
        ],
        "baseImp": "μισούσ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισούσε",
        "translation": "Он ненавидел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Он ненавидел "
        ],
        "transls": [
            "μισώ"
        ],
        "baseImp": "μισούσ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισούσαμε",
        "translation": "Мы ненавидели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Мы ненавидели "
        ],
        "transls": [
            "μισώ"
        ],
        "baseImp": "μισούσ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισούσατε",
        "translation": "Вы ненавидели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Вы ненавидели "
        ],
        "transls": [
            "μισώ"
        ],
        "baseImp": "μισούσ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισούσαν / μισούσανε",
        "translation": "Они ненавидели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Они ненавидели "
        ],
        "transls": [
            "μισώ"
        ],
        "baseImp": "μισούσ<b>α</b>",
        "unicTransl": "ненавидеть"
    },
    {
        "word": "έμπαινα",
        "translation": "Я входил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Я входил "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseImp": "έμπαιν<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "έμπαινες",
        "translation": "Ты входил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Ты входил "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseImp": "έμπαιν<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "έμπαινε",
        "translation": "Она входила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Она входила "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseImp": "έμπαιν<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "μπαίναμε",
        "translation": "Мы входили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Мы входили "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseImp": "έμπαιν<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "μπαίνατε",
        "translation": "Вы входили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Вы входили "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseImp": "έμπαιν<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "έμπαιναν / μπαίναν / μπαίνανε",
        "translation": "Они входили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Они входили "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseImp": "έμπαιν<b>α</b>",
        "unicTransl": "входить"
    },
    {
        "word": "μπορούσα",
        "translation": "Я мог ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Я мог "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseImp": "μπορούσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "μπορούσες",
        "translation": "Ты мог ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Ты мог "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseImp": "μπορούσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "μπορούσε",
        "translation": "Он мог ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Он мог "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseImp": "μπορούσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "μπορούσαμε",
        "translation": "Мы могли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Мы могли "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseImp": "μπορούσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "μπορούσατε",
        "translation": "Вы могли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Вы могли "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseImp": "μπορούσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "μπορούσαν / μπορούσανε",
        "translation": "Они могли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Они могли "
        ],
        "transls": [
            "μπορώ"
        ],
        "baseImp": "μπορούσ<b>α</b>",
        "unicTransl": "мочь"
    },
    {
        "word": "ξάπλωνα",
        "translation": "Я лежал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Я лежал "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseImp": "ξάπλων<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξάπλωνες",
        "translation": "Ты лежал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Ты лежал "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseImp": "ξάπλων<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξάπλωνε",
        "translation": "Она лежала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Она лежала "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseImp": "ξάπλων<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξαπλώναμε",
        "translation": "Мы лежали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Мы лежали "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseImp": "ξάπλων<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξαπλώνατε",
        "translation": "Вы лежали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Вы лежали "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseImp": "ξάπλων<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξάπλωναν / ξαπλώναν / ξαπλώνανε",
        "translation": "Они лежали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Они лежали "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "baseImp": "ξάπλων<b>α</b>",
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ήξερα",
        "translation": "Я знал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Я знал "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseImp": "ήξερ<b>α</b>",
        "unicTransl": "знать"
    },
    {
        "word": "ήξερες",
        "translation": "Ты знал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Ты знал "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseImp": "ήξερ<b>α</b>",
        "unicTransl": "знать"
    },
    {
        "word": "ήξερε",
        "translation": "Он знал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Он знал "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseImp": "ήξερ<b>α</b>",
        "unicTransl": "знать"
    },
    {
        "word": "ξέραμε",
        "translation": "Мы знали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Мы знали "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseImp": "ήξερ<b>α</b>",
        "unicTransl": "знать"
    },
    {
        "word": "ξέρατε",
        "translation": "Вы знали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Вы знали "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseImp": "ήξερ<b>α</b>",
        "unicTransl": "знать"
    },
    {
        "word": "ήξεραν / ξέραν / ξέρανε",
        "translation": "Они знали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Они знали "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseImp": "ήξερ<b>α</b>",
        "unicTransl": "знать"
    },
    {
        "word": "ξεχνούσα",
        "translation": "Я забывал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Я забывал "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseImp": "ξεχνούσ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχνούσες",
        "translation": "Ты забывал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Ты забывал "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseImp": "ξεχνούσ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχνούσε",
        "translation": "Она забывала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Она забывала "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseImp": "ξεχνούσ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχνούσαμε",
        "translation": "Мы забывали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Мы забывали "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseImp": "ξεχνούσ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχνούσατε",
        "translation": "Вы забывали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Вы забывали "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseImp": "ξεχνούσ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχνούσαν / ξεχνούσανε",
        "translation": "Они забывали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Они забывали "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseImp": "ξεχνούσ<b>α</b>",
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ονειρευόμουν / ονειρευόμουνα",
        "translation": "Я мечтал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Я мечтал "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseImp": "ονειρευ<b>όμουν</b>, ονειρευ<b>όμουνα</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρευόσουνα",
        "translation": "Ты мечтал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Ты мечтал "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseImp": "ονειρευ<b>όμουν</b>, ονειρευ<b>όμουνα</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρευότανε",
        "translation": "Он мечтал ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Он мечтал "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseImp": "ονειρευ<b>όμουν</b>, ονειρευ<b>όμουνα</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρευόμαστε / ονειρευόμασταν",
        "translation": "Мы мечтали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Мы мечтали "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseImp": "ονειρευ<b>όμουν</b>, ονειρευ<b>όμουνα</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρευόσαστε / ονειρευόσασταν",
        "translation": "Вы мечтали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Вы мечтали "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseImp": "ονειρευ<b>όμουν</b>, ονειρευ<b>όμουνα</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρεύονταν / ονειρευόντουσαν",
        "translation": "Они мечтали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Они мечтали "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "baseImp": "ονειρευ<b>όμουν</b>, ονειρευ<b>όμουνα</b>",
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "παρακαλούσα / παρακάλαγα",
        "translation": "Я просил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Я просил "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλούσες / παρακάλαγες",
        "translation": "Ты просил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Ты просил "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλούσε / παρακάλαγε",
        "translation": "Она просила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Она просила "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλούσαμε / παρακαλάγαμε",
        "translation": "Мы просили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Мы просили "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλούσατε / παρακαλάγατε",
        "translation": "Вы просили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Вы просили "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλούσαν / παρακάλαγαν / παρακαλούσανε / παρακαλάγανε",
        "translation": "Они просили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Они просили "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "baseImp": "παρακαλούσ<b>α</b>, παρακάλαγ<b>α</b>",
        "unicTransl": "просить"
    },
    {
        "word": "περίμενα",
        "translation": "Я ждал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Я ждал "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "περίμενες",
        "translation": "Ты ждал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Ты ждал "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "περίμενε",
        "translation": "Он ждал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Он ждал "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "περιμέναμε",
        "translation": "Мы ждали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Мы ждали "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "περιμένατε",
        "translation": "Вы ждали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Вы ждали "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "περίμεναν / περιμέναν / περιμένανε",
        "translation": "Они ждали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Они ждали "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseImp": "περίμεν<b>α</b>",
        "unicTransl": "ждать"
    },
    {
        "word": "περνούσα / πέρναγα",
        "translation": "Я проходил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Я проходил "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseImp": "περνούσ<b>α</b>, πέρναγ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περνούσες / πέρναγες",
        "translation": "Ты проходил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Ты проходил "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseImp": "περνούσ<b>α</b>, πέρναγ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περνούσε / πέρναγε",
        "translation": "Она проходила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Она проходила "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseImp": "περνούσ<b>α</b>, πέρναγ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περνούσαμε / περνάγαμε",
        "translation": "Мы проходили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Мы проходили "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseImp": "περνούσ<b>α</b>, πέρναγ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περνούσατε / περνάγατε",
        "translation": "Вы проходили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Вы проходили "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseImp": "περνούσ<b>α</b>, πέρναγ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περνούσαν / πέρναγαν / περνούσανε / περνάγανε",
        "translation": "Они проходили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Они проходили "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseImp": "περνούσ<b>α</b>, πέρναγ<b>α</b>",
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περπατούσα / περπάταγα",
        "translation": "Я прогуливался ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Я прогуливался "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseImp": "περπατούσ<b>α</b>, περπάταγ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατούσες / περπάταγες",
        "translation": "Ты прогуливался ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Ты прогуливался "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseImp": "περπατούσ<b>α</b>, περπάταγ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατούσε / περπάταγε",
        "translation": "Он прогуливался ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Он прогуливался "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseImp": "περπατούσ<b>α</b>, περπάταγ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατούσαμε / περπατάγαμε",
        "translation": "Мы прогуливилсь ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Мы прогуливилсь "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseImp": "περπατούσ<b>α</b>, περπάταγ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατούσατε / περπατάγατε",
        "translation": "Вы прогуливилсь ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Вы прогуливилсь "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseImp": "περπατούσ<b>α</b>, περπάταγ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατούσαν / περπάταγαν / περπατούσανε / περπατάγανε",
        "translation": "Они прогуливилсь ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Они прогуливилсь "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "baseImp": "περπατούσ<b>α</b>, περπάταγ<b>α</b>",
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "έπινα",
        "translation": "Я пил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Я пил "
        ],
        "transls": [
            "πίνω"
        ],
        "baseImp": "έπιν<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "έπινες",
        "translation": "Ты пил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Ты пил "
        ],
        "transls": [
            "πίνω"
        ],
        "baseImp": "έπιν<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "έπινε",
        "translation": "Она пила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Она пила "
        ],
        "transls": [
            "πίνω"
        ],
        "baseImp": "έπιν<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "πίναμε",
        "translation": "Мы пили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Мы пили "
        ],
        "transls": [
            "πίνω"
        ],
        "baseImp": "έπιν<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "πίνατε",
        "translation": "Вы пили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Вы пили "
        ],
        "transls": [
            "πίνω"
        ],
        "baseImp": "έπιν<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "έπιναν / πίναν / πίνανε",
        "translation": "Они пили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Они пили "
        ],
        "transls": [
            "πίνω"
        ],
        "baseImp": "έπιν<b>α</b>",
        "unicTransl": "пить"
    },
    {
        "word": "πήγαινα",
        "translation": "Я ходил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Я ходил "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseImp": "πήγαιν<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγαινες",
        "translation": "Ты ходил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Ты ходил "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseImp": "πήγαιν<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγαινε",
        "translation": "Он ходил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Он ходил "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseImp": "πήγαιν<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πηγαίναμε",
        "translation": "Мы ходили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Мы ходили "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseImp": "πήγαιν<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πηγαίνατε",
        "translation": "Вы ходили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Вы ходили "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseImp": "πήγαιν<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγαιναν / πηγαίναν / πηγαίνανε",
        "translation": "Они ходили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Они ходили "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "baseImp": "πήγαιν<b>α</b>",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "έπλενα",
        "translation": "Я мыл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Я мыл "
        ],
        "transls": [
            "πλένω"
        ],
        "baseImp": "έπλεν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "έπλενες",
        "translation": "Ты мыл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Ты мыл "
        ],
        "transls": [
            "πλένω"
        ],
        "baseImp": "έπλεν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "έπλενε",
        "translation": "Она мыла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Она мыла "
        ],
        "transls": [
            "πλένω"
        ],
        "baseImp": "έπλεν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πλέναμε",
        "translation": "Мы мыли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Мы мыли "
        ],
        "transls": [
            "πλένω"
        ],
        "baseImp": "έπλεν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πλένατε",
        "translation": "Вы мыли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Вы мыли "
        ],
        "transls": [
            "πλένω"
        ],
        "baseImp": "έπλεν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "έπλεναν / πλέναν / πλένανε",
        "translation": "Они мыли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Они мыли "
        ],
        "transls": [
            "πλένω"
        ],
        "baseImp": "έπλεν<b>α</b>",
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πουλούσα / πούλαγα",
        "translation": "Я продавал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Я продавал "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseImp": "πουλούσ<b>α</b>, πούλαγ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "πουλούσες / πούλαγες",
        "translation": "Ты продавал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Ты продавал "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseImp": "πουλούσ<b>α</b>, πούλαγ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "πουλούσε / πούλαγε",
        "translation": "Он продавал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Он продавал "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseImp": "πουλούσ<b>α</b>, πούλαγ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "πουλούσαμε / πουλάγαμε",
        "translation": "Мы продавали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Мы продавали "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseImp": "πουλούσ<b>α</b>, πούλαγ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "πουλούσατε / πουλάγατε",
        "translation": "Вы продавали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Вы продавали "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseImp": "πουλούσ<b>α</b>, πούλαγ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "πουλούσαν / πούλαγαν / πουλούσανε / πουλάγανε",
        "translation": "Они продавали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Они продавали "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "baseImp": "πουλούσ<b>α</b>, πούλαγ<b>α</b>",
        "unicTransl": "продавать"
    },
    {
        "word": "προτιμούσα",
        "translation": "Я предпочитал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Я предпочитал "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseImp": "προτιμούσ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμούσες",
        "translation": "Ты предпочитал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Ты предпочитал "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseImp": "προτιμούσ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμούσε",
        "translation": "Он предпочитал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Он предпочитал "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseImp": "προτιμούσ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμούσαμε",
        "translation": "Мы предпочитали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Мы предпочитали "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseImp": "προτιμούσ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμούσατε",
        "translation": "Вы предпочитали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Вы предпочитали "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseImp": "προτιμούσ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμούσαν / προτιμούσανε",
        "translation": "Они предпочитали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Они предпочитали "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "baseImp": "προτιμούσ<b>α</b>",
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "πρότεινα",
        "translation": "Я предлагал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Я предлагал "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseImp": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "πρότεινες",
        "translation": "Ты предлагал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Ты предлагал "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseImp": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "πρότεινε",
        "translation": "Она предлагала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Она предлагала "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseImp": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "προτείναμε",
        "translation": "Мы предлагали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Мы предлагали "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseImp": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "προτείνατε",
        "translation": "Вы предлагали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Вы предлагали "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseImp": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "πρότειναν / προτείναν / προτείνανε",
        "translation": "Они предлагали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Они предлагали "
        ],
        "transls": [
            "προτείνω"
        ],
        "baseImp": "πρότειν<b>α</b>",
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "σηκωνόμουν / σηκωνόμουνα",
        "translation": "Я вставал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Я вставал "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseImp": "σηκων<b>όμουν</b>, σηκων<b>όμουνα</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σηκωνόσουν / σηκωνόσουνα",
        "translation": "Ты вставал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Ты вставал "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseImp": "σηκων<b>όμουν</b>, σηκων<b>όμουνα</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σηκωνόταν / σηκωνότανε",
        "translation": "Он вставал ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Он вставал "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseImp": "σηκων<b>όμουν</b>, σηκων<b>όμουνα</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σηκωνόμαστε / σηκωνόμασταν",
        "translation": "Мы вставали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Мы вставали "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseImp": "σηκων<b>όμουν</b>, σηκων<b>όμουνα</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σηκωνόσαστε / σηκωνόσασταν",
        "translation": "Вы вставали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Вы вставали "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseImp": "σηκων<b>όμουν</b>, σηκων<b>όμουνα</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σηκώνονταν / σηκωνόντουσαν",
        "translation": "Они вставали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Они вставали "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "baseImp": "σηκων<b>όμουν</b>, σηκων<b>όμουνα</b>",
        "unicTransl": "вставать"
    },
    {
        "word": "σκεφτόμουν / σκεφτόμουνα",
        "translation": "Я думал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Я думал "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseImp": "σκεφτ<b>όμουν</b>, σκεφτ<b>όμουνα</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκεφτόσουν / σκεφτόσουνα",
        "translation": "Ты думал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Ты думал "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseImp": "σκεφτ<b>όμουν</b>, σκεφτ<b>όμουνα</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκεφτόταν / σκεφτότανε",
        "translation": "Она думала ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Она думала "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseImp": "σκεφτ<b>όμουν</b>, σκεφτ<b>όμουνα</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκεφτόμαστε / σκεφτόμασταν",
        "translation": "Мы думали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Мы думали "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseImp": "σκεφτ<b>όμουν</b>, σκεφτ<b>όμουνα</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκεφτόσαστε / σκεφτόσασταν",
        "translation": "Вы думали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Вы думали "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseImp": "σκεφτ<b>όμουν</b>, σκεφτ<b>όμουνα</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκέφτονταν / σκεφτόντουσαν",
        "translation": "Они думали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Они думали "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "baseImp": "σκεφτ<b>όμουν</b>, σκεφτ<b>όμουνα</b>",
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "έστελνα",
        "translation": "Я посылал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Я посылал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseImp": "έστελν<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "έστελνες",
        "translation": "Ты посылал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Ты посылал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseImp": "έστελν<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "έστελνε",
        "translation": "Он посылал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Он посылал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseImp": "έστελν<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "στέλναμε",
        "translation": "Мы посылал ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Мы посылал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseImp": "έστελν<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "στέλνατε",
        "translation": "Вы посылал ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Вы посылал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseImp": "έστελν<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "έστελναν / στέλναν / στέλνανε",
        "translation": "Они посылал ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Они посылал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseImp": "έστελν<b>α</b>",
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "συμφωνούσα",
        "translation": "Я соглашался ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Я соглашался "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseImp": "συμφωνούσ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνούσες",
        "translation": "Ты соглашался ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Ты соглашался "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseImp": "συμφωνούσ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνούσε",
        "translation": "Она соглашалась ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Она соглашалась "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseImp": "συμφωνούσ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνούσαμε",
        "translation": "Мы соглашались ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Мы соглашались "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseImp": "συμφωνούσ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνούσατε",
        "translation": "Вы соглашались ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Вы соглашались "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseImp": "συμφωνούσ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνούσαν / συμφωνούσανε",
        "translation": "Они соглашались ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Они соглашались "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "baseImp": "συμφωνούσ<b>α</b>",
        "unicTransl": "соглашаться"
    },
    {
        "word": "συναντούσα",
        "translation": "Я встречал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Я встречал "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseImp": "συναντούσ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντούσες",
        "translation": "Ты встречал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Ты встречал "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseImp": "συναντούσ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντούσε",
        "translation": "Он встречал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Он встречал "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseImp": "συναντούσ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντούσαμε",
        "translation": "Мы встречали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Мы встречали "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseImp": "συναντούσ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντούσατε",
        "translation": "Вы встречали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Вы встречали "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseImp": "συναντούσ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντούσαν / συναντούσανε",
        "translation": "Они встречали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Они встречали "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "baseImp": "συναντούσ<b>α</b>",
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "ταξίδευα",
        "translation": "Я путешествовал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Я путешествовал "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseImp": "ταξίδευ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξίδευες",
        "translation": "Ты путешествовал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Ты путешествовал "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseImp": "ταξίδευ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξίδευε",
        "translation": "Она путешествовала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Она путешествовала "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseImp": "ταξίδευ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξιδεύαμε",
        "translation": "Мы путешествовали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Мы путешествовали "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseImp": "ταξίδευ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξιδεύατε",
        "translation": "Вы путешествовали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Вы путешествовали "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseImp": "ταξίδευ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξίδευαν / ταξιδεύαν / ταξιδεύαν",
        "translation": "Они путешествовали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Они путешествовали "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "baseImp": "ταξίδευ<b>α</b>",
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "τελείωνα",
        "translation": "Я заканчивал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Я заканчивал "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseImp": "τελείων<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελείωνες",
        "translation": "Ты заканчивал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Ты заканчивал "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseImp": "τελείων<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελείωνε",
        "translation": "Он заканчивал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Он заканчивал "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseImp": "τελείων<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελειώναμε",
        "translation": "Мы заканчивали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Мы заканчивали "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseImp": "τελείων<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελειώνατε",
        "translation": "Вы заканчивали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Вы заканчивали "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseImp": "τελείων<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελείωναν / τελειώναν / τελειώνανε",
        "translation": "Они заканчивали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Они заканчивали "
        ],
        "transls": [
            "τελειώνω"
        ],
        "baseImp": "τελείων<b>α</b>",
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τηλεφωνούσα / τηλεφώναγα",
        "translation": "Я звонил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Я звонил "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseImp": "τηλεφωνούσ<b>α</b>, τηλεφώναγ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνούσες / τηλεφώναγες",
        "translation": "Ты звонил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Ты звонил "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseImp": "τηλεφωνούσ<b>α</b>, τηλεφώναγ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνούσε / τηλεφώναγε",
        "translation": "Она звонила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Она звонила "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseImp": "τηλεφωνούσ<b>α</b>, τηλεφώναγ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνούσαμε / τηλεφωνάγαμε",
        "translation": "Мы звонили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Мы звонили "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseImp": "τηλεφωνούσ<b>α</b>, τηλεφώναγ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνούσατε / τηλεφωνάγατε",
        "translation": "Вы звонили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Вы звонили "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseImp": "τηλεφωνούσ<b>α</b>, τηλεφώναγ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνούσαν / τηλεφώναγαν / τηλεφωνάγανε / τηλεφωνούσανε",
        "translation": "Они звонили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Они звонили "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "baseImp": "τηλεφωνούσ<b>α</b>, τηλεφώναγ<b>α</b>",
        "unicTransl": "звонить"
    },
    {
        "word": "έτρωγα",
        "translation": "Я кушал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Я кушал "
        ],
        "transls": [
            "τρώω"
        ],
        "baseImp": "έτρωγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "έτρωγες",
        "translation": "Ты кушал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Ты кушал "
        ],
        "transls": [
            "τρώω"
        ],
        "baseImp": "έτρωγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "έτρωγε",
        "translation": "Он кушал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Он кушал "
        ],
        "transls": [
            "τρώω"
        ],
        "baseImp": "έτρωγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "τρώγαμε",
        "translation": "Мы кушали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Мы кушали "
        ],
        "transls": [
            "τρώω"
        ],
        "baseImp": "έτρωγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "τρώγατε",
        "translation": "Вы кушали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Вы кушали "
        ],
        "transls": [
            "τρώω"
        ],
        "baseImp": "έτρωγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "έτρωγαν / τρώγανε",
        "translation": "Они кушали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Они кушали "
        ],
        "transls": [
            "τρώω"
        ],
        "baseImp": "έτρωγ<b>α</b>",
        "unicTransl": "кушать, есть"
    },
    {
        "word": "υπήρχα",
        "translation": "Я существовал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Я существовал "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseImp": "υπήρχ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπήρχες",
        "translation": "Ты существовал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Ты существовал "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseImp": "υπήρχ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπήρχε",
        "translation": "Она существовала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Она существовала "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseImp": "υπήρχ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπήρχαμε",
        "translation": "Мы существовали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Мы существовали "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseImp": "υπήρχ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπήρχατε",
        "translation": "Вы существовали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Вы существовали "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseImp": "υπήρχ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπήρχαν / υπήρχανε",
        "translation": "Они существовали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Они существовали "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseImp": "υπήρχ<b>α</b>",
        "unicTransl": "существовать, быть"
    },
    {
        "word": "φιλούσα / φίλαγα",
        "translation": "Я целовал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Я целовал "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseImp": "φιλούσ<b>α</b>, φίλαγ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλούσες / φίλαγες",
        "translation": "Ты целовал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Ты целовал "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseImp": "φιλούσ<b>α</b>, φίλαγ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλούσε / φίλαγε",
        "translation": "Он целовал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Он целовал "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseImp": "φιλούσ<b>α</b>, φίλαγ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλούσαμε / φιλάγαμε",
        "translation": "Мы целовали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Мы целовали "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseImp": "φιλούσ<b>α</b>, φίλαγ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλούσατε / φιλάγατε",
        "translation": "Вы целовали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Вы целовали "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseImp": "φιλούσ<b>α</b>, φίλαγ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλούσαν / φίλαγαν / φιλάγανε / φιλούσανε",
        "translation": "Они целовали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Они целовали "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "baseImp": "φιλούσ<b>α</b>, φίλαγ<b>α</b>",
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "έφτανα",
        "translation": "Я добирался ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Я добирался "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseImp": "έφταν<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "έφτανες",
        "translation": "Ты добирался ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Ты добирался "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseImp": "έφταν<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "έφτανε",
        "translation": "Она добиралась ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Она добиралась "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseImp": "έφταν<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "φτάναμε",
        "translation": "Мы добирались ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Мы добирались "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseImp": "έφταν<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "φτάνατε",
        "translation": "Вы добирались ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Вы добирались "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseImp": "έφταν<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "έφταναν / φτάναν / φτάνανε",
        "translation": "Они добирались ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Они добирались "
        ],
        "transls": [
            "φτάνω"
        ],
        "baseImp": "έφταν<b>α</b>",
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "χαιρόμουν / χαιρόμουνα",
        "translation": "Я радовался ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Я радовался "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseImp": "χαιρ<b>όμουν</b>, χαιρ<b>όμουνα</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χαιρόσουν / χαιρόσουνα",
        "translation": "Ты радовался ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Ты радовался "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseImp": "χαιρ<b>όμουν</b>, χαιρ<b>όμουνα</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χαιρόταν / χαιρότανε",
        "translation": "Он радовался ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Он радовался "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseImp": "χαιρ<b>όμουν</b>, χαιρ<b>όμουνα</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χαιρόμασταν / χαιρόμαστε",
        "translation": "Мы радовались ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Мы радовались "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseImp": "χαιρ<b>όμουν</b>, χαιρ<b>όμουνα</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χαιρόσασταν / χαιρόσαστε",
        "translation": "Вы радовались ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Вы радовались "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseImp": "χαιρ<b>όμουν</b>, χαιρ<b>όμουνα</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χαίρονταν / χαιρόντουσαν",
        "translation": "Они радовались ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Они радовались "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "baseImp": "χαιρ<b>όμουν</b>, χαιρ<b>όμουνα</b>",
        "unicTransl": "радоваться"
    },
    {
        "word": "χαλάρωνα",
        "translation": "Я расслаблялся ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Я расслаблялся "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseImp": "χαλάρων<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλάρωνες",
        "translation": "Ты расслаблялся ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Ты расслаблялся "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseImp": "χαλάρων<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλάρωνε",
        "translation": "Она расслаблялась ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Она расслаблялась "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseImp": "χαλάρων<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλαρώναμε",
        "translation": "Мы расслаблялись ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Мы расслаблялись "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseImp": "χαλάρων<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλαρώνατε",
        "translation": "Вы расслаблялись ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Вы расслаблялись "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseImp": "χαλάρων<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλάρωναν / χαλαρώναν / χαλαρώνανε",
        "translation": "Они расслаблялись ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Они расслаблялись "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "baseImp": "χαλάρων<b>α</b>",
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "έχανα",
        "translation": "Я терял ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Я терял "
        ],
        "transls": [
            "χάνω"
        ],
        "baseImp": "έχαν<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "έχανες",
        "translation": "Ты терял ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Ты терял "
        ],
        "transls": [
            "χάνω"
        ],
        "baseImp": "έχαν<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "έχανε",
        "translation": "Он терял ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Он терял "
        ],
        "transls": [
            "χάνω"
        ],
        "baseImp": "έχαν<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χάναμε",
        "translation": "Мы теряли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Мы теряли "
        ],
        "transls": [
            "χάνω"
        ],
        "baseImp": "έχαν<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χάνατε",
        "translation": "Вы теряли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Вы теряли "
        ],
        "transls": [
            "χάνω"
        ],
        "baseImp": "έχαν<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "έχαναν / χάναν / χάνανε",
        "translation": "Они теряли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Они теряли "
        ],
        "transls": [
            "χάνω"
        ],
        "baseImp": "έχαν<b>α</b>",
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χόρευα",
        "translation": "Я танцевал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Я танцевал "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseImp": "χόρευ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "χόρευες",
        "translation": "Ты танцевал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Ты танцевал "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseImp": "χόρευ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "χόρευε",
        "translation": "Она танцевала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Она танцевала "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseImp": "χόρευ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "χορεύαμε",
        "translation": "Мы танцевали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Мы танцевали "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseImp": "χόρευ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "χορεύατε",
        "translation": "Вы танцевали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Вы танцевали "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseImp": "χόρευ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "χόρευαν / χορεύαν / χορεύανε",
        "translation": "Они танцевали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Они танцевали "
        ],
        "transls": [
            "χορεύω"
        ],
        "baseImp": "χόρευ<b>α</b>",
        "unicTransl": "танцевать"
    },
    {
        "word": "χρησιμοποιούσα",
        "translation": "Я использовал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Я использовал "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseImp": "χρησιμοποιούσ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιούσες",
        "translation": "Ты использовал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Ты использовал "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseImp": "χρησιμοποιούσ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιούσε",
        "translation": "Он использовал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Он использовал "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseImp": "χρησιμοποιούσ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιούσαμε",
        "translation": "Мы использовали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Мы использовали "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseImp": "χρησιμοποιούσ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιούσατε",
        "translation": "Вы использовали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Вы использовали "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseImp": "χρησιμοποιούσ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιούσαν / χρησιμοποιούσανε",
        "translation": "Они использовали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Они использовали "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "baseImp": "χρησιμοποιούσ<b>α</b>",
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "υπέθετα",
        "translation": "Я предполагал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Я предполагал "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseImp": "υπέθετ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υπέθετες",
        "translation": "Ты предполагал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Ты предполагал "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseImp": "υπέθετ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υπέθετε",
        "translation": "Она предполагала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Она предполагала "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseImp": "υπέθετ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υποθέταμε",
        "translation": "Мы предполагали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Мы предполагали "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseImp": "υπέθετ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υποθέτατε",
        "translation": "Вы предполагали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Вы предполагали "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseImp": "υπέθετ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υπέθεταν / υποθέταν / υποθέτανε",
        "translation": "Они предполагали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Они предполагали "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseImp": "υπέθετ<b>α</b>",
        "unicTransl": "полагать, считать"
    },
    {
        "word": "γνώριζα",
        "translation": "Я узнавал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Я узнавал "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseImp": "γνώριζ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνώριζες",
        "translation": "Ты узнавал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Ты узнавал "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseImp": "γνώριζ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνώριζε",
        "translation": "Он узнавал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Он узнавал "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseImp": "γνώριζ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνωρίζαμε",
        "translation": "Мы узнавали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Мы узнавали "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseImp": "γνώριζ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνωρίζατε",
        "translation": "Вы узнавали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Вы узнавали "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseImp": "γνώριζ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνώριζαν / γνωρίζαν / γνωρίζανε",
        "translation": "Они узнавали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Они узнавали "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "baseImp": "γνώριζ<b>α</b>",
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "βοηθούσα / βοήθαγα",
        "translation": "Я помогал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Я помогал "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseImp": "βοηθούσ<b>α</b>, βοήθαγ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθούσες / βοήθαγες",
        "translation": "Ты помогал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Ты помогал "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseImp": "βοηθούσ<b>α</b>, βοήθαγ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθούσε / βοήθαγε",
        "translation": "Она помогала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Она помогала "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseImp": "βοηθούσ<b>α</b>, βοήθαγ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθούσαμε / βοηθάγαμε",
        "translation": "Мы помогали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Мы помогали "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseImp": "βοηθούσ<b>α</b>, βοήθαγ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθούσατε / βοηθάγατε",
        "translation": "Вы помогали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Вы помогали "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseImp": "βοηθούσ<b>α</b>, βοήθαγ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθούσαν / βοήθαγαν / βοηθούσανε / βοηθάγανε",
        "translation": "Они помогали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Они помогали "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "baseImp": "βοηθούσ<b>α</b>, βοήθαγ<b>α</b>",
        "unicTransl": "помогать"
    },
    {
        "word": "δούλευα",
        "translation": "Я работал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Я работал "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseImp": "δούλευ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "δούλευες",
        "translation": "Ты работал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Ты работал "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseImp": "δούλευ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "δούλευε",
        "translation": "Он работал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Он работал "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseImp": "δούλευ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "δουλεύαμε",
        "translation": "Мы работали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Мы работали "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseImp": "δούλευ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "δουλεύατε",
        "translation": "Вы работали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Вы работали "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseImp": "δούλευ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "δούλευαν / δουλεύαν / δουλεύανε",
        "translation": "Они работали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Они работали "
        ],
        "transls": [
            "δουλεύω"
        ],
        "baseImp": "δούλευ<b>α</b>",
        "unicTransl": "работать"
    },
    {
        "word": "έφταιγα",
        "translation": "Я был виноват ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Я был виноват "
        ],
        "transls": [
            "φταίω"
        ],
        "baseImp": "έφταιγ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "έφταιγες",
        "translation": "Ты был виноват ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Ты был виноват "
        ],
        "transls": [
            "φταίω"
        ],
        "baseImp": "έφταιγ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "έφταιγε",
        "translation": "Она была виновата ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Она была виновата "
        ],
        "transls": [
            "φταίω"
        ],
        "baseImp": "έφταιγ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "φταίγαμε",
        "translation": "Мы были виноваты ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Мы были виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "baseImp": "έφταιγ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "φταίγατε",
        "translation": "Вы были виноваты ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Вы были виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "baseImp": "έφταιγ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "έφταιγαν / φταίγαν / φταίγανε",
        "translation": "Они были виноваты ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Они были виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "baseImp": "έφταιγ<b>α</b>",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "ρωτούσα / ρώταγα",
        "translation": "Я спрашивал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Я спрашивал "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseImp": "ρωτούσ<b>α</b>, ρώταγ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτούσες / ρώταγες",
        "translation": "Ты спрашивал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Ты спрашивал "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseImp": "ρωτούσ<b>α</b>, ρώταγ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτούσε / ρώταγε",
        "translation": "Он спрашивал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Он спрашивал "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseImp": "ρωτούσ<b>α</b>, ρώταγ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτούσαμε / ρωτάγαμε",
        "translation": "Мы спрашивали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Мы спрашивали "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseImp": "ρωτούσ<b>α</b>, ρώταγ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτούσατε / ρωτάγατε",
        "translation": "Вы спрашивали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Вы спрашивали "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseImp": "ρωτούσ<b>α</b>, ρώταγ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτούσαν / ρώταγαν / ρωτούσανε / ρωτάγανε",
        "translation": "Они спрашивали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Они спрашивали "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "baseImp": "ρωτούσ<b>α</b>, ρώταγ<b>α</b>",
        "unicTransl": "спрашивать"
    },
    {
        "word": "μιλούσα / μίλαγα",
        "translation": "Я говорил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Я говорил "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseImp": "μιλούσ<b>α</b>, μίλαγ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλούσες / μίλαγες",
        "translation": "Ты говорил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Ты говорил "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseImp": "μιλούσ<b>α</b>, μίλαγ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλούσε / μίλαγε",
        "translation": "Она говорила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Она говорила "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseImp": "μιλούσ<b>α</b>, μίλαγ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλούσαμε / μιλάγαμε",
        "translation": "Мы говорили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Мы говорили "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseImp": "μιλούσ<b>α</b>, μίλαγ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλούσατε / μιλάγατε",
        "translation": "Вы говорили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Вы говорили "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseImp": "μιλούσ<b>α</b>, μίλαγ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλούσαν / μίλαγαν / μιλούσανε / μιλάγανε",
        "translation": "Они говорили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Они говорили "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "baseImp": "μιλούσ<b>α</b>, μίλαγ<b>α</b>",
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "ζητούσα / ζήταγα",
        "translation": "Я просил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Я просил "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseImp": "ζητούσ<b>α</b>, ζήταγ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητούσες / ζήταγες",
        "translation": "Ты просил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Ты просил "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseImp": "ζητούσ<b>α</b>, ζήταγ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητούσε / ζήταγε",
        "translation": "Он просил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Он просил "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseImp": "ζητούσ<b>α</b>, ζήταγ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητούσαμε / ζητάγαμε",
        "translation": "Мы просили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Мы просили "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseImp": "ζητούσ<b>α</b>, ζήταγ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητούσατε / ζητάγατε",
        "translation": "Вы просили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Вы просили "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseImp": "ζητούσ<b>α</b>, ζήταγ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητούσαν / ζήταγαν / ζητάγανε / ζητούσανε",
        "translation": "Они просили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Они просили "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "baseImp": "ζητούσ<b>α</b>, ζήταγ<b>α</b>",
        "unicTransl": "просить, требовать"
    },
    {
        "word": "χτυπούσα",
        "translation": "Я бил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Я бил "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseImp": "χτυπούσ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπούσες",
        "translation": "Ты бил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Ты бил "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseImp": "χτυπούσ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπούσε",
        "translation": "Она била ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Она била "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseImp": "χτυπούσ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπούσαμε",
        "translation": "Мы били ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Мы били "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseImp": "χτυπούσ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπούσατε",
        "translation": "Вы били ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Вы били "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseImp": "χτυπούσ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπούσαν / χτυπούσανε",
        "translation": "Они били ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Они били "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "baseImp": "χτυπούσ<b>α</b>",
        "unicTransl": "бить, стучать"
    },
    {
        "word": "συγχωρούσα",
        "translation": "Я прощал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Я прощал "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseImp": "συγχωρούσ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρούσες",
        "translation": "Ты прощал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Ты прощал "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseImp": "συγχωρούσ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρούσε",
        "translation": "Он прощал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Он прощал "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseImp": "συγχωρούσ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρούσαμε",
        "translation": "Мы прощали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Мы прощали "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseImp": "συγχωρούσ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρούσατε",
        "translation": "Вы прощали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Вы прощали "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseImp": "συγχωρούσ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρούσαν / συγχωρούσανε",
        "translation": "Они прощали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Они прощали "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "baseImp": "συγχωρούσ<b>α</b>",
        "unicTransl": "прощать"
    },
    {
        "word": "οδηγούσα / οδήγαγα",
        "translation": "Я вёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Я вёл "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseImp": "οδηγούσ<b>α</b>, οδήγαγ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγούσες / οδήγαγες",
        "translation": "Ты вёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Ты вёл "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseImp": "οδηγούσ<b>α</b>, οδήγαγ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγούσε / οδήγαγε",
        "translation": "Она вела ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Она вела "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseImp": "οδηγούσ<b>α</b>, οδήγαγ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγούσαμε / οδηγάγαμε",
        "translation": "Мы вели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Мы вели "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseImp": "οδηγούσ<b>α</b>, οδήγαγ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγούσατε / οδηγάγατε",
        "translation": "Вы вели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Вы вели "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseImp": "οδηγούσ<b>α</b>, οδήγαγ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγούσαν / οδήγαγαν / οδηγάγανε / οδηγούσανε",
        "translation": "Они вели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Они вели "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "baseImp": "οδηγούσ<b>α</b>, οδήγαγ<b>α</b>",
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "καθόμουν / καθόμουνα",
        "translation": "Я сидел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Я сидел "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseImp": "καθ<b>όμουν</b>, καθ<b>όμουνα</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "καθόσουν / καθόσουνα",
        "translation": "Ты сидел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Ты сидел "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseImp": "καθ<b>όμουν</b>, καθ<b>όμουνα</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "καθόταν / καθότανε",
        "translation": "Он сидел ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Он сидел "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseImp": "καθ<b>όμουν</b>, καθ<b>όμουνα</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "καθόμασταν / καθόμαστε",
        "translation": "Мы сидели ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Мы сидели "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseImp": "καθ<b>όμουν</b>, καθ<b>όμουνα</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "καθόσασταν / καθόσαστε",
        "translation": "Вы сидели ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Вы сидели "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseImp": "καθ<b>όμουν</b>, καθ<b>όμουνα</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "κάθονταν / καθόντουσαν / καθόνταντε / κάθουνταν",
        "translation": "Они сидели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Они сидели "
        ],
        "transls": [
            "κάθομαι"
        ],
        "baseImp": "καθ<b>όμουν</b>, καθ<b>όμουνα</b>",
        "unicTransl": "сидеть"
    },
    {
        "word": "τραγουδούσα / τραγούδαγα",
        "translation": "Я пел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Я пел "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseImp": "τραγουδούσ<b>α</b>, τραγούδαγ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδούσες / τραγούδαγες",
        "translation": "Ты пел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Ты пел "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseImp": "τραγουδούσ<b>α</b>, τραγούδαγ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδούσε / τραγούδαγε",
        "translation": "Он пел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Он пел "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseImp": "τραγουδούσ<b>α</b>, τραγούδαγ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδούσαμε / τραγουδάγαμε",
        "translation": "Мы пели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Мы пели "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseImp": "τραγουδούσ<b>α</b>, τραγούδαγ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδούσατε / τραγουδάγατε",
        "translation": "Вы пели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Вы пели "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseImp": "τραγουδούσ<b>α</b>, τραγούδαγ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδούσανε / τραγούδαγαν / τραγουδούσαν / τραγουδάγανε",
        "translation": "Они пели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Они пели "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "baseImp": "τραγουδούσ<b>α</b>, τραγούδαγ<b>α</b>",
        "unicTransl": "петь"
    },
    {
        "word": "σεβόμουν / σεβόμουνα",
        "translation": "Я уважал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Я уважал "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseImp": "σεβ<b>όμουν</b>, σεβ<b>όμουνα</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "σεβόσουν / σεβόσουνα",
        "translation": "Ты уважал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Ты уважал "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseImp": "σεβ<b>όμουν</b>, σεβ<b>όμουνα</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "σεβόταν / σεβότανε",
        "translation": "Он уважал ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Он уважал "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseImp": "σεβ<b>όμουν</b>, σεβ<b>όμουνα</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "σεβόμασταν / σεβόμαστε",
        "translation": "Мы уважали ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Мы уважали "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseImp": "σεβ<b>όμουν</b>, σεβ<b>όμουνα</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "σεβόσασταν / σεβόσαστε",
        "translation": "Вы уважали ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Вы уважали "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseImp": "σεβ<b>όμουν</b>, σεβ<b>όμουνα</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "σέβονταν / σεβόντουσαν",
        "translation": "Они уважали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Они уважали "
        ],
        "transls": [
            "σέβομαι"
        ],
        "baseImp": "σεβ<b>όμουν</b>, σεβ<b>όμουνα</b>",
        "unicTransl": "уважать"
    },
    {
        "word": "θυμόμουν / θυμόμουνα",
        "translation": "Я помнил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Я помнил "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseImp": "θυμ<b>όμουν</b>, θυμ<b>όμουνα</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "θυμόσουν / θυμόσουνα",
        "translation": "Ты помнил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Ты помнил "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseImp": "θυμ<b>όμουν</b>, θυμ<b>όμουνα</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "θυμόταν / θυμότανε",
        "translation": "Он помнил ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Он помнил "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseImp": "θυμ<b>όμουν</b>, θυμ<b>όμουνα</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "θυμόμαστε / θυμόμασταν",
        "translation": "Мы помнили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Мы помнили "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseImp": "θυμ<b>όμουν</b>, θυμ<b>όμουνα</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "θυμόσαστε / θυμόσασταν",
        "translation": "Вы помнили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Вы помнили "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseImp": "θυμ<b>όμουν</b>, θυμ<b>όμουνα</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "θυμούνταν",
        "translation": "Они помнили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Они помнили "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "baseImp": "θυμ<b>όμουν</b>, θυμ<b>όμουνα</b>",
        "unicTransl": "помнить"
    },
    {
        "word": "φοβόμουν / φοβόμουνα",
        "translation": "Я боялся ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Я боялся "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseImp": "φοβ<b>όμουν</b>, φοβ<b>όμουνα</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "φοβόσουν / φοβόσουνα",
        "translation": "Ты боялся ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Ты боялся "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseImp": "φοβ<b>όμουν</b>, φοβ<b>όμουνα</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "φοβόταν / φοβότανε",
        "translation": "Он боялся ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Он боялся "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseImp": "φοβ<b>όμουν</b>, φοβ<b>όμουνα</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "φοβόμαστε / φοβόμασταν",
        "translation": "Мы боялись ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Мы боялись "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseImp": "φοβ<b>όμουν</b>, φοβ<b>όμουνα</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "φοβόσαστε / φοβόσασταν",
        "translation": "Вы боялись ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Вы боялись "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseImp": "φοβ<b>όμουν</b>, φοβ<b>όμουνα</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "φοβούνταν",
        "translation": "Они боялись ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Они боялись "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "baseImp": "φοβ<b>όμουν</b>, φοβ<b>όμουνα</b>",
        "unicTransl": "бояться"
    },
    {
        "word": "λυπόμουν / λυπόμουνα",
        "translation": "Я жалел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Я жалел "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseImp": "λυπ<b>όμουν</b>, λυπ<b>όμουνα</b>",
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπόσουν / λυπόσουνα",
        "translation": "Ты жалел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Ты жалел "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseImp": "λυπ<b>όμουν</b>, λυπ<b>όμουνα</b>",
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπόταν / λυπότανε",
        "translation": "Она жалела ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Она жалела "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseImp": "λυπ<b>όμουν</b>, λυπ<b>όμουνα</b>",
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπόμαστε / λυπόμασταν",
        "translation": "Мы жалели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Мы жалели "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseImp": "λυπ<b>όμουν</b>, λυπ<b>όμουνα</b>",
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπόσαστε / λυπόσασταν",
        "translation": "Вы жалели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Вы жалели "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseImp": "λυπ<b>όμουν</b>, λυπ<b>όμουνα</b>",
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπούνταν",
        "translation": "Они жалели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Они жалели "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "baseImp": "λυπ<b>όμουν</b>, λυπ<b>όμουνα</b>",
        "unicTransl": "жалеть"
    }
]
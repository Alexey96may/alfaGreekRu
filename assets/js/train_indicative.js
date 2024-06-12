//Массив с титулами таблицы и массив объектов с данными.

const tableTitlesArr = [{title: "Глагол", place: "base"}, {title: "Перевод", place: "unicTransl"}];
const globalArray =
[
    {
        "word": "γράφω",
        "translation": "Я пишу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Я пишу "
        ],
        "transls": [
            "γράφω"
        ],
        "unicTransl": "писать"
    },
    {
        "word": "γράφεις",
        "translation": "Ты пишешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Ты пишешь "
        ],
        "transls": [
            "γράφω"
        ],
        "unicTransl": "писать"
    },
    {
        "word": "γράφει",
        "translation": "Он пишет ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Он пишет "
        ],
        "transls": [
            "γράφω"
        ],
        "unicTransl": "писать"
    },
    {
        "word": "γράφουμε",
        "translation": "Мы пишем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Мы пишем "
        ],
        "transls": [
            "γράφω"
        ],
        "unicTransl": "писать"
    },
    {
        "word": "γράφετε",
        "translation": "Вы пишете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Вы пишете "
        ],
        "transls": [
            "γράφω"
        ],
        "unicTransl": "писать"
    },
    {
        "word": "γράφουν / γράφουνε",
        "translation": "Они пишут ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γράφω",
        "notice": "",
        "qws": [
            "Они пишут "
        ],
        "transls": [
            "γράφω"
        ],
        "unicTransl": "писать"
    },
    {
        "word": "τρώω",
        "translation": "Я кушаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Я кушаю "
        ],
        "transls": [
            "τρώω"
        ],
        "unicTransl": "кушать, есть"
    },
    {
        "word": "τρως",
        "translation": "Ты кушаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Ты кушаешь "
        ],
        "transls": [
            "τρώω"
        ],
        "unicTransl": "кушать, есть"
    },
    {
        "word": "τρώει",
        "translation": "Он кушает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Он кушает "
        ],
        "transls": [
            "τρώω"
        ],
        "unicTransl": "кушать, есть"
    },
    {
        "word": "τρώμε",
        "translation": "Мы кушаем ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Мы кушаем "
        ],
        "transls": [
            "τρώω"
        ],
        "unicTransl": "кушать, есть"
    },
    {
        "word": "τρώτε",
        "translation": "Вы кушаете ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Вы кушаете "
        ],
        "transls": [
            "τρώω"
        ],
        "unicTransl": "кушать, есть"
    },
    {
        "word": "τρώνε",
        "translation": "Они кушают ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Они кушают "
        ],
        "transls": [
            "τρώω"
        ],
        "unicTransl": "кушать, есть"
    },
    {
        "word": "αγαπώ / αγαπάω",
        "translation": "Я люблю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Я люблю "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "unicTransl": "любить"
    },
    {
        "word": "αγαπάς",
        "translation": "Ты любишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Ты любишь "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "unicTransl": "любить"
    },
    {
        "word": "αγαπά / αγαπάει",
        "translation": "Он любит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Он любит "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "unicTransl": "любить"
    },
    {
        "word": "αγαπούμε / αγαπάμε",
        "translation": "Мы любим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Мы любим "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "unicTransl": "любить"
    },
    {
        "word": "αγαπάτε",
        "translation": "Вы любите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Вы любите "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "unicTransl": "любить"
    },
    {
        "word": "αγαπούνε / αγαπάνε / αγαπούν / αγαπάν",
        "translation": "Они любят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "αγαπώ, -άω",
        "notice": "",
        "qws": [
            "Они любят "
        ],
        "transls": [
            "αγαπώ, -άω"
        ],
        "unicTransl": "любить"
    },
    {
        "word": "αγοράζω",
        "translation": "Я покупаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Я покупаю "
        ],
        "transls": [
            "αγοράζω"
        ],
        "unicTransl": "покупать"
    },
    {
        "word": "αγοράζεις",
        "translation": "Ты покупаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Ты покупаешь "
        ],
        "transls": [
            "αγοράζω"
        ],
        "unicTransl": "покупать"
    },
    {
        "word": "αγοράζει",
        "translation": "Она покупает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Она покупает "
        ],
        "transls": [
            "αγοράζω"
        ],
        "unicTransl": "покупать"
    },
    {
        "word": "αγοράζουμε",
        "translation": "Мы покупаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Мы покупаем "
        ],
        "transls": [
            "αγοράζω"
        ],
        "unicTransl": "покупать"
    },
    {
        "word": "αγοράζετε",
        "translation": "Вы покупете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Вы покупете "
        ],
        "transls": [
            "αγοράζω"
        ],
        "unicTransl": "покупать"
    },
    {
        "word": "αγοράζουν / αγοράζουνε",
        "translation": "Они покупают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αγοράζω",
        "notice": "",
        "qws": [
            "Они покупают "
        ],
        "transls": [
            "αγοράζω"
        ],
        "unicTransl": "покупать"
    },
    {
        "word": "ακούω",
        "translation": "Я слушаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Я слушаю "
        ],
        "transls": [
            "ακούω"
        ],
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "ακούς",
        "translation": "Ты слушаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Ты слушаешь "
        ],
        "transls": [
            "ακούω"
        ],
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "ακούει",
        "translation": "Он слушает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Он слушает "
        ],
        "transls": [
            "ακούω"
        ],
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "ακούμε",
        "translation": "Мы слушаем ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Мы слушаем "
        ],
        "transls": [
            "ακούω"
        ],
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "ακούτε",
        "translation": "Вы слушаете ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Вы слушаете "
        ],
        "transls": [
            "ακούω"
        ],
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "ακούνε",
        "translation": "Они слушают ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "ακούω",
        "notice": "",
        "qws": [
            "Они слушают "
        ],
        "transls": [
            "ακούω"
        ],
        "unicTransl": "слышать, слушать"
    },
    {
        "word": "απαντάω / απαντώ",
        "translation": "Я отвечаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Я отвечаю "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντάς",
        "translation": "Ты отвечаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Ты отвечаешь "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντάει / απαντά",
        "translation": "Она отвечает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Она отвечает "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντάμε / απαντούμε",
        "translation": "Мы отвечаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Мы отвечаем "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντάτε",
        "translation": "Вы отвечаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Вы отвечаете "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "απαντάν / απαντούν / απαντάνε / απαντούνε",
        "translation": "Они отвечают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "απαντώ, -άω",
        "notice": "",
        "qws": [
            "Они отвечают "
        ],
        "transls": [
            "απαντώ, -άω"
        ],
        "unicTransl": "отвечать, соответствовать"
    },
    {
        "word": "παίζω",
        "translation": "Я играю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Я играю "
        ],
        "transls": [
            "παίζω"
        ],
        "unicTransl": "играть"
    },
    {
        "word": "παίζεις",
        "translation": "Ты играешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Ты играешь "
        ],
        "transls": [
            "παίζω"
        ],
        "unicTransl": "играть"
    },
    {
        "word": "παίζει",
        "translation": "Он играет ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Он играет "
        ],
        "transls": [
            "παίζω"
        ],
        "unicTransl": "играть"
    },
    {
        "word": "παίζουμε",
        "translation": "Мы играем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Мы играем "
        ],
        "transls": [
            "παίζω"
        ],
        "unicTransl": "играть"
    },
    {
        "word": "παίζετε",
        "translation": "Вы играете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Вы играете "
        ],
        "transls": [
            "παίζω"
        ],
        "unicTransl": "играть"
    },
    {
        "word": "παίζουν / παίζουνε",
        "translation": "Они играют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "παίζω",
        "notice": "",
        "qws": [
            "Они играют "
        ],
        "transls": [
            "παίζω"
        ],
        "unicTransl": "играть"
    },
    {
        "word": "αργώ",
        "translation": "Я опаздываю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Я опаздываю "
        ],
        "transls": [
            "αργώ"
        ],
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργείς",
        "translation": "Ты опаздываешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Ты опаздываешь "
        ],
        "transls": [
            "αργώ"
        ],
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργεί",
        "translation": "Она опаздывает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Она опаздывает "
        ],
        "transls": [
            "αργώ"
        ],
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργούμε",
        "translation": "Мы опаздываем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Мы опаздываем "
        ],
        "transls": [
            "αργώ"
        ],
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργείτε",
        "translation": "Вы опаздываете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Вы опаздываете "
        ],
        "transls": [
            "αργώ"
        ],
        "unicTransl": "опаздывать"
    },
    {
        "word": "αργούν / αργούνε",
        "translation": "Они опаздыва ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "αργώ",
        "notice": "",
        "qws": [
            "Они опаздыва "
        ],
        "transls": [
            "αργώ"
        ],
        "unicTransl": "опаздывать"
    },
    {
        "word": "αρέσω",
        "translation": "Я нравлюсь ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Я нравлюсь "
        ],
        "transls": [
            "αρέσω"
        ],
        "unicTransl": "нравиться"
    },
    {
        "word": "αρέσεις",
        "translation": "Ты нравишься ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Ты нравишься "
        ],
        "transls": [
            "αρέσω"
        ],
        "unicTransl": "нравиться"
    },
    {
        "word": "αρέσει",
        "translation": "Он нравится ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Он нравится "
        ],
        "transls": [
            "αρέσω"
        ],
        "unicTransl": "нравиться"
    },
    {
        "word": "αρέσουμε / αρέσομε",
        "translation": "Мы нравимся ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Мы нравимся "
        ],
        "transls": [
            "αρέσω"
        ],
        "unicTransl": "нравиться"
    },
    {
        "word": "αρέσετε",
        "translation": "Вы нравитесь ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Вы нравитесь "
        ],
        "transls": [
            "αρέσω"
        ],
        "unicTransl": "нравиться"
    },
    {
        "word": "αρέσουν / αρέσουνε",
        "translation": "Они нравятся ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρέσω",
        "notice": "",
        "qws": [
            "Они нравятся "
        ],
        "transls": [
            "αρέσω"
        ],
        "unicTransl": "нравиться"
    },
    {
        "word": "αρρωσταίνω",
        "translation": "Я болею ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Я болею "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "unicTransl": "болеть"
    },
    {
        "word": "αρρωσταίνεις",
        "translation": "Ты болеешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Ты болеешь "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "unicTransl": "болеть"
    },
    {
        "word": "αρρωσταίνει",
        "translation": "Она болеет ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Она болеет "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "unicTransl": "болеть"
    },
    {
        "word": "/1  /2",
        "translation": "Мы болеем ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Мы болеем "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "unicTransl": "болеть"
    },
    {
        "word": "αρρωσταίνετε",
        "translation": "Вы болеете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Вы болеете "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "unicTransl": "болеть"
    },
    {
        "word": "αρρωσταίνουν / αρρωσταίνουνε",
        "translation": "Они болеют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Они болеют "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "unicTransl": "болеть"
    },
    {
        "word": "βάζω",
        "translation": "Я ставлю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Я ставлю "
        ],
        "transls": [
            "βάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "βάζεις",
        "translation": "Ты ставишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Ты ставишь "
        ],
        "transls": [
            "βάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "βάζει",
        "translation": "Он ставит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Он ставит "
        ],
        "transls": [
            "βάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "βάζουμε",
        "translation": "Мы ставим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Мы ставим "
        ],
        "transls": [
            "βάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "βάζετε",
        "translation": "Вы ставите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Вы ставите "
        ],
        "transls": [
            "βάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "βάζουν / βάζουνε",
        "translation": "Они ставят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Они ставят "
        ],
        "transls": [
            "βάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "βγαίνω",
        "translation": "Я выхожу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Я выхожу "
        ],
        "transls": [
            "βγαίνω"
        ],
        "unicTransl": "выходить"
    },
    {
        "word": "βγαίνεις",
        "translation": "Ты выходишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Ты выходишь "
        ],
        "transls": [
            "βγαίνω"
        ],
        "unicTransl": "выходить"
    },
    {
        "word": "βγαίνει",
        "translation": "Она выходит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Она выходит "
        ],
        "transls": [
            "βγαίνω"
        ],
        "unicTransl": "выходить"
    },
    {
        "word": "βγαίνουμε",
        "translation": "Мы выходим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Мы выходим "
        ],
        "transls": [
            "βγαίνω"
        ],
        "unicTransl": "выходить"
    },
    {
        "word": "βγαίνετε",
        "translation": "Вы выходите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Вы выходите "
        ],
        "transls": [
            "βγαίνω"
        ],
        "unicTransl": "выходить"
    },
    {
        "word": "βγαίνουν / βγαίνουνε",
        "translation": "Они выходят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Они выходят "
        ],
        "transls": [
            "βγαίνω"
        ],
        "unicTransl": "выходить"
    },
    {
        "word": "βλέπω",
        "translation": "Я вижу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Я вижу "
        ],
        "transls": [
            "βλέπω"
        ],
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "βλέπεις",
        "translation": "Ты видишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Ты видишь "
        ],
        "transls": [
            "βλέπω"
        ],
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "βλέπει",
        "translation": "Он видит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Он видит "
        ],
        "transls": [
            "βλέπω"
        ],
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "βλέπουμε",
        "translation": "Мы видим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Мы видим "
        ],
        "transls": [
            "βλέπω"
        ],
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "βλέπετε",
        "translation": "Вы видите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Вы видите "
        ],
        "transls": [
            "βλέπω"
        ],
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "βλέπουν / βλέπουνε",
        "translation": "Они видят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Они видят "
        ],
        "transls": [
            "βλέπω"
        ],
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "γελάω / γελώ",
        "translation": "Я смеюсь ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Я смеюсь "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "unicTransl": "смеяться"
    },
    {
        "word": "γελάς",
        "translation": "Ты смеёшься ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Ты смеёшься "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "unicTransl": "смеяться"
    },
    {
        "word": "γελάει / γελά",
        "translation": "Она смеётся ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Она смеётся "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "unicTransl": "смеяться"
    },
    {
        "word": "γελάμε / γελούμε",
        "translation": "Мы смеёмся ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Мы смеёмся "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "unicTransl": "смеяться"
    },
    {
        "word": "γελάτε",
        "translation": "Вы смеётесь ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Вы смеётесь "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "unicTransl": "смеяться"
    },
    {
        "word": "γελάν / γελούν / γελάνε / γελούνε",
        "translation": "Они смеются ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "γελώ, -άω",
        "notice": "",
        "qws": [
            "Они смеются "
        ],
        "transls": [
            "γελώ, -άω"
        ],
        "unicTransl": "смеяться"
    },
    {
        "word": "διαβάζω",
        "translation": "Я читаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Я читаю "
        ],
        "transls": [
            "διαβάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "διαβάζεις",
        "translation": "Ты читаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Ты читаешь "
        ],
        "transls": [
            "διαβάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "διαβάζει",
        "translation": "Он читает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Он читает "
        ],
        "transls": [
            "διαβάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "διαβάζουμε",
        "translation": "Мы читаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Мы читаем "
        ],
        "transls": [
            "διαβάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "διαβάζετε",
        "translation": "Вы читаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Вы читаете "
        ],
        "transls": [
            "διαβάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "διαβάζουν / διαβάζουνε",
        "translation": "Они читают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "διαβάζω",
        "notice": "",
        "qws": [
            "Они читают "
        ],
        "transls": [
            "διαβάζω"
        ],
        "unicTransl": "читать"
    },
    {
        "word": "δίνω",
        "translation": "Я даю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Я даю "
        ],
        "transls": [
            "δίνω"
        ],
        "unicTransl": "давать"
    },
    {
        "word": "δίνεις",
        "translation": "Ты даёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Ты даёшь "
        ],
        "transls": [
            "δίνω"
        ],
        "unicTransl": "давать"
    },
    {
        "word": "δίνει",
        "translation": "Он даёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Он даёт "
        ],
        "transls": [
            "δίνω"
        ],
        "unicTransl": "давать"
    },
    {
        "word": "δίνουμε",
        "translation": "Мы даём ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Мы даём "
        ],
        "transls": [
            "δίνω"
        ],
        "unicTransl": "давать"
    },
    {
        "word": "δίνουτε",
        "translation": "Вы даёте ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Вы даёте "
        ],
        "transls": [
            "δίνω"
        ],
        "unicTransl": "давать"
    },
    {
        "word": "δίνουν / δίνουνε",
        "translation": "Они дают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δίνω",
        "notice": "",
        "qws": [
            "Они дают "
        ],
        "transls": [
            "δίνω"
        ],
        "unicTransl": "давать"
    },
    {
        "word": "έρχομαι",
        "translation": "Я прихожу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Я прихожу "
        ],
        "transls": [
            "έρχομαι"
        ],
        "unicTransl": "приходить, настать"
    },
    {
        "word": "έρχεσαι",
        "translation": "Ты приходишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Ты приходишь "
        ],
        "transls": [
            "έρχομαι"
        ],
        "unicTransl": "приходить, настать"
    },
    {
        "word": "έρχεται",
        "translation": "Она приходит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Она приходит "
        ],
        "transls": [
            "έρχομαι"
        ],
        "unicTransl": "приходить, настать"
    },
    {
        "word": "ερχόμαστε",
        "translation": "Мы приходим ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Мы приходим "
        ],
        "transls": [
            "έρχομαι"
        ],
        "unicTransl": "приходить, настать"
    },
    {
        "word": "έρχεστε / ερχόσαστε",
        "translation": "Вы приходите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Вы приходите "
        ],
        "transls": [
            "έρχομαι"
        ],
        "unicTransl": "приходить, настать"
    },
    {
        "word": "έρχονται",
        "translation": "Они приходят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "έρχομαι",
        "notice": "",
        "qws": [
            "Они приходят "
        ],
        "transls": [
            "έρχομαι"
        ],
        "unicTransl": "приходить, настать"
    },
    {
        "word": "εξηγώ",
        "translation": "Я объясняю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Я объясняю "
        ],
        "transls": [
            "εξηγώ"
        ],
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγείς",
        "translation": "Ты объясняешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Ты объясняешь "
        ],
        "transls": [
            "εξηγώ"
        ],
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγεί",
        "translation": "Он объясняет ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Он объясняет "
        ],
        "transls": [
            "εξηγώ"
        ],
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγούμε",
        "translation": "Мы объясняем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Мы объясняем "
        ],
        "transls": [
            "εξηγώ"
        ],
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγείτε",
        "translation": "Вы объясняете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Вы объясняете "
        ],
        "transls": [
            "εξηγώ"
        ],
        "unicTransl": "объяснять"
    },
    {
        "word": "εξηγούν / εξηγούνε",
        "translation": "Они объясняют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "εξηγώ",
        "notice": "",
        "qws": [
            "Они объясняют "
        ],
        "transls": [
            "εξηγώ"
        ],
        "unicTransl": "объяснять"
    },
    {
        "word": "έχω",
        "translation": "У меня есть ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У меня есть "
        ],
        "transls": [
            "έχω"
        ],
        "unicTransl": "иметь"
    },
    {
        "word": "έχεις",
        "translation": "У тебя есть ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У тебя есть "
        ],
        "transls": [
            "έχω"
        ],
        "unicTransl": "иметь"
    },
    {
        "word": "έχει",
        "translation": "У неё есть ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У неё есть "
        ],
        "transls": [
            "έχω"
        ],
        "unicTransl": "иметь"
    },
    {
        "word": "έχουμε",
        "translation": "У нас есть ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У нас есть "
        ],
        "transls": [
            "έχω"
        ],
        "unicTransl": "иметь"
    },
    {
        "word": "έχετε",
        "translation": "У вас есть ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У вас есть "
        ],
        "transls": [
            "έχω"
        ],
        "unicTransl": "иметь"
    },
    {
        "word": "έχουν / έχουνε",
        "translation": "У них есть ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "έχω",
        "notice": "",
        "qws": [
            "У них есть "
        ],
        "transls": [
            "έχω"
        ],
        "unicTransl": "иметь"
    },
    {
        "word": "φέρω",
        "translation": "Я несу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Я несу "
        ],
        "transls": [
            "φέρω"
        ],
        "unicTransl": "приносить"
    },
    {
        "word": "φέρεις",
        "translation": "Ты несёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Ты несёшь "
        ],
        "transls": [
            "φέρω"
        ],
        "unicTransl": "приносить"
    },
    {
        "word": "φέρει",
        "translation": "Он несёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Он несёт "
        ],
        "transls": [
            "φέρω"
        ],
        "unicTransl": "приносить"
    },
    {
        "word": "φέρουμε / φέρομε",
        "translation": "Мы несём ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Мы несём "
        ],
        "transls": [
            "φέρω"
        ],
        "unicTransl": "приносить"
    },
    {
        "word": "φέρετε",
        "translation": "Вы несёте ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Вы несёте "
        ],
        "transls": [
            "φέρω"
        ],
        "unicTransl": "приносить"
    },
    {
        "word": "φέρουνε",
        "translation": "Они несут ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φέρω",
        "notice": "",
        "qws": [
            "Они несут "
        ],
        "transls": [
            "φέρω"
        ],
        "unicTransl": "приносить"
    },
    {
        "word": "θέλω",
        "translation": "Я хочу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Я хочу "
        ],
        "transls": [
            "θέλω"
        ],
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλεις / θες",
        "translation": "Ты хочешь ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Ты хочешь "
        ],
        "transls": [
            "θέλω"
        ],
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλει",
        "translation": "Она хочет ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Она хочет "
        ],
        "transls": [
            "θέλω"
        ],
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλουμε / θέλομε",
        "translation": "Мы хочем ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Мы хочем "
        ],
        "transls": [
            "θέλω"
        ],
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλετε",
        "translation": "Вы хочете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Вы хочете "
        ],
        "transls": [
            "θέλω"
        ],
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλουν / θέλουνε",
        "translation": "Они хотят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Они хотят "
        ],
        "transls": [
            "θέλω"
        ],
        "unicTransl": "хотеть"
    },
    {
        "word": "θεωρώ",
        "translation": "Я полагаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Я полагаю "
        ],
        "transls": [
            "θεωρώ"
        ],
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρείς",
        "translation": "Ты полагаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Ты полагаешь "
        ],
        "transls": [
            "θεωρώ"
        ],
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρεί",
        "translation": "Он полагает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Он полагает "
        ],
        "transls": [
            "θεωρώ"
        ],
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρούμε",
        "translation": "Мы полагаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Мы полагаем "
        ],
        "transls": [
            "θεωρώ"
        ],
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρείτε",
        "translation": "Вы полагаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Вы полагаете "
        ],
        "transls": [
            "θεωρώ"
        ],
        "unicTransl": "считать, думать"
    },
    {
        "word": "θεωρούν / θεωρούνε",
        "translation": "Они полагают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "θεωρώ",
        "notice": "",
        "qws": [
            "Они полагают "
        ],
        "transls": [
            "θεωρώ"
        ],
        "unicTransl": "считать, думать"
    },
    {
        "word": "καλώ",
        "translation": "Я зову ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Я зову "
        ],
        "transls": [
            "καλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "καλείς",
        "translation": "Ты зовёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Ты зовёшь "
        ],
        "transls": [
            "καλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "καλεί",
        "translation": "Она зовёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Она зовёт "
        ],
        "transls": [
            "καλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "καλούμε",
        "translation": "Мы зовём ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Мы зовём "
        ],
        "transls": [
            "καλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "καλείτε",
        "translation": "Вы зовёте ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Вы зовёте "
        ],
        "transls": [
            "καλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "καλούν / καλούνε",
        "translation": "Они зовут ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Они зовут "
        ],
        "transls": [
            "καλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "καπνίζω",
        "translation": "Я курю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Я курю "
        ],
        "transls": [
            "καπνίζω"
        ],
        "unicTransl": "курить"
    },
    {
        "word": "καπνίζεις",
        "translation": "Ты куришь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Ты куришь "
        ],
        "transls": [
            "καπνίζω"
        ],
        "unicTransl": "курить"
    },
    {
        "word": "καπνίζει",
        "translation": "Он курит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Он курит "
        ],
        "transls": [
            "καπνίζω"
        ],
        "unicTransl": "курить"
    },
    {
        "word": "καπνίζουμε / καπνίζομε",
        "translation": "Мы курим ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Мы курим "
        ],
        "transls": [
            "καπνίζω"
        ],
        "unicTransl": "курить"
    },
    {
        "word": "καπνίζετε",
        "translation": "Вы курите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Вы курите "
        ],
        "transls": [
            "καπνίζω"
        ],
        "unicTransl": "курить"
    },
    {
        "word": "καπνίζουν / καπνίζουνε",
        "translation": "Они курят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καπνίζω",
        "notice": "",
        "qws": [
            "Они курят "
        ],
        "transls": [
            "καπνίζω"
        ],
        "unicTransl": "курить"
    },
    {
        "word": "κάνω",
        "translation": "Я делаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Я делаю "
        ],
        "transls": [
            "κάνω"
        ],
        "unicTransl": "делать"
    },
    {
        "word": "κάνεις",
        "translation": "Ты делаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Ты делаешь "
        ],
        "transls": [
            "κάνω"
        ],
        "unicTransl": "делать"
    },
    {
        "word": "κάνει",
        "translation": "Она делает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Она делает "
        ],
        "transls": [
            "κάνω"
        ],
        "unicTransl": "делать"
    },
    {
        "word": "κάνουμε",
        "translation": "Мы делаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Мы делаем "
        ],
        "transls": [
            "κάνω"
        ],
        "unicTransl": "делать"
    },
    {
        "word": "κάνετε",
        "translation": "Вы делаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Вы делаете "
        ],
        "transls": [
            "κάνω"
        ],
        "unicTransl": "делать"
    },
    {
        "word": "κάνουν / κάνουνε",
        "translation": "Они делают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "κάνω",
        "notice": "",
        "qws": [
            "Они делают "
        ],
        "transls": [
            "κάνω"
        ],
        "unicTransl": "делать"
    },
    {
        "word": "καταλαβαίνω",
        "translation": "Я понимаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Я понимаю "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "unicTransl": "понимать"
    },
    {
        "word": "καταλαβαίνεις",
        "translation": "Ты понимаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Ты понимаешь "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "unicTransl": "понимать"
    },
    {
        "word": "καταλαβαίνει",
        "translation": "Он понимает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Он понимает "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "unicTransl": "понимать"
    },
    {
        "word": "καταλαβαίνουμε",
        "translation": "Мы понимаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Мы понимаем "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "unicTransl": "понимать"
    },
    {
        "word": "καταλαβαίνετε",
        "translation": "Вы понимаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Вы понимаете "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "unicTransl": "понимать"
    },
    {
        "word": "καταλαβαίνουν / καταλαβαίνουνε",
        "translation": "Они понимают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Они понимают "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "unicTransl": "понимать"
    },
    {
        "word": "κοιμάμαι / κοιμούμαι",
        "translation": "Я сплю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Я сплю "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "unicTransl": "спать"
    },
    {
        "word": "κοιμάσαι",
        "translation": "Ты спишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Ты спишь "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "unicTransl": "спать"
    },
    {
        "word": "κοιμάται",
        "translation": "Она спит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Она спит "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "unicTransl": "спать"
    },
    {
        "word": "κοιμόμαστε / κοιμούμαστε",
        "translation": "Мы спим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Мы спим "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "unicTransl": "спать"
    },
    {
        "word": "κοιμάστε",
        "translation": "Вы спите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Вы спите "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "unicTransl": "спать"
    },
    {
        "word": "κοιμούνται",
        "translation": "Они спят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "κοιμάμαι",
        "notice": "",
        "qws": [
            "Они спят "
        ],
        "transls": [
            "κοιμάμαι"
        ],
        "unicTransl": "спать"
    },
    {
        "word": "κλαίω",
        "translation": "Я плачу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Я плачу "
        ],
        "transls": [
            "κλαίω"
        ],
        "unicTransl": "плакать"
    },
    {
        "word": "κλαις",
        "translation": "Ты плачешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Ты плачешь "
        ],
        "transls": [
            "κλαίω"
        ],
        "unicTransl": "плакать"
    },
    {
        "word": "κλαίει",
        "translation": "Он плачет ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Он плачет "
        ],
        "transls": [
            "κλαίω"
        ],
        "unicTransl": "плакать"
    },
    {
        "word": "κλαίμε",
        "translation": "Мы плачем ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Мы плачем "
        ],
        "transls": [
            "κλαίω"
        ],
        "unicTransl": "плакать"
    },
    {
        "word": "κλαίτε",
        "translation": "Вы плачете ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Вы плачете "
        ],
        "transls": [
            "κλαίω"
        ],
        "unicTransl": "плакать"
    },
    {
        "word": "κλαίνε",
        "translation": "Они плачут ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "κλαίω",
        "notice": "",
        "qws": [
            "Они плачут "
        ],
        "transls": [
            "κλαίω"
        ],
        "unicTransl": "плакать"
    },
    {
        "word": "κολυμπάω / κολυμπώ",
        "translation": "Я плаваю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Я плаваю "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπάς",
        "translation": "Ты плаваешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Ты плаваешь "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπάει / κολυμπά",
        "translation": "Она плавает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Она плавает "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπάμε / κολυμπούμε",
        "translation": "Мы плаваем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Мы плаваем "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπάτε",
        "translation": "Вы плаваете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Вы плаваете "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "unicTransl": "плавать"
    },
    {
        "word": "κολυμπάν / κολυμπούν / κολυμπάνε / κολυμπούνε",
        "translation": "Они плавают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "κολυμπώ, -άω",
        "notice": "",
        "qws": [
            "Они плавают "
        ],
        "transls": [
            "κολυμπώ, -άω"
        ],
        "unicTransl": "плавать"
    },
    {
        "word": "λέω / λέγω",
        "translation": "Я говорю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Я говорю "
        ],
        "transls": [
            "λέω"
        ],
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "λες / λέγεις",
        "translation": "Ты говоришь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Ты говоришь "
        ],
        "transls": [
            "λέω"
        ],
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "λέει / λέγει",
        "translation": "Она говорит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Она говорит "
        ],
        "transls": [
            "λέω"
        ],
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "λέμε / λέγομε",
        "translation": "Мы говорим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Мы говорим "
        ],
        "transls": [
            "λέω"
        ],
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "λέτε / λέγετε",
        "translation": "Вы говорите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Вы говорите "
        ],
        "transls": [
            "λέω"
        ],
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "λένε / λεν / λέγουνε",
        "translation": "Они говорят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Они говорят "
        ],
        "transls": [
            "λέω"
        ],
        "unicTransl": "сказать, говорить"
    },
    {
        "word": "μαγειρεύω",
        "translation": "Я готовлю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Я готовлю "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγειρεύεις",
        "translation": "Ты готовишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Ты готовишь "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγειρεύει",
        "translation": "Он готовит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Он готовит "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγειρεύουμε",
        "translation": "Мы готовим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Мы готовим "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγειρεύετε",
        "translation": "Вы готовите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Вы готовите "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαγειρεύουν / μαγειρεύουνε",
        "translation": "Они готовят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαγειρεύω",
        "notice": "",
        "qws": [
            "Они готовят "
        ],
        "transls": [
            "μαγειρεύω"
        ],
        "unicTransl": "готовить (пищу), варить"
    },
    {
        "word": "μαθαίνω",
        "translation": "Я учу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Я учу "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μαθαίνεις",
        "translation": "Ты учишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Ты учишь "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μαθαίνει",
        "translation": "Она учит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Она учит "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μαθαίνουμε",
        "translation": "Мы учим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Мы учим "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μαθαίνετε",
        "translation": "Вы учите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Вы учите "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μαθαίνουν / μαθαίνουνε",
        "translation": "Они учат ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Они учат "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "unicTransl": "учить, учиться"
    },
    {
        "word": "μένω",
        "translation": "Я проживаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Я проживаю "
        ],
        "transls": [
            "μένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "μένεις",
        "translation": "Ты проживаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Ты проживаешь "
        ],
        "transls": [
            "μένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "μένει",
        "translation": "Он проживает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Он проживает "
        ],
        "transls": [
            "μένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "μένουμε",
        "translation": "Мы проживаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Мы проживаем "
        ],
        "transls": [
            "μένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "μένετε",
        "translation": "Вы проживаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Вы проживаете "
        ],
        "transls": [
            "μένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "μένουν / μένουνε",
        "translation": "Они проживают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Они проживают "
        ],
        "transls": [
            "μένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "μεταφράζω",
        "translation": "Я перевожу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Я перевожу "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "unicTransl": "переводить"
    },
    {
        "word": "μεταφράζεις",
        "translation": "Ты переводит ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Ты переводит "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "unicTransl": "переводить"
    },
    {
        "word": "μεταφράζει",
        "translation": "Она переводит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Она переводит "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "unicTransl": "переводить"
    },
    {
        "word": "μεταφράζουμε",
        "translation": "Мы переводим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Мы переводим "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "unicTransl": "переводить"
    },
    {
        "word": "μεταφράζετε",
        "translation": "Вы переводите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Вы переводите "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "unicTransl": "переводить"
    },
    {
        "word": "μεταφράζουν / μεταφράζουνε",
        "translation": "Они переводят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Они переводят "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "unicTransl": "переводить"
    },
    {
        "word": "μισώ",
        "translation": "Я ненавижу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Я ненавижу "
        ],
        "transls": [
            "μισώ"
        ],
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισείς",
        "translation": "Ты ненавидишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Ты ненавидишь "
        ],
        "transls": [
            "μισώ"
        ],
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισεί",
        "translation": "Он ненавидит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Он ненавидит "
        ],
        "transls": [
            "μισώ"
        ],
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισούμε",
        "translation": "Мы ненавидим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Мы ненавидим "
        ],
        "transls": [
            "μισώ"
        ],
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισείτε",
        "translation": "Вы ненавидите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Вы ненавидите "
        ],
        "transls": [
            "μισώ"
        ],
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μισούν / μισούνε",
        "translation": "Они ненавидят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μισώ",
        "notice": "",
        "qws": [
            "Они ненавидят "
        ],
        "transls": [
            "μισώ"
        ],
        "unicTransl": "ненавидеть"
    },
    {
        "word": "μπαίνω",
        "translation": "Я вхожу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Я вхожу "
        ],
        "transls": [
            "μπαίνω"
        ],
        "unicTransl": "входить"
    },
    {
        "word": "μπαίνεις",
        "translation": "Ты входишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Ты входишь "
        ],
        "transls": [
            "μπαίνω"
        ],
        "unicTransl": "входить"
    },
    {
        "word": "μπαίνει",
        "translation": "Она входит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Она входит "
        ],
        "transls": [
            "μπαίνω"
        ],
        "unicTransl": "входить"
    },
    {
        "word": "μπαίνουμε",
        "translation": "Мы входим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Мы входим "
        ],
        "transls": [
            "μπαίνω"
        ],
        "unicTransl": "входить"
    },
    {
        "word": "μπαίνετε",
        "translation": "Вы входите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Вы входите "
        ],
        "transls": [
            "μπαίνω"
        ],
        "unicTransl": "входить"
    },
    {
        "word": "μπαίνουν / μπαίνουνε",
        "translation": "Они входят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Они входят "
        ],
        "transls": [
            "μπαίνω"
        ],
        "unicTransl": "входить"
    },
    {
        "word": "μπορώ",
        "translation": "Я могу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Я могу "
        ],
        "transls": [
            "μπορώ"
        ],
        "unicTransl": "мочь"
    },
    {
        "word": "μπορείς",
        "translation": "Ты можешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Ты можешь "
        ],
        "transls": [
            "μπορώ"
        ],
        "unicTransl": "мочь"
    },
    {
        "word": "μπορεί",
        "translation": "Он может ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Он может "
        ],
        "transls": [
            "μπορώ"
        ],
        "unicTransl": "мочь"
    },
    {
        "word": "μπορούμε",
        "translation": "Мы можем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Мы можем "
        ],
        "transls": [
            "μπορώ"
        ],
        "unicTransl": "мочь"
    },
    {
        "word": "μπορείτε",
        "translation": "Вы можете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Вы можете "
        ],
        "transls": [
            "μπορώ"
        ],
        "unicTransl": "мочь"
    },
    {
        "word": "μπορούν / μπορούνε",
        "translation": "Они могут ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "μπορώ",
        "notice": "",
        "qws": [
            "Они могут "
        ],
        "transls": [
            "μπορώ"
        ],
        "unicTransl": "мочь"
    },
    {
        "word": "ξαπλώνω",
        "translation": "Я лежу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Я лежу "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξαπλώνεις",
        "translation": "Ты лежишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Ты лежишь "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξαπλώνει",
        "translation": "Она лежит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Она лежит "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξαπλώνουμε",
        "translation": "Мы лежим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Мы лежим "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξαπλώνετε",
        "translation": "Вы лежите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Вы лежите "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξαπλώνουν / ξαπλώνουνε",
        "translation": "Они лежат ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξαπλώνω",
        "notice": "",
        "qws": [
            "Они лежат "
        ],
        "transls": [
            "ξαπλώνω"
        ],
        "unicTransl": "лежать, ложиться"
    },
    {
        "word": "ξέρω",
        "translation": "Я знаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Я знаю "
        ],
        "transls": [
            "ξέρω"
        ],
        "unicTransl": "знать"
    },
    {
        "word": "ξέρεις",
        "translation": "Ты знаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Ты знаешь "
        ],
        "transls": [
            "ξέρω"
        ],
        "unicTransl": "знать"
    },
    {
        "word": "ξέρει",
        "translation": "Он знает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Он знает "
        ],
        "transls": [
            "ξέρω"
        ],
        "unicTransl": "знать"
    },
    {
        "word": "ξέρουμε",
        "translation": "Мы знаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Мы знаем "
        ],
        "transls": [
            "ξέρω"
        ],
        "unicTransl": "знать"
    },
    {
        "word": "ξέρετε",
        "translation": "Вы знаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Вы знаете "
        ],
        "transls": [
            "ξέρω"
        ],
        "unicTransl": "знать"
    },
    {
        "word": "ξέρουν / ξέρουνε",
        "translation": "Они знают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Они знают "
        ],
        "transls": [
            "ξέρω"
        ],
        "unicTransl": "знать"
    },
    {
        "word": "ξεχνάω / ξεχνώ",
        "translation": "Я забываю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Я забываю "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχνάς",
        "translation": "Ты забывает ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Ты забывает "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχνάει / ξεχνά",
        "translation": "Она забывает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Она забывает "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχνάμε / ξεχνούμε",
        "translation": "Мы забываем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Мы забываем "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχνάτε",
        "translation": "Вы забываете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Вы забываете "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ξεχνάν / ξεχνούν / ξεχνάνε / ξεχνούνε",
        "translation": "Они забывают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Они забывают "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "unicTransl": "забывать, забыть"
    },
    {
        "word": "ονειρεύομαι",
        "translation": "Я мечтаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Я мечтаю "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρεύεσαι",
        "translation": "Ты мечтаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Ты мечтаешь "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρεύεται",
        "translation": "Он мечтает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Он мечтает "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρευόμαστε",
        "translation": "Мы мечтаем ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Мы мечтаем "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρεύεστε",
        "translation": "Вы мечтаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Вы мечтаете "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "ονειρεύονται",
        "translation": "Они мечтают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "ονειρεύομαι",
        "notice": "",
        "qws": [
            "Они мечтают "
        ],
        "transls": [
            "ονειρεύομαι"
        ],
        "unicTransl": "мечтать, фантазировать, видеть сон"
    },
    {
        "word": "παρακαλάω / παρακαλώ",
        "translation": "Я прошу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Я прошу "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλάς / παρακαλείς",
        "translation": "Ты просишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Ты просишь "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλάει / παρακαλά / παρακαλεί",
        "translation": "Она просит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Она просит "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλάμε / παρακαλούμε",
        "translation": "Мы просим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Мы просим "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλάτε / παρακαλείτε",
        "translation": "Вы просите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Вы просите "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "παρακαλάν / παρακαλούν / παρακαλάνε / παρακαλούνε",
        "translation": "Они просят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "παρακαλώ",
        "notice": "",
        "qws": [
            "Они просят "
        ],
        "transls": [
            "παρακαλώ"
        ],
        "unicTransl": "просить"
    },
    {
        "word": "περιμένω",
        "translation": "Я жду ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Я жду "
        ],
        "transls": [
            "περιμένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "περιμένεις",
        "translation": "Ты ждёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Ты ждёшь "
        ],
        "transls": [
            "περιμένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "περιμένει",
        "translation": "Он ждёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Он ждёт "
        ],
        "transls": [
            "περιμένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "περιμένουμε / περιμένομε",
        "translation": "Мы ждём ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Мы ждём "
        ],
        "transls": [
            "περιμένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "περιμένετε",
        "translation": "Вы ждёте ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Вы ждёте "
        ],
        "transls": [
            "περιμένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "περιμένουν / περιμένουνε",
        "translation": "Они ждут ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Они ждут "
        ],
        "transls": [
            "περιμένω"
        ],
        "unicTransl": "ждать"
    },
    {
        "word": "περνάω / περνώ",
        "translation": "Я прохожу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Я прохожу "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περνάς",
        "translation": "Ты проходишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Ты проходишь "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περνάει / περνά",
        "translation": "Она проходит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Она проходит "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περνάμε / περνούμε",
        "translation": "Мы проходим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Мы проходим "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περνάτε",
        "translation": "Вы проходите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Вы проходите "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περνάνε / περνάν / περνούν / περνούνε",
        "translation": "Они проходят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περνώ, -άω",
        "notice": "",
        "qws": [
            "Они проходят "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "unicTransl": "проводить время, проходить, проникать"
    },
    {
        "word": "περπατάω / περπατώ",
        "translation": "Я прогуливаюсь ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Я прогуливаюсь "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατάς",
        "translation": "Ты прогуливаешься ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Ты прогуливаешься "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατάει / περπατά",
        "translation": "Он прогуливается ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Он прогуливается "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατάμε / περπατούμε",
        "translation": "Мы прогуливаемся ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Мы прогуливаемся "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατάτε",
        "translation": "Вы прогуливаетесь ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Вы прогуливаетесь "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "περπατάνε / περπατάν / περπατούν / περπατούνε",
        "translation": "Они прогуливаются ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "περπατώ, -άω",
        "notice": "",
        "qws": [
            "Они прогуливаются "
        ],
        "transls": [
            "περπατώ, -άω"
        ],
        "unicTransl": "ходить, гулять"
    },
    {
        "word": "πίνω",
        "translation": "Я пью ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Я пью "
        ],
        "transls": [
            "πίνω"
        ],
        "unicTransl": "пить"
    },
    {
        "word": "πίνεις",
        "translation": "Ты пьёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Ты пьёшь "
        ],
        "transls": [
            "πίνω"
        ],
        "unicTransl": "пить"
    },
    {
        "word": "πίνει",
        "translation": "Она пьёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Она пьёт "
        ],
        "transls": [
            "πίνω"
        ],
        "unicTransl": "пить"
    },
    {
        "word": "πίνουμε / πίνομε",
        "translation": "Мы пьём ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Мы пьём "
        ],
        "transls": [
            "πίνω"
        ],
        "unicTransl": "пить"
    },
    {
        "word": "πίνετε",
        "translation": "Вы пьёте ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Вы пьёте "
        ],
        "transls": [
            "πίνω"
        ],
        "unicTransl": "пить"
    },
    {
        "word": "πίνουν / πίνουνε",
        "translation": "Они пьют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πίνω",
        "notice": "",
        "qws": [
            "Они пьют "
        ],
        "transls": [
            "πίνω"
        ],
        "unicTransl": "пить"
    },
    {
        "word": "πηγαίνω / πάω",
        "translation": "Я иду ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Я иду "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πηγαίνεις / πας",
        "translation": "Ты идёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Ты идёшь "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πηγαίνει / πάει",
        "translation": "Он идёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Он идёт "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πηγαίνουμε / πηγαίνομε / πάμε",
        "translation": "Мы идём ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Мы идём "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πηγαίνετε / πάτε",
        "translation": "Вы идёте ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Вы идёте "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πηγαίνουν / πάνε / πηγαίνουνε / παν",
        "translation": "Они идут ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "πάω, πηγαίνω",
        "notice": "",
        "qws": [
            "Они идут "
        ],
        "transls": [
            "πάω, πηγαίνω"
        ],
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πλένω",
        "translation": "Я мою ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Я мою "
        ],
        "transls": [
            "πλένω"
        ],
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πλένεις",
        "translation": "Ты моешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Ты моешь "
        ],
        "transls": [
            "πλένω"
        ],
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πλένει",
        "translation": "Она моет ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Она моет "
        ],
        "transls": [
            "πλένω"
        ],
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πλένουμε / πλένομε",
        "translation": "Мы моем ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Мы моем "
        ],
        "transls": [
            "πλένω"
        ],
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πλένετε",
        "translation": "Вы моете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Вы моете "
        ],
        "transls": [
            "πλένω"
        ],
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πλένουν / πλένουνε",
        "translation": "Они моют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Они моют "
        ],
        "transls": [
            "πλένω"
        ],
        "unicTransl": "мыть, стирать бельё"
    },
    {
        "word": "πουλάω / πουλώ",
        "translation": "Я продаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Я продаю "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "unicTransl": "продавать"
    },
    {
        "word": "πουλάς",
        "translation": "Ты продаёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Ты продаёшь "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "unicTransl": "продавать"
    },
    {
        "word": "πουλάει / πουλά",
        "translation": "Он продаёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Он продаёт "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "unicTransl": "продавать"
    },
    {
        "word": "πουλάμε / πουλούμε",
        "translation": "Мы продаём ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Мы продаём "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "unicTransl": "продавать"
    },
    {
        "word": "πουλάτε",
        "translation": "Вы продаёте ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Вы продаёте "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "unicTransl": "продавать"
    },
    {
        "word": "πουλάν / πουλούν / πουλάνε / πουλούνε",
        "translation": "Они продают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "πουλώ, -άω",
        "notice": "",
        "qws": [
            "Они продают "
        ],
        "transls": [
            "πουλώ, -άω"
        ],
        "unicTransl": "продавать"
    },
    {
        "word": "προτιμάω / προτιμώ",
        "translation": "Я предпочитаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Я предпочитаю "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμάς",
        "translation": "Ты предпочитаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Ты предпочитаешь "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμάει / προτιμά",
        "translation": "Он предпочитает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Он предпочитает "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμάμε / προτιμούμε",
        "translation": "Мы предпочитаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Мы предпочитаем "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμάτε",
        "translation": "Вы предпочитаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Вы предпочитаете "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτιμάν / προτιμούν / προτιμάνε / προτιμούνε",
        "translation": "Они предпочитают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "προτιμώ, -άω",
        "notice": "",
        "qws": [
            "Они предпочитают "
        ],
        "transls": [
            "προτιμώ, -άω"
        ],
        "unicTransl": "нравиться, предпочитать"
    },
    {
        "word": "προτείνω",
        "translation": "Я предлагаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Я предлагаю "
        ],
        "transls": [
            "προτείνω"
        ],
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "προτείνεις",
        "translation": "Ты предлагаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Ты предлагаешь "
        ],
        "transls": [
            "προτείνω"
        ],
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "προτείνει",
        "translation": "Она предлагает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Она предлагает "
        ],
        "transls": [
            "προτείνω"
        ],
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "προτείνουμε / προτείνομε",
        "translation": "Мы предлагаем ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Мы предлагаем "
        ],
        "transls": [
            "προτείνω"
        ],
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "προτείνετε",
        "translation": "Вы предлагаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Вы предлагаете "
        ],
        "transls": [
            "προτείνω"
        ],
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "προτείνουν / προτείνουνε",
        "translation": "Они предлагают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "προτείνω",
        "notice": "",
        "qws": [
            "Они предлагают "
        ],
        "transls": [
            "προτείνω"
        ],
        "unicTransl": "предлагать, советовать"
    },
    {
        "word": "σηκώνομαι",
        "translation": "Я встаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Я встаю "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "unicTransl": "вставать"
    },
    {
        "word": "σηκώνεσαι",
        "translation": "Ты встаёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Ты встаёшь "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "unicTransl": "вставать"
    },
    {
        "word": "σηκώνεται",
        "translation": "Он встаёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Он встаёт "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "unicTransl": "вставать"
    },
    {
        "word": "σηκωνόμαστε",
        "translation": "Мы встаём ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Мы встаём "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "unicTransl": "вставать"
    },
    {
        "word": "σηκώνεστε",
        "translation": "Вы встаёте ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Вы встаёте "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "unicTransl": "вставать"
    },
    {
        "word": "σηκώνονται",
        "translation": "Они встают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σηκώνομαι",
        "notice": "",
        "qws": [
            "Они встают "
        ],
        "transls": [
            "σηκώνομαι"
        ],
        "unicTransl": "вставать"
    },
    {
        "word": "σκέφτομαι",
        "translation": "Я думаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Я думаю "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκέφτεσαι",
        "translation": "Ты думаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Ты думаешь "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκέφτεται",
        "translation": "Она думает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Она думает "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκεφτόμαστε",
        "translation": "Мы думаем ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Мы думаем "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκέφτεστε",
        "translation": "Вы думаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Вы думаете "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "σκέφτονται",
        "translation": "Они думают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σκέφτομαι",
        "notice": "",
        "qws": [
            "Они думают "
        ],
        "transls": [
            "σκέφτομαι"
        ],
        "unicTransl": "думать, размышлять, мыслить"
    },
    {
        "word": "στέλνω",
        "translation": "Я посылаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Я посылаю "
        ],
        "transls": [
            "στέλνω"
        ],
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "στέλνεις",
        "translation": "Ты посылаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Ты посылаешь "
        ],
        "transls": [
            "στέλνω"
        ],
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "στέλνει",
        "translation": "Он посылает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Он посылает "
        ],
        "transls": [
            "στέλνω"
        ],
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "στέλνουμε",
        "translation": "Мы посылаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Мы посылаем "
        ],
        "transls": [
            "στέλνω"
        ],
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "στέλνετε",
        "translation": "Вы посылаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Вы посылаете "
        ],
        "transls": [
            "στέλνω"
        ],
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "στέλνουν / στέλνουνε",
        "translation": "Они посылают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Они посылают "
        ],
        "transls": [
            "στέλνω"
        ],
        "unicTransl": "посылать, отправлять"
    },
    {
        "word": "συμφωνώ",
        "translation": "Я соглашаюсь ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Я соглашаюсь "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνείς",
        "translation": "Ты соглашаешься ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Ты соглашаешься "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνεί",
        "translation": "Она соглашается ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Она соглашается "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνούμε",
        "translation": "Мы соглашаемся ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Мы соглашаемся "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνείτε",
        "translation": "Вы соглашаетесь ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Вы соглашаетесь "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "unicTransl": "соглашаться"
    },
    {
        "word": "συμφωνούν / συμφωνούνε",
        "translation": "Они соглашаются ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "συμφωνώ",
        "notice": "",
        "qws": [
            "Они соглашаются "
        ],
        "transls": [
            "συμφωνώ"
        ],
        "unicTransl": "соглашаться"
    },
    {
        "word": "συναντάω / συναντώ",
        "translation": "Я встречаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Я встречаю "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντάς",
        "translation": "Ты встречаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Ты встречаешь "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντάει / συναντά",
        "translation": "Он встречает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Он встречает "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντάμε / συναντούμε",
        "translation": "Мы встречаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Мы встречаем "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντάτε",
        "translation": "Вы встречаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Вы встречаете "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "συναντάν / συναντούν / συναντάνε / συναντούνε",
        "translation": "Они встречают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συναντώ, -άω",
        "notice": "",
        "qws": [
            "Они встречают "
        ],
        "transls": [
            "συναντώ, -άω"
        ],
        "unicTransl": "встречать, встретиться"
    },
    {
        "word": "ταξιδεύω",
        "translation": "Я путешествовую ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Я путешествовую "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξιδεύεις",
        "translation": "Ты путешествовуешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Ты путешествовуешь "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξιδεύει",
        "translation": "Она путешествовует ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Она путешествовует "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξιδεύουμε",
        "translation": "Мы путешествовуем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Мы путешествовуем "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξιδεύετε",
        "translation": "Вы путешествовуете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Вы путешествовуете "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "ταξιδεύουν / ταξιδεύουνε",
        "translation": "Они путешествовуют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "ταξιδεύω",
        "notice": "",
        "qws": [
            "Они путешествовуют "
        ],
        "transls": [
            "ταξιδεύω"
        ],
        "unicTransl": "путешествовать, ездить"
    },
    {
        "word": "τελειώνω",
        "translation": "Я заканчиваю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Я заканчиваю "
        ],
        "transls": [
            "τελειώνω"
        ],
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελειώνεις",
        "translation": "Ты заканчиваешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Ты заканчиваешь "
        ],
        "transls": [
            "τελειώνω"
        ],
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελειώνει",
        "translation": "Он заканчивает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Он заканчивает "
        ],
        "transls": [
            "τελειώνω"
        ],
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελειώνουμε",
        "translation": "Мы заканчиваем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Мы заканчиваем "
        ],
        "transls": [
            "τελειώνω"
        ],
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελειώνετε",
        "translation": "Вы заканчиваете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Вы заканчиваете "
        ],
        "transls": [
            "τελειώνω"
        ],
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τελειώνουν / τελειώνουνε",
        "translation": "Они заканчивают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "τελειώνω",
        "notice": "",
        "qws": [
            "Они заканчивают "
        ],
        "transls": [
            "τελειώνω"
        ],
        "unicTransl": "заканчивать, кончаться"
    },
    {
        "word": "τηλεφωνάω / τηλεφωνώ",
        "translation": "Я звоню ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Я звоню "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνάς / τηλεφωνείς",
        "translation": "Ты звонишь ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Ты звонишь "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνάει / τηλεφωνά / τηλεφωνεί",
        "translation": "Она звонит ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Она звонит "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνάμε / τηλεφωνούμε",
        "translation": "Мы звоним ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Мы звоним "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνάτε / τηλεφωνείτε",
        "translation": "Вы звоните ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Вы звоните "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "unicTransl": "звонить"
    },
    {
        "word": "τηλεφωνάν / τηλεφωνούν / τηλεφωνάνε / τηλεφωνούνε",
        "translation": "Они звонят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τηλεφωνώ, -άω",
        "notice": "",
        "qws": [
            "Они звонят "
        ],
        "transls": [
            "τηλεφωνώ, -άω"
        ],
        "unicTransl": "звонить"
    },
    {
        "word": "υπάρχω",
        "translation": "Я существую ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Я существую "
        ],
        "transls": [
            "υπάρχω"
        ],
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπάρχεις",
        "translation": "Ты существуешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Ты существуешь "
        ],
        "transls": [
            "υπάρχω"
        ],
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπάρχει",
        "translation": "Она существует ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Она существует "
        ],
        "transls": [
            "υπάρχω"
        ],
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπάρχουμε",
        "translation": "Мы существуем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Мы существуем "
        ],
        "transls": [
            "υπάρχω"
        ],
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπάρχετε",
        "translation": "Вы существуете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Вы существуете "
        ],
        "transls": [
            "υπάρχω"
        ],
        "unicTransl": "существовать, быть"
    },
    {
        "word": "υπάρχουν / υπάρχουνε",
        "translation": "Они существуют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Они существуют "
        ],
        "transls": [
            "υπάρχω"
        ],
        "unicTransl": "существовать, быть"
    },
    {
        "word": "φιλάω / φιλώ",
        "translation": "Я целую ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Я целую "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλάς",
        "translation": "Ты целуешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Ты целуешь "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλάει / φιλά",
        "translation": "Он целует ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Он целует "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλάμε / φιλούμε",
        "translation": "Мы целуем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Мы целуем "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλάτε",
        "translation": "Вы целуете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Вы целуете "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φιλάν / φιλούν / φιλάνε / φιλούνε",
        "translation": "Они целуют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "φιλώ, -άω",
        "notice": "",
        "qws": [
            "Они целуют "
        ],
        "transls": [
            "φιλώ, -άω"
        ],
        "unicTransl": "целовать, целоваться"
    },
    {
        "word": "φτάνω",
        "translation": "Я добираюсь ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Я добираюсь "
        ],
        "transls": [
            "φτάνω"
        ],
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "φτάνεις",
        "translation": "Ты добираешься ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Ты добираешься "
        ],
        "transls": [
            "φτάνω"
        ],
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "φτάνει",
        "translation": "Она добирается ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Она добирается "
        ],
        "transls": [
            "φτάνω"
        ],
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "φτάνουμε",
        "translation": "Мы добираемся ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Мы добираемся "
        ],
        "transls": [
            "φτάνω"
        ],
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "φτάνετε",
        "translation": "Вы добираетесь ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Вы добираетесь "
        ],
        "transls": [
            "φτάνω"
        ],
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "φτάνουν / φτάνουνε",
        "translation": "Они добираются ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "φτάνω",
        "notice": "",
        "qws": [
            "Они добираются "
        ],
        "transls": [
            "φτάνω"
        ],
        "unicTransl": "достигать, приходить, добираться"
    },
    {
        "word": "χαίρομαι",
        "translation": "Я радуюсь ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Я радуюсь "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "unicTransl": "радоваться"
    },
    {
        "word": "χαίρεσαι",
        "translation": "Ты радуешься ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Ты радуешься "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "unicTransl": "радоваться"
    },
    {
        "word": "χαίρεται",
        "translation": "Он радуется ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Он радуется "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "unicTransl": "радоваться"
    },
    {
        "word": "χαιρόμαστε",
        "translation": "Мы радуемся ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Мы радуемся "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "unicTransl": "радоваться"
    },
    {
        "word": "χαίρεστε / χαιρόσαστε",
        "translation": "Вы радуетесь ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Вы радуетесь "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "unicTransl": "радоваться"
    },
    {
        "word": "χαίρονται",
        "translation": "Они радуются ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "χαίρομαι",
        "notice": "",
        "qws": [
            "Они радуются "
        ],
        "transls": [
            "χαίρομαι"
        ],
        "unicTransl": "радоваться"
    },
    {
        "word": "χαλαρώνω",
        "translation": "Я расслабляюсь ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Я расслабляюсь "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλαρώνεις",
        "translation": "Ты расслабляешься ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Ты расслабляешься "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλαρώνει",
        "translation": "Она расслабляется ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Она расслабляется "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλαρώνουμε / χαλαρώνομε",
        "translation": "Мы расслабляемся ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Мы расслабляемся "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλαρώνετε",
        "translation": "Вы расслабляетесь ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Вы расслабляетесь "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χαλαρώνουν / χαλαρώνουνε",
        "translation": "Они расслабляются ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χαλαρώνω",
        "notice": "",
        "qws": [
            "Они расслабляются "
        ],
        "transls": [
            "χαλαρώνω"
        ],
        "unicTransl": "расслабляться, расслаблять, расстёгивать"
    },
    {
        "word": "χάνω",
        "translation": "Я теряю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Я теряю "
        ],
        "transls": [
            "χάνω"
        ],
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χάνεις",
        "translation": "Ты теряешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Ты теряешь "
        ],
        "transls": [
            "χάνω"
        ],
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χάνει",
        "translation": "Он теряет ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Он теряет "
        ],
        "transls": [
            "χάνω"
        ],
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χάνουμε / χάνομε",
        "translation": "Мы теряем ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Мы теряем "
        ],
        "transls": [
            "χάνω"
        ],
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χάνετε",
        "translation": "Вы теряете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Вы теряете "
        ],
        "transls": [
            "χάνω"
        ],
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χάνουν / χάνουνε",
        "translation": "Они теряют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χάνω",
        "notice": "",
        "qws": [
            "Они теряют "
        ],
        "transls": [
            "χάνω"
        ],
        "unicTransl": "терять, проигрывать"
    },
    {
        "word": "χορεύω",
        "translation": "Я танцую ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Я танцую "
        ],
        "transls": [
            "χορεύω"
        ],
        "unicTransl": "танцевать"
    },
    {
        "word": "χορεύεις",
        "translation": "Ты танцуешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Ты танцуешь "
        ],
        "transls": [
            "χορεύω"
        ],
        "unicTransl": "танцевать"
    },
    {
        "word": "χορεύει",
        "translation": "Она танцует ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Она танцует "
        ],
        "transls": [
            "χορεύω"
        ],
        "unicTransl": "танцевать"
    },
    {
        "word": "χορεύουμε / χορεύομε",
        "translation": "Мы танцуем ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Мы танцуем "
        ],
        "transls": [
            "χορεύω"
        ],
        "unicTransl": "танцевать"
    },
    {
        "word": "χορεύετε",
        "translation": "Вы танцуете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Вы танцуете "
        ],
        "transls": [
            "χορεύω"
        ],
        "unicTransl": "танцевать"
    },
    {
        "word": "χορεύουν / χορεύουνε",
        "translation": "Они танцуют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "χορεύω",
        "notice": "",
        "qws": [
            "Они танцуют "
        ],
        "transls": [
            "χορεύω"
        ],
        "unicTransl": "танцевать"
    },
    {
        "word": "χρησιμοποιώ",
        "translation": "Я использую ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Я использую "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιείς",
        "translation": "Ты используешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Ты используешь "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιεί",
        "translation": "Он использует ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Он использует "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιούμε",
        "translation": "Мы используем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Мы используем "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιείτε",
        "translation": "Вы используете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Вы используете "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "χρησιμοποιούν / χρησιμοποιούνε",
        "translation": "Они используют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B2",
        "base": "χρησιμοποιώ",
        "notice": "",
        "qws": [
            "Они используют "
        ],
        "transls": [
            "χρησιμοποιώ"
        ],
        "unicTransl": "использовать, употреблять"
    },
    {
        "word": "υποθέτω",
        "translation": "Я предполагаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Я предполагаю "
        ],
        "transls": [
            "υποθέτω"
        ],
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υποθέτεις",
        "translation": "Ты предполагаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Ты предполагаешь "
        ],
        "transls": [
            "υποθέτω"
        ],
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υποθέτει",
        "translation": "Она предполагает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Она предполагает "
        ],
        "transls": [
            "υποθέτω"
        ],
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υποθέτουμε",
        "translation": "Мы предполагаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Мы предполагаем "
        ],
        "transls": [
            "υποθέτω"
        ],
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υποθέτετε",
        "translation": "Вы предполагаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Вы предполагаете "
        ],
        "transls": [
            "υποθέτω"
        ],
        "unicTransl": "полагать, считать"
    },
    {
        "word": "υποθέτουν / υποθέτουνε",
        "translation": "Они предполагают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Они предполагают "
        ],
        "transls": [
            "υποθέτω"
        ],
        "unicTransl": "полагать, считать"
    },
    {
        "word": "γνωρίζω",
        "translation": "Я узнаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Я узнаю "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνωρίζεις",
        "translation": "Ты узнаёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Ты узнаёшь "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνωρίζει",
        "translation": "Он узнаёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Он узнаёт "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνωρίζουμε",
        "translation": "Мы узнаём ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Мы узнаём "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνωρίζετε",
        "translation": "Вы узнаёте ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Вы узнаёте "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "γνωρίζουν / γνωρίζουνε",
        "translation": "Они узнают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "γνωρίζω",
        "notice": "",
        "qws": [
            "Они узнают "
        ],
        "transls": [
            "γνωρίζω"
        ],
        "unicTransl": "знать, уметь, ведать"
    },
    {
        "word": "βοηθάω / βοηθώ",
        "translation": "Я помогаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Я помогаю "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθάς",
        "translation": "Ты помогаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Ты помогаешь "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθάει / βοηθά",
        "translation": "Она помогает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Она помогает "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθάμε / βοηθούμε",
        "translation": "Мы помогаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Мы помогаем "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθάτε",
        "translation": "Вы помогаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Вы помогаете "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "unicTransl": "помогать"
    },
    {
        "word": "βοηθάνε / βοηθάν / βοηθούν / βοηθούνε",
        "translation": "Они помогают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "βοηθώ, -άω",
        "notice": "",
        "qws": [
            "Они помогают "
        ],
        "transls": [
            "βοηθώ, -άω"
        ],
        "unicTransl": "помогать"
    },
    {
        "word": "δουλεύω",
        "translation": "Я работаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Я работаю "
        ],
        "transls": [
            "δουλεύω"
        ],
        "unicTransl": "работать"
    },
    {
        "word": "δουλεύεις",
        "translation": "Ты работаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Ты работаешь "
        ],
        "transls": [
            "δουλεύω"
        ],
        "unicTransl": "работать"
    },
    {
        "word": "δουλεύει",
        "translation": "Он работает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Он работает "
        ],
        "transls": [
            "δουλεύω"
        ],
        "unicTransl": "работать"
    },
    {
        "word": "δουλεύουμε / δουλεύομε",
        "translation": "Мы работаем ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Мы работаем "
        ],
        "transls": [
            "δουλεύω"
        ],
        "unicTransl": "работать"
    },
    {
        "word": "δουλεύετε",
        "translation": "Вы работаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Вы работаете "
        ],
        "transls": [
            "δουλεύω"
        ],
        "unicTransl": "работать"
    },
    {
        "word": "δουλεύουν / δουλεύουνε",
        "translation": "Они работают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа A",
        "base": "δουλεύω",
        "notice": "",
        "qws": [
            "Они работают "
        ],
        "transls": [
            "δουλεύω"
        ],
        "unicTransl": "работать"
    },
    {
        "word": "φταίω",
        "translation": "Я виноват ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Я виноват "
        ],
        "transls": [
            "φταίω"
        ],
        "unicTransl": "быть виноватым"
    },
    {
        "word": "φταις",
        "translation": "Ты виноват ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Ты виноват "
        ],
        "transls": [
            "φταίω"
        ],
        "unicTransl": "быть виноватым"
    },
    {
        "word": "φταίει",
        "translation": "Она виновата ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Она виновата "
        ],
        "transls": [
            "φταίω"
        ],
        "unicTransl": "быть виноватым"
    },
    {
        "word": "φταίμε",
        "translation": "Мы виноваты ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Мы виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "unicTransl": "быть виноватым"
    },
    {
        "word": "φταίτε",
        "translation": "Вы виноваты ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Вы виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "unicTransl": "быть виноватым"
    },
    {
        "word": "φταίνε / φταιν",
        "translation": "Они виноваты ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "I Спряжение. Группа AB",
        "base": "φταίω",
        "notice": "",
        "qws": [
            "Они виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "unicTransl": "быть виноватым"
    },
    {
        "word": "ρωτάω / ρωτώ",
        "translation": "Я спрашиваю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Я спрашиваю "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτάς",
        "translation": "Ты спрашиваешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Ты спрашиваешь "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτάει / ρωτά",
        "translation": "Он спрашивает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Он спрашивает "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτάμε / ρωτούμε",
        "translation": "Мы спрашиваем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Мы спрашиваем "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτάτε",
        "translation": "Вы спрашиваете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Вы спрашиваете "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "unicTransl": "спрашивать"
    },
    {
        "word": "ρωτάνε / ρωτάν / ρωτούν / ρωτούνε",
        "translation": "Они спрашивают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ρωτώ, -άω",
        "notice": "",
        "qws": [
            "Они спрашивают "
        ],
        "transls": [
            "ρωτώ, -άω"
        ],
        "unicTransl": "спрашивать"
    },
    {
        "word": "μιλάω / μιλώ",
        "translation": "Я говорю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Я говорю "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλάς / μιλείς",
        "translation": "Ты говоришь ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Ты говоришь "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλάει / μιλά / μιλεί",
        "translation": "Она говорит ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Она говорит "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλάμε / μιλούμε",
        "translation": "Мы говорим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Мы говорим "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλάτε / μιλείτε",
        "translation": "Вы говорите ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Вы говорите "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "μιλάν / μιλούν / μιλάνε / μιλούνε",
        "translation": "Они говорят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "μιλώ, -άω",
        "notice": "",
        "qws": [
            "Они говорят "
        ],
        "transls": [
            "μιλώ, -άω"
        ],
        "unicTransl": "говорить, разговаривать, болтать"
    },
    {
        "word": "ζητάω / ζητώ",
        "translation": "Я прошу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Я прошу "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητάς / ζητείς",
        "translation": "Ты просишь ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Ты просишь "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητάει / ζητά / ζητεί",
        "translation": "Он просит ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Он просит "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητάμε / ζητούμε",
        "translation": "Мы просим ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Мы просим "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητάτε / ζητείτε",
        "translation": "Вы просите ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Вы просите "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "unicTransl": "просить, требовать"
    },
    {
        "word": "ζητάν / ζητούν / ζητάνε / ζητούνε",
        "translation": "Они просят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "ζητώ, -άω",
        "notice": "",
        "qws": [
            "Они просят "
        ],
        "transls": [
            "ζητώ, -άω"
        ],
        "unicTransl": "просить, требовать"
    },
    {
        "word": "χτυπάω / χτυπώ",
        "translation": "Я бью ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Я бью "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπάς",
        "translation": "Ты бьёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Ты бьёшь "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπάει / χτυπά",
        "translation": "Она бьёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Она бьёт "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπάμε / χτυπούμε",
        "translation": "Мы бьём ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Мы бьём "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπάτε",
        "translation": "Вы бьёте ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Вы бьёте "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "unicTransl": "бить, стучать"
    },
    {
        "word": "χτυπάν / χτυπούν / χτυπάνε / χτυπούνε",
        "translation": "Они бьют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "χτυπώ, -άω",
        "notice": "",
        "qws": [
            "Они бьют "
        ],
        "transls": [
            "χτυπώ, -άω"
        ],
        "unicTransl": "бить, стучать"
    },
    {
        "word": "συγχωρώ",
        "translation": "Я прощаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Я прощаю "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρείς",
        "translation": "Ты прощаешь ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Ты прощаешь "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρεί",
        "translation": "Он прощает ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Он прощает "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρούμε",
        "translation": "Мы прощаем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Мы прощаем "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρείτε",
        "translation": "Вы прощаете ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Вы прощаете "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "unicTransl": "прощать"
    },
    {
        "word": "συγχωρούν / συγχωρούνε",
        "translation": "Они прощают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "συγχωρώ, -άω",
        "notice": "",
        "qws": [
            "Они прощают "
        ],
        "transls": [
            "συγχωρώ, -άω"
        ],
        "unicTransl": "прощать"
    },
    {
        "word": "οδηγώ / οδηγάω",
        "translation": "Я веду ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Я веду "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγείς / οδηγάς",
        "translation": "Ты ведёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Ты ведёшь "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγεί / οδηγάει",
        "translation": "Она ведёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Она ведёт "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγούμε / οδηγάμε",
        "translation": "Мы ведём ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Мы ведём "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγείτε / οδηγάτε",
        "translation": "Вы ведёте ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Вы ведёте "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "οδηγούν / οδηγάνε / οδηγάν / οδηγούνε",
        "translation": "Они ведут ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "οδηγώ, -άω",
        "notice": "",
        "qws": [
            "Они ведут "
        ],
        "transls": [
            "οδηγώ, -άω"
        ],
        "unicTransl": "вести, водить, ехать"
    },
    {
        "word": "κάθομαι",
        "translation": "Я сижу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Я сижу "
        ],
        "transls": [
            "κάθομαι"
        ],
        "unicTransl": "сидеть"
    },
    {
        "word": "κάθεσαι",
        "translation": "Ты сидишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Ты сидишь "
        ],
        "transls": [
            "κάθομαι"
        ],
        "unicTransl": "сидеть"
    },
    {
        "word": "κάθεται",
        "translation": "Он сидит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Он сидит "
        ],
        "transls": [
            "κάθομαι"
        ],
        "unicTransl": "сидеть"
    },
    {
        "word": "καθόμαστε",
        "translation": "Мы сидим ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Мы сидим "
        ],
        "transls": [
            "κάθομαι"
        ],
        "unicTransl": "сидеть"
    },
    {
        "word": "κάθεστε / καθόσαστε",
        "translation": "Вы сидите ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Вы сидите "
        ],
        "transls": [
            "κάθομαι"
        ],
        "unicTransl": "сидеть"
    },
    {
        "word": "κάθονται",
        "translation": "Они сидят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "κάθομαι",
        "notice": "",
        "qws": [
            "Они сидят "
        ],
        "transls": [
            "κάθομαι"
        ],
        "unicTransl": "сидеть"
    },
    {
        "word": "τραγουδάω / τραγουδώ",
        "translation": "Я пою ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Я пою "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδάς",
        "translation": "Ты поёшь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Ты поёшь "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδάει / τραγουδά",
        "translation": "Он поёт ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Он поёт "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδάμε / τραγουδούμε",
        "translation": "Мы поём ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Мы поём "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδάτε",
        "translation": "Вы поёте ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Вы поёте "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "unicTransl": "петь"
    },
    {
        "word": "τραγουδάνε / τραγουδάν / τραγουδούνε / τραγουδούν",
        "translation": "Они поют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Спряжение. Группа B1",
        "base": "τραγουδώ, -άω",
        "notice": "",
        "qws": [
            "Они поют "
        ],
        "transls": [
            "τραγουδώ, -άω"
        ],
        "unicTransl": "петь"
    },
    {
        "word": "σέβομαι",
        "translation": "Я уважаю ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Я уважаю "
        ],
        "transls": [
            "σέβομαι"
        ],
        "unicTransl": "уважать"
    },
    {
        "word": "σέβεσαι",
        "translation": "Ты уважаешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Ты уважаешь "
        ],
        "transls": [
            "σέβομαι"
        ],
        "unicTransl": "уважать"
    },
    {
        "word": "σέβεται",
        "translation": "Он уважает ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Он уважает "
        ],
        "transls": [
            "σέβομαι"
        ],
        "unicTransl": "уважать"
    },
    {
        "word": "σεβόμαστε",
        "translation": "Мы уважаем ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Мы уважаем "
        ],
        "transls": [
            "σέβομαι"
        ],
        "unicTransl": "уважать"
    },
    {
        "word": "σέβεστε / σεβόσαστε",
        "translation": "Вы уважаете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Вы уважаете "
        ],
        "transls": [
            "σέβομαι"
        ],
        "unicTransl": "уважать"
    },
    {
        "word": "σέβονται",
        "translation": "Они уважают ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г1",
        "base": "σέβομαι",
        "notice": "",
        "qws": [
            "Они уважают "
        ],
        "transls": [
            "σέβομαι"
        ],
        "unicTransl": "уважать"
    },
    {
        "word": "θυμάμαι / θυμούμαι",
        "translation": "Я помню ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Я помню "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "unicTransl": "помнить"
    },
    {
        "word": "θυμάσαι",
        "translation": "Ты помнишь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Ты помнишь "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "unicTransl": "помнить"
    },
    {
        "word": "θυμάται",
        "translation": "Он помнит ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Он помнит "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "unicTransl": "помнить"
    },
    {
        "word": "θυμόμαστε / θυμούμαστε",
        "translation": "Мы помним ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Мы помним "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "unicTransl": "помнить"
    },
    {
        "word": "θυμάστε",
        "translation": "Вы помните ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Вы помните "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "unicTransl": "помнить"
    },
    {
        "word": "θυμούνται",
        "translation": "Они помнят ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "θυμάμαι",
        "notice": "",
        "qws": [
            "Они помнят "
        ],
        "transls": [
            "θυμάμαι"
        ],
        "unicTransl": "помнить"
    },
    {
        "word": "φοβάμαι / φοβούμαι",
        "translation": "Я боюсь ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Я боюсь "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "unicTransl": "бояться"
    },
    {
        "word": "φοβάσαι",
        "translation": "Ты боишься ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Ты боишься "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "unicTransl": "бояться"
    },
    {
        "word": "φοβάται",
        "translation": "Он боится ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Он боится "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "unicTransl": "бояться"
    },
    {
        "word": "φοβόμαστε / φοβούμαστε",
        "translation": "Мы боимся ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Мы боимся "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "unicTransl": "бояться"
    },
    {
        "word": "φοβάστε",
        "translation": "Вы боитесь ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Вы боитесь "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "unicTransl": "бояться"
    },
    {
        "word": "φοβούνται",
        "translation": "Они боятся ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "φοβάμαι",
        "notice": "",
        "qws": [
            "Они боятся "
        ],
        "transls": [
            "φοβάμαι"
        ],
        "unicTransl": "бояться"
    },
    {
        "word": "λυπάμαι / λυπούμαι",
        "translation": "Я жалею ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Я жалею "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπάσαι",
        "translation": "Ты жалеешь ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Ты жалеешь "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπάται",
        "translation": "Она жалеет ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Она жалеет "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπόμαστε / λυπούμαστε",
        "translation": "Мы жалеем ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Мы жалеем "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπάστε",
        "translation": "Вы жалеете ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Вы жалеете "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "unicTransl": "жалеть"
    },
    {
        "word": "λυπούνται",
        "translation": "Они жалеют ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "Возвратные глаголы. Группа Г2",
        "base": "λυπάμαι",
        "notice": "",
        "qws": [
            "Они жалеют "
        ],
        "transls": [
            "λυπάμαι"
        ],
        "unicTransl": "жалеть"
    }
]
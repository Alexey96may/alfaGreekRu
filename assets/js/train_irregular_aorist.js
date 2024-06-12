//Массив с титулами таблицы и массив объектов с данными.

const tableTitlesArr = [{title: "Глагол", place: "base"}, {title: "Аорист", place: "baseAor"}, {title: "Перевод", place: "unicTransl"}];
const globalArray =
[
    {
        "word": "επανέλαβα",
        "translation": "Я повторил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "επαναλαμβάνω",
        "notice": "",
        "qws": [
            "Я повторил "
        ],
        "transls": [
            "επαναλαμβάνω"
        ],
        "baseAor": "<u>επανέ</u>λαβα",
        "unicTransl": "повторять"
    },
    {
        "word": "επανέλαβες",
        "translation": "Ты повторил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "επαναλαμβάνω",
        "notice": "",
        "qws": [
            "Ты повторил "
        ],
        "transls": [
            "επαναλαμβάνω"
        ],
        "baseAor": "<u>επανέ</u>λαβα",
        "unicTransl": "повторять"
    },
    {
        "word": "επανέλαβε",
        "translation": "Он повторил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "επαναλαμβάνω",
        "notice": "",
        "qws": [
            "Он повторил "
        ],
        "transls": [
            "επαναλαμβάνω"
        ],
        "baseAor": "<u>επανέ</u>λαβα",
        "unicTransl": "повторять"
    },
    {
        "word": "επαναλάβαμε",
        "translation": "Мы повторили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "επαναλαμβάνω",
        "notice": "",
        "qws": [
            "Мы повторили "
        ],
        "transls": [
            "επαναλαμβάνω"
        ],
        "baseAor": "<u>επανέ</u>λαβα",
        "unicTransl": "повторять"
    },
    {
        "word": "επαναλάβατε",
        "translation": "Вы повторили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "επαναλαμβάνω",
        "notice": "",
        "qws": [
            "Вы повторили "
        ],
        "transls": [
            "επαναλαμβάνω"
        ],
        "baseAor": "<u>επανέ</u>λαβα",
        "unicTransl": "повторять"
    },
    {
        "word": "επανέλαβαν / επαναλάβανε",
        "translation": "Они повторили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "επαναλαμβάνω",
        "notice": "",
        "qws": [
            "Они повторили "
        ],
        "transls": [
            "επαναλαμβάνω"
        ],
        "baseAor": "<u>επανέ</u>λαβα",
        "unicTransl": "повторять"
    },
    {
        "word": "έμεινα",
        "translation": "Я остался ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Я остался "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "έμεινες",
        "translation": "Ты остался ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Ты остался "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "έμεινε",
        "translation": "Он остался ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Он остался "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "μείναμε",
        "translation": "Мы остались ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Мы остались "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "μείνατε",
        "translation": "Вы остались ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Вы остались "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "έμειναν / μείνανε",
        "translation": "Они остались ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Они остались "
        ],
        "transls": [
            "μένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "ανέβηκα",
        "translation": "Я поднялся ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ανεβαίνω",
        "notice": "",
        "qws": [
            "Я поднялся "
        ],
        "transls": [
            "ανεβαίνω"
        ],
        "baseAor": "<u>ανέ</u>β<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "подниматься"
    },
    {
        "word": "ανέβηκες",
        "translation": "Ты поднялся ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ανεβαίνω",
        "notice": "",
        "qws": [
            "Ты поднялся "
        ],
        "transls": [
            "ανεβαίνω"
        ],
        "baseAor": "<u>ανέ</u>β<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "подниматься"
    },
    {
        "word": "ανέβηκε",
        "translation": "Он поднялся ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ανεβαίνω",
        "notice": "",
        "qws": [
            "Он поднялся "
        ],
        "transls": [
            "ανεβαίνω"
        ],
        "baseAor": "<u>ανέ</u>β<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "подниматься"
    },
    {
        "word": "ανεβήκαμε",
        "translation": "Мы поднялись ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ανεβαίνω",
        "notice": "",
        "qws": [
            "Мы поднялись "
        ],
        "transls": [
            "ανεβαίνω"
        ],
        "baseAor": "<u>ανέ</u>β<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "подниматься"
    },
    {
        "word": "ανεβήκατε",
        "translation": "Вы поднялись ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ανεβαίνω",
        "notice": "",
        "qws": [
            "Вы поднялись "
        ],
        "transls": [
            "ανεβαίνω"
        ],
        "baseAor": "<u>ανέ</u>β<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "подниматься"
    },
    {
        "word": "ανέβηκαν / ανεβήκανε",
        "translation": "Они поднялись ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ανεβαίνω",
        "notice": "",
        "qws": [
            "Они поднялись "
        ],
        "transls": [
            "ανεβαίνω"
        ],
        "baseAor": "<u>ανέ</u>β<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "подниматься"
    },
    {
        "word": "κατέβηκα",
        "translation": "Я спустился ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "κατεβαίνω",
        "notice": "",
        "qws": [
            "Я спустился "
        ],
        "transls": [
            "κατεβαίνω"
        ],
        "baseAor": "<u>κατ</u>έβ<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "спускаться"
    },
    {
        "word": "κατέβηκες",
        "translation": "Ты спустился ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "κατεβαίνω",
        "notice": "",
        "qws": [
            "Ты спустился "
        ],
        "transls": [
            "κατεβαίνω"
        ],
        "baseAor": "<u>κατ</u>έβ<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "спускаться"
    },
    {
        "word": "κατέβηκε",
        "translation": "Она спустилась ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "κατεβαίνω",
        "notice": "",
        "qws": [
            "Она спустилась "
        ],
        "transls": [
            "κατεβαίνω"
        ],
        "baseAor": "<u>κατ</u>έβ<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "спускаться"
    },
    {
        "word": "κατεβήκαμε",
        "translation": "Мы спустились ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "κατεβαίνω",
        "notice": "",
        "qws": [
            "Мы спустились "
        ],
        "transls": [
            "κατεβαίνω"
        ],
        "baseAor": "<u>κατ</u>έβ<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "спускаться"
    },
    {
        "word": "κατεβήκατε",
        "translation": "Вы спустились ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "κατεβαίνω",
        "notice": "",
        "qws": [
            "Вы спустились "
        ],
        "transls": [
            "κατεβαίνω"
        ],
        "baseAor": "<u>κατ</u>έβ<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "спускаться"
    },
    {
        "word": "κατέβηκαν / κατεβήκανε",
        "translation": "Они спустились ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "κατεβαίνω",
        "notice": "",
        "qws": [
            "Они спустились "
        ],
        "transls": [
            "κατεβαίνω"
        ],
        "baseAor": "<u>κατ</u>έβ<span class=\"selected-text\" style=\"color:green\">ηκ</span>α",
        "unicTransl": "спускаться"
    },
    {
        "word": "έβαλα",
        "translation": "Я поставил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Я поставил "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "ставить"
    },
    {
        "word": "έβαλες",
        "translation": "Ты поставил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Ты поставил "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "ставить"
    },
    {
        "word": "έβαλε",
        "translation": "Он поставил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Он поставил "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "ставить"
    },
    {
        "word": "βάλαμε",
        "translation": "Мы поставили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Мы поставили "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "ставить"
    },
    {
        "word": "βάλατε",
        "translation": "Вы поставили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Вы поставили "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "ставить"
    },
    {
        "word": "έβαλαν / βάλανε",
        "translation": "Они поставили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βάζω",
        "notice": "",
        "qws": [
            "Они поставили "
        ],
        "transls": [
            "βάζω"
        ],
        "baseAor": "έβα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "ставить"
    },
    {
        "word": "έβγαλα",
        "translation": "Я вынул ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγάζω",
        "notice": "",
        "qws": [
            "Я вынул "
        ],
        "transls": [
            "βγάζω"
        ],
        "baseAor": "έβγα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "вынуть"
    },
    {
        "word": "έβγαλες",
        "translation": "Ты вынул ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγάζω",
        "notice": "",
        "qws": [
            "Ты вынул "
        ],
        "transls": [
            "βγάζω"
        ],
        "baseAor": "έβγα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "вынуть"
    },
    {
        "word": "έβγαλε",
        "translation": "Она вынула ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγάζω",
        "notice": "",
        "qws": [
            "Она вынула "
        ],
        "transls": [
            "βγάζω"
        ],
        "baseAor": "έβγα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "вынуть"
    },
    {
        "word": "βγάλαμε",
        "translation": "Мы вынули ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγάζω",
        "notice": "",
        "qws": [
            "Мы вынули "
        ],
        "transls": [
            "βγάζω"
        ],
        "baseAor": "έβγα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "вынуть"
    },
    {
        "word": "βγάλατε",
        "translation": "Вы вынули ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγάζω",
        "notice": "",
        "qws": [
            "Вы вынули "
        ],
        "transls": [
            "βγάζω"
        ],
        "baseAor": "έβγα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "вынуть"
    },
    {
        "word": "έβγαλαν / βγάλανε",
        "translation": "Они вынули ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγάζω",
        "notice": "",
        "qws": [
            "Они вынули "
        ],
        "transls": [
            "βγάζω"
        ],
        "baseAor": "έβγα<span class=\"selected-text\" style=\"color:green\">λ</span>α",
        "unicTransl": "вынуть"
    },
    {
        "word": "βγήκα",
        "translation": "Я вышел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Я вышел "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "выходить"
    },
    {
        "word": "βγήκες",
        "translation": "Ты вышел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Ты вышел "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "выходить"
    },
    {
        "word": "βγήκε",
        "translation": "Он вышел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Он вышел "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "выходить"
    },
    {
        "word": "βγήκαμε",
        "translation": "Мы вышли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Мы вышли "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "выходить"
    },
    {
        "word": "βγήκατε",
        "translation": "Вы вышли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Вы вышли "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "выходить"
    },
    {
        "word": "βγήκαν / βγήκανε",
        "translation": "Они вышли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βγαίνω",
        "notice": "",
        "qws": [
            "Они вышли "
        ],
        "transls": [
            "βγαίνω"
        ],
        "baseAor": "βγ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "выходить"
    },
    {
        "word": "μπήκα",
        "translation": "Я вошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Я вошёл "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "входить"
    },
    {
        "word": "μπήκες",
        "translation": "Ты вошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Ты вошёл "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "входить"
    },
    {
        "word": "μπήκε",
        "translation": "Она вошла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Она вошла "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "входить"
    },
    {
        "word": "μπήκαμε",
        "translation": "Мы вошли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Мы вошли "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "входить"
    },
    {
        "word": "μπήκατε",
        "translation": "Вы вошли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Вы вошли "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "входить"
    },
    {
        "word": "μπήκαν / μπήκανε",
        "translation": "Они вошли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μπαίνω",
        "notice": "",
        "qws": [
            "Они вошли "
        ],
        "transls": [
            "μπαίνω"
        ],
        "baseAor": "μπ<span class=\"selected-text\" style=\"color:green\">ήκ</span>α",
        "unicTransl": "входить"
    },
    {
        "word": "είδα",
        "translation": "Я увидел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Я увидел "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "<strong>είδα</strong>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "είδες",
        "translation": "Ты увидел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Ты увидел "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "<strong>είδα</strong>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "είδε",
        "translation": "Он увидел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Он увидел "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "<strong>είδα</strong>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "είδαμε",
        "translation": "Мы увидели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Мы увидели "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "<strong>είδα</strong>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "είδατε",
        "translation": "Вы увидели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Вы увидели "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "<strong>είδα</strong>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "είδαν / είδανε",
        "translation": "Они увидели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "βλέπω",
        "notice": "",
        "qws": [
            "Они увидели "
        ],
        "transls": [
            "βλέπω"
        ],
        "baseAor": "<strong>είδα</strong>",
        "unicTransl": "видеть, смотреть"
    },
    {
        "word": "βρήκα",
        "translation": "Я нашёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βρίσκω",
        "notice": "",
        "qws": [
            "Я нашёл "
        ],
        "transls": [
            "βρίσκω"
        ],
        "baseAor": "βρ<span class=\"selected-text\" style=\"color:green\">ή</span>κα",
        "unicTransl": "находить"
    },
    {
        "word": "βρήκες",
        "translation": "Ты нашёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βρίσκω",
        "notice": "",
        "qws": [
            "Ты нашёл "
        ],
        "transls": [
            "βρίσκω"
        ],
        "baseAor": "βρ<span class=\"selected-text\" style=\"color:green\">ή</span>κα",
        "unicTransl": "находить"
    },
    {
        "word": "βρήκε",
        "translation": "Она нашла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βρίσκω",
        "notice": "",
        "qws": [
            "Она нашла "
        ],
        "transls": [
            "βρίσκω"
        ],
        "baseAor": "βρ<span class=\"selected-text\" style=\"color:green\">ή</span>κα",
        "unicTransl": "находить"
    },
    {
        "word": "βρήκαμε",
        "translation": "Мы нашли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βρίσκω",
        "notice": "",
        "qws": [
            "Мы нашли "
        ],
        "transls": [
            "βρίσκω"
        ],
        "baseAor": "βρ<span class=\"selected-text\" style=\"color:green\">ή</span>κα",
        "unicTransl": "находить"
    },
    {
        "word": "βρήκατε",
        "translation": "Вы нашли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βρίσκω",
        "notice": "",
        "qws": [
            "Вы нашли "
        ],
        "transls": [
            "βρίσκω"
        ],
        "baseAor": "βρ<span class=\"selected-text\" style=\"color:green\">ή</span>κα",
        "unicTransl": "находить"
    },
    {
        "word": "βρήκαν / βρήκανε",
        "translation": "Они нашли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "βρίσκω",
        "notice": "",
        "qws": [
            "Они нашли "
        ],
        "transls": [
            "βρίσκω"
        ],
        "baseAor": "βρ<span class=\"selected-text\" style=\"color:green\">ή</span>κα",
        "unicTransl": "находить"
    },
    {
        "word": "έδωσα / έδωκα",
        "translation": "Я дал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "δίνω, δίδω, διώ - кипр.",
        "notice": "",
        "qws": [
            "Я дал "
        ],
        "transls": [
            "δίνω, δίδω, διώ"
        ],
        "baseAor": "έδ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (έδωκα)",
        "unicTransl": "дать"
    },
    {
        "word": "έδωσες / έδωκες",
        "translation": "Ты дал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "δίνω, δίδω, διώ - кипр.",
        "notice": "",
        "qws": [
            "Ты дал "
        ],
        "transls": [
            "δίνω, δίδω, διώ"
        ],
        "baseAor": "έδ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (έδωκα)",
        "unicTransl": "дать"
    },
    {
        "word": "έδωσε / έδωκε",
        "translation": "Он дал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "δίνω, δίδω, διώ - кипр.",
        "notice": "",
        "qws": [
            "Он дал "
        ],
        "transls": [
            "δίνω, δίδω, διώ"
        ],
        "baseAor": "έδ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (έδωκα)",
        "unicTransl": "дать"
    },
    {
        "word": "δώσαμε / δώκαμε",
        "translation": "Мы дали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "δίνω, δίδω, διώ - кипр.",
        "notice": "",
        "qws": [
            "Мы дали "
        ],
        "transls": [
            "δίνω, δίδω, διώ"
        ],
        "baseAor": "έδ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (έδωκα)",
        "unicTransl": "дать"
    },
    {
        "word": "δώσατε / δώκατε",
        "translation": "Вы дали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "δίνω, δίδω, διώ - кипр.",
        "notice": "",
        "qws": [
            "Вы дали "
        ],
        "transls": [
            "δίνω, δίδω, διώ"
        ],
        "baseAor": "έδ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (έδωκα)",
        "unicTransl": "дать"
    },
    {
        "word": "έδωσαν / δώσανε / έδωκαν / δώκανε",
        "translation": "Они дали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "δίνω, δίδω, διώ - кипр.",
        "notice": "",
        "qws": [
            "Они дали "
        ],
        "transls": [
            "δίνω, δίδω, διώ"
        ],
        "baseAor": "έδ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (έδωκα)",
        "unicTransl": "дать"
    },
    {
        "word": "πήρα",
        "translation": "Я взял ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "παίρνω",
        "notice": "",
        "qws": [
            "Я взял "
        ],
        "transls": [
            "παίρνω"
        ],
        "baseAor": "π<span class=\"selected-text\" style=\"color:green\">ή</span>ρα",
        "unicTransl": "брать"
    },
    {
        "word": "πήρες",
        "translation": "Ты взял ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "παίρνω",
        "notice": "",
        "qws": [
            "Ты взял "
        ],
        "transls": [
            "παίρνω"
        ],
        "baseAor": "π<span class=\"selected-text\" style=\"color:green\">ή</span>ρα",
        "unicTransl": "брать"
    },
    {
        "word": "πήρε",
        "translation": "Она взяла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "παίρνω",
        "notice": "",
        "qws": [
            "Она взяла "
        ],
        "transls": [
            "παίρνω"
        ],
        "baseAor": "π<span class=\"selected-text\" style=\"color:green\">ή</span>ρα",
        "unicTransl": "брать"
    },
    {
        "word": "πήραμε",
        "translation": "Мы взяли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "παίρνω",
        "notice": "",
        "qws": [
            "Мы взяли "
        ],
        "transls": [
            "παίρνω"
        ],
        "baseAor": "π<span class=\"selected-text\" style=\"color:green\">ή</span>ρα",
        "unicTransl": "брать"
    },
    {
        "word": "πήρατε",
        "translation": "Вы взяли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "παίρνω",
        "notice": "",
        "qws": [
            "Вы взяли "
        ],
        "transls": [
            "παίρνω"
        ],
        "baseAor": "π<span class=\"selected-text\" style=\"color:green\">ή</span>ρα",
        "unicTransl": "брать"
    },
    {
        "word": "πήραν / πήρανε",
        "translation": "Они взяли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "παίρνω",
        "notice": "",
        "qws": [
            "Они взяли "
        ],
        "transls": [
            "παίρνω"
        ],
        "baseAor": "π<span class=\"selected-text\" style=\"color:green\">ή</span>ρα",
        "unicTransl": "брать"
    },
    {
        "word": "κατάλαβα",
        "translation": "Я понял ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Я понял "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "<u>κατά</u>λαβα",
        "unicTransl": "понять"
    },
    {
        "word": "κατάλαβες",
        "translation": "Ты понял ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Ты понял "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "<u>κατά</u>λαβα",
        "unicTransl": "понять"
    },
    {
        "word": "κατάλαβε",
        "translation": "Она поняла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Она поняла "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "<u>κατά</u>λαβα",
        "unicTransl": "понять"
    },
    {
        "word": "καταλάβαμε",
        "translation": "Мы поняли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Мы поняли "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "<u>κατά</u>λαβα",
        "unicTransl": "понять"
    },
    {
        "word": "καταλάβατε",
        "translation": "Вы поняли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Вы поняли "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "<u>κατά</u>λαβα",
        "unicTransl": "понять"
    },
    {
        "word": "κατάλαβαν / καταλάβανε",
        "translation": "Они поняли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαβαίνω",
        "notice": "",
        "qws": [
            "Они поняли "
        ],
        "transls": [
            "καταλαβαίνω"
        ],
        "baseAor": "<u>κατά</u>λαβα",
        "unicTransl": "понять"
    },
    {
        "word": "πρόλαβα",
        "translation": "Я успел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προλαβαίνω",
        "notice": "",
        "qws": [
            "Я успел "
        ],
        "transls": [
            "προλαβαίνω"
        ],
        "baseAor": "<u>πρό</u>λαβα",
        "unicTransl": "успеть"
    },
    {
        "word": "πρόλαβες",
        "translation": "Ты успел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προλαβαίνω",
        "notice": "",
        "qws": [
            "Ты успел "
        ],
        "transls": [
            "προλαβαίνω"
        ],
        "baseAor": "<u>πρό</u>λαβα",
        "unicTransl": "успеть"
    },
    {
        "word": "πρόλαβε",
        "translation": "Он успел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προλαβαίνω",
        "notice": "",
        "qws": [
            "Он успел "
        ],
        "transls": [
            "προλαβαίνω"
        ],
        "baseAor": "<u>πρό</u>λαβα",
        "unicTransl": "успеть"
    },
    {
        "word": "προλάβαμε",
        "translation": "Мы успели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προλαβαίνω",
        "notice": "",
        "qws": [
            "Мы успели "
        ],
        "transls": [
            "προλαβαίνω"
        ],
        "baseAor": "<u>πρό</u>λαβα",
        "unicTransl": "успеть"
    },
    {
        "word": "προλάβατε",
        "translation": "Вы успели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προλαβαίνω",
        "notice": "",
        "qws": [
            "Вы успели "
        ],
        "transls": [
            "προλαβαίνω"
        ],
        "baseAor": "<u>πρό</u>λαβα",
        "unicTransl": "успеть"
    },
    {
        "word": "πρόλαβαν / προλάβανε",
        "translation": "Они успели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προλαβαίνω",
        "notice": "",
        "qws": [
            "Они успели "
        ],
        "transls": [
            "προλαβαίνω"
        ],
        "baseAor": "<u>πρό</u>λαβα",
        "unicTransl": "успеть"
    },
    {
        "word": "υπέφερα",
        "translation": "Я пострадал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποφέρω",
        "notice": "",
        "qws": [
            "Я пострадал "
        ],
        "transls": [
            "υποφέρω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "страдать"
    },
    {
        "word": "υπέφερες",
        "translation": "Ты пострадал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποφέρω",
        "notice": "",
        "qws": [
            "Ты пострадал "
        ],
        "transls": [
            "υποφέρω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "страдать"
    },
    {
        "word": "υπέφερε",
        "translation": "Он пострадал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποφέρω",
        "notice": "",
        "qws": [
            "Он пострадал "
        ],
        "transls": [
            "υποφέρω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "страдать"
    },
    {
        "word": "υποφέραμε",
        "translation": "Мы пострадали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποφέρω",
        "notice": "",
        "qws": [
            "Мы пострадали "
        ],
        "transls": [
            "υποφέρω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "страдать"
    },
    {
        "word": "υποφέρατε",
        "translation": "Вы пострадали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποφέρω",
        "notice": "",
        "qws": [
            "Вы пострадали "
        ],
        "transls": [
            "υποφέρω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "страдать"
    },
    {
        "word": "υπέφεραν / υποφέρανε",
        "translation": "Они пострадали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποφέρω",
        "notice": "",
        "qws": [
            "Они пострадали "
        ],
        "transls": [
            "υποφέρω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "страдать"
    },
    {
        "word": "είπα",
        "translation": "Я сказал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Я сказал "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "<strong>είπα</strong>",
        "unicTransl": "сказать"
    },
    {
        "word": "είπες",
        "translation": "Ты сказал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Ты сказал "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "<strong>είπα</strong>",
        "unicTransl": "сказать"
    },
    {
        "word": "είπε",
        "translation": "Он сказал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Он сказал "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "<strong>είπα</strong>",
        "unicTransl": "сказать"
    },
    {
        "word": "είπαμε",
        "translation": "Мы сказали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Мы сказали "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "<strong>είπα</strong>",
        "unicTransl": "сказать"
    },
    {
        "word": "είπατε",
        "translation": "Вы сказали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Вы сказали "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "<strong>είπα</strong>",
        "unicTransl": "сказать"
    },
    {
        "word": "είπαν / είπανε",
        "translation": "Они сказали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "λέω",
        "notice": "",
        "qws": [
            "Они сказали "
        ],
        "transls": [
            "λέω"
        ],
        "baseAor": "<strong>είπα</strong>",
        "unicTransl": "сказать"
    },
    {
        "word": "έμαθα",
        "translation": "Я изучил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Я изучил "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθα",
        "unicTransl": "изучать"
    },
    {
        "word": "έμαθες",
        "translation": "Ты изучил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Ты изучил "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθα",
        "unicTransl": "изучать"
    },
    {
        "word": "έμαθε",
        "translation": "Она изучила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Она изучила "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθα",
        "unicTransl": "изучать"
    },
    {
        "word": "μάθαμε",
        "translation": "Мы изучили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Мы изучили "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθα",
        "unicTransl": "изучать"
    },
    {
        "word": "μάθατε",
        "translation": "Вы изучили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Вы изучили "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθα",
        "unicTransl": "изучать"
    },
    {
        "word": "έμαθαν / μάθανε",
        "translation": "Они изучили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μαθαίνω",
        "notice": "",
        "qws": [
            "Они изучили "
        ],
        "transls": [
            "μαθαίνω"
        ],
        "baseAor": "έμαθα",
        "unicTransl": "изучать"
    },
    {
        "word": "περίμεινα",
        "translation": "Я подождал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Я подождал "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "περίμεινες",
        "translation": "Ты подождал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Ты подождал "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "περίμεινε",
        "translation": "Она подождала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Она подождала "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "περιμείναμε",
        "translation": "Мы подождали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Мы подождали "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "περιμείνατε",
        "translation": "Вы подождали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Вы подождали "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "περίμειναν / περιμείνανε",
        "translation": "Они подождали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιμένω",
        "notice": "",
        "qws": [
            "Они подождали "
        ],
        "transls": [
            "περιμένω"
        ],
        "baseAor": "<u>περί</u>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "ждать"
    },
    {
        "word": "ήξερα",
        "translation": "Я знал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Я знал "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>ξερα",
        "unicTransl": "знать"
    },
    {
        "word": "ήξερες",
        "translation": "Ты знал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Ты знал "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>ξερα",
        "unicTransl": "знать"
    },
    {
        "word": "ήξερε",
        "translation": "Он знал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Он знал "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>ξερα",
        "unicTransl": "знать"
    },
    {
        "word": "ξέραμε",
        "translation": "Мы знали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Мы знали "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>ξερα",
        "unicTransl": "знать"
    },
    {
        "word": "ξέρατε",
        "translation": "Вы знали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Вы знали "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>ξερα",
        "unicTransl": "знать"
    },
    {
        "word": "ήξεραν / ξέρανε",
        "translation": "Они знали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ξέρω",
        "notice": "",
        "qws": [
            "Они знали "
        ],
        "transls": [
            "ξέρω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>ξερα",
        "unicTransl": "знать"
    },
    {
        "word": "ξέχασα",
        "translation": "Я забыл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Я забыл "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασα",
        "unicTransl": "забыть"
    },
    {
        "word": "ξέχασες",
        "translation": "Ты забыл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Ты забыл "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασα",
        "unicTransl": "забыть"
    },
    {
        "word": "ξέχασε",
        "translation": "Она забыла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Она забыла "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασα",
        "unicTransl": "забыть"
    },
    {
        "word": "ξεχάσαμε",
        "translation": "Мы забыли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Мы забыли "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασα",
        "unicTransl": "забыть"
    },
    {
        "word": "ξεχάσατε",
        "translation": "Вы забыли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Вы забыли "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασα",
        "unicTransl": "забыть"
    },
    {
        "word": "ξέχασαν / ξεχάσανε",
        "translation": "Они забыли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεχνώ, -άω",
        "notice": "",
        "qws": [
            "Они забыли "
        ],
        "transls": [
            "ξεχνώ, -άω"
        ],
        "baseAor": "ξέχασα",
        "unicTransl": "забыть"
    },
    {
        "word": "πέρασα",
        "translation": "Я прошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Я прошёл "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "πέρασες",
        "translation": "Ты прошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Ты прошёл "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "πέρασε",
        "translation": "Он прошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Он прошёл "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "περάσαμε",
        "translation": "Мы прошли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Мы прошли "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "περάσατε",
        "translation": "Вы прошли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Вы прошли "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "πέρασαν / περάσανε",
        "translation": "Они прошли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Они прошли "
        ],
        "transls": [
            "περνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "πήγα",
        "translation": "Я пошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πηγαίνω, πάω",
        "notice": "",
        "qws": [
            "Я пошёл "
        ],
        "transls": [
            "πηγαίνω, πάω"
        ],
        "baseAor": "πήγα",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγες",
        "translation": "Ты пошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πηγαίνω, πάω",
        "notice": "",
        "qws": [
            "Ты пошёл "
        ],
        "transls": [
            "πηγαίνω, πάω"
        ],
        "baseAor": "πήγα",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγε",
        "translation": "Он пошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πηγαίνω, πάω",
        "notice": "",
        "qws": [
            "Он пошёл "
        ],
        "transls": [
            "πηγαίνω, πάω"
        ],
        "baseAor": "πήγα",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγαμε",
        "translation": "Мы пошли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πηγαίνω, πάω",
        "notice": "",
        "qws": [
            "Мы пошли "
        ],
        "transls": [
            "πηγαίνω, πάω"
        ],
        "baseAor": "πήγα",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγατε",
        "translation": "Вы пошли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πηγαίνω, πάω",
        "notice": "",
        "qws": [
            "Вы пошли "
        ],
        "transls": [
            "πηγαίνω, πάω"
        ],
        "baseAor": "πήγα",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "πήγαν / πήγανε",
        "translation": "Они пошли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πηγαίνω, πάω",
        "notice": "",
        "qws": [
            "Они пошли "
        ],
        "transls": [
            "πηγαίνω, πάω"
        ],
        "baseAor": "πήγα",
        "unicTransl": "идти, ехать"
    },
    {
        "word": "ήπια",
        "translation": "Я выпил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Я выпил "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "ήπιες",
        "translation": "Ты выпил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Ты выпил "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "ήπιε",
        "translation": "Она выпила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Она выпила "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "ήπιαμε",
        "translation": "Мы выпили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Мы выпили "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "ήπιατε",
        "translation": "Вы выпили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Вы выпили "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "ήπιαν / ήπιανε",
        "translation": "Они выпили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Они выпили "
        ],
        "transls": [
            "πίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "έφαγα",
        "translation": "Я поел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Я поел "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "<strong>έφαγα</strong>",
        "unicTransl": "есть, кушать"
    },
    {
        "word": "έφαγες",
        "translation": "Ты поел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Ты поел "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "<strong>έφαγα</strong>",
        "unicTransl": "есть, кушать"
    },
    {
        "word": "έφαγε",
        "translation": "Он поел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Он поел "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "<strong>έφαγα</strong>",
        "unicTransl": "есть, кушать"
    },
    {
        "word": "φάγαμε",
        "translation": "Мы поели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Мы поели "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "<strong>έφαγα</strong>",
        "unicTransl": "есть, кушать"
    },
    {
        "word": "φάγατε",
        "translation": "Вы поели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Вы поели "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "<strong>έφαγα</strong>",
        "unicTransl": "есть, кушать"
    },
    {
        "word": "έφαγαν / φάγανε",
        "translation": "Они поели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "τρώω",
        "notice": "",
        "qws": [
            "Они поели "
        ],
        "transls": [
            "τρώω"
        ],
        "baseAor": "<strong>έφαγα</strong>",
        "unicTransl": "есть, кушать"
    },
    {
        "word": "υπέθεσα",
        "translation": "Я предположил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Я предположил "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "предполагать"
    },
    {
        "word": "υπέθεσες",
        "translation": "Ты предположил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Ты предположил "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "предполагать"
    },
    {
        "word": "υπέθεσε",
        "translation": "Она предположила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Она предположила "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "предполагать"
    },
    {
        "word": "υποθέσαμε",
        "translation": "Мы предположили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Мы предположили "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "предполагать"
    },
    {
        "word": "υποθέσατε",
        "translation": "Вы предположили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Вы предположили "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "предполагать"
    },
    {
        "word": "υπέθεσαν / υποθέσανε",
        "translation": "Они предположили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υποθέτω",
        "notice": "",
        "qws": [
            "Они предположили "
        ],
        "transls": [
            "υποθέτω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "предполагать"
    },
    {
        "word": "έστειλα",
        "translation": "Я послал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Я послал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "посылать"
    },
    {
        "word": "έστειλες",
        "translation": "Ты послал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Ты послал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "посылать"
    },
    {
        "word": "έστειλε",
        "translation": "Он послал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Он послал "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "посылать"
    },
    {
        "word": "στείλαμε",
        "translation": "Мы послали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Мы послали "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "посылать"
    },
    {
        "word": "στείλατε",
        "translation": "Вы послали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Вы послали "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "посылать"
    },
    {
        "word": "έστειλαν / στείλανε",
        "translation": "Они послали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "στέλνω",
        "notice": "",
        "qws": [
            "Они послали "
        ],
        "transls": [
            "στέλνω"
        ],
        "baseAor": "έστε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "посылать"
    },
    {
        "word": "έφερα",
        "translation": "Я принёс ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "φέρνω",
        "notice": "",
        "qws": [
            "Я принёс "
        ],
        "transls": [
            "φέρνω"
        ],
        "baseAor": "έφερα",
        "unicTransl": "приносить"
    },
    {
        "word": "έφερες",
        "translation": "Ты принёс ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "φέρνω",
        "notice": "",
        "qws": [
            "Ты принёс "
        ],
        "transls": [
            "φέρνω"
        ],
        "baseAor": "έφερα",
        "unicTransl": "приносить"
    },
    {
        "word": "έφερε",
        "translation": "Она принесла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "φέρνω",
        "notice": "",
        "qws": [
            "Она принесла "
        ],
        "transls": [
            "φέρνω"
        ],
        "baseAor": "έφερα",
        "unicTransl": "приносить"
    },
    {
        "word": "φέραμε",
        "translation": "Мы принесли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "φέρνω",
        "notice": "",
        "qws": [
            "Мы принесли "
        ],
        "transls": [
            "φέρνω"
        ],
        "baseAor": "έφερα",
        "unicTransl": "приносить"
    },
    {
        "word": "φέρατε",
        "translation": "Вы принесли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "φέρνω",
        "notice": "",
        "qws": [
            "Вы принесли "
        ],
        "transls": [
            "φέρνω"
        ],
        "baseAor": "έφερα",
        "unicTransl": "приносить"
    },
    {
        "word": "έφεραν / φέρανε",
        "translation": "Они принесли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "φέρνω",
        "notice": "",
        "qws": [
            "Они принесли "
        ],
        "transls": [
            "φέρνω"
        ],
        "baseAor": "έφερα",
        "unicTransl": "приносить"
    },
    {
        "word": "έφυγα",
        "translation": "Я ушёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Я ушёл "
        ],
        "transls": [
            "φεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "έφυγες",
        "translation": "Ты ушёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Ты ушёл "
        ],
        "transls": [
            "φεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "έφυγε",
        "translation": "Она ушла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Она ушла "
        ],
        "transls": [
            "φεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "φύγαμε",
        "translation": "Мы ушли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Мы ушли "
        ],
        "transls": [
            "φεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "φύγατε",
        "translation": "Вы ушли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Вы ушли "
        ],
        "transls": [
            "φεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "έφυγαν / φύγανε",
        "translation": "Они ушли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Они ушли "
        ],
        "transls": [
            "φεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "αμφέβαλα",
        "translation": "Я усомнился ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αμφιβάλλω",
        "notice": "",
        "qws": [
            "Я усомнился "
        ],
        "transls": [
            "αμφιβάλλω"
        ],
        "baseAor": "<u>αμφ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "сомневаться"
    },
    {
        "word": "αμφέβαλες",
        "translation": "Ты усомнился ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αμφιβάλλω",
        "notice": "",
        "qws": [
            "Ты усомнился "
        ],
        "transls": [
            "αμφιβάλλω"
        ],
        "baseAor": "<u>αμφ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "сомневаться"
    },
    {
        "word": "αμφέβαλε",
        "translation": "Он усомнился ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αμφιβάλλω",
        "notice": "",
        "qws": [
            "Он усомнился "
        ],
        "transls": [
            "αμφιβάλλω"
        ],
        "baseAor": "<u>αμφ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "сомневаться"
    },
    {
        "word": "αμφιβάλαμε",
        "translation": "Мы усомнились ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αμφιβάλλω",
        "notice": "",
        "qws": [
            "Мы усомнились "
        ],
        "transls": [
            "αμφιβάλλω"
        ],
        "baseAor": "<u>αμφ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "сомневаться"
    },
    {
        "word": "αμφιβάλατε",
        "translation": "Вы усомнились ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αμφιβάλλω",
        "notice": "",
        "qws": [
            "Вы усомнились "
        ],
        "transls": [
            "αμφιβάλλω"
        ],
        "baseAor": "<u>αμφ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "сомневаться"
    },
    {
        "word": "αμφέβαλαν / αμφιβάλανε",
        "translation": "Они усомнились ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αμφιβάλλω",
        "notice": "",
        "qws": [
            "Они усомнились "
        ],
        "transls": [
            "αμφιβάλλω"
        ],
        "baseAor": "<u>αμφ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "сомневаться"
    },
    {
        "word": "ανάγγειλα / ανήγγειλα",
        "translation": "Я известил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "αναγγέλλω",
        "notice": "",
        "qws": [
            "Я известил "
        ],
        "transls": [
            "αναγγέλλω"
        ],
        "baseAor": "<u>ανά</u>γγε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "извещать"
    },
    {
        "word": "ανάγγειλες / ανήγγειλες",
        "translation": "Ты известил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "αναγγέλλω",
        "notice": "",
        "qws": [
            "Ты известил "
        ],
        "transls": [
            "αναγγέλλω"
        ],
        "baseAor": "<u>ανά</u>γγε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "извещать"
    },
    {
        "word": "ανάγγειλε / ανήγγειλε",
        "translation": "Она известила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "αναγγέλλω",
        "notice": "",
        "qws": [
            "Она известила "
        ],
        "transls": [
            "αναγγέλλω"
        ],
        "baseAor": "<u>ανά</u>γγε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "извещать"
    },
    {
        "word": "αναγγείλαμε",
        "translation": "Мы известили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "αναγγέλλω",
        "notice": "",
        "qws": [
            "Мы известили "
        ],
        "transls": [
            "αναγγέλλω"
        ],
        "baseAor": "<u>ανά</u>γγε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "извещать"
    },
    {
        "word": "αναγγείλατε",
        "translation": "Вы известили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "αναγγέλλω",
        "notice": "",
        "qws": [
            "Вы известили "
        ],
        "transls": [
            "αναγγέλλω"
        ],
        "baseAor": "<u>ανά</u>γγε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "извещать"
    },
    {
        "word": "ανάγγειλαν / αναγγείλανε / ανήγγειλαν",
        "translation": "Они известили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "αναγγέλλω",
        "notice": "",
        "qws": [
            "Они известили "
        ],
        "transls": [
            "αναγγέλλω"
        ],
        "baseAor": "<u>ανά</u>γγε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "извещать"
    },
    {
        "word": "ανέτειλα / ανάτειλα",
        "translation": "Я взошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "ανατέλλω",
        "notice": "",
        "qws": [
            "Я взошёл "
        ],
        "transls": [
            "ανατέλλω"
        ],
        "baseAor": "<u>ανά</u>τε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "всходить"
    },
    {
        "word": "ανέτειλες / ανάτειλες",
        "translation": "Ты взошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "ανατέλλω",
        "notice": "",
        "qws": [
            "Ты взошёл "
        ],
        "transls": [
            "ανατέλλω"
        ],
        "baseAor": "<u>ανά</u>τε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "всходить"
    },
    {
        "word": "ανέτειλε / ανάτειλε",
        "translation": "Он взошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "ανατέλλω",
        "notice": "",
        "qws": [
            "Он взошёл "
        ],
        "transls": [
            "ανατέλλω"
        ],
        "baseAor": "<u>ανά</u>τε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "всходить"
    },
    {
        "word": "ανατείλαμε",
        "translation": "Мы взошли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "ανατέλλω",
        "notice": "",
        "qws": [
            "Мы взошли "
        ],
        "transls": [
            "ανατέλλω"
        ],
        "baseAor": "<u>ανά</u>τε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "всходить"
    },
    {
        "word": "ανατείλατε",
        "translation": "Вы взошли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "ανατέλλω",
        "notice": "",
        "qws": [
            "Вы взошли "
        ],
        "transls": [
            "ανατέλλω"
        ],
        "baseAor": "<u>ανά</u>τε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "всходить"
    },
    {
        "word": "ανέτειλαν / ανατείλανε / ανάτειλαν",
        "translation": "Они взошли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "ανατέλλω",
        "notice": "",
        "qws": [
            "Они взошли "
        ],
        "transls": [
            "ανατέλλω"
        ],
        "baseAor": "<u>ανά</u>τε<span class=\"selected-text\">ι</span>λα",
        "unicTransl": "всходить"
    },
    {
        "word": "αντικατέστησα",
        "translation": "Я заменил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αντικαθιστώ (αντικατασταίνω)",
        "notice": "",
        "qws": [
            "Я заменил "
        ],
        "transls": [
            "αντικαθιστώ"
        ],
        "baseAor": "<u>αντι</u><u>κα<span class=\"selected-text\" style=\"color:green\">τ</span></u><span class=\"selected-text\">έ</span>στησα",
        "unicTransl": "заменять"
    },
    {
        "word": "αντικατέστησες",
        "translation": "Ты заменил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αντικαθιστώ (αντικατασταίνω)",
        "notice": "",
        "qws": [
            "Ты заменил "
        ],
        "transls": [
            "αντικαθιστώ"
        ],
        "baseAor": "<u>αντι</u><u>κα<span class=\"selected-text\" style=\"color:green\">τ</span></u><span class=\"selected-text\">έ</span>στησα",
        "unicTransl": "заменять"
    },
    {
        "word": "αντικατέστησε",
        "translation": "Она заменила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αντικαθιστώ (αντικατασταίνω)",
        "notice": "",
        "qws": [
            "Она заменила "
        ],
        "transls": [
            "αντικαθιστώ"
        ],
        "baseAor": "<u>αντι</u><u>κα<span class=\"selected-text\" style=\"color:green\">τ</span></u><span class=\"selected-text\">έ</span>στησα",
        "unicTransl": "заменять"
    },
    {
        "word": "αντικατεστήσαμε",
        "translation": "Мы заменили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αντικαθιστώ (αντικατασταίνω)",
        "notice": "",
        "qws": [
            "Мы заменили "
        ],
        "transls": [
            "αντικαθιστώ"
        ],
        "baseAor": "<u>αντι</u><u>κα<span class=\"selected-text\" style=\"color:green\">τ</span></u><span class=\"selected-text\">έ</span>στησα",
        "unicTransl": "заменять"
    },
    {
        "word": "αντικατεστήσατε",
        "translation": "Вы заменили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αντικαθιστώ (αντικατασταίνω)",
        "notice": "",
        "qws": [
            "Вы заменили "
        ],
        "transls": [
            "αντικαθιστώ"
        ],
        "baseAor": "<u>αντι</u><u>κα<span class=\"selected-text\" style=\"color:green\">τ</span></u><span class=\"selected-text\">έ</span>στησα",
        "unicTransl": "заменять"
    },
    {
        "word": "αντικατέστησαν / αντικατεστήσανε",
        "translation": "Они заменили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αντικαθιστώ (αντικατασταίνω)",
        "notice": "",
        "qws": [
            "Они заменили "
        ],
        "transls": [
            "αντικαθιστώ"
        ],
        "baseAor": "<u>αντι</u><u>κα<span class=\"selected-text\" style=\"color:green\">τ</span></u><span class=\"selected-text\">έ</span>στησα",
        "unicTransl": "заменять"
    },
    {
        "word": "έπεσα",
        "translation": "Я упал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "πέφτω",
        "notice": "",
        "qws": [
            "Я упал "
        ],
        "transls": [
            "πέφτω"
        ],
        "baseAor": "έπε<span class=\"selected-text\" style=\"color:green\">σ</span>α",
        "unicTransl": "падать"
    },
    {
        "word": "έπεσες",
        "translation": "Ты упал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "πέφτω",
        "notice": "",
        "qws": [
            "Ты упал "
        ],
        "transls": [
            "πέφτω"
        ],
        "baseAor": "έπε<span class=\"selected-text\" style=\"color:green\">σ</span>α",
        "unicTransl": "падать"
    },
    {
        "word": "έπεσε",
        "translation": "Она упала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "πέφτω",
        "notice": "",
        "qws": [
            "Она упала "
        ],
        "transls": [
            "πέφτω"
        ],
        "baseAor": "έπε<span class=\"selected-text\" style=\"color:green\">σ</span>α",
        "unicTransl": "падать"
    },
    {
        "word": "πέσαμε",
        "translation": "Мы упали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "πέφτω",
        "notice": "",
        "qws": [
            "Мы упали "
        ],
        "transls": [
            "πέφτω"
        ],
        "baseAor": "έπε<span class=\"selected-text\" style=\"color:green\">σ</span>α",
        "unicTransl": "падать"
    },
    {
        "word": "πέσατε",
        "translation": "Вы упали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "πέφτω",
        "notice": "",
        "qws": [
            "Вы упали "
        ],
        "transls": [
            "πέφτω"
        ],
        "baseAor": "έπε<span class=\"selected-text\" style=\"color:green\">σ</span>α",
        "unicTransl": "падать"
    },
    {
        "word": "έπεσαν / πέσανε",
        "translation": "Они упали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "πέφτω",
        "notice": "",
        "qws": [
            "Они упали "
        ],
        "transls": [
            "πέφτω"
        ],
        "baseAor": "έπε<span class=\"selected-text\" style=\"color:green\">σ</span>α",
        "unicTransl": "падать"
    },
    {
        "word": "απέδωσα / απόδωσα / απόδωκα",
        "translation": "Я отдал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αποδίδω",
        "notice": "",
        "qws": [
            "Я отдал "
        ],
        "transls": [
            "αποδίδω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (απόδωσα, απόδωκα)",
        "unicTransl": "отдавать, придавать"
    },
    {
        "word": "απέδωσες / απόδωσες / απόδωκες",
        "translation": "Ты отдал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αποδίδω",
        "notice": "",
        "qws": [
            "Ты отдал "
        ],
        "transls": [
            "αποδίδω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (απόδωσα, απόδωκα)",
        "unicTransl": "отдавать, придавать"
    },
    {
        "word": "απέδωσε / απόδωσε / απόδωκε",
        "translation": "Он отдал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αποδίδω",
        "notice": "",
        "qws": [
            "Он отдал "
        ],
        "transls": [
            "αποδίδω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (απόδωσα, απόδωκα)",
        "unicTransl": "отдавать, придавать"
    },
    {
        "word": "αποδώσαμε / αποδώκαμε",
        "translation": "Мы отдали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αποδίδω",
        "notice": "",
        "qws": [
            "Мы отдали "
        ],
        "transls": [
            "αποδίδω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (απόδωσα, απόδωκα)",
        "unicTransl": "отдавать, придавать"
    },
    {
        "word": "αποδώσατε / αποδώκατε",
        "translation": "Вы отдали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αποδίδω",
        "notice": "",
        "qws": [
            "Вы отдали "
        ],
        "transls": [
            "αποδίδω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (απόδωσα, απόδωκα)",
        "unicTransl": "отдавать, придавать"
    },
    {
        "word": "απέδωσαν / αποδώσανε / απόδωκαν / αποδώκανε",
        "translation": "Они отдали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αποδίδω",
        "notice": "",
        "qws": [
            "Они отдали "
        ],
        "transls": [
            "αποδίδω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α (απόδωσα, απόδωκα)",
        "unicTransl": "отдавать, придавать"
    },
    {
        "word": "απέτυχα",
        "translation": "Я потерпел неудачу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποτυχαίνω",
        "notice": "",
        "qws": [
            "Я потерпел неудачу "
        ],
        "transls": [
            "αποτυχαίνω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>τυχα",
        "unicTransl": "не удаваться"
    },
    {
        "word": "απέτυχες",
        "translation": "Ты потерпел неудачу ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποτυχαίνω",
        "notice": "",
        "qws": [
            "Ты потерпел неудачу "
        ],
        "transls": [
            "αποτυχαίνω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>τυχα",
        "unicTransl": "не удаваться"
    },
    {
        "word": "απέτυχε",
        "translation": "Она потерпела неудачу ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποτυχαίνω",
        "notice": "",
        "qws": [
            "Она потерпела неудачу "
        ],
        "transls": [
            "αποτυχαίνω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>τυχα",
        "unicTransl": "не удаваться"
    },
    {
        "word": "αποτύχαμε",
        "translation": "Мы потерпели неудачу ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποτυχαίνω",
        "notice": "",
        "qws": [
            "Мы потерпели неудачу "
        ],
        "transls": [
            "αποτυχαίνω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>τυχα",
        "unicTransl": "не удаваться"
    },
    {
        "word": "αποτύχατε",
        "translation": "Вы потерпели неудачу ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποτυχαίνω",
        "notice": "",
        "qws": [
            "Вы потерпели неудачу "
        ],
        "transls": [
            "αποτυχαίνω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>τυχα",
        "unicTransl": "не удаваться"
    },
    {
        "word": "απέτυχαν / αποτύχανε",
        "translation": "Они потерпели неудачу ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποτυχαίνω",
        "notice": "",
        "qws": [
            "Они потерпели неудачу "
        ],
        "transls": [
            "αποτυχαίνω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>τυχα",
        "unicTransl": "не удаваться"
    },
    {
        "word": "απέφυγα",
        "translation": "Я избежал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Я избежал "
        ],
        "transls": [
            "αποφεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "απέφυγες",
        "translation": "Ты избежал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Ты избежал "
        ],
        "transls": [
            "αποφεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "απέφυγε",
        "translation": "Он избежал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Он избежал "
        ],
        "transls": [
            "αποφεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "αποφύγαμε",
        "translation": "Мы избежали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Мы избежали "
        ],
        "transls": [
            "αποφεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "αποφύγατε",
        "translation": "Вы избежали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Вы избежали "
        ],
        "transls": [
            "αποφεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "απέφυγαν / αποφύγανε",
        "translation": "Они избежали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "αποφεύγω",
        "notice": "",
        "qws": [
            "Они избежали "
        ],
        "transls": [
            "αποφεύγω"
        ],
        "baseAor": "<u>απ</u><span class=\"selected-text\">έ</span>φυγα",
        "unicTransl": "избегать"
    },
    {
        "word": "έφταιξα",
        "translation": "Я был виноват ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "φταίω (πταίω)",
        "notice": "",
        "qws": [
            "Я был виноват "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφτ<span class=\"selected-text\" style=\"color:green\">αιξ</span>α",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "έφταιξες",
        "translation": "Ты был виноват ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "φταίω (πταίω)",
        "notice": "",
        "qws": [
            "Ты был виноват "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφτ<span class=\"selected-text\" style=\"color:green\">αιξ</span>α",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "έφταιξε",
        "translation": "Она была виновата ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "φταίω (πταίω)",
        "notice": "",
        "qws": [
            "Она была виновата "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφτ<span class=\"selected-text\" style=\"color:green\">αιξ</span>α",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "φταίξαμε",
        "translation": "Мы были виноваты ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "φταίω (πταίω)",
        "notice": "",
        "qws": [
            "Мы были виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφτ<span class=\"selected-text\" style=\"color:green\">αιξ</span>α",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "φταίξατε",
        "translation": "Вы были виноваты ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "φταίω (πταίω)",
        "notice": "",
        "qws": [
            "Вы были виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφτ<span class=\"selected-text\" style=\"color:green\">αιξ</span>α",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "έφταιξαν / φταίξανε",
        "translation": "Они были виноваты ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "φταίω (πταίω)",
        "notice": "",
        "qws": [
            "Они были виноваты "
        ],
        "transls": [
            "φταίω"
        ],
        "baseAor": "έφτ<span class=\"selected-text\" style=\"color:green\">αιξ</span>α",
        "unicTransl": "быть виноватым"
    },
    {
        "word": "αρρώστησα",
        "translation": "Я заболел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Я заболел "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "заболеть"
    },
    {
        "word": "αρρώστησες",
        "translation": "Ты заболел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Ты заболел "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "заболеть"
    },
    {
        "word": "αρρώστησε",
        "translation": "Он заболел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Он заболел "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "заболеть"
    },
    {
        "word": "αρρωστήσαμε",
        "translation": "Мы заболели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Мы заболели "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "заболеть"
    },
    {
        "word": "αρρωστήσατε",
        "translation": "Вы заболели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Вы заболели "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "заболеть"
    },
    {
        "word": "αρρώστησαν / αρρωστήσανε",
        "translation": "Они заболели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αρρωσταίνω",
        "notice": "",
        "qws": [
            "Они заболели "
        ],
        "transls": [
            "αρρωσταίνω"
        ],
        "baseAor": "αρρώστ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "заболеть"
    },
    {
        "word": "αύξησα",
        "translation": "Я увеличил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αυξάνω, αυξαίνω - редко",
        "notice": "",
        "qws": [
            "Я увеличил "
        ],
        "transls": [
            "αυξάνω"
        ],
        "baseAor": "αύξ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "увеличивать"
    },
    {
        "word": "αύξησες",
        "translation": "Ты увеличил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αυξάνω, αυξαίνω - редко",
        "notice": "",
        "qws": [
            "Ты увеличил "
        ],
        "transls": [
            "αυξάνω"
        ],
        "baseAor": "αύξ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "увеличивать"
    },
    {
        "word": "αύξησε",
        "translation": "Она увеличила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αυξάνω, αυξαίνω - редко",
        "notice": "",
        "qws": [
            "Она увеличила "
        ],
        "transls": [
            "αυξάνω"
        ],
        "baseAor": "αύξ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "увеличивать"
    },
    {
        "word": "αυξήσαμε",
        "translation": "Мы увеличили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αυξάνω, αυξαίνω - редко",
        "notice": "",
        "qws": [
            "Мы увеличили "
        ],
        "transls": [
            "αυξάνω"
        ],
        "baseAor": "αύξ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "увеличивать"
    },
    {
        "word": "αυξήσατε",
        "translation": "Вы увеличили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αυξάνω, αυξαίνω - редко",
        "notice": "",
        "qws": [
            "Вы увеличили "
        ],
        "transls": [
            "αυξάνω"
        ],
        "baseAor": "αύξ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "увеличивать"
    },
    {
        "word": "αύξησαν / αυξήσανε",
        "translation": "Они увеличили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "αυξάνω, αυξαίνω - редко",
        "notice": "",
        "qws": [
            "Они увеличили "
        ],
        "transls": [
            "αυξάνω"
        ],
        "baseAor": "αύξ<span class=\"selected-text\" style=\"color:green\">ησ</span>α",
        "unicTransl": "увеличивать"
    },
    {
        "word": "έγειρα",
        "translation": "Я наклонил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "γέρνω",
        "notice": "",
        "qws": [
            "Я наклонил "
        ],
        "transls": [
            "γέρνω"
        ],
        "baseAor": "έγε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "наклонять"
    },
    {
        "word": "έγειρες",
        "translation": "Ты наклонил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "γέρνω",
        "notice": "",
        "qws": [
            "Ты наклонил "
        ],
        "transls": [
            "γέρνω"
        ],
        "baseAor": "έγε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "наклонять"
    },
    {
        "word": "έγειρε",
        "translation": "Он наклонил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "γέρνω",
        "notice": "",
        "qws": [
            "Он наклонил "
        ],
        "transls": [
            "γέρνω"
        ],
        "baseAor": "έγε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "наклонять"
    },
    {
        "word": "γείραμε",
        "translation": "Мы наклонили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "γέρνω",
        "notice": "",
        "qws": [
            "Мы наклонили "
        ],
        "transls": [
            "γέρνω"
        ],
        "baseAor": "έγε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "наклонять"
    },
    {
        "word": "γείρατε",
        "translation": "Вы наклонили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "γέρνω",
        "notice": "",
        "qws": [
            "Вы наклонили "
        ],
        "transls": [
            "γέρνω"
        ],
        "baseAor": "έγε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "наклонять"
    },
    {
        "word": "έγειραν / γείρανε",
        "translation": "Они наклонили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "γέρνω",
        "notice": "",
        "qws": [
            "Они наклонили "
        ],
        "transls": [
            "γέρνω"
        ],
        "baseAor": "έγε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "наклонять"
    },
    {
        "word": "γέρασα",
        "translation": "Я состарился ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "γερνώ, -άω",
        "notice": "",
        "qws": [
            "Я состарился "
        ],
        "transls": [
            "γερνώ, -άω"
        ],
        "baseAor": "γέρασα",
        "unicTransl": "стариться"
    },
    {
        "word": "γέρασες",
        "translation": "Ты состарился ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "γερνώ, -άω",
        "notice": "",
        "qws": [
            "Ты состарился "
        ],
        "transls": [
            "γερνώ, -άω"
        ],
        "baseAor": "γέρασα",
        "unicTransl": "стариться"
    },
    {
        "word": "γέρασε",
        "translation": "Она состарилась ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "γερνώ, -άω",
        "notice": "",
        "qws": [
            "Она состарилась "
        ],
        "transls": [
            "γερνώ, -άω"
        ],
        "baseAor": "γέρασα",
        "unicTransl": "стариться"
    },
    {
        "word": "γεράσαμε",
        "translation": "Мы состарились ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "γερνώ, -άω",
        "notice": "",
        "qws": [
            "Мы состарились "
        ],
        "transls": [
            "γερνώ, -άω"
        ],
        "baseAor": "γέρασα",
        "unicTransl": "стариться"
    },
    {
        "word": "γεράσατε",
        "translation": "Вы состарились ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "γερνώ, -άω",
        "notice": "",
        "qws": [
            "Вы состарились "
        ],
        "transls": [
            "γερνώ, -άω"
        ],
        "baseAor": "γέρασα",
        "unicTransl": "стариться"
    },
    {
        "word": "γέρασαν / γεράσανε",
        "translation": "Они состарились ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "γερνώ, -άω",
        "notice": "",
        "qws": [
            "Они состарились "
        ],
        "transls": [
            "γερνώ, -άω"
        ],
        "baseAor": "γέρασα",
        "unicTransl": "стариться"
    },
    {
        "word": "έδειρα",
        "translation": "Я побил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "δέρνω",
        "notice": "",
        "qws": [
            "Я побил "
        ],
        "transls": [
            "δέρνω"
        ],
        "baseAor": "έδε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "бить"
    },
    {
        "word": "έδειρες",
        "translation": "Ты побил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "δέρνω",
        "notice": "",
        "qws": [
            "Ты побил "
        ],
        "transls": [
            "δέρνω"
        ],
        "baseAor": "έδε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "бить"
    },
    {
        "word": "έδειρε",
        "translation": "Он побил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "δέρνω",
        "notice": "",
        "qws": [
            "Он побил "
        ],
        "transls": [
            "δέρνω"
        ],
        "baseAor": "έδε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "бить"
    },
    {
        "word": "εδείραμε",
        "translation": "Мы побили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "δέρνω",
        "notice": "",
        "qws": [
            "Мы побили "
        ],
        "transls": [
            "δέρνω"
        ],
        "baseAor": "έδε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "бить"
    },
    {
        "word": "εδείρατε",
        "translation": "Вы побили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "δέρνω",
        "notice": "",
        "qws": [
            "Вы побили "
        ],
        "transls": [
            "δέρνω"
        ],
        "baseAor": "έδε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "бить"
    },
    {
        "word": "έδειραν / εδείρανε",
        "translation": "Они побили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "δέρνω",
        "notice": "",
        "qws": [
            "Они побили "
        ],
        "transls": [
            "δέρνω"
        ],
        "baseAor": "έδε<span class=\"selected-text\">ι</span>ρα",
        "unicTransl": "бить"
    },
    {
        "word": "διέκοψα",
        "translation": "Я прервал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "διακόπτω",
        "notice": "",
        "qws": [
            "Я прервал "
        ],
        "transls": [
            "διακόπτω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\">έ</span>κοψα",
        "unicTransl": "прерывать"
    },
    {
        "word": "διέκοψες",
        "translation": "Ты прервал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "διακόπτω",
        "notice": "",
        "qws": [
            "Ты прервал "
        ],
        "transls": [
            "διακόπτω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\">έ</span>κοψα",
        "unicTransl": "прерывать"
    },
    {
        "word": "διέκοψε",
        "translation": "Она прервала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "διακόπτω",
        "notice": "",
        "qws": [
            "Она прервала "
        ],
        "transls": [
            "διακόπτω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\">έ</span>κοψα",
        "unicTransl": "прерывать"
    },
    {
        "word": "διακόψαμε",
        "translation": "Мы прервали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "διακόπτω",
        "notice": "",
        "qws": [
            "Мы прервали "
        ],
        "transls": [
            "διακόπτω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\">έ</span>κοψα",
        "unicTransl": "прерывать"
    },
    {
        "word": "διακόψατε",
        "translation": "Вы прервали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "διακόπτω",
        "notice": "",
        "qws": [
            "Вы прервали "
        ],
        "transls": [
            "διακόπτω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\">έ</span>κοψα",
        "unicTransl": "прерывать"
    },
    {
        "word": "διέκοψαν / διακόψανε",
        "translation": "Они прервали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "διακόπτω",
        "notice": "",
        "qws": [
            "Они прервали "
        ],
        "transls": [
            "διακόπτω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\">έ</span>κοψα",
        "unicTransl": "прерывать"
    },
    {
        "word": "διεύθυνα / διηύθυνα",
        "translation": "Я проруководил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "διευθύνω",
        "notice": "",
        "qws": [
            "Я проруководил "
        ],
        "transls": [
            "διευθύνω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\" style=\"color:green\">η</span>ύθυνα (διεύθυνα)",
        "unicTransl": "управлять"
    },
    {
        "word": "διεύθυνες / διηύθυνες",
        "translation": "Ты проруководил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "διευθύνω",
        "notice": "",
        "qws": [
            "Ты проруководил "
        ],
        "transls": [
            "διευθύνω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\" style=\"color:green\">η</span>ύθυνα (διεύθυνα)",
        "unicTransl": "управлять"
    },
    {
        "word": "διεύθυνε / διηύθυνε",
        "translation": "Он проруководил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "διευθύνω",
        "notice": "",
        "qws": [
            "Он проруководил "
        ],
        "transls": [
            "διευθύνω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\" style=\"color:green\">η</span>ύθυνα (διεύθυνα)",
        "unicTransl": "управлять"
    },
    {
        "word": "διευθύναμε",
        "translation": "Мы проруководили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "διευθύνω",
        "notice": "",
        "qws": [
            "Мы проруководили "
        ],
        "transls": [
            "διευθύνω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\" style=\"color:green\">η</span>ύθυνα (διεύθυνα)",
        "unicTransl": "управлять"
    },
    {
        "word": "διευθύνατε",
        "translation": "Вы проруководили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "διευθύνω",
        "notice": "",
        "qws": [
            "Вы проруководили "
        ],
        "transls": [
            "διευθύνω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\" style=\"color:green\">η</span>ύθυνα (διεύθυνα)",
        "unicTransl": "управлять"
    },
    {
        "word": "διεύθυναν / διευθύνανε / διηύθυναν",
        "translation": "Они проруководили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "διευθύνω",
        "notice": "",
        "qws": [
            "Они проруководили "
        ],
        "transls": [
            "διευθύνω"
        ],
        "baseAor": "<u>δι</u><span class=\"selected-text\" style=\"color:green\">η</span>ύθυνα (διεύθυνα)",
        "unicTransl": "управлять"
    },
    {
        "word": "εγκατέλειψα",
        "translation": "Я покинул ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκαταλείπω",
        "notice": "",
        "qws": [
            "Я покинул "
        ],
        "transls": [
            "εγκαταλείπω"
        ],
        "baseAor": "<u>εγ</u><u>κατ</u><span class=\"selected-text\">έ</span>λειψα",
        "unicTransl": "покидать, оставлять"
    },
    {
        "word": "εγκατέλειψες",
        "translation": "Ты покинул ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκαταλείπω",
        "notice": "",
        "qws": [
            "Ты покинул "
        ],
        "transls": [
            "εγκαταλείπω"
        ],
        "baseAor": "<u>εγ</u><u>κατ</u><span class=\"selected-text\">έ</span>λειψα",
        "unicTransl": "покидать, оставлять"
    },
    {
        "word": "εγκατέλειψε",
        "translation": "Она покинула ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκαταλείπω",
        "notice": "",
        "qws": [
            "Она покинула "
        ],
        "transls": [
            "εγκαταλείπω"
        ],
        "baseAor": "<u>εγ</u><u>κατ</u><span class=\"selected-text\">έ</span>λειψα",
        "unicTransl": "покидать, оставлять"
    },
    {
        "word": "εγκαταλείψαμε",
        "translation": "Мы покинули ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκαταλείπω",
        "notice": "",
        "qws": [
            "Мы покинули "
        ],
        "transls": [
            "εγκαταλείπω"
        ],
        "baseAor": "<u>εγ</u><u>κατ</u><span class=\"selected-text\">έ</span>λειψα",
        "unicTransl": "покидать, оставлять"
    },
    {
        "word": "εγκαταλείψατε",
        "translation": "Вы покинули ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκαταλείπω",
        "notice": "",
        "qws": [
            "Вы покинули "
        ],
        "transls": [
            "εγκαταλείπω"
        ],
        "baseAor": "<u>εγ</u><u>κατ</u><span class=\"selected-text\">έ</span>λειψα",
        "unicTransl": "покидать, оставлять"
    },
    {
        "word": "εγκατέλειψαν / εγκαταλείψανε",
        "translation": "Они покинули ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκαταλείπω",
        "notice": "",
        "qws": [
            "Они покинули "
        ],
        "transls": [
            "εγκαταλείπω"
        ],
        "baseAor": "<u>εγ</u><u>κατ</u><span class=\"selected-text\">έ</span>λειψα",
        "unicTransl": "покидать, оставлять"
    },
    {
        "word": "ενέκρινα",
        "translation": "Я одобрил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκρίνω",
        "notice": "",
        "qws": [
            "Я одобрил "
        ],
        "transls": [
            "εγκρίνω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>κρινα",
        "unicTransl": "одобрять, утверждать"
    },
    {
        "word": "ενέκρινες",
        "translation": "Ты одобрил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκρίνω",
        "notice": "",
        "qws": [
            "Ты одобрил "
        ],
        "transls": [
            "εγκρίνω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>κρινα",
        "unicTransl": "одобрять, утверждать"
    },
    {
        "word": "ενέκρινε",
        "translation": "Он одобрил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκρίνω",
        "notice": "",
        "qws": [
            "Он одобрил "
        ],
        "transls": [
            "εγκρίνω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>κρινα",
        "unicTransl": "одобрять, утверждать"
    },
    {
        "word": "εγκρίναμε",
        "translation": "Мы одобрили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκρίνω",
        "notice": "",
        "qws": [
            "Мы одобрили "
        ],
        "transls": [
            "εγκρίνω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>κρινα",
        "unicTransl": "одобрять, утверждать"
    },
    {
        "word": "εγκρίνατε",
        "translation": "Вы одобрили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκρίνω",
        "notice": "",
        "qws": [
            "Вы одобрили "
        ],
        "transls": [
            "εγκρίνω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>κρινα",
        "unicTransl": "одобрять, утверждать"
    },
    {
        "word": "ενέκριναν / εγκρίνανε",
        "translation": "Они одобрили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εγκρίνω",
        "notice": "",
        "qws": [
            "Они одобрили "
        ],
        "transls": [
            "εγκρίνω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>κρινα",
        "unicTransl": "одобрять, утверждать"
    },
    {
        "word": "εισήγαγα",
        "translation": "Я ввёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εισάγω",
        "notice": "",
        "qws": [
            "Я ввёл "
        ],
        "transls": [
            "εισάγω"
        ],
        "baseAor": "<u>εισ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вводить, вносить"
    },
    {
        "word": "εισήγαγες",
        "translation": "Ты ввёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εισάγω",
        "notice": "",
        "qws": [
            "Ты ввёл "
        ],
        "transls": [
            "εισάγω"
        ],
        "baseAor": "<u>εισ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вводить, вносить"
    },
    {
        "word": "εισήγαγε",
        "translation": "Она ввела ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εισάγω",
        "notice": "",
        "qws": [
            "Она ввела "
        ],
        "transls": [
            "εισάγω"
        ],
        "baseAor": "<u>εισ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вводить, вносить"
    },
    {
        "word": "εισηγάγαμε",
        "translation": "Мы ввели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εισάγω",
        "notice": "",
        "qws": [
            "Мы ввели "
        ],
        "transls": [
            "εισάγω"
        ],
        "baseAor": "<u>εισ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вводить, вносить"
    },
    {
        "word": "εισηγάγατε",
        "translation": "Вы ввели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εισάγω",
        "notice": "",
        "qws": [
            "Вы ввели "
        ],
        "transls": [
            "εισάγω"
        ],
        "baseAor": "<u>εισ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вводить, вносить"
    },
    {
        "word": "εισήγαγαν / εισηγάγανε",
        "translation": "Они ввели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εισάγω",
        "notice": "",
        "qws": [
            "Они ввели "
        ],
        "transls": [
            "εισάγω"
        ],
        "baseAor": "<u>εισ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вводить, вносить"
    },
    {
        "word": "εξέδωσα",
        "translation": "Я издал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκδίδω",
        "notice": "",
        "qws": [
            "Я издал "
        ],
        "transls": [
            "εκδίδω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>δωσα",
        "unicTransl": "издавать"
    },
    {
        "word": "εξέδωσες",
        "translation": "Ты издал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκδίδω",
        "notice": "",
        "qws": [
            "Ты издал "
        ],
        "transls": [
            "εκδίδω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>δωσα",
        "unicTransl": "издавать"
    },
    {
        "word": "εξέδωσε",
        "translation": "Он издал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκδίδω",
        "notice": "",
        "qws": [
            "Он издал "
        ],
        "transls": [
            "εκδίδω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>δωσα",
        "unicTransl": "издавать"
    },
    {
        "word": "εκδώσαμε",
        "translation": "Мы издали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκδίδω",
        "notice": "",
        "qws": [
            "Мы издали "
        ],
        "transls": [
            "εκδίδω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>δωσα",
        "unicTransl": "издавать"
    },
    {
        "word": "εκδώσατε",
        "translation": "Вы издали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκδίδω",
        "notice": "",
        "qws": [
            "Вы издали "
        ],
        "transls": [
            "εκδίδω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>δωσα",
        "unicTransl": "издавать"
    },
    {
        "word": "εξέδωσαν / εκδώσανε",
        "translation": "Они издали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκδίδω",
        "notice": "",
        "qws": [
            "Они издали "
        ],
        "transls": [
            "εκδίδω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>δωσα",
        "unicTransl": "издавать"
    },
    {
        "word": "εξέλεξα",
        "translation": "Я выбрал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκλέγω",
        "notice": "",
        "qws": [
            "Я выбрал "
        ],
        "transls": [
            "εκλέγω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>λεξα",
        "unicTransl": "выбирать"
    },
    {
        "word": "εξέλεξες",
        "translation": "Ты выбрал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκλέγω",
        "notice": "",
        "qws": [
            "Ты выбрал "
        ],
        "transls": [
            "εκλέγω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>λεξα",
        "unicTransl": "выбирать"
    },
    {
        "word": "εξέλεξε",
        "translation": "Он выбрал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκλέγω",
        "notice": "",
        "qws": [
            "Он выбрал "
        ],
        "transls": [
            "εκλέγω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>λεξα",
        "unicTransl": "выбирать"
    },
    {
        "word": "εκλέξαμε",
        "translation": "Мы выбрали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκλέγω",
        "notice": "",
        "qws": [
            "Мы выбрали "
        ],
        "transls": [
            "εκλέγω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>λεξα",
        "unicTransl": "выбирать"
    },
    {
        "word": "εκλέξατε",
        "translation": "Вы выбрали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκλέγω",
        "notice": "",
        "qws": [
            "Вы выбрали "
        ],
        "transls": [
            "εκλέγω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>λεξα",
        "unicTransl": "выбирать"
    },
    {
        "word": "εξέλεξαν / εκλέξανε",
        "translation": "Они выбрали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκλέγω",
        "notice": "",
        "qws": [
            "Они выбрали "
        ],
        "transls": [
            "εκλέγω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>λεξα",
        "unicTransl": "выбирать"
    },
    {
        "word": "εξέφρασα",
        "translation": "Я выразил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκφράζω",
        "notice": "",
        "qws": [
            "Я выразил "
        ],
        "transls": [
            "εκφράζω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "выражать"
    },
    {
        "word": "εξέφρασες",
        "translation": "Ты выразил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκφράζω",
        "notice": "",
        "qws": [
            "Ты выразил "
        ],
        "transls": [
            "εκφράζω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "выражать"
    },
    {
        "word": "εξέφρασε",
        "translation": "Она выразила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκφράζω",
        "notice": "",
        "qws": [
            "Она выразила "
        ],
        "transls": [
            "εκφράζω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "выражать"
    },
    {
        "word": "εκφράσαμε",
        "translation": "Мы выразили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκφράζω",
        "notice": "",
        "qws": [
            "Мы выразили "
        ],
        "transls": [
            "εκφράζω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "выражать"
    },
    {
        "word": "εκφράσατε",
        "translation": "Вы выразили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκφράζω",
        "notice": "",
        "qws": [
            "Вы выразили "
        ],
        "transls": [
            "εκφράζω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "выражать"
    },
    {
        "word": "εξέφρασαν / εκφράσανε",
        "translation": "Они выразили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εκφράζω",
        "notice": "",
        "qws": [
            "Они выразили "
        ],
        "transls": [
            "εκφράζω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ξ</span></u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "выражать"
    },
    {
        "word": "έλπισα / ήλπισα",
        "translation": "Я понадеялся ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ελπίζω",
        "notice": "",
        "qws": [
            "Я понадеялся "
        ],
        "transls": [
            "ελπίζω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>λπισα",
        "unicTransl": "надеяться"
    },
    {
        "word": "έλπισες / ήλπισες",
        "translation": "Ты понадеялся ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ελπίζω",
        "notice": "",
        "qws": [
            "Ты понадеялся "
        ],
        "transls": [
            "ελπίζω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>λπισα",
        "unicTransl": "надеяться"
    },
    {
        "word": "έλπισε / ήλπισε",
        "translation": "Он понадеялся ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ελπίζω",
        "notice": "",
        "qws": [
            "Он понадеялся "
        ],
        "transls": [
            "ελπίζω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>λπισα",
        "unicTransl": "надеяться"
    },
    {
        "word": "ελπίσαμε",
        "translation": "Мы понадеялись ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ελπίζω",
        "notice": "",
        "qws": [
            "Мы понадеялись "
        ],
        "transls": [
            "ελπίζω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>λπισα",
        "unicTransl": "надеяться"
    },
    {
        "word": "ελπίσατε",
        "translation": "Вы понадеялись ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ελπίζω",
        "notice": "",
        "qws": [
            "Вы понадеялись "
        ],
        "transls": [
            "ελπίζω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>λπισα",
        "unicTransl": "надеяться"
    },
    {
        "word": "έλπισαν / ελπίσανε / ήλπισαν",
        "translation": "Они понадеялись ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "ελπίζω",
        "notice": "",
        "qws": [
            "Они понадеялись "
        ],
        "transls": [
            "ελπίζω"
        ],
        "baseAor": "<span class=\"selected-text\" style=\"color:green\">ή</span>λπισα",
        "unicTransl": "надеяться"
    },
    {
        "word": "ενέπνευσα",
        "translation": "Я вдохновился ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εμπνέω",
        "notice": "",
        "qws": [
            "Я вдохновился "
        ],
        "transls": [
            "εμπνέω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>πνευσα",
        "unicTransl": "вдохновлять"
    },
    {
        "word": "ενέπνευσες",
        "translation": "Ты вдохновился ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εμπνέω",
        "notice": "",
        "qws": [
            "Ты вдохновился "
        ],
        "transls": [
            "εμπνέω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>πνευσα",
        "unicTransl": "вдохновлять"
    },
    {
        "word": "ενέπνευσε",
        "translation": "Она вдохновилась ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εμπνέω",
        "notice": "",
        "qws": [
            "Она вдохновилась "
        ],
        "transls": [
            "εμπνέω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>πνευσα",
        "unicTransl": "вдохновлять"
    },
    {
        "word": "εμπνεύσαμε",
        "translation": "Мы вдохновились ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εμπνέω",
        "notice": "",
        "qws": [
            "Мы вдохновились "
        ],
        "transls": [
            "εμπνέω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>πνευσα",
        "unicTransl": "вдохновлять"
    },
    {
        "word": "εμπνεύσατε",
        "translation": "Вы вдохновились ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εμπνέω",
        "notice": "",
        "qws": [
            "Вы вдохновились "
        ],
        "transls": [
            "εμπνέω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>πνευσα",
        "unicTransl": "вдохновлять"
    },
    {
        "word": "ενέπνευσαν / εμπνεύσανε",
        "translation": "Они вдохновились ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "εμπνέω",
        "notice": "",
        "qws": [
            "Они вдохновились "
        ],
        "transls": [
            "εμπνέω"
        ],
        "baseAor": "<u>ε<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>πνευσα",
        "unicTransl": "вдохновлять"
    },
    {
        "word": "ενδιέφερα",
        "translation": "Я заинтересовал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "ενδιαφέρω",
        "notice": "",
        "qws": [
            "Я заинтересовал "
        ],
        "transls": [
            "ενδιαφέρω"
        ],
        "baseAor": "<u>εν</u><u>δι</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "интересовать"
    },
    {
        "word": "ενδιέφερες",
        "translation": "Ты заинтересовал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "ενδιαφέρω",
        "notice": "",
        "qws": [
            "Ты заинтересовал "
        ],
        "transls": [
            "ενδιαφέρω"
        ],
        "baseAor": "<u>εν</u><u>δι</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "интересовать"
    },
    {
        "word": "ενδιέφερε",
        "translation": "Он заинтересовал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "ενδιαφέρω",
        "notice": "",
        "qws": [
            "Он заинтересовал "
        ],
        "transls": [
            "ενδιαφέρω"
        ],
        "baseAor": "<u>εν</u><u>δι</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "интересовать"
    },
    {
        "word": "ενδιαφέραμε",
        "translation": "Мы заинтересовали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "ενδιαφέρω",
        "notice": "",
        "qws": [
            "Мы заинтересовали "
        ],
        "transls": [
            "ενδιαφέρω"
        ],
        "baseAor": "<u>εν</u><u>δι</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "интересовать"
    },
    {
        "word": "ενδιαφέρατε",
        "translation": "Вы заинтересовали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "ενδιαφέρω",
        "notice": "",
        "qws": [
            "Вы заинтересовали "
        ],
        "transls": [
            "ενδιαφέρω"
        ],
        "baseAor": "<u>εν</u><u>δι</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "интересовать"
    },
    {
        "word": "ενδιέφεραν / ενδιαφέρανε",
        "translation": "Они заинтересовали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "ενδιαφέρω",
        "notice": "",
        "qws": [
            "Они заинтересовали "
        ],
        "transls": [
            "ενδιαφέρω"
        ],
        "baseAor": "<u>εν</u><u>δι</u><span class=\"selected-text\">έ</span>φερα",
        "unicTransl": "интересовать"
    },
    {
        "word": "εξήγαγα",
        "translation": "Я вынул ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εξάγω",
        "notice": "",
        "qws": [
            "Я вынул "
        ],
        "transls": [
            "εξάγω"
        ],
        "baseAor": "<u>εξ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вынимать, выводить"
    },
    {
        "word": "εξήγαγες",
        "translation": "Ты вынул ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εξάγω",
        "notice": "",
        "qws": [
            "Ты вынул "
        ],
        "transls": [
            "εξάγω"
        ],
        "baseAor": "<u>εξ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вынимать, выводить"
    },
    {
        "word": "εξήγαγε",
        "translation": "Она вынула ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εξάγω",
        "notice": "",
        "qws": [
            "Она вынула "
        ],
        "transls": [
            "εξάγω"
        ],
        "baseAor": "<u>εξ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вынимать, выводить"
    },
    {
        "word": "εξηγάγαμε",
        "translation": "Мы вынули ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εξάγω",
        "notice": "",
        "qws": [
            "Мы вынули "
        ],
        "transls": [
            "εξάγω"
        ],
        "baseAor": "<u>εξ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вынимать, выводить"
    },
    {
        "word": "εξηγάγατε",
        "translation": "Вы вынули ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εξάγω",
        "notice": "",
        "qws": [
            "Вы вынули "
        ],
        "transls": [
            "εξάγω"
        ],
        "baseAor": "<u>εξ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вынимать, выводить"
    },
    {
        "word": "εξήγαγαν / εξηγάγανε",
        "translation": "Они вынули ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "εξάγω",
        "notice": "",
        "qws": [
            "Они вынули "
        ],
        "transls": [
            "εξάγω"
        ],
        "baseAor": "<u>εξ</u><span class=\"selected-text\" style=\"color:green\">ή</span>γ<span class=\"selected-text\">αγ</span>α",
        "unicTransl": "вынимать, выводить"
    },
    {
        "word": "επέμεινα",
        "translation": "Я настоял ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "επιμένω",
        "notice": "",
        "qws": [
            "Я настоял "
        ],
        "transls": [
            "επιμένω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "настаивать"
    },
    {
        "word": "επέμεινες",
        "translation": "Ты настоял ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "επιμένω",
        "notice": "",
        "qws": [
            "Ты настоял "
        ],
        "transls": [
            "επιμένω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "настаивать"
    },
    {
        "word": "επέμεινε",
        "translation": "Он настоял ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "επιμένω",
        "notice": "",
        "qws": [
            "Он настоял "
        ],
        "transls": [
            "επιμένω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "настаивать"
    },
    {
        "word": "επιμείναμε",
        "translation": "Мы настояли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "επιμένω",
        "notice": "",
        "qws": [
            "Мы настояли "
        ],
        "transls": [
            "επιμένω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "настаивать"
    },
    {
        "word": "επιμείνατε",
        "translation": "Вы настояли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "επιμένω",
        "notice": "",
        "qws": [
            "Вы настояли "
        ],
        "transls": [
            "επιμένω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "настаивать"
    },
    {
        "word": "επέμειναν / επιμείνανε",
        "translation": "Они настояли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "επιμένω",
        "notice": "",
        "qws": [
            "Они настояли "
        ],
        "transls": [
            "επιμένω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>με<span class=\"selected-text\">ι</span>να",
        "unicTransl": "настаивать"
    },
    {
        "word": "επέτρεψα",
        "translation": "Я разрешил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιτρέπω",
        "notice": "",
        "qws": [
            "Я разрешил "
        ],
        "transls": [
            "επιτρέπω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>τρεψα",
        "unicTransl": "разрешать"
    },
    {
        "word": "επέτρεψες",
        "translation": "Ты разрешил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιτρέπω",
        "notice": "",
        "qws": [
            "Ты разрешил "
        ],
        "transls": [
            "επιτρέπω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>τρεψα",
        "unicTransl": "разрешать"
    },
    {
        "word": "επέτρεψε",
        "translation": "Она разрешила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιτρέπω",
        "notice": "",
        "qws": [
            "Она разрешила "
        ],
        "transls": [
            "επιτρέπω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>τρεψα",
        "unicTransl": "разрешать"
    },
    {
        "word": "επιτρέψαμε",
        "translation": "Мы разрешили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιτρέπω",
        "notice": "",
        "qws": [
            "Мы разрешили "
        ],
        "transls": [
            "επιτρέπω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>τρεψα",
        "unicTransl": "разрешать"
    },
    {
        "word": "επιτρέψατε",
        "translation": "Вы разрешили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιτρέπω",
        "notice": "",
        "qws": [
            "Вы разрешили "
        ],
        "transls": [
            "επιτρέπω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>τρεψα",
        "unicTransl": "разрешать"
    },
    {
        "word": "επέτρεψαν / επιτρέψανε",
        "translation": "Они разрешили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιτρέπω",
        "notice": "",
        "qws": [
            "Они разрешили "
        ],
        "transls": [
            "επιτρέπω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>τρεψα",
        "unicTransl": "разрешать"
    },
    {
        "word": "επέστρεψα",
        "translation": "Я возвратил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιστρέφω",
        "notice": "",
        "qws": [
            "Я возвратил "
        ],
        "transls": [
            "επιστρέφω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>στρεψα",
        "unicTransl": "возвращать"
    },
    {
        "word": "επέστρεψες",
        "translation": "Ты возвратил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιστρέφω",
        "notice": "",
        "qws": [
            "Ты возвратил "
        ],
        "transls": [
            "επιστρέφω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>στρεψα",
        "unicTransl": "возвращать"
    },
    {
        "word": "επέστρεψε",
        "translation": "Он возвратил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιστρέφω",
        "notice": "",
        "qws": [
            "Он возвратил "
        ],
        "transls": [
            "επιστρέφω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>στρεψα",
        "unicTransl": "возвращать"
    },
    {
        "word": "επιστρέψαμε",
        "translation": "Мы возвратили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιστρέφω",
        "notice": "",
        "qws": [
            "Мы возвратили "
        ],
        "transls": [
            "επιστρέφω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>στρεψα",
        "unicTransl": "возвращать"
    },
    {
        "word": "επιστρέψατε",
        "translation": "Вы возвратили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιστρέφω",
        "notice": "",
        "qws": [
            "Вы возвратили "
        ],
        "transls": [
            "επιστρέφω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>στρεψα",
        "unicTransl": "возвращать"
    },
    {
        "word": "επέστρεψαν / επιστρέψανε",
        "translation": "Они возвратили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "επιστρέφω",
        "notice": "",
        "qws": [
            "Они возвратили "
        ],
        "transls": [
            "επιστρέφω"
        ],
        "baseAor": "<u>επ</u><span class=\"selected-text\">έ</span>στρεψα",
        "unicTransl": "возвращать"
    },
    {
        "word": "θέλησα",
        "translation": "Я захотел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Я захотел "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλ<span class=\"selected-text\">ησ</span>α",
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλησες",
        "translation": "Ты захотел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Ты захотел "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλ<span class=\"selected-text\">ησ</span>α",
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλησε",
        "translation": "Она захотела ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Она захотела "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλ<span class=\"selected-text\">ησ</span>α",
        "unicTransl": "хотеть"
    },
    {
        "word": "θελήσαμε",
        "translation": "Мы захотели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Мы захотели "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλ<span class=\"selected-text\">ησ</span>α",
        "unicTransl": "хотеть"
    },
    {
        "word": "θελήσατε",
        "translation": "Вы захотели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Вы захотели "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλ<span class=\"selected-text\">ησ</span>α",
        "unicTransl": "хотеть"
    },
    {
        "word": "θέλησαν / θελήσανε",
        "translation": "Они захотели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "θέλω",
        "notice": "",
        "qws": [
            "Они захотели "
        ],
        "transls": [
            "θέλω"
        ],
        "baseAor": "θέλ<span class=\"selected-text\">ησ</span>α",
        "unicTransl": "хотеть"
    },
    {
        "word": "κατέγραψα",
        "translation": "Я записал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταγράφω",
        "notice": "",
        "qws": [
            "Я записал "
        ],
        "transls": [
            "καταγράφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "записывать"
    },
    {
        "word": "κατέγραψες",
        "translation": "Ты записал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταγράφω",
        "notice": "",
        "qws": [
            "Ты записал "
        ],
        "transls": [
            "καταγράφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "записывать"
    },
    {
        "word": "κατέγραψε",
        "translation": "Он записал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταγράφω",
        "notice": "",
        "qws": [
            "Он записал "
        ],
        "transls": [
            "καταγράφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "записывать"
    },
    {
        "word": "καταγράψαμε",
        "translation": "Мы записали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταγράφω",
        "notice": "",
        "qws": [
            "Мы записали "
        ],
        "transls": [
            "καταγράφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "записывать"
    },
    {
        "word": "καταγράψατε",
        "translation": "Вы записали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταγράφω",
        "notice": "",
        "qws": [
            "Вы записали "
        ],
        "transls": [
            "καταγράφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "записывать"
    },
    {
        "word": "κατέγραψαν / καταγράψανε",
        "translation": "Они записали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταγράφω",
        "notice": "",
        "qws": [
            "Они записали "
        ],
        "transls": [
            "καταγράφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "записывать"
    },
    {
        "word": "κατέλαβα",
        "translation": "Я захватил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαμβάνω",
        "notice": "",
        "qws": [
            "Я захватил "
        ],
        "transls": [
            "καταλαμβάνω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "захватывать"
    },
    {
        "word": "κατέλαβες",
        "translation": "Ты захватил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαμβάνω",
        "notice": "",
        "qws": [
            "Ты захватил "
        ],
        "transls": [
            "καταλαμβάνω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "захватывать"
    },
    {
        "word": "κατέλαβε",
        "translation": "Она захватила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαμβάνω",
        "notice": "",
        "qws": [
            "Она захватила "
        ],
        "transls": [
            "καταλαμβάνω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "захватывать"
    },
    {
        "word": "καταλάβαμε",
        "translation": "Мы захватили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαμβάνω",
        "notice": "",
        "qws": [
            "Мы захватили "
        ],
        "transls": [
            "καταλαμβάνω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "захватывать"
    },
    {
        "word": "καταλάβατε",
        "translation": "Вы захватили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαμβάνω",
        "notice": "",
        "qws": [
            "Вы захватили "
        ],
        "transls": [
            "καταλαμβάνω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "захватывать"
    },
    {
        "word": "κατέλαβαν / καταλάβανε",
        "translation": "Они захватили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταλαμβάνω",
        "notice": "",
        "qws": [
            "Они захватили "
        ],
        "transls": [
            "καταλαμβάνω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "захватывать"
    },
    {
        "word": "κατέληξα",
        "translation": "Я пришёл к выводу ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταλήγω",
        "notice": "",
        "qws": [
            "Я пришёл к выводу "
        ],
        "transls": [
            "καταλήγω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>ληξα",
        "unicTransl": "приходить к выводу"
    },
    {
        "word": "κατέληξες",
        "translation": "Ты пришёл к выводу ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταλήγω",
        "notice": "",
        "qws": [
            "Ты пришёл к выводу "
        ],
        "transls": [
            "καταλήγω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>ληξα",
        "unicTransl": "приходить к выводу"
    },
    {
        "word": "κατέληξε",
        "translation": "Он пришёл к выводу ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταλήγω",
        "notice": "",
        "qws": [
            "Он пришёл к выводу "
        ],
        "transls": [
            "καταλήγω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>ληξα",
        "unicTransl": "приходить к выводу"
    },
    {
        "word": "καταλήξαμε",
        "translation": "Мы пришли к выводу ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταλήγω",
        "notice": "",
        "qws": [
            "Мы пришли к выводу "
        ],
        "transls": [
            "καταλήγω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>ληξα",
        "unicTransl": "приходить к выводу"
    },
    {
        "word": "καταλήξατε",
        "translation": "Вы пришли к выводу ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταλήγω",
        "notice": "",
        "qws": [
            "Вы пришли к выводу "
        ],
        "transls": [
            "καταλήγω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>ληξα",
        "unicTransl": "приходить к выводу"
    },
    {
        "word": "κατέληξαν / καταλήξανε",
        "translation": "Они пришли к выводу ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταλήγω",
        "notice": "",
        "qws": [
            "Они пришли к выводу "
        ],
        "transls": [
            "καταλήγω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>ληξα",
        "unicTransl": "приходить к выводу"
    },
    {
        "word": "κατάπια",
        "translation": "Я проглотил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Я проглотил "
        ],
        "transls": [
            "καταπίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "κατάπιες",
        "translation": "Ты проглотил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Ты проглотил "
        ],
        "transls": [
            "καταπίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "κατάπιε",
        "translation": "Она проглотила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Она проглотила "
        ],
        "transls": [
            "καταπίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "κατάπιαμε",
        "translation": "Мы проглотили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Мы проглотили "
        ],
        "transls": [
            "καταπίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "κατάπιατε",
        "translation": "Вы проглотили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Вы проглотили "
        ],
        "transls": [
            "καταπίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "κατάπιαν / κατάπιανε",
        "translation": "Они проглотили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "καταπίνω",
        "notice": "",
        "qws": [
            "Они проглотили "
        ],
        "transls": [
            "καταπίνω"
        ],
        "baseAor": "<u>κατά</u>πια",
        "unicTransl": "проглатывать"
    },
    {
        "word": "κατέστρεψα / κατάστρεψα",
        "translation": "Я разрушил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταστρέφω",
        "notice": "",
        "qws": [
            "Я разрушил "
        ],
        "transls": [
            "καταστρέφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>στρεψα (κατάστρεψα)",
        "unicTransl": "разрушать"
    },
    {
        "word": "κατέστρεψες / κατάστρεψες",
        "translation": "Ты разрушил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταστρέφω",
        "notice": "",
        "qws": [
            "Ты разрушил "
        ],
        "transls": [
            "καταστρέφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>στρεψα (κατάστρεψα)",
        "unicTransl": "разрушать"
    },
    {
        "word": "κατέστρεψε / κατάστρεψε",
        "translation": "Он разрушил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταστρέφω",
        "notice": "",
        "qws": [
            "Он разрушил "
        ],
        "transls": [
            "καταστρέφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>στρεψα (κατάστρεψα)",
        "unicTransl": "разрушать"
    },
    {
        "word": "καταστρέψαμε",
        "translation": "Мы разрушили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταστρέφω",
        "notice": "",
        "qws": [
            "Мы разрушили "
        ],
        "transls": [
            "καταστρέφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>στρεψα (κατάστρεψα)",
        "unicTransl": "разрушать"
    },
    {
        "word": "καταστρέψατε",
        "translation": "Вы разрушили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταστρέφω",
        "notice": "",
        "qws": [
            "Вы разрушили "
        ],
        "transls": [
            "καταστρέφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>στρεψα (κατάστρεψα)",
        "unicTransl": "разрушать"
    },
    {
        "word": "κατέστρεψαν / καταστρέψανε / κατάστρεψαν",
        "translation": "Они разрушили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "καταστρέφω",
        "notice": "",
        "qws": [
            "Они разрушили "
        ],
        "transls": [
            "καταστρέφω"
        ],
        "baseAor": "<u>κατ</u><span class=\"selected-text\">έ</span>στρεψα (κατάστρεψα)",
        "unicTransl": "разрушать"
    },
    {
        "word": "κέρασα",
        "translation": "Я угостил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "κερνώ, -άω",
        "notice": "",
        "qws": [
            "Я угостил "
        ],
        "transls": [
            "κερνώ, -άω"
        ],
        "baseAor": "κέρασα",
        "unicTransl": "угостить"
    },
    {
        "word": "κέρασες",
        "translation": "Ты угостил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "κερνώ, -άω",
        "notice": "",
        "qws": [
            "Ты угостил "
        ],
        "transls": [
            "κερνώ, -άω"
        ],
        "baseAor": "κέρασα",
        "unicTransl": "угостить"
    },
    {
        "word": "κέρασε",
        "translation": "Она угостила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "κερνώ, -άω",
        "notice": "",
        "qws": [
            "Она угостила "
        ],
        "transls": [
            "κερνώ, -άω"
        ],
        "baseAor": "κέρασα",
        "unicTransl": "угостить"
    },
    {
        "word": "κεράσαμε",
        "translation": "Мы угостили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "κερνώ, -άω",
        "notice": "",
        "qws": [
            "Мы угостили "
        ],
        "transls": [
            "κερνώ, -άω"
        ],
        "baseAor": "κέρασα",
        "unicTransl": "угостить"
    },
    {
        "word": "κεράσατε",
        "translation": "Вы угостили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "κερνώ, -άω",
        "notice": "",
        "qws": [
            "Вы угостили "
        ],
        "transls": [
            "κερνώ, -άω"
        ],
        "baseAor": "κέρασα",
        "unicTransl": "угостить"
    },
    {
        "word": "κέρασαν / κεράσανε",
        "translation": "Они угостили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "κερνώ, -άω",
        "notice": "",
        "qws": [
            "Они угостили "
        ],
        "transls": [
            "κερνώ, -άω"
        ],
        "baseAor": "κέρασα",
        "unicTransl": "угостить"
    },
    {
        "word": "μέθυσα",
        "translation": "Я опьянел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "μεθώ, -άω",
        "notice": "",
        "qws": [
            "Я опьянел "
        ],
        "transls": [
            "μεθώ, -άω"
        ],
        "baseAor": "μέθ<span class=\"selected-text\">υσ</span>α",
        "unicTransl": "пьянеть"
    },
    {
        "word": "μέθυσες",
        "translation": "Ты опьянел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "μεθώ, -άω",
        "notice": "",
        "qws": [
            "Ты опьянел "
        ],
        "transls": [
            "μεθώ, -άω"
        ],
        "baseAor": "μέθ<span class=\"selected-text\">υσ</span>α",
        "unicTransl": "пьянеть"
    },
    {
        "word": "μέθυσε",
        "translation": "Он опьянел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "μεθώ, -άω",
        "notice": "",
        "qws": [
            "Он опьянел "
        ],
        "transls": [
            "μεθώ, -άω"
        ],
        "baseAor": "μέθ<span class=\"selected-text\">υσ</span>α",
        "unicTransl": "пьянеть"
    },
    {
        "word": "μεθύσαμε",
        "translation": "Мы опьянели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "μεθώ, -άω",
        "notice": "",
        "qws": [
            "Мы опьянели "
        ],
        "transls": [
            "μεθώ, -άω"
        ],
        "baseAor": "μέθ<span class=\"selected-text\">υσ</span>α",
        "unicTransl": "пьянеть"
    },
    {
        "word": "μεθύσατε",
        "translation": "Вы опьянели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "μεθώ, -άω",
        "notice": "",
        "qws": [
            "Вы опьянели "
        ],
        "transls": [
            "μεθώ, -άω"
        ],
        "baseAor": "μέθ<span class=\"selected-text\">υσ</span>α",
        "unicTransl": "пьянеть"
    },
    {
        "word": "μέθυσαν / μεθύσανε",
        "translation": "Они опьянели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "μεθώ, -άω",
        "notice": "",
        "qws": [
            "Они опьянели "
        ],
        "transls": [
            "μεθώ, -άω"
        ],
        "baseAor": "μέθ<span class=\"selected-text\">υσ</span>α",
        "unicTransl": "пьянеть"
    },
    {
        "word": "μετέβαλα",
        "translation": "Я изменил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μεταβάλλω",
        "notice": "",
        "qws": [
            "Я изменил "
        ],
        "transls": [
            "μεταβάλλω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "изменять"
    },
    {
        "word": "μετέβαλες",
        "translation": "Ты изменил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μεταβάλλω",
        "notice": "",
        "qws": [
            "Ты изменил "
        ],
        "transls": [
            "μεταβάλλω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "изменять"
    },
    {
        "word": "μετέβαλε",
        "translation": "Она изменила ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μεταβάλλω",
        "notice": "",
        "qws": [
            "Она изменила "
        ],
        "transls": [
            "μεταβάλλω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "изменять"
    },
    {
        "word": "μεταβάλαμε",
        "translation": "Мы изменили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μεταβάλλω",
        "notice": "",
        "qws": [
            "Мы изменили "
        ],
        "transls": [
            "μεταβάλλω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "изменять"
    },
    {
        "word": "μεταβάλατε",
        "translation": "Вы изменили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μεταβάλλω",
        "notice": "",
        "qws": [
            "Вы изменили "
        ],
        "transls": [
            "μεταβάλλω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "изменять"
    },
    {
        "word": "μετέβαλαν / μεταβάλανε",
        "translation": "Они изменили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "μεταβάλλω",
        "notice": "",
        "qws": [
            "Они изменили "
        ],
        "transls": [
            "μεταβάλλω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "изменять"
    },
    {
        "word": "μετέδωσα",
        "translation": "Я передал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μεταδίνω",
        "notice": "",
        "qws": [
            "Я передал "
        ],
        "transls": [
            "μεταδίνω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α",
        "unicTransl": "передавать"
    },
    {
        "word": "μετέδωσες",
        "translation": "Ты передал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μεταδίνω",
        "notice": "",
        "qws": [
            "Ты передал "
        ],
        "transls": [
            "μεταδίνω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α",
        "unicTransl": "передавать"
    },
    {
        "word": "μετέδωσε",
        "translation": "Он передал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μεταδίνω",
        "notice": "",
        "qws": [
            "Он передал "
        ],
        "transls": [
            "μεταδίνω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α",
        "unicTransl": "передавать"
    },
    {
        "word": "μεταδώσαμε",
        "translation": "Мы передали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μεταδίνω",
        "notice": "",
        "qws": [
            "Мы передали "
        ],
        "transls": [
            "μεταδίνω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α",
        "unicTransl": "передавать"
    },
    {
        "word": "μεταδώσατε",
        "translation": "Вы передали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μεταδίνω",
        "notice": "",
        "qws": [
            "Вы передали "
        ],
        "transls": [
            "μεταδίνω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α",
        "unicTransl": "передавать"
    },
    {
        "word": "μετέδωσαν / μεταδώσανε",
        "translation": "Они передали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "μεταδίνω",
        "notice": "",
        "qws": [
            "Они передали "
        ],
        "transls": [
            "μεταδίνω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>δ<span class=\"selected-text\" style=\"color:green\">ωσ</span>α",
        "unicTransl": "передавать"
    },
    {
        "word": "μετέφρασα / μετάφρασα",
        "translation": "Я перевёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Я перевёл "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "переводить"
    },
    {
        "word": "μετέφρασες / μετάφρασες",
        "translation": "Ты перевёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Ты перевёл "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "переводить"
    },
    {
        "word": "μετέφρασε / μετάφρασε",
        "translation": "Она перевела ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Она перевела "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "переводить"
    },
    {
        "word": "μεταφράσαμε",
        "translation": "Мы перевели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Мы перевели "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "переводить"
    },
    {
        "word": "μεταφράσατε",
        "translation": "Вы перевели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Вы перевели "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "переводить"
    },
    {
        "word": "μετέφρασαν / μεταφράσανε / μετάφρασαν",
        "translation": "Они перевели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "μεταφράζω",
        "notice": "",
        "qws": [
            "Они перевели "
        ],
        "transls": [
            "μεταφράζω"
        ],
        "baseAor": "<u>μετ</u><span class=\"selected-text\">έ</span>φρασα",
        "unicTransl": "переводить"
    },
    {
        "word": "ξεπέρασα",
        "translation": "Я преодолел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Я преодолел "
        ],
        "transls": [
            "ξεπερνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "ξεπέρασες",
        "translation": "Ты преодолел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Ты преодолел "
        ],
        "transls": [
            "ξεπερνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "ξεπέρασε",
        "translation": "Он преодолел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Он преодолел "
        ],
        "transls": [
            "ξεπερνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "ξεπεράσαμε",
        "translation": "Мы преодолели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Мы преодолели "
        ],
        "transls": [
            "ξεπερνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "ξεπεράσατε",
        "translation": "Вы преодолели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Вы преодолели "
        ],
        "transls": [
            "ξεπερνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "ξεπέρασαν / ξεπεράσανε",
        "translation": "Они преодолели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "ξεπερνώ, -άω",
        "notice": "",
        "qws": [
            "Они преодолели "
        ],
        "transls": [
            "ξεπερνώ, -άω"
        ],
        "baseAor": "<u>ξε</u>πέρασα",
        "unicTransl": "преодолевать"
    },
    {
        "word": "έπαθα",
        "translation": "Я претерпел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "παθαίνω",
        "notice": "",
        "qws": [
            "Я претерпел "
        ],
        "transls": [
            "παθαίνω"
        ],
        "baseAor": "έπαθα",
        "unicTransl": "претерпевать"
    },
    {
        "word": "έπαθες",
        "translation": "Ты претерпел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "παθαίνω",
        "notice": "",
        "qws": [
            "Ты претерпел "
        ],
        "transls": [
            "παθαίνω"
        ],
        "baseAor": "έπαθα",
        "unicTransl": "претерпевать"
    },
    {
        "word": "έπαθε",
        "translation": "Она претерпела ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "παθαίνω",
        "notice": "",
        "qws": [
            "Она претерпела "
        ],
        "transls": [
            "παθαίνω"
        ],
        "baseAor": "έπαθα",
        "unicTransl": "претерпевать"
    },
    {
        "word": "πάθαμε",
        "translation": "Мы претерпели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "παθαίνω",
        "notice": "",
        "qws": [
            "Мы претерпели "
        ],
        "transls": [
            "παθαίνω"
        ],
        "baseAor": "έπαθα",
        "unicTransl": "претерпевать"
    },
    {
        "word": "πάθατε",
        "translation": "Вы претерпели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "παθαίνω",
        "notice": "",
        "qws": [
            "Вы претерпели "
        ],
        "transls": [
            "παθαίνω"
        ],
        "baseAor": "έπαθα",
        "unicTransl": "претерпевать"
    },
    {
        "word": "έπαθαν / πάθανε",
        "translation": "Они претерпели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "παθαίνω",
        "notice": "",
        "qws": [
            "Они претерпели "
        ],
        "transls": [
            "παθαίνω"
        ],
        "baseAor": "έπαθα",
        "unicTransl": "претерпевать"
    },
    {
        "word": "παρείχα",
        "translation": "Я предоставил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "παρέχω",
        "notice": "",
        "qws": [
            "Я предоставил "
        ],
        "transls": [
            "παρέχω"
        ],
        "baseAor": "<u>παρ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "предоставлять"
    },
    {
        "word": "παρείχες",
        "translation": "Ты предоставил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "παρέχω",
        "notice": "",
        "qws": [
            "Ты предоставил "
        ],
        "transls": [
            "παρέχω"
        ],
        "baseAor": "<u>παρ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "предоставлять"
    },
    {
        "word": "παρείχε",
        "translation": "Он предоставил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "παρέχω",
        "notice": "",
        "qws": [
            "Он предоставил "
        ],
        "transls": [
            "παρέχω"
        ],
        "baseAor": "<u>παρ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "предоставлять"
    },
    {
        "word": "παρείχαμε",
        "translation": "Мы предоставили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "παρέχω",
        "notice": "",
        "qws": [
            "Мы предоставили "
        ],
        "transls": [
            "παρέχω"
        ],
        "baseAor": "<u>παρ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "предоставлять"
    },
    {
        "word": "παρείχατε",
        "translation": "Вы предоставили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "παρέχω",
        "notice": "",
        "qws": [
            "Вы предоставили "
        ],
        "transls": [
            "παρέχω"
        ],
        "baseAor": "<u>παρ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "предоставлять"
    },
    {
        "word": "παρείχανε / παρέσχεσαν",
        "translation": "Они предоставили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "παρέχω",
        "notice": "",
        "qws": [
            "Они предоставили "
        ],
        "transls": [
            "παρέχω"
        ],
        "baseAor": "<u>παρ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "предоставлять"
    },
    {
        "word": "περιέγραψα",
        "translation": "Я описал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "περιγράφω",
        "notice": "",
        "qws": [
            "Я описал "
        ],
        "transls": [
            "περιγράφω"
        ],
        "baseAor": "<u>περι</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "описывать"
    },
    {
        "word": "περιέγραψες",
        "translation": "Ты описал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "περιγράφω",
        "notice": "",
        "qws": [
            "Ты описал "
        ],
        "transls": [
            "περιγράφω"
        ],
        "baseAor": "<u>περι</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "описывать"
    },
    {
        "word": "περιέγραψε",
        "translation": "Она описала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "περιγράφω",
        "notice": "",
        "qws": [
            "Она описала "
        ],
        "transls": [
            "περιγράφω"
        ],
        "baseAor": "<u>περι</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "описывать"
    },
    {
        "word": "περιγράψαμε",
        "translation": "Мы описали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "περιγράφω",
        "notice": "",
        "qws": [
            "Мы описали "
        ],
        "transls": [
            "περιγράφω"
        ],
        "baseAor": "<u>περι</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "описывать"
    },
    {
        "word": "περιγράψατε",
        "translation": "Вы описали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "περιγράφω",
        "notice": "",
        "qws": [
            "Вы описали "
        ],
        "transls": [
            "περιγράφω"
        ],
        "baseAor": "<u>περι</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "описывать"
    },
    {
        "word": "περιέγραψαν / περιγράψανε",
        "translation": "Они описали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "περιγράφω",
        "notice": "",
        "qws": [
            "Они описали "
        ],
        "transls": [
            "περιγράφω"
        ],
        "baseAor": "<u>περι</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "описывать"
    },
    {
        "word": "περιείχα",
        "translation": "Я включил в себя ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιέχω",
        "notice": "",
        "qws": [
            "Я включил в себя "
        ],
        "transls": [
            "περιέχω"
        ],
        "baseAor": "<u>περι</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "включать в себя"
    },
    {
        "word": "περιείχες",
        "translation": "Ты включил в себя ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιέχω",
        "notice": "",
        "qws": [
            "Ты включил в себя "
        ],
        "transls": [
            "περιέχω"
        ],
        "baseAor": "<u>περι</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "включать в себя"
    },
    {
        "word": "περιείχε",
        "translation": "Он включил в себя ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιέχω",
        "notice": "",
        "qws": [
            "Он включил в себя "
        ],
        "transls": [
            "περιέχω"
        ],
        "baseAor": "<u>περι</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "включать в себя"
    },
    {
        "word": "περιείχαμε",
        "translation": "Мы включили в себя ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιέχω",
        "notice": "",
        "qws": [
            "Мы включили в себя "
        ],
        "transls": [
            "περιέχω"
        ],
        "baseAor": "<u>περι</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "включать в себя"
    },
    {
        "word": "περιείχατε",
        "translation": "Вы включили в себя ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιέχω",
        "notice": "",
        "qws": [
            "Вы включили в себя "
        ],
        "transls": [
            "περιέχω"
        ],
        "baseAor": "<u>περι</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "включать в себя"
    },
    {
        "word": "περιείχαν / περιείχανε",
        "translation": "Они включили в себя ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "περιέχω",
        "notice": "",
        "qws": [
            "Они включили в себя "
        ],
        "transls": [
            "περιέχω"
        ],
        "baseAor": "<u>περι</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "включать в себя"
    },
    {
        "word": "πέτυχα",
        "translation": "Я достиг ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Я достиг "
        ],
        "transls": [
            "πετυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "πέτυχες",
        "translation": "Ты достиг ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Ты достиг "
        ],
        "transls": [
            "πετυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "πέτυχε",
        "translation": "Она достигла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Она достигла "
        ],
        "transls": [
            "πετυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "πετύχαμε",
        "translation": "Мы достигли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Мы достигли "
        ],
        "transls": [
            "πετυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "πετύχατε",
        "translation": "Вы достигли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Вы достигли "
        ],
        "transls": [
            "πετυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "πέτυχαν / πετύχανε",
        "translation": "Они достигли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Они достигли "
        ],
        "transls": [
            "πετυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "έπλυνα",
        "translation": "Я помыл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Я помыл "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλ<span class=\"selected-text\" style=\"color:green\">υ</span>να",
        "unicTransl": "мыть, стирать"
    },
    {
        "word": "έπλυνες",
        "translation": "Ты помыл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Ты помыл "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλ<span class=\"selected-text\" style=\"color:green\">υ</span>να",
        "unicTransl": "мыть, стирать"
    },
    {
        "word": "έπλυνε",
        "translation": "Он помыл ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Он помыл "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλ<span class=\"selected-text\" style=\"color:green\">υ</span>να",
        "unicTransl": "мыть, стирать"
    },
    {
        "word": "πλύναμε",
        "translation": "Мы помыли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Мы помыли "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλ<span class=\"selected-text\" style=\"color:green\">υ</span>να",
        "unicTransl": "мыть, стирать"
    },
    {
        "word": "πλύνατε",
        "translation": "Вы помыли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Вы помыли "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλ<span class=\"selected-text\" style=\"color:green\">υ</span>να",
        "unicTransl": "мыть, стирать"
    },
    {
        "word": "έπλυναν / πλύνανε",
        "translation": "Они помыли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "πλένω",
        "notice": "",
        "qws": [
            "Они помыли "
        ],
        "transls": [
            "πλένω"
        ],
        "baseAor": "έπλ<span class=\"selected-text\" style=\"color:green\">υ</span>να",
        "unicTransl": "мыть, стирать"
    },
    {
        "word": "συνέβη",
        "translation": "Случился ",
        "groups": {
            "num": "",
            "pers": "",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "συμβαίνει",
        "notice": "",
        "qws": [
            "Случился "
        ],
        "transls": [
            "συμβαίνει"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>β<span class=\"selected-text\" style=\"color:green\">ηκ</span>ε (συνέβη)",
        "unicTransl": "случилось"
    },
    {
        "word": "πρόσβαλα",
        "translation": "Я обидел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσβάλλω",
        "notice": "",
        "qws": [
            "Я обидел "
        ],
        "transls": [
            "προσβάλλω"
        ],
        "baseAor": "<u>πρόσ</u>βαλα",
        "unicTransl": "обижать"
    },
    {
        "word": "πρόσβαλες",
        "translation": "Ты обидел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσβάλλω",
        "notice": "",
        "qws": [
            "Ты обидел "
        ],
        "transls": [
            "προσβάλλω"
        ],
        "baseAor": "<u>πρόσ</u>βαλα",
        "unicTransl": "обижать"
    },
    {
        "word": "πρόσβαλε",
        "translation": "Она обидела ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσβάλλω",
        "notice": "",
        "qws": [
            "Она обидела "
        ],
        "transls": [
            "προσβάλλω"
        ],
        "baseAor": "<u>πρόσ</u>βαλα",
        "unicTransl": "обижать"
    },
    {
        "word": "προσβάλαμε",
        "translation": "Мы обидели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσβάλλω",
        "notice": "",
        "qws": [
            "Мы обидели "
        ],
        "transls": [
            "προσβάλλω"
        ],
        "baseAor": "<u>πρόσ</u>βαλα",
        "unicTransl": "обижать"
    },
    {
        "word": "προσβάλατε",
        "translation": "Вы обидели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσβάλλω",
        "notice": "",
        "qws": [
            "Вы обидели "
        ],
        "transls": [
            "προσβάλλω"
        ],
        "baseAor": "<u>πρόσ</u>βαλα",
        "unicTransl": "обижать"
    },
    {
        "word": "πρόσβαλαν / προσβάλανε",
        "translation": "Они обидели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσβάλλω",
        "notice": "",
        "qws": [
            "Они обидели "
        ],
        "transls": [
            "προσβάλλω"
        ],
        "baseAor": "<u>πρόσ</u>βαλα",
        "unicTransl": "обижать"
    },
    {
        "word": "προσέθεσα",
        "translation": "Я добавил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "προσθέτω",
        "notice": "",
        "qws": [
            "Я добавил "
        ],
        "transls": [
            "προσθέτω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "добавлять"
    },
    {
        "word": "προσέθεσες",
        "translation": "Ты добавил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "προσθέτω",
        "notice": "",
        "qws": [
            "Ты добавил "
        ],
        "transls": [
            "προσθέτω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "добавлять"
    },
    {
        "word": "προσέθεσε",
        "translation": "Он добавил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "προσθέτω",
        "notice": "",
        "qws": [
            "Он добавил "
        ],
        "transls": [
            "προσθέτω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "добавлять"
    },
    {
        "word": "προσθέσαμε",
        "translation": "Мы добавили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "προσθέτω",
        "notice": "",
        "qws": [
            "Мы добавили "
        ],
        "transls": [
            "προσθέτω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "добавлять"
    },
    {
        "word": "προσθέσατε",
        "translation": "Вы добавили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "προσθέτω",
        "notice": "",
        "qws": [
            "Вы добавили "
        ],
        "transls": [
            "προσθέτω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "добавлять"
    },
    {
        "word": "προσέθεσαν / προσθέσανε",
        "translation": "Они добавили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "προσθέτω",
        "notice": "",
        "qws": [
            "Они добавили "
        ],
        "transls": [
            "προσθέτω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>θεσα",
        "unicTransl": "добавлять"
    },
    {
        "word": "προσέλαβα",
        "translation": "Я принял ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσλαμβάνω",
        "notice": "",
        "qws": [
            "Я принял "
        ],
        "transls": [
            "προσλαμβάνω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "принимать"
    },
    {
        "word": "προσέλαβες",
        "translation": "Ты принял ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσλαμβάνω",
        "notice": "",
        "qws": [
            "Ты принял "
        ],
        "transls": [
            "προσλαμβάνω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "принимать"
    },
    {
        "word": "προσέλαβε",
        "translation": "Она приняла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσλαμβάνω",
        "notice": "",
        "qws": [
            "Она приняла "
        ],
        "transls": [
            "προσλαμβάνω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "принимать"
    },
    {
        "word": "προσελάβαμε",
        "translation": "Мы приняли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσλαμβάνω",
        "notice": "",
        "qws": [
            "Мы приняли "
        ],
        "transls": [
            "προσλαμβάνω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "принимать"
    },
    {
        "word": "προσελάβατε",
        "translation": "Вы приняли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσλαμβάνω",
        "notice": "",
        "qws": [
            "Вы приняли "
        ],
        "transls": [
            "προσλαμβάνω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "принимать"
    },
    {
        "word": "προσέλαβαν / προσελάβανε",
        "translation": "Они приняли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "προσλαμβάνω",
        "notice": "",
        "qws": [
            "Они приняли "
        ],
        "transls": [
            "προσλαμβάνω"
        ],
        "baseAor": "<u>προσ</u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "принимать"
    },
    {
        "word": "έσυρα",
        "translation": "Я потащил ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "σέρνω",
        "notice": "",
        "qws": [
            "Я потащил "
        ],
        "transls": [
            "σέρνω"
        ],
        "baseAor": "έσ<span class=\"selected-text\" style=\"color:green\">υ</span>ρα",
        "unicTransl": "тащить"
    },
    {
        "word": "έσυρες",
        "translation": "Ты потащил ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "σέρνω",
        "notice": "",
        "qws": [
            "Ты потащил "
        ],
        "transls": [
            "σέρνω"
        ],
        "baseAor": "έσ<span class=\"selected-text\" style=\"color:green\">υ</span>ρα",
        "unicTransl": "тащить"
    },
    {
        "word": "έσυρε",
        "translation": "Он потащил ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "σέρνω",
        "notice": "",
        "qws": [
            "Он потащил "
        ],
        "transls": [
            "σέρνω"
        ],
        "baseAor": "έσ<span class=\"selected-text\" style=\"color:green\">υ</span>ρα",
        "unicTransl": "тащить"
    },
    {
        "word": "σύραμε",
        "translation": "Мы потащили ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "σέρνω",
        "notice": "",
        "qws": [
            "Мы потащили "
        ],
        "transls": [
            "σέρνω"
        ],
        "baseAor": "έσ<span class=\"selected-text\" style=\"color:green\">υ</span>ρα",
        "unicTransl": "тащить"
    },
    {
        "word": "σύρατε",
        "translation": "Вы потащили ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "σέρνω",
        "notice": "",
        "qws": [
            "Вы потащили "
        ],
        "transls": [
            "σέρνω"
        ],
        "baseAor": "έσ<span class=\"selected-text\" style=\"color:green\">υ</span>ρα",
        "unicTransl": "тащить"
    },
    {
        "word": "έσυραν / σύρανε",
        "translation": "Они потащили ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "σέρνω",
        "notice": "",
        "qws": [
            "Они потащили "
        ],
        "transls": [
            "σέρνω"
        ],
        "baseAor": "έσ<span class=\"selected-text\" style=\"color:green\">υ</span>ρα",
        "unicTransl": "тащить"
    },
    {
        "word": "στάθμευσα",
        "translation": "Я остановился ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "σταθμεύω",
        "notice": "",
        "qws": [
            "Я остановился "
        ],
        "transls": [
            "σταθμεύω"
        ],
        "baseAor": "στάθμ<span class=\"selected-text\" style=\"color:green\">ευσ</span>α",
        "unicTransl": "останавливаться"
    },
    {
        "word": "στάθμευσες",
        "translation": "Ты остановился ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "σταθμεύω",
        "notice": "",
        "qws": [
            "Ты остановился "
        ],
        "transls": [
            "σταθμεύω"
        ],
        "baseAor": "στάθμ<span class=\"selected-text\" style=\"color:green\">ευσ</span>α",
        "unicTransl": "останавливаться"
    },
    {
        "word": "στάθμευσε",
        "translation": "Она остановилась ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "σταθμεύω",
        "notice": "",
        "qws": [
            "Она остановилась "
        ],
        "transls": [
            "σταθμεύω"
        ],
        "baseAor": "στάθμ<span class=\"selected-text\" style=\"color:green\">ευσ</span>α",
        "unicTransl": "останавливаться"
    },
    {
        "word": "σταθμεύσαμε",
        "translation": "Мы остановились ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "σταθμεύω",
        "notice": "",
        "qws": [
            "Мы остановились "
        ],
        "transls": [
            "σταθμεύω"
        ],
        "baseAor": "στάθμ<span class=\"selected-text\" style=\"color:green\">ευσ</span>α",
        "unicTransl": "останавливаться"
    },
    {
        "word": "σταθμεύσατε",
        "translation": "Вы остановились ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "σταθμεύω",
        "notice": "",
        "qws": [
            "Вы остановились "
        ],
        "transls": [
            "σταθμεύω"
        ],
        "baseAor": "στάθμ<span class=\"selected-text\" style=\"color:green\">ευσ</span>α",
        "unicTransl": "останавливаться"
    },
    {
        "word": "στάθμευσαν / σταθμεύσανε",
        "translation": "Они остановились ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "IV Группа \"Неправильное изменение основы глагола в Аористе\"",
        "base": "σταθμεύω",
        "notice": "",
        "qws": [
            "Они остановились "
        ],
        "transls": [
            "σταθμεύω"
        ],
        "baseAor": "στάθμ<span class=\"selected-text\" style=\"color:green\">ευσ</span>α",
        "unicTransl": "останавливаться"
    },
    {
        "word": "συνέλαβα",
        "translation": "Я поймал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συλλαμβάνω",
        "notice": "",
        "qws": [
            "Я поймал "
        ],
        "transls": [
            "συλλαμβάνω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "поймать"
    },
    {
        "word": "συνέλαβες",
        "translation": "Ты поймал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συλλαμβάνω",
        "notice": "",
        "qws": [
            "Ты поймал "
        ],
        "transls": [
            "συλλαμβάνω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "поймать"
    },
    {
        "word": "συνέλαβε",
        "translation": "Он поймал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συλλαμβάνω",
        "notice": "",
        "qws": [
            "Он поймал "
        ],
        "transls": [
            "συλλαμβάνω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "поймать"
    },
    {
        "word": "συνελάβαμε",
        "translation": "Мы поймали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συλλαμβάνω",
        "notice": "",
        "qws": [
            "Мы поймали "
        ],
        "transls": [
            "συλλαμβάνω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "поймать"
    },
    {
        "word": "συνελάβατε",
        "translation": "Вы поймали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συλλαμβάνω",
        "notice": "",
        "qws": [
            "Вы поймали "
        ],
        "transls": [
            "συλλαμβάνω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "поймать"
    },
    {
        "word": "συνέλαβαν / συνελάβανε",
        "translation": "Они поймали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συλλαμβάνω",
        "notice": "",
        "qws": [
            "Они поймали "
        ],
        "transls": [
            "συλλαμβάνω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>λαβα",
        "unicTransl": "поймать"
    },
    {
        "word": "έψαλα",
        "translation": "Я спел ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "ψέλνω",
        "notice": "",
        "qws": [
            "Я спел "
        ],
        "transls": [
            "ψέλνω"
        ],
        "baseAor": "έψ<span class=\"selected-text\" style=\"color:green\">α</span>λα",
        "unicTransl": "петь, воспевать"
    },
    {
        "word": "έψαλες",
        "translation": "Ты спел ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "ψέλνω",
        "notice": "",
        "qws": [
            "Ты спел "
        ],
        "transls": [
            "ψέλνω"
        ],
        "baseAor": "έψ<span class=\"selected-text\" style=\"color:green\">α</span>λα",
        "unicTransl": "петь, воспевать"
    },
    {
        "word": "έψαλε",
        "translation": "Он спел ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "ψέλνω",
        "notice": "",
        "qws": [
            "Он спел "
        ],
        "transls": [
            "ψέλνω"
        ],
        "baseAor": "έψ<span class=\"selected-text\" style=\"color:green\">α</span>λα",
        "unicTransl": "петь, воспевать"
    },
    {
        "word": "ψάλαμε",
        "translation": "Мы спели ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "ψέλνω",
        "notice": "",
        "qws": [
            "Мы спели "
        ],
        "transls": [
            "ψέλνω"
        ],
        "baseAor": "έψ<span class=\"selected-text\" style=\"color:green\">α</span>λα",
        "unicTransl": "петь, воспевать"
    },
    {
        "word": "ψάλατε",
        "translation": "Вы спели ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "ψέλνω",
        "notice": "",
        "qws": [
            "Вы спели "
        ],
        "transls": [
            "ψέλνω"
        ],
        "baseAor": "έψ<span class=\"selected-text\" style=\"color:green\">α</span>λα",
        "unicTransl": "петь, воспевать"
    },
    {
        "word": "έψαλαν / ψάλανε",
        "translation": "Они спели ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "ψέλνω",
        "notice": "",
        "qws": [
            "Они спели "
        ],
        "transls": [
            "ψέλνω"
        ],
        "baseAor": "έψ<span class=\"selected-text\" style=\"color:green\">α</span>λα",
        "unicTransl": "петь, воспевать"
    },
    {
        "word": "συνέβαλα",
        "translation": "Я посодействовал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συμβάλλω",
        "notice": "",
        "qws": [
            "Я посодействовал "
        ],
        "transls": [
            "συμβάλλω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "содействовать"
    },
    {
        "word": "συνέβαλες",
        "translation": "Ты посодействовал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συμβάλλω",
        "notice": "",
        "qws": [
            "Ты посодействовал "
        ],
        "transls": [
            "συμβάλλω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "содействовать"
    },
    {
        "word": "συνέβαλε",
        "translation": "Он посодействовал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συμβάλλω",
        "notice": "",
        "qws": [
            "Он посодействовал "
        ],
        "transls": [
            "συμβάλλω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "содействовать"
    },
    {
        "word": "συνεβάλαμε",
        "translation": "Мы посодействовали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συμβάλλω",
        "notice": "",
        "qws": [
            "Мы посодействовали "
        ],
        "transls": [
            "συμβάλλω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "содействовать"
    },
    {
        "word": "συνεβάλατε",
        "translation": "Вы посодействовали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συμβάλλω",
        "notice": "",
        "qws": [
            "Вы посодействовали "
        ],
        "transls": [
            "συμβάλλω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "содействовать"
    },
    {
        "word": "συνέβαλαν / συνεβάλανε",
        "translation": "Они посодействовали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "V Группа \"Сильное изменение основы глагола в Аористе\"",
        "base": "συμβάλλω",
        "notice": "",
        "qws": [
            "Они посодействовали "
        ],
        "transls": [
            "συμβάλλω"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "содействовать"
    },
    {
        "word": "συμμετείχα",
        "translation": "Я поучавствовал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "συμμετέχω",
        "notice": "",
        "qws": [
            "Я поучавствовал "
        ],
        "transls": [
            "συμμετέχω"
        ],
        "baseAor": "<u>συμ</u><u>μετ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "участвовать"
    },
    {
        "word": "συμμετείχες",
        "translation": "Ты поучавствовал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "συμμετέχω",
        "notice": "",
        "qws": [
            "Ты поучавствовал "
        ],
        "transls": [
            "συμμετέχω"
        ],
        "baseAor": "<u>συμ</u><u>μετ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "участвовать"
    },
    {
        "word": "συμμετείχε",
        "translation": "Она поучавствовала ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "συμμετέχω",
        "notice": "",
        "qws": [
            "Она поучавствовала "
        ],
        "transls": [
            "συμμετέχω"
        ],
        "baseAor": "<u>συμ</u><u>μετ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "участвовать"
    },
    {
        "word": "συμμετείχαμε",
        "translation": "Мы поучавствовали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "συμμετέχω",
        "notice": "",
        "qws": [
            "Мы поучавствовали "
        ],
        "transls": [
            "συμμετέχω"
        ],
        "baseAor": "<u>συμ</u><u>μετ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "участвовать"
    },
    {
        "word": "συμμετείχατε",
        "translation": "Вы поучавствовали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "συμμετέχω",
        "notice": "",
        "qws": [
            "Вы поучавствовали "
        ],
        "transls": [
            "συμμετέχω"
        ],
        "baseAor": "<u>συμ</u><u>μετ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "участвовать"
    },
    {
        "word": "συμμετείχαν / συμμετείχανε",
        "translation": "Они поучавствовали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "II Группа \"Добавление букв к основе глагола в Аористе\"",
        "base": "συμμετέχω",
        "notice": "",
        "qws": [
            "Они поучавствовали "
        ],
        "transls": [
            "συμμετέχω"
        ],
        "baseAor": "<u>συμ</u><u>μετ</u>ε<span class=\"selected-text\">ί</span>χα",
        "unicTransl": "участвовать"
    },
    {
        "word": "συνέφερε",
        "translation": "Выгодно ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "συμφέρει",
        "notice": "",
        "qws": [
            "Выгодно "
        ],
        "transls": [
            "συμφέρει"
        ],
        "baseAor": "<u>συ<span class=\"selected-text\" style=\"color:green\">ν</span></u><span class=\"selected-text\">έ</span>φερε",
        "unicTransl": "выгодно"
    },
    {
        "word": "συνέστησα / σύστησα",
        "translation": "Я создал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "συνιστώ",
        "notice": "",
        "qws": [
            "Я создал "
        ],
        "transls": [
            "συνιστώ"
        ],
        "baseAor": "<u>συν</u><span class=\"selected-text\">έ</span>στησα (σύστησα)",
        "unicTransl": "создавать"
    },
    {
        "word": "συνέστησες / σύστησες",
        "translation": "Ты создал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "συνιστώ",
        "notice": "",
        "qws": [
            "Ты создал "
        ],
        "transls": [
            "συνιστώ"
        ],
        "baseAor": "<u>συν</u><span class=\"selected-text\">έ</span>στησα (σύστησα)",
        "unicTransl": "создавать"
    },
    {
        "word": "συνέστησε / σύστησε",
        "translation": "Он создал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "συνιστώ",
        "notice": "",
        "qws": [
            "Он создал "
        ],
        "transls": [
            "συνιστώ"
        ],
        "baseAor": "<u>συν</u><span class=\"selected-text\">έ</span>στησα (σύστησα)",
        "unicTransl": "создавать"
    },
    {
        "word": "συνεστήσαμε / συστήσαμε",
        "translation": "Мы создали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "συνιστώ",
        "notice": "",
        "qws": [
            "Мы создали "
        ],
        "transls": [
            "συνιστώ"
        ],
        "baseAor": "<u>συν</u><span class=\"selected-text\">έ</span>στησα (σύστησα)",
        "unicTransl": "создавать"
    },
    {
        "word": "συνεστήσατε / συστήσατε",
        "translation": "Вы создали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "συνιστώ",
        "notice": "",
        "qws": [
            "Вы создали "
        ],
        "transls": [
            "συνιστώ"
        ],
        "baseAor": "<u>συν</u><span class=\"selected-text\">έ</span>στησα (σύστησα)",
        "unicTransl": "создавать"
    },
    {
        "word": "συνέστησαν / συνεστήσανε / σύστησαν / συστήσανε",
        "translation": "Они создали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "συνιστώ",
        "notice": "",
        "qws": [
            "Они создали "
        ],
        "transls": [
            "συνιστώ"
        ],
        "baseAor": "<u>συν</u><span class=\"selected-text\">έ</span>στησα (σύστησα)",
        "unicTransl": "создавать"
    },
    {
        "word": "έτυχα",
        "translation": "Я случился ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Я случился "
        ],
        "transls": [
            "τυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "έτυχες",
        "translation": "Ты случился ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Ты случился "
        ],
        "transls": [
            "τυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "έτυχε",
        "translation": "Оно случилось ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Оно случилось "
        ],
        "transls": [
            "τυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "τύχαμε",
        "translation": "Мы случились ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Мы случились "
        ],
        "transls": [
            "τυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "τύχατε",
        "translation": "Вы случились ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Вы случились "
        ],
        "transls": [
            "τυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "έτυχαν / τύχανε",
        "translation": "Они случились ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "πετυχαίνω",
        "notice": "",
        "qws": [
            "Они случились "
        ],
        "transls": [
            "τυχαίνω"
        ],
        "baseAor": "πέτυχα",
        "unicTransl": "удаваться"
    },
    {
        "word": "υπήρξα",
        "translation": "Я был ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Я был "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\" style=\"color:green\">ή</span>ρξα",
        "unicTransl": "существовать"
    },
    {
        "word": "υπήρξες",
        "translation": "Ты был ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Ты был "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\" style=\"color:green\">ή</span>ρξα",
        "unicTransl": "существовать"
    },
    {
        "word": "υπήρξε",
        "translation": "Он был ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Он был "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\" style=\"color:green\">ή</span>ρξα",
        "unicTransl": "существовать"
    },
    {
        "word": "υπήρξαμε",
        "translation": "Мы были ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Мы были "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\" style=\"color:green\">ή</span>ρξα",
        "unicTransl": "существовать"
    },
    {
        "word": "υπήρξατε",
        "translation": "Вы были ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Вы были "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\" style=\"color:green\">ή</span>ρξα",
        "unicTransl": "существовать"
    },
    {
        "word": "υπήρξαν / υπήρξανε",
        "translation": "Они были ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "III Группа \"Изменение букв в основе глагола в Аористе\"",
        "base": "υπάρχω",
        "notice": "",
        "qws": [
            "Они были "
        ],
        "transls": [
            "υπάρχω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\" style=\"color:green\">ή</span>ρξα",
        "unicTransl": "существовать"
    },
    {
        "word": "υπερέβαλα",
        "translation": "Я превзошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "υπερβάλλω",
        "notice": "",
        "qws": [
            "Я превзошёл "
        ],
        "transls": [
            "υπερβάλλω"
        ],
        "baseAor": "<u>υπερ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "превосходить"
    },
    {
        "word": "υπερέβαλες",
        "translation": "Ты превзошёл ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "υπερβάλλω",
        "notice": "",
        "qws": [
            "Ты превзошёл "
        ],
        "transls": [
            "υπερβάλλω"
        ],
        "baseAor": "<u>υπερ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "превосходить"
    },
    {
        "word": "υπερέβαλε",
        "translation": "Она превзошла ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "υπερβάλλω",
        "notice": "",
        "qws": [
            "Она превзошла "
        ],
        "transls": [
            "υπερβάλλω"
        ],
        "baseAor": "<u>υπερ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "превосходить"
    },
    {
        "word": "υπερβάλαμε",
        "translation": "Мы превзошли ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "υπερβάλλω",
        "notice": "",
        "qws": [
            "Мы превзошли "
        ],
        "transls": [
            "υπερβάλλω"
        ],
        "baseAor": "<u>υπερ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "превосходить"
    },
    {
        "word": "υπερβάλατε",
        "translation": "Вы превзошли ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "υπερβάλλω",
        "notice": "",
        "qws": [
            "Вы превзошли "
        ],
        "transls": [
            "υπερβάλλω"
        ],
        "baseAor": "<u>υπερ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "превосходить"
    },
    {
        "word": "υπερέβαλαν / υπερβάλανε",
        "translation": "Они превзошли ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "I Группа \"Выпадение букв из основы глагола в Аористе\"",
        "base": "υπερβάλλω",
        "notice": "",
        "qws": [
            "Они превзошли "
        ],
        "transls": [
            "υπερβάλλω"
        ],
        "baseAor": "<u>υπερ</u><span class=\"selected-text\">έ</span>βαλα",
        "unicTransl": "превосходить"
    },
    {
        "word": "υπέγραψα / υπόγραψα",
        "translation": "Я подписал ",
        "groups": {
            "num": "ед. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υπογράφω",
        "notice": "",
        "qws": [
            "Я подписал "
        ],
        "transls": [
            "υπογράφω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "подписывать"
    },
    {
        "word": "υπέγραψες / υπόγραψες",
        "translation": "Ты подписал ",
        "groups": {
            "num": "ед. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υπογράφω",
        "notice": "",
        "qws": [
            "Ты подписал "
        ],
        "transls": [
            "υπογράφω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "подписывать"
    },
    {
        "word": "υπέγραψε / υπόγραψε",
        "translation": "Он подписал ",
        "groups": {
            "num": "ед. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υπογράφω",
        "notice": "",
        "qws": [
            "Он подписал "
        ],
        "transls": [
            "υπογράφω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "подписывать"
    },
    {
        "word": "υπογράψαμε",
        "translation": "Мы подписали ",
        "groups": {
            "num": "мн. число",
            "pers": "1 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υπογράφω",
        "notice": "",
        "qws": [
            "Мы подписали "
        ],
        "transls": [
            "υπογράφω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "подписывать"
    },
    {
        "word": "υπογράψατε",
        "translation": "Вы подписали ",
        "groups": {
            "num": "мн. число",
            "pers": "2 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υπογράφω",
        "notice": "",
        "qws": [
            "Вы подписали "
        ],
        "transls": [
            "υπογράφω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "подписывать"
    },
    {
        "word": "υπέγραψαν / υπογράψανε / υπόγραψαν",
        "translation": "Они подписали ",
        "groups": {
            "num": "мн. число",
            "pers": "3 лицо",
            
        },
        "kind": "VI Группа \"Изменения в приставке (и между приставкой и основой) глагола в Аористе\"",
        "base": "υπογράφω",
        "notice": "",
        "qws": [
            "Они подписали "
        ],
        "transls": [
            "υπογράφω"
        ],
        "baseAor": "<u>υπ</u><span class=\"selected-text\">έ</span>γραψα",
        "unicTransl": "подписывать"
    }
]
const question_crete = "Укажите Крит";
const question_attica = "Укажите Аттику";
const question_aegean_south_islands = "Укажите Южные Эгейские острова";
const question_aegean_nord_islands = "Укажите Северные Эгейские острова";
const question_ams_of_the_holy_mountain = "Укажите Автономное Монашеское Государство Святой Горы";
const question_epirus = "Укажите Эпир";
const question_west_macedonia = "Укажите Западную Македонию";
const question_central_macedonia = "Укажите Центральную Македонию";
const question_east_macedonia_and_thrace = "Укажите Восточную Македонию и Фракию";
const question_ionian_islands = "Укажите Ионические острова";
const question_peloponnese = "Укажите Пелопоннес";
const question_west_greece = "Укажите Западную Грецию";
const question_thessaly = "Укажите Фессалию";
const question_central_greece = "Укажите Центральную Грецию";

const hint_question_crete = "Крит — периферия Греции на острове Крит (самый большой греческий остров). Административный центр — город Ираклион. Периферия образует одноимённую децентрализованную администрацию Крит.";
const hint_question_attica = "Аттика — юго-восточная область Центральной Греции, соединительное звено между Балканским полуостровом и Архипелагом с центром в столице Греции — в Афинах.";
const hint_question_aegean_south_islands = "Южные Эгейские острова — административная периферия Греции, включает в себя архипелаги Киклады и Додеканес, расположенные на юго-востоке Греции и Европейского союза. Административный центр периферии — город Эрмуполис на острове Сирос.";
const hint_question_aegean_nord_islands = "Северные Эгейские острова — периферия, административно-территориальная единица второго уровня в восточной части республики Греция, состоящая из нескольких островов. Административный центр периферии — город Митилини на острове Лесбос.";
const hint_question_ams_of_the_holy_mountain = "Автономное Монашеское Государство Святой Горы — самоуправляемое сообщество 20 православных монастырей в непосредственной церковной юрисдикции Константинопольского патриарха (с 1312 года), расположено в Греческой Македонии в Халкидики на одноименном полуострове Афон. Афон является крупнейшим в мире средоточием равославного монашества. Согласно греческой мифологии, гора Афон ассоциируется с Гигантомахией (γιγαντομαχία - битва олимпийских богов с гигантами, которая произошла на Флегрейских полях Италии), между Гигантами и Богами Олимпа. Лидером первых был гигант Афон. Афон бросил из Фракии огромной скалой в Посейдона, но промахнулся, и скала упала в море, образовав гору, которой было дано его имя. Административный центр автономии — город Карье (Карея)";
const hint_question_epirus = "Эпир — периферия на севере Греции, которая занимает южную часть исторического региона Эпир (а северная часть находится в Албании). Входит в децентрализованную администрацию Эпира и Западной Македонии. Крупнейшим городом является административный центр периферии Эпир — город Янина.";
const hint_question_west_macedonia = "Западная Македония — административная область (периферия) в северо-западной части Греческой республики. Занимает западную часть греческой Македонии. Административный центр области — город Козани.";
const hint_question_central_macedonia = "Центральная Македония — самая большая по площади и вторая по численности населения периферия, административно-территориальная единица Греции. Столицей периферии является город Салоники, так называемая северная столица Греции, где и сосредоточенно основное население периферии.";
const hint_question_east_macedonia_and_thrace = "Восточная Македония и Фракия — северная периферия, административно-территориальная единица Греции. Включает восточную часть исторической области Македония, историческую область Западная Фракия, острова Тасос и Самотраки. Административный центр периферии — город Комотини, самый крупный город — Александруполис.";
const hint_question_ionian_islands = "Ионические острова — западная периферия, административно-территориальная единица Греции. Всего в состав периферии входят 32 острова, из них только 14 — обитаемые. Административный центр периферии — Керкира.";
const hint_question_peloponnese = "Пелопоннес — периферия Греции, которая занимает большую часть полуострова Пелопоннес, за исключением северо-западных периферийных единиц Ахея и Элида, которые принадлежат периферии Западная Греция. Административный центр периферии находится в городе Триполис.";
const hint_question_west_greece = "Западная Греция — периферия Греции, которая включает в себя северо-западную часть полуострова Пелопоннеса и западную часть Центральной Греции. Административный центр периферии — город Патры.";
const hint_question_thessaly = "Фессалия — периферия в центре Греции, которая включает историческую область Фессалию и часть островов архипелага Северные Спорады. Административный центр периферии — город Лариса.";
const hint_question_central_greece = "Центральная Греция — самая гористая периферия Греции. Включает в себя острова Скирос и Эвбея. Административный центр периферии — Ламия.";

const flag_question_crete = true;
const flag_question_attica = true;
const flag_question_aegean_south_islands = true;
const flag_question_aegean_nord_islands = true;
const flag_question_ams_of_the_holy_mountain = true;
const flag_question_epirus = true;
const flag_question_west_macedonia = true;
const flag_question_central_macedonia = true;
const flag_question_east_macedonia_and_thrace = true;
const flag_question_ionian_islands = true;
const flag_question_peloponnese = true;
const flag_question_west_greece = true;
const flag_question_thessaly = true;
const flag_question_central_greece = true;

let score = 0;
const audio_winner = new Audio("/wp-content/themes/alfa-greek/assets/music/winner.wav");
const audio_bad = new Audio("/wp-content/themes/alfa-greek/assets/music/bad.wav");
const audio_great = new Audio("/wp-content/themes/alfa-greek/assets/music/great.wav");
const audio_hint = new Audio("/wp-content/themes/alfa-greek/assets/music/hint.wav");
let block_button = document.getElementById('hint_botton');

const flag = [flag_question_crete, flag_question_attica, flag_question_aegean_south_islands, flag_question_aegean_nord_islands, flag_question_ams_of_the_holy_mountain, flag_question_epirus, flag_question_west_macedonia, flag_question_central_macedonia, flag_question_east_macedonia_and_thrace, flag_question_ionian_islands, flag_question_peloponnese, flag_question_west_greece, flag_question_thessaly, flag_question_central_greece];
const question_array = [question_crete, question_attica, question_aegean_south_islands, question_aegean_nord_islands, question_ams_of_the_holy_mountain, question_epirus, question_west_macedonia, question_central_macedonia, question_east_macedonia_and_thrace, question_ionian_islands, question_peloponnese, question_west_greece, question_thessaly, question_central_greece];
const reward_array = ["Прекрасно! ", "Отлично! ", "Так держать! ", "Прекрасно! ", "Отлично! ", "Прекрасно! ", "Прекрасно! ", "Отлично! ", "Правильно! ","Прекрасно! ", "Отлично! ", "Здорово! ", "Правильно! ", "Невероятно! "];
const hint_array = [hint_question_crete, hint_question_attica, hint_question_aegean_south_islands, hint_question_aegean_nord_islands, hint_question_ams_of_the_holy_mountain, hint_question_epirus, hint_question_west_macedonia, hint_question_central_macedonia, hint_question_east_macedonia_and_thrace, hint_question_ionian_islands, hint_question_peloponnese, hint_question_west_greece, hint_question_thessaly, hint_question_central_greece];

for (var i = 0 ; (i < 14) && (i < question_array.length) ; i++) {
    var r = Math.floor(Math.random() * (question_array.length - i)) + i;
    var question = question_array[r];
    question_array[r] = question_array[i];
    question_array[i] = question;

    var hint = hint_array[r];
    hint_array[r] = hint_array[i];
    hint_array[i] = hint;

    var reward = reward_array[r];
    reward_array[r] = reward_array[i];
    reward_array[i] = reward;
};
    document.getElementById('question_text').innerHTML = question_array[0];
    document.getElementById('score').innerHTML = score;
    document.getElementById('hint_text').innerHTML = hint_array[0];
    let count_score = document.getElementById('count_score');
    let time_score = document.getElementById('time_score');

function tags_reset() {
    let area = document.getElementsByTagName('area');
    for (var i = 0; i < area.length; i++) {
        area[i].removeAttribute('onclick');
        area[i].removeAttribute('onmouseout');
        area[i].removeAttribute('onmouseover');
    }
};

//Start Game
function start_game(){
  document.getElementById('game_cover_start').classList.add('game_cover__hid');
  StartStop();
}
//Конец Игры
function game_over(){

  document.getElementById('game_cover_end').classList.add('game_cover__vis');
  count_score.value = score;

  if (score <= 0) {
      document.getElementById('question_text').innerHTML = "Конец игры. Попытайтесь снова!";
  }
  else {
      document.getElementById('question_text').innerHTML = "Вы Выиграли! Поздравляем.";
  }
};
//Send Game Result
function send_score(){
  document.getElementById('game_cover_end').classList.remove('game_cover__vis');
}

//перезапуск игры
function reload_game() {
    location.reload();
};

//наведение
function game_on_move(t, id) {
    if(flag[t] == true) {
    document.getElementById(id).classList.toggle("vis_0");
    }
};

//Главная Функция
function game_on_click(id, question, t) {
    if (question_array.length == 1) {
        audio_winner.play();
        tags_reset();
        game_over();
        StartStop();
        document.getElementById(id).classList.remove("vis_0");
        score += 50;
        document.getElementById('score').innerHTML = score;
        block_button.removeAttribute('onclick');
    }
    else if (question_array[0] == question) {
        audio_great.play();
        flag[t] = false;
        document.getElementById('hint_text').classList.add("hint_vis_0");
        block_button.setAttribute("onclick", "game_hint()");
        document.getElementById(id).classList.remove("vis_0");
        question_array.shift();
        hint_array.shift();
        reward_array.shift();
        score += 50;
        document.getElementById('question_text').innerHTML = reward_array[0] + question_array[0];
        document.getElementById('hint_text').innerHTML = hint_array[0];
        document.getElementById('score').innerHTML = score;
    }
    else {
        audio_bad.play();
        score -= 50;
        document.getElementById('question_text').innerHTML = "Подумайте ещё... " + question_array[0];
        document.getElementById('score').innerHTML = score;
    }
};

//Подсказки
function game_hint() {
        audio_hint.play();
        score -= 50;
        document.getElementById('score').innerHTML = score;
        document.getElementById('hint_text').classList.remove("hint_vis_0");
        block_button.removeAttribute('onclick');
};

//Секундомер

//объявляем переменные
var base = 60;
var clocktimer, dateObj, dh, dm, ds, ms;
var readout = '';
var h = 1,
  m = 1,
  tm = 1,
  s = 0,
  ts = 0,
  ms = 0,
  init = 0;

//функция для очистки поля
function ClearСlock() {
  clearTimeout(clocktimer);
  h = 1;
  m = 1;
  tm = 1;
  s = 0;
  ts = 0;
  ms = 0;
  init = 0;
  readout = '00:00:00';
  document.MyForm.stopwatch.value = readout;
  time_score.value = readout;
}

//функция для старта секундомера
function StartTIME() {
  var cdateObj = new Date();
  var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
  if (t > 999) {
    s++;
  }
  if (s >= (m * base)) {
    ts = 0;
    m++;
  } else {
    ts = parseInt((ms / 100) + s);
    if (ts >= base) {
      ts = ts - ((m - 1) * base);
    }
  }
  if (m > (h * base)) {
    tm = 1;
    h++;
  } else {
    tm = parseInt((ms / 100) + m);
    if (tm >= base) {
      tm = tm - ((h - 1) * base);
    }
  }
  ms = Math.round(t / 10);
  if (ms > 99) {
    ms = 0;
  }
  if (ms == 0) {
    ms = '00';
  }
  if (ms > 0 && ms <= 9) {
    ms = '0' + ms;
  }
  if (ts > 0) {
    ds = ts;
    if (ts < 10) {
      ds = '0' + ts;
    }
  } else {
    ds = '00';
  }
  dm = tm - 1;
  if (dm > 0) {
    if (dm < 10) {
      dm = '0' + dm;
    }
  } else {
    dm = '00';
  }
  dh = h - 1;
  if (dh > 0) {
    if (dh < 10) {
      dh = '0' + dh;
    }
  } else {
    dh = '00';
  }
  readout = dh + ':' + dm + ':' + ds;
  document.MyForm.stopwatch.value = readout;
  time_score.value = readout;
  clocktimer = setTimeout("StartTIME()", 1);
}

//Функция запуска и остановки
function StartStop() {
  if (init == 0) {
    ClearСlock();
    dateObj = new Date();
    StartTIME();
    init = 1;
  } else {
    clearTimeout(clocktimer);
    init = 0;
  }
}

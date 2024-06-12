//Начинка полей Section
let sectionField = document.getElementById('select_game');
let sectionCont = document.getElementById('select_container');
let sectionArr = ["Все", ];
if (typeof paramGlobal === "undefined") {
	paramGlobal = [];
}

for (let i=0; i < globalArray.length; i++) {
	if (globalArray[i].kind !== undefined && globalArray[i].kind !== "") {
		let strKind = globalArray[i].kind;
		strKind = globalArray[i].kind[0].toUpperCase() + strKind.slice(1);
		sectionArr.push(strKind);
	}
	if (globalArray[i].base === "") {
		globalArray[i].base = globalArray[i].word;
	}
}

//Добавим в kind "Без группы"
for (let i=0; i < globalArray.length; i++) {
	if (globalArray[i].kind === undefined || globalArray[i].kind === "") {
		globalArray[i].kind = "Без группы";
		sectionArr.push(globalArray[i].kind);
	}
}

sectionArr = new Set(sectionArr);
sectionArr = Array.from(sectionArr);
let secOptionContainer = document.createElement('div');
let firstOptionContainer = document.createElement('div');
firstOptionContainer.value = sectionArr[0];
firstOptionContainer.innerHTML = sectionArr[0];
firstOptionContainer.style.overflow = "auto";
firstOptionContainer.classList.add("option");
sectionField.append(firstOptionContainer);
secOptionContainer.classList.add("secOptionContainer");
sectionField.append(secOptionContainer);
for (let i=1; i < sectionArr.length; i++) {
	let secOption = document.createElement('div');
	secOption.classList.add("option");
	secOption.value = sectionArr[i];
	secOption.innerHTML = sectionArr[i];
	secOptionContainer.append(secOption);
}

//Главный массив с вопросами (необходимо дублировать объекты с несколькими вопросами)
let mainArrAlwaysFull = [];
for (let i=0; i < globalArray.length; i++) {
	if(globalArray[i].qws !== undefined && globalArray[i].qws.length !== 0 && globalArray[i].qws.length === globalArray[i].transls.length && globalArray[i].word !== undefined && globalArray[i].word !== "" && globalArray[i].word !== "—") {
		if(globalArray[i].qws.length > 1) {
			for (let p=0; p < globalArray[i].qws.length; p++) {
				let templArr = JSON.parse(JSON.stringify(globalArray[i]));
				templArr.qws = [];
				templArr.transls = [];
				templArr.qws.push(globalArray[i].qws[p]);
				templArr.transls.push(globalArray[i].transls[p]);
				mainArrAlwaysFull.push(templArr);
			}
		} else {
			mainArrAlwaysFull.push(globalArray[i]);
		}
	}
}

let mainArr = Array.from(mainArrAlwaysFull);
let mainArrsinSort = Array.from(mainArrAlwaysFull);

//Random
function randomArr() {
	for (var i = 0; i < mainArr.length; i++) {
	    var r = Math.floor(Math.random() * (mainArr.length - i)) + i;
 	    var question = mainArr[r];
	    mainArr[r] = mainArr[i];
	    mainArr[i] = question;
	}
}
randomArr();

let checkedKind = ["все"];
let optFirst = sectionField.querySelectorAll("div")[0];
let optAll = secOptionContainer.querySelectorAll("div");
let optArrowArea = document.getElementById("arrowCont");
let optArrowOne = document.getElementById("arrowSelTwo");
let optArrowTwo = document.getElementById("arrowSelThree");
let numbAll = optAll.length;

const audio_bad = new Audio("/wp-content/themes/alfa-greek/assets/music/bad.wav");
const audio_great = new Audio("/wp-content/themes/alfa-greek/assets/music/great.wav");
const audio_hint = new Audio("/wp-content/themes/alfa-greek/assets/music/hint.wav");

let input = document.getElementById('input_verb');
let block_button = document.getElementById('hint_botton');
const btn_lid = document.getElementById("input_button");
const btn_ans = document.getElementById("hint_botton");

let form_inp = document.getElementById('form_game');
let tableСontent = document.getElementById('table-content');
let sound = document.getElementById("soundCheck");
let reloadG = document.getElementById("reload_Game");
let refreshG = document.getElementById("refresh_Game");
let soundDiv = document.getElementById("soundCheckDiv");
soundDiv.classList.remove("dispNone");
let fromHintButton = true;
let showNotesFlag = false;

let checkSound = true;
let soundLevel = 3;
let sVolume = 1;
let sLevel3 = "M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z";
let sLevel2 = "M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z";

function showSound() {
	soundLevel++;
	if (soundLevel === 4){
		soundLevel = 0;
	}
	if (soundLevel === 0){
		sVolume = 0;
		checkSound = false;
		let soundSVGL1 = document.getElementById("sLevel1");
		let soundSVGL2 = document.getElementById("sLevel3");
		let soundSVGL3 = document.getElementById("sLevel2");
		setTimeout(()=>{
			soundSVGL3.removeAttribute("d");
			setTimeout(()=>{
				soundSVGL2.removeAttribute("d");
				setTimeout(()=>{
					soundSVGL1.removeAttribute("d");
					setTimeout(()=>{
						this.classList.add("redbackgr");
						this.style.border = "1px solid #b90000";
						this.style.boxShadow = "inset 0px 0px 2px 0px #b90000";
						sound.innerHTML = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#101820;}</style></defs><title/><g data-name="Layer 35" id="Layer_35"><path class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/><path class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/><rect class="cls-1" height="12" transform="translate(-3.77 22.9) rotate(-45)" width="2" x="24.76" y="10"/><rect class="cls-1" height="2" transform="translate(-3.77 22.9) rotate(-45)" width="12" x="19.76" y="15"/></g></svg>';
					}, 100);
				}, 100);
			}, 100);
		}, 100);
	}
	if (soundLevel === 1){
		sVolume = 0.1;
		checkSound = true;
		let soundTr = audio_hint.cloneNode();
		soundTr.volume = sVolume;
		soundTr.play();
		setTimeout(()=>{
			this.classList.remove("redbackgr");
			this.style.border = "1px solid #198754";
			this.style.boxShadow = "inset 0px 0px 2px 0px #198754";
			setTimeout(()=>{
				sound.innerHTML = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#101820;}</style></defs><title/><g data-name="Layer 34" id="Layer_34"><path class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/><path class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/><path class="cls-1" id="sLevel1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/><path class="cls-1" id="sLevel2"/><path class="cls-1" id="sLevel3"/></g></svg>';
			}, 100);
		}, 100);
	}
	if (soundLevel === 2){
		sVolume = 0.5;
		let soundTr = audio_hint.cloneNode();
		soundTr.volume = sVolume;
		soundTr.play();
		checkSound = true;
		setTimeout(()=>{
			let soundSVGL2 = document.getElementById("sLevel3");
			soundSVGL2.setAttribute("d", sLevel2);
		}, 100);
	}
	if (soundLevel === 3){
		sVolume = 1;
		let soundTr = audio_hint.cloneNode();
		soundTr.volume = sVolume;
		soundTr.play();
		checkSound = true;
		setTimeout(()=>{
			let soundSVGL3 = document.getElementById("sLevel2");
			soundSVGL3.setAttribute("d", sLevel3);
		}, 100);
	}
}

sound.addEventListener('click', showSound);

reloadG.addEventListener('click', function() {
	if (checkSound) {
		let soundTr = audio_hint.cloneNode();
		soundTr.volume = sVolume;
		soundTr.play();
	}
	for(let c = 0; c < optAll.length; c++ ) {
		optAll[c].classList.remove("optSelected");
	}
	optFirst.classList.add("optSelected");
	checkedKind = ["все"];
	mainArr = Array.from(mainArrAlwaysFull);
	mainArrsinSort = Array.from(mainArrAlwaysFull);
	randomArr();
	flagGameOver = false;
	topicZShow();
	unreset_button();
	score_text.innerHTML = mainArr.length;
	errorField.style.height = '0px';
	qw_text.innerHTML = qwStyleMod() + " " + '<br><span class="spanTransl">(' + mainArr[0].transls[0] + ')</span>';
	qw_textChangeHeight();
	numbAll = optAll.length;
	optFirst.innerHTML = "Все" + "<sup> (" + numbAll + ")</sup>";
	illum();
	illum_off(true);
	input.value = "";
	div.innerHTML = "";
	div.style.display = 'none';
	let answers = mainArr[0].word.split("/");
	if(answers.includes(input.value.toLowerCase().trim())){
		showNotesFlag = false;
		showNotes();
	}
	document.querySelector('#reload_Game img').style.animation = 'rotation_left 0.3s ease-out';
	setTimeout(() => {
		document.querySelector('#reload_Game img').style.animation = 'none';
	}, 300);
});

refreshG.addEventListener('click', function() {
	if (mainArr.length > 1) {
		if (checkSound) {
			let soundTr = audio_hint.cloneNode();
			soundTr.volume = sVolume;
			soundTr.play();
		}
		let first_mainArr = mainArr[0];
		randomArr();
		mainArr = mainArr.filter(o => {
			if(o.qws[0].toLowerCase() === first_mainArr.qws[0].toLowerCase() && o.transls[0].toLowerCase() === first_mainArr.transls[0].toLowerCase()){
				return false;
			} else {
				return true;
			}
		});
		mainArr.push(first_mainArr);
		qw_text.innerHTML = qwStyleMod() + " " + '<br><span class="spanTransl">(' + mainArr[0].transls[0] + ')</span>';
		errorField.style.height = '0px';
		qw_textChangeHeight();
		illum();
		illum_off(true);
		input.value = "";
		div.innerHTML = "";
		div.style.display = 'none';
		let answers = mainArr[0].word.split("/");
		for(let i = 0; i < answers.length; i++){
			answers[i] = answers[i].trim();
		}
    if(answers.includes(input.value.toLowerCase().trim())){
			showNotesFlag = false;
			showNotes();
		}
	}
	document.querySelector('#refresh_Game img').style.animation = 'rotation 0.3s ease-out';
	setTimeout(() => {
		document.querySelector('#refresh_Game img').style.animation = 'none';
	}, 300);
});

optFirst.classList.add("optSelected");
optFirst.style.borderBottom = "1px solid #198754";

let qw_text = document.getElementById('question_text');
let score_text = document.getElementById('score');
let errorField = document.getElementById('errorField');
let errorFieldHeight = errorField.offsetHeight;
errorField.style.height = '0px';
errorField.style.visibility = "visible";

function qwStyleMod() {
	const pattern = /\.\.\./g;
  let qwMod = mainArr[0].qws[0].replace(pattern, '<span style="color: red">...</span>');
  return qwMod;
}
score_text.innerHTML = mainArr.length;
qw_text.innerHTML = qwStyleMod() + " " + '<br><span class="spanTransl">(' + mainArr[0].transls[0] + ')</span>';
optFirst.innerHTML = "Все" + "<sup> (" + numbAll + ")</sup>";

//Событие при смене режима
sectionField.addEventListener("click", (e)=>{
	let eObj = null;
	let eTarget = e.target;
	if(e.target.value === undefined) {
		eTarget = e.target.parentNode;
	}
	for (let y = 0; y < optAll.length; y++) {
		if (optAll[y].value === e.target.value) {
			eObj = optAll[y];
		}
	}
	if (eTarget.value.toLowerCase() === "все") {
		for(let c = 0; c < optAll.length; c++ ) {
			optAll[c].classList.remove("optSelected");
		}
		optFirst.classList.add("optSelected");
		checkedKind = ["все"];
	} else if (checkedKind.includes(e.target.value.toLowerCase())) {
		let indexSl = checkedKind.indexOf(e.target.value.toLowerCase());
		eObj.classList.remove("optSelected");
		checkedKind = [...checkedKind.slice(0, indexSl), ...checkedKind.slice(1+indexSl)];
	} else {
		if(checkedKind.includes("все")){
			optFirst.classList.remove("optSelected");
			let indexAl = checkedKind.indexOf("все");
			checkedKind = [...checkedKind.slice(0, indexAl), ...checkedKind.slice(1+indexAl)];
		}
		eObj.classList.add("optSelected");
		checkedKind.push(e.target.value.toLowerCase());
	}
	let first_mainArr = mainArr[0];
	mainArr = [];
	if(checkedKind.includes("все") || checkedKind.length === 0){
		mainArr = Array.from(mainArrsinSort);
		optFirst.classList.add("optSelected");
		checkedKind = ["все"];
		numbAll = optAll.length;
		optFirst.innerHTML = "Все" + "<sup> (" + numbAll + ")</sup>";
	} else {
		for (let i=0; i < mainArrsinSort.length; i++) {
			if(checkedKind.includes(mainArrsinSort[i].kind.toLowerCase())) {
				mainArr.push(mainArrsinSort[i]);
			}
		}
		numbAll = checkedKind.length;
		optFirst.innerHTML = "Все" + "<sup> (" + numbAll + ")</sup>";
		fromHintButton = false;
	}
	randomArr();
	illum();
	illum_off(true);

  errorField.style.height = '0px';
	if (mainArr.length === 0) {
		game_over();
		console.log("IF");
	} else {
	if (checkedKind.includes(first_mainArr?.kind.toLowerCase()) || checkedKind.includes("все")) {
		mainArr = mainArr.filter(o => {
				if (o.qws[0].toLowerCase() === first_mainArr.qws[0].toLowerCase() && o.transls[0].toLowerCase() === first_mainArr.transls[0].toLowerCase()) {
					return false;
				} else {
					return true;
				}
		});
		mainArr.unshift(first_mainArr);
		if (mainArr[0].word.toLowerCase() === input.value.toLowerCase().trim()) {
			fromHintButton = true;
			illum();
		}
		qw_textChangeHeight();
	} else {
		input.value = "";
		div.innerHTML = "";
		div.style.display = 'none';
		fromHintButton = false;
		let answers = mainArr[0].word.split("/");
		for(let i = 0; i < answers.length; i++){
			answers[i] = answers[i].trim();
		}
    		if(answers.includes(input.value.toLowerCase().trim())){
			showNotes();
		}
	}
		qw_text.innerHTML = qwStyleMod() + " " + '<br><span class="spanTransl">(' + mainArr[0].transls[0] + ')</span>';
		unreset_button();
		console.log("ELSE");
		form_inp.style.marginTop = "0";
	}
  qw_textChangeHeight();
score_text.innerHTML = mainArr.length;
})

//Конец: создали динамичный массив.

//закрытие и открытие Сэкшина
sectionField.style.height = optFirst.clientHeight + "px";
let selectContainer = document.getElementById("select_container");
let flagSec = true;
let flagGameOver = false;
optArrowTwo.style.borderColor = "white";

optArrowArea.addEventListener("click", (e)=> {
	if (!flagGameOver) {
		if (flagSec) {
			let allHeight = optFirst.clientHeight;
			for (let i = 0; i < optAll.length; i++) {
				allHeight += optAll[i].offsetHeight;
			}
			if (allHeight - optFirst.clientHeight >= 600) {
				sectionField.style.height = 600 + optFirst.clientHeight + "px";
			} else {
				sectionField.style.height = allHeight + "px";
			}
			flagSec = false;
			optArrowOne.style.borderColor = "white";
			optArrowTwo.style.borderColor = "#198754";
		} else {
			if((optAll.length) === checkedKind.length){
				for(let c = 0; c < optAll.length; c++ ) {
					optAll[c].classList.remove("optSelected");
				}	
				//mainArr = Array.from(mainArrsinSort);
				optFirst.classList.add("optSelected");
				checkedKind = ["все"];
				numbAll = optAll.length;
				optFirst.innerHTML = "Все" + "<sup> (" + numbAll + ")</sup>";
			}
			secOptionContainer.scrollTo(0, 0);
			flagSec = true;
			optArrowOne.style.borderColor = "#198754";
			optArrowTwo.style.borderColor = "white";
			sectionField.style.height = optFirst.clientHeight + "px";
		}
	}
});
///закрытие Сэкшина при клике не на него
document.addEventListener("click", (e)=> {
	if (sectionCont !== e.target.offsetParent && optArrowArea !== e.target.offsetParent) {
		if((optAll.length) === checkedKind.length){
			for(let c = 0; c < optAll.length; c++ ) {
				optAll[c].classList.remove("optSelected");
			}
			//mainArr = Array.from(mainArrsinSort);
			optFirst.classList.add("optSelected");
			checkedKind = ["все"];
			numbAll = optAll.length;
			optFirst.innerHTML = "Все" + "<sup> (" + numbAll + ")</sup>";
		}
		secOptionContainer.scrollTo(0, 0);
		sectionField.style.height = optFirst.clientHeight + "px";
		flagSec = true;
		optArrowOne.style.borderColor = "#198754";
		optArrowTwo.style.borderColor = "white";
	}
});

//Сброс при Сабмите
form_inp.addEventListener('submit', (e) => { 
    e.preventDefault();
    game_on_click();
    input.focus();
});

//Главная Функция
function game_on_click() {
	//Подготовка ответа
    let answers = mainArr[0].word.split("/");
	for(let i = 0; i < answers.length; i++){
		answers[i] = answers[i].trim();
	}
    let answerIncl = answers.includes(input.value.toLowerCase().trim());
    if (mainArrsinSort.length === 1) {
			if (checkSound) {
				let soundTr = audio_great.cloneNode();
				soundTr.volume = sVolume;
				soundTr.play();
			}
			reset_button();
			cutterArr();
			score_text.innerHTML = mainArr.length;
			document.getElementById("input_verb").value = "";
			illum_off();
			div.innerHTML = "";
			div.style.display = 'none';
			errorField.style.height = '0px';
			game_over();
      qw_textChangeHeight();
			topicZShow();
    } else if (mainArr.length === 1 && (answerIncl || (mainArr[0].word.toLowerCase() === input.value.toLowerCase().trim()))){
			if (checkSound) {
				let soundTr = audio_great.cloneNode();
				soundTr.volume = sVolume;
				soundTr.play();
			}
			reset_button();
			cutterArr();
			score_text.innerHTML = mainArr.length;
			document.getElementById("input_verb").value = "";
			illum_off(true);
			div.innerHTML = "";
			div.style.display = 'none';
			errorField.style.height = '0px';
			game_over();
			qw_textChangeHeight();
			showNotesFlag = false;
			topicZShow();
    }
    else if (answerIncl || (mainArr[0].word.toLowerCase() === input.value.toLowerCase().trim()) ) {
			if (checkSound) {
					let soundTr = audio_great.cloneNode();
					soundTr.volume = sVolume;
					soundTr.play();
			}
			cutterArr();
			block_button.setAttribute("onclick", "game_hint()");
			document.getElementById("input_verb").value = "";
			qw_text.innerHTML = qwStyleMod() + " " + '<br><span class="spanTransl">(' + mainArr[0].transls[0] + ')</span>';
			score_text.innerHTML = mainArr.length;
			illum_off(true);
			div.innerHTML = "";
			div.style.display = 'none';
      errorField.style.height = '0px';
      qw_textChangeHeight();
			showNotesFlag = false;
			topicZShow();
    }
    else {
			if (checkSound) {
				let soundTr = audio_bad.cloneNode();
				soundTr.volume = sVolume;
				soundTr.play();
			}
      errorField.style.height = errorFieldHeight + 'px';
      qw_text.innerHTML = qwStyleMod() + " " + '<br> <span class="spanTransl">(' + mainArr[0].transls[0] + ')</span>';
    }
};

//Функция для резки массивов
function cutterArr() {
	let indexCutArr = mainArrsinSort.indexOf(mainArr[0]);
	mainArr.shift();
	mainArrsinSort = [...mainArrsinSort.slice(0, indexCutArr), ...mainArrsinSort.slice(1+indexCutArr)];
}

//Подсказка
function game_hint() {
	if (checkSound) {
		let soundTr = audio_hint.cloneNode();
		soundTr.volume = sVolume;
		soundTr.play();
	}
	fromHintButton = true;
	input.value = mainArr[0].word;
	illum();
	showNotes();
	qw_textChangeHeight();
}

//Конец Игры
function game_over(){
	if (mainArrsinSort.length === 0) {
		qw_text.innerHTML = 'Вы полностью завершили тренировку! Начните заново.';
		optFirst.style.color = "#7f7f7f";
		flagGameOver = true;
	} else {
		qw_text.innerHTML = 'В данном режиме больше нет вопросов.<br>';
	}
	form_inp.style.marginTop = "12px";
}

//Перезапуск игры
function reload_game() {
	if (checkSound) {
		let soundTr = audio_hint.cloneNode();
		soundTr.volume = sVolume;
		soundTr.play();
	}
  if (checkedKind !== "все" && mainArrsinSort.length > 1) {
		for(let i = 0; i < mainArrAlwaysFull.length; i++){
			if(checkedKind.includes(mainArrAlwaysFull[i].kind.toLowerCase())){
				mainArr.push(mainArrAlwaysFull[i]);
				mainArrsinSort.push(mainArrAlwaysFull[i]);
			}
		}
  } else {
		mainArr = Array.from(mainArrAlwaysFull);
		mainArrsinSort = Array.from(mainArrAlwaysFull);
		flagGameOver = false;
  }
	topicZShow();
	unreset_button();
	score_text.innerHTML = mainArr.length;
	randomArr();
	qw_text.innerHTML = qwStyleMod() + " " + '<br><span class="spanTransl">(' + mainArr[0].transls[0] + ')</span>';
	qw_textChangeHeight();
};

//Сброс игровых параметров
function reset_button() {
	btn_lid.innerText = "Ещё!";
	btn_lid.setAttribute('onclick', "reload_game()");
	btn_ans.removeAttribute('onclick');
};

//Возобновление игровых параметров
function unreset_button() {
    btn_lid.innerText = "Ввод";
    btn_lid.setAttribute('onclick', 'game_on_click()');
    btn_ans.setAttribute('onclick', 'game_hint()');
};

//Создание узлов
let div = document.createElement('div');
let table = document.createElement('table');
let thead = document.createElement('thead');
let trhead = document.createElement('tr');
let true_arr = [];
let tableGroupsArr = [];

//Создание таблицы налету
function createTable() {
    tableСontent.append(table);
    table.prepend(thead);
    thead.append(trhead);
    table.setAttribute("id", "table_verbs");
    table.classList.add('table', 'text-center', 'table_decline');
    trhead.classList.add('table-dark');
    //заголовок
    let titles = tableTitlesArr;
    for (let index = 0; index < titles.length; index++) {
        let tdt = document.createElement('th');
        tdt.innerHTML = titles[index].title;
        trhead.append(tdt);
        tdt.setAttribute("width", 100/titles.length);
    }

    let gr_count = sectionArr.slice(1);
    let arr_templ = [];
    
    //создание тела таблицы
    let mainArrToPlain = Array.from(mainArrAlwaysFull);
    for (let index = 0; index < gr_count.length; index++) {
        let tbody = document.createElement('tbody');
        tbody.classList.add('group_table');
        tbody.setAttribute("id", "group_"+ (index + 1));
        table.append(tbody);
        tableGroupsArr[index] = tbody;
        let trr = document.createElement('tr');
        trr.innerHTML = '<th scope="col" class="table-active" colspan="' + titles.length + '">' + gr_count[index] + '</th>';
        tbody.append(trr);
        let current_gr_name = gr_count[index];
        for (let ind = 0; ind < mainArrToPlain.length; ind++) {
	    mainArrToPlain[ind] = flattenObj(mainArrToPlain[ind]);
            //фильтруем по каждой группе
            if (!arr_templ.includes(mainArrToPlain[ind].base+mainArrToPlain[ind].kind) && (current_gr_name.toLowerCase() === mainArrToPlain[ind].kind.toLowerCase() || (current_gr_name.toLowerCase() === "Без группы" && mainArrToPlain[ind].kind === ""))) {
		let trr = document.createElement('tr');
                tbody.append(trr);
		for(let indTd = 0; indTd < titles.length; indTd++) {
                	let tdt_cell = document.createElement('td');
			if(mainArrToPlain[ind][`${titles[indTd].place}`] === "" || mainArrToPlain[ind][`${titles[indTd].place}`] === undefined) {
				tdt_cell.innerHTML = "—";
			} else {
				tdt_cell.innerHTML = mainArrToPlain[ind][`${titles[indTd].place}`];
			}
			trr.append(tdt_cell);
		}
		arr_templ.push(mainArrToPlain[ind].base+mainArrToPlain[ind].kind);
            }
        }
    }
} 
createTable();

//Отключение подсказки при скроле ниже таблицы
window.addEventListener("scroll", function() {
    let tableEndPos = tableСontent.offsetTop + tableСontent.clientTop + tableСontent.offsetHeight - window.innerHeight;
    let divPos = window.scrollY;
    if (divPos >= tableEndPos) {
        div.style.transition = 'all 0.2s';
        div.style.visibility = 'hidden';
        div.style.opacity = "0";
    } else {
        div.style.transition = 'all 0.2s';
        div.style.visibility = 'visible';
        div.style.opacity = "85";
    }
});

//Notice
function showNotes() {
    if (mainArr[0].notice && !showNotesFlag) {
			div.innerHTML = '<b>Заметка: </b>' + mainArr[0].notice;
			div.style.position = 'fixed';
			div.style.bottom = '0';
			div.style.left = '0';
			div.style.width = '100%';
			div.style.backgroundColor = '#0f5132';
			div.style.opacity = '0.95';
			div.style.color = 'white';
			div.style.padding = '12px';
			div.style.display = 'block';
			div.style.zIndex = '998';
			div.classList.add("box");
			tableСontent.before(div);
			showNotesFlag = true;
    }
}

//ПОИСК

//ВЫДЕЛЕНИЕ СТРОК ТАБЛИЦЫ
const table_verbs = document.getElementById('table_verbs');
let tableBody = table_verbs.getElementsByTagName("tbody");
let tableR = table_verbs.getElementsByTagName("tr");
let tBodySign = [];

function illum() {
	// Подсвечивание и добавление таблиц
	for (tBodyNumber = 0; tBodyNumber < tableBody.length; tBodyNumber++) {
		let tBodyRows = tableBody[tBodyNumber].getElementsByTagName("tr");
		let tBodyHeader = tableBody[tBodyNumber].querySelector("th");
		for (tBodyRowNumber = 0; tBodyRowNumber < tBodyRows.length; tBodyRowNumber++) {
			let tBodyRowCells = tBodyRows[tBodyRowNumber].getElementsByTagName("td");
			for (tBodyRowCellNumber = 0; tBodyRowCellNumber < tBodyRowCells.length; tBodyRowCellNumber++) {
				let cellText = tBodyRowCells[tBodyRowCellNumber].innerText.toLowerCase();
				let tBodyHeader = tableBody[tBodyNumber].getElementsByTagName("th")[0];
				let tBodyHeaderText = tBodyHeader.innerHTML.toLowerCase();
				if(mainArr.length) {
					let qwKind = mainArr[0].kind.toLowerCase();
					let qwBase = mainArr[0].base.toLowerCase();
					//Берем иннерХТМЛ вместо ИннерТекст
					if (cellText === qwBase && tBodyHeaderText === qwKind) {
						if (fromHintButton) {
							tBodyRows[tBodyRowNumber].classList.add("orange_row");
						}
					}
				}
				tableBody[tBodyNumber].classList.add("is_table");
        tableBody[tBodyNumber].classList.remove("none_table");
			}
		}
	}
	// Удаление таблиц
	for (tBodyNumber = 0; tBodyNumber < tableBody.length; tBodyNumber++) {
		let tBodyHeader = tableBody[tBodyNumber].getElementsByTagName("th")[0];
		//Берем иннерХТМЛ вместо ИннерТекст
		let tBodyHeaderText = tBodyHeader.innerHTML.toLowerCase();
		if (!checkedKind.includes("все") && !checkedKind.includes(tBodyHeaderText)) {
            		tableBody[tBodyNumber].classList.add("none_table");
            		tableBody[tBodyNumber].classList.remove("is_table");
		}
	}
}

function illum_off(a){
    if (!a) {
    	for (index = 0; index < tableBody.length; index++) {
        	tableBody[index].classList.add("is_table");
        	tableBody[index].classList.remove("none_table");
    	}
    }
    for (i = 0; i < tableR.length; i++) {
        tableR[i].style.backgroundColor = "#ebebeb";
        tableR[i].classList.remove("orange_row");
    }
}

//Плавное изменение длины окна при изменении длины строки вопроса.
let prev_fieldHeight = qw_text.parentNode.clientHeight;
qw_text.parentNode.style.transition = "all .3s";
let new_fieldHeight = qw_text.clientHeight;
qw_text.parentNode.style.height = prev_fieldHeight + "px";
qw_text.parentNode.style.marginBottom = 12 + "px";

function qw_textChangeHeight() {
    new_fieldHeight = qw_text.clientHeight;
    let diff = prev_fieldHeight - new_fieldHeight;
    if (diff<0) {
        qw_text.parentNode.style.marginBottom = Math.abs(12 + -diff) + "px";
    } else if (diff>0) {
        qw_text.parentNode.style.marginBottom = -diff + "px";
    } else {
        qw_text.parentNode.style.marginBottom = 12 + "px";
    }
}

//Подсветка рубрик без вопросов
function topicZShow() {
	for (let y = 0; y < optAll.length; y++) {
		let flag = false;
		for (let i = 0; i < mainArrsinSort.length; i++) {
			if (optAll[y].innerHTML.toLowerCase() === mainArrsinSort[i].kind.toLowerCase() || optAll[y].innerText.slice(0,3).toLowerCase() === "все") {
				flag = true;
				optAll[y].style.color = "black";
			}
		}
		if (!flag) {
			optAll[y].style.color = "#7f7f7f";
		}
	}
}

//Одноуровневый объект
function flattenObj(ob) {
	let result = {};
	for (const i in ob) {
		if((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
			const temp = flattenObj(ob[i]);
			for (const j in temp) {
				result[j] = temp[j];
			}
		} else {
			result[i] = ob[i];
		}
	}
	return result;
}

//Данные по клику на строку

let indTable = false;
let stopSwipeL = false;
let stopSwipeR = false;
let newMainDivObj = document.createElement('div');
let newMainDiv = document.createElement('div');
let newCrossDiv = document.createElement('button');
newCrossDiv.innerHTML = "<b>X</b>";
newCrossDiv.classList.add("forJsTrainerButton");
let eEx = undefined;
table.after(newMainDivObj);
newMainDivObj.append(newMainDiv);
newMainDivObj.classList.add('fromJSTrainerNewMainDivObj');
let hwWidth = window.screen.width / 4;

table.addEventListener("click", function(e) {
  eEx = e.target.parentNode;

  if(!indTable){
    if(e.target.parentNode.parentNode.tagName === "TBODY" && e.target.tagName === "TD"){
		let numberPresentTarget = Array.from(table.querySelectorAll("tr")).indexOf(eEx);
  
  		if(eEx.previousSibling.previousSibling !== null) {
			stopSwipeL = false;
  		} else {
			stopSwipeL = true;
  		}
  		if(eEx.nextSibling !== null) {
			stopSwipeR = false;
  		} else {
			stopSwipeR = true;
  		}
		newMainDiv.innerHTML = '';
		document.getElementById("back_navbar").classList.add("fromJsTrainerToBackNavbar");
		document.querySelector(".header").classList.add("fromJsTrainerToBackNavbar");
		document.querySelector("#toTop").classList.add("fromJsTrainerToBackNavbar");
		document.querySelector(".offers").style.position = "static";
		document.querySelector(".offers").style.zIndex = "0";
		indTable = true;
		newMainDivObj.style.display = "block";
		let eTargText = e.target.parentNode.innerText.trim();
		let firstTableWord = eTargText.split("\t")[0];
		let firstTableWordCaps = firstTableWord[0].toUpperCase() + firstTableWord.slice(1);
		let newFlDiv = document.createElement('div');
		let newH = document.createElement('div');
		newH.classList.add("forJsTrainernNewH");
		newH.innerHTML = '<h2>' + firstTableWordCaps + '</h2>' + ' <span class="spanTransl">(' + eTargText.split("\t")[eTargText.split("\t").length - 1] + ')</span>';
		if (paramGlobal.includes('firstTransl')) {
			newH.innerHTML = '<h2>' + firstTableWordCaps + '</h2>' + ' <span class="spanTransl">(' + eTargText.split("\t")[eTargText.split("\t").length - 2] + ')</span>';
		}
		newFlDiv.classList.add("forJsTrainernNewFlDiv");
		newMainDiv.classList.add("forJsTrainernNewMainDiv");
		newMainDiv.append(newH);
		newMainDiv.append(newFlDiv);
		newMainDiv.append(newCrossDiv);
		document.querySelector('body').style.overflowY = 'hidden';

		let newArrThis = Array.from(globalArray);
		let countFill = 0;
		for (let i = 0; i < newArrThis.length; i++) {
			let newInDiv = document.createElement('div');
			newInDiv.style.position = 'relative';
			let newInPCount = document.createElement('p');
			newInPCount.style.position = 'absolute';
			newInPCount.style.top = "0";
			newInPCount.style.left = '0';
			newInPCount.style.padding = '3px 6px';
			newInDiv.classList.add("forJsTrainernNewInDiv");
			if (newArrThis[i].base === "" || newArrThis[i].base === undefined) {
				newArrThis[i].base = newArrThis[i].word;
			}
			if (firstTableWord.toLowerCase().trim() === globalArray[i].base.toLowerCase().trim() && (e.target.parentNode.parentNode.querySelector('th').innerText.toLowerCase() === newArrThis[i].kind.toLowerCase() || paramGlobal.includes("withoutKind"))) {
				countFill++;
				newFlDiv.append(newInDiv);
				let groupsArrbKeys = Object.keys(globalArray[i].groups);
				newInPCount.innerHTML = countFill + ".";
				newInDiv.append(newInPCount);
				newInDiv.innerHTML += '<div style="text-align:center">' + '<strong>' + globalArray[i].word + '</strong></div>';
				if (globalArray[i].translation) {
					newInDiv.innerHTML += '<span class="spanTransl">(' + globalArray[i].translation.trim() + ')</span>';
				}
				if (groupsArrbKeys.length !== 0) {
					newInDiv.innerHTML += '<hr class="forJsTrainernNewHr">';
				}
				for (let u = 0; u < groupsArrbKeys.length; u++) {
					newInDiv.innerHTML += '<p style="text-align:center">' + globalArray[i].groups[`${groupsArrbKeys[u]}`] + '</p>';

				}
			}
			
		}
		if (countFill < 4) {
			let allDivSet = newFlDiv.querySelectorAll(":scope > div");
			newFlDiv.style.flexDirection = "column";
			for (let i = 0; i < allDivSet.length; i++) {
				allDivSet[i].style.width = "auto";
			}
		} else if (countFill === 24) {
			let allDivSet = newFlDiv.querySelectorAll(":scope > div");
			for (let i = 0; i < allDivSet.length; i++) {
				allDivSet[i].style.width = "50%";
			}
		} else if (countFill === 6 || countFill === 9 || countFill > 17) {
			let allDivSet = newFlDiv.querySelectorAll(":scope > div");
			for (let i = 0; i < allDivSet.length; i++) {
				allDivSet[i].style.width = "33.3%";
			}
		}
		if (countFill === 0) {
			let newInDiv = document.createElement('div');
			newInDiv.classList.add("forJsTrainernNewInDiv");
			newFlDiv.append(newInDiv);
			newFlDiv.style.flexDirection = "column";
			newInDiv.innerHTML += '<span class="spanTransl">' + 'Нет информации' + '</span>';
			newInDiv.style.width = "100%";
		}
		if (paramGlobal.includes("unicSortforAllVerbs") && countFill > 30) {
			let allDivSet = newFlDiv.querySelectorAll(":scope > div");
			let counterX = 1;
			for (let i = 0; i < allDivSet.length; i++) {
				allDivSet[i].style.width = "33.3%";
				if(i>65) allDivSet[i].style.width = "50%";
				if(i===70) allDivSet[i].style.width = "100%";
				if(counterX < 7 || i===70) {
					allDivSet[i].style.backgroundColor = "#00000026";
				} else {
					allDivSet[i].style.backgroundColor = "#19875400";
				}
				counterX++;
				if(counterX === 13) {
					counterX = 1;
				}
			}

		}
    }
  } 

})

function handlerCrossClick() {
	if (indTable) {
		document.getElementById("back_navbar").classList.remove("fromJsTrainerToBackNavbar");
		document.querySelector(".header").classList.remove("fromJsTrainerToBackNavbar");
		document.querySelector("#toTop").classList.remove("fromJsTrainerToBackNavbar");
		document.querySelector(".offers").style.position = "relative";
		document.querySelector(".offers").style.zIndex = "100";
		indTable = false;
		newMainDivObj.style.display = "none";
		document.querySelector('body').style.overflowY = 'auto';
	}
}

newCrossDiv.addEventListener("click", handlerCrossClick);
document.addEventListener("click", function(e) {
	if (indTable && e.target === newMainDivObj) {
		document.getElementById("back_navbar").classList.remove("fromJsTrainerToBackNavbar");
		document.querySelector(".header").classList.remove("fromJsTrainerToBackNavbar");
		document.querySelector("#toTop").classList.remove("fromJsTrainerToBackNavbar");
		document.querySelector(".offers").style.position = "relative";
		document.querySelector(".offers").style.zIndex = "100";
		indTable = false;
		newMainDivObj.style.display = "none";
		document.querySelector('body').style.overflowY = 'auto';
	}
})
let newCrossDivFlag = true;
function createFlexWord(key) {
  let numKey = 0;
  let numberPresentTarget = Array.from(table.querySelectorAll("tr")).indexOf(eEx);
  if(key === "ArrowUp" && eEx.previousSibling.previousSibling !== null) {
	numKey = -1;
	stopSwipeL = true;
  } else {
	stopSwipeL = false;
  }
  if(key === "ArrowDown" && eEx.nextSibling !== null) {
	numKey = 1;
	stopSwipeR = false;
  } else {
	stopSwipeR = true;
  }

  if(numKey !== 0) {
       eEx = table.querySelectorAll("tr")[numberPresentTarget + numKey];
		newMainDiv.innerHTML = '';
		document.getElementById("back_navbar").classList.add("fromJsTrainerToBackNavbar");
		document.querySelector(".header").classList.add("fromJsTrainerToBackNavbar");
		document.querySelector("#toTop").classList.add("fromJsTrainerToBackNavbar");
		document.querySelector(".offers").style.position = "static";
		document.querySelector(".offers").style.zIndex = "0";
		indTable = true;
		newMainDiv.style.display = "block";
		let eTargText = eEx.innerText.trim();
		let firstTableWord = eTargText.split("\t")[0];
		let firstTableWordCaps = firstTableWord[0].toUpperCase() + firstTableWord.slice(1);
		let newFlDiv = document.createElement('div');
		let newH = document.createElement('div');
		newH.classList.add("forJsTrainernNewH");
		newH.innerHTML = '';
		newH.innerHTML = '<h2>' + firstTableWordCaps + '</h2>' + ' <span class="spanTransl">(' + eTargText.split("\t")[eTargText.split("\t").length - 1] + ')</span>';
		if (paramGlobal.includes('firstTransl')) {
			newH.innerHTML = '<h2>' + firstTableWordCaps + '</h2>' + ' <span class="spanTransl">(' + eTargText.split("\t")[eTargText.split("\t").length - 2] + ')</span>';
		}
		newFlDiv.classList.add("forJsTrainernNewFlDiv");
		newMainDiv.classList.add("forJsTrainernNewMainDiv");
		newMainDiv.innerHTML = "";
		newMainDiv.append(newH);
		newMainDiv.append(newFlDiv);
		newMainDiv.append(newCrossDiv);
		newCrossDiv.classList.add("forJsTrainerButton");
		document.querySelector('body').style.overflowY = 'hidden';

		let newArrThis = Array.from(globalArray);
		let countFill = 0;
		for (let i = 0; i < newArrThis.length; i++) {
			let newInDiv = document.createElement('div');
			newInDiv.style.position = 'relative';
			let newInPCount = document.createElement('p');
			newInPCount.style.position = 'absolute';
			newInPCount.style.top = "0";
			newInPCount.style.left = '0';
			newInPCount.style.padding = '3px 6px';
			newInDiv.classList.add("forJsTrainernNewInDiv");
			if (newArrThis[i].base === "" || newArrThis[i].base === undefined) {
				newArrThis[i].base = newArrThis[i].word;
			}
			if (firstTableWord.toLowerCase().trim() === globalArray[i].base.toLowerCase().trim() && (eEx.parentNode.querySelector('th').innerText.toLowerCase() === newArrThis[i].kind.toLowerCase() || paramGlobal.includes("withoutKind"))) {
				countFill++;
				newFlDiv.append(newInDiv);
				let groupsArrbKeys = Object.keys(globalArray[i].groups);
				newInDiv.innerHTML = '';
				newInPCount.innerHTML = countFill + ".";
				newInDiv.append(newInPCount);
				newInDiv.innerHTML += '<div style="text-align:center">' + '<strong>' + globalArray[i].word + '</strong></div>';
				if (globalArray[i].translation) {
					newInDiv.innerHTML += '<span class="spanTransl">(' + globalArray[i].translation.trim() + ')</span>';
				}
				if (groupsArrbKeys.length !== 0) {
					newInDiv.innerHTML += '<hr class="forJsTrainernNewHr">';
				}
				for (let u = 0; u < groupsArrbKeys.length; u++) {
					newInDiv.innerHTML += '<p style="text-align:center">' + globalArray[i].groups[`${groupsArrbKeys[u]}`] + '</p>';
				}
			}
			
		}
		if (countFill < 4) {
			let allDivSet = newFlDiv.querySelectorAll(":scope > div");
			newFlDiv.style.flexDirection = "column";
			for (let i = 0; i < allDivSet.length; i++) {
				allDivSet[i].style.width = "auto";
			}
		}
		if (countFill === 6 || countFill === 9) {
			let allDivSet = newFlDiv.querySelectorAll(":scope > div");
			for (let i = 0; i < allDivSet.length; i++) {
				allDivSet[i].style.width = "33.3%";
			}
		}
		if (countFill === 0) {
			let newInDiv = document.createElement('div');
			newInDiv.classList.add("forJsTrainernNewInDiv");
			newFlDiv.append(newInDiv);
			newFlDiv.style.flexDirection = "column";
			newInDiv.innerHTML += '<span class="spanTransl">' + 'Нет информации' + '</span>';
			newInDiv.style.width = "100%";
		}
		if (paramGlobal.includes("unicSortforAllVerbs") && countFill > 30) {
			let allDivSet = newFlDiv.querySelectorAll(":scope > div");
			let counterX = 1;
			for (let i = 0; i < allDivSet.length; i++) {
				allDivSet[i].style.width = "33.3%";
				if(i>65) allDivSet[i].style.width = "50%";
				if(i===70) allDivSet[i].style.width = "100%";
				if(counterX < 7 || i===70) {
					allDivSet[i].style.backgroundColor = "#00000026";
				} else {
					allDivSet[i].style.backgroundColor = "#19875400";
				}
				counterX++;
				if(counterX === 13) {
					counterX = 1;
				}
			}

		}
       } else {
		stopSwipe = true;
	}
}
let straightFlag = true;
newMainDivObj.addEventListener("scroll", function(e) {
	if (newMainDivObj.scrollTop > 100 && newCrossDivFlag) {
		newCrossDivFlag = false;
		newCrossDiv.classList.add("forJsTrainerButtonBefAppear");
		setTimeout(() => {
			newCrossDiv.classList.add("forJsTrainerButtonAppear");
		}, 500);
	}
	if (newMainDivObj.scrollTop === 0) {
		newCrossDiv.classList.remove("forJsTrainerButtonBefAppear");
		newCrossDiv.classList.remove("forJsTrainerButtonAppear");
		setTimeout(() => {
			newCrossDiv.classList.remove("forJsTrainerButtonAppear");
		}, 500);
		newCrossDivFlag = true;
	}
})

document.addEventListener("keydown", function(e){
	if(indTable) {
		if(e.key === "ArrowLeft") {
			createFlexWord("ArrowUp");
		}
		if(e.key === "ArrowRight") {
			createFlexWord("ArrowDown");
		}
		if(e.key === "Enter" || e.key === "Backspace") {
			handlerCrossClick();
		}
	}
})

let xTouch = null;
let x2Touch = null;
let yTouch = null;
let y2Touch = null;

document.addEventListener('touchstart', handlerTouchStart);
document.addEventListener('touchend', handlerTouchEnd);
document.addEventListener('touchmove', handlerTouchMove);

function handlerTouchStart(e) {
	if(indTable) {
        	if(eEx.previousSibling.previousSibling !== null) {
			stopSwipeL = false;
  		} else {
			stopSwipeL = true;
  		}
  		if(eEx.nextSibling !== null) {
			stopSwipeR = false;
  		} else {
			stopSwipeR = true;
  		}

		let firstTouch = e.touches[0];
		xTouch = firstTouch.clientX;
		yTouch = firstTouch.clientY;
	}
}

function handlerTouchEnd(e) {
	newMainDivObj.style.overflow = 'auto';
	if(indTable) {
		if (!xTouch) return false;
		let lastTouch = e.changedTouches[0];
		x2Touch = lastTouch.clientX;
		y2Touch = lastTouch.clientY;
		if (Math.abs(x2Touch - xTouch) < hwWidth && (!stopSwipeL || !stopSwipeR)) {
			newMainDiv.style.left = '0px';
			newMainDiv.style.transition = "all .2s";
		} else if (x2Touch - xTouch < 0 && !stopSwipeR) {
			newMainDiv.style.left = -hwWidth*2 + 'px';
			newMainDiv.style.opacity = '0';
			setTimeout(()=>{
				newMainDiv.style.left = hwWidth*2 + 'px';
				setTimeout(()=>{
					newMainDiv.style.opacity = '1';
					createFlexWord("ArrowDown");
					newMainDiv.style.left = '0px';
				}, 100);
			}, 200)
			newMainDiv.style.transition = "all .2s";
		} else if (x2Touch - xTouch >= 0 && !stopSwipeL) {
			newMainDiv.style.left = hwWidth*2 + 'px';
			newMainDiv.style.opacity = '0';
			setTimeout(()=>{
				newMainDiv.style.left = -hwWidth*2 + 'px';
				setTimeout(()=>{
					newMainDiv.style.opacity = '1';
					createFlexWord("ArrowUp");
					newMainDiv.style.left = '0px';
				}, 100);
			}, 200);
			newMainDiv.style.transition = "all .2s";
		} else {
			newMainDiv.style.left = '0px';
			newMainDiv.style.transition = "all .2s";
		}
	}
}

function handlerTouchMove(e) {
	let newCoordX = e.changedTouches[0].clientX;
	let newCoordY = e.changedTouches[0].clientY;
	if (indTable && Math.abs(newCoordX - xTouch) > 15){
		newMainDivObj.style.overflow = 'hidden';
		if (newCoordX - xTouch > 0 && !stopSwipeL) {
			newMainDiv.style.left = newCoordX - xTouch + 'px';
		} else if (newCoordX - xTouch > 0 && stopSwipeL && newCoordX - xTouch < hwWidth/5) {
			newMainDiv.style.left = newCoordX - xTouch + 'px';
		}
		if(newCoordX - xTouch <= 0 && !stopSwipeR){
			newMainDiv.style.left = newCoordX - xTouch + 'px';
		} else if (newCoordX - xTouch <= 0 && stopSwipeR && newCoordX - xTouch > -hwWidth/5) {
			newMainDiv.style.left = newCoordX - xTouch + 'px';
		}
	} else {
		newMainDivObj.style.overflow = 'auto';
	}
}

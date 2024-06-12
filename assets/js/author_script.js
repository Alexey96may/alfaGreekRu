//настройка просмотров

let topicsArr = '';
if (document.querySelectorAll('.all_topics')) {
    topicsArr = document.querySelectorAll('.all_topics');
} else {
    topicsArr = document.createElement('div');
    topicsArr.classList.add('all_topics');
}

function auisVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return bottomVisible;
}

function auisItInCache(e) {
    let thisURLPage = 'AuthorTopic' + window.location.hostname + window.location.pathname;
    if (!window.localStorage[thisURLPage]) {
        window.localStorage[thisURLPage] = JSON.stringify(arrViewedTopic);
        return true;
    } else {
        let fromJsonCache = JSON.parse(window.localStorage[thisURLPage]);
        if (!fromJsonCache.includes(e)) {
            fromJsonCache.push(e);
            window.localStorage[thisURLPage] = JSON.stringify(fromJsonCache);
            return true;
        } else {
            return false;
        }

    }
}

let arrViewedTopic = [];
let url = '/wp-content/themes/alfa-greek/upload.php';

for (let i = 0; i < topicsArr.length; i++) {
    //вывод
    let auviewsCounter = topicsArr[i].querySelector('#stat_topic .views_counter');
    let aucountV = Number(auviewsCounter.innerText);
    if (aucountV >= 1000000) {
        auviewsCounter.innerText = (aucountV / 1000000).toFixed(0) + "М";
    } else if (aucountV >= 1000) {
        auviewsCounter.innerText = (aucountV / 1000).toFixed(0) + "К";
    } else {
        auviewsCounter.innerText = aucountV;
    }
}

document.addEventListener("scroll", () => {
        for (let i = 0; i < topicsArr.length; i++) {
            if (auisVisible(topicsArr[i]) && !arrViewedTopic.includes(topicsArr[i].getAttribute("name"))) {
                setTimeout(() => {
                    if (auisVisible(topicsArr[i]) && !arrViewedTopic.includes(topicsArr[i].getAttribute("name"))) {
                        arrViewedTopic.push(topicsArr[i].getAttribute("name"));
                        if (auisItInCache(topicsArr[i].getAttribute("name"))) {
                            fetch(url, {
                                method: 'POST',
                                headers: {
                                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
                                },
                                body: 'view=true&viewedTopic=' + topicsArr[i].getAttribute("name"),
                            }).then((res) => console.log(res.text));
                            //вывод
                            let auviewsCounter = topicsArr[i].querySelector('.views_counter');
                            let aucountV = Number(auviewsCounter.innerText);
                            if (isNaN(aucountV)) {
                                if (auviewsCounter.innerText.includes('К')) {
                                    aucountV = auviewsCounter.innerText.slice(0, -1) + '000';
                                } else {
                                    aucountV = auviewsCounter.innerText.slice(0, -1) + '000000';
                                }
                            }
                            if (aucountV >= 1000000) {
                                auviewsCounter.innerText = (aucountV / 1000000).toFixed(0) + "М";
                            } else if (aucountV >= 1000) {
                                auviewsCounter.innerText = (aucountV / 1000).toFixed(0) + "К";
                            } else {
                                auviewsCounter.innerText = aucountV + 1;
                            }
                        }
                    }
                }, 5000);
            }
        }
})

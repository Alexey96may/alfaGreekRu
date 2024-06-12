//настройка просмотров
let pagesArr = '';
if (document.getElementById('stat_page')) {
    pagesArr = document.getElementById('stat_page');
} else {
    pagesArr = document.createElement('div');
    pagesArr.id = 'stat_page';
    pagesArr.innerHTML = '<span class="views_counter">0</span>';
}
    function isItInCache(e) {
        if (!window.localStorage.pageViewered) {
            window.localStorage.pageViewered = JSON.stringify(arrViewedPages);
            return true;
        } else {
            let fromJsonCache = JSON.parse(window.localStorage.pageViewered);
            if (!fromJsonCache.includes(e)) {
                fromJsonCache.push(e);
                window.localStorage.pageViewered = JSON.stringify(fromJsonCache);
                return true;
            } else {
                return false;
            }
    
        }
    }
    let arrViewedPages = [];
    let urlToViewPages = '/wp-content/themes/alfa-greek/upload.php';

    //вывод
    let viewsCounter = pagesArr.querySelector('.views_counter');
    let countV = Number(viewsCounter.innerText);
    if (countV >= 1000000) {
        viewsCounter.innerText = (countV / 1000000).toFixed(0) + "М";
    } else if (countV >= 1000) {
        viewsCounter.innerText = (countV / 1000).toFixed(0) + "К";
    } else {
        viewsCounter.innerText = countV;
    }

    setTimeout(() => {
        if (!arrViewedPages.includes(pagesArr.getAttribute("name"))) {
            arrViewedPages.push(pagesArr.getAttribute("name"));
            if (isItInCache(pagesArr.getAttribute("name"))) {
                fetch(urlToViewPages, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
                    },
                    body: 'viewPage=true&viewedPage=' + pagesArr.getAttribute("name"),
                });
                
                //вывод
                let viewsCounter = pagesArr.querySelector('.views_counter');
                let countV = Number(viewsCounter.innerText);
                if (isNaN(countV)) {
                    if (viewsCounter.innerText.includes('К')) {
                        countV = viewsCounter.innerText.slice(0, -1) + '000';
                    } else {
                        countV = viewsCounter.innerText.slice(0, -1) + '000000';
                    }
                }
                if (countV >= 1000000) {
                    viewsCounter.innerText = (countV / 1000000).toFixed(0) + "М";
                } else if (countV >= 1000) {
                    viewsCounter.innerText = (countV / 1000).toFixed(0) + "К";
                } else {
                    viewsCounter.innerText = countV + 1;
                }
            }
        }
    }, 10000);

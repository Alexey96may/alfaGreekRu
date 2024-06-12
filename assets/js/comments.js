let comments_number = 0;

function inputOnSbm() {
    comment_former();
    return false;
}

function comment_former() {
    let name_user = document.getElementById('user_name').value;
    let comment_user = document.getElementById('comment_text').value;
    let date_user = new Date().toLocaleString();
    let target_comment = document.getElementById('target_comment');

    if ((name_user != '') && (comment_user != '')) {

    let new_comment = `<section class="created_comment">
        <hr class="hr_comment">
        <div class="container_comment_flex">
            <div class="container_persona_flex">
                <div class="cont_user_name"><h4>${name_user}</h4></div>
                <div class="cont_user_data"><h6>${date_user}</h6></div>
                <div class="avatar_container">
                    <img src="images/button2.png" alt="foto">
                </div>
            </div>
            <div class="comment_container"><p>${comment_user}</p></div>
        </div>
    </section>`;

    target_comment.insertAdjacentHTML('afterEnd', new_comment);
    document.getElementById('user_name').value = '';
    document.getElementById('comment_text').value = '';
    comments_number += 1;
    document.getElementById('score').innerHTML = comments_number;

    } else {
        alert("Пожалуйста, введите Ваше имя и комментарий!");
    }
}
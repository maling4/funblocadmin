$(document).ready(function() {
    /*-li active-*/
    let activecate = 'cate' + sessionStorage.getItem('sidebar');

    document.getElementById(activecate).classList.add('active');


    var obj = get_user_id();

    console.log(obj);


    /*-show name & id-*/
    $('.name-id').html(obj);
});

function check_user() {

}

function get_user_id() {
    var log = ajax(0, '0.0.1');
    return log[0];
}
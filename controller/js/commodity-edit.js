$(document).ready(function() {
    set_table();
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function set_table() {

    let obj = {
        ':gid': urlParams.get('id'),
    }

    let arr = ajax(obj, '1.6.2');
    console.log(arr);


}

function ceditsend() {
    let obj = {
        //':m_id': urlParams.get('id'),
        ':m_id': $('#cname'),
        ':class': $('#class').children('input').val(),
        ':gname': $('#pname').children('input').val(),
        ':ver': $('#type').children('input').val(),
        ':matdate': $('#enddate').children('input').val(),
        ':themosphere': $('#deli').children('input').val(),
        ':place': $('#from').children('input').val(),
        ':img_path': $('#img_path').children('input').val(),
        ':stock': $('#qnt').children('input').val(),
        ':dextxt': $('#ptxt').children('input').val(),
    }
    console.log(obj);
    ajax(obj, '2.6.4');
    //set_table();
}
$(document).ready(function() {
    set_table();
});

function set_table() {

    var arr = ajax(0, '1.6.1');


    for (let i = 0; i < arr.length; i++) {
        temp = $($('template').html()).clone();
        temp.find('#pid').html(arr[i]['gid']);
        temp.find('#cname').html(arr[i]['m_name']);
        temp.find('#pname').html(arr[i]['gname']);
        temp.find('#type').html(arr[i]['ver']);
        if (arr[i]['g_status'] == 0)
            temp.find('#status').html('<a id="green"><i class="fa-solid fa-check"></i> 下架中</a>');
        else if (arr[i]['g_status'] == 1)
            temp.find('#status').html('<a id="green"><i class="fa-solid fa-check"></i> 上架中</a>');
        else if (arr[i]['g_status'] == 2)
            temp.find('#status').html('<a id="green"><i class="fa-solid fa-check"></i> 暫停販售</a>');
        temp.find('#cost').html(arr[i]['p_imprice']);
        temp.find('#sale').html(arr[i]['p_offprice']);
        temp.find('#check').html(`<a class="btn btn-success rounded-pill mb-1" href="hawker_detail.html?id=${arr[i]['']}">查看</a>`);

        $('tbody').append(temp);
    }

}
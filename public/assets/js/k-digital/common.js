var modal = (function(){
	
    var modalPop = $('.evt-modal_pop');
    var date = new Date();

    cookiedata = document.cookie;

    if(date && cookiedata.indexOf('modalCookie=done') < 0){
        modalPop.show();
    } else {
        modalPop.hide();
    }

    return {
        close: function(){
            modalPop.fadeOut();
        },
        open: function() {
            modalPop.fadeIn();
        }
    }

})();


function setCookie(name, value, expiredays){
    var todaydate = new Date();
    todaydate.setDate(todaydate.getDate() +  expiredays);

    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todaydate.toGMTString() + ";"
}

$('#layerPopClose_D1').on('click', function(){
    setCookie('modalCookie', 'done', 1);
    modal.close();
});

$('.modal_closeBtn').on('click', function(){
    modal.close();
});

$(window).on('click', function(e){
 
    var modalContainer = document.querySelector('.evt-modal_pop');
    e.target == modalContainer ? modal.close() : false;
    
});
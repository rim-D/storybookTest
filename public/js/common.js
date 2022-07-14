"use strict";

/**
 * 객체가 있는지 없는지 체크
 * @param obj
 * @returns {boolean}
 */
function empty(obj) {
    if( typeof(obj) != 'undefined' && obj != null && obj != '' ) {
        return false;
    }
    else {
        return true;
    }
}//end of empty()

/**
 * 고유한 문자열 생성
 * @returns {string}
 */
function create_uniqid() {
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now();; //use high-precision timer if available
    }
    var uid = 'xxxxyxxxxyxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uid;
}//end of create_uniqid()

//================== 날짜 관련
Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
};

function get_ymd(div,date) {
    if(date == '' || date == undefined) var date = new Date();
    if( empty(div) ) {
        div = '-';
    }
    return [date.getFullYear(), (date.getMonth()+1).padLeft(), date.getDate().padLeft()].join(div);
}


/**
 * 숫자만
 * @param str
 * @returns {*}
 */
function number_only(str) {
    if( empty(str) ) {
        return '';
    }
    return str.replace(/[^0-9]/gi, "");
}//end of number_only()


function setTableLoader(obj){
    let html  = '<div class="w-100 h-100 text-center zs-table-loader">';
        html += '   <div class="w-100 h-100 bg-white"></div>';
        html += '   <i class="fas fa-3x fa-sync-alt fa-spin"></i><br>';
        html += '   <span class="text-black d-block mt-3">불러오는 중입니다</span>';
        html += '</div>';
    $(obj).append(html);
}

//document.ready
$(function(){

    // 숫자만 입력받음
    $(document).on('keypress keyup', 'input[type="text"][numberOnly],input[type="tel"][numberOnly]', function(e) {
        //한글이 안 됨.
        // if ( (e.charCode != 13) && (e.charCode <= 47 || e.charCode >= 58) ) {
        //     e.returnValue = false;
        //     return false ;
        // }

        // $(this).val($(this).val().replace(/[^0-9]/gi, ""));
        $(this).val(number_only($(this).val()));
    });

    //입력 최대글자수 체크
    $(document).on('keypress keyup', 'input[type="text"][maxlenthCheck],input[type="tel"][maxlenthCheck],input[type="number"][maxlenthCheck]', function(e) {

        var max = $(this).attr('maxlength');
        if( !max ) {
            return true;
        }

        var len = $(this).val().length;

        if( len >= max ) {
            /* *
             * @date180309 황기석
             * @desc 모바일에서 처리안됨에 따라 아래 구문 추가
             * */
            this.value = this.value.slice(0, max);
            e.preventDefault();
            return false;
        }
    });

});

$(document).on('click','a[href="#none"],a[href="#"]',function(e){
    e.preventDefault();
    return false;
});

function go_home(){
    location.href = '/';
}

function FileChk(obj){

    if(obj.val() != ''){
        var file_size = obj[0]['files'][0]['size'];
        var size_mb = (file_size / 1024) / 1024;
        if(size_mb >= 10){
            alert('첩부파일은 10메가 미만 파일만 업로드가 가능합니다.');
            obj.val('');
            return false;
        }else{
            return true;
        }
    }else{
        return true;
    }

}


//desc http://daplus.net/javascript-%EC%9E%90%EB%B0%94-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%B4-url%EC%9D%B8%EC%A7%80-%ED%99%95%EC%9D%B8/
function validURL(str) {

    try {
        new URL(str);
    }catch (e){
        return false;
    }
    
    return true;
    // var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    //     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    //     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    //     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    //     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    //     '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    // return !!pattern.test(str);
}

//이메일 유효성검사
//desc https://www.thewordcracker.com/jquery-examples/email-validation-javascript/
function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function getCookie(name) {
    var lastChrCookie;
    var cookieName = name + "=";
    var x = 0;
    while ( x <= document.cookie.length ) {
        var y = (x+cookieName.length);
        if ( document.cookie.substring( x, y ) == cookieName) {
            if ((lastChrCookie=document.cookie.indexOf(";", y)) == -1)
                lastChrCookie = document.cookie.length;
            return decodeURI(document.cookie.substring(y, lastChrCookie));
        }
        x = document.cookie.indexOf(" ", x ) + 1;
        if ( x == 0 )
            break;
    }
    return "";
}

function setCookie(cname, value, expire) {
    var todayValue = new Date();
    // 오늘 날짜를 변수에 저장

    todayValue.setDate(todayValue.getDate() + expire);
    document.cookie = cname + "=" + encodeURI(value) + "; expires=" + todayValue.toGMTString() + "; path=/;";
}
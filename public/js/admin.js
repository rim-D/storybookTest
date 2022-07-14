"use strict";

//modal > modal 창이 열렸을 경우 body가 fixed되는 버그수정
$(document).on('hidden.bs.modal','.modal.note-modal', function() {
    if( $('body').hasClass('modal-open') == false ) $('body').addClass('modal-open');
});

//document.ready
$(function(){

    //datePicker
    $.datepicker.setDefaults({
        dateFormat: 'yymmdd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });

    //dateRangePicker
    let dateRangePickerObject = $('#dateRangePicker');
    if(dateRangePickerObject.length > 0){
        moment.locale('ko'); //언어를 한국어로 설정함!
        dateRangePickerObject.daterangepicker({
            autoUpdateInput: false,
            locale :{
                format: 'YYYY.MM.DD',
                separator: '~',
                applyLabel: "적용",
                cancelLabel: "닫기"
            }
        });
        dateRangePickerObject.on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('YYYY.MM.DD') + '~' + picker.endDate.format('YYYY.MM.DD'));
        });
        dateRangePickerObject.on('cancel.daterangepicker', function() {
            $(this).val('');
        });
    }

});

//이미지보기
$(document).on('click','.goViewImg',function(){
    let src = $(this).attr('src');
    if(typeof src !== 'undefined'){
        window.open(src , '_blank' , 'viewImages' )
    }
});

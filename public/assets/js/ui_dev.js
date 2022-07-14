$(window).on('click', function (e) { 

  if($(e.target).hasClass('modal_pop')){
    $('.modal_pop').fadeOut();
    $('html').css('overflow','auto');
  }
  
  if(!$(e.target).parent().hasClass('fnb_greetings') && !$(e.target).parent().hasClass('fnb_customer_center')){
    $('.fnb_list-depth2').css('display', 'none');
  }

  if(!$(e.target).hasClass('location_list_trigger') && !$(e.target).parent().hasClass('location_list_trigger')) {
    $('.location_list_option').css('display', 'none');
  }

  if(!$(e.target).hasClass('shortcut_relationship_btn') && !$(e.target).parent().hasClass('shortcut_relationship_btn')) {
    $('.shortcut_relationship_list').slideUp();
  }
  
});

//GNB - PC
$(document).on('mouseenter','.header_gnb .depth1 > li > a', function () {
  $('.header_gnb_depth2_bg ').stop().slideDown();
  $('.header_gnb .depth2 > ul').stop().slideDown();
});

$(document).on('mouseleave','.header_nav', function () {
  $('.header_gnb_depth2_bg ').stop().slideUp();
  $('.header_gnb .depth2 > ul').stop().slideUp();
});

// drawer-drop_down - mobile
$(document).on('click','.drawer-drop_down > li .drawer-drop_down_btn', function(){

  var $this = $(this);
  var $notThis = $('.drawer-drop_down_btn').not(this)

  $this.next().stop().slideToggle();

  $notThis.nextAll().slideUp();
  $notThis.removeClass('open');

  dropDownBtnArrow($this.hasClass('open'), $this);

});


$(function () {

  // drawer(open) - mobile
  $('.drawer-trigger').on('click', function(){
    $('.drawer').css('right', '0');
    $('html').css('overflow', 'hidden');
  });
  $('.drawer-close').on('click', function(){
    $('.drawer').css('right', '-100%');
    $('html').css('overflow', 'auto');
  });
  

  // 또오셨습니까 - 더보기
  $('.partners .btn_area').on('click', '.more_btn', function(){
    var $dropDownArrow = $(this).children();
    var $target = $('.partners_logos > table tbody + tbody');

    if($target.hasClass('partners_more_contants')){
      $target.removeClass('partners_more_contants');
    }else{
      $target.addClass('partners_more_contants');
    }
    dropDownBtnArrow($dropDownArrow.hasClass('open'), $dropDownArrow);
  });


  // SUB - location
  $('.location_list_trigger').on('click', function(){
    $('.location_list_option').stop().slideToggle();
  });

  
  // Footer - fnb
  $('.fnb_list-depth1').find('button').on('click', function(){

    var $this = $(this);

    $this.next().stop().slideToggle();
    $('.fnb_list-depth1 button').not($this).next().stop().slideUp();
    
  });

  

  // 패밀리 사이트 DropDown Menu
  $('.shortcut_relationship').on('click', '.shortcut_relationship_btn', function(){

    var $dropDownArrow = $(this).children();
    var $target = $(this).next();

    $target.slideToggle();
    dropDownBtnArrow($dropDownArrow.hasClass('open'), $dropDownArrow);

  });

  // 모달 - close
  $('.modal_pop').on('click', '.modal-close_btn', function(){

    $(this).closest('.modal_pop').fadeOut();
    $('html').css('overflow','auto');

  });

  //파일다운로드
  $('.download_file').on('click',function(e){
    e.preventDefault();

    let data = $(this).data();
    let uriQueryString = '';

    $.each(data,function(k,v){
      uriQueryString += '&'+k+'='+v;
    });

    if(empty(uriQueryString) == false) $('#hide_frame').attr('src','/common/download_file?'+uriQueryString);

  });

  //슬릭 초기화
  var $slider = $('.slides');

  if($slider.length > 0){
    $slider.on('init', function(){
      $slider.css({
        visibility: 'visible'
      });
    });
  }

  //이러닝 & 북러닝 slick
  if( $('.pd-slider').length > 0 ){
    setSilde($('.pd-slider'));
  }
  if( $('.pd_popular-slider').length > 0 ){
    setSilde($('.pd_popular-slider'));
  }
  //end of 이러닝 & 북러닝

  //메인 slick
  //메인 visual
  if( $('.main_visual_slides').length > 0 ){
    setSilde($('.main_visual_slides'));
  }

  //공지
  if( $(".main_notice-slider-slides").length > 0 ){
    setSilde($('.main_notice-slider-slides'));
  }

  //인기과정
  if($('.popular_edu-list_slides').length > 0){
    setPopularEduSlide();
  }
  //-- 메인

});

// 인기과정 리사이징시
$(window).on('resize', function() {
  setPopularEduSlide();
});

function setPopularEduSlide(){

  var $carousel = $('.popular_edu-list_slides');

  if($carousel.length > 0){
    if ($(window).width() > 1024) {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick');
      }
    }
    else{
      if (!$carousel.hasClass('slick-initialized')) {
        setSilde($carousel);
      }
    }

  }

}

function setSilde(obj){

  let val_obj = {};

  if(obj.hasClass('main_visual_slides') == true){

    val_obj = {
      autoplay: true,
      autoplaySpeed: 8000,
      pauseOnHover: true,
      dots: true,
      customPaging: function(slider, i) {
        return '<button type="button" class="main_paging-bullet"></button>'
      },
      arrows: true,
      appendArrows: $('.main_visual-btn'),
      prevArrow: $('.prev-main_btn'),
      nextArrow: $('.next-main_btn'),
    };

  }else if(obj.hasClass('main_notice-slider-slides') == true){

    val_obj = {
      infinite : true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.prev-btn'),
      nextArrow: $('.next-btn'),
    };

  }else if(obj.hasClass('popular_edu-list_slides') == true){

    val_obj = {
      speed: 200,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      customPaging: function(slider, i) {
        return '<button type="button" class="popular_paging-bullet"></button>'
      },
      mobileFirst: true,
    };

  }else if(obj.hasClass('pd-slider') == true){

    val_obj = {
      dots: true,
      autoplay: true,
      pauseOnHover : true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '28.15%',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '8%',
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: '20px',
          }
        },
      ]
    };
  }else if(obj.hasClass('pd_popular-slider') == true){
    val_obj = {
      infinite : true,
      arrows: true,
      prevArrow: $('.prev-btn'),
      nextArrow: $('.next-btn'),
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    };


  }

  if(empty(val_obj) == false) $(obj).slick(val_obj);

}


// 모달 - open
function openModal(target, prev){

  var currentTarget = $('#modal-'+ target); //현재 id값 
 
  if(currentTarget.length > 0) { // id값 유부 확인

    var privatepolicyInfoUrl = "https://open.alpaedu.co.kr/api/privatepolicyInfo.do";

    if(target === 'dt_makeup'){
      $('.modal_contant').scrollTop(0);
      currentTarget.closest('.modal_pop').fadeIn();
      $('html').css('overflow','hidden');
    };

    if(target === 'edu_enquiry'){

      $.ajax({
        url: "/customer_center/EduRequest",
        data: { popup : 'Y'},
        method: "get",
        dataType: "html",
        success: function (result) {
          currentTarget.find('.modal_contant').html(result)
        }
        , error:function(err){
          alert(err.responseJSON.message);
        }
      }).done(function(){
        $('.modal_contant').scrollTop(0);
        currentTarget.closest('.modal_pop').fadeIn();
        $('html').css('overflow','hidden');
      });

    }else if(target === 'privacy'){ //개인정보처리방침

      if(prev == false || prev == undefined){
        $.ajax({
          crossOrigin : true,
          url : privatepolicyInfoUrl,
          cache : false,
          dataType : 'jsonp',
          data : {
            p_bbs_id : 49,
            p_info_type: 'NEW'
          },
          success : function(data){
            if(!data.IsError){
              currentTarget.find('.modal_contant').html(data.SearchList.PST_CNTNT)
              .append( 
                '<button class="btn_primary -modal-prev_btn" type="button" onclick="openModal(\''+ target +'\', true)">이전 개인정보처리방침 보기</button>'
              )
            } else{
              alert("실패하였습니다.");
            }
          },
          error:function(){
            alert("실패하였습니다.");
          }
        }).done(function(){
          $('.modal_contant').scrollTop(0);
          currentTarget.closest('.modal_pop').fadeIn();
          $('html').css('overflow','hidden');
        });

      }else{


        $.ajax({
          crossOrigin : true,
          url : privatepolicyInfoUrl,
          cache : false,
          dataType : 'jsonp',
          data : {
            p_bbs_id : 49,
            p_info_type: 'PREV'
          },
          success : function(data){
            if(!data.IsError){
              currentTarget.find('.modal_contant').html(data.SearchList.PST_CNTNT)
            } else{
              alert("실패하였습니다.");
            }
          },
          error:function(){
            alert("실패하였습니다.");
          }
        }).done(function(){
          $('.modal_contant').scrollTop(0);
          currentTarget.closest('.modal_pop').fadeIn();
          $('html').css('overflow','hidden');
        });


      }

    }else if(target === 'terms_of_us'){ //이용약관

      if(prev == false || prev == undefined){
        $.ajax({
          crossOrigin : true,
          url : privatepolicyInfoUrl,
          cache : false,
          dataType : 'jsonp',
          data : {
            p_bbs_id : 50,
            p_info_type: 'NEW'
          },
          success : function(data){
            if(!data.IsError){
              currentTarget.find('.modal_contant').html(data.SearchList.PST_CNTNT)
              .append(
                  '<button class="btn_primary -modal-prev_btn" type="button" onclick="openModal(\''+ target +'\', true)">이전 이용약관 보기</button>'
              )
            }else{
              alert("실패하였습니다.");
            }
          },
          error:function(){
            alert("실패하였습니다.");
          }
        }).done(function(){
          $('.modal_contant').scrollTop(0);
          currentTarget.closest('.modal_pop').fadeIn();
          $('html').css('overflow','hidden');
        });

      }else{

        $.ajax({
          crossOrigin : true,
          url : privatepolicyInfoUrl,
          cache : false,
          dataType : 'jsonp',
          data : {
            p_bbs_id : 50,
            p_info_type: 'PREV'
          },
          success : function(data){
            if(!data.IsError){
              currentTarget.find('.modal_contant').html(data.SearchList.PST_CNTNT)
            }else{
              alert("실패하였습니다.");
            }
          },
          error:function(){
            alert("실패하였습니다.");
          }
        }).done(function(){
          $('.modal_contant').scrollTop(0);
          currentTarget.closest('.modal_pop').fadeIn();
          $('html').css('overflow','hidden');
        }) 


      }

    }

  } 

}



// 드랍다운메뉴 화살표
function dropDownBtnArrow(isTarget, target) {
  isTarget ? target.removeClass('open') : target.addClass('open');
}

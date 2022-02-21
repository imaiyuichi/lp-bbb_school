
// $(function()は　$(document).ready(function()　の略

$(function() {
   const $header = $('.js-header'),
   $nav = $header.find('.nav'),
   $hamburger = $header.find('.hamburger'),
   $closeButton = $header.find('.nav__headButton');

   $hamburger.on('click', function() {
      $nav.fadeIn();
    });

    $closeButton.on('click', function() {
       $nav.fadeOut();
    });

    $('.navAbout').on('click', function() {
       $('nav').fadeOut();
    });

    $('.navVoice').on('click',function() {
       $('nav').fadeOut();
    });

    $('.navService').on('click',function() {
       $('nav').fadeOut();
    });


//  スムーススクロール

   // 移動速度指定
   const speed =500;
   

    $('a[href^="#"]').on('click', function() {
   
      // hrefで指定されたidを取得 ここでは、# or #about or #voice or #service
      const id =$(this).attr("href");
      // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻る
      const target = $("#" === id ? "html" : id);
      // ページのトップを基準にターゲットの位置を取得
      const position = $(target).offset().top;
   
      $("html, body").animate(
        {
          scrollTop: position
        },
        speed
      );
      return false;
    });

// トップに戻る

const $window = $(window);
const $topButton = $('.toTop');
const $topButtonFadeInPosition = 300;


   $window.scroll(function() {
         if ($(this).scrollTop() > $topButtonFadeInPosition) {
            $topButton.fadeIn();
         } else {
            $topButton.fadeOut();
         }
   });

   $topButton.click(function() {
         $('html, body').animate({scrollTop:0}, '300');
         return false;
   })
  
// スライダー

   $('.service__wrapper').slick( {
      // 自動再生を有効にするか
      autoplay:true,
      speed:1000,
      autoplaySpeed:5000,
      // fade:true
      // ドットインジゲーターを表示するかどうか
      dots:true
   });
   

   $(".js-modal__icon--pc").modaal({
      content_source: '#js-modal__pc'
  });

   $(".js-modal__icon--teacher").modaal({
      content_source: '#js-modal__teacher'
  });
  
  
});

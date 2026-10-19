/* ドロワーメニュー開閉 */
$("#js-hamburger").click(function () {
    $(".header__hamburger-line").toggleClass("is-active");
    $(".header__drawer").toggleClass("is-open");
});

/* FVのスライド */
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

/* スムーススクロール */    
$('a[href^="#"]').click(function(){
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' :href);
    const headerHeight = $(window).width() > 900 ? 80 : 50;
    var position = target.offset().top - headerHeight;
    $("html, body").animate({scrollTop:position}, 100, "swing");
    return false;
});

/* スクロールボタン(topへ戻る) */
// 変数宣言と代入
var goTop = $(".fas");

// サイト上部ではボタンを非表示
goTop.hide();

// 100pxスクロールしたらボタン表示・100px以下ならボタン非表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        // 0.3秒でフェードイン
        goTop.fadeIn(300);
    } else {
        // 0.3秒でフェードアウト
        goTop.fadeOut(300);
    }
});

// ボタンがクリックされたら1秒でページトップへ戻る
goTop.click(function () {
    $("body, html").animate({ scrollTop: 0}, 1000);
    return false;
});

// ヘッダーの背景色をaboutセクション以降変更する
$(window).on('scroll',function() {
    // スクロール量を取得
    const scrollPos = $(window).scrollTop();
    // aboutセクションの位置(上からの距離)を取得
    const aboutTop = $('#about').offset().top;
    // ヘッダーの高さ(必要に応じて調整)
    const headerHeight = $('.header').outerHeight();

    // aboutセクションに差し掛かったか判定
    if (scrollPos >= aboutTop - headerHeight) {
        $('.header').addClass('is-scrolled');
    } else {
        $('.header').removeClass('is-scrolled');
    }
});

// モーダルの表示・非表示
$(".modal-open").click(
    function() {
        const modalId = $(this).data("modal");
        $("[data-modal-content='" + modalId + "']").show();
        $("body").addClass("is-open");
        goTop.hide();
    }
);
$(".modal-close").click(
    function() {
        $(".modal-area").hide();
        $("body").removeClass("is-open");
        // goTop.show();
    }
);

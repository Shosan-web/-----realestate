/* ドロワーメニュー開閉 */
$("#js-hamburger").click(function () {
    $(".header__hamburger-line").toggleClass("is-active");
    $(".header__drawer").toggleClass("is-open");
});

/* FVのスライド */
const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

/* スムーススクロール */    
$('a[href^="#"]').click(function(){
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' :href);
    const headerHeight = $(window).width() > 767 ? 80 : 50;
    var position = target.offset().top - headerHeight;
    $("html, body").animate({scrollTop:position}, 100, "swing");
    if (
        $(window).width() <767 &&
        $(this).hasClass("header__drawer-link")
    ) {
        // ハンバーガーメニューの三本線を元に戻す
        $(".header__hamburger-line").removeClass("is-active");

        // ドロワーメニューを閉じる
        $(".header__drawer").removeClass("is-open");
    }
    return false;
});

/* スクロールボタン(topへ戻る) */
// 変数宣言と代入
var goTop = $(".fas");

// 100pxスクロールしたらボタン表示・100px以下ならボタン非表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        goTop.addClass('active');
    } else {
        goTop.removeClass('active');
    }
});

// ボタンがクリックされたら0.1でページトップへ戻る
goTop.click(function () {
    $("body, html").animate({ scrollTop: 0}, 100);
    return false;
});

// ヘッダーの背景色をaboutセクション以降変更する
$(window).on('scroll',function() {
    // スクロール量を取得
    const scrollPos = $(window).scrollTop();
    // aboutセクションの位置(上からの距離)を取得
    const aboutTop = $('#about').offset().top;

    // aboutセクションに差し掛かったか判定
    if (scrollPos > aboutTop) {
        $('.header').addClass('is-scrolled');
    } else {
        $('.header').removeClass('is-scrolled');
    }
});

// モーダルの表示・非表示
$(".modal-open").click(
    function() {
        const modalId = $(this).data("modal");
        $("[data-modal-content='" + modalId + "']").fadeIn(400);
        $("body").addClass("is-open");
        goTop.removeClass('active');
    }
);
$(".modal-close").click(
    function() {
        $(".modal-area").fadeOut(400);
        $("body").removeClass("is-open");
        goTop.addClass('active');
    }
); 

// フェードイン(ヘッダー・FV・フッター以外)
AOS.init({
    delay: 100,
    duration: 1000,
    easing: 'ease-out',
    once: true,
});



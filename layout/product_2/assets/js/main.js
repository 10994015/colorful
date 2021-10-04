$('.detail-item04-slick').slick({
    dots: false, //原點
    infinite: false, //無限循環滑動
    speed: 800, //滑動/淡入動畫速度
    slidesToShow: 4, //要顯示的幻燈片數量
    adaptiveHeight: false, //響應高度
    arrows: true,
    pauseOnFocus: false,
    prevArrow: '<div class="cus-prev"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="cus-next"><i class="fas fa-chevron-right"></i></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }
    ]
    // fade:true,
});
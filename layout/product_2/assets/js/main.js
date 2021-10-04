/*! Mon Dec 16 2019  | Author by Tino Tseng*/

(function ($) {
    $.fn.TopClass_fixed_bottom = function (has_class) {
        var _Scroll_class = this,
            ps = _Scroll_class.offset();
        $(window).scroll(function () {
            if ($(this).scrollTop() > ps.top + _Scroll_class.height() && _Scroll_class.hasClass(has_class)) {
                _Scroll_class.fadeOut(0, function () {
                    $(this).removeClass(has_class).addClass('fixed').fadeIn(0).addClass('animated fadeInDown');
                    //                       console.log('111')
                });
            } else if ($(this).scrollTop() <= ps.top && _Scroll_class.hasClass('fixed')) {
                _Scroll_class.fadeOut(0, function () {
                    $(this).removeClass('fixed').addClass(has_class).fadeIn(0);
                    //                     console.log('222')
                });
            }

        });

    },
    $.fn.main_img_bg = function () {
        function checkWidth() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';

                e = document.documentElement || document.body;
            }
            return e[a + 'Width']
        }
        var _this = $(this);

        function mainimg() {
            if (checkWidth() >= 768) {
                _this.each(function () {
                    var $pc_img = $(this).attr('data-pc-img-url');
                    $(this).css('background-image', 'url(' + $pc_img + ')');

                })
            } else if (checkWidth() <= 767) {
                _this.each(function () {
                    var $mb_img = $(this).attr('data-mb-img-url');
                    $(this).css('background-image', 'url(' + $mb_img + ')');

                })
            }

        }
        mainimg();
        $(window).on('resize', mainimg);

    },
    $.fn.main_tab = function (body_class, body_item_class) {
        $(this).each(function () {
            var _this = $(this);
            var _this_body = _this.siblings(body_class).children(body_item_class);

            _this_body.each(function (index) {
                _this_body.hide();
                _this_body.eq(0).show();
                $(this).attr('data-tabs-body', index);
            });
            _this.children('ul').children('li').each(function (index) {
                var _tabs = $(this).attr('data-tabs-index', index);
                _tabs.on('click', function () {
                    $(this).addClass('active').siblings('li').removeClass('active');
                    $(this).parents(_this).siblings(body_class).children('[data-tabs-body]:eq(' + index + ')').fadeTo("slow", 1).siblings(body_item_class).hide();

                })
            });


        })
    },
    $.fn.main_menuClass = function (title_class, list_class, ok, active_show) {
        var _this = $(this);

        var _ok = ok == undefined || ok == true ? true : false;

        if (_ok) {
            $(this).children('a,.' + title_class).on('click', function () {

                var $this = $(this).parent();
                var $siblings = $this.siblings();

                $this.siblings().removeClass('active_top');
                $this.find('.' + list_class).stop().slideToggle("slow");
                $siblings.find('.' + list_class).stop().slideUp('slow');

                if ($this.hasClass('active_top') == false) {
                    $this.addClass('active_top')
                } else {
                    $this.removeClass('active_top')
                }
            });

            if ($(this).hasClass(active_show)) {
                $('.' + active_show).each(function () {
                    $(this).children('.' + title_class).click().parent().addClass('active_top');
                })
            }

            if ($(this).hasClass('active_top')) {

                $('.active_top').children('.' + list_class).css('display', 'block');

            }
        } else {

            $(this).children('a,.' + title_class).off();

        }
    },
    //  Tino. main_tabVideo 2019.  按鈕框與內容外框同層
    //  main_tabVideo function : 
    //    ul or li or body_class or body_item_class = HTML DOM
    //    video  = youtube  Reset and stop (Boolean)
    $.fn.main_tabVideo = function (ul, li, body_class, body_item_class, video) {
        var _video = video || false;
        $(this).each(function () {
            var _this = $(this);
            var _this_body = _this.siblings(body_class).children(body_item_class);

            _this_body.each(function (index) {
                _this_body.hide();
                _this_body.eq(0).show();
                $(this).attr('data-tabs-body', index);
            });
            var le = _this.children(ul).children(li);
            le.each(function (index) {
                var _tabs = $(this).attr('data-tabs-index', index);
                _tabs.on('click', function () {
                    var _this = $(this),
                        _tab_body = _this.parents(_this).siblings(body_class).children('[data-tabs-body]:eq(' + index + ')');

                    if (!_this.hasClass('no')) {
                        _this.addClass('active').siblings(li).removeClass('active');
                        _tab_body.fadeTo("slow", 1).siblings(body_item_class).hide();

                        if ($(body_item_class).find('.viedo-body').length > 0) {

                            _tab_body.siblings('[data-tabs-body]').find('.viedo-body').children("iframe").each(function () {
                                var src_video = $(this).attr("src");
                                if (_video) {
                                    $(this).attr("src", "");
                                    $(this).attr("src", src_video);
                                } else {
                                    $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                                }


                            });
                        }
                    }
                });

            });


        })
};

})(jQuery);

var Popup_main2, Popup_main;
$(function () {
    function checkWidth() {
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';

            e = document.documentElement || document.body;
        }
        return e[a + 'Width']
    }
    var nav_hader = function () {

        if (checkWidth() < 992) {


            $('.nav-item').find('ul').parent('.nav-item').addClass('nav_go');
            $('.nav-item').find('ul').removeAttr('style');
            $('.nav_go').main_menuClass('nav-link', 'nav_mb_ul', true);
        } else {

            $('.nav_go').main_menuClass('nav-link', 'nav_mb_ul', false);
            $('.nav-item').find('ul').parent('.nav-item').removeClass('nav_go');
            setTimeout(function () {
                $('.nav-item').find('ul').removeAttr('style');
            }, 200);

        }
    }

    nav_hader();



    Popup_main = function (idd) {

        $(idd).magnificPopup({
            // type: 'image',
            //     closeBtnInside: false,
            //     closeOnContentClick: true,
            //     tLoading: '', // remove text from preloader
            //     fixedBgPos:true,
            //     /* don't add this part, it's just to disable cache on image and test loading indicator */
            //     callbacks: {
            //         beforeChange: function() {
            //         this.items[0].src = this.items[0].src + '?=' + Math.random(); 
            //         }
            //     }
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            image: {
                verticalFit: true
            },
            // zoom: {
            //     enabled: true,
            //     duration: 300 // don't foget to change the duration also in CSS
            // },
            callbacks: {
                beforeChange: function () {
                    this.items[0].src = this.items[0].src + '?=' + Math.random();
                }
                //  ,open: function () {
                //     console.log($('.mfp-img').width());

                //   }
            }


        });
    }
    Popup_main2 = function (idd) {

        $(idd).magnificPopup({

            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            // delegate: '.ig_center_slider-item:not(.slick-cloned) a',

            gallery: { enabled: true },

            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            image: {
                verticalFit: true
            },
            // zoom: {  //縮放到元框架上的過度 動態 如果 圖片用背景做 會爆出offset.top -= ( $(window).scrollTop() - paddingTop ); 錯誤 則不能開啟此功能
            //     enabled: true,
            //     duration: 300 // don't foget to change the duration also in CSS
            // },
            callbacks: {
                // change: function() {
                //    var _h5 = $(this.currItem.el).attr('data-title') || '';

                //    var _p = $(this.currItem.el).attr('title') || '';
                //    var _ig = $(this.currItem.el).attr('data-ig') || '';
                //     $(this.content)
                //         .find('.mfp-title')
                //         .html(
                //             '<h5>' +
                //             _h5+
                //              '</h5>'+'<p>'+_p+'</p>'+'<p>'+_ig+'</p>'

                //         );
                // },
                beforeOpen: function () {
                    // console.log('Start of popup initialization');
                },
                open: function (e) {
                    $(document).off('focusin'); //Maximum call stack size exceeded. 報錯問題
                    // 取消插件的_document.on('focusin' + EVENT_NS, mfp._onFocusIn);
                    $(".mfp-content").swipe({
                        swipeLeft: function () {
                            $(".mfp-arrow-left").magnificPopup("prev");

                        },
                        swipeRight: function () {
                            $(".mfp-arrow-right").magnificPopup("next");
                        },
                        swipeStatus: function (event, phase, direction, distance, duration) {
                            //   var str = "";
                            //   if (direction=="left"){
                            //     $(".mfp-arrow-left").magnificPopup("prev");
                            //   }
                            //   if (direction=="right"){
                            //     $(".mfp-arrow-tight").magnificPopup("next");
                            //   }
                        },
                        triggerOnTouchEnd: true,
                        maxTimeThreshold: 5000,
                        threshold: null,
                        fixedContentPos: false
                    });


                    //   var current = aaa.slick('slickCurrentSlide');
                    //   aaa.magnificPopup('goTo', current);
                    //   $('.ig_center_slider .slick-slider').each(function(){
                    //     $(this).slick("getSlick").refresh();
                    // });
                    // console.log('111');
                },
                beforeClose: function () {
                    // $('.slick-slider').slick('slickGoTo', parseInt(this.index - 1));

                    // aaa.slick("getSlick").refresh();
                    // aaa.slick('slickGoTo', parseInt(this.index));

                    this.items[0].src = this.items[0].src + '?=' + Math.random();
                }
            }

        });
    }
    //   $.magnificPopup.defaults.callbacks = {
    //     open: function() {
    //       $('html').addClass('modals');
    //       setTimeout(function() {
    //         // console.log( $('.mfp-img').attr('src'))
    //         var _src =$('.mfp-img').attr('src');
    //         $('.mfp-img').parent('figure').css("background-image", "url("+_src+")");
    //       }, 100)
    //     },
    //     close: function() {

    //       setTimeout(function() {
    //         $('html').removeClass('modals');
    //       }, 100)
    //     }
    //   };


    //select
    jQuery(function ($) {
        $(".opt select").not(".native select").selectui({
            autoWidth: false,
            interval: true

        });
    });
    var $slick = $('.section2-bottom,.mb_slider'), slick_resize;

    var toggleSlick = function () {
        if (checkWidth() < 768) {
            if (!$slick.hasClass('slick-initialized')) {
                $slick.slick({
                    dots: false, //點
                    infinite: true, //無限循環滑動
                    speed: 800, //滑動/淡入動畫速度
                    slidesToShow: 1


                });

            }
        } else {

            if ($slick.hasClass('slick-initialized')) {
                $slick.slick('unslick');
                //                   console.log('111')
            }


        }


    }

    $(window).resize(function () {
        //         toggleSlick();
        clearTimeout(slick_resize);
        slick_resize = setTimeout(function () {
            toggleSlick();
            nav_hader();
            if (checkWidth() > 991 && $('.navbar-toggler').hasClass('yes')) {
                $('.navbar-toggler ').click();
            }
        }, 200);


    });

    $(window).load(function () {
        Popup_main2('.section2-bottom-item a');
        Popup_main2('.modal_img_a');
        Popup_main2('.company5_a');
        Popup_main('.cup-body-item-img');

        toggleSlick();
    });

    var $company_text = $('.company1-body-text-cont p');



    // function createDots()
    // {
    $company_text.dotdotdot({
        after: 'a.toggle', watch: true
    });


    // }
    // function destroyDots() {
    // 	$company_text.trigger( 'destroy' ).siblings('a.toggle').hide();
    // }
    // createDots();

    $company_text.each(function () {
        var _this = $(this);
        _this.siblings('a.toggle').on('click', function () {

            if (_this.hasClass('opened')) {


                //    _this.removeClass( 'opened' ).dotdotdot({
                //         after: 'a.toggle',watch: true
                //     });
                // .siblings('a.toggle').hide();
            } else {

                _this.addClass('opened');
                _this.trigger('destroy').siblings('a.toggle').hide();

            }

            return false;
        }
        );

    });

    $('.case-body-item a').on('click', function (e) {
        e.preventDefault();
        $('#myModal').modal();
    });
    $(window).load(function () {


        if ($(".case-body").length > 0) {
            $(".case-body").masonry({
                itemSelecor: ".case-body-item",
                columnWidth: ".case-body-item",
                // isFitWidth: true,
                // itemSelector: '.win-item',
                percentPosition: true,
                gutter: 0
            });

        }
    });

    $('.left_nav').main_menuClass('a', 'left_nav_ul');



    // $('.qa-tab').main_tabVideo('ul','li','.qa-tab_body','.qa-tab_item');
    // $('.qa-tab_cont').main_menuClass('qa-tab_item_top', 'qa-tab_item_bottom');
    $('.qa-tab').main_tabVideo('ul', 'li', '.qa-tab_body', '.qa-tab_item');
    $('.left-sidebar_cont').main_menuClass('left-sidebar_item_top', 'left-sidebar_item_bottom');
    $('.list02-cart-item').main_menuClass('list-add-title-more', 'list-more-item');
    $('.step-body-qa').main_menuClass('step-body-qa-top', 'step-body-qa-body');

    $(document).on('click', '.navbar-toggler', function () {
        var _this = $(this);
        setTimeout(function () {
            if ($('#navigation,#search-menu-mo,#sec-menu-mo').hasClass('show')) {
                $('html').addClass('ov-hidden');
                _this.addClass('yes');
            } else {
                $('html').removeClass('ov-hidden');
                _this.removeClass('yes');
            }
        }, 400)


    });

    $('.index_slider').slick({
        dots: true, //原點
        centerMode: true,
        infinite: true,
        arrows: false,//箭頭
        centerPadding: '15%',
        slidesToShow: 1,
        speed: 500,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '15%',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.kv_slider').slick({
        dots: false, //原點
        infinite: true, //無限循環滑動
        speed: 800, //滑動/淡入動畫速度
        slidesToShow: 1, //要顯示的幻燈片數量
        adaptiveHeight: false, //響應高度
        autoplay: false,
        arrows: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        prevArrow: '<div class="cus-prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="cus-next"><i class="fas fa-chevron-right"></i></div>',
        // fade:true,
        slidesToShow: 1
    });

    $('.product_slider').slick({
        dots: true, //原點
        infinite: true, //無限循環滑動
        speed: 800, //滑動/淡入動畫速度
        slidesToShow: 1, //要顯示的幻燈片數量
        adaptiveHeight: false, //響應高度
        arrows: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        // fade:true,
        slidesToShow: 1
    });

    $('.product_slider02').slick({
        dots: true, //原點
        infinite: true, //無限循環滑動
        speed: 800, //滑動/淡入動畫速度
        slidesToShow: 1, //要顯示的幻燈片數量
        adaptiveHeight: false, //響應高度
        arrows: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        // fade:true,
        slidesToShow: 1
    });

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

    $('.detail-item05-slick').slick({
        dots: false, //原點
        infinite: false, //無限循環滑動
        speed: 800, //滑動/淡入動畫速度
        slidesToShow: 4, //要顯示的幻燈片數量
        adaptiveHeight: false, //響應高度
        arrows: true,
        pauseOnFocus: false
    });

    $(".product_detail_img").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0%",
        speed: 500,
        asNavFor: '.product_detail_img-nav'
    });

    $(".product_detail_img-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".product_detail_img",
        dots: !1,
        arrows: !0,
        centerMode: !1,
        focusOnSelect: !0,
        centerPadding: "0"
    });

    $('#tenderBoxBtn').on('click', function () {
        $('#tenderBox').modal('show');
    });
    $('#myBoxBtn').on('click', function () {
        $('#mybox').modal('show');
    });

    //  點背景無法關閉  ～ esc 關閉，keyboard设置为 false 就無法用按鍵關閉     
    //   $('#myModal').modal({
    //       backdrop: 'static',
    //       keyboard: false
    //   });


    // $('.section_2-body-slider,.section_3-body-slider').slick({
    //     dots: true, //原點
    //     infinite: true, //無限循環滑動
    //     speed: 500, //滑動/淡入動畫速度
    //     slidesToShow: 3, //要顯示的幻燈片數量
    //     adaptiveHeight: true, //響應高度
    //     slidesToScroll: 3,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     // centerMode: true,
    //     // centerPadding: '20%',
    //     arrows:false,
    //     variableWidth: false,
    //     responsive: [
    //       {
    //             breakpoint:768,
    //             settings: {
    //                 arrows:false,
    //                 slidesToShow: 2, //要顯示的幻燈片數量
    //                 adaptiveHeight: true, //響應高度
    //                 slidesToScroll: 2
    //             }
    //          },
    //          {
    //             breakpoint:640,
    //             settings: {
    //                 arrows:false,
    //                 slidesToShow: 1, //要顯示的幻燈片數量
    //                 adaptiveHeight: true, //響應高度
    //                 slidesToScroll: 1
    //             }
    //          }
    //     ]
    // });



    (function scroll_top() {

        var offset = 300,
            offset_opacity = 200,
            scroll_top_duration = 520,
            $back_to_top = $('.cd-top');

        $(window).scroll(function () {
            ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
            if ($(this).scrollTop() > offset_opacity) {
                $back_to_top.addClass('cd-fade-out');
            }
        });
        $back_to_top.on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration);
        });
    })();

    $(".jqcity").each(function () {
        $(this).citySelect();

    });


    if ($('.qa-tab').length > 0) {
        $(window).load(function () {
            var tabid = getAnchor('tabs');
            if (tabid != undefined) {
                setTimeout(function () {
                    $('.qa-tab [data-tabs-index=' + tabid + ']').click();
                }, 100);

            }

        });

    }


});

// ＝＝＝＝ 

(function ($) {

    $.fn.citySelect = function (options) {
        options = $.extend({
            cityJson: "js/city.json",
            cityTarget: "",
            city: "",
            town: ""
        }, options);

        var city;
        var element = this;
        var element_name = $(this).attr("data-name") || '??-jq';
        var required = $(this).data('required') || '';
        if (!options.city.length) options.city = $(this).attr('data-city') || "";
        if (!options.town.length) options.town = $(this).attr('data-town') || "";

        var city_name, town_name, zip_name;
        city_name = element_name.replace('??', 'city');
        town_name = element_name.replace('??', 'town');
        zip_name = element_name.replace('??', 'zip');

        element_name = element_name.replace('??', '');

        $.ajax({
            url: options.cityJson,
            type: "get",
            datatype: "json",
            beforeSend: function () { },
            complete: function (data) {
                if (!$("select[name='" + city_name + "']").length) {
                    $(element).append(
                        $("<select></select>").attr("name", city_name)
                    );
                }
                if (!$("select[name='" + town_name + "']").length) {
                    $(element).append(
                        $("<select></select>").attr("name", town_name)
                    )
                }
                if (!$("input[name='" + zip_name + "']").length) {
                    $(element).append(
                        $("<input>")
                            .addClass('readonly')
                            .attr("name", zip_name)
                            .attr("size", 5)
                            .attr("maxlength", 5)
                            .attr("required", required ? true : false)
                    )
                }
                $("select[name='" + city_name + "']").empty().append($("<option></option>")
                    .attr('value', "")
                    .text('未選擇')
                );
                $("select[name='" + town_name + "']").empty().append($("<option></option>")
                    .attr('value', "")
                    .text('未選擇')
                );

                city = data.responseJSON;
                $.each(city, function (i, item) {
                    $("select[name='" + city_name + "']").append('<option>' + i + '</option>');
                });

                $("select[name='" + city_name + "']").children().each(function () {
                    if (this.text == options.city) {
                        $(this).attr("selected", true).parent().trigger("change");
                        $("select[name='" + town_name + "']").children().each(function () {
                            if (this.text == options.town) {
                                $(this).attr("selected", true).parent().trigger("change");
                            }
                        })
                    }
                });
            }
        });


        $(document).on('change', "select[name='" + city_name + "']", function () {
            var itemKey = $(this).val();
            var option = '';
            $.each(city[itemKey], function (i, item) {
                option += '<option value="' + item + '" data-id="' + i + '">' + item + '</option>';
            });

            $("select[name='" + town_name + "']").html(option);
            setCityTarget();
        })
        $(document).on('change', "select[name='" + town_name + "']", function () {
            setCityTarget();
        })
        function setCityTarget() {
            $(options.cityTarget).val(
                $("select[name='" + town_name + "']").val() +
                $("select[name='" + city_name + "']").val() +
                $("select[name='" + city_name + "']:selected").text());

            $("input[name='" + zip_name + "']").val(
                $("select[name='" + town_name + "'] option:selected").attr('data-id'));
        }
    }
})(jQuery);

function getAnchor(n) {
    var v = '', url = window.location.href, anchor = '#' + n;
    if (url.indexOf(anchor) != -1) {
        for (i = url.indexOf(anchor) + 1; i < url.length; i++) {
            if (/[?!@$%^&*#]/g.test(url.charAt(i))) break;
            else v += url.charAt(i);
        }
        v = v.split('=');
    }
    return v[1];
}
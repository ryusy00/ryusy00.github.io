// 마우스 커서 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove',function(e) {
        // 마우스 위치에 따라 커서 아이콘 위치 업데이트
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });
});

// pc네비게이션, 슬라이드 배너
$(function() {
    $('#navigation li').hover(function() {
        $(this).find('.sub-nav').fadeIn();
    },function() {
        $(this).find('.sub-nav').fadeOut();
    });
    
    // 메인 배너 - 모바일
    $(".slide-banner > div:gt(0)").hide();
    setInterval(function() {
        $('.slide-banner > div:first')
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo('.slide-banner');
    }, 4000);

    // 메인 배너 - 모바일
    $(".m-banner > div:gt(0)").hide();
    setInterval(function() {
        $('.m-banner > div:first')
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo('.m-banner');
    }, 4000);
});

// 모바일 네비게이션
$(window).on("scroll",function() {
    var nav = $("#m-navigation > ul");
    var viewportWidth = $(window).width();
    if ($(window).scrollTop() === 0) {
        $("#nav").css({
            top: '40px'
        });
        $("#m-nav").css({
            top: '35px'
        });
        nav.css('padding-top',"50px");
    } 
    else {
        $("#nav").css({
            top: 0
        });
        $("#m-nav").css({
            top: 0
        });
        nav.css('padding-top',0);
    }
    if (viewportWidth <= 585) {
        var scrollPosition = $(this).scrollTop();
        // 스크롤 위치에 따라 #m-navigation의 위치 조정
        if (scrollPosition > 0) {
            $("#m-navigation").css({
                top: '40px'
            });
            $("#m-nav").css({
                top: 0
            });
            $("#m-navigation > ul").css({
                paddingTop: 0
            });
        } else {
            $("#m-navigation").css({
                top: '30px'
            });
            $("#m-nav").css({
                top: '30px'
            });
            $("#m-navigation > ul").css({
                paddingTop: '40px'
            });
        }
    }
});
$(window).on("load",function() {
    var viewportWidth = $(window).width();
    if ($(window).scrollTop() === 0) {
        $("#nav").css({
            top: '40px'
        });
        $("#m-nav").css({
            top: '35px'
        });
        $("#m-navigation > ul").css({
            paddingTop: '50px'
        });
    }
    else {
        $("#nav").css({
            top: 0
        });
        $("#m-nav").css({
            top: 0
        });
        $("#m-navigation > ul").css({
            paddingTop: '50px'
        });
    }
    if (viewportWidth <= 585) {
        var scrollPosition = $(this).scrollTop();
        // 스크롤 위치에 따라 #m-navigation의 위치 조정
        if (scrollPosition > 0) {
            $("#m-navigation").css({
                top: '40px'
            });
            $("#m-nav").css({
                top: 0
            });
            $("#m-navigation > ul").css({
                paddingTop: 0
            });
        } else {
            $("#m-navigation").css({
                top: '30px'
            });
            $("#m-nav").css({
                top: '30px'
            });
            $("#m-navigation > ul").css({
                paddingTop: '40px'
            });
        }
    }
});


// 퀵 네비게이션 효과
$(function() {
    $('.menu-bar > .menuBtn'). on('click', 
    function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('#m-navigation').toggleClass('visible');
    });
});


// 모달 레이어 팝업창
$(document).ready(function() {
    // 모달 열기 버튼 클릭 시 모달 열기
    $('#header-banner > a').on('click', function() {
        $('#myModal').css('display', 'block');
    });
    $('#m-hd_banner > a').on('click', function() {
        $('#myModal').css('display', 'block');
    });

    // 모달 닫기 버튼 클릭 시 모달 닫기
    $('.close, .checkbox-label').eq(0).on('click', function() {
        $('#myModal').css('display', 'none');
    });

    // 모달 바깥 영역 클릭 시 모달 닫기
    $(window).on('click', function(event) {
        var modal = $('#myModal');
        if (event.target === modal[0]) {
            modal.css('display', 'none');
        }
    });
});
  

// furryfriends 애니메이션
$(function() {
    $('#cloth-bar div').hover(function() {
        $(this).find('#cloth-bar div').fadeIn();
    },function() {
        $(this).find('.sub-nav').fadeOut();
    });
    $(".slide-banner > div:gt(0)").hide();
    setInterval(function() {
        $('.slide-banner > div:first')
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo('.slide-banner');
    }, 4000);
});
$(document).ready(function() {
    $('#collaboration').hide();
    $('.btn-souvenir').click(function() {
        $('#souvenir').show();
        $('#collaboration').hide();
        $(".btn-souvenir").addClass('active');
        $(".btn-collaboration a").css({
            color : '#000'
        });
    });
    $('.btn-collaboration').click(function() {
        $('#collaboration').show();
        $('#souvenir').hide();
        $(".btn-collaboration a").css({
            color : '#dd4b92'
        });
        $(".btn-souvenir").removeClass('active');
    });
});


$(document).ready(function() {
    var slider = $('.auto-slide1, .auto-slide2');
    var isHovered = false;
  
    slider.hover(function() {
      isHovered = !isHovered;
  
      if (isHovered) {
        slider.css('animation-play-state', 'paused');
      } else {
        slider.css('animation-play-state', 'running');
      }
    });
});

// furryfriens 영역 애니메이션
var isAnimating = false;

$(document).ready(function() {
    var bars = $('.bar');
    var cloth = $('.cloth');
    var frame = $('#heart-frame');
    var card = $('.giftcard-img img');
    var keyring = $('#bottom-right img');

    $(window).scroll(function() {
        var currentScrollPosition = $(window).scrollTop();
        var scrollPositionToStartAnimation = $('#items-bottom').offset().top - $(window).height();
        

        if (!isAnimating && currentScrollPosition >= scrollPositionToStartAnimation) {
            isAnimating = true;

            var delay = 200; // 각 요소의 나타나는 지연시간

            bars.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });

            cloth.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, (index * delay)); 
            });

            frame.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, (index + cloth.length) * delay); 
            });

            card.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, (index * delay)); 
            });

            keyring.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, (index* delay)); 
            });

            isAnimating = false;
        } else {
            // 스크롤 위치에 도달하지 않으면 모든 요소를 숨김
            bars.css('opacity', '0');
            cloth.css('opacity', '0');
            frame.css('opacity', '0');
            card.css('opacity', '0');
            keyring.css('opacity', '0');
        }
    });
});


// backpack 상하 슬라이드 효과
var isAnimating3 = false;
$(document).ready(function() {
  $('.backpack-black').removeClass('animate');
  $('.backpack-purple').removeClass('animate');
  $('.backpack-blue').removeClass('animate');
  $('.leopard-explain').removeClass('animate');
  
  $(window).scroll(function() {
    var currentScrollPosition = $(window).scrollTop();
      
    if (isAnimating3){
        return;
    }
        
    var scrollPositionToStartAnimation = $('#big-backpack').offset().top - $(window).height();
    if (currentScrollPosition < scrollPositionToStartAnimation) {
        $('.backpack-black').removeClass('animate');
        $('.backpack-purple').removeClass('animate');
        $('.backpack-blue').removeClass('animate');
        $('.leopard-explain').removeClass('animate');

        isAnimating3 = false;
    }
    // if (currentScrollPosition > scrollPositionToStartAnimation) {
    //     $('.backpack-black').removeClass('animate');
    //     $('.backpack-purple').removeClass('animate');
    //     $('.backpack-blue').removeClass('animate');
    //     $('.leopard-explain').removeClass('animate');
    // }

    if (!isAnimating3 && currentScrollPosition >=scrollPositionToStartAnimation) {
      isAnimating3 = true;
      $('.backpack-black').fadeIn(700,function() {
        $(this).addClass('animate');
        isAnimating3 = false;
      });
      $('.backpack-purple').fadeIn(700,function() {
        $(this).addClass('animate');
        isAnimating3 = false;
      });
      $('.backpack-blue').fadeIn(700,function() {
        $(this).addClass('animate');
        isAnimating3 = false;
      });
      $('.leopard-explain').fadeIn(700,function() {
        $(this).addClass('animate');
        isAnimating4 = false;
      });
    }
  });
});

var isAnimating4 = false;
$(document).ready(function() {
//   $('.leopard-explain').removeClass('animate');
  $('#silver-explain').removeClass('animate');
  
  $(window).scroll(function() {
    var currentScrollPosition = $(window).scrollTop();
      
    if (isAnimating4){
        return;
    }
        
    var scrollPositionToStartAnimation = $('#lime-model').offset().top - $(window).height();
    if (currentScrollPosition < scrollPositionToStartAnimation) {
        // $('.leopard-explain').removeClass('animate');
        $('#silver-explain').removeClass('animate');
        isAnimating4 = false;
    }
    // if (currentScrollPosition > scrollPositionToStartAnimation) {
    //     $('.backpack-black').removeClass('animate');
    //     $('.backpack-purple').removeClass('animate');
    //     $('.backpack-blue').removeClass('animate');
    //     $('.leopard-explain').removeClass('animate');
    // }

    if (!isAnimating4 && currentScrollPosition >= scrollPositionToStartAnimation) {
      isAnimating4 = true;
    //   $('.leopard-explain').fadeIn(700,function() {
    //     $(this).addClass('animate');
    //     isAnimating4 = false;
    //   });
      $('#silver-explain').fadeIn(700,function() {
        $(this).addClass('animate');
        isAnimating4 = false;
      });
    }
  });
});


// furryfriens 영역 애니메이션
var isAnimating = false;

$(document).ready(function() {
    var circle1 = $('.icon-1');
    var circle2 = $('.icon-2');
    var circle3 = $('.icon-3');
    var circle4 = $('.icon-4');

    $(window).scroll(function() {
        var currentScrollPosition = $(window).scrollTop();
        var scrollPositionToStartAnimation = $('#carry-explain').offset().top - $(window).height();
        

        if (!isAnimating && currentScrollPosition >= scrollPositionToStartAnimation) {
            isAnimating = true;

            var delay = 200; // 각 요소의 나타나는 지연시간

            circle1.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });

            circle2.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, (index + circle1.length) * delay); 
            });

            circle3.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, (index + circle1.length + circle2.length) * delay); 
            });

            circle4.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, (index + circle1.length + circle2.length +circle3.length)* delay); 
            });

            isAnimating = false;
        } else {
            // 스크롤 위치에 도달하지 않으면 모든 요소를 숨김
            circle1.css('opacity', '0');
            circle2.css('opacity', '0');
            circle3.css('opacity', '0');
            circle4.css('opacity', '0');
        }
    });
});
  

$(document).ready(function() {
    $('.bottom-btn1').hide();
    $('.bottom-btn2').hide();
    $('.left-btn1').click(function() {
      $('.m_help-list').toggle();
      $('.left-btn1').hide();
      $('.bottom-btn1').show();
    });
    $('.bottom-btn1').click(function() {
      $('.m_help-list').toggle();
      $('.left-btn1').show();
      $('.bottom-btn1').hide();
    });
    $('.left-btn2').click(function() {
      $('.m_company-list').toggle();
      $('.left-btn2').hide();
      $('.bottom-btn2').show();
    });
    $('.bottom-btn2').click(function() {
      $('.m_company-list').toggle();
      $('.left-btn2').show();
      $('.bottom-btn2').hide();
    });
});
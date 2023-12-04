// 네비게이션
$(function() {
    $('#navigation li').hover(function() {
        $(this).find('.sub-nav').fadeIn();
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

// 모달 레이어 팝업창
$(document).ready(function() {
    // 모달 열기 버튼 클릭 시 모달 열기
    $('#header-banner > a').on('click', function() {
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
$(window).on("scroll",function() {
    if ($(window).scrollTop() === 0) {
        $("#nav").css({
            top: '40px'
        });
    } 
    else {
        $("#nav").css({
            top: 0
        });
    }
});
$(window).on("load",function() {
    if ($(window).scrollTop() === 0) {
        $("#nav").css({
            top: '40px'
        });
    } 
    else {
        $("#nav").css({
            top: 0
        });
    }
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
  
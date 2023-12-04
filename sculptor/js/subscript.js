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

$(document).ready(function() {
    $(".popup_active").click(function(e) {
        e.preventDefault();
        $(".modal").show();
    });

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

// 여름 룩북 모델 fadeIn 애니메이션
var isAnimating = false;

$(document).ready(function() {
    var model = $('.summer-model1');
    var model2 = $('.summer-model2');

    $(window).scroll(function() {
        var currentScrollPosition = $(window).scrollTop();
        var scrollPositionToStartAnimation = $('#summer-model3').offset().top - $(window).height();
        

        if (!isAnimating && currentScrollPosition >= scrollPositionToStartAnimation) {
            isAnimating = true;

            var delay = 200; // 각 요소의 나타나는 지연시간

            model.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '0.7');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });
            model2.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '0.7');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });

            isAnimating = false;
        } else {
            // 스크롤 위치에 도달하지 않으면 모든 요소를 숨김
            model.css('opacity', '0');
            model2.css('opacity', '0');
        }
    });
});

// 여름 룩북 모델 애니메이션
var isAnimating3 = false;
$(document).ready(function() {
  $('#summer-model3').removeClass('animate');
  
  $(window).scroll(function() {
      var currentScrollPosition = $(window).scrollTop();
      
      if (isAnimating3){
          return;
        }
        
        var scrollPositionToStartAnimation = $('#summer-model3').offset().top - $(window).height();
    if (currentScrollPosition < scrollPositionToStartAnimation) {
        $('#summer-model3').removeClass('animate');
        isAnimating3 = false;
    }
    if (currentScrollPosition > scrollPositionToStartAnimation) {
        $('#summer-model3').removeClass('animate');
    }

    if (!isAnimating3 && currentScrollPosition >=scrollPositionToStartAnimation) {
      isAnimating3 = true;
      $('#summer-model3').fadeIn(700,function() {
        $(this).addClass('animate');
        isAnimating3 = false;
      });
    }
  });
});

// 스컬프터 로고 애니메이션
var isAnimating2 = false;
$(document).ready(function() {
  $('.sculptor-logo').removeClass('animate');
  
  $(window).scroll(function() {
    var currentScrollPosition = $(window).scrollTop();
      
    if (isAnimating2){
        return;
    }
        
    var scrollPositionToStartAnimation = $('.sculptor-logo').offset().top - $(window).height();
    if (currentScrollPosition < scrollPositionToStartAnimation) {
        $('.sculptor-logo').removeClass('animate');


        isAnimating2 = false;
    }
    // if (currentScrollPosition > scrollPositionToStartAnimation) {
    //     $('.backpack-black').removeClass('animate');
    //     $('.backpack-purple').removeClass('animate');
    //     $('.backpack-blue').removeClass('animate');
    //     $('.leopard-explain').removeClass('animate');
    // }

    if (!isAnimating2 && currentScrollPosition >=scrollPositionToStartAnimation) {
      isAnimating2 = true;
      $('.sculptor-logo').fadeIn(700,function() {
        $(this).addClass('animate');
        isAnimating2 = false;
      });
    }
  });
});


// 스컬프터 로고 애니메이션
var isAnimating5 = false;
$(document).ready(function() {
  $('.winter-txt1').removeClass('animate');
  
  $(window).scroll(function() {
    var currentScrollPosition = $(window).scrollTop();
      
    if (isAnimating5){
        return;
    }
        
    var scrollPositionToStartAnimation = $('#winter-model1').offset().top - $(window).height();
    if (currentScrollPosition < scrollPositionToStartAnimation) {
        $('.winter-txt1').removeClass('animate');

        isAnimating5 = false;
    }

    if (!isAnimating5 && currentScrollPosition >=scrollPositionToStartAnimation) {
        isAnimating5 = true;
        $('.winter-txt1').fadeIn(700,function() {
            $(this).addClass('animate');
            isAnimating5 = false;
        });
    }
  });
});


// 겨울 룩북 모델 fadeIn 애니메이션
var isAnimating4 = false;

$(document).ready(function() {
    var model = $('.winter-model3');
    var model2 = $('.winter-model4');

    $(window).scroll(function() {
        var currentScrollPosition = $(window).scrollTop();
        var scrollPositionToStartAnimation = $('#winter-top').offset().top - $(window).height();
        

        if (!isAnimating4 && currentScrollPosition >= scrollPositionToStartAnimation) {
            isAnimating4 = true;

            var delay = 200; // 각 요소의 나타나는 지연시간

            model.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '0.7');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });
            model2.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '0.7');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });

            isAnimating4 = false;
        } else {
            // 스크롤 위치에 도달하지 않으면 모든 요소를 숨김
            model.css('opacity', '0');
            model2.css('opacity', '0');
        }
    });
});


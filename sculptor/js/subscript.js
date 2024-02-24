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
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var modalToggle = document.getElementById('modalToggle');
    
    // 로컬 스토리지에서 값을 가져와서 체크박스 상태 설정
    var checked = localStorage.getItem('modalChecked');
    if (checked === 'true') {
        modal.style.display = 'none';
    }

    // 체크박스 상태 변경 시 로컬 스토리지에 저장
    modalToggle.addEventListener('change', function() {
        if (modalToggle.checked) {
            localStorage.setItem('modalChecked', 'true');
        } else {
            localStorage.setItem('modalChecked', 'false');
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
    var model3 = $('.m-winter-model3');
    var model4 = $('.m-winter-model4');

    $(window).scroll(function() {
        var currentScrollPosition = $(window).scrollTop();
        var scrollPositionToStartAnimation = $('#winter-top').offset().top - $(window).height();
        var scrollPositionToStartAnimation = $('#m-winter-top').offset().top - $(window).height();
        

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
            model3.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '0.7');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });
            model4.each(function(index) {
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
            model3.css('opacity', '0');
            model4.css('opacity', '0');
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
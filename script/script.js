// 상단 고정 네비게이션
window.addEventListener("scroll", function() {
    const header = this.document.querySelector("#top-nav");
    if(this.window.scrollY > 0) {
        header.classList.add("sticky");
    } 
    else {
        header.classList.remove("sticky");
    }
});


// 퀵 네비게이션 효과
$(function() {
    $('.menuBtn'). on('click', 
    function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('#navigation').toggleClass('visible');
    });
});


// 표지 원 애니메이션
var isAnimating4 = false;
$(document).ready(function() {
  $('.ellipse').removeClass('animate-ellipse');
  
  $(window).scroll(function() {
    var currentScrollPosition = $(window).scrollTop();
    
    if (isAnimating4) {
      return;
    }
    
    var scrollPositionToStartAnimation = $('#front').offset().top - $(window).height();
    
    if (currentScrollPosition < scrollPositionToStartAnimation) {
      $('.ellipse').removeClass('animate-ellipse');
      // isAnimating4 = false;
    }

    if (!isAnimating2 && currentScrollPosition >=scrollPositionToStartAnimation) {
      // 애니메이션을 트리거할 때 animationTriggered4 상태를 true로 변경
      isAnimating4 = true;

      $('.ellipse').fadeIn(700, function() {
        $(this).addClass('animate-ellipse');
        isAnimating4 = false;
      });
    }
  });

  // 페이지가 활성화되었는지 여부를 확인하는 이벤트
  $(window).focus(function() {
    // 페이지가 활성화되면 애니메이션 트리거 상태를 다시 false로 변경
    animationTriggered = false;
  });

  $(window).blur(function() {
    // 페이지가 비활성화될 때 애니메이션을 중지
    isAnimating4 = false;
  });
});



// about 페이지 border 애니메이션
var isAnimating3 = false;
$(document).ready(function() {
  // 초기 상태로 스타일 설정
  $('.hello').removeClass('border-animation');
  $('.experience-title').removeClass('border-animation2');
  $('.ability-title').removeClass('border-animation3');
  $('.exp-txt').removeClass('border-animation4');
  
  
  $(window).scroll(function() {
    var currentScrollPosition = $(window).scrollTop();

    if (isAnimating3){
      return;
    }

    var scrollPositionToStartAnimation = $('.ability').offset().top - $(window).height();
    // 애니메이션이 이미 진행 중이라면 아무 작업도 하지 않음
    if (currentScrollPosition < scrollPositionToStartAnimation) {
      $('.hello').removeClass('border-animation');
      $('.experience-title').removeClass('border-animation2');
      $('.ability-title').removeClass('border-animation3');
      $('.exp-txt').removeClass('border-animation4');
      isAnimating3 = false;
    }
    // if (currentScrollPosition > scrollPositionToStartAnimation) {
    //   $('.hello').removeClass('border-animation');
    //   $('.experience-title').removeClass('border-animation2');
    //   $('.ability-title').removeClass('border-animation3');
    //   $('.exp-txt').removeClass('border-animation4');

    // }

    if (!isAnimating2 && currentScrollPosition >=scrollPositionToStartAnimation) {
      isAnimating3 = true;
      $('.hello').fadeIn(700,function() {
        $(this).addClass('border-animation');
        // isAnimating3 = false;
      });
      $('.experience-title').delay(100).fadeIn(700,function() {
        $(this).addClass('border-animation2');
        // isAnimating3 = false;
      });
      $('.ability-title').delay(200).fadeIn(700,function() {
        $(this).addClass('border-animation3');
        // isAnimating3 = false;
      });
      $('.exp-txt').delay(300).fadeIn(700,function() {
        $(this).addClass('border-animation4');
        isAnimating3 = false;
      });
    }
  });
});
// var isAnimating3 = false;

// $(window).scroll(function() {
//   var currentScrollPosition = $(window).scrollTop();

//   if (isAnimating3) {
//     return;
//   }

//   var scrollPositionToStartAnimation = $('.ability').offset().top - $(window).height();

//   if (currentScrollPosition < scrollPositionToStartAnimation) {
//     $('.hello').removeClass('border-animation');
//     $('.experience-title').removeClass('border-animation2');
//     $('.ability-title').removeClass('border-animation3');
//     $('.exp-txt').removeClass('border-animation4');
//     isAnimating3 = false;
//   }

//   if (!isAnimating3 && currentScrollPosition >= scrollPositionToStartAnimation) {
//     isAnimating3 = true;

//     $('.hello').animate({ opacity: 1 }, 700, function() {
//       $(this).addClass('border-animation');
//       $('.experience-title').delay(100).animate({ opacity: 1 }, 700, function() {
//         $(this).addClass('border-animation2');
//         $('.exp-txt').delay(100).animate({ opacity: 1 }, 700, function() {
//           $(this).addClass('border-animation4');
//           $('.ability-title').delay(100).animate({ opacity: 1 }, 500, function() {
//             $(this).addClass('border-animation3');
//             isAnimating3 = false;
//           });
//         });
//       });
//     });
//   }
// });



// 웹 포트폴리오 탭 메뉴
function tabMenu1() {
  function hideShow(no) {
    $('.web-view .pf').removeClass('active');
    $('.web-view .web-' + no).addClass('active');
  }
  $('.web-view > .web-nav .web-1').click(function () {
    hideShow(1);
  });
  $('.web-view > .web-nav .web-2').click(function () {
    hideShow(2);
  });
  $('.web-view > .web-nav .web-3').click(function () {
    hideShow(3);
  });
}
tabMenu1();

function tabMenu() {
  function hideShow(no) {
    $('.portfolio-graphic .pf').removeClass('active');
    $('.portfolio-graphic .graphic-' + no).addClass('active');
  }
  $('.web-view > .web-nav .graphic-1').click(function () {
    hideShow(1);
  });
  $('.web-view > .web-nav .graphic-2').click(function () {
    hideShow(1);
  });
}
tabMenu();


// 프로필 페이지 스킬 바 애니메이션
var isAnimating1 = false; // 전역 범위에서 isAnimating을 선언
$(document).ready(function() {
  var $baranimatedElement1 = $('.fill-ps');
  var $baranimatedElement2 = $('.fill-ai');
  var $baranimatedElement3 = $('.fill-prae');
  var $baranimatedElement4 = $('.fill-html');
  var $baranimatedElement5 = $('.fill-css');
  var $baranimatedElement6 = $('.fill-js');
  $baranimatedElement1.css({ width : 0 });
  $baranimatedElement2.css({ width : 0 });
  $baranimatedElement3.css({ width : 0 });
  $baranimatedElement4.css({ width : 0 });
  $baranimatedElement5.css({ width : 0 });
  $baranimatedElement6.css({ width : 0 });
  
  $(window).scroll(function() {
    var currentScrollPosition = $(window).scrollTop();
    
    if (isAnimating1) {
      return;
    }
    
    var scrollPositionToStartAnimation = $('.skill-tool').offset().top - $(window).height();
    
    if (currentScrollPosition <= scrollPositionToStartAnimation) {
      $baranimatedElement1.css({ width : 0 });
      $baranimatedElement2.css({ width : 0 });
      $baranimatedElement3.css({ width : 0 });
      $baranimatedElement4.css({ width : 0 });
      $baranimatedElement5.css({ width : 0 });
      $baranimatedElement6.css({ width : 0 });
      // 애니메이션 중이면서 스크롤 위치가 애니메이션을 시작할 위치보다 크거나 같을 때
      isAnimating1 = false
    }

    if (!isAnimating1 && currentScrollPosition >= scrollPositionToStartAnimation) {
      isAnimating1 = true;

      $baranimatedElement1.animate(
        {
          width: '93%'
        },
        2000,
        'linear',
        function() {
          isAnimating = false;
        }
      );
      $('.fill-ps').fadeIn(800,function() {
        $(this).addClass('fill-animation');
        isAnimating1 = false;
      });
      $baranimatedElement2.animate(
        {
          width: '85%',
        },
        2000,
        'linear',
        function() {
          isAnimating1 = false;
        }
      );
      $baranimatedElement3.animate(
        {
          width: '30%'
        },
        2000,
        'linear',
        function() {
          isAnimating1 = false;
        }
      );
      $baranimatedElement4.animate(
        {
          width: '80%'
        },
        2000,
        'linear',
        function() {
          isAnimating1 = false;
        }
      );
      $baranimatedElement5.animate(
        {
          width: '60%'
        },
        2000,
        'linear',
        function() {
          isAnimating1 = false;
        }
      );
      $baranimatedElement6.animate(
        {
          width: '40%'
        },
        2000,
        'linear',
        function() {
          isAnimating1 = false;
        }
      );
    }
  });
});



// 이모티콘 애니메이션
var isAnimating2 = false; // 전역 범위에서 isAnimating을 선언

$(document).ready(function() {
  // 초기 상태로 스타일 설정
  // var $animatedElement = $('.emoticon-img2');
  $('#emoticon-img2').removeClass('emo-animation');
  $('#emoticon-img3').removeClass('emo-animation');
  $('#emoticon-img4').removeClass('emo-animation');

  // 스크롤 이벤트 핸들러
  $(window).scroll(function() {
    // 현재 스크롤 위치를 가져옵니다.
    var currentScrollPosition = $(window).scrollTop();
    
    if (isAnimating2){
      return;
    }

    // 애니메이션을 시작할 스크롤 위치를 정의합니다.
    var scrollPositionToStartAnimation = $('.emoticon-about p').offset().top - $(window).height();
    
    // 애니메이션이 이미 진행 중이라면 아무 작업도 하지 않음
    if (currentScrollPosition <= scrollPositionToStartAnimation) {
      $('#emoticon-img2').removeClass('emo-animation');
      $('#emoticon-img3').removeClass('emo-animation');
      $('#emoticon-img4').removeClass('emo-animation');
      // 애니메이션 중이면서 스크롤 위치가 애니메이션을 시작할 위치보다 크거나 같을 때
      isAnimating2 = false;
    }
    if (currentScrollPosition >= scrollPositionToStartAnimation) {
      $('#emoticon-img2').removeClass('emo-animation');
      $('#emoticon-img3').removeClass('emo-animation');
      $('#emoticon-img4').removeClass('emo-animation');
      // 애니메이션 중이면서 스크롤 위치가 애니메이션을 시작할 위치보다 크거나 같을 때
      // isAnimating = false;
    }

    if (!isAnimating2 && currentScrollPosition >= scrollPositionToStartAnimation) {
      // 애니메이션 중 상태로 설정
      isAnimating2 = true;

      $('#emoticon-img2').fadeIn(800,function() {
        $(this).addClass('emo-animation');
        isAnimating2 = false;
      });
      $('#emoticon-img3').fadeIn(800,function() {
        $(this).addClass('emo-animation');
        isAnimating2 = false;
      });
      $('#emoticon-img4').fadeIn(800,function() {
        $(this).addClass('emo-animation');
        isAnimating2 = false;
      });
      
    }
  });
  // 페이지가 활성화되었는지 여부를 확인하는 이벤트
  $(window).focus(function() {
    // 페이지가 활성화되면 스크롤 애니메이션을 다시 활성화
    scrollAnimationTriggered = false;
  });
  $(window).blur(function() {
    animationStarted = false;
  });
});

// 웹 포트폴리오 네비게이션
$(document).ready(function() {
  $('.btn2.select2').hide();
  $('.btn3.select3').hide();
  $('.web-1').click(function() {
    $('#sculptor').show();
    $('#asics').hide();
    $('#mangosix').hide();
    $(".web-1").addClass('active');
    $(".web-2 a").css('backgroundColor','transparent');
    $(".web-3 a").css('backgroundColor','transparent');
    $(".web-2").css('color','white');
    $('.btn1.select1').show();
    $('.btn2.select2').hide();
    $('.btn3.select3').hide();
  });
  $('.web-2').click(function() {
    $('#asics').show();
    $('#sculptor').hide();
    $('#mangosix').hide();
    $(".web-2 a").css({
      backgroundColor : '#5a72b3',  
    });
    $(".web-1").removeClass('active');
    $(".web-3 a").css('backgroundColor','transparent');
    $('.btn2.select2').show();
    $('.btn1.select1').hide();
    $('.btn3.select3').hide();
  });
  $('.web-3').click(function() {
    $('#mangosix').show();
    $('#sculptor').hide();
    $('#ascis').hide();
    $(".web-3 a").css({
      backgroundColor : '#5a72b3',  
    });
    $(".web-2 a").css('backgroundColor','transparent');
    $(".web-1").removeClass('active');
    $('.btn3.select3').show();
    $('.btn1.select1').hide();
    $('.btn2.select2').hide();
  });
});



//그래픽 페이지 네비게이션
$(document).ready(function() {
  $('#graphic-work').hide();
  $('.graphic-1').click(function() {
    $('#graphic-personal').show();
    $('#graphic-work').hide();
    $(".graphic-1").addClass('active');
    $(".graphic-2").css('backgroundColor','transparent');
    $(".graphic-2").css('color','white');
  });
  $('.graphic-2').click(function() {
    $('#graphic-work').show();
    $('#graphic-personal').hide();
    $(".graphic-2").css({
      backgroundColor : 'rgba(255, 255, 255, 0.7)',  
      color : 'black'
    });
    $(".graphic-1").removeClass('active');
  });
  
  // 확대&슬라이드 애니메이션
  //  - 카드뉴스
  $("#openModal").click(function() {
      $("#myModal").show();
  });
  $("#closeModal").click(function() {
      $("#myModal").hide();
    });
  
  // - 패키지 디자인
  $("#openModal2").click(function() {
      $("#myModal2").show();
  });

  $("#closeModal2").click(function() {
      $("#myModal2").hide();
    });

  //  - 앱 디자인
  $("#openModal3").click(function() {
      $("#myModal3").show();
  });
  $("#closeModal3").click(function() {
      $("#myModal3").hide();
    });

});

$(document).ready(function() {
  // 아트 워크 
  //  - 템버린즈 배너
  $("#openModal4").click(function() {
    $("#myModal4").show();
  });
  $("#closeModal4").click(function() {
    $("#myModal4").hide();
  });
  
  //  - 루피 배너
  $("#openModal5").click(function() {
    $("#myModal5").show();
  });
  $("#closeModal5").click(function() {
    $("#myModal5").hide();
  });

  //  - 유튜브 썸네일&로고
  $("#openModal6").click(function() {
    $("#myModal6").show();
  });
  $("#closeModal6").click(function() {
    $("#myModal6").hide();
  });
  
  //  - 투쿨포스쿨 배너
  $("#openModal7").click(function() {
    $("#myModal7").show();
  });
  $("#closeModal7").click(function() {
    $("#myModal7").hide();
  });

  //  - 여행사 메인페이지
  $("#openModal8").click(function() {
    $("#myModal8").show();
  });
  $("#closeModal8").click(function() {
    $("#myModal8").hide();
  });
});

$(document).ready(function() {
  // 현재 슬라이드의 인덱스를 추적
  var currentSlide = 0;

  // 슬라이드 이미지 요소를 모두 선택
  var slides = $('.slider li');
  var numSlides = slides.length;

  // 좌측 버튼 클릭 시
  $('#prevSlide').on('click', function() {
    // 현재 슬라이드가 첫 번째 슬라이드보다 크면 (0보다 크면)
    if (currentSlide > 0) {
      // 현재 슬라이드를 감소
      currentSlide--;
      // 슬라이드를 표시
      showSlide();
    }
  });

  // 우측 버튼 클릭 시
  $('#nextSlide').on('click', function() {
    // 현재 슬라이드가 마지막 슬라이드보다 작으면 (마지막 슬라이드보다 작으면)
    if (currentSlide < numSlides - 1) {
      // 현재 슬라이드를 증가
      currentSlide++;
      // 슬라이드를 표시
      showSlide();
    }
  });

  // 슬라이드를 표시하는 함수
  function showSlide() {
    // 모든 슬라이드를 숨김
    slides.hide();
    // 현재 슬라이드만 표시
    slides.eq(currentSlide).show();
  }

  // 페이지 로드 시 첫 번째 슬라이드 표시
  showSlide();
});












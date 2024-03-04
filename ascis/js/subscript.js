// 마우스 커서 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove',function(e) {
        // 마우스 위치에 따라 커서 아이콘 위치 업데이트
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });
});

// vallaholic 모델 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const ballModel = document.getElementById('ball-model');

    function fadeInElement() {
        ballModel.classList.remove('hidden'); // hidden 클래스를 제거하여 이미지를 보이게 합니다.
        ballModel.style.opacity = '1'; // 이미지의 투명도를 조정하여 fade-in 효과를 적용합니다.
        window.removeEventListener('DOMContentLoaded', fadeInElement); // 이벤트 리스너를 제거합니다.
    }

    window.addEventListener('DOMContentLoaded', fadeInElement);
});


// ballaholic 텍스트 애니메이션
// document.addEventListener('DOMContentLoaded', function() {
//     const fillText = document.querySelector('.fill');
//     fillText.classList.add('animate'); // 페이지 로드시 애니메이션 시작
// });

var isAnimating3 = false;
$(document).ready(function() {
    
    $(window).scroll(function() {
        var currentScrollPosition = $(window).scrollTop();

        if (isAnimating3) {
            return;
        }

        var scrollPositionTostartAnimation = $('#ballaholic-title').offset().top - $(window).height();
        if (currentScrollPosition < scrollPositionTostartAnimation) {
            $('.fill').removeClass('animate');
            isAnimating3 = false;
        }
        
        if(!isAnimating3 && currentScrollPosition >= scrollPositionTostartAnimation) {
            isAnimating3 = true;
            $('.fill').addClass('animate');
            isAnimating3 = false;
        }
    });
});

// Sneakers Politics line 애니메이션 
var isAnimating8 = false;
$(document).ready(function() {
    $('.line2').removeClass('line-animation2');

    $(window).scroll(function() {
        var currentScrollPosition = $(window).scrollTop();

        if (isAnimating8) {
            return;
        }

        var scrollPositionTostartAnimation = $('#ball-logo').offset().top - $(window).height();
        if (currentScrollPosition < scrollPositionTostartAnimation) {
            isAnimating8 = true;
            $('.line2').removeClass('line-animation2');
            isAnimating8 = false;
        }

        if(!isAnimating8 && currentScrollPosition >= scrollPositionTostartAnimation) {
            $('.line2').fadeIn(700, function() {
                $(this).addClass('line-animation2');
            });
            isAnimating8 = false;
        }
    });
});

// 할스튜디오스 이미지 애니메이션
isAnimating4 = false;
$(document).ready(function() {
    $('#hal-shoes1').removeClass('slide-animation');
    var halShoes2 = $('#hal-shoes2');
    
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();

        if (isAnimating4) {
            return;
        }
        
        var scrollPositionTostartAnimation = $('#halstudios-title').offset().top - $(window).height();
        if (scrollPosition < scrollPositionTostartAnimation) {
            $('#hal-shoes1').removeClass('slide-animation');
            halShoes2.css('opacity', '0');
            isAnimating4 = false;
        }
        
        if (!isAnimating4 && scrollPosition >= scrollPositionTostartAnimation ) {
            isAnimating4 = true
            $('#hal-shoes1').addClass('slide-animation');
            var delay = 2000; // 각 요소의 나타나는 지연시간

            halShoes2.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });
            isAnimating4 = false;
        } else {
            // 스크롤 위치에 도달하지 않으면 모든 요소를 숨김
            halShoes2.css('opacity', '0');
        }
    });
});


// Sneakers Politics line 애니메이션 
var isAnimating = false;
$(document).ready(function() {
    var spLogo = $('.sp-title > p');
    $('.line').removeClass('line-animation');

    $(window).scroll(function() {
        var currentScrollPosition = $(window).scrollTop();

        if (isAnimating) {
            return;
        }

        var scrollPositionTostartAnimation = $('#list').offset().top - $(window).height();
        if (currentScrollPosition < scrollPositionTostartAnimation) {
            isAnimating = true;
            $('.line').removeClass('line-animation');
            isAnimating = false;
        }

        if(!isAnimating && currentScrollPosition >= scrollPositionTostartAnimation) {
            $('.line').fadeIn(700, function() {
                $(this).addClass('line-animation');
            });

            var delay = 3000; // 각 요소의 나타나는 지연시간

            spLogo.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });
            isAnimating = false;
        } else {
            // 스크롤 위치에 도달하지 않으면 모든 요소를 숨김
            spLogo.css('opacity', '0');

        }
    });
});

    
// Sneakers Politics 이미지 변환
document.addEventListener('DOMContentLoaded', function() {
    const spItemlist1 = document.getElementById('sp-itemlist');
    const spItemlist2 = document.getElementById('sp-itemlist2');

    spItemlist2.style.display = 'none';

    document.querySelector('.nextButton').addEventListener('click', function() {
        if (spItemlist1.style.display === 'block') {
            spItemlist1.style.display = 'none';
            spItemlist2.style.display = 'block';
        } else {
            spItemlist1.style.display = 'block';
            spItemlist2.style.display = 'none';
        }
    });
});


// jjjjound about 설명
$(document).ready(function() {
    $('.about-btn > p').hide();
    $('.about-btn > button').click(function() {
        $('.about-btn > p').fadeIn();
    });
    $('.about-btn > p > button').click(function() {
        $('.about-btn > p').fadeOut();
    });
})

// jjjjound 신발 애니메이션
var isAnimating5 = false;
$(document).ready(function() {
    $('#jjj-shoes1').removeClass('slide-animation2');
    $('#jjj-shoes3').removeClass('slide-animation3');
    // var halShoes2 = $('#hal-shoes2');
    
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        
        if (isAnimating5) {
            return;
        }
        
        var scrollPositionTostartAnimation = $('#jjjjound-logo').offset().top - $(window).height();
        if (scrollPosition < scrollPositionTostartAnimation) {
            $('#jjj-shoes1').removeClass('slide-animation2');
            $('#jjj-shoes3').removeClass('slide-animation3');
            isAnimating5 = false;
        }
        
        if (!isAnimating5 && scrollPosition >= scrollPositionTostartAnimation ) {
            isAnimating5 = true
            $('#jjj-shoes1').addClass('slide-animation2');
            $('#jjj-shoes3').addClass('slide-animation3');
            isAnimating5 = false;
        } 
    });
});

// afew-title 선 애니메이샨
var isAnimating10 = false;
$(document).ready(function() {
    $('.line3').removeClass('line-animation3');

    $(window).scroll(function() {
        var currentScrollPosition = $(window).scrollTop();

        if (isAnimating10) {
            return;
        }

        var scrollPositionTostartAnimation = $('#afew-i4p').offset().top - $(window).height();
        if (currentScrollPosition < scrollPositionTostartAnimation) {
            isAnimating10 = true;
            $('.line3').removeClass('line-animation3');
            isAnimating10 = false;
        }

        if(!isAnimating10 && currentScrollPosition >= scrollPositionTostartAnimation) {
            $('.line3').fadeIn(700, function() {
                $(this).addClass('line-animation3');
            });
            isAnimating10 = false;
        }
    });
});

// afew gel-lyte3 타이핑 애니메이션 
var isAnimating6 = false;
$(document).ready(function() {
    $('#afew-title-explain > p').removeClass('typing');
    
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        
        if (isAnimating6) {
            return;
        }
        
        var scrollPositionTostartAnimation = $('#afew-title-explain').offset().top - $(window).height();
        if (scrollPosition < scrollPositionTostartAnimation) {
            $('#afew-title-explain > p').removeClass('typing');
            isAnimating6 = false;
        }
        
        if (!isAnimating6 && scrollPosition >= scrollPositionTostartAnimation ) {
            isAnimating6 = true
            $('#afew-title-explain > p').addClass('typing');
        } 
        isAnimating6 = false;
    });
});
  
// i4p 이미지 fade-in 애니메이션
isAnimating7 = false;
$(document).ready(function() {
    var i4pModel = $('#i4p-model1');
    var i4pModel2 = $('#i4p-model2');
    $('#i4p-title').removeClass('large');
    
    
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        
        if (isAnimating7) {
            return;
        }
        
        var scrollPositionTostartAnimation = $('#i4p-explain').offset().top - $(window).height();
        if (scrollPosition < scrollPositionTostartAnimation) {
            i4pModel.css('opacity', '0');
            i4pModel2.css('opacity', '0');
            $('#i4p-title').removeClass('large');
            isAnimating7 = false;
        }
        
        if (!isAnimating7 && scrollPosition >= scrollPositionTostartAnimation ) {
            isAnimating7 = true
            $('#i4p-title').addClass('large');
            var delay = 2000; // 각 요소의 나타나는 지연시간
            
            i4pModel.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });
            i4pModel2.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });
            isAnimating7 = false;
        } else {
            // 스크롤 위치에 도달하지 않으면 모든 요소를 숨김
            i4pModel.css('opacity', '0');
            i4pModel2.css('opacity', '0');
        }
    });
});

// vivienne-westwood about 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const unlockButton = document.getElementById('unlockButton');
    const slideCircle = document.querySelector('.slide-circle');
    const vivienneExplain = document.getElementById('vivi-explain');

    unlockButton.addEventListener('mousedown', function(event) {
        // 원의 위치를 오른쪽으로 이동하여 슬라이딩 효과를 생성합니다.
        slideCircle.style.left = '65px';
        
        // p 요소를 보이도록 설정합니다.
        vivienneExplain.style.display = 'block';
    });
    
    unlockButton.addEventListener('mouseup', function(event) {
        // 마우스 버튼을 뗄 때 원의 위치를 초기화합니다.
        slideCircle.style.left = '5px';
        
        // p 요소를 가립니다.
        vivienneExplain.style.display = 'none';
    });
});

// 아식스 x 비비안웨스트우드 로고 fade-in 애니메이션 
isAnimating9 = false;
$(document).ready(function() {
    var asicsLogo = $('#asics-logo');
    var vivienneLogo = $('#vivienne-logo');
    
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        
        if (isAnimating9) {
            return;
        }
        
        var scrollPositionTostartAnimation = $('#vivienne').offset().top - $(window).height();
        if (scrollPosition < scrollPositionTostartAnimation) {
            asicsLogo.css('opacity', '0');
            vivienneLogo.css('opacity', '0');
            isAnimating9 = false;
        }
        
        if (!isAnimating9 && scrollPosition >= scrollPositionTostartAnimation ) {
            isAnimating9 = true
            var delay = 2000; // 각 요소의 나타나는 지연시간
            
            asicsLogo.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });
            vivienneLogo.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });
            isAnimating9 = false;
        } else {
            // 스크롤 위치에 도달하지 않으면 모든 요소를 숨김
            asicsLogo.css('opacity', '0');
            vivienneLogo.css('opacity', '0');
        }
    });
});

// 누레이블 이미지 fade-in 애니메이션
isAnimating11 = false;
$(document).ready(function() {
    var nulabelShoes = $('.nulabel-shoes1');
    var nulabelShoes2 = $('.nulabel-shoes2');    
    
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        
        if (isAnimating7) {
            return;
        }
        
        var scrollPositionTostartAnimation = $('#nulabel').offset().top - $(window).height();
        if (scrollPosition < scrollPositionTostartAnimation) {
            nulabelShoes.css('opacity', '0');
            nulabelShoes2.css('opacity', '0');
            isAnimating11 = false;
        }
        
        if (!isAnimating11 && scrollPosition >= scrollPositionTostartAnimation ) {
            isAnimating11 = true
            var delay = 2000; // 각 요소의 나타나는 지연시간
            
            nulabelShoes.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, index * delay); // 각 요소마다 순차적인 지연시간 적용
            });
            nulabelShoes2.each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css('opacity', '1');
                }, index * delay*2); // 각 요소마다 순차적인 지연시간 적용
            });
            isAnimating11 = false;
        } else {
            // 스크롤 위치에 도달하지 않으면 모든 요소를 숨김
            nulabelShoes.css('opacity', '0');
            nulabelShoes2.css('opacity', '0');
        }
    });
});

// 마우스 커서 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove',function(e) {
        // 마우스 위치에 따라 커서 아이콘 위치 업데이트
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });
});

// 메인 배너 슬라이드
document.addEventListener('DOMContentLoaded', function() {
    const slideBanner = document.getElementById('slide-banner');
    const intervalId = setInterval(function() {
        // const firstSlide = document.querySelector('#slide-banner > li');

        slideBanner.style.transition = 'transform 0.5s ease-in-out';
        slideBanner.style.transform = 'translateX(-100%)';
        
        setTimeout(function() {
            // 첫 번째 슬라이드 복제 및 추가
            const firstSlide = document.querySelector('#slide-banner > li');
            const clonedSlide = firstSlide.cloneNode(true);
            slideBanner.appendChild(clonedSlide);
            // slideBanner.appendChild(firstSlide.cloneNode(true));

            // 첫 번째 슬라이드 제거
            slideBanner.removeChild(firstSlide);

            // transition 및 transform 초기화
            slideBanner.style.transition = 'none';
            slideBanner.style.transform = 'translateX(0)';
        }, 500);
    }, 3000);
    var elementToRemove = document.getElementById('yourElementId');

    // 요소가 존재하고, 부모 노드의 자식인지 확인 후 제거
    if (elementToRemove && elementToRemove.parentNode) {
    elementToRemove.parentNode.removeChild(elementToRemove);
    }

    // 필요에 따라 interval 해제
    // clearInterval(intervalId);
});

// collaboration 이미지 변환
document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.list-item');
    
    productItems.forEach(function(productItem) {
        let currentImageIndex = 0;
        const images = productItem.querySelectorAll('img');
        const totalImages = images.length;
        
        setInterval(function() {
            images[currentImageIndex].style.display = 'none';
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            images[currentImageIndex].style.display = 'block';
        }, 2000);
    });
});

/* 젤 카야노 14 이미지 확대 */
/* JavaScript 코드 */
document.addEventListener('DOMContentLoaded', function() {
    const gelImg = document.querySelector('#gel-img');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gelImg.classList.add('show');
            } else {
                gelImg.classList.remove('show');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% 이상 진입 시 콜백 함수 실행
    });

    observer.observe(gelImg);

    // JavaScript 코드
    
});

function changeImage(imageIndex) {
    const images = document.querySelectorAll('#item-img > div');

    images.forEach(image => {
        image.style.display = 'none';
    });

    images[imageIndex - 1].style.display = 'block';
}


// 실시간 베스트 효과
$(document).ready(function() {
    var ranks = $(".rank");
    var index = 0;
    var interval = 3000; // 각 랭킹이 표시될 시간 (3초)

    ranks.hide(); // 초기에는 모든 rank를 숨김
    ranks.eq(0).show(); // 초기에는 첫 번째 rank만 표시

    function showRank() {
        ranks.eq(index).fadeOut(1000); // 현재 rank fade out
        index = (index + 1) % ranks.length; // 다음 index로 업데이트
        ranks.eq(index).fadeIn(1000); // 다음 rank fade in
    }

    setInterval(showRank, interval); // 일정 시간 간격으로 rank 변경
});


// 브랜드 스토리 버튼 효관
document.addEventListener('DOMContentLoaded', function() {
    const historyBoxes1 = document.getElementById('history-box1');
    const historyBoxes2 = document.getElementById('history-box2');
    const historyBoxes3 = document.getElementById('history-box3');
    const historyBoxes4 = document.getElementById('history-box4');

    historyBoxes3.style.display = 'none';
    historyBoxes4.style.display = 'none';

    document.querySelector('.more-btn').addEventListener('click', function() {
        if (historyBoxes1.style.display === 'block') {
            historyBoxes1.style.display = 'none';
            historyBoxes2.style.display = 'none';
            historyBoxes3.style.display = 'block';
            historyBoxes4.style.display = 'block';
        } else {
            historyBoxes1.style.display = 'block';
            historyBoxes2.style.display = 'block';
            historyBoxes3.style.display = 'none';
            historyBoxes4.style.display = 'none';
        }
    });
});


window.addEventListener('scroll', function() {
    var membershipSection = document.getElementById('membership');
    var membershipContent = document.querySelector('.parallax-content');
    var membershipTxt = document.getElementById('membership-txt');
    var membershipTitle = document.getElementById('membership-title');

    var membershipBottom = membershipSection.getBoundingClientRect().bottom;
    var membershipHeight = membershipContent.offsetHeight;

    if (membershipBottom < membershipHeight) {
        membershipContent.style.opacity = '0';
    } else {
        membershipContent.style.opacity = '1';
    }
});

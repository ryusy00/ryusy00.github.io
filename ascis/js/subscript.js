// 마우스 커서 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove',function(e) {
        // 마우스 위치에 따라 커서 아이콘 위치 업데이트
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });
});
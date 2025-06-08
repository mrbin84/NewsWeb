// script.js

document.addEventListener('DOMContentLoaded', function() {
    // 필요한 DOM 요소들을 선택합니다.
    const menuToggle = document.querySelector('.menu-toggle');         // 햄버거 메뉴 아이콘 버튼
    const closeBtn = document.querySelector('.close-btn');           // 슬라이드 메뉴 내 닫기(X) 버튼
    const sidebar = document.querySelector('.sidebar');              // 슬라이드 아웃 메뉴 영역
    const sidebarOverlay = document.querySelector('.sidebar-overlay');   // 메뉴가 열렸을 때 뒷배경을 어둡게 하는 오버레이
    const body = document.body;                                    // body 태그 (스크롤 제어용)

    // 햄버거 메뉴 버튼 클릭 이벤트 리스너
    if (menuToggle) { // 요소가 존재할 때만 이벤트 리스너 추가
        menuToggle.addEventListener('click', function() {
            sidebar.classList.add('active');         // 사이드바에 'active' 클래스 추가하여 보이게 함
            sidebarOverlay.classList.add('active');  // 오버레이에 'active' 클래스 추가하여 보이게 함
            body.style.overflow = 'hidden';          // 본문 스크롤 방지
        });
    }

    // 슬라이드 메뉴 내 닫기(X) 버튼 클릭 이벤트 리스너
    if (closeBtn) { // 요소가 존재할 때만 이벤트 리스너 추가
        closeBtn.addEventListener('click', function() {
            sidebar.classList.remove('active');      // 사이드바에서 'active' 클래스 제거하여 숨김
            sidebarOverlay.classList.remove('active'); // 오버레이에서 'active' 클래스 제거하여 숨김
            body.style.overflow = '';                // 본문 스크롤 다시 허용
        });
    }

    // 배경 오버레이 클릭 이벤트 리스너 (오버레이 클릭 시 메뉴 닫기)
    if (sidebarOverlay) { // 요소가 존재할 때만 이벤트 리스너 추가
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            body.style.overflow = '';
        });
    }
});
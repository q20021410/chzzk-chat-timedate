// ==UserScript==
// @name         치지직 채팅 시간 추가
// @namespace    http://tampermonkey.net/
// @version      2024-04-06
// @description  치지직에서 사용하는 채팅에 채팅이 올라온 시간 정보를 추가 합니다.
// @author       새하얀구름 (https://clsw.kr/)
// @match        https://chzzk.naver.com/live/*
// @icon         data:image/png;base64,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
// @grant        none
// @version      2024.04.06_v1
// ==/UserScript==

// icon source: https://www.flaticon.com/kr/

setTimeout(() => {
    const observer = new MutationObserver((mutationsList, observer) => {
        // 변화된 요소 감지
        mutationsList.forEach(mutation => {
            // 추가된 노드만을 고려
            if (mutation.type === 'childList') {
                // 변경된 요소가 live_chatting_list_wrapper__a5XTV div 요소의 자식인지 확인
                if (mutation.target.classList.contains('live_chatting_list_wrapper__a5XTV')) {
                    // 새로 추가된 자식 노드에 대한 처리
                    mutation.addedNodes.forEach(node => {
                        // live_chatting_list_item__0SGhw 클래스를 가진 요소인지 확인
                        if (node.classList && node.classList.contains('live_chatting_list_item__0SGhw')) {
                            const now = new Date();
                            const hours = String(now.getHours()).padStart(2, '0');
                            const minutes = String(now.getMinutes()).padStart(2, '0');
                            const currentTime = `${hours}:${minutes}`;
                            const button = node.querySelector('.live_chatting_message_wrapper__xpYre');
                            const timeElement = document.createElement('span');
                            timeElement.textContent = `[${currentTime}]`;
                            timeElement.setAttribute('style', 'font-size: 12px;');
                            button.insertAdjacentElement('beforebegin', timeElement);
                        }
                    });
                }
            }
        });
    });

    // 감시할 대상 선택
    const targetNode = document.querySelector('.live_chatting_list_wrapper__a5XTV');

    // 옵션 설정
    const config = { childList: true };

    // 변화 감시 시작
    observer.observe(targetNode, config);
}, 1000); // 1초 후에 실행


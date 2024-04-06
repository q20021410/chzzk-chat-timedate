# chzzk-chat-timedate
치지직 채팅 데이터에 채팅이 올라온 시간 데이터를 추가 합니다.

<p>
  <img src="https://github.com/q20021410/chzzk-chat-timedate/blob/main/img/image1.png">
</p>

치지직의 채팅창에 채팅이 올라온 채팅시간을 추가합니다.
다만 네이버 치지직 채팅이 WebSocket로 가져오는 형태여서 JavaScript로 엑세스 할 수 없기 때문에 한정적으로 데이터를 가져올 수 있습니다.

또한 해당 스크립트는 사용자의 화면에만 출력 되며, 해당 스트리머 및 다른 사용자에게 표시되지 않습니다.

해당 스크립트가 정상적으로 동작 할 수 있는 환경은 아래와 같습니다.
* 방송중인 페이지가 지속적으로 활성화 상태일 때 (최소화 및 다른 탭을 열고 있을땐 잠시 동작 후 스크립트가 정지 합니다.)
* 이전 채팅을 보기 위해 스크롤이 위로 올라가 있지 않을 때.

# 현재 버그
<p>
  <img src="https://github.com/q20021410/chzzk-chat-timedate/blob/main/img/image2.png">
</p>

* 채팅이 텍스트 영역보다 큰 경우 시간 데이터가 메시지 위에 표시 됨.
* 치즈 후원 이후 최초로 오는 메시지 1개는 시간 데이터가 표시 되지 않음.


# 적용 방법.
1. 크롬 웹스토어에 접속하여 [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) 설치<br>
Edge/크롬등 크로미움 계열에서는 해당 페이지에서 설치 가능.
2. [유저 스크립트](https://github.com/q20021410/chzzk-chat-timedate/raw/main/chzzk-time.user.js) 설치
3. 설치후 치지직 새로고침 진행.

### passport local login 

- 에러이름 : Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the clien
  ​    at ServerResponse.setHeader (_http_outgoing.js:470:11)

- 이유 : LocalStrategy 안의 콜백이 두번불림 
- 해결 : 콜백 종료문 1개로 정리

### page 못찾음

- 에러 :  Failed to lookup view "/Users/yeon/dev/workspace_js/boostcamp_member/membership-airbnb/web/views/error.ejs" in views directory "/Users/yeon/dev/workspace_js/boostcamp_member/membership-airbnb/src/views"
- error로 빠져야 되는데 에러 파일이 없음.
- 해결 : 만들어줌

### passport에서 세션을 어디서 막아야됨??

- 일단 다 막음 ㅎ...

### batch file : 비동기 지옥

- 

### 도커에러파티1 - localhost연결할 수 없음 

- 에러 : ECONNREFUSED docker compose mysql 127.0.0.1
- 이유 : 도커 컨테이너로 링크를 걸어줘야 함. 어리석다..
- 그리고 사용자 계정 바꿔줘야 함 ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'rootUser1Go!'
  - 근데 이건 도커 컴포즈에서 설정 줬는데 왜안되는지 모르겠음
- docker port 처리해서 결국은 두번째 포트로 요청보내야 함 

### 도커에러파티2 - 

- 

### 미들웨어 등록에러

- 에러 : Cannot set headers after they are sent to the client
- 원인 send두번해줌. 
- 미들웨어로 분리


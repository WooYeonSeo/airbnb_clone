## docker 명령어

```
docker ps // 실행중인 container 확인 
docker ps -a // 전체 container 확인 

docker start docker run --rm -it ubuntu:16.04 /bin/bash //키보드 입력을 위해 -it 옵션
//프로세스가 종료되면 컨테이너가 자동으로 삭제되도록 --rm 옵션
docker start docker run -it ubuntu:16.04 /bin/bash
 
exit // 하면 컨테이너도 같이 종료
// ctrl p q
 
docker attach // 프로세스 접속
 
//도커 컨테이너 삭제
dockr rm [container_id]
// 도커 이미지 삭제 
docker rmi [imgae_id]
docker rmi -f [imgae_id] // 컨테이너까지 강제삭제 
```

- dcs를 쓸 수도 있다.
- docker cli dashboard

### Dockerfile

- Dockerfile로 만든다

- image build

```javascript
// dockerfile build
docker build --tag testfile:0.1 .


// localport:dockerport 
docker run -p 4000:4000 -it testfile:0.3 /bin/bash
```



## docker run nodejs - port forwarding

```bash
docker run -p 4000:4000 -d nodefile:0.1
```

### dockerhub 
```bash
// 어떤 이미지를 받을지
FROM node:10.16.0-alpine 
// 작성자
MAINTAINER WooYeonSeo <vantovan7414@gmail.com>

// pc -> docker container로 복사, 상위 디렉토리 접근 불가능
COPY ./ /apps/airbnb/

// 기본 워킹 디렉토리 설정, RUN 할 때 마다 초기화 되므로 기본 디렉토리를 잡으려면 설정해 주어야 한다
WORKDIR /apps/airbnb

// console 명령어 실행 개행 \ &로 실행 가능
RUN npm install 

// 기본 포트 오픈
EXPOSE 4000 
```

### 미해결 삽질
- docker image file을 ncp에 올리고 싶었는데, taging된 이미지인데도 업로드가 안된다.
- docker image build할 때 도커파일을 .dockerfile로 만듬.. (그냥 Dockerfile!!!!)
- git private repo는 ssh 인증 키 방식을 써야함.


### 더 해볼것 / 궁금한 것 
- 도커로 자동배포하는 법
- 도커 nginx container 만들기
- 도커파일에서 이미지를 하나만 받을 수 있는건지 궁금 from 뒤에 쭉 쓰면 되나여..
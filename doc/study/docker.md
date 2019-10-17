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

// 도커 컨테이너 로그보기
docker logs 46817472b388
```

- dcs를 쓸 수도 있다.
- docker cli dashboard

### Dockerfile

- Dockerfile로 만든다

- image build

```javascript
// dockerfile build
docker build --tag testfile:0.1 .
docker build --tag nginx:test .
docker build --tag node-airbnb:test .

// localport:dockerport 
docker run -p 4000:4000 -it testfile:0.3 /bin/bash
```



## docker run nodejs - port forwarding

```bash
docker run -p 4000:4000 -d nodefile:0.1
```





- git 설치

sudo apt-get install libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev

```
// apt-get update snd install git
apt-get update && apt-get install -y git
```

**DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s')**







[https://velog.io/@jeff0720/2018-11-18-2111-%EC%9E%91%EC%84%B1%EB%90%A8-iojomvsf0n](https://velog.io/@jeff0720/2018-11-18-2111-작성됨-iojomvsf0n)



## docker bash 접속

-  docker exec -it airbnbDB bash

  > mysql -u root -p


## docker compose 

**Docker compose**는 docker container 여럿을 띄워 관리하는 도구로서 하나의 파일 docker-compose.yml로서 여러 container의 설정을 관리할 수 있다.


```bash
#curl로 설치 
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)"\
          -o /usr/local/bin/docker-compose


# 실행권한 변경
sudo chmod +x /usr/local/bin/docker-compose

# 버전확인 
docker-compose --version

# compose up 
docker-compose up
```


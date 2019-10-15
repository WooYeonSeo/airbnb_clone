FROM ubuntu:16.04
MAINTAINER WooYeonSeo <vantovan7414@gmail.com>
# 1. ubuntu 설치 (패키지 업데이트)
RUN sed -i 's/archive.ubuntu.com/kr.archive.ubuntu.com/g' /etc/apt/sources.list
RUN apt-get update 
RUN apt-get install -y curl
# 2. node install
# apt-get --purge remove nodejs 삭제
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
# 3. git 설치
RUN apt-get install -y git 
RUN mkdir -p /apps
    
# 4. 소스복사 

COPY ./ ./apps 
# 6. basic dir
WORKDIR /apps
# 6. project initailize
RUN npm install 
RUN npm install -g nodemon 

# 3. 소스 복사

EXPOSE 4000
CMD [ "nodemon", "node", "server.js" ]
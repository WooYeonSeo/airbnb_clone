FROM node:10.16.0-alpine
MAINTAINER WooYeonSeo <vantovan7414@gmail.com>

COPY ./ /apps/airbnb/
WORKDIR /apps/airbnb
RUN  npm install
RUN npm install -g nodemon 

# EXPOSE 5000
CMD ["npm", "start","/bin/bash"]
FROM mysql:8.0.17

RUN rm /etc/nginx/conf.d/default.conf

# RUN ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'rootUser1Go!'

COPY default.conf /etc/nginx/conf.d/default.conf
 
CMD ["nginx", "-g", "daemon off;"]


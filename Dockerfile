FROM ubuntu:latest
WORKDIR /app
RUN apt update -y
RUN apt install httpd -y
COPY . /var/www/html
EXPOSE 80
ENTRYPOINT [ "/usr/sbin/httpd","-D","FOREGROUND" ]
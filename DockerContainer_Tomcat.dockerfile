FROM tomcat:10.1-jdk17

RUN sed -i 's/8080/8081/g' /usr/local/tomcat/conf/server.xml

EXPOSE 8081

CMD ["catalina.sh", "run"]

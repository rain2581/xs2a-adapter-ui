FROM adorsys/java:11

MAINTAINER https://github.com/adorsys/xs2a-adapter-ui/

ENV SERVER_PORT 8080
ENV JAVA_OPTS -Xmx1024m
ENV JAVA_TOOL_OPTIONS -Xmx1024m

WORKDIR /opt/xs2a-adapter-ui

COPY target/xs2a-adapter-ui*.jar /opt/xs2a-adapter-ui/xs2a-adapter-ui.jar

USER 0
RUN chmod go+w /opt/xs2a-adapter-ui

USER 1001

EXPOSE 8081

CMD exec $JAVA_HOME/bin/java $JAVA_OPTS -jar /opt/xs2a-adapter-ui/xs2a-adapter-ui.jar
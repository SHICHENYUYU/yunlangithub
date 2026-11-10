# 基础镜像：Eclipse Temurin JDK 11（JRE 精简版，Alpine 系统；openjdk:11-jdk 已下架）
FROM eclipse-temurin:11-jre-alpine

# 镜像维护者
LABEL maintainer="传智教育研发组"

# 设置时区为上海，保证日志时间正确
RUN echo "Asia/Shanghai" > /etc/timezone

# 构建参数：jar 包路径（默认 target 下，可用 --build-arg 覆盖）
ARG PACKAGE_PATH=./target/jzo2o-foundations.jar

# 将 jar 包拷入镜像并重命名为 app.jar
ADD ${PACKAGE_PATH:-./} app.jar

# 服务实际监听端口（与 bootstrap.yml 的 server.port 一致）
EXPOSE 11509

# 启动命令：动态拼接环境变量 JAVA_OPTS 指定的 JVM 参数
ENTRYPOINT ["sh","-c","java -jar $JAVA_OPTS app.jar"]

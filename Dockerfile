FROM mattrayner/lamp:latest-1804

# User/project variables
ENV APACHE_ROOT dist

# System varibales
ENV DEBIAN_FRONTEND noninteractive

COPY . /app

RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get -y install nodejs

CMD ["/run.sh"]


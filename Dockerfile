# https://docs.docker.com/engine/reference/builder/

FROM continuumio/miniconda3:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt update && apt upgrade -y && apt install -qqy \
        wget \
        bzip2 \
        graphviz

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - && apt-get install -y nodejs && apt-get install -y npm

RUN mkdir -p /backend
COPY ./backend/requirements.yml /backend/requirements.yml
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/taxjungle_backend/bin:$PATH
RUN echo 'source activate taxjungle_backend' >~/.bashrc

RUN mkdir -p /scripts
COPY ./scripts /scripts
RUN chmod +x ./scripts*  # Make scripts executable as program

COPY ./backend /backend

RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp
COPY ./frontend /frontend_tmp
WORKDIR frontend_tmp
RUN npm i
RUN npm run build

WORKDIR /backend


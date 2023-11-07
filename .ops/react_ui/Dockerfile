# pull official base image
FROM node:18.15.0-alpine

# set working directory
WORKDIR /react_ui

# add `/react_ui/node_modules/.bin` to $PATH
ENV PATH /react_ui/node_modules/.bin:$PATH

# copy over required files
COPY ./react_ui /react_ui

# install app dependencies
RUN yarn install

# TODO: this has to be done locally for now, the
# digitalocean droplet doesn't have enough memory
# to run this in place
# build PROD static site
# RUN yarn build

# start app
CMD yarn serve -s build -l "${REACT_APP_REACT_UI_PORT}"

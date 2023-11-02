# pull official base image
FROM node:18.15.0-alpine

# set working directory
WORKDIR /react_ui

# add `/react_ui/node_modules/.bin` to $PATH
ENV PATH /react_ui/node_modules/.bin:$PATH

# copy over required files
COPY ./react_ui/package.json /react_ui
COPY ./react_ui/yarn.lock /react_ui

# install app dependencies
RUN yarn install
RUN yarn add react-scripts

# add app
COPY . ./

# start app
CMD yarn serve -s build -l "${REACT_APP_REACT_UI_PORT}"

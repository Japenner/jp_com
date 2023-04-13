# pull official base image
FROM node:18.15.0-alpine

# set working directory
WORKDIR /react_ui

# add `/react_ui/node_modules/.bin` to $PATH
ENV PATH /react_ui/node_modules/.bin:$PATH

# install app dependencies
COPY ./react_ui/package.json /react_ui
COPY ./react_ui/yarn.lock /react_ui
RUN yarn install
RUN yarn add react-scripts@5.0.1

# add app
COPY . ./

# start app
CMD yarn start

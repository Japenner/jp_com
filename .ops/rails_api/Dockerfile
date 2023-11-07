FROM ruby:3.2.0

# Register Yarn package source.
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Install additional packages.
RUN apt update -qq
RUN apt install -y \
  postgresql \
  postgresql-contrib \
  postgresql-client \
  nodejs \
  yarn

# Prepare working directory.
WORKDIR /rails_api
COPY ./rails_api /rails_api
RUN gem install bundler
RUN bundle install

# Configure endpoint.
COPY ./.ops/rails_api/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3001

# Start app server.
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0", "-p", "3001"]

# jp_com

This is my personal site: React frontend and Rails backend, orchestrated by docker-compose.

## Getting Started

- Ensure correct versions are installed:
  - Ruby: 3.0.1
  - Node: 17.9.0
- If on Linux, ensure `libpq-dev` is installed:
  - `sudo apt install libpq-dev`
- `cd` into the `react_ui` library and run:
  - `yarn install`
- `cd` into the `rails_api` directory and run:
  - `bundle install`
- Duplicate `.env.sample` file and rename to `.env`
- Run `docker-compose up`

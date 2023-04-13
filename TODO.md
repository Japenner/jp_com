# TODO

## Things to fix

- Ensure API communication can happen in production
  - Currently, CORS is only allowed for `localhost:4000`, this could cause issues
- Should I implement running app locally without docker? (prolly not worth it)
- Permissions issue with postgres directory every time containers are rebuilt (may be a linux issue)
- Production issues:
  - Fix production deployment (most likely due to changed/outdated ssh keys)
  - Ensure https works properly in production
  - React container continues to die mysteriously

## App-wide updates

- Ops:
  - Automate initial setup/building of app
- Styling:
  - BEM standard
  - Settle on theme (or fundamental color scheme/font)
- Data:
  - Pagination
  - JSON API standard

## Feature ideas

- ADHD reader: Bold the first 30% of each word in an article to make it easier to read
- Interactive resume
- Hover API components to display data in About section (similar to how GitHub does it)
- Site-wide theme switching
- Blog/Wiki (or both)
- Prototypes/Projects/PoCs section (showcase larger personal projects)
- Tools section (useful daily use things)
- Notes section: add RSS feed parser to accumulate interesting links

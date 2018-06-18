[![Build Status](https://travis-ci.org/uzairpm/react-mentoring.svg?branch=task6)](https://travis-ci.org/uzairpm/react-mentoring)
[![Coverage Status](https://coveralls.io/repos/github/uzairpm/react-mentoring/badge.svg?branch=task6)](https://coveralls.io/github/uzairpm/react-mentoring?branch=task6)

The objectives of this branch are,
1) Link app states between each other with React router.

2) By default user lands on a new page with empty results state (caption 0).

3) When user clicks on a film item, redirect him to:
localhost/film/id

4) Handle invalid URLs, display create a 404 page, where user will be redirected in case of invalid URL.

5) On switching search type or sorting type you shouldn’t switch any routes.

6) When user performs a new search, you should redirect him to:
localhost/search/Search%20Query

7) When a new user lands on the page with such URL, you should perform search and display results.

Available commands to run:

### `npm run test`
### `npm run test:coverage`
### `npm run test:e2e`
### `npm run start`
### `npm run start:dev`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
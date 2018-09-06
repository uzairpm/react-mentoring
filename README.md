[![Build Status](https://travis-ci.org/uzairpm/react-mentoring.svg?branch=task7)](https://travis-ci.org/uzairpm/react-mentoring)
[![Coverage Status](https://coveralls.io/repos/github/uzairpm/react-mentoring/badge.svg?branch=task7)](https://coveralls.io/github/uzairpm/react-mentoring?branch=task6)

The objectives of this branch are,

Server Side Rendering

Implement server rendering in your NodeJS application.

Use async actions, redux should provide initial state from server.

Server should handle query parameters to compute correct initial state.

Implement route masking. Next.js provides this functionality out of the box, but its usage is not required. Example of route masking:

localhost/search/Hello%20Friend

localhost/film/id

Add code splitting to your app. You can use dynamic import() syntax in conjunction with webpack, some library (react-loadable), or next.js.

Available commands to run:

### `npm run build`
### `npm run start:exp`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
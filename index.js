import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import App from './src/app';

const port = 3000;
const server = express();

server.use('/dist', express.static(__dirname + '/dist'));
server.get('/*', handleRender);

function renderFullPage(html, preloadedState) {
  return `<!DOCTYPE html>
      <html>
        <head>
        <link rel="stylesheet" 
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" />
          <meta charset=utf-8>
          <title>SSR-Netflixroulette</title>
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="./dist/bundle.js"></script>
        </body>
      </html>
  `;
}

function handleRender(req, res, next) {
  const context = {};
  const store = configureStore();

  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context} >
        <App />
      </StaticRouter>
    </Provider>
  );
  const html = renderToString(app);
  const preloadedState = store.getState();
  
  res.send(renderFullPage(html, preloadedState));
  // next();
}

server.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});

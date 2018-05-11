"use strict";

module.exports = function createNoopServiceWorkerMiddleware(
  path = "/service-worker.js"
) {
  // eslint-disable-next-line consistent-return
  return function noopServiceWorkerMiddleware(context, next) {
    if (context.request && context.request.url === path) {
      context.set("Content-Type", "text/javascript");
      context.body = `// This service worker file is effectively a 'no-op' that will reset any
// previous service worker registered for the same host:port combination.
// In the production build, this file is replaced with an actual service worker
// file that will precache your site's local assets.

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (let windowClient of windowClients) {
      // Force open pages to refresh, so that they have a chance to load the
      // fresh navigation response from the local dev server.
      windowClient.navigate(windowClient.url);
    }
  });
});
`;
    } else {
      return next();
    }
  };
};

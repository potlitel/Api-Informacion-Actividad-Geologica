const cache = require("memory-cache");

let memCache = new cache.Cache();
// duration in minutes
let cacheMiddleware = (duration) => {
  return (req, res, next) => {
    let key = "__express__" + req.originalUrl || req.url;
    let cacheContent = memCache.get(key);
    if (cacheContent) {
      res.setHeader("content-type", "application/json");
      res.send(cacheContent);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        memCache.put(key, body, duration * 60000);
        res.sendResponse(body);
      };
      next();
    }
  };
};

module.exports = {
  cacheMiddleware,
};
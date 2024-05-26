globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, getRequestHost, getRequestProtocol, getQuery as getQuery$1, setHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash, hasProtocol, withHttps, withBase } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "baseURL": "http://localhost:8080",
    "site": {
      "_context": {
        "defaultLocale": "defaults",
        "trailingSlash": "defaults",
        "titleSeparator": "defaults",
        "name": "package.json",
        "indexable": "system",
        "debug": "nuxt:config:site"
      },
      "defaultLocale": "en",
      "trailingSlash": false,
      "titleSeparator": "|",
      "name": "nuxt-app",
      "indexable": true,
      "debug": false
    }
  },
  "nuxt-simple-robots": {
    "credits": true,
    "groups": [
      {
        "userAgent": [
          "*"
        ],
        "disallow": [
          ""
        ],
        "allow": []
      }
    ],
    "sitemap": [],
    "robotsEnabledValue": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "robotsDisabledValue": "noindex, nofollow"
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../raw/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2024-05-12T16:37:04.000Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/chocopy.029aa735.ttf": {
    "type": "font/ttf",
    "etag": "\"86ac-2lQUOv527tKtCSdrMbTp0n+cL+c\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 34476,
    "path": "../public/_nuxt/chocopy.029aa735.ttf"
  },
  "/_nuxt/ComicCard.a25bece2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"48-6X2RjEzWV50yYIparJvfzDg0v2M\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 72,
    "path": "../public/_nuxt/ComicCard.a25bece2.css"
  },
  "/_nuxt/ComicCard.d63079f4.js": {
    "type": "application/javascript",
    "etag": "\"ec7-PJyKlK8Esxj5citUzppGlN4MR1Y\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 3783,
    "path": "../public/_nuxt/ComicCard.d63079f4.js"
  },
  "/_nuxt/ComicsPagination.7b94b174.js": {
    "type": "application/javascript",
    "etag": "\"89f-pFUXTDfiKgqtpusj34QZZIxMxDM\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 2207,
    "path": "../public/_nuxt/ComicsPagination.7b94b174.js"
  },
  "/_nuxt/ComicsPagination.e06075d0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2fd-Q4+L6X1HXMCSqkuNDhGYMtsBCw4\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 765,
    "path": "../public/_nuxt/ComicsPagination.e06075d0.css"
  },
  "/_nuxt/Comments.vue.db416973.js": {
    "type": "application/javascript",
    "etag": "\"a5b-2GJ5JIlG5us0MuNYMeolvYnJuj0\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 2651,
    "path": "../public/_nuxt/Comments.vue.db416973.js"
  },
  "/_nuxt/components.9bb7d1b5.js": {
    "type": "application/javascript",
    "etag": "\"5a0-27HVyc0jpUltHwoSg/dpWwLJLno\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 1440,
    "path": "../public/_nuxt/components.9bb7d1b5.js"
  },
  "/_nuxt/config.518ce47a.js": {
    "type": "application/javascript",
    "etag": "\"cd-NP/ZAP30D2PDQN4prGX/WHU9lac\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 205,
    "path": "../public/_nuxt/config.518ce47a.js"
  },
  "/_nuxt/data.801821c8.js": {
    "type": "application/javascript",
    "etag": "\"757-avgz+66zNblzyy1tniYpWvb+Xzk\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 1879,
    "path": "../public/_nuxt/data.801821c8.js"
  },
  "/_nuxt/default.4e8907c1.js": {
    "type": "application/javascript",
    "etag": "\"26d9-62j2WOOyDb7iFwkNaDlLXDDrdZg\"",
    "mtime": "2024-05-22T07:58:00.998Z",
    "size": 9945,
    "path": "../public/_nuxt/default.4e8907c1.js"
  },
  "/_nuxt/default.a890ca29.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"342-s7DHbEvCZzUq689+nqXGBbLguSc\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 834,
    "path": "../public/_nuxt/default.a890ca29.css"
  },
  "/_nuxt/download_girls.68bfb9e7.webp": {
    "type": "image/webp",
    "etag": "\"5936-sv9RyVRQD1OW++9wfiofCb7kXQw\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 22838,
    "path": "../public/_nuxt/download_girls.68bfb9e7.webp"
  },
  "/_nuxt/entry.71724ffc.js": {
    "type": "application/javascript",
    "etag": "\"17353-Ml+XuVSX2zLtAkoeoTp1j0QoFcI\"",
    "mtime": "2024-05-22T07:58:00.998Z",
    "size": 95059,
    "path": "../public/_nuxt/entry.71724ffc.js"
  },
  "/_nuxt/entry.f0e81955.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4dc-V9ar4WjYPhIrYc1WuA1YgSeQhvQ\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 1244,
    "path": "../public/_nuxt/entry.f0e81955.css"
  },
  "/_nuxt/error-404.1f132b11.js": {
    "type": "application/javascript",
    "etag": "\"92d-8Zu6uFqjcaK6dKCxcg0Kw5quzhY\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 2349,
    "path": "../public/_nuxt/error-404.1f132b11.js"
  },
  "/_nuxt/error-404.8bdbaeb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-jl7r/kE1FF0H+CLPNh+07RJXuFI\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.8bdbaeb8.css"
  },
  "/_nuxt/error-500.716c8d37.js": {
    "type": "application/javascript",
    "etag": "\"7b1-XaX/6ZaXlHiEo+S+CkMeDzRZIWM\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 1969,
    "path": "../public/_nuxt/error-500.716c8d37.js"
  },
  "/_nuxt/error-500.b63a96f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-loEWA9n4Kq4UMBzJyT6hY9SSl00\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.b63a96f5.css"
  },
  "/_nuxt/Icon.31621e1e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-Goh9NAiYJuEQljAvCLCepbumWqg\"",
    "mtime": "2024-05-22T07:58:00.995Z",
    "size": 67,
    "path": "../public/_nuxt/Icon.31621e1e.css"
  },
  "/_nuxt/Icon.d2eaa27f.js": {
    "type": "application/javascript",
    "etag": "\"5375-C2+bJUCkawns6Jg5LpVKejEEvsA\"",
    "mtime": "2024-05-22T07:58:00.998Z",
    "size": 21365,
    "path": "../public/_nuxt/Icon.d2eaa27f.js"
  },
  "/_nuxt/IconCSS.6edc7bff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102-F5FEFmWVF9wjE1jgjQsXqGhD4Cc\"",
    "mtime": "2024-05-22T07:58:00.995Z",
    "size": 258,
    "path": "../public/_nuxt/IconCSS.6edc7bff.css"
  },
  "/_nuxt/IconCSS.ee7beb87.js": {
    "type": "application/javascript",
    "etag": "\"3d5-W8JL2X7eO9cGQkHgRTR2q7jNeHQ\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 981,
    "path": "../public/_nuxt/IconCSS.ee7beb87.js"
  },
  "/_nuxt/index.0bd88c02.js": {
    "type": "application/javascript",
    "etag": "\"262e-ZuWqpDz3o0uI875DaSWA9+a7cKg\"",
    "mtime": "2024-05-22T07:58:00.998Z",
    "size": 9774,
    "path": "../public/_nuxt/index.0bd88c02.js"
  },
  "/_nuxt/index.4b3d092a.js": {
    "type": "application/javascript",
    "etag": "\"a44-FjC0aIiqRVSuljd/ZDgq1j4Em3Y\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 2628,
    "path": "../public/_nuxt/index.4b3d092a.js"
  },
  "/_nuxt/index.4f9c6bce.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16a-VxHYG2hNnBhyEdAdVwTemVbcWFU\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 362,
    "path": "../public/_nuxt/index.4f9c6bce.css"
  },
  "/_nuxt/index.de4697cd.js": {
    "type": "application/javascript",
    "etag": "\"104-cx0SFGlHpU3ES80NO3Ar6Ge6jsw\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 260,
    "path": "../public/_nuxt/index.de4697cd.js"
  },
  "/_nuxt/lich-su.4feea395.js": {
    "type": "application/javascript",
    "etag": "\"5ee-Kp4XkhNR0wqdStDHEdCkRC/VCoQ\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 1518,
    "path": "../public/_nuxt/lich-su.4feea395.js"
  },
  "/_nuxt/logo.83be12af.svg": {
    "type": "image/svg+xml",
    "etag": "\"4bd-hFwR02twN2h4t62DQgXXWG6rwOY\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 1213,
    "path": "../public/_nuxt/logo.83be12af.svg"
  },
  "/_nuxt/Nunito-Bold.34f790c2.ttf": {
    "type": "font/ttf",
    "etag": "\"20258-3qXuwKyirvYuO/xiXPlfnUW1loc\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 131672,
    "path": "../public/_nuxt/Nunito-Bold.34f790c2.ttf"
  },
  "/_nuxt/Nunito-ExtraBold.d215a4a3.ttf": {
    "type": "font/ttf",
    "etag": "\"20228-YIIYOPZnUVPwaZxqhq2EZ6k34PU\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 131624,
    "path": "../public/_nuxt/Nunito-ExtraBold.d215a4a3.ttf"
  },
  "/_nuxt/Nunito-Medium.56a28554.ttf": {
    "type": "font/ttf",
    "etag": "\"20304-DjqXidqmYDv2hwwSRyfDZDtWV0o\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 131844,
    "path": "../public/_nuxt/Nunito-Medium.56a28554.ttf"
  },
  "/_nuxt/Nunito-Regular.a278cc18.ttf": {
    "type": "font/ttf",
    "etag": "\"20298-S3I2umZst38A2MsqF2lswNwrLMk\"",
    "mtime": "2024-05-22T07:58:00.992Z",
    "size": 131736,
    "path": "../public/_nuxt/Nunito-Regular.a278cc18.ttf"
  },
  "/_nuxt/Nunito-SemiBold.28d37096.ttf": {
    "type": "font/ttf",
    "etag": "\"20278-h2Fl1wqi4A9mc3x92HA54mGb8sI\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 131704,
    "path": "../public/_nuxt/Nunito-SemiBold.28d37096.ttf"
  },
  "/_nuxt/nuxt-link.8cc68321.js": {
    "type": "application/javascript",
    "etag": "\"1124-er7LivlFYWudpMXvaPU1vkIGdGA\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 4388,
    "path": "../public/_nuxt/nuxt-link.8cc68321.js"
  },
  "/_nuxt/swiper-vue.1fc45518.js": {
    "type": "application/javascript",
    "etag": "\"267d5-SvP58oJG8HQ2gWmJQ27fDletktA\"",
    "mtime": "2024-05-22T07:58:00.998Z",
    "size": 157653,
    "path": "../public/_nuxt/swiper-vue.1fc45518.js"
  },
  "/_nuxt/swiper-vue.7ec8ca9b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4694-BBgEvyiKZi1xnOhHfGV+38pw1l8\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 18068,
    "path": "../public/_nuxt/swiper-vue.7ec8ca9b.css"
  },
  "/_nuxt/the-loai.c33eb414.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"63-ExJRy04IRLQWOw9+iKfUHTfbFzQ\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 99,
    "path": "../public/_nuxt/the-loai.c33eb414.css"
  },
  "/_nuxt/the-loai.cfc5c7bb.js": {
    "type": "application/javascript",
    "etag": "\"c69-x93QkS6ClnfFy5jP8bLHUis3+Wk\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 3177,
    "path": "../public/_nuxt/the-loai.cfc5c7bb.js"
  },
  "/_nuxt/tim-kiem.999ad089.js": {
    "type": "application/javascript",
    "etag": "\"ebd-LbDWebk68BpSui5DkJ14ur0AwRc\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 3773,
    "path": "../public/_nuxt/tim-kiem.999ad089.js"
  },
  "/_nuxt/top.eec2c48e.js": {
    "type": "application/javascript",
    "etag": "\"a88-Yvy/ohqRCPlBVZAh03iWcloJvqo\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 2696,
    "path": "../public/_nuxt/top.eec2c48e.js"
  },
  "/_nuxt/useFetchData.e3cab5d1.js": {
    "type": "application/javascript",
    "etag": "\"2e20-E1er+BdqdRah/k7njqV3cMYX2NI\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 11808,
    "path": "../public/_nuxt/useFetchData.e3cab5d1.js"
  },
  "/_nuxt/_chapterId_.5d8fed93.js": {
    "type": "application/javascript",
    "etag": "\"1a12-9NcXX5MT+sjRhF9hwnnDFB4ZL34\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 6674,
    "path": "../public/_nuxt/_chapterId_.5d8fed93.js"
  },
  "/_nuxt/_chapterId_.75330c53.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6d2-Ml8sqsOEo3RThRKsApExYUzzvTk\"",
    "mtime": "2024-05-22T07:58:00.994Z",
    "size": 1746,
    "path": "../public/_nuxt/_chapterId_.75330c53.css"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2024-05-22T07:58:00.995Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/_nuxt/_slug_.a0bc6365.js": {
    "type": "application/javascript",
    "etag": "\"67c-1qdVOcPUi5UzrfIMs1Ozx31hxV0\"",
    "mtime": "2024-05-22T07:58:00.997Z",
    "size": 1660,
    "path": "../public/_nuxt/_slug_.a0bc6365.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

function createSiteConfigStack() {
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    stack.push(input);
  }
  function get() {
    const siteConfig = {
      _context: {}
    };
    for (const o in stack) {
      for (const k in stack[o]) {
        const key = k;
        const val = stack[o][k];
        if (!k.endsWith("context") && typeof val !== "undefined") {
          siteConfig[k] = val;
          siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined")
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  return config;
}

function useSiteConfig(e) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  return e.context.siteConfig.get();
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = process.env.NITRO_PORT || process.env.PORT || (false);
  let protocol = cert && key || !false ? "https" : "http";
  if (!e) ; else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return `${protocol}://${host}${port}/`;
}

function updateSiteConfig(e, input) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  e.context.siteConfig.push(input);
}

const _PT3StB = defineEventHandler((e) => {
  if (!e.context.siteConfig) {
    const appConfig = useAppConfig();
    const nitroOrigin = useNitroOrigin(e);
    e.context.siteConfigNitroOrigin = nitroOrigin;
    const { public: publicRuntimeConfig } = useRuntimeConfig();
    updateSiteConfig(e, {
      _context: "nitro:init",
      url: nitroOrigin
    });
    updateSiteConfig(e, publicRuntimeConfig.site);
    if (appConfig.site) {
      updateSiteConfig(e, {
        _context: "app:config",
        ...appConfig.site
      });
    }
    if (e.context._nitro.routeRules.site) {
      updateSiteConfig(e, {
        _context: "route-rules",
        ...e.context._nitro.routeRules.site
      });
    }
  }
});

function generateRobotsTxt({ groups, sitemaps }) {
  const lines = [];
  for (const group of groups) {
    for (const comment of group.comment || [])
      lines.push(`# ${comment}`);
    for (const userAgent of group.userAgent || ["*"])
      lines.push(`User-agent: ${userAgent}`);
    for (const allow of group.allow || [])
      lines.push(`Allow: ${allow}`);
    for (const disallow of group.disallow || [])
      lines.push(`Disallow: ${disallow}`);
    lines.push("");
  }
  for (const sitemap of sitemaps)
    lines.push(`Sitemap: ${sitemap}`);
  return lines.join("\n");
}

const _mUXCSh = defineEventHandler(async (e) => {
  const query = getQuery$1(e);
  setHeader(e, "Content-Type", "text/plain; charset=utf-8");
  setHeader(e, "Cache-Control", "max-age=14400, must-revalidate");
  const { groups, sitemap, credits } = useRuntimeConfig()["nuxt-simple-robots"];
  const { url, indexable } = useSiteConfig(e);
  const siteUrl = withBase(url || useNitroOrigin(e), useRuntimeConfig().app.baseURL);
  String(query.indexable) === "true" || query.indexable === "";
  const isIndexable = indexable !== false;
  let sitemaps = [...Array.isArray(sitemap) ? sitemap : [sitemap]].map((s) => {
    if (!s.startsWith("http"))
      return withBase(s, siteUrl);
    return s;
  });
  let robotGroups = [...groups];
  if (!isIndexable) {
    robotGroups = [
      {
        userAgent: ["*"],
        disallow: ["/"]
      }
    ];
    sitemaps = [];
  }
  let robotsTxt = generateRobotsTxt({ groups: robotGroups, sitemaps });
  if (credits) {
    robotsTxt = [
      `# START nuxt-simple-robots (${isIndexable ? "indexable" : "indexing disabled"})`,
      robotsTxt,
      "# END nuxt-simple-robots"
    ].filter(Boolean).join("\n");
  }
  const hookCtx = { robotsTxt };
  const nitro = useNitroApp();
  await nitro.hooks.callHook("robots:robots-txt", hookCtx);
  return hookCtx.robotsTxt;
});

function asArray(v) {
  return typeof v === "undefined" ? [] : Array.isArray(v) ? v : [v];
}
function indexableFromGroup(groups, path) {
  let indexable = true;
  const wildCardGroups = groups.filter((group) => asArray(group.userAgent).includes("*"));
  for (const group of wildCardGroups) {
    const hasDisallowRule = asArray(group.disallow).filter((rule) => Boolean(rule)).some((rule) => path.startsWith(rule));
    const hasAllowRule = asArray(group.allow).some((rule) => path.startsWith(rule));
    if (hasDisallowRule && !hasAllowRule) {
      indexable = false;
      break;
    }
  }
  return indexable;
}

const _flAQar = defineEventHandler((e) => {
  if (e.path === "/robots.txt")
    return;
  const { indexable } = useSiteConfig(e);
  const { robotsDisabledValue, groups } = useRuntimeConfig()["nuxt-simple-robots"];
  const routeRules = getRouteRules(e);
  if (typeof routeRules.robots === "string") {
    setHeader(e, "X-Robots-Tag", routeRules.robots);
    return;
  }
  if (routeRules.index === false || indexable === false) {
    setHeader(e, "X-Robots-Tag", robotsDisabledValue);
    return;
  }
  const groupIndexable = indexableFromGroup(groups, e.path);
  if (!groupIndexable)
    setHeader(e, "X-Robots-Tag", robotsDisabledValue);
});

const _lazy_DzwK0J = () => import('../raw/alive.get.mjs');
const _lazy_FmZVsD = () => import('../raw/download.get.mjs');
const _lazy_Xi3FMY = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/alive', handler: _lazy_DzwK0J, lazy: true, middleware: false, method: "get" },
  { route: '/download', handler: _lazy_FmZVsD, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_Xi3FMY, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _PT3StB, lazy: false, middleware: true, method: undefined },
  { route: '/robots.txt', handler: _mUXCSh, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _flAQar, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_Xi3FMY, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useNitroApp as a, getRouteRules as g, nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map

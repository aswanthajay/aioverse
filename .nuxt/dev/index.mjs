import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, handleCors, getQuery as getQuery$1, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, readBody, sendStream, sendNoContent, assertMethod, readFormData, setHeader, getValidatedRouterParams, getHeader, getValidatedQuery, getRequestWebStream, readValidatedBody, getResponseStatusText } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import { ofetch, createFetch, Headers as Headers$1 } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/unstorage@1.15.0_@netlify+b_2b1046687a28356759c765364936f573/node_modules/unstorage/dist/index.mjs';
import httpDriver from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/unstorage@1.15.0_@netlify+b_2b1046687a28356759c765364936f573/node_modules/unstorage/drivers/http.mjs';
import cloudflareKVBindingDriver from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/unstorage@1.15.0_@netlify+b_2b1046687a28356759c765364936f573/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs';
import mime from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/mime@4.0.7/node_modules/mime/dist/src/index.js';
import { z } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/zod@3.24.3/node_modules/zod/lib/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { randomUUID } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/uncrypto@0.1.3/node_modules/uncrypto/dist/crypto.node.mjs';
import { basename, parse } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import ms from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/vue-bundle-renderer@2.1.1/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/unhead@2.0.8/node_modules/unhead/dist/server.mjs';
import { isVNode, toValue, isRef } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/vue@3.5.13_typescript@5.8.3/node_modules/vue/index.mjs';
import { walkResolver } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/unhead@2.0.8/node_modules/unhead/dist/utils.mjs';
import { renderToString } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/vue@3.5.13_typescript@5.8.3/node_modules/vue/server-renderer/index.mjs';
import { klona } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { stringify, uneval } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js';
import { createHooks } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/node-mock-http@1.0.0/node_modules/node-mock-http/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/unstorage@1.15.0_@netlify+b_2b1046687a28356759c765364936f573/node_modules/unstorage/drivers/fs.mjs';
import file_58_47_47_47C_58_47Users_47DIGITECH_47Desktop_47hub_45chat_45main_47node_modules_47_46pnpm_47_64nuxthub_43core_640_468_4625__64netli_ef8ef756493a226951ee428c14adf03b_47node_modules_47_64nuxthub_47core_47dist_47runtime_47cache_47driver_46js from 'file:///C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/@nuxthub+core@0.8.25_@netli_ef8ef756493a226951ee428c14adf03b/node_modules/@nuxthub/core/dist/runtime/cache/driver.js';
import { digest, hash as hash$1 } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/youch-core@0.3.2/node_modules/youch-core/build/index.js';
import { Youch } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/youch@4.1.0-beta.7/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/source-map@0.7.4/node_modules/source-map/source-map.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/errx@0.1.0/node_modules/errx/dist/index.js';
import { getIcons } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/@iconify+utils@2.3.0/node_modules/@iconify/utils/lib/index.mjs';
import { collections } from 'file://C:/Users/DIGITECH/Desktop/hub-chat-main/.nuxt/nuxt-icon-server-bundle.mjs';

const serverAssets = [{"baseName":"server","dir":"C:/Users/DIGITECH/Desktop/hub-chat-main/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('cache', file_58_47_47_47C_58_47Users_47DIGITECH_47Desktop_47hub_45chat_45main_47node_modules_47_46pnpm_47_64nuxthub_43core_640_468_4625__64netli_ef8ef756493a226951ee428c14adf03b_47node_modules_47_64nuxthub_47core_47dist_47runtime_47cache_47driver_46js({"driver":"file:///C:/Users/DIGITECH/Desktop/hub-chat-main/node_modules/.pnpm/@nuxthub+core@0.8.25_@netli_ef8ef756493a226951ee428c14adf03b/node_modules/@nuxthub/core/dist/runtime/cache/driver.js","binding":"CACHE"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/DIGITECH/Desktop/hub-chat-main","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/DIGITECH/Desktop/hub-chat-main/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/DIGITECH/Desktop/hub-chat-main/.nuxt"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:/Users/DIGITECH/Desktop/hub-chat-main/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
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
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
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
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
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
    const response = await _cachedHandler(
      event
    );
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
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
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

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  ui: {
    colors: {
      primary: "orange",
      neutral: "slate"
    }
  }
});

const inlineAppConfig = {
  "nuxt": {},
  "ui": {
    "colors": {
      "primary": "green",
      "secondary": "blue",
      "success": "green",
      "info": "blue",
      "warning": "yellow",
      "error": "red",
      "neutral": "slate"
    },
    "icons": {
      "arrowLeft": "i-lucide-arrow-left",
      "arrowRight": "i-lucide-arrow-right",
      "check": "i-lucide-check",
      "chevronDoubleLeft": "i-lucide-chevrons-left",
      "chevronDoubleRight": "i-lucide-chevrons-right",
      "chevronDown": "i-lucide-chevron-down",
      "chevronLeft": "i-lucide-chevron-left",
      "chevronRight": "i-lucide-chevron-right",
      "chevronUp": "i-lucide-chevron-up",
      "close": "i-lucide-x",
      "ellipsis": "i-lucide-ellipsis",
      "external": "i-lucide-arrow-up-right",
      "folder": "i-lucide-folder",
      "folderOpen": "i-lucide-folder-open",
      "loading": "i-lucide-refresh-cw",
      "minus": "i-lucide-minus",
      "plus": "i-lucide-plus",
      "search": "i-lucide-search"
    }
  },
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "cssLayer": "components",
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  }
};

const appConfig = defuFn(appConfig0, inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/api/_hub/**": {
        "csurf": false,
        "cache": false,
        "prerender": false
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        },
        "cache": {
          "maxAge": 31536000
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "hub": {},
    "mdc": {
      "components": {
        "prose": true,
        "map": {}
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    }
  },
  "hub": {
    "projectUrl": "",
    "projectSecretKey": "",
    "url": "https://admin.hub.nuxt.com",
    "projectKey": "aioverse-tnl8",
    "userToken": "user_pQPzHpyEFg77Hm2oaaYnXdCu9RmNDA",
    "remote": "",
    "remoteManifest": "",
    "dir": "C:/Users/DIGITECH/Desktop/hub-chat-main/.data/hub",
    "workers": true,
    "ai": true,
    "analytics": false,
    "blob": false,
    "browser": false,
    "cache": true,
    "database": false,
    "kv": false,
    "vectorize": {},
    "databaseMigrationsDirs": [
      "C:/Users/DIGITECH/Desktop/hub-chat-main/server/database/migrations"
    ],
    "databaseQueriesPaths": [],
    "version": "0.8.25",
    "env": "production",
    "openapi": false,
    "bindings": {
      "hyperdrive": {},
      "compatibilityFlags": ""
    },
    "cloudflareAccess": {
      "clientId": "",
      "clientSecret": ""
    }
  },
  "icon": {
    "serverKnownCssClasses": []
  },
  "wrangler": {
    "configPath": "C:/Users/DIGITECH/Desktop/hub-chat-main/.data/hub/wrangler.toml",
    "persistDir": "C:\\Users\\DIGITECH\\Desktop\\hub-chat-main\\.data\\hub"
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
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

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
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
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = url.pathname + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script$1 = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _9cRyQKqMbRG_OMkKQT33sXlJVz5V3neSxd5OtGymw0 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script$1}<\/script>`);
  });
});

const rootDir = "C:/Users/DIGITECH/Desktop/hub-chat-main";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt","class":"isolate"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _7yJrLViFbuAenOv9oTy85b_6PnxSlm1QyN4VgmvvkOQ = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const featureMessages = {
  ai: [
    "NuxtHub AI is not enabled, set `hub.ai = true` in your `nuxt.config.ts`"
  ].join("\n"),
  analytics: [
    "NuxtHub Analytics is not enabled, set `hub.analytics = true` in your `nuxt.config.ts`"
  ].join("\n"),
  blob: [
    "NuxtHub Blob is not enabled, set `hub.blob = true` in your `nuxt.config.ts`",
    "Read more at `https://hub.nuxt.com/docs/features/blob`"
  ].join("\n"),
  cache: [
    "NuxtHub Cache is not enabled, set `hub.cache = true` in your `nuxt.config.ts`"
  ].join("\n"),
  database: [
    "NuxtHub Database is not enabled, set `hub.database = true` in your `nuxt.config.ts`",
    "Read more at `https://hub.nuxt.com/docs/features/database`"
  ].join("\n"),
  kv: [
    "NuxtHub KV is not enabled, set `hub.kv = true` in your `nuxt.config.ts`",
    "Read more at `https://hub.nuxt.com/docs/features/kv`"
  ].join("\n"),
  vectorize: [
    "NuxtHub Vectorize is not enabled, refer to the documentation.",
    "Read more at `https://hub.nuxt.com/docs/features/vectorize`"
  ].join("\n")
};
function requireNuxtHubFeature(feature) {
  const hub = useRuntimeConfig().hub;
  if (!hub[feature]) {
    {
      console.error(featureMessages[feature]);
    }
    throw createError({
      statusCode: 422,
      statusMessage: "Unprocessable Entity",
      message: featureMessages[feature]
    });
  }
  if (hub.remote && !hub.remoteManifest?.features?.[feature] && !hub.remoteManifest?.storage?.[feature]) {
    const message = `NuxtHub \`${feature}\` is not enabled in the remote project. Deploy a new version with \`${feature}\` enabled and try again.
Read more at \`https://hub.nuxt.com/docs/getting-started/remote-storage\``;
    {
      console.error(message);
    }
    throw createError({
      statusCode: 422,
      statusMessage: "Unprocessable Entity",
      message
    });
  }
}

function getCloudflareAccessHeaders(access) {
  const isCloudflareAccessEnabled = !!(access?.clientId && access?.clientSecret);
  if (!isCloudflareAccessEnabled) return {};
  return {
    "CF-Access-Client-Id": access?.clientId,
    "CF-Access-Client-Secret": access?.clientSecret
  };
}

let _ai;
function hubAI() {
  requireNuxtHubFeature("ai");
  if (_ai) {
    return _ai;
  }
  const hub = useRuntimeConfig().hub;
  const binding = process.env.AI || globalThis.__env__?.AI || globalThis.AI;
  if (hub.remote && hub.projectUrl && !binding) {
    const cfAccessHeaders = getCloudflareAccessHeaders(hub.cloudflareAccess);
    _ai = proxyHubAI(hub.projectUrl, hub.projectSecretKey || hub.userToken, cfAccessHeaders);
  } else {
    _ai = {
      async run(model, params, options) {
        if (!hub.projectKey) {
          throw createError({
            statusCode: 500,
            message: "Missing hub.projectKey variable to use hubAI()"
          });
        }
        if (!hub.userToken) {
          throw createError({
            statusCode: 500,
            message: "Missing hub.userToken variable to use hubAI()"
          });
        }
        return $fetch(`/api/projects/${hub.projectKey}/ai/run`, {
          baseURL: hub.url,
          method: "POST",
          headers: {
            authorization: `Bearer ${hub.userToken}`
          },
          body: { model, params, options },
          responseType: params?.stream ? "stream" : void 0
        }).catch(handleProxyError$2);
      }
    };
  }
  if (!_ai) {
    throw createError("Missing Cloudflare AI binding (AI)");
  }
  return _ai;
}
function proxyHubAI(projectUrl, secretKey, headers) {
  requireNuxtHubFeature("ai");
  const aiAPI = ofetch.create({
    baseURL: joinURL(projectUrl, "/api/_hub/ai"),
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      ...headers
    }
  });
  return {
    async run(model, params, options) {
      return aiAPI("/run", {
        body: { model, params, options },
        responseType: params?.stream ? "stream" : void 0
      }).catch(handleProxyError$2);
    }
  };
}
async function handleProxyError$2(err) {
  if (err.statusCode === 403) {
    console.warn("It seems that your Cloudflare API token does not have the `Worker AI` permission.\nOpen `https://dash.cloudflare.com/profile/api-tokens` and edit your NuxtHub token.\nAdd the `Account > Worker AI > Read` permission to your token and save it.");
  }
  let data = err.data;
  if (!err.data && typeof err.response?.json === "function") {
    data = (await err.response.json())?.data || {};
  }
  throw createError({
    statusCode: data?.statusCode || err.statusCode,
    statusMessage: data?.statusMessage || err.statusMessage,
    message: data?.message || err.message,
    data
  });
}

function hubCacheBinding(name = "CACHE") {
  const binding = process.env[name] || globalThis.__env__?.[name] || globalThis[name];
  if (!binding) {
    throw createError(`Missing Cloudflare KV binding (${name})`);
  }
  return binding;
}

const hubHooks = createHooks();

const _nyL9pFuUbeirFjmqC8JijcuzwzvZYQbdTWqVUenjsI = defineNitroPlugin(async () => {
  await globalThis.__env__;
  await hubHooks.callHookParallel("bindings:ready");
});

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _xdS46S0rZTtdQA0r50JnXHEOcWK5cKof4d_hKSm_jo = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const _proxy = _getPlatformProxy().catch((error) => {
  console.error("Failed to initialize wrangler bindings proxy", error);
  return _createStubProxy();
}).then((proxy) => {
  globalThis.__env__ = proxy.env;
  return proxy;
});
globalThis.__env__ = _proxy.then((proxy) => proxy.env);
const _yyH7wSjv52KuohMahHI8fs5Ym3UwgJf0soGilL00yQ = (function(nitroApp) {
  nitroApp.hooks.hook("request", async (event) => {
    const proxy = await _proxy;
    event.context.cf = proxy.cf;
    event.context.waitUntil = proxy.ctx.waitUntil.bind(proxy.ctx);
    const request = new Request(getRequestURL(event));
    request.cf = proxy.cf;
    event.context.cloudflare = {
      ...event.context.cloudflare,
      request,
      env: proxy.env,
      context: proxy.ctx
    };
    event.node.req.__unenv__ = {
      ...event.node.req.__unenv__,
      waitUntil: event.context.waitUntil
    };
  });
  nitroApp.hooks._hooks.request.unshift(nitroApp.hooks._hooks.request.pop());
  nitroApp.hooks.hook("close", () => {
    return _proxy?.then((proxy) => proxy.dispose);
  });
});
async function _getPlatformProxy() {
  const _pkg = "wrangler";
  const { getPlatformProxy } = await import(_pkg).catch(() => {
    throw new Error(
      "Package `wrangler` not found, please install it with: `npx nypm@latest add -D wrangler`"
    );
  });
  const runtimeConfig = useRuntimeConfig();
  const proxyOptions = {
    configPath: runtimeConfig.wrangler.configPath,
    persist: { path: runtimeConfig.wrangler.persistDir }
  };
  if (runtimeConfig.wrangler.environment) {
    proxyOptions.environment = runtimeConfig.wrangler.environment;
  }
  const proxy = await getPlatformProxy(proxyOptions);
  return proxy;
}
function _createStubProxy() {
  return {
    env: {},
    cf: {},
    ctx: {
      waitUntil() {
      },
      passThroughOnException() {
      }
    },
    caches: {
      open() {
        const result = Promise.resolve(new _CacheStub());
        return result;
      },
      get default() {
        return new _CacheStub();
      }
    },
    dispose: () => Promise.resolve()
  };
}
class _CacheStub {
  delete() {
    const result = Promise.resolve(false);
    return result;
  }
  match() {
    const result = Promise.resolve(void 0);
    return result;
  }
  put() {
    const result = Promise.resolve();
    return result;
  }
}

const plugins = [
  _9cRyQKqMbRG_OMkKQT33sXlJVz5V3neSxd5OtGymw0,
_7yJrLViFbuAenOv9oTy85b_6PnxSlm1QyN4VgmvvkOQ,
_nyL9pFuUbeirFjmqC8JijcuzwzvZYQbdTWqVUenjsI,
_xdS46S0rZTtdQA0r50JnXHEOcWK5cKof4d_hKSm_jo,
_yyH7wSjv52KuohMahHI8fs5Ym3UwgJf0soGilL00yQ
];

const _LRB5au = eventHandler((event) => {
  handleCors(event, {
    methods: "*",
    origin: [
      "https://admin.hub.nuxt.com",
      "https://hub.nuxt.dev",
      /http:\/\/localhost:\d+/
    ]
  });
});

const warnOnceSet = /* @__PURE__ */ new Set();
const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _QmL5C0 = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola$1.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  } else {
    if (collectionName && !warnOnceSet.has(collectionName) && apiEndPoint === DEFAULT_ENDPOINT) {
      consola$1.warn([
        `[Icon] Collection \`${collectionName}\` is not found locally`,
        `We suggest to install it via \`npm i -D @iconify-json/${collectionName}\` to provide the best end-user experience.`
      ].join("\n"));
      warnOnceSet.add(collectionName);
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola$1.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola$1.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery$1(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _lazy_6CdpDq = () => Promise.resolve().then(function () { return chat_post$1; });
const _lazy_Tt_2uq = () => Promise.resolve().then(function () { return models_get$1; });
const _lazy_U5cjFr = () => Promise.resolve().then(function () { return ____feature_$1; });
const _lazy_Zr8FCs = () => Promise.resolve().then(function () { return index_head$1; });
const _lazy_JnvwMx = () => Promise.resolve().then(function () { return manifest_get$1; });
const _lazy_mntpfX = () => Promise.resolve().then(function () { return _command__post$1; });
const _lazy_C8uf_r = () => Promise.resolve().then(function () { return ____key__delete$1; });
const _lazy_sZEklf = () => Promise.resolve().then(function () { return ____key__get$1; });
const _lazy_5401nh = () => Promise.resolve().then(function () { return ____key__options$1; });
const _lazy_9lCFK4 = () => Promise.resolve().then(function () { return batchDelete_options$1; });
const _lazy_1NGTud = () => Promise.resolve().then(function () { return batchDelete_post$1; });
const _lazy_9tUGj0 = () => Promise.resolve().then(function () { return ____base__delete$1; });
const _lazy__KjFMZ = () => Promise.resolve().then(function () { return ____base__options$1; });
const _lazy_NWuP8P = () => Promise.resolve().then(function () { return index_get$1; });
const _lazy_KMzOzG = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/chat', handler: _lazy_6CdpDq, lazy: true, middleware: false, method: "post" },
  { route: '/api/models', handler: _lazy_Tt_2uq, lazy: true, middleware: false, method: "get" },
  { route: '/api/_hub/**:feature', handler: _lazy_U5cjFr, lazy: true, middleware: false, method: undefined },
  { route: '/api/_hub', handler: _lazy_Zr8FCs, lazy: true, middleware: false, method: "head" },
  { route: '/api/_hub/manifest', handler: _lazy_JnvwMx, lazy: true, middleware: false, method: "get" },
  { route: '/api/_hub/ai/:command', handler: _lazy_mntpfX, lazy: true, middleware: false, method: "post" },
  { route: '/api/_hub/cache/**:key', handler: _lazy_C8uf_r, lazy: true, middleware: false, method: "delete" },
  { route: '/api/_hub/cache/**:key', handler: _lazy_sZEklf, lazy: true, middleware: false, method: "get" },
  { route: '/api/_hub/cache/**:key', handler: _lazy_5401nh, lazy: true, middleware: false, method: "options" },
  { route: '/api/_hub/cache/batch-delete', handler: _lazy_9lCFK4, lazy: true, middleware: false, method: "options" },
  { route: '/api/_hub/cache/batch-delete', handler: _lazy_1NGTud, lazy: true, middleware: false, method: "post" },
  { route: '/api/_hub/cache/clear/**:base', handler: _lazy_9tUGj0, lazy: true, middleware: false, method: "delete" },
  { route: '/api/_hub/cache/clear/**:base', handler: _lazy__KjFMZ, lazy: true, middleware: false, method: "options" },
  { route: '/api/_hub/cache', handler: _lazy_NWuP8P, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_KMzOzG, lazy: true, middleware: false, method: undefined },
  { route: '/api/_hub', handler: _LRB5au, lazy: false, middleware: true, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _QmL5C0, lazy: false, middleware: false, method: undefined },
  { route: '/_fonts/**', handler: _lazy_KMzOzG, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_KMzOzG, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
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
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + messages.statusCode + " - " + (messages.statusMessage || "Internal Server Error") + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + messages.statusCode + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + messages.description + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><div class="font-light leading-tight p-8 text-xl z-10">' + messages.stack + "</div></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const chat_post = defineEventHandler(async (event) => {
  const { model, params } = await readBody(event);
  if (!model || !params) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing chat model or params"
    });
  }
  const config = {
    max_tokens: params.maxTokens,
    temperature: params.temperature,
    top_p: params.topP,
    top_k: params.topK,
    frequency_penalty: params.frequencyPenalty,
    presence_penalty: params.presencePenalty,
    repetition_penalty: params.repetitionPenalty,
    stream: params.stream
  };
  const ai = hubAI();
  try {
    const result = await ai.run(model, {
      messages: params.systemPrompt ? [{ role: "system", content: params.systemPrompt }, ...params.messages] : params.messages,
      ...config
    });
    if (params.stream) {
      setResponseHeader(event, "Content-Type", "text/event-stream");
      return sendStream(event, result);
    }
    return result.response;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error processing request"
    });
  }
});

const chat_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: chat_post
});

const models_get = defineCachedEventHandler(
  async () => {
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const userToken = process.env.CLOUDFLARE_API_TOKEN;
    try {
      const response = await $fetch(
        `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/models/search?task=text generation`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json"
          }
        }
      );
      return response.result.map((model) => model.name);
    } catch (error) {
      console.error("Error fetching models:", error);
    }
    return [];
  },
  {
    maxAge: 24 * 60 * 60
    // 1 day
  }
);

const models_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: models_get
});

const ____feature_ = eventHandler((event) => {
  const [feature] = (event.context.params?.feature || "").split("/");
  requireNuxtHubFeature(feature);
  throw createError({
    statusCode: 404,
    message: `Not found`
  });
});

const ____feature_$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ____feature_
});

async function requireNuxtHubAuthorization(event) {
  {
    return;
  }
}

const index_head = eventHandler(async (event) => {
  await requireNuxtHubAuthorization();
  return sendNoContent(event);
});

const index_head$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_head
});

let _db;
function hubDatabase() {
  requireNuxtHubFeature("database");
  if (_db) {
    return _db;
  }
  const hub = useRuntimeConfig().hub;
  const binding = process.env.DB || globalThis.__env__?.DB || globalThis.DB;
  if (hub.remote && hub.projectUrl && !binding) {
    const cfAccessHeaders = getCloudflareAccessHeaders(hub.cloudflareAccess);
    _db = proxyHubDatabase(hub.projectUrl, hub.projectSecretKey || hub.userToken, cfAccessHeaders);
    return _db;
  }
  if (binding) {
    _db = binding;
    return _db;
  }
  throw createError("Missing Cloudflare DB binding (D1)");
}
function proxyHubDatabase(projectUrl, secretKey, headers) {
  requireNuxtHubFeature("database");
  const d1API = ofetch.create({
    baseURL: joinURL(projectUrl, "/api/_hub/database"),
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      ...headers
    }
  });
  return {
    async exec(query) {
      return d1API("/exec", {
        body: { query }
      }).catch(handleProxyError$1);
    },
    prepare(query) {
      const stmt = {
        _body: {
          query,
          params: []
        },
        bind(...params) {
          return {
            ...stmt,
            _body: { query, params }
          };
        },
        async all() {
          return d1API("/all", { body: this._body }).catch(handleProxyError$1);
        },
        async raw(options) {
          return d1API("/raw", {
            body: {
              ...this._body,
              ...options
            }
          }).catch(handleProxyError$1);
        },
        async run() {
          return d1API("/run", { body: this._body }).catch(handleProxyError$1);
        },
        async first(colName) {
          return d1API("/first", {
            body: {
              ...this._body,
              colName
            }
          }).catch(handleProxyError$1).then((res) => res || null);
        }
      };
      return stmt;
    },
    batch(statements) {
      return d1API("/batch", {
        // @ts-expect-error _body is not recognized but internally used
        body: statements.map((smtm) => smtm._body)
      });
    }
  };
}
function handleProxyError$1(err) {
  throw createError({
    statusCode: err.statusCode,
    // @ts-expect-error not aware of data property
    message: err.data?.message || err.message
  });
}

let _kv;
function hubKV() {
  requireNuxtHubFeature("kv");
  if (_kv) {
    return _kv;
  }
  const hub = useRuntimeConfig().hub;
  const binding = process.env.KV || globalThis.__env__?.KV || globalThis.KV;
  if (hub.remote && hub.projectUrl && !binding) {
    const cfAccessHeaders = getCloudflareAccessHeaders(hub.cloudflareAccess);
    _kv = proxyHubKV(hub.projectUrl, hub.projectSecretKey || hub.userToken, cfAccessHeaders);
    return _kv;
  }
  if (binding) {
    _kv = createStorage({
      driver: cloudflareKVBindingDriver({
        binding
      })
    });
    return _kv;
  }
  throw createError("Missing Cloudflare KV binding (KV)");
}
function proxyHubKV(projectUrl, secretKey, headers) {
  requireNuxtHubFeature("kv");
  const storage = createStorage({
    driver: httpDriver({
      base: joinURL(projectUrl, "/api/_hub/kv/"),
      headers: {
        Authorization: `Bearer ${secretKey}`,
        ...headers
      }
    })
  });
  return storage;
}

async function streamToArrayBuffer(stream, streamSize) {
  const result = new Uint8Array(streamSize);
  let bytesRead = 0;
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result.set(value, bytesRead);
    bytesRead += value.length;
  }
  return result;
}

const _r2_buckets = {};
function getBlobBinding(name = "BLOB") {
  return process.env[name] || globalThis.__env__?.[name] || globalThis[name];
}
function _useBucket(name = "BLOB") {
  if (_r2_buckets[name]) {
    return _r2_buckets[name];
  }
  const binding = getBlobBinding(name);
  if (binding) {
    _r2_buckets[name] = binding;
    return _r2_buckets[name];
  }
  throw createError(`Missing Cloudflare ${name} binding (R2)`);
}
function hubBlob() {
  requireNuxtHubFeature("blob");
  const hub = useRuntimeConfig().hub;
  const binding = getBlobBinding();
  if (hub.remote && hub.projectUrl && !binding) {
    const cfAccessHeaders = getCloudflareAccessHeaders(hub.cloudflareAccess);
    return proxyHubBlob(hub.projectUrl, hub.projectSecretKey || hub.userToken, cfAccessHeaders);
  }
  const bucket = _useBucket();
  const blob = {
    async list(options) {
      const resolvedOptions = defu$1(options, {
        limit: 1e3,
        include: ["httpMetadata", "customMetadata"],
        delimiter: options?.folded ? "/" : void 0
      });
      const listed = await bucket.list(resolvedOptions);
      const hasMore = listed.truncated;
      const cursor = listed.truncated ? listed.cursor : void 0;
      return {
        blobs: listed.objects.map(mapR2ObjectToBlob),
        hasMore,
        cursor,
        folders: resolvedOptions.delimiter ? listed.delimitedPrefixes : void 0
      };
    },
    async serve(event, pathname) {
      pathname = decodeURIComponent(pathname);
      const object = await bucket.get(pathname);
      if (!object) {
        throw createError({ message: "File not found", statusCode: 404 });
      }
      setHeader(event, "Content-Type", object.httpMetadata?.contentType || getContentType(pathname));
      setHeader(event, "Content-Length", object.size);
      setHeader(event, "etag", object.httpEtag);
      return object.body;
    },
    async get(pathname) {
      const object = await bucket.get(decodeURIComponent(pathname));
      if (!object) {
        return null;
      }
      return object.blob();
    },
    async put(pathname, body, options = {}) {
      pathname = decodeURIComponent(pathname);
      const { contentType: optionsContentType, contentLength, addRandomSuffix, prefix, customMetadata } = options;
      const contentType = optionsContentType || body.type || getContentType(pathname);
      const { dir, ext, name: filename } = parse(pathname);
      if (addRandomSuffix) {
        pathname = joinURL(dir === "." ? "" : dir, `${filename}-${randomUUID().split("-")[0]}${ext}`);
      } else {
        pathname = joinURL(dir === "." ? "" : dir, `${filename}${ext}`);
      }
      if (prefix) {
        pathname = joinURL(prefix, pathname).replace(/\/+/g, "/").replace(/^\/+/, "");
      }
      const httpMetadata = { contentType };
      if (contentLength) {
        httpMetadata.contentLength = contentLength;
      }
      const object = await bucket.put(pathname, body, { httpMetadata, customMetadata });
      return mapR2ObjectToBlob(object);
    },
    async head(pathname) {
      const object = await bucket.head(decodeURIComponent(pathname));
      if (!object) {
        throw createError({ message: "Blob not found", statusCode: 404 });
      }
      return mapR2ObjectToBlob(object);
    },
    async del(pathnames) {
      if (Array.isArray(pathnames)) {
        return await bucket.delete(pathnames.map((p) => decodeURIComponent(p)));
      } else {
        return await bucket.delete(decodeURIComponent(pathnames));
      }
    },
    async createMultipartUpload(pathname, options = {}) {
      pathname = decodeURIComponent(pathname);
      const { contentType: optionsContentType, contentLength, addRandomSuffix, prefix, customMetadata } = options;
      const contentType = optionsContentType || getContentType(pathname);
      const { dir, ext, name: filename } = parse(pathname);
      if (addRandomSuffix) {
        pathname = joinURL(dir === "." ? "" : dir, `${filename}-${randomUUID().split("-")[0]}${ext}`);
      } else {
        pathname = joinURL(dir === "." ? "" : dir, `${filename}${ext}`);
      }
      if (prefix) {
        pathname = joinURL(prefix, pathname).replace(/\/+/g, "/").replace(/^\/+/, "");
      }
      const httpMetadata = { contentType };
      if (contentLength) {
        httpMetadata.contentLength = contentLength;
      }
      const mpu = await bucket.createMultipartUpload(pathname, { httpMetadata, customMetadata });
      return mapR2MpuToBlobMpu(mpu);
    },
    resumeMultipartUpload(pathname, uploadId) {
      const mpu = bucket.resumeMultipartUpload(decodeURIComponent(pathname), uploadId);
      return mapR2MpuToBlobMpu(mpu);
    },
    async handleUpload(event, options = {}) {
      assertMethod(event, ["POST", "PUT", "PATCH"]);
      options = defu$1(options, {
        formKey: "files",
        multiple: true
      });
      const form = await readFormData(event);
      const files = form.getAll(options.formKey);
      if (!files) {
        throw createError({ statusCode: 400, message: "Missing files" });
      }
      if (!options.multiple && files.length > 1) {
        throw createError({ statusCode: 400, message: "Multiple files are not allowed" });
      }
      const objects = [];
      try {
        if (options.ensure) {
          for (const file of files) {
            ensureBlob(file, options.ensure);
          }
        }
        for (const file of files) {
          const object = await blob.put(file.name, file, options.put);
          objects.push(object);
        }
      } catch (e) {
        throw createError({
          statusCode: 500,
          message: `Storage error: ${e.message}`
        });
      }
      return objects;
    },
    async createCredentials(options = {}) {
      {
        throw createError("hubBlob().createCredentials() is only available in production or in development with `--remote` flag.");
      }
    }
  };
  return {
    ...blob,
    delete: blob.del,
    handleMultipartUpload: createMultipartUploadHandler(blob)
  };
}
function proxyHubBlob(projectUrl, secretKey, headers) {
  requireNuxtHubFeature("blob");
  const blobAPI = ofetch.create({
    baseURL: joinURL(projectUrl, "/api/_hub/blob"),
    headers: {
      Authorization: `Bearer ${secretKey}`,
      ...headers
    }
  });
  const blob = {
    async list(options = { limit: 1e3 }) {
      return blobAPI("/", {
        method: "GET",
        query: options
      });
    },
    async serve(_event, pathname) {
      return blobAPI(encodeURIComponent(pathname), {
        method: "GET"
      });
    },
    async put(pathname, body, options = {}) {
      const { contentType, contentLength, ...query } = options;
      const headers2 = {};
      if (contentType) {
        headers2["content-type"] = contentType;
      }
      if (contentLength) {
        headers2["content-length"] = contentLength;
      }
      if (body instanceof Uint8Array) {
        body = new Blob([body]);
      }
      return await blobAPI(encodeURIComponent(pathname), {
        method: "PUT",
        headers: headers2,
        body,
        query
      });
    },
    async head(pathname) {
      return await blobAPI(`/head/${encodeURIComponent(pathname)}`, {
        method: "GET"
      });
    },
    async get(pathname) {
      return await blobAPI(`/${encodeURIComponent(pathname)}`, {
        method: "GET",
        responseType: "blob"
      }).catch((e) => {
        if (e.status === 404) {
          return null;
        }
        throw e;
      });
    },
    async del(pathnames) {
      if (Array.isArray(pathnames)) {
        await blobAPI("/delete", {
          method: "POST",
          body: {
            pathnames: pathnames.map((p) => encodeURIComponent(p))
          }
        });
      } else {
        await blobAPI(encodeURIComponent(pathnames), {
          method: "DELETE"
        });
      }
      return;
    },
    async createMultipartUpload(pathname, options = {}) {
      return await blobAPI(`/multipart/create/${encodeURIComponent(pathname)}`, {
        method: "POST",
        query: options
      });
    },
    resumeMultipartUpload(pathname, uploadId) {
      return {
        pathname,
        uploadId,
        async uploadPart(partNumber, body) {
          return await blobAPI(`/multipart/upload/${encodeURIComponent(pathname)}`, {
            method: "PUT",
            query: {
              uploadId,
              partNumber
            },
            body
          });
        },
        async abort() {
          await blobAPI(`/multipart/abort/${encodeURIComponent(pathname)}`, {
            method: "DELETE",
            query: {
              uploadId
            }
          });
        },
        async complete(parts) {
          return await blobAPI(`/multipart/complete/${encodeURIComponent(pathname)}`, {
            method: "POST",
            query: {
              uploadId
            },
            body: {
              parts
            }
          });
        }
      };
    },
    async handleUpload(event, options = {}) {
      return await blobAPI("/", {
        method: "POST",
        body: await readFormData(event),
        query: options
      });
    },
    async createCredentials(options = {}) {
      return await blobAPI("/credentials", {
        method: "POST",
        body: options
      });
    }
  };
  return {
    ...blob,
    delete: blob.del,
    handleMultipartUpload: createMultipartUploadHandler(blob)
  };
}
function createMultipartUploadHandler(hub) {
  const { createMultipartUpload, resumeMultipartUpload } = hub;
  const createHandler = async (event, options) => {
    const { pathname } = await getValidatedRouterParams(event, z.object({
      pathname: z.string().min(1)
    }).parse);
    options ||= {};
    if (getHeader(event, "x-nuxthub-file-content-type")) {
      options.contentType ||= getHeader(event, "x-nuxthub-file-content-type");
    }
    try {
      const object = await createMultipartUpload(pathname, options);
      return {
        uploadId: object.uploadId,
        pathname: object.pathname
      };
    } catch (e) {
      throw createError({
        statusCode: 400,
        message: e.message
      });
    }
  };
  const uploadHandler = async (event) => {
    const { pathname } = await getValidatedRouterParams(event, z.object({
      pathname: z.string().min(1)
    }).parse);
    const { uploadId, partNumber } = await getValidatedQuery(event, z.object({
      uploadId: z.string(),
      partNumber: z.coerce.number()
    }).parse);
    const contentLength = Number(getHeader(event, "content-length") || "0");
    const stream = getRequestWebStream(event);
    const body = await streamToArrayBuffer(stream, contentLength);
    const mpu = resumeMultipartUpload(pathname, uploadId);
    try {
      return await mpu.uploadPart(partNumber, body);
    } catch (e) {
      throw createError({ status: 400, message: e.message });
    }
  };
  const completeHandler = async (event) => {
    const { pathname } = await getValidatedRouterParams(event, z.object({
      pathname: z.string().min(1)
    }).parse);
    const { uploadId } = await getValidatedQuery(event, z.object({
      uploadId: z.string().min(1)
    }).parse);
    const { parts } = await readValidatedBody(event, z.object({
      parts: z.array(z.object({
        partNumber: z.number(),
        etag: z.string()
      }))
    }).parse);
    const mpu = resumeMultipartUpload(pathname, uploadId);
    try {
      const object = await mpu.complete(parts);
      return object;
    } catch (e) {
      throw createError({ status: 400, message: e.message });
    }
  };
  const abortHandler = async (event) => {
    const { pathname } = await getValidatedRouterParams(event, z.object({
      pathname: z.string().min(1)
    }).parse);
    const { uploadId } = await getValidatedQuery(event, z.object({
      uploadId: z.string().min(1)
    }).parse);
    const mpu = resumeMultipartUpload(pathname, uploadId);
    try {
      await mpu.abort();
    } catch (e) {
      throw createError({ status: 400, message: e.message });
    }
  };
  const handler = async (event, options) => {
    const method = event.method;
    const { action } = await getValidatedRouterParams(event, z.object({
      action: z.enum(["create", "upload", "complete", "abort"])
    }).parse);
    if (action === "create" && method === "POST") {
      return {
        action,
        data: await createHandler(event, options)
      };
    }
    if (action === "upload" && method === "PUT") {
      return {
        action,
        data: await uploadHandler(event)
      };
    }
    if (action === "complete" && method === "POST") {
      return {
        action,
        data: await completeHandler(event)
      };
    }
    if (action === "abort" && method === "DELETE") {
      return {
        action,
        data: await abortHandler(event)
      };
    }
    throw createError({ status: 405 });
  };
  return async (event, options) => {
    const result = await handler(event, options);
    if (result.data) {
      event.respondWith(Response.json(result.data));
    } else {
      sendNoContent(event);
    }
    return result;
  };
}
function getContentType(pathOrExtension) {
  return pathOrExtension && mime.getType(pathOrExtension) || "application/octet-stream";
}
function mapR2ObjectToBlob(object) {
  return {
    pathname: object.key,
    contentType: object.httpMetadata?.contentType || getContentType(object.key),
    size: object.size,
    httpEtag: object.httpEtag,
    uploadedAt: object.uploaded,
    httpMetadata: object.httpMetadata || {},
    customMetadata: object.customMetadata || {}
  };
}
function mapR2MpuToBlobMpu(mpu) {
  return {
    pathname: mpu.key,
    uploadId: mpu.uploadId,
    async uploadPart(partNumber, value) {
      return await mpu.uploadPart(partNumber, value);
    },
    abort: mpu.abort,
    async complete(uploadedParts) {
      const object = await mpu.complete(uploadedParts);
      return mapR2ObjectToBlob(object);
    }
  };
}
const FILESIZE_UNITS = ["B", "KB", "MB", "GB"];
function fileSizeToBytes(input) {
  const regex = new RegExp(
    `^(\\d+)(\\.\\d+)?\\s*(${FILESIZE_UNITS.join("|")})$`,
    "i"
  );
  const match = input.match(regex);
  if (!match) {
    throw createError({ statusCode: 400, message: `Invalid file size format: ${input}` });
  }
  const sizeValue = Number.parseFloat(match[1]);
  const sizeUnit = match[3].toUpperCase();
  if (!FILESIZE_UNITS.includes(sizeUnit)) {
    throw createError({ statusCode: 400, message: `Invalid file size unit: ${sizeUnit}` });
  }
  const bytes = sizeValue * Math.pow(1024, FILESIZE_UNITS.indexOf(sizeUnit));
  return Math.floor(bytes);
}
function ensureBlob(blob, options = {}) {
  requireNuxtHubFeature("blob");
  if (!options.maxSize && !options.types?.length) {
    throw createError({
      statusCode: 400,
      message: "ensureBlob() requires at least one of maxSize or types to be set."
    });
  }
  if (options.maxSize) {
    const maxFileSizeBytes = fileSizeToBytes(options.maxSize);
    if (blob.size > maxFileSizeBytes) {
      throw createError({
        statusCode: 400,
        message: `File size must be less than ${options.maxSize}`
      });
    }
  }
  const blobShortType = blob.type.split("/")[0];
  if (options.types?.length && !options.types.includes(blob.type) && !options.types.includes(blobShortType) && !(options.types.includes("pdf") && blob.type === "application/pdf")) {
    throw createError({
      statusCode: 400,
      message: `File type is invalid, must be: ${options.types.join(", ")}`
    });
  }
}

const _vectorize = {};
function hubVectorize(index) {
  requireNuxtHubFeature("vectorize");
  if (_vectorize[index]) {
    return _vectorize[index];
  }
  const hub = useRuntimeConfig().hub;
  const bindingName = `VECTORIZE_${index.toUpperCase()}`;
  const binding = process.env[bindingName] || globalThis.__env__?.[bindingName] || globalThis[bindingName];
  if (hub.remote && hub.projectUrl && !binding) {
    const cfAccessHeaders = getCloudflareAccessHeaders(hub.cloudflareAccess);
    _vectorize[index] = proxyHubVectorize(index, hub.projectUrl, hub.projectSecretKey || hub.userToken, cfAccessHeaders);
    return _vectorize[index];
  }
  if (binding) {
    _vectorize[index] = binding;
    return _vectorize[index];
  }
  if (!hub.remote) {
    return void 0;
  }
  throw createError(`Missing Cloudflare Vectorize binding (${bindingName})`);
}
function proxyHubVectorize(index, projectUrl, secretKey, headers) {
  requireNuxtHubFeature("vectorize");
  const vectorizeAPI = ofetch.create({
    baseURL: joinURL(projectUrl, `/api/_hub/vectorize/${index}`),
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      ...headers
    }
  });
  return {
    async insert(vectors) {
      return vectorizeAPI("/insert", { body: { vectors } }).catch(handleProxyError);
    },
    async upsert(vectors) {
      return vectorizeAPI("/upsert", { body: { vectors } }).catch(handleProxyError);
    },
    async query(query, params) {
      return vectorizeAPI("/query", { body: { query, params } }).catch(handleProxyError);
    },
    async getByIds(ids) {
      return vectorizeAPI("/getByIds", { body: { ids } }).catch(handleProxyError);
    },
    async deleteByIds(ids) {
      return vectorizeAPI("/deleteByIds", { body: { ids } }).catch(handleProxyError);
    },
    async describe() {
      return vectorizeAPI("/describe").catch(handleProxyError);
    }
  };
}
function handleProxyError(err) {
  throw createError({
    statusCode: err.statusCode,
    // @ts-expect-error not aware of data property
    message: err.data?.message || err.message
  });
}

const manifest_get = eventHandler(async (event) => {
  await requireNuxtHubAuthorization();
  const { version, cache, ai, analytics, browser, blob, kv, database, vectorize } = useRuntimeConfig().hub;
  const [dbCheck, kvCheck, blobCheck, vectorizeCheck] = await Promise.all([
    falseIfFail(() => database && hubDatabase().exec("PRAGMA table_list")),
    falseIfFail(() => kv && hubKV().getKeys("__check__")),
    falseIfFail(() => blob && hubBlob().list({ prefix: "__check__" })),
    // vectorize check should verify all indexes. return the index name
    Promise.all(Object.keys(vectorize).map(async (index) => {
      const vectorizeIndex = hubVectorize(index);
      const describe = await falseIfFail(() => vectorizeIndex?.describe());
      return [index, Boolean(describe)];
    }))
  ]);
  const enabledVectorizeIndexes = Object.fromEntries(Object.entries(vectorize).filter(([index]) => vectorizeCheck.find(([name, enabled]) => name === index && enabled)));
  return {
    version,
    storage: {
      database: Boolean(dbCheck),
      kv: Array.isArray(kvCheck),
      blob: Array.isArray(blobCheck?.blobs),
      vectorize: enabledVectorizeIndexes
    },
    features: {
      ai,
      analytics,
      browser,
      cache
    }
  };
});
async function falseIfFail(fn) {
  try {
    const res = fn();
    if (res instanceof Promise) {
      return res.catch(() => false);
    }
    return res;
  } catch (e) {
    return false;
  }
}

const manifest_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: manifest_get
});

const statementValidation = z.object({
  model: z.string().min(1).max(1e6).trim(),
  params: z.record(z.string(), z.any()).optional(),
  options: z.record(z.string(), z.any()).optional()
});
const _command__post = eventHandler(async (event) => {
  await requireNuxtHubAuthorization();
  requireNuxtHubFeature("ai");
  const { command } = await getValidatedRouterParams(event, z.object({
    command: z.enum(["run"])
  }).parse);
  const ai = hubAI();
  if (command === "run") {
    const { model, params, options } = await readValidatedBody(event, statementValidation.pick({ model: true, params: true, options: true }).parse);
    const res = await ai.run(model, params, options);
    if (res instanceof ReadableStream) {
      return new Response(res, {
        headers: {
          "Content-Type": "image/png"
        }
      });
    }
    return res;
  }
});

const _command__post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _command__post
});

const ____key__delete = eventHandler(async (event) => {
  await requireNuxtHubAuthorization();
  requireNuxtHubFeature("cache");
  const key = getRouterParam(event, "key") || "";
  if (!/\.[a-z0-9]+$/i.test(key)) {
    throw createError({
      statusCode: 400,
      message: "Invalid key"
    });
  }
  const storage = useStorage("cache");
  await storage.removeItem(key);
  return sendNoContent(event);
});

const ____key__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ____key__delete
});

const ____key__get = eventHandler(async (event) => {
  await requireNuxtHubAuthorization();
  requireNuxtHubFeature("cache");
  const keyOrPrefix = (getRouterParam(event, "key") || "").replace(/\//g, ":");
  if (/\.[a-z0-9]{2,5}$/i.test(keyOrPrefix)) {
    const item = await useStorage("cache").getItem(keyOrPrefix);
    if (item) {
      return item;
    }
  }
  const prefix = `${keyOrPrefix}:`;
  const binding = hubCacheBinding();
  const keys = [];
  let cursor = void 0;
  do {
    const res = await binding.list({ prefix, cursor });
    keys.push(...res.keys);
    cursor = res.list_complete ? void 0 : res.cursor;
  } while (cursor);
  const stats = {
    groups: {},
    cache: []
  };
  await Promise.all(keys.map(async ({ name, metadata }) => {
    const key = name.slice(prefix.length);
    if (key.includes(":")) {
      const k = key.split(":")[0];
      stats.groups[k] = (stats.groups[k] || 0) + 1;
      return;
    }
    if (!metadata) {
      const item = await useStorage("cache").getItem(name);
      if (!item) return;
      metadata = {
        size: JSON.stringify(item).length,
        mtime: item.mtime,
        expires: item.expires
      };
    }
    if (!metadata.expires && metadata.ttl) {
      metadata.expires = metadata.mtime + metadata.ttl * 1e3;
    }
    const entry = {
      key,
      ...metadata
    };
    try {
      entry.duration = ms(metadata.expires - metadata.mtime, { long: true });
    } catch (err) {
      entry.duration = "never";
    }
    stats.cache.push(entry);
  }));
  return stats;
});

const ____key__get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ____key__get
});

const ____key__options = eventHandler(async (event) => {
  await requireNuxtHubAuthorization();
  return sendNoContent(event);
});

const ____key__options$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ____key__options
});

const batchDelete_options = eventHandler(async (event) => {
  await requireNuxtHubAuthorization();
  return sendNoContent(event);
});

const batchDelete_options$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: batchDelete_options
});

const batchDelete_post = eventHandler(async (event) => {
  await requireNuxtHubAuthorization();
  requireNuxtHubFeature("cache");
  const { keys } = await readValidatedBody(event, z.object({
    keys: z.array(z.string().min(1)).min(1)
  }).parse);
  const storage = useStorage("cache");
  useRuntimeConfig(event).hub;
  {
    do {
      const keysToDelete = keys.splice(0, 100);
      await Promise.all(keysToDelete.map((key) => storage.removeItem(key)));
    } while (keys.length);
  }
  return sendNoContent(event);
});

const batchDelete_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: batchDelete_post
});

const ____base__delete = eventHandler(async (event) => {
  await requireNuxtHubAuthorization();
  requireNuxtHubFeature("cache");
  const base = getRouterParam(event, "base") || "";
  if (/\.[a-z0-9]+$/i.test(base)) {
    throw createError({
      statusCode: 400,
      message: "Invalid base"
    });
  }
  const storage = useStorage(`cache:${base}`);
  const keys = await storage.getKeys();
  useRuntimeConfig(event).hub;
  {
    do {
      const keysToDelete = keys.splice(0, 100);
      await Promise.all(keysToDelete.map(storage.removeItem));
    } while (keys.length);
  }
  return sendNoContent(event);
});

const ____base__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ____base__delete
});

const ____base__options = eventHandler(async (event) => {
  await requireNuxtHubAuthorization();
  return sendNoContent(event);
});

const ____base__options$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ____base__options
});

const index_get = eventHandler(async (event) => {
  await requireNuxtHubAuthorization();
  requireNuxtHubFeature("cache");
  const cache = await useStorage("cache").getKeys();
  const stats = {};
  for (const key of cache) {
    if (!key.includes(":")) continue;
    const [group] = key.split(":");
    stats[group] = (stats[group] || 0) + 1;
  }
  return stats;
});

const index_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getClientManifest = () => import('file://C:/Users/DIGITECH/Desktop/hub-chat-main/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://C:/Users/DIGITECH/Desktop/hub-chat-main/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
      const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
      const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
      const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
      return appTemplate + loaderTemplate;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const unheadOptions = {
  disableDefaults: true,
};

const renderSSRHeadOptions = {"omitLineBreaks":true};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = !isRenderingIsland && PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createHead(unheadOptions);
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest) {
    head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    head.push({ style: inlinedStyles });
  }
  {
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      head.push({ link }, headEntryOptions);
    }
  }
  if (isRenderingIsland && islandContext) {
    const islandHead = {};
    for (const entry of head.entries.values()) {
      for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
        const currentValue = islandHead[key];
        if (Array.isArray(currentValue)) {
          currentValue.push(...value);
        }
        islandHead[key] = value;
      }
    }
    islandHead.link ||= [];
    islandHead.style ||= [];
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(_rendered.html),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  if (!NO_SCRIPTS) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map

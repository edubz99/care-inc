"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 8965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("AAABAAEAQjsAAAEAIACSBAAAFgAAAIlQTkcNChoKAAAADUlIRFIAAABCAAAAOwgGAAAAz3lc4QAABFlJREFUeJzlmt1xozAQgF2CHzMDOKSDlCC7grzkDPdyKcFzsTP35nTgdOB0kOvAJbgEl+ASuF0JEeGA/lgBzu1kZzIJCPbT7mq1YjIZQOKYsVnC9rNofprF84JrND8m0WKP/xvinXoVNDKJ54fK+BZN4sXHzQ1Lh37fIDJLFru6sQiEvSURe0KF31/h78calIithn5vMplO2bTmBRACOvfnYaOGTLzY9vi6YQQhqLMcx4s323vRWyrvgdwR8j2DyiUEmNlX1zHKcLleGBQQpFwtDEoIUq4ORggIUq4GRhcIxephWqwzxnWVpW3XjR6GLwQO4CXfFZusuNB9G5AaDCi88NmUtnhLJ0/YLI8NEKSeEFTTfSoMrEsGh9ENQvakgSB0nbWONxoYXRMjGHowgtgs/+rGGBwGxepQvIDrG0FkJ9M4g8GgWiKLtTY/yNA42IzVOwzKOgHj3yI0XPYm/cCgLpbE0qkJD/zfn/aaokmCwwhVMaKhjTD4337e+4wZDEbIslmKqCrzldCMdR2PHAZZYpQl9MtyB/rBZ5zPOk+YB54vCACoQgaDZIkUeWALM322WCpFNQmFltcLN0hnGDR1Qv7LAYD1XsNVvGEQFUtbTwAXe42BYIwIwnAwSCDYbKScFRJqyy7UVYwwaBIj1AQbq/2Du8JKQwFCC4NDSD7PEZKEPfk8gCe4EBCUBBoUBra8utcJ3BsIZh48qqwnRN1x4WFYgwQIE2CwmyhkjFveVhBWGygbrZfVvAT/2sUiSaBRxO4/HWB+RhBn1U3weI4f0eFpNVCzOYwlyg2trl88529fvSff2RotcuBiW7OvbvdpggetCpmGk+m5tidQrB7vSbzBsNNs9LrfdlVoPfybtEwJeBp9G7MP0EP9ALZ0G+0Lwkapc27IjzYG8VBZZ+/iPqhaLbfptdkXvx+5reD12u8xUggH9Wbty20ggXX2CPsGDH8m7mEckqa0Ayc7dd1vQMi8W4GwabmZVNOtVkXGOo9zcHfbj0mkHV5f46jH8rrrSPKDJYjZ5YckUP/YwJDX390tbu2sr938uc62XcNdlGTZNIdGGa7tiU5rS2gQf4gKKcP5hRR07TSFH1EDlN7BjPdeEYhcuzI1ifjuyry8C1uuBgSoY+n8fUE49iy/MYjc6VPCUYFAIQPhWFTxzxDLJdRsSx8g/Bu0XiuHlPGBsDvVtlGnNsD4QJDsNdxXjvGBqHaDFPpofd45RhBE3anMur+AMj4QpC18+5VjfCCefzwQgrBeOcYHgqpV57hyVCCiubG71RMIqq24UNv3kyBGU1miENYSYUCUfVg/EEqrznR6XKyX3Ru4Qq1Ps5KEPfQTGgoIm14fXz2es7234jLsUFDJTRc2mXUTpR7k+IZG1bPEh+GDcVDeIepR24ysPKJcOarulaIclnKu6wWi9qAR6KVXgqF4gn92GMO5C1ZJ6RUuDwuhZ0x2aUO3upyso/F+uMb3lP+/k3+BuLDzcLf8FAAAAABJRU5ErkJggg==", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fevans%2FDocuments%2FProjects%2Fcare-inclusive%2Fcare-inclusive%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!/Users/evans/Documents/Projects/care-inclusive/care-inclusive/app/favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(8965)));
module.exports = __webpack_exports__;

})();
(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./resources/js/components/ProductAddToCart.js");
})({
    "./resources/js/components/ProductAddToCart.js": function(module, exports) {
        eval('throw new Error("Module build failed (from ./node_modules/prettier-loader/prettier-loader.js):\\nSyntaxError: Unexpected token, expected \\",\\" (64:3)\\n  62 | ReactDOM.render(\\n  63 |     <ProductAddToCart/>\\n> 64 |   document.getElementById(\\"ProductAddToCartRoot\\")\\n     |   ^\\n  65 | );\\n  66 | \\n    at e (C:\\\\Users\\\\Luke McNally\\\\Desktop\\\\projects\\\\freshgear1\\\\node_modules\\\\prettier\\\\parser-babylon.js:1:344)\\n    at Object.parse (C:\\\\Users\\\\Luke McNally\\\\Desktop\\\\projects\\\\freshgear1\\\\node_modules\\\\prettier\\\\parser-babylon.js:1:262322)\\n    at Object.parse (C:\\\\Users\\\\Luke McNally\\\\Desktop\\\\projects\\\\freshgear1\\\\node_modules\\\\prettier\\\\index.js:9739:19)\\n    at coreFormat (C:\\\\Users\\\\Luke McNally\\\\Desktop\\\\projects\\\\freshgear1\\\\node_modules\\\\prettier\\\\index.js:13252:23)\\n    at format (C:\\\\Users\\\\Luke McNally\\\\Desktop\\\\projects\\\\freshgear1\\\\node_modules\\\\prettier\\\\index.js:13510:73)\\n    at formatWithCursor (C:\\\\Users\\\\Luke McNally\\\\Desktop\\\\projects\\\\freshgear1\\\\node_modules\\\\prettier\\\\index.js:13526:12)\\n    at C:\\\\Users\\\\Luke McNally\\\\Desktop\\\\projects\\\\freshgear1\\\\node_modules\\\\prettier\\\\index.js:44207:15\\n    at Object.format (C:\\\\Users\\\\Luke McNally\\\\Desktop\\\\projects\\\\freshgear1\\\\node_modules\\\\prettier\\\\index.js:44226:12)\\n    at getConfig.then.config (C:\\\\Users\\\\Luke McNally\\\\Desktop\\\\projects\\\\freshgear1\\\\node_modules\\\\prettier-loader\\\\prettier-loader.js:69:33)");\n\n//# sourceURL=webpack:///./resources/js/components/ProductAddToCart.js?');
    }
});
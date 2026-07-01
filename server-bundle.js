"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server/node_modules/vscode-languageserver/lib/common/utils/is.js
var require_is = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.boolean = boolean;
    exports2.string = string;
    exports2.number = number;
    exports2.error = error;
    exports2.func = func;
    exports2.array = array;
    exports2.stringArray = stringArray;
    exports2.typedArray = typedArray;
    exports2.thenable = thenable;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    function thenable(value) {
      return value && func(value.then);
    }
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/is.js
var require_is2 = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.boolean = boolean;
    exports2.string = string;
    exports2.number = number;
    exports2.error = error;
    exports2.func = func;
    exports2.array = array;
    exports2.stringArray = stringArray;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/messages.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Message = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType = exports2.RequestType0 = exports2.AbstractMessageSignature = exports2.ParameterStructures = exports2.ResponseError = exports2.ErrorCodes = void 0;
    var is = __importStar2(require_is2());
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes || (exports2.ErrorCodes = ErrorCodes = {}));
    var ResponseError = class _ResponseError extends Error {
      code;
      data;
      constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, _ResponseError.prototype);
      }
      toJson() {
        const result = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        return result;
      }
    };
    exports2.ResponseError = ResponseError;
    var ParameterStructures = class _ParameterStructures {
      kind;
      /**
       * The parameter structure is automatically inferred on the number of parameters
       * and the parameter type in case of a single param.
       */
      static auto = new _ParameterStructures("auto");
      /**
       * Forces `byPosition` parameter structure. This is useful if you have a single
       * parameter which has a literal type.
       */
      static byPosition = new _ParameterStructures("byPosition");
      /**
       * Forces `byName` parameter structure. This is only useful when having a single
       * parameter. The library will report errors if used with a different number of
       * parameters.
       */
      static byName = new _ParameterStructures("byName");
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === _ParameterStructures.auto || value === _ParameterStructures.byName || value === _ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    };
    exports2.ParameterStructures = ParameterStructures;
    var AbstractMessageSignature = class {
      method;
      numberOfParams;
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    };
    exports2.AbstractMessageSignature = AbstractMessageSignature;
    var RequestType0 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.RequestType0 = RequestType0;
    var RequestType = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType = RequestType;
    var RequestType1 = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType1 = RequestType1;
    var RequestType2 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.RequestType2 = RequestType2;
    var RequestType3 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.RequestType3 = RequestType3;
    var RequestType4 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.RequestType4 = RequestType4;
    var RequestType5 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.RequestType5 = RequestType5;
    var RequestType6 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.RequestType6 = RequestType6;
    var RequestType7 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.RequestType7 = RequestType7;
    var RequestType8 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.RequestType8 = RequestType8;
    var RequestType9 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.RequestType9 = RequestType9;
    var NotificationType = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType = NotificationType;
    var NotificationType0 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.NotificationType0 = NotificationType0;
    var NotificationType1 = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType1 = NotificationType1;
    var NotificationType2 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.NotificationType2 = NotificationType2;
    var NotificationType3 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.NotificationType3 = NotificationType3;
    var NotificationType4 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.NotificationType4 = NotificationType4;
    var NotificationType5 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.NotificationType5 = NotificationType5;
    var NotificationType6 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.NotificationType6 = NotificationType6;
    var NotificationType7 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.NotificationType7 = NotificationType7;
    var NotificationType8 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.NotificationType8 = NotificationType8;
    var NotificationType9 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.NotificationType9 = NotificationType9;
    var Message;
    (function(Message2) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      Message2.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      Message2.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      Message2.isResponse = isResponse;
    })(Message || (exports2.Message = Message = {}));
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LRUCache = exports2.LinkedMap = exports2.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch || (exports2.Touch = Touch = {}));
    var LinkedMap = class {
      [Symbol.toStringTag] = "LinkedMap";
      _map;
      _head;
      _tail;
      _size;
      _state;
      constructor() {
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      before(key) {
        const item = this._map.get(key);
        return item ? item.previous?.value : void 0;
      }
      after(key) {
        const item = this._map.get(key);
        return item ? item.next?.value : void 0;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
        return item.value;
      }
      set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item);
              break;
            case Touch.First:
              this.addItemFirst(item);
              break;
            case Touch.Last:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    exports2.LinkedMap = LinkedMap;
    var LRUCache = class extends LinkedMap {
      _limit;
      _ratio;
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    };
    exports2.LRUCache = LRUCache;
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Disposable = void 0;
    var Disposable;
    (function(Disposable2) {
      function create(func) {
        return {
          dispose: func
        };
      }
      Disposable2.create = create;
    })(Disposable || (exports2.Disposable = Disposable = {}));
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/ral.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports2.default = RAL;
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/events.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Emitter = exports2.Event = void 0;
    var ral_1 = __importDefault(require_ral());
    var Event;
    (function(Event2) {
      const _disposable = { dispose() {
      } };
      Event2.None = function() {
        return _disposable;
      };
    })(Event || (exports2.Event = Event = {}));
    var CallbackList = class {
      _callbacks;
      _contexts;
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
          if (this._callbacks[i] === callback) {
            if (this._contexts[i] === context) {
              this._callbacks.splice(i, 1);
              this._contexts.splice(i, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
          try {
            ret.push(callbacks[i].apply(contexts[i], args));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter = class _Emitter {
      _options;
      static _noop = function() {
      };
      _event;
      _callbacks;
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = _Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports2.Emitter = Emitter;
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CancellationTokenSource = exports2.CancellationToken = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar2(require_is2());
    var events_1 = require_events();
    var CancellationToken;
    (function(CancellationToken2) {
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is2.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken2.is = is;
    })(CancellationToken || (exports2.CancellationToken = CancellationToken = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle.dispose();
      } };
    });
    var MutableToken = class {
      _isCancelled = false;
      _emitter;
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource = class {
      _token;
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports2.CancellationTokenSource = CancellationTokenSource;
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = void 0;
    var cancellation_1 = require_cancellation();
    var CancellationState;
    (function(CancellationState2) {
      CancellationState2.Continue = 0;
      CancellationState2.Cancelled = 1;
    })(CancellationState || (CancellationState = {}));
    var SharedArraySenderStrategy = class {
      buffers;
      constructor() {
        this.buffers = /* @__PURE__ */ new Map();
      }
      enableCancellation(request) {
        if (request.id === null) {
          return;
        }
        const buffer = new SharedArrayBuffer(4);
        const data = new Int32Array(buffer, 0, 1);
        data[0] = CancellationState.Continue;
        this.buffers.set(request.id, buffer);
        request.$cancellationData = buffer;
      }
      async sendCancellation(_conn, id) {
        const buffer = this.buffers.get(id);
        if (buffer === void 0) {
          return;
        }
        const data = new Int32Array(buffer, 0, 1);
        Atomics.store(data, 0, CancellationState.Cancelled);
      }
      cleanup(id) {
        this.buffers.delete(id);
      }
      dispose() {
        this.buffers.clear();
      }
    };
    exports2.SharedArraySenderStrategy = SharedArraySenderStrategy;
    var SharedArrayBufferCancellationToken = class {
      data;
      constructor(buffer) {
        this.data = new Int32Array(buffer, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
      }
    };
    var SharedArrayBufferCancellationTokenSource = class {
      token;
      constructor(buffer) {
        this.token = new SharedArrayBufferCancellationToken(buffer);
      }
      cancel() {
      }
      dispose() {
      }
    };
    var SharedArrayReceiverStrategy = class {
      kind = "request";
      createCancellationTokenSource(request) {
        const buffer = request.$cancellationData;
        if (buffer === void 0) {
          return new cancellation_1.CancellationTokenSource();
        }
        return new SharedArrayBufferCancellationTokenSource(buffer);
      }
    };
    exports2.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Semaphore = void 0;
    var ral_1 = __importDefault(require_ral());
    var Semaphore = class {
      _capacity;
      _active;
      _waiting;
      constructor(capacity = 1) {
        if (capacity <= 0) {
          throw new Error("Capacity must be greater than 0");
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
      }
      lock(thunk) {
        return new Promise((resolve, reject) => {
          this._waiting.push({ thunk, resolve, reject });
          this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
          throw new Error(`Too many thunks active`);
        }
        try {
          const result = next.thunk();
          if (result instanceof Promise) {
            result.then((value) => {
              this._active--;
              next.resolve(value);
              this.runNext();
            }, (err) => {
              this._active--;
              next.reject(err);
              this.runNext();
            });
          } else {
            this._active--;
            next.resolve(result);
            this.runNext();
          }
        } catch (err) {
          this._active--;
          next.reject(err);
          this.runNext();
        }
      }
    };
    exports2.Semaphore = Semaphore;
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar2(require_is2());
    var events_1 = require_events();
    var semaphore_1 = require_semaphore();
    var MessageReader;
    (function(MessageReader2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.listen) && Is2.func(candidate.dispose) && Is2.func(candidate.onError) && Is2.func(candidate.onClose) && Is2.func(candidate.onPartialMessage);
      }
      MessageReader2.is = is;
    })(MessageReader || (exports2.MessageReader = MessageReader = {}));
    var AbstractMessageReader = class {
      errorEmitter;
      closeEmitter;
      partialMessageEmitter;
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
        this.partialMessageEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error) {
        this.errorEmitter.fire(this.asError(error));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info) {
        this.partialMessageEmitter.fire(info);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Reader received error. Reason: ${Is2.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options) {
        let charset;
        let result;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options === void 0 || typeof options === "string") {
          charset = options ?? "utf-8";
        } else {
          charset = options.charset ?? "utf-8";
          if (options.contentDecoder !== void 0) {
            contentDecoder = options.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options.contentDecoders !== void 0) {
            for (const decoder of options.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options.contentTypeDecoders !== void 0) {
            for (const decoder of options.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    var ReadableStreamMessageReader = class extends AbstractMessageReader {
      readable;
      options;
      callback;
      nextMessageLength;
      messageToken;
      buffer;
      partialMessageTimer;
      _partialMessageTimeout;
      readSemaphore;
      constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result;
      }
      onData(data) {
        try {
          this.buffer.append(data);
          while (true) {
            if (this.nextMessageLength === -1) {
              const headers = this.buffer.tryReadHeaders(true);
              if (!headers) {
                return;
              }
              const contentLength = headers.get("content-length");
              if (!contentLength) {
                this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(headers))}`));
                return;
              }
              const length = parseInt(contentLength);
              if (isNaN(length)) {
                this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
                return;
              }
              this.nextMessageLength = length;
            }
            const body = this.buffer.tryReadBody(this.nextMessageLength);
            if (body === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            this.readSemaphore.lock(async () => {
              const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body) : body;
              const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
              this.callback(message);
            }).catch((error) => {
              this.fireError(error);
            });
          }
        } catch (error) {
          this.fireError(error);
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    };
    exports2.ReadableStreamMessageReader = ReadableStreamMessageReader;
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar2(require_is2());
    var semaphore_1 = require_semaphore();
    var events_1 = require_events();
    var ContentLength = "Content-Length: ";
    var CRLF = "\r\n";
    var MessageWriter;
    (function(MessageWriter2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.dispose) && Is2.func(candidate.onClose) && Is2.func(candidate.onError) && Is2.func(candidate.write);
      }
      MessageWriter2.is = is;
    })(MessageWriter || (exports2.MessageWriter = MessageWriter = {}));
    var AbstractMessageWriter = class {
      errorEmitter;
      closeEmitter;
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Writer received error. Reason: ${Is2.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options) {
        if (options === void 0 || typeof options === "string") {
          return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
      writable;
      options;
      errorCount;
      writeSemaphore;
      constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error) => {
            this.fireError(error);
            throw error;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    };
    exports2.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractMessageBuffer = void 0;
    var CR = 13;
    var LF = 10;
    var CRLF = "\r\n";
    var AbstractMessageBuffer = class {
      _encoding;
      _chunks;
      _totalLength;
      constructor(encoding = "utf-8") {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(chunk) {
        const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
      }
      tryReadHeaders(lowerCaseKeys = false) {
        if (this._chunks.length === 0) {
          return void 0;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row: while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          while (offset < chunk.length) {
            const value = chunk[offset];
            switch (value) {
              case CR:
                switch (state) {
                  case 0:
                    state = 1;
                    break;
                  case 2:
                    state = 3;
                    break;
                  default:
                    state = 0;
                }
                break;
              case LF:
                switch (state) {
                  case 1:
                    state = 2;
                    break;
                  case 3:
                    state = 4;
                    offset++;
                    break row;
                  default:
                    state = 0;
                }
                break;
              default:
                state = 0;
            }
            offset++;
          }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
        if (state !== 4) {
          return void 0;
        }
        const buffer = this._read(chunkBytesRead + offset);
        const result = /* @__PURE__ */ new Map();
        const headers = this.toString(buffer, "ascii").split(CRLF);
        if (headers.length < 2) {
          return result;
        }
        for (let i = 0; i < headers.length - 2; i++) {
          const header = headers[i];
          const index = header.indexOf(":");
          if (index === -1) {
            throw new Error(`Message header must separate key and value using ':'
${header}`);
          }
          const key = header.substr(0, index);
          const value = header.substr(index + 1).trim();
          result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
        }
        return result;
      }
      tryReadBody(length) {
        if (this._totalLength < length) {
          return void 0;
        }
        return this._read(length);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(byteCount) {
        if (byteCount === 0) {
          return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
          throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
          const chunk = this._chunks[0];
          this._chunks.shift();
          this._totalLength -= byteCount;
          return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
          const chunk = this._chunks[0];
          const result2 = this.asNative(chunk, byteCount);
          this._chunks[0] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          return result2;
        }
        const result = this.allocNative(byteCount);
        let resultOffset = 0;
        const chunkIndex = 0;
        while (byteCount > 0) {
          const chunk = this._chunks[chunkIndex];
          if (chunk.byteLength > byteCount) {
            const chunkPart = chunk.slice(0, byteCount);
            result.set(chunkPart, resultOffset);
            resultOffset += byteCount;
            this._chunks[chunkIndex] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            byteCount -= byteCount;
          } else {
            result.set(chunk, resultOffset);
            resultOffset += chunk.byteLength;
            this._chunks.shift();
            this._totalLength -= chunk.byteLength;
            byteCount -= chunk.byteLength;
          }
        }
        return result;
      }
    };
    exports2.AbstractMessageBuffer = AbstractMessageBuffer;
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/connection.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConnectionOptions = exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.ConnectionStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.TraceValue = exports2.Trace = exports2.NullLogger = exports2.ProgressType = exports2.ProgressToken = void 0;
    exports2.createMessageConnection = createMessageConnection;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar2(require_is2());
    var messages_1 = require_messages();
    var linkedMap_1 = require_linkedMap();
    var events_1 = require_events();
    var cancellation_1 = require_cancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is;
    })(ProgressToken || (exports2.ProgressToken = ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    var ProgressType = class {
      /**
       * Clients must not use these properties. They are here to ensure correct typing.
       * in TypeScript
       */
      __;
      _pr;
      constructor() {
      }
    };
    exports2.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is(value) {
        return Is2.func(value);
      }
      StarRequestHandler2.is = is;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports2.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace;
    (function(Trace2) {
      Trace2[Trace2["Off"] = 0] = "Off";
      Trace2[Trace2["Messages"] = 1] = "Messages";
      Trace2[Trace2["Compact"] = 2] = "Compact";
      Trace2[Trace2["Verbose"] = 3] = "Verbose";
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceValue;
    (function(TraceValue2) {
      TraceValue2.Off = "off";
      TraceValue2.Messages = "messages";
      TraceValue2.Compact = "compact";
      TraceValue2.Verbose = "verbose";
    })(TraceValue || (exports2.TraceValue = TraceValue = {}));
    exports2.TraceValues = TraceValue;
    (function(Trace2) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return Trace2.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace2.Off;
          case "messages":
            return Trace2.Messages;
          case "compact":
            return Trace2.Compact;
          case "verbose":
            return Trace2.Verbose;
          default:
            return Trace2.Off;
        }
      }
      Trace2.fromString = fromString;
      function toString(value) {
        switch (value) {
          case Trace2.Off:
            return "off";
          case Trace2.Messages:
            return "messages";
          case Trace2.Compact:
            return "compact";
          case Trace2.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace2.toString = toString;
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification || (exports2.SetTraceNotification = SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification || (exports2.LogTraceNotification = LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors || (exports2.ConnectionErrors = ConnectionErrors = {}));
    var ConnectionError = class _ConnectionError extends Error {
      code;
      constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, _ConnectionError.prototype);
      }
    };
    exports2.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is;
    })(ConnectionStrategy || (exports2.ConnectionStrategy = ConnectionStrategy = {}));
    var IdCancellationReceiverStrategy;
    (function(IdCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is2.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is2.func(candidate.dispose));
      }
      IdCancellationReceiverStrategy2.is = is;
    })(IdCancellationReceiverStrategy || (exports2.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
    var RequestCancellationReceiverStrategy;
    (function(RequestCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "request" && Is2.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is2.func(candidate.dispose));
      }
      RequestCancellationReceiverStrategy2.is = is;
    })(RequestCancellationReceiverStrategy || (exports2.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
      }
      CancellationReceiverStrategy2.is = is;
    })(CancellationReceiverStrategy || (exports2.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) {
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.sendCancellation) && Is2.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is;
    })(CancellationSenderStrategy || (exports2.CancellationSenderStrategy = CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is;
    })(CancellationStrategy || (exports2.CancellationStrategy = CancellationStrategy = {}));
    var MessageStrategy;
    (function(MessageStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.handleMessage);
      }
      MessageStrategy2.is = is;
    })(MessageStrategy || (exports2.MessageStrategy = MessageStrategy = {}));
    var ConnectionOptions;
    (function(ConnectionOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy) || Is2.number(candidate.maxParallelism));
      }
      ConnectionOptions2.is = is;
    })(ConnectionOptions || (exports2.ConnectionOptions = ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection(messageReader, messageWriter, _logger, options) {
      const logger = _logger !== void 0 ? _logger : exports2.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      const maxParallelism = options?.maxParallelism ?? -1;
      let inFlight = 0;
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error) {
        errorEmitter.fire([error, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader.onClose(closeHandler);
      messageReader.onError(readErrorHandler);
      messageWriter.onClose(closeHandler);
      messageWriter.onError(writeErrorHandler);
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
          queue.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          if (maxParallelism === -1) {
            queue.set(createResponseQueueKey(message.id), message);
          } else {
            handleResponse(message);
          }
        } else {
          queue.set(createNotificationQueueKey(), message);
        }
      }
      function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
          return;
        }
        if (maxParallelism !== -1 && inFlight >= maxParallelism) {
          return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(async () => {
          timer = void 0;
          if (messageQueue.size === 0) {
            return;
          }
          if (maxParallelism !== -1 && inFlight >= maxParallelism) {
            return;
          }
          const message = messageQueue.shift();
          let result;
          try {
            inFlight++;
            const messageStrategy = options?.messageStrategy;
            if (MessageStrategy.is(messageStrategy)) {
              result = messageStrategy.handleMessage(message, handleMessage);
            } else {
              result = handleMessage(message);
            }
          } catch (error) {
            logger.error(`Processing message queue failed: ${error.toString()}`);
          } finally {
            if (result instanceof Promise) {
              result.then(() => {
                inFlight--;
                triggerMessageQueue();
              }).catch((error) => {
                logger.error(`Processing message queue failed: ${error.toString()}`);
              });
            } else {
              inFlight--;
            }
            triggerMessageQueue();
          }
        });
      }
      async function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
          return handleRequest(message);
        } else if (messages_1.Message.isNotification(message)) {
          return handleNotification(message);
        } else if (messages_1.Message.isResponse(message)) {
          return handleResponse(message);
        } else {
          return handleInvalidMessage(message);
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options?.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      async function handleRequest(requestMessage) {
        if (isDisposed()) {
          return Promise.resolve();
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          return messageWriter.write(message);
        }
        function replyError(error, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          return messageWriter.write(message);
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const resultOrError = await handlerResult;
            await reply(resultOrError, requestMessage.method, startTime);
          } catch (error) {
            if (error instanceof messages_1.ResponseError) {
              await reply(error, requestMessage.method, startTime);
            } else if (error && Is2.string(error.message)) {
              await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
            } else {
              await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          } finally {
            requestTokens.delete(tokenKey);
          }
        } else {
          await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      async function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                await notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  await notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  await notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                await notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              await starNotificationHandler(message.method, message.params);
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is2.string(responseMessage.id) || Is2.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}`;
            } else {
              data = "No parameters provided.";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}`;
              } else if (message.error === void 0) {
                data = "No result returned.";
              }
            }
          }
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}`;
            } else {
              data = "No parameters provided.";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}`;
              } else if (message.error === void 0) {
                data = "No result returned.";
              }
            }
          }
          if (responsePromise) {
            const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result = void 0;
            break;
          case 1:
            result = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result = [];
            for (let i = 0; i < params.length && i < numberOfParams; i++) {
              result.push(undefinedToNull(params[i]));
            }
            if (params.length < numberOfParams) {
              for (let i = params.length; i < numberOfParams; i++) {
                result.push(null);
              }
            }
            break;
        }
        return result;
      }
      const connection2 = {
        sendNotification: (type, ...args) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is2.string(type)) {
            method = type;
            const first = args[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            const paramEnd = args.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter.write(notificationMessage).catch((error) => {
            logger.error(`Sending notification failed.`);
            throw error;
          });
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is2.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is2.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                if (notificationHandlers.get(method)?.handler === handler) {
                  notificationHandlers.delete(method);
                }
              } else if (starNotificationHandler === type) {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              if (progressHandlers.get(token) === handler) {
                progressHandlers.delete(token);
              }
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection2.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          function sendCancellation(connection3, id2) {
            const p = cancellationStrategy.sender.sendCancellation(connection3, id2);
            if (p === void 0) {
              logger.log(`Received no promise from cancellation strategy when cancelling id ${id2}`);
            } else {
              p.catch(() => {
                logger.log(`Sending cancellation messages for id ${id2} failed.`);
              });
            }
          }
          let method;
          let messageParams;
          let token = void 0;
          if (Is2.string(type)) {
            method = type;
            const first = args[0];
            const last = args[args.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable;
          let tokenWasCancelled = false;
          if (token !== void 0) {
            if (token.isCancellationRequested) {
              tokenWasCancelled = true;
            } else {
              disposable = token.onCancellationRequested(() => {
                sendCancellation(connection2, id);
              });
            }
          }
          const requestMessage = {
            jsonrpc: version,
            id,
            method,
            params: messageParams
          };
          traceSendingRequest(requestMessage);
          if (typeof cancellationStrategy.sender.enableCancellation === "function") {
            cancellationStrategy.sender.enableCancellation(requestMessage);
          }
          return new Promise(async (resolve, reject) => {
            const resolveWithCleanup = (r) => {
              resolve(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const rejectWithCleanup = (r) => {
              reject(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            try {
              responsePromises.set(id, responsePromise);
              await messageWriter.write(requestMessage);
              if (tokenWasCancelled) {
                sendCancellation(connection2, id);
              }
            } catch (error) {
              responsePromises.delete(id);
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
              logger.error(`Sending request failed.`);
              throw error;
            }
          });
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is2.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                if (requestHandlers.get(method)?.handler === handler) {
                  requestHandlers.delete(method);
                }
              } else if (starRequestHandler === type) {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is2.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection2.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is2.func(messageWriter.dispose)) {
            messageWriter.dispose();
          }
          if (Is2.func(messageReader.dispose)) {
            messageReader.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection2.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection2.onNotification(ProgressNotification.type, async (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          await handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection2;
    }
  }
});

// server/node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/common/api.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProgressType = exports2.ProgressToken = exports2.createMessageConnection = exports2.NullLogger = exports2.ConnectionOptions = exports2.ConnectionStrategy = exports2.AbstractMessageBuffer = exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = exports2.CancellationToken = exports2.CancellationTokenSource = exports2.Emitter = exports2.Event = exports2.Disposable = exports2.LRUCache = exports2.Touch = exports2.LinkedMap = exports2.ParameterStructures = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.ErrorCodes = exports2.ResponseError = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType0 = exports2.RequestType = exports2.Message = exports2.RAL = void 0;
    exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.CancellationReceiverStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.TraceValue = exports2.Trace = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports2, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports2, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports2, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports2, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports2, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports2, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports2, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports2, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports2, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports2, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports2, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports2, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports2, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports2, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports2, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports2, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports2, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports2, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports2, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports2, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports2, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports2, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports2, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports2, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports2, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports2, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    var linkedMap_1 = require_linkedMap();
    Object.defineProperty(exports2, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports2, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports2, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    var disposable_1 = require_disposable();
    Object.defineProperty(exports2, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    var events_1 = require_events();
    Object.defineProperty(exports2, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports2, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    var cancellation_1 = require_cancellation();
    Object.defineProperty(exports2, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports2, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    var sharedArrayCancellation_1 = require_sharedArrayCancellation();
    Object.defineProperty(exports2, "SharedArraySenderStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArraySenderStrategy;
    } });
    Object.defineProperty(exports2, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
    } });
    var messageReader_1 = require_messageReader();
    Object.defineProperty(exports2, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports2, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports2, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    var messageWriter_1 = require_messageWriter();
    Object.defineProperty(exports2, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports2, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports2, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    var messageBuffer_1 = require_messageBuffer();
    Object.defineProperty(exports2, "AbstractMessageBuffer", { enumerable: true, get: function() {
      return messageBuffer_1.AbstractMessageBuffer;
    } });
    var connection_1 = require_connection();
    Object.defineProperty(exports2, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports2, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports2, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports2, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports2, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports2, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports2, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports2, "TraceValue", { enumerable: true, get: function() {
      return connection_1.TraceValue;
    } });
    Object.defineProperty(exports2, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports2, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports2, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports2, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports2, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports2, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "IdCancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.IdCancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "RequestCancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.RequestCancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports2, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    Object.defineProperty(exports2, "MessageStrategy", { enumerable: true, get: function() {
      return connection_1.MessageStrategy;
    } });
    Object.defineProperty(exports2, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    var ral_1 = __importDefault(require_ral());
    exports2.RAL = ral_1.default;
  }
});

// server/node_modules/vscode-languageserver-types/lib/esm/main.js
var main_exports = {};
__export(main_exports, {
  AnnotatedTextEdit: () => AnnotatedTextEdit,
  ApplyKind: () => ApplyKind,
  ChangeAnnotation: () => ChangeAnnotation,
  ChangeAnnotationIdentifier: () => ChangeAnnotationIdentifier,
  CodeAction: () => CodeAction,
  CodeActionContext: () => CodeActionContext,
  CodeActionKind: () => CodeActionKind,
  CodeActionTag: () => CodeActionTag,
  CodeActionTriggerKind: () => CodeActionTriggerKind,
  CodeDescription: () => CodeDescription,
  CodeLens: () => CodeLens,
  Color: () => Color,
  ColorInformation: () => ColorInformation,
  ColorPresentation: () => ColorPresentation,
  Command: () => Command,
  CompletionItem: () => CompletionItem,
  CompletionItemKind: () => CompletionItemKind,
  CompletionItemLabelDetails: () => CompletionItemLabelDetails,
  CompletionItemTag: () => CompletionItemTag,
  CompletionList: () => CompletionList,
  CreateFile: () => CreateFile,
  DeleteFile: () => DeleteFile,
  Diagnostic: () => Diagnostic,
  DiagnosticRelatedInformation: () => DiagnosticRelatedInformation,
  DiagnosticSeverity: () => DiagnosticSeverity,
  DiagnosticTag: () => DiagnosticTag,
  DocumentHighlight: () => DocumentHighlight,
  DocumentHighlightKind: () => DocumentHighlightKind,
  DocumentLink: () => DocumentLink,
  DocumentSymbol: () => DocumentSymbol,
  DocumentUri: () => DocumentUri,
  EOL: () => EOL,
  FoldingRange: () => FoldingRange,
  FoldingRangeKind: () => FoldingRangeKind,
  FormattingOptions: () => FormattingOptions,
  Hover: () => Hover,
  InlayHint: () => InlayHint,
  InlayHintKind: () => InlayHintKind,
  InlayHintLabelPart: () => InlayHintLabelPart,
  InlineCompletionContext: () => InlineCompletionContext,
  InlineCompletionItem: () => InlineCompletionItem,
  InlineCompletionList: () => InlineCompletionList,
  InlineCompletionTriggerKind: () => InlineCompletionTriggerKind,
  InlineValueContext: () => InlineValueContext,
  InlineValueEvaluatableExpression: () => InlineValueEvaluatableExpression,
  InlineValueText: () => InlineValueText,
  InlineValueVariableLookup: () => InlineValueVariableLookup,
  InsertReplaceEdit: () => InsertReplaceEdit,
  InsertTextFormat: () => InsertTextFormat,
  InsertTextMode: () => InsertTextMode,
  LanguageKind: () => LanguageKind,
  Location: () => Location,
  LocationLink: () => LocationLink,
  MarkedString: () => MarkedString,
  MarkupContent: () => MarkupContent,
  MarkupKind: () => MarkupKind,
  OptionalVersionedTextDocumentIdentifier: () => OptionalVersionedTextDocumentIdentifier,
  ParameterInformation: () => ParameterInformation,
  Position: () => Position,
  Range: () => Range,
  RenameFile: () => RenameFile,
  SelectedCompletionInfo: () => SelectedCompletionInfo,
  SelectionRange: () => SelectionRange,
  SemanticTokenModifiers: () => SemanticTokenModifiers,
  SemanticTokenTypes: () => SemanticTokenTypes,
  SemanticTokens: () => SemanticTokens,
  SignatureInformation: () => SignatureInformation,
  SnippetTextEdit: () => SnippetTextEdit,
  StringValue: () => StringValue,
  SymbolInformation: () => SymbolInformation,
  SymbolKind: () => SymbolKind,
  SymbolTag: () => SymbolTag,
  TextDocument: () => TextDocument,
  TextDocumentEdit: () => TextDocumentEdit,
  TextDocumentIdentifier: () => TextDocumentIdentifier,
  TextDocumentItem: () => TextDocumentItem,
  TextEdit: () => TextEdit,
  URI: () => URI,
  VersionedTextDocumentIdentifier: () => VersionedTextDocumentIdentifier,
  WorkspaceChange: () => WorkspaceChange,
  WorkspaceEdit: () => WorkspaceEdit,
  WorkspaceFolder: () => WorkspaceFolder,
  WorkspaceSymbol: () => WorkspaceSymbol,
  integer: () => integer,
  uinteger: () => uinteger
});
var DocumentUri, URI, integer, uinteger, Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, DiagnosticTag, CodeDescription, Diagnostic, Command, TextEdit, ChangeAnnotation, ChangeAnnotationIdentifier, AnnotatedTextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, TextEditChangeImpl, SnippetTextEdit, ChangeAnnotations, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, OptionalVersionedTextDocumentIdentifier, LanguageKind, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItemTag, InsertReplaceEdit, InsertTextMode, ApplyKind, CompletionItemLabelDetails, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolTag, SymbolInformation, WorkspaceSymbol, DocumentSymbol, CodeActionKind, CodeActionTriggerKind, CodeActionContext, CodeActionTag, CodeAction, CodeLens, FormattingOptions, DocumentLink, SelectionRange, SemanticTokenTypes, SemanticTokenModifiers, SemanticTokens, InlineValueText, InlineValueVariableLookup, InlineValueEvaluatableExpression, InlineValueContext, InlayHintKind, InlayHintLabelPart, InlayHint, StringValue, InlineCompletionItem, InlineCompletionList, InlineCompletionTriggerKind, SelectedCompletionInfo, InlineCompletionContext, WorkspaceFolder, EOL, TextDocument, FullTextDocument, Is;
var init_main = __esm({
  "server/node_modules/vscode-languageserver-types/lib/esm/main.js"() {
    "use strict";
    (function(DocumentUri2) {
      function is(value) {
        return typeof value === "string";
      }
      DocumentUri2.is = is;
    })(DocumentUri || (DocumentUri = {}));
    (function(URI2) {
      function is(value) {
        return typeof value === "string";
      }
      URI2.is = is;
    })(URI || (URI = {}));
    (function(integer2) {
      integer2.MIN_VALUE = -2147483648;
      integer2.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
      }
      integer2.is = is;
    })(integer || (integer = {}));
    (function(uinteger2) {
      uinteger2.MIN_VALUE = 0;
      uinteger2.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
      }
      uinteger2.is = is;
    })(uinteger || (uinteger = {}));
    (function(Position2) {
      function create(line, character) {
        if (line === Number.MAX_VALUE) {
          line = uinteger.MAX_VALUE;
        }
        if (character === Number.MAX_VALUE) {
          character = uinteger.MAX_VALUE;
        }
        return { line, character };
      }
      Position2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
      }
      Position2.is = is;
    })(Position || (Position = {}));
    (function(Range2) {
      function create(one, two, three, four) {
        if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
          return { start: Position.create(one, two), end: Position.create(three, four) };
        } else if (Position.is(one) && Position.is(two)) {
          return { start: one, end: two };
        } else {
          throw new Error(`Range#create called with invalid arguments[${one}, ${two}, ${three}, ${four}]`);
        }
      }
      Range2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
      }
      Range2.is = is;
    })(Range || (Range = {}));
    (function(Location2) {
      function create(uri, range) {
        return { uri, range };
      }
      Location2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
      }
      Location2.is = is;
    })(Location || (Location = {}));
    (function(LocationLink2) {
      function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
      }
      LocationLink2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
      }
      LocationLink2.is = is;
    })(LocationLink || (LocationLink = {}));
    (function(Color2) {
      function create(red, green, blue, alpha) {
        return {
          red,
          green,
          blue,
          alpha
        };
      }
      Color2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
      }
      Color2.is = is;
    })(Color || (Color = {}));
    (function(ColorInformation2) {
      function create(range, color) {
        return {
          range,
          color
        };
      }
      ColorInformation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
      }
      ColorInformation2.is = is;
    })(ColorInformation || (ColorInformation = {}));
    (function(ColorPresentation2) {
      function create(label, textEdit, additionalTextEdits) {
        return {
          label,
          textEdit,
          additionalTextEdits
        };
      }
      ColorPresentation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
      }
      ColorPresentation2.is = is;
    })(ColorPresentation || (ColorPresentation = {}));
    (function(FoldingRangeKind2) {
      FoldingRangeKind2.Comment = "comment";
      FoldingRangeKind2.Imports = "imports";
      FoldingRangeKind2.Region = "region";
    })(FoldingRangeKind || (FoldingRangeKind = {}));
    (function(FoldingRange2) {
      function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
        const result = {
          startLine,
          endLine
        };
        if (Is.defined(startCharacter)) {
          result.startCharacter = startCharacter;
        }
        if (Is.defined(endCharacter)) {
          result.endCharacter = endCharacter;
        }
        if (Is.defined(kind)) {
          result.kind = kind;
        }
        if (Is.defined(collapsedText)) {
          result.collapsedText = collapsedText;
        }
        return result;
      }
      FoldingRange2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
      }
      FoldingRange2.is = is;
    })(FoldingRange || (FoldingRange = {}));
    (function(DiagnosticRelatedInformation2) {
      function create(location, message) {
        return {
          location,
          message
        };
      }
      DiagnosticRelatedInformation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
      }
      DiagnosticRelatedInformation2.is = is;
    })(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
    (function(DiagnosticSeverity2) {
      DiagnosticSeverity2.Error = 1;
      DiagnosticSeverity2.Warning = 2;
      DiagnosticSeverity2.Information = 3;
      DiagnosticSeverity2.Hint = 4;
    })(DiagnosticSeverity || (DiagnosticSeverity = {}));
    (function(DiagnosticTag2) {
      DiagnosticTag2.Unnecessary = 1;
      DiagnosticTag2.Deprecated = 2;
    })(DiagnosticTag || (DiagnosticTag = {}));
    (function(CodeDescription2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.href);
      }
      CodeDescription2.is = is;
    })(CodeDescription || (CodeDescription = {}));
    (function(Diagnostic2) {
      function create(range, message, severity, code, source, relatedInformation) {
        const result = { range, message };
        if (Is.defined(severity)) {
          result.severity = severity;
        }
        if (Is.defined(code)) {
          result.code = code;
        }
        if (Is.defined(source)) {
          result.source = source;
        }
        if (Is.defined(relatedInformation)) {
          result.relatedInformation = relatedInformation;
        }
        return result;
      }
      Diagnostic2.create = create;
      function is(value) {
        var _a;
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.string(candidate.message) || MarkupContent.is(candidate.message)) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
      }
      Diagnostic2.is = is;
      function is3_17(value) {
        return Is.string(value.message);
      }
      Diagnostic2.is3_17 = is3_17;
      function getMessageString(diagnostic) {
        if (Is.string(diagnostic.message)) {
          return diagnostic.message;
        } else if (MarkupContent.is(diagnostic.message)) {
          return diagnostic.message.value;
        } else {
          throw new Error(`Unknown message type ${typeof diagnostic.message}`);
        }
      }
      Diagnostic2.getMessageString = getMessageString;
    })(Diagnostic || (Diagnostic = {}));
    (function(Command2) {
      function create(title, command, ...args) {
        const result = { title, command };
        if (Is.defined(args) && args.length > 0) {
          result.arguments = args;
        }
        return result;
      }
      Command2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip)) && Is.string(candidate.command);
      }
      Command2.is = is;
    })(Command || (Command = {}));
    (function(TextEdit2) {
      function replace(range, newText) {
        return { range, newText };
      }
      TextEdit2.replace = replace;
      function insert(position, newText) {
        return { range: { start: position, end: position }, newText };
      }
      TextEdit2.insert = insert;
      function del(range) {
        return { range, newText: "" };
      }
      TextEdit2.del = del;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
      }
      TextEdit2.is = is;
    })(TextEdit || (TextEdit = {}));
    (function(ChangeAnnotation2) {
      function create(label, needsConfirmation, description) {
        const result = { label };
        if (needsConfirmation !== void 0) {
          result.needsConfirmation = needsConfirmation;
        }
        if (description !== void 0) {
          result.description = description;
        }
        return result;
      }
      ChangeAnnotation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
      }
      ChangeAnnotation2.is = is;
    })(ChangeAnnotation || (ChangeAnnotation = {}));
    (function(ChangeAnnotationIdentifier2) {
      function is(value) {
        const candidate = value;
        return Is.string(candidate);
      }
      ChangeAnnotationIdentifier2.is = is;
    })(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
    (function(AnnotatedTextEdit2) {
      function replace(range, newText, annotation) {
        return { range, newText, annotationId: annotation };
      }
      AnnotatedTextEdit2.replace = replace;
      function insert(position, newText, annotation) {
        return { range: { start: position, end: position }, newText, annotationId: annotation };
      }
      AnnotatedTextEdit2.insert = insert;
      function del(range, annotation) {
        return { range, newText: "", annotationId: annotation };
      }
      AnnotatedTextEdit2.del = del;
      function is(value) {
        const candidate = value;
        return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      AnnotatedTextEdit2.is = is;
    })(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
    (function(TextDocumentEdit2) {
      function create(textDocument, edits) {
        return { textDocument, edits };
      }
      TextDocumentEdit2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
      }
      TextDocumentEdit2.is = is;
    })(TextDocumentEdit || (TextDocumentEdit = {}));
    (function(CreateFile2) {
      function create(uri, options, annotation) {
        const result = {
          kind: "create",
          uri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      CreateFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      CreateFile2.is = is;
    })(CreateFile || (CreateFile = {}));
    (function(RenameFile2) {
      function create(oldUri, newUri, options, annotation) {
        const result = {
          kind: "rename",
          oldUri,
          newUri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      RenameFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      RenameFile2.is = is;
    })(RenameFile || (RenameFile = {}));
    (function(DeleteFile2) {
      function create(uri, options, annotation) {
        const result = {
          kind: "delete",
          uri
        };
        if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      DeleteFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      DeleteFile2.is = is;
    })(DeleteFile || (DeleteFile = {}));
    (function(WorkspaceEdit2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every((change) => {
          if (Is.string(change.kind)) {
            return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
          } else {
            return TextDocumentEdit.is(change);
          }
        }));
      }
      WorkspaceEdit2.is = is;
    })(WorkspaceEdit || (WorkspaceEdit = {}));
    TextEditChangeImpl = class {
      constructor(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
      }
      insert(position, newText, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.insert(position, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      replace(range, newText, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.replace(range, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      delete(range, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.del(range);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.del(range, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.del(range, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      add(edit) {
        this.edits.push(edit);
      }
      all() {
        return this.edits;
      }
      clear() {
        this.edits.splice(0, this.edits.length);
      }
      assertChangeAnnotations(value) {
        if (value === void 0) {
          throw new Error(`Text edit change is not configured to manage change annotations.`);
        }
      }
    };
    (function(SnippetTextEdit2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && StringValue.isSnippet(candidate.snippet) && (candidate.annotationId === void 0 || (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId)));
      }
      SnippetTextEdit2.is = is;
    })(SnippetTextEdit || (SnippetTextEdit = {}));
    ChangeAnnotations = class {
      constructor(annotations) {
        this._annotations = annotations === void 0 ? /* @__PURE__ */ Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
      }
      all() {
        return this._annotations;
      }
      get size() {
        return this._size;
      }
      manage(idOrAnnotation, annotation) {
        let id;
        if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
          id = idOrAnnotation;
        } else {
          id = this.nextId();
          annotation = idOrAnnotation;
        }
        if (this._annotations[id] !== void 0) {
          throw new Error(`Id ${id} is already in use.`);
        }
        if (annotation === void 0) {
          throw new Error(`No annotation provided for id ${id}`);
        }
        this._annotations[id] = annotation;
        this._size++;
        return id;
      }
      nextId() {
        this._counter++;
        return this._counter.toString();
      }
    };
    WorkspaceChange = class {
      constructor(workspaceEdit) {
        this._textEditChanges = /* @__PURE__ */ Object.create(null);
        if (workspaceEdit !== void 0) {
          this._workspaceEdit = workspaceEdit;
          if (workspaceEdit.documentChanges) {
            this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
            workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            workspaceEdit.documentChanges.forEach((change) => {
              if (TextDocumentEdit.is(change)) {
                const textEditChange = new TextEditChangeImpl(change.edits, this._changeAnnotations);
                this._textEditChanges[change.textDocument.uri] = textEditChange;
              }
            });
          } else if (workspaceEdit.changes) {
            Object.keys(workspaceEdit.changes).forEach((key) => {
              const textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
              this._textEditChanges[key] = textEditChange;
            });
          }
        } else {
          this._workspaceEdit = {};
        }
      }
      /**
       * Returns the underlying {@link WorkspaceEdit} literal
       * use to be returned from a workspace edit operation like rename.
       */
      get edit() {
        this.initDocumentChanges();
        if (this._changeAnnotations !== void 0) {
          if (this._changeAnnotations.size === 0) {
            this._workspaceEdit.changeAnnotations = void 0;
          } else {
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
          }
        }
        return this._workspaceEdit;
      }
      getTextEditChange(key) {
        if (OptionalVersionedTextDocumentIdentifier.is(key)) {
          this.initDocumentChanges();
          if (this._workspaceEdit.documentChanges === void 0) {
            throw new Error("Workspace edit is not configured for document changes.");
          }
          const textDocument = { uri: key.uri, version: key.version };
          let result = this._textEditChanges[textDocument.uri];
          if (!result) {
            const edits = [];
            const textDocumentEdit = {
              textDocument,
              edits
            };
            this._workspaceEdit.documentChanges.push(textDocumentEdit);
            result = new TextEditChangeImpl(edits, this._changeAnnotations);
            this._textEditChanges[textDocument.uri] = result;
          }
          return result;
        } else {
          this.initChanges();
          if (this._workspaceEdit.changes === void 0) {
            throw new Error("Workspace edit is not configured for normal text edit changes.");
          }
          let result = this._textEditChanges[key];
          if (!result) {
            const edits = [];
            this._workspaceEdit.changes[key] = edits;
            result = new TextEditChangeImpl(edits);
            this._textEditChanges[key] = result;
          }
          return result;
        }
      }
      initDocumentChanges() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
          this._changeAnnotations = new ChangeAnnotations();
          this._workspaceEdit.documentChanges = [];
          this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
        }
      }
      initChanges() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
          this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null);
        }
      }
      createFile(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = CreateFile.create(uri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
      renameFile(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = RenameFile.create(oldUri, newUri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
      deleteFile(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = DeleteFile.create(uri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
    };
    (function(TextDocumentIdentifier2) {
      function create(uri) {
        return { uri };
      }
      TextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
      }
      TextDocumentIdentifier2.is = is;
    })(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
    (function(VersionedTextDocumentIdentifier2) {
      function create(uri, version) {
        return { uri, version };
      }
      VersionedTextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
      }
      VersionedTextDocumentIdentifier2.is = is;
    })(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
    (function(OptionalVersionedTextDocumentIdentifier2) {
      function create(uri, version) {
        return { uri, version };
      }
      OptionalVersionedTextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
      }
      OptionalVersionedTextDocumentIdentifier2.is = is;
    })(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
    (function(LanguageKind2) {
      LanguageKind2.ABAP = "abap";
      LanguageKind2.WindowsBat = "bat";
      LanguageKind2.BibTeX = "bibtex";
      LanguageKind2.Clojure = "clojure";
      LanguageKind2.Coffeescript = "coffeescript";
      LanguageKind2.C = "c";
      LanguageKind2.CPP = "cpp";
      LanguageKind2.CSharp = "csharp";
      LanguageKind2.CSS = "css";
      LanguageKind2.D = "d";
      LanguageKind2.Delphi = "pascal";
      LanguageKind2.Diff = "diff";
      LanguageKind2.Dart = "dart";
      LanguageKind2.Dockerfile = "dockerfile";
      LanguageKind2.Elixir = "elixir";
      LanguageKind2.Erlang = "erlang";
      LanguageKind2.FSharp = "fsharp";
      LanguageKind2.GitCommit = "git-commit";
      LanguageKind2.GitRebase = "git-rebase";
      LanguageKind2.Go = "go";
      LanguageKind2.Groovy = "groovy";
      LanguageKind2.Handlebars = "handlebars";
      LanguageKind2.Haskell = "haskell";
      LanguageKind2.HTML = "html";
      LanguageKind2.Ini = "ini";
      LanguageKind2.Java = "java";
      LanguageKind2.JavaScript = "javascript";
      LanguageKind2.JavaScriptReact = "javascriptreact";
      LanguageKind2.JSON = "json";
      LanguageKind2.LaTeX = "latex";
      LanguageKind2.Less = "less";
      LanguageKind2.Lua = "lua";
      LanguageKind2.Makefile = "makefile";
      LanguageKind2.Markdown = "markdown";
      LanguageKind2.ObjectiveC = "objective-c";
      LanguageKind2.ObjectiveCPP = "objective-cpp";
      LanguageKind2.Pascal = "pascal";
      LanguageKind2.Perl = "perl";
      LanguageKind2.Perl6 = "perl6";
      LanguageKind2.PHP = "php";
      LanguageKind2.Plaintext = "plaintext";
      LanguageKind2.Powershell = "powershell";
      LanguageKind2.Pug = "jade";
      LanguageKind2.Python = "python";
      LanguageKind2.R = "r";
      LanguageKind2.Razor = "razor";
      LanguageKind2.Ruby = "ruby";
      LanguageKind2.Rust = "rust";
      LanguageKind2.SCSS = "scss";
      LanguageKind2.SASS = "sass";
      LanguageKind2.Scala = "scala";
      LanguageKind2.ShaderLab = "shaderlab";
      LanguageKind2.ShellScript = "shellscript";
      LanguageKind2.SQL = "sql";
      LanguageKind2.Swift = "swift";
      LanguageKind2.TypeScript = "typescript";
      LanguageKind2.TypeScriptReact = "typescriptreact";
      LanguageKind2.TeX = "tex";
      LanguageKind2.VisualBasic = "vb";
      LanguageKind2.XML = "xml";
      LanguageKind2.XSL = "xsl";
      LanguageKind2.YAML = "yaml";
    })(LanguageKind || (LanguageKind = {}));
    (function(TextDocumentItem2) {
      function create(uri, languageId, version, text) {
        return { uri, languageId, version, text };
      }
      TextDocumentItem2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
      }
      TextDocumentItem2.is = is;
    })(TextDocumentItem || (TextDocumentItem = {}));
    (function(MarkupKind2) {
      MarkupKind2.PlainText = "plaintext";
      MarkupKind2.Markdown = "markdown";
      function is(value) {
        const candidate = value;
        return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
      }
      MarkupKind2.is = is;
    })(MarkupKind || (MarkupKind = {}));
    (function(MarkupContent2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
      }
      MarkupContent2.is = is;
    })(MarkupContent || (MarkupContent = {}));
    (function(CompletionItemKind2) {
      CompletionItemKind2.Text = 1;
      CompletionItemKind2.Method = 2;
      CompletionItemKind2.Function = 3;
      CompletionItemKind2.Constructor = 4;
      CompletionItemKind2.Field = 5;
      CompletionItemKind2.Variable = 6;
      CompletionItemKind2.Class = 7;
      CompletionItemKind2.Interface = 8;
      CompletionItemKind2.Module = 9;
      CompletionItemKind2.Property = 10;
      CompletionItemKind2.Unit = 11;
      CompletionItemKind2.Value = 12;
      CompletionItemKind2.Enum = 13;
      CompletionItemKind2.Keyword = 14;
      CompletionItemKind2.Snippet = 15;
      CompletionItemKind2.Color = 16;
      CompletionItemKind2.File = 17;
      CompletionItemKind2.Reference = 18;
      CompletionItemKind2.Folder = 19;
      CompletionItemKind2.EnumMember = 20;
      CompletionItemKind2.Constant = 21;
      CompletionItemKind2.Struct = 22;
      CompletionItemKind2.Event = 23;
      CompletionItemKind2.Operator = 24;
      CompletionItemKind2.TypeParameter = 25;
    })(CompletionItemKind || (CompletionItemKind = {}));
    (function(InsertTextFormat2) {
      InsertTextFormat2.PlainText = 1;
      InsertTextFormat2.Snippet = 2;
    })(InsertTextFormat || (InsertTextFormat = {}));
    (function(CompletionItemTag2) {
      CompletionItemTag2.Deprecated = 1;
    })(CompletionItemTag || (CompletionItemTag = {}));
    (function(InsertReplaceEdit2) {
      function create(newText, insert, replace) {
        return { newText, insert, replace };
      }
      InsertReplaceEdit2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
      }
      InsertReplaceEdit2.is = is;
    })(InsertReplaceEdit || (InsertReplaceEdit = {}));
    (function(InsertTextMode2) {
      InsertTextMode2.asIs = 1;
      InsertTextMode2.adjustIndentation = 2;
    })(InsertTextMode || (InsertTextMode = {}));
    (function(ApplyKind2) {
      ApplyKind2.Replace = 1;
      ApplyKind2.Merge = 2;
    })(ApplyKind || (ApplyKind = {}));
    (function(CompletionItemLabelDetails2) {
      function is(value) {
        const candidate = value;
        return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
      }
      CompletionItemLabelDetails2.is = is;
    })(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
    (function(CompletionItem2) {
      function create(label) {
        return { label };
      }
      CompletionItem2.create = create;
    })(CompletionItem || (CompletionItem = {}));
    (function(CompletionList2) {
      function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
      }
      CompletionList2.create = create;
    })(CompletionList || (CompletionList = {}));
    (function(MarkedString2) {
      function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
      }
      MarkedString2.fromPlainText = fromPlainText;
      function is(value) {
        const candidate = value;
        return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
      }
      MarkedString2.is = is;
    })(MarkedString || (MarkedString = {}));
    (function(Hover2) {
      function is(value) {
        const candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
      }
      Hover2.is = is;
    })(Hover || (Hover = {}));
    (function(ParameterInformation2) {
      function create(label, documentation) {
        return documentation ? { label, documentation } : { label };
      }
      ParameterInformation2.create = create;
    })(ParameterInformation || (ParameterInformation = {}));
    (function(SignatureInformation2) {
      function create(label, documentation, ...parameters) {
        const result = { label };
        if (Is.defined(documentation)) {
          result.documentation = documentation;
        }
        if (Is.defined(parameters)) {
          result.parameters = parameters;
        } else {
          result.parameters = [];
        }
        return result;
      }
      SignatureInformation2.create = create;
    })(SignatureInformation || (SignatureInformation = {}));
    (function(DocumentHighlightKind2) {
      DocumentHighlightKind2.Text = 1;
      DocumentHighlightKind2.Read = 2;
      DocumentHighlightKind2.Write = 3;
    })(DocumentHighlightKind || (DocumentHighlightKind = {}));
    (function(DocumentHighlight2) {
      function create(range, kind) {
        const result = { range };
        if (Is.number(kind)) {
          result.kind = kind;
        }
        return result;
      }
      DocumentHighlight2.create = create;
    })(DocumentHighlight || (DocumentHighlight = {}));
    (function(SymbolKind2) {
      SymbolKind2.File = 1;
      SymbolKind2.Module = 2;
      SymbolKind2.Namespace = 3;
      SymbolKind2.Package = 4;
      SymbolKind2.Class = 5;
      SymbolKind2.Method = 6;
      SymbolKind2.Property = 7;
      SymbolKind2.Field = 8;
      SymbolKind2.Constructor = 9;
      SymbolKind2.Enum = 10;
      SymbolKind2.Interface = 11;
      SymbolKind2.Function = 12;
      SymbolKind2.Variable = 13;
      SymbolKind2.Constant = 14;
      SymbolKind2.String = 15;
      SymbolKind2.Number = 16;
      SymbolKind2.Boolean = 17;
      SymbolKind2.Array = 18;
      SymbolKind2.Object = 19;
      SymbolKind2.Key = 20;
      SymbolKind2.Null = 21;
      SymbolKind2.EnumMember = 22;
      SymbolKind2.Struct = 23;
      SymbolKind2.Event = 24;
      SymbolKind2.Operator = 25;
      SymbolKind2.TypeParameter = 26;
    })(SymbolKind || (SymbolKind = {}));
    (function(SymbolTag2) {
      SymbolTag2.Deprecated = 1;
    })(SymbolTag || (SymbolTag = {}));
    (function(SymbolInformation2) {
      function create(name, kind, range, uri, containerName) {
        const result = {
          name,
          kind,
          location: { uri, range }
        };
        if (containerName) {
          result.containerName = containerName;
        }
        return result;
      }
      SymbolInformation2.create = create;
    })(SymbolInformation || (SymbolInformation = {}));
    (function(WorkspaceSymbol2) {
      function create(name, kind, uri, range) {
        return range !== void 0 ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
      }
      WorkspaceSymbol2.create = create;
    })(WorkspaceSymbol || (WorkspaceSymbol = {}));
    (function(DocumentSymbol2) {
      function create(name, detail, kind, range, selectionRange, children) {
        const result = {
          name,
          detail,
          kind,
          range,
          selectionRange
        };
        if (children !== void 0) {
          result.children = children;
        }
        return result;
      }
      DocumentSymbol2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
      }
      DocumentSymbol2.is = is;
    })(DocumentSymbol || (DocumentSymbol = {}));
    (function(CodeActionKind2) {
      CodeActionKind2.Empty = "";
      CodeActionKind2.QuickFix = "quickfix";
      CodeActionKind2.Refactor = "refactor";
      CodeActionKind2.RefactorExtract = "refactor.extract";
      CodeActionKind2.RefactorInline = "refactor.inline";
      CodeActionKind2.RefactorMove = "refactor.move";
      CodeActionKind2.RefactorRewrite = "refactor.rewrite";
      CodeActionKind2.Source = "source";
      CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
      CodeActionKind2.SourceFixAll = "source.fixAll";
      CodeActionKind2.Notebook = "notebook";
    })(CodeActionKind || (CodeActionKind = {}));
    (function(CodeActionTriggerKind2) {
      CodeActionTriggerKind2.Invoked = 1;
      CodeActionTriggerKind2.Automatic = 2;
    })(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
    (function(CodeActionContext2) {
      function create(diagnostics, only, triggerKind) {
        const result = { diagnostics };
        if (only !== void 0 && only !== null) {
          result.only = only;
        }
        if (triggerKind !== void 0 && triggerKind !== null) {
          result.triggerKind = triggerKind;
        }
        return result;
      }
      CodeActionContext2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
      }
      CodeActionContext2.is = is;
    })(CodeActionContext || (CodeActionContext = {}));
    (function(CodeActionTag2) {
      CodeActionTag2.LLMGenerated = 1;
      function is(value) {
        return Is.defined(value) && value === CodeActionTag2.LLMGenerated;
      }
      CodeActionTag2.is = is;
    })(CodeActionTag || (CodeActionTag = {}));
    (function(CodeAction2) {
      function create(title, kindOrCommandOrEdit, kind) {
        const result = { title };
        let checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
          checkKind = false;
          result.kind = kindOrCommandOrEdit;
        } else if (Command.is(kindOrCommandOrEdit)) {
          result.command = kindOrCommandOrEdit;
        } else {
          result.edit = kindOrCommandOrEdit;
        }
        if (checkKind && kind !== void 0) {
          result.kind = kind;
        }
        return result;
      }
      CodeAction2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit)) && (candidate.tags === void 0 || Is.typedArray(candidate.tags, CodeActionTag.is));
      }
      CodeAction2.is = is;
    })(CodeAction || (CodeAction = {}));
    (function(CodeLens2) {
      function create(range, data) {
        const result = { range };
        if (Is.defined(data)) {
          result.data = data;
        }
        return result;
      }
      CodeLens2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
      }
      CodeLens2.is = is;
    })(CodeLens || (CodeLens = {}));
    (function(FormattingOptions2) {
      function create(tabSize, insertSpaces) {
        return { tabSize, insertSpaces };
      }
      FormattingOptions2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
      }
      FormattingOptions2.is = is;
    })(FormattingOptions || (FormattingOptions = {}));
    (function(DocumentLink2) {
      function create(range, target, data) {
        return { range, target, data };
      }
      DocumentLink2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
      }
      DocumentLink2.is = is;
    })(DocumentLink || (DocumentLink = {}));
    (function(SelectionRange2) {
      function create(range, parent) {
        return { range, parent };
      }
      SelectionRange2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
      }
      SelectionRange2.is = is;
    })(SelectionRange || (SelectionRange = {}));
    (function(SemanticTokenTypes2) {
      SemanticTokenTypes2["namespace"] = "namespace";
      SemanticTokenTypes2["type"] = "type";
      SemanticTokenTypes2["class"] = "class";
      SemanticTokenTypes2["enum"] = "enum";
      SemanticTokenTypes2["interface"] = "interface";
      SemanticTokenTypes2["struct"] = "struct";
      SemanticTokenTypes2["typeParameter"] = "typeParameter";
      SemanticTokenTypes2["parameter"] = "parameter";
      SemanticTokenTypes2["variable"] = "variable";
      SemanticTokenTypes2["property"] = "property";
      SemanticTokenTypes2["enumMember"] = "enumMember";
      SemanticTokenTypes2["event"] = "event";
      SemanticTokenTypes2["function"] = "function";
      SemanticTokenTypes2["method"] = "method";
      SemanticTokenTypes2["macro"] = "macro";
      SemanticTokenTypes2["keyword"] = "keyword";
      SemanticTokenTypes2["modifier"] = "modifier";
      SemanticTokenTypes2["comment"] = "comment";
      SemanticTokenTypes2["string"] = "string";
      SemanticTokenTypes2["number"] = "number";
      SemanticTokenTypes2["regexp"] = "regexp";
      SemanticTokenTypes2["operator"] = "operator";
      SemanticTokenTypes2["decorator"] = "decorator";
      SemanticTokenTypes2["label"] = "label";
    })(SemanticTokenTypes || (SemanticTokenTypes = {}));
    (function(SemanticTokenModifiers2) {
      SemanticTokenModifiers2["declaration"] = "declaration";
      SemanticTokenModifiers2["definition"] = "definition";
      SemanticTokenModifiers2["readonly"] = "readonly";
      SemanticTokenModifiers2["static"] = "static";
      SemanticTokenModifiers2["deprecated"] = "deprecated";
      SemanticTokenModifiers2["abstract"] = "abstract";
      SemanticTokenModifiers2["async"] = "async";
      SemanticTokenModifiers2["modification"] = "modification";
      SemanticTokenModifiers2["documentation"] = "documentation";
      SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
    })(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
    (function(SemanticTokens2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
      }
      SemanticTokens2.is = is;
    })(SemanticTokens || (SemanticTokens = {}));
    (function(InlineValueText2) {
      function create(range, text) {
        return { range, text };
      }
      InlineValueText2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
      }
      InlineValueText2.is = is;
    })(InlineValueText || (InlineValueText = {}));
    (function(InlineValueVariableLookup2) {
      function create(range, variableName, caseSensitiveLookup) {
        return { range, variableName, caseSensitiveLookup };
      }
      InlineValueVariableLookup2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
      }
      InlineValueVariableLookup2.is = is;
    })(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
    (function(InlineValueEvaluatableExpression2) {
      function create(range, expression) {
        return { range, expression };
      }
      InlineValueEvaluatableExpression2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
      }
      InlineValueEvaluatableExpression2.is = is;
    })(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
    (function(InlineValueContext2) {
      function create(frameId, stoppedLocation) {
        return { frameId, stoppedLocation };
      }
      InlineValueContext2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(value.stoppedLocation);
      }
      InlineValueContext2.is = is;
    })(InlineValueContext || (InlineValueContext = {}));
    (function(InlayHintKind2) {
      InlayHintKind2.Type = 1;
      InlayHintKind2.Parameter = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      InlayHintKind2.is = is;
    })(InlayHintKind || (InlayHintKind = {}));
    (function(InlayHintLabelPart2) {
      function create(value) {
        return { value };
      }
      InlayHintLabelPart2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
      }
      InlayHintLabelPart2.is = is;
    })(InlayHintLabelPart || (InlayHintLabelPart = {}));
    (function(InlayHint2) {
      function create(position, label, kind) {
        const result = { position, label };
        if (kind !== void 0) {
          result.kind = kind;
        }
        return result;
      }
      InlayHint2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
      }
      InlayHint2.is = is;
    })(InlayHint || (InlayHint = {}));
    (function(StringValue2) {
      function createSnippet(value) {
        return { kind: "snippet", value };
      }
      StringValue2.createSnippet = createSnippet;
      function isSnippet(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && candidate.kind === "snippet" && Is.string(candidate.value);
      }
      StringValue2.isSnippet = isSnippet;
    })(StringValue || (StringValue = {}));
    (function(InlineCompletionItem2) {
      function create(insertText, filterText, range, command) {
        return { insertText, filterText, range, command };
      }
      InlineCompletionItem2.create = create;
    })(InlineCompletionItem || (InlineCompletionItem = {}));
    (function(InlineCompletionList2) {
      function create(items) {
        return { items };
      }
      InlineCompletionList2.create = create;
    })(InlineCompletionList || (InlineCompletionList = {}));
    (function(InlineCompletionTriggerKind2) {
      InlineCompletionTriggerKind2.Invoked = 1;
      InlineCompletionTriggerKind2.Automatic = 2;
    })(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
    (function(SelectedCompletionInfo2) {
      function create(range, text) {
        return { range, text };
      }
      SelectedCompletionInfo2.create = create;
    })(SelectedCompletionInfo || (SelectedCompletionInfo = {}));
    (function(InlineCompletionContext2) {
      function create(triggerKind, selectedCompletionInfo) {
        return { triggerKind, selectedCompletionInfo };
      }
      InlineCompletionContext2.create = create;
    })(InlineCompletionContext || (InlineCompletionContext = {}));
    (function(WorkspaceFolder2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
      }
      WorkspaceFolder2.is = is;
    })(WorkspaceFolder || (WorkspaceFolder = {}));
    EOL = ["\n", "\r\n", "\r"];
    (function(TextDocument3) {
      function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
      }
      TextDocument3.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
      }
      TextDocument3.is = is;
      function applyEdits(document, edits) {
        let text = document.getText();
        const sortedEdits = mergeSort2(edits, (a, b) => {
          const diff = a.range.start.line - b.range.start.line;
          if (diff === 0) {
            return a.range.start.character - b.range.start.character;
          }
          return diff;
        });
        let lastModifiedOffset = text.length;
        for (let i = sortedEdits.length - 1; i >= 0; i--) {
          const e = sortedEdits[i];
          const startOffset = document.offsetAt(e.range.start);
          const endOffset = document.offsetAt(e.range.end);
          if (endOffset <= lastModifiedOffset) {
            text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
          } else {
            throw new Error("Overlapping edit");
          }
          lastModifiedOffset = startOffset;
        }
        return text;
      }
      TextDocument3.applyEdits = applyEdits;
      function mergeSort2(data, compare) {
        if (data.length <= 1) {
          return data;
        }
        const p = data.length / 2 | 0;
        const left = data.slice(0, p);
        const right = data.slice(p);
        mergeSort2(left, compare);
        mergeSort2(right, compare);
        let leftIdx = 0;
        let rightIdx = 0;
        let i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
          const ret = compare(left[leftIdx], right[rightIdx]);
          if (ret <= 0) {
            data[i++] = left[leftIdx++];
          } else {
            data[i++] = right[rightIdx++];
          }
        }
        while (leftIdx < left.length) {
          data[i++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
          data[i++] = right[rightIdx++];
        }
        return data;
      }
    })(TextDocument || (TextDocument = {}));
    FullTextDocument = class {
      constructor(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(range) {
        if (range) {
          const start = this.offsetAt(range.start);
          const end = this.offsetAt(range.end);
          return this._content.substring(start, end);
        }
        return this._content;
      }
      update(event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = void 0;
      }
      getLineOffsets() {
        if (this._lineOffsets === void 0) {
          const lineOffsets = [];
          const text = this._content;
          let isLineStart = true;
          for (let i = 0; i < text.length; i++) {
            if (isLineStart) {
              lineOffsets.push(i);
              isLineStart = false;
            }
            const ch = text.charAt(i);
            isLineStart = ch === "\r" || ch === "\n";
            if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
              i++;
            }
          }
          if (isLineStart && text.length > 0) {
            lineOffsets.push(text.length);
          }
          this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
      }
      positionAt(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        const lineOffsets = this.getLineOffsets();
        let low = 0, high = lineOffsets.length;
        if (high === 0) {
          return Position.create(0, offset);
        }
        while (low < high) {
          const mid = Math.floor((low + high) / 2);
          if (lineOffsets[mid] > offset) {
            high = mid;
          } else {
            low = mid + 1;
          }
        }
        const line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
      }
      offsetAt(position) {
        const lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
          return this._content.length;
        } else if (position.line < 0) {
          return 0;
        }
        const lineOffset = lineOffsets[position.line];
        const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
    };
    (function(Is2) {
      const toString = Object.prototype.toString;
      function defined(value) {
        return typeof value !== "undefined";
      }
      Is2.defined = defined;
      function undefined2(value) {
        return typeof value === "undefined";
      }
      Is2.undefined = undefined2;
      function boolean(value) {
        return value === true || value === false;
      }
      Is2.boolean = boolean;
      function string(value) {
        return toString.call(value) === "[object String]";
      }
      Is2.string = string;
      function number(value) {
        return toString.call(value) === "[object Number]";
      }
      Is2.number = number;
      function numberRange(value, min, max) {
        return toString.call(value) === "[object Number]" && min <= value && value <= max;
      }
      Is2.numberRange = numberRange;
      function integer2(value) {
        return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
      }
      Is2.integer = integer2;
      function uinteger2(value) {
        return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
      }
      Is2.uinteger = uinteger2;
      function func(value) {
        return toString.call(value) === "[object Function]";
      }
      Is2.func = func;
      function objectLiteral(value) {
        return value !== null && typeof value === "object";
      }
      Is2.objectLiteral = objectLiteral;
      function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
      }
      Is2.typedArray = typedArray;
    })(Is || (Is = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages2 = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CM = exports2.ProtocolNotificationType = exports2.ProtocolNotificationType0 = exports2.ProtocolRequestType = exports2.ProtocolRequestType0 = exports2.RegistrationType = exports2.MessageDirection = void 0;
    var vscode_jsonrpc_1 = require_api();
    var MessageDirection;
    (function(MessageDirection2) {
      MessageDirection2["clientToServer"] = "clientToServer";
      MessageDirection2["serverToClient"] = "serverToClient";
      MessageDirection2["both"] = "both";
    })(MessageDirection || (exports2.MessageDirection = MessageDirection = {}));
    var RegistrationType = class {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ____;
      method;
      constructor(method) {
        this.method = method;
      }
    };
    exports2.RegistrationType = RegistrationType;
    var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
      /**
       * Clients must not use these properties. They are here to ensure correct typing.
       * in TypeScript
       */
      __;
      ___;
      ____;
      _pr;
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolRequestType0 = ProtocolRequestType0;
    var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      __;
      ___;
      ____;
      _pr;
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolRequestType = ProtocolRequestType;
    var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ___;
      ____;
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolNotificationType0 = ProtocolNotificationType0;
    var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ___;
      ____;
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolNotificationType = ProtocolNotificationType;
    var CM;
    (function(CM2) {
      function create(client, server) {
        return { client, server };
      }
      CM2.create = create;
    })(CM || (exports2.CM = CM = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is3 = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.boolean = boolean;
    exports2.string = string;
    exports2.number = number;
    exports2.error = error;
    exports2.func = func;
    exports2.array = array;
    exports2.stringArray = stringArray;
    exports2.typedArray = typedArray;
    exports2.objectLiteral = objectLiteral;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    function objectLiteral(value) {
      return value !== null && typeof value === "object";
    }
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImplementationRequest = void 0;
    var messages_1 = require_messages2();
    var ImplementationRequest;
    (function(ImplementationRequest2) {
      ImplementationRequest2.method = "textDocument/implementation";
      ImplementationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ImplementationRequest2.type = new messages_1.ProtocolRequestType(ImplementationRequest2.method);
      ImplementationRequest2.capabilities = messages_1.CM.create("textDocument.implementation", "implementationProvider");
    })(ImplementationRequest || (exports2.ImplementationRequest = ImplementationRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeDefinitionRequest = void 0;
    var messages_1 = require_messages2();
    var TypeDefinitionRequest;
    (function(TypeDefinitionRequest2) {
      TypeDefinitionRequest2.method = "textDocument/typeDefinition";
      TypeDefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeDefinitionRequest2.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest2.method);
      TypeDefinitionRequest2.capabilities = messages_1.CM.create("textDocument.typeDefinition", "typeDefinitionProvider");
    })(TypeDefinitionRequest || (exports2.TypeDefinitionRequest = TypeDefinitionRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = void 0;
    var messages_1 = require_messages2();
    var WorkspaceFoldersRequest;
    (function(WorkspaceFoldersRequest2) {
      WorkspaceFoldersRequest2.method = "workspace/workspaceFolders";
      WorkspaceFoldersRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkspaceFoldersRequest2.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest2.method);
      WorkspaceFoldersRequest2.capabilities = messages_1.CM.create("workspace.workspaceFolders", "workspace.workspaceFolders");
    })(WorkspaceFoldersRequest || (exports2.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
    var DidChangeWorkspaceFoldersNotification;
    (function(DidChangeWorkspaceFoldersNotification2) {
      DidChangeWorkspaceFoldersNotification2.method = "workspace/didChangeWorkspaceFolders";
      DidChangeWorkspaceFoldersNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWorkspaceFoldersNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification2.method);
      DidChangeWorkspaceFoldersNotification2.capabilities = messages_1.CM.create(void 0, "workspace.workspaceFolders.changeNotifications");
    })(DidChangeWorkspaceFoldersNotification || (exports2.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationRequest = void 0;
    var messages_1 = require_messages2();
    var ConfigurationRequest;
    (function(ConfigurationRequest2) {
      ConfigurationRequest2.method = "workspace/configuration";
      ConfigurationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ConfigurationRequest2.type = new messages_1.ProtocolRequestType(ConfigurationRequest2.method);
      ConfigurationRequest2.capabilities = messages_1.CM.create("workspace.configuration", void 0);
    })(ConfigurationRequest || (exports2.ConfigurationRequest = ConfigurationRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ColorPresentationRequest = exports2.DocumentColorRequest = void 0;
    var messages_1 = require_messages2();
    var DocumentColorRequest;
    (function(DocumentColorRequest2) {
      DocumentColorRequest2.method = "textDocument/documentColor";
      DocumentColorRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentColorRequest2.type = new messages_1.ProtocolRequestType(DocumentColorRequest2.method);
      DocumentColorRequest2.capabilities = messages_1.CM.create("textDocument.colorProvider", "colorProvider");
    })(DocumentColorRequest || (exports2.DocumentColorRequest = DocumentColorRequest = {}));
    var ColorPresentationRequest;
    (function(ColorPresentationRequest2) {
      ColorPresentationRequest2.method = "textDocument/colorPresentation";
      ColorPresentationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ColorPresentationRequest2.type = new messages_1.ProtocolRequestType(ColorPresentationRequest2.method);
      ColorPresentationRequest2.capabilities = messages_1.CM.create("textDocument.colorProvider", "colorProvider");
    })(ColorPresentationRequest || (exports2.ColorPresentationRequest = ColorPresentationRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var FoldingRangeRequest;
    (function(FoldingRangeRequest2) {
      FoldingRangeRequest2.method = "textDocument/foldingRange";
      FoldingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      FoldingRangeRequest2.type = new messages_1.ProtocolRequestType(FoldingRangeRequest2.method);
      FoldingRangeRequest2.capabilities = messages_1.CM.create("textDocument.foldingRange", "foldingRangeProvider");
    })(FoldingRangeRequest || (exports2.FoldingRangeRequest = FoldingRangeRequest = {}));
    var FoldingRangeRefreshRequest;
    (function(FoldingRangeRefreshRequest2) {
      FoldingRangeRefreshRequest2.method = `workspace/foldingRange/refresh`;
      FoldingRangeRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      FoldingRangeRefreshRequest2.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest2.method);
      FoldingRangeRefreshRequest2.capabilities = messages_1.CM.create("workspace.foldingRange.refreshSupport", void 0);
    })(FoldingRangeRefreshRequest || (exports2.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DeclarationRequest = void 0;
    var messages_1 = require_messages2();
    var DeclarationRequest;
    (function(DeclarationRequest2) {
      DeclarationRequest2.method = "textDocument/declaration";
      DeclarationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DeclarationRequest2.type = new messages_1.ProtocolRequestType(DeclarationRequest2.method);
      DeclarationRequest2.capabilities = messages_1.CM.create("textDocument.declaration", "declarationProvider");
    })(DeclarationRequest || (exports2.DeclarationRequest = DeclarationRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SelectionRangeRequest = void 0;
    var messages_1 = require_messages2();
    var SelectionRangeRequest;
    (function(SelectionRangeRequest2) {
      SelectionRangeRequest2.method = "textDocument/selectionRange";
      SelectionRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SelectionRangeRequest2.type = new messages_1.ProtocolRequestType(SelectionRangeRequest2.method);
      SelectionRangeRequest2.capabilities = messages_1.CM.create("textDocument.selectionRange", "selectionRangeProvider");
    })(SelectionRangeRequest || (exports2.SelectionRangeRequest = SelectionRangeRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = void 0;
    var vscode_jsonrpc_1 = require_api();
    var messages_1 = require_messages2();
    var WorkDoneProgress;
    (function(WorkDoneProgress2) {
      WorkDoneProgress2.type = new vscode_jsonrpc_1.ProgressType();
      function is(value) {
        return value === WorkDoneProgress2.type;
      }
      WorkDoneProgress2.is = is;
    })(WorkDoneProgress || (exports2.WorkDoneProgress = WorkDoneProgress = {}));
    var WorkDoneProgressCreateRequest;
    (function(WorkDoneProgressCreateRequest2) {
      WorkDoneProgressCreateRequest2.method = "window/workDoneProgress/create";
      WorkDoneProgressCreateRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkDoneProgressCreateRequest2.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest2.method);
      WorkDoneProgressCreateRequest2.capabilities = messages_1.CM.create("window.workDoneProgress", void 0);
    })(WorkDoneProgressCreateRequest || (exports2.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
    var WorkDoneProgressCancelNotification;
    (function(WorkDoneProgressCancelNotification2) {
      WorkDoneProgressCancelNotification2.method = "window/workDoneProgress/cancel";
      WorkDoneProgressCancelNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkDoneProgressCancelNotification2.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification2.method);
    })(WorkDoneProgressCancelNotification || (exports2.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.CallHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var CallHierarchyPrepareRequest;
    (function(CallHierarchyPrepareRequest2) {
      CallHierarchyPrepareRequest2.method = "textDocument/prepareCallHierarchy";
      CallHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest2.method);
      CallHierarchyPrepareRequest2.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyPrepareRequest || (exports2.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
    var CallHierarchyIncomingCallsRequest;
    (function(CallHierarchyIncomingCallsRequest2) {
      CallHierarchyIncomingCallsRequest2.method = "callHierarchy/incomingCalls";
      CallHierarchyIncomingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyIncomingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest2.method);
      CallHierarchyIncomingCallsRequest2.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyIncomingCallsRequest || (exports2.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
    var CallHierarchyOutgoingCallsRequest;
    (function(CallHierarchyOutgoingCallsRequest2) {
      CallHierarchyOutgoingCallsRequest2.method = "callHierarchy/outgoingCalls";
      CallHierarchyOutgoingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyOutgoingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest2.method);
      CallHierarchyOutgoingCallsRequest2.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyOutgoingCallsRequest || (exports2.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.SemanticTokensRegistrationType = exports2.TokenFormat = void 0;
    var messages_1 = require_messages2();
    var TokenFormat;
    (function(TokenFormat2) {
      TokenFormat2.Relative = "relative";
    })(TokenFormat || (exports2.TokenFormat = TokenFormat = {}));
    var SemanticTokensRegistrationType;
    (function(SemanticTokensRegistrationType2) {
      SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
      SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
    })(SemanticTokensRegistrationType || (exports2.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
    var SemanticTokensRequest;
    (function(SemanticTokensRequest2) {
      SemanticTokensRequest2.method = "textDocument/semanticTokens/full";
      SemanticTokensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRequest2.method);
      SemanticTokensRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens", "semanticTokensProvider");
    })(SemanticTokensRequest || (exports2.SemanticTokensRequest = SemanticTokensRequest = {}));
    var SemanticTokensDeltaRequest;
    (function(SemanticTokensDeltaRequest2) {
      SemanticTokensDeltaRequest2.method = "textDocument/semanticTokens/full/delta";
      SemanticTokensDeltaRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensDeltaRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest2.method);
      SemanticTokensDeltaRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensDeltaRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens.requests.full.delta", "semanticTokensProvider.full.delta");
    })(SemanticTokensDeltaRequest || (exports2.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
    var SemanticTokensRangeRequest;
    (function(SemanticTokensRangeRequest2) {
      SemanticTokensRangeRequest2.method = "textDocument/semanticTokens/range";
      SemanticTokensRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRangeRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest2.method);
      SemanticTokensRangeRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensRangeRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens.requests.range", "semanticTokensProvider.range");
    })(SemanticTokensRangeRequest || (exports2.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
    var SemanticTokensRefreshRequest;
    (function(SemanticTokensRefreshRequest2) {
      SemanticTokensRefreshRequest2.method = `workspace/semanticTokens/refresh`;
      SemanticTokensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      SemanticTokensRefreshRequest2.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest2.method);
      SemanticTokensRefreshRequest2.capabilities = messages_1.CM.create("workspace.semanticTokens.refreshSupport", void 0);
    })(SemanticTokensRefreshRequest || (exports2.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentRequest = void 0;
    var messages_1 = require_messages2();
    var ShowDocumentRequest;
    (function(ShowDocumentRequest2) {
      ShowDocumentRequest2.method = "window/showDocument";
      ShowDocumentRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowDocumentRequest2.type = new messages_1.ProtocolRequestType(ShowDocumentRequest2.method);
      ShowDocumentRequest2.capabilities = messages_1.CM.create("window.showDocument.support", void 0);
    })(ShowDocumentRequest || (exports2.ShowDocumentRequest = ShowDocumentRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var LinkedEditingRangeRequest;
    (function(LinkedEditingRangeRequest2) {
      LinkedEditingRangeRequest2.method = "textDocument/linkedEditingRange";
      LinkedEditingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      LinkedEditingRangeRequest2.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest2.method);
      LinkedEditingRangeRequest2.capabilities = messages_1.CM.create("textDocument.linkedEditingRange", "linkedEditingRangeProvider");
    })(LinkedEditingRangeRequest || (exports2.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.DidRenameFilesNotification = exports2.WillRenameFilesRequest = exports2.DidCreateFilesNotification = exports2.WillCreateFilesRequest = exports2.FileOperationPatternKind = void 0;
    var messages_1 = require_messages2();
    var FileOperationPatternKind;
    (function(FileOperationPatternKind2) {
      FileOperationPatternKind2.file = "file";
      FileOperationPatternKind2.folder = "folder";
    })(FileOperationPatternKind || (exports2.FileOperationPatternKind = FileOperationPatternKind = {}));
    var WillCreateFilesRequest;
    (function(WillCreateFilesRequest2) {
      WillCreateFilesRequest2.method = "workspace/willCreateFiles";
      WillCreateFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillCreateFilesRequest2.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest2.method);
      WillCreateFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willCreate", "workspace.fileOperations.willCreate");
    })(WillCreateFilesRequest || (exports2.WillCreateFilesRequest = WillCreateFilesRequest = {}));
    var DidCreateFilesNotification;
    (function(DidCreateFilesNotification2) {
      DidCreateFilesNotification2.method = "workspace/didCreateFiles";
      DidCreateFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCreateFilesNotification2.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification2.method);
      DidCreateFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didCreate", "workspace.fileOperations.didCreate");
    })(DidCreateFilesNotification || (exports2.DidCreateFilesNotification = DidCreateFilesNotification = {}));
    var WillRenameFilesRequest;
    (function(WillRenameFilesRequest2) {
      WillRenameFilesRequest2.method = "workspace/willRenameFiles";
      WillRenameFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillRenameFilesRequest2.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest2.method);
      WillRenameFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willRename", "workspace.fileOperations.willRename");
    })(WillRenameFilesRequest || (exports2.WillRenameFilesRequest = WillRenameFilesRequest = {}));
    var DidRenameFilesNotification;
    (function(DidRenameFilesNotification2) {
      DidRenameFilesNotification2.method = "workspace/didRenameFiles";
      DidRenameFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidRenameFilesNotification2.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification2.method);
      DidRenameFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didRename", "workspace.fileOperations.didRename");
    })(DidRenameFilesNotification || (exports2.DidRenameFilesNotification = DidRenameFilesNotification = {}));
    var DidDeleteFilesNotification;
    (function(DidDeleteFilesNotification2) {
      DidDeleteFilesNotification2.method = "workspace/didDeleteFiles";
      DidDeleteFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidDeleteFilesNotification2.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification2.method);
      DidDeleteFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didDelete", "workspace.fileOperations.didDelete");
    })(DidDeleteFilesNotification || (exports2.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
    var WillDeleteFilesRequest;
    (function(WillDeleteFilesRequest2) {
      WillDeleteFilesRequest2.method = "workspace/willDeleteFiles";
      WillDeleteFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillDeleteFilesRequest2.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest2.method);
      WillDeleteFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willDelete", "workspace.fileOperations.willDelete");
    })(WillDeleteFilesRequest || (exports2.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = void 0;
    var messages_1 = require_messages2();
    var UniquenessLevel;
    (function(UniquenessLevel2) {
      UniquenessLevel2.document = "document";
      UniquenessLevel2.project = "project";
      UniquenessLevel2.group = "group";
      UniquenessLevel2.scheme = "scheme";
      UniquenessLevel2.global = "global";
    })(UniquenessLevel || (exports2.UniquenessLevel = UniquenessLevel = {}));
    var MonikerKind;
    (function(MonikerKind2) {
      MonikerKind2.$import = "import";
      MonikerKind2.$export = "export";
      MonikerKind2.local = "local";
    })(MonikerKind || (exports2.MonikerKind = MonikerKind = {}));
    var MonikerRequest;
    (function(MonikerRequest2) {
      MonikerRequest2.method = "textDocument/moniker";
      MonikerRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      MonikerRequest2.type = new messages_1.ProtocolRequestType(MonikerRequest2.method);
      MonikerRequest2.capabilities = messages_1.CM.create("textDocument.moniker", "monikerProvider");
    })(MonikerRequest || (exports2.MonikerRequest = MonikerRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var TypeHierarchyPrepareRequest;
    (function(TypeHierarchyPrepareRequest2) {
      TypeHierarchyPrepareRequest2.method = "textDocument/prepareTypeHierarchy";
      TypeHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest2.method);
      TypeHierarchyPrepareRequest2.capabilities = messages_1.CM.create("textDocument.typeHierarchy", "typeHierarchyProvider");
    })(TypeHierarchyPrepareRequest || (exports2.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
    var TypeHierarchySupertypesRequest;
    (function(TypeHierarchySupertypesRequest2) {
      TypeHierarchySupertypesRequest2.method = "typeHierarchy/supertypes";
      TypeHierarchySupertypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySupertypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest2.method);
    })(TypeHierarchySupertypesRequest || (exports2.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
    var TypeHierarchySubtypesRequest;
    (function(TypeHierarchySubtypesRequest2) {
      TypeHierarchySubtypesRequest2.method = "typeHierarchy/subtypes";
      TypeHierarchySubtypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySubtypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest2.method);
    })(TypeHierarchySubtypesRequest || (exports2.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = void 0;
    var messages_1 = require_messages2();
    var InlineValueRequest;
    (function(InlineValueRequest2) {
      InlineValueRequest2.method = "textDocument/inlineValue";
      InlineValueRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineValueRequest2.type = new messages_1.ProtocolRequestType(InlineValueRequest2.method);
      InlineValueRequest2.capabilities = messages_1.CM.create("textDocument.inlineValue", "inlineValueProvider");
    })(InlineValueRequest || (exports2.InlineValueRequest = InlineValueRequest = {}));
    var InlineValueRefreshRequest;
    (function(InlineValueRefreshRequest2) {
      InlineValueRefreshRequest2.method = `workspace/inlineValue/refresh`;
      InlineValueRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlineValueRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest2.method);
      InlineValueRefreshRequest2.capabilities = messages_1.CM.create("workspace.inlineValue.refreshSupport", void 0);
    })(InlineValueRefreshRequest || (exports2.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = void 0;
    var messages_1 = require_messages2();
    var InlayHintRequest;
    (function(InlayHintRequest2) {
      InlayHintRequest2.method = "textDocument/inlayHint";
      InlayHintRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintRequest2.type = new messages_1.ProtocolRequestType(InlayHintRequest2.method);
      InlayHintRequest2.capabilities = messages_1.CM.create("textDocument.inlayHint", "inlayHintProvider");
    })(InlayHintRequest || (exports2.InlayHintRequest = InlayHintRequest = {}));
    var InlayHintResolveRequest;
    (function(InlayHintResolveRequest2) {
      InlayHintResolveRequest2.method = "inlayHint/resolve";
      InlayHintResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintResolveRequest2.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest2.method);
      InlayHintResolveRequest2.capabilities = messages_1.CM.create("textDocument.inlayHint.resolveSupport", "inlayHintProvider.resolveProvider");
    })(InlayHintResolveRequest || (exports2.InlayHintResolveRequest = InlayHintResolveRequest = {}));
    var InlayHintRefreshRequest;
    (function(InlayHintRefreshRequest2) {
      InlayHintRefreshRequest2.method = `workspace/inlayHint/refresh`;
      InlayHintRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlayHintRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest2.method);
      InlayHintRefreshRequest2.capabilities = messages_1.CM.create("workspace.inlayHint.refreshSupport", void 0);
    })(InlayHintRefreshRequest || (exports2.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = void 0;
    var vscode_jsonrpc_1 = require_api();
    var Is2 = __importStar2(require_is3());
    var messages_1 = require_messages2();
    var DiagnosticServerCancellationData;
    (function(DiagnosticServerCancellationData2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.boolean(candidate.retriggerRequest);
      }
      DiagnosticServerCancellationData2.is = is;
    })(DiagnosticServerCancellationData || (exports2.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
    var DocumentDiagnosticReportKind;
    (function(DocumentDiagnosticReportKind2) {
      DocumentDiagnosticReportKind2.Full = "full";
      DocumentDiagnosticReportKind2.Unchanged = "unchanged";
    })(DocumentDiagnosticReportKind || (exports2.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
    var DocumentDiagnosticRequest;
    (function(DocumentDiagnosticRequest2) {
      DocumentDiagnosticRequest2.method = "textDocument/diagnostic";
      DocumentDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentDiagnosticRequest2.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest2.method);
      DocumentDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
      DocumentDiagnosticRequest2.capabilities = messages_1.CM.create("textDocument.diagnostic", "diagnosticProvider");
    })(DocumentDiagnosticRequest || (exports2.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
    var WorkspaceDiagnosticRequest;
    (function(WorkspaceDiagnosticRequest2) {
      WorkspaceDiagnosticRequest2.method = "workspace/diagnostic";
      WorkspaceDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceDiagnosticRequest2.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest2.method);
      WorkspaceDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
      WorkspaceDiagnosticRequest2.capabilities = messages_1.CM.create("workspace.diagnostics", "diagnosticProvider.workspaceDiagnostics");
    })(WorkspaceDiagnosticRequest || (exports2.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
    var DiagnosticRefreshRequest;
    (function(DiagnosticRefreshRequest2) {
      DiagnosticRefreshRequest2.method = `workspace/diagnostic/refresh`;
      DiagnosticRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      DiagnosticRefreshRequest2.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest2.method);
      DiagnosticRefreshRequest2.capabilities = messages_1.CM.create("workspace.diagnostics.refreshSupport", void 0);
    })(DiagnosticRefreshRequest || (exports2.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = void 0;
    var vscode_languageserver_types_1 = (init_main(), __toCommonJS(main_exports));
    var Is2 = __importStar2(require_is3());
    var messages_1 = require_messages2();
    var NotebookCellKind;
    (function(NotebookCellKind2) {
      NotebookCellKind2.Markup = 1;
      NotebookCellKind2.Code = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      NotebookCellKind2.is = is;
    })(NotebookCellKind || (exports2.NotebookCellKind = NotebookCellKind = {}));
    var ExecutionSummary;
    (function(ExecutionSummary2) {
      function create(executionOrder, success) {
        const result = { executionOrder };
        if (success === true || success === false) {
          result.success = success;
        }
        return result;
      }
      ExecutionSummary2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is2.boolean(candidate.success));
      }
      ExecutionSummary2.is = is;
      function equals(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        return one.executionOrder === other.executionOrder && one.success === other.success;
      }
      ExecutionSummary2.equals = equals;
    })(ExecutionSummary || (exports2.ExecutionSummary = ExecutionSummary = {}));
    var NotebookCell;
    (function(NotebookCell2) {
      function create(kind, document) {
        return { kind, document };
      }
      NotebookCell2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is2.objectLiteral(candidate.metadata));
      }
      NotebookCell2.is = is;
      function diff(one, two) {
        const result = /* @__PURE__ */ new Set();
        if (one.document !== two.document) {
          result.add("document");
        }
        if (one.kind !== two.kind) {
          result.add("kind");
        }
        if (one.executionSummary !== two.executionSummary) {
          result.add("executionSummary");
        }
        if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) {
          result.add("metadata");
        }
        if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
          result.add("executionSummary");
        }
        return result;
      }
      NotebookCell2.diff = diff;
      function equalsMetadata(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        if (typeof one !== typeof other) {
          return false;
        }
        if (typeof one !== "object") {
          return false;
        }
        const oneArray = Array.isArray(one);
        const otherArray = Array.isArray(other);
        if (oneArray !== otherArray) {
          return false;
        }
        if (oneArray && otherArray) {
          if (one.length !== other.length) {
            return false;
          }
          for (let i = 0; i < one.length; i++) {
            if (!equalsMetadata(one[i], other[i])) {
              return false;
            }
          }
        }
        if (Is2.objectLiteral(one) && Is2.objectLiteral(other)) {
          const oneKeys = Object.keys(one);
          const otherKeys = Object.keys(other);
          if (oneKeys.length !== otherKeys.length) {
            return false;
          }
          oneKeys.sort();
          otherKeys.sort();
          if (!equalsMetadata(oneKeys, otherKeys)) {
            return false;
          }
          for (let i = 0; i < oneKeys.length; i++) {
            const prop = oneKeys[i];
            if (!equalsMetadata(one[prop], other[prop])) {
              return false;
            }
          }
        }
        return true;
      }
    })(NotebookCell || (exports2.NotebookCell = NotebookCell = {}));
    var NotebookDocument;
    (function(NotebookDocument2) {
      function create(uri, notebookType, version, cells) {
        return { uri, notebookType, version, cells };
      }
      NotebookDocument2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && Is2.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is2.typedArray(candidate.cells, NotebookCell.is);
      }
      NotebookDocument2.is = is;
    })(NotebookDocument || (exports2.NotebookDocument = NotebookDocument = {}));
    var NotebookDocumentSyncRegistrationType;
    (function(NotebookDocumentSyncRegistrationType2) {
      NotebookDocumentSyncRegistrationType2.method = "notebookDocument/sync";
      NotebookDocumentSyncRegistrationType2.messageDirection = messages_1.MessageDirection.clientToServer;
      NotebookDocumentSyncRegistrationType2.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType2.method);
    })(NotebookDocumentSyncRegistrationType || (exports2.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
    var DidOpenNotebookDocumentNotification;
    (function(DidOpenNotebookDocumentNotification2) {
      DidOpenNotebookDocumentNotification2.method = "notebookDocument/didOpen";
      DidOpenNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification2.method);
      DidOpenNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidOpenNotebookDocumentNotification || (exports2.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
    var NotebookCellArrayChange;
    (function(NotebookCellArrayChange2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is2.typedArray(candidate.cells, NotebookCell.is));
      }
      NotebookCellArrayChange2.is = is;
      function create(start, deleteCount, cells) {
        const result = { start, deleteCount };
        if (cells !== void 0) {
          result.cells = cells;
        }
        return result;
      }
      NotebookCellArrayChange2.create = create;
    })(NotebookCellArrayChange || (exports2.NotebookCellArrayChange = NotebookCellArrayChange = {}));
    var DidChangeNotebookDocumentNotification;
    (function(DidChangeNotebookDocumentNotification2) {
      DidChangeNotebookDocumentNotification2.method = "notebookDocument/didChange";
      DidChangeNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification2.method);
      DidChangeNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidChangeNotebookDocumentNotification || (exports2.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
    var DidSaveNotebookDocumentNotification;
    (function(DidSaveNotebookDocumentNotification2) {
      DidSaveNotebookDocumentNotification2.method = "notebookDocument/didSave";
      DidSaveNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification2.method);
      DidSaveNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidSaveNotebookDocumentNotification || (exports2.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
    var DidCloseNotebookDocumentNotification;
    (function(DidCloseNotebookDocumentNotification2) {
      DidCloseNotebookDocumentNotification2.method = "notebookDocument/didClose";
      DidCloseNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification2.method);
      DidCloseNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidCloseNotebookDocumentNotification || (exports2.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js
var require_protocol_inlineCompletion = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionRequest = void 0;
    var messages_1 = require_messages2();
    var InlineCompletionRequest;
    (function(InlineCompletionRequest2) {
      InlineCompletionRequest2.method = "textDocument/inlineCompletion";
      InlineCompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineCompletionRequest2.type = new messages_1.ProtocolRequestType(InlineCompletionRequest2.method);
      InlineCompletionRequest2.capabilities = messages_1.CM.create("textDocument.inlineCompletion", "inlineCompletionProvider");
    })(InlineCompletionRequest || (exports2.InlineCompletionRequest = InlineCompletionRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.textDocumentContent.js
var require_protocol_textDocumentContent = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.textDocumentContent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TextDocumentContentRefreshRequest = exports2.TextDocumentContentRequest = void 0;
    var messages_1 = require_messages2();
    var TextDocumentContentRequest;
    (function(TextDocumentContentRequest2) {
      TextDocumentContentRequest2.method = "workspace/textDocumentContent";
      TextDocumentContentRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TextDocumentContentRequest2.type = new messages_1.ProtocolRequestType(TextDocumentContentRequest2.method);
      TextDocumentContentRequest2.capabilities = messages_1.CM.create("workspace.textDocumentContent", "workspace.textDocumentContent");
    })(TextDocumentContentRequest || (exports2.TextDocumentContentRequest = TextDocumentContentRequest = {}));
    var TextDocumentContentRefreshRequest;
    (function(TextDocumentContentRefreshRequest2) {
      TextDocumentContentRefreshRequest2.method = `workspace/textDocumentContent/refresh`;
      TextDocumentContentRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      TextDocumentContentRefreshRequest2.type = new messages_1.ProtocolRequestType(TextDocumentContentRefreshRequest2.method);
    })(TextDocumentContentRefreshRequest || (exports2.TextDocumentContentRefreshRequest = TextDocumentContentRefreshRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CodeActionRequest = exports2.DocumentSymbolRequest = exports2.DocumentHighlightRequest = exports2.ReferencesRequest = exports2.DefinitionRequest = exports2.SignatureHelpRequest = exports2.SignatureHelpTriggerKind = exports2.HoverRequest = exports2.CompletionResolveRequest = exports2.CompletionRequest = exports2.CompletionTriggerKind = exports2.PublishDiagnosticsNotification = exports2.WatchKind = exports2.GlobPattern = exports2.RelativePattern = exports2.FileChangeType = exports2.DidChangeWatchedFilesNotification = exports2.WillSaveTextDocumentWaitUntilRequest = exports2.WillSaveTextDocumentNotification = exports2.TextDocumentSaveReason = exports2.DidSaveTextDocumentNotification = exports2.DidCloseTextDocumentNotification = exports2.DidChangeTextDocumentNotification = exports2.TextDocumentContentChangeEvent = exports2.DidOpenTextDocumentNotification = exports2.TextDocumentSyncKind = exports2.TelemetryEventNotification = exports2.LogMessageNotification = exports2.ShowMessageRequest = exports2.ShowMessageNotification = exports2.MessageType = exports2.DidChangeConfigurationNotification = exports2.ExitNotification = exports2.ShutdownRequest = exports2.InitializedNotification = exports2.InitializeErrorCodes = exports2.InitializeRequest = exports2.WorkDoneProgressOptions = exports2.TextDocumentRegistrationOptions = exports2.StaticRegistrationOptions = exports2.PositionEncodingKind = exports2.RegularExpressionEngineKind = exports2.FailureHandlingKind = exports2.ResourceOperationKind = exports2.UnregistrationRequest = exports2.RegistrationRequest = exports2.DocumentSelector = exports2.NotebookCellTextDocumentFilter = exports2.NotebookDocumentFilter = exports2.TextDocumentFilter = void 0;
    exports2.UniquenessLevel = exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.WillRenameFilesRequest = exports2.DidRenameFilesNotification = exports2.WillCreateFilesRequest = exports2.DidCreateFilesNotification = exports2.FileOperationPatternKind = exports2.LinkedEditingRangeRequest = exports2.ShowDocumentRequest = exports2.SemanticTokensRegistrationType = exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.TokenFormat = exports2.CallHierarchyPrepareRequest = exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = exports2.SelectionRangeRequest = exports2.DeclarationRequest = exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = exports2.ColorPresentationRequest = exports2.DocumentColorRequest = exports2.ConfigurationRequest = exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = exports2.TypeDefinitionRequest = exports2.ImplementationRequest = exports2.ApplyWorkspaceEditRequest = exports2.ExecuteCommandRequest = exports2.PrepareRenameRequest = exports2.RenameRequest = exports2.PrepareSupportDefaultBehavior = exports2.DocumentOnTypeFormattingRequest = exports2.DocumentRangesFormattingRequest = exports2.DocumentRangeFormattingRequest = exports2.DocumentFormattingRequest = exports2.DocumentLinkResolveRequest = exports2.DocumentLinkRequest = exports2.CodeLensRefreshRequest = exports2.CodeLensResolveRequest = exports2.CodeLensRequest = exports2.WorkspaceSymbolResolveRequest = exports2.WorkspaceSymbolRequest = exports2.CodeActionResolveRequest = void 0;
    exports2.TextDocumentContentRefreshRequest = exports2.TextDocumentContentRequest = exports2.InlineCompletionRequest = exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchyPrepareRequest = exports2.MonikerRequest = exports2.MonikerKind = void 0;
    var messages_1 = require_messages2();
    var vscode_languageserver_types_1 = (init_main(), __toCommonJS(main_exports));
    var Is2 = __importStar2(require_is3());
    var protocol_implementation_1 = require_protocol_implementation();
    Object.defineProperty(exports2, "ImplementationRequest", { enumerable: true, get: function() {
      return protocol_implementation_1.ImplementationRequest;
    } });
    var protocol_typeDefinition_1 = require_protocol_typeDefinition();
    Object.defineProperty(exports2, "TypeDefinitionRequest", { enumerable: true, get: function() {
      return protocol_typeDefinition_1.TypeDefinitionRequest;
    } });
    var protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
    Object.defineProperty(exports2, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
    } });
    Object.defineProperty(exports2, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
    } });
    var protocol_configuration_1 = require_protocol_configuration();
    Object.defineProperty(exports2, "ConfigurationRequest", { enumerable: true, get: function() {
      return protocol_configuration_1.ConfigurationRequest;
    } });
    var protocol_colorProvider_1 = require_protocol_colorProvider();
    Object.defineProperty(exports2, "DocumentColorRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.DocumentColorRequest;
    } });
    Object.defineProperty(exports2, "ColorPresentationRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.ColorPresentationRequest;
    } });
    var protocol_foldingRange_1 = require_protocol_foldingRange();
    Object.defineProperty(exports2, "FoldingRangeRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRequest;
    } });
    Object.defineProperty(exports2, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRefreshRequest;
    } });
    var protocol_declaration_1 = require_protocol_declaration();
    Object.defineProperty(exports2, "DeclarationRequest", { enumerable: true, get: function() {
      return protocol_declaration_1.DeclarationRequest;
    } });
    var protocol_selectionRange_1 = require_protocol_selectionRange();
    Object.defineProperty(exports2, "SelectionRangeRequest", { enumerable: true, get: function() {
      return protocol_selectionRange_1.SelectionRangeRequest;
    } });
    var protocol_progress_1 = require_protocol_progress();
    Object.defineProperty(exports2, "WorkDoneProgress", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgress;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCreateRequest;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCancelNotification;
    } });
    var protocol_callHierarchy_1 = require_protocol_callHierarchy();
    Object.defineProperty(exports2, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
    } });
    var protocol_semanticTokens_1 = require_protocol_semanticTokens();
    Object.defineProperty(exports2, "TokenFormat", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.TokenFormat;
    } });
    Object.defineProperty(exports2, "SemanticTokensRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRangeRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRegistrationType;
    } });
    var protocol_showDocument_1 = require_protocol_showDocument();
    Object.defineProperty(exports2, "ShowDocumentRequest", { enumerable: true, get: function() {
      return protocol_showDocument_1.ShowDocumentRequest;
    } });
    var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
    Object.defineProperty(exports2, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
      return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
    } });
    var protocol_fileOperations_1 = require_protocol_fileOperations();
    Object.defineProperty(exports2, "FileOperationPatternKind", { enumerable: true, get: function() {
      return protocol_fileOperations_1.FileOperationPatternKind;
    } });
    Object.defineProperty(exports2, "DidCreateFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidCreateFilesNotification;
    } });
    Object.defineProperty(exports2, "WillCreateFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillCreateFilesRequest;
    } });
    Object.defineProperty(exports2, "DidRenameFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidRenameFilesNotification;
    } });
    Object.defineProperty(exports2, "WillRenameFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillRenameFilesRequest;
    } });
    Object.defineProperty(exports2, "DidDeleteFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidDeleteFilesNotification;
    } });
    Object.defineProperty(exports2, "WillDeleteFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillDeleteFilesRequest;
    } });
    var protocol_moniker_1 = require_protocol_moniker();
    Object.defineProperty(exports2, "UniquenessLevel", { enumerable: true, get: function() {
      return protocol_moniker_1.UniquenessLevel;
    } });
    Object.defineProperty(exports2, "MonikerKind", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerKind;
    } });
    Object.defineProperty(exports2, "MonikerRequest", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerRequest;
    } });
    var protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
    Object.defineProperty(exports2, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
    } });
    var protocol_inlineValue_1 = require_protocol_inlineValue();
    Object.defineProperty(exports2, "InlineValueRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRequest;
    } });
    Object.defineProperty(exports2, "InlineValueRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRefreshRequest;
    } });
    var protocol_inlayHint_1 = require_protocol_inlayHint();
    Object.defineProperty(exports2, "InlayHintRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRequest;
    } });
    Object.defineProperty(exports2, "InlayHintResolveRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintResolveRequest;
    } });
    Object.defineProperty(exports2, "InlayHintRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRefreshRequest;
    } });
    var protocol_diagnostic_1 = require_protocol_diagnostic();
    Object.defineProperty(exports2, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticServerCancellationData;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticReportKind;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticRefreshRequest;
    } });
    var protocol_notebook_1 = require_protocol_notebook();
    Object.defineProperty(exports2, "NotebookCellKind", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellKind;
    } });
    Object.defineProperty(exports2, "ExecutionSummary", { enumerable: true, get: function() {
      return protocol_notebook_1.ExecutionSummary;
    } });
    Object.defineProperty(exports2, "NotebookCell", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCell;
    } });
    Object.defineProperty(exports2, "NotebookDocument", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocument;
    } });
    Object.defineProperty(exports2, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
    } });
    Object.defineProperty(exports2, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidOpenNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "NotebookCellArrayChange", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellArrayChange;
    } });
    Object.defineProperty(exports2, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidChangeNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidSaveNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidCloseNotebookDocumentNotification;
    } });
    var protocol_inlineCompletion_1 = require_protocol_inlineCompletion();
    Object.defineProperty(exports2, "InlineCompletionRequest", { enumerable: true, get: function() {
      return protocol_inlineCompletion_1.InlineCompletionRequest;
    } });
    var protocol_textDocumentContent_1 = require_protocol_textDocumentContent();
    Object.defineProperty(exports2, "TextDocumentContentRequest", { enumerable: true, get: function() {
      return protocol_textDocumentContent_1.TextDocumentContentRequest;
    } });
    Object.defineProperty(exports2, "TextDocumentContentRefreshRequest", { enumerable: true, get: function() {
      return protocol_textDocumentContent_1.TextDocumentContentRefreshRequest;
    } });
    var TextDocumentFilter;
    (function(TextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.string(candidate) || (Is2.string(candidate.language) || Is2.string(candidate.scheme) || GlobPattern.is(candidate.pattern));
      }
      TextDocumentFilter2.is = is;
    })(TextDocumentFilter || (exports2.TextDocumentFilter = TextDocumentFilter = {}));
    var NotebookDocumentFilter;
    (function(NotebookDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebookType) || Is2.string(candidate.scheme) || Is2.string(candidate.pattern));
      }
      NotebookDocumentFilter2.is = is;
    })(NotebookDocumentFilter || (exports2.NotebookDocumentFilter = NotebookDocumentFilter = {}));
    var NotebookCellTextDocumentFilter;
    (function(NotebookCellTextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is2.string(candidate.language));
      }
      NotebookCellTextDocumentFilter2.is = is;
    })(NotebookCellTextDocumentFilter || (exports2.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
    var DocumentSelector;
    (function(DocumentSelector2) {
      function is(value) {
        if (!Array.isArray(value)) {
          return false;
        }
        for (const elem of value) {
          if (!Is2.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
            return false;
          }
        }
        return true;
      }
      DocumentSelector2.is = is;
    })(DocumentSelector || (exports2.DocumentSelector = DocumentSelector = {}));
    var RegistrationRequest;
    (function(RegistrationRequest2) {
      RegistrationRequest2.method = "client/registerCapability";
      RegistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      RegistrationRequest2.type = new messages_1.ProtocolRequestType(RegistrationRequest2.method);
    })(RegistrationRequest || (exports2.RegistrationRequest = RegistrationRequest = {}));
    var UnregistrationRequest;
    (function(UnregistrationRequest2) {
      UnregistrationRequest2.method = "client/unregisterCapability";
      UnregistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      UnregistrationRequest2.type = new messages_1.ProtocolRequestType(UnregistrationRequest2.method);
    })(UnregistrationRequest || (exports2.UnregistrationRequest = UnregistrationRequest = {}));
    var ResourceOperationKind;
    (function(ResourceOperationKind2) {
      ResourceOperationKind2.Create = "create";
      ResourceOperationKind2.Rename = "rename";
      ResourceOperationKind2.Delete = "delete";
    })(ResourceOperationKind || (exports2.ResourceOperationKind = ResourceOperationKind = {}));
    var FailureHandlingKind;
    (function(FailureHandlingKind2) {
      FailureHandlingKind2.Abort = "abort";
      FailureHandlingKind2.Transactional = "transactional";
      FailureHandlingKind2.TextOnlyTransactional = "textOnlyTransactional";
      FailureHandlingKind2.Undo = "undo";
    })(FailureHandlingKind || (exports2.FailureHandlingKind = FailureHandlingKind = {}));
    var RegularExpressionEngineKind;
    (function(RegularExpressionEngineKind2) {
      RegularExpressionEngineKind2.ES2020 = "ES2020";
    })(RegularExpressionEngineKind || (exports2.RegularExpressionEngineKind = RegularExpressionEngineKind = {}));
    var PositionEncodingKind;
    (function(PositionEncodingKind2) {
      PositionEncodingKind2.UTF8 = "utf-8";
      PositionEncodingKind2.UTF16 = "utf-16";
      PositionEncodingKind2.UTF32 = "utf-32";
    })(PositionEncodingKind || (exports2.PositionEncodingKind = PositionEncodingKind = {}));
    var StaticRegistrationOptions;
    (function(StaticRegistrationOptions2) {
      function hasId(value) {
        const candidate = value;
        return candidate && Is2.string(candidate.id) && candidate.id.length > 0;
      }
      StaticRegistrationOptions2.hasId = hasId;
    })(StaticRegistrationOptions || (exports2.StaticRegistrationOptions = StaticRegistrationOptions = {}));
    var TextDocumentRegistrationOptions;
    (function(TextDocumentRegistrationOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
      }
      TextDocumentRegistrationOptions2.is = is;
    })(TextDocumentRegistrationOptions || (exports2.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
    var WorkDoneProgressOptions;
    (function(WorkDoneProgressOptions2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is2.boolean(candidate.workDoneProgress));
      }
      WorkDoneProgressOptions2.is = is;
      function hasWorkDoneProgress(value) {
        const candidate = value;
        return candidate && Is2.boolean(candidate.workDoneProgress);
      }
      WorkDoneProgressOptions2.hasWorkDoneProgress = hasWorkDoneProgress;
    })(WorkDoneProgressOptions || (exports2.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
    var InitializeRequest;
    (function(InitializeRequest2) {
      InitializeRequest2.method = "initialize";
      InitializeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializeRequest2.type = new messages_1.ProtocolRequestType(InitializeRequest2.method);
    })(InitializeRequest || (exports2.InitializeRequest = InitializeRequest = {}));
    var InitializeErrorCodes;
    (function(InitializeErrorCodes2) {
      InitializeErrorCodes2.unknownProtocolVersion = 1;
    })(InitializeErrorCodes || (exports2.InitializeErrorCodes = InitializeErrorCodes = {}));
    var InitializedNotification;
    (function(InitializedNotification2) {
      InitializedNotification2.method = "initialized";
      InitializedNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializedNotification2.type = new messages_1.ProtocolNotificationType(InitializedNotification2.method);
    })(InitializedNotification || (exports2.InitializedNotification = InitializedNotification = {}));
    var ShutdownRequest;
    (function(ShutdownRequest2) {
      ShutdownRequest2.method = "shutdown";
      ShutdownRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ShutdownRequest2.type = new messages_1.ProtocolRequestType0(ShutdownRequest2.method);
    })(ShutdownRequest || (exports2.ShutdownRequest = ShutdownRequest = {}));
    var ExitNotification;
    (function(ExitNotification2) {
      ExitNotification2.method = "exit";
      ExitNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExitNotification2.type = new messages_1.ProtocolNotificationType0(ExitNotification2.method);
    })(ExitNotification || (exports2.ExitNotification = ExitNotification = {}));
    var DidChangeConfigurationNotification;
    (function(DidChangeConfigurationNotification2) {
      DidChangeConfigurationNotification2.method = "workspace/didChangeConfiguration";
      DidChangeConfigurationNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeConfigurationNotification2.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification2.method);
      DidChangeConfigurationNotification2.capabilities = messages_1.CM.create("workspace.didChangeConfiguration", void 0);
    })(DidChangeConfigurationNotification || (exports2.DidChangeConfigurationNotification = DidChangeConfigurationNotification = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2.Error = 1;
      MessageType2.Warning = 2;
      MessageType2.Info = 3;
      MessageType2.Log = 4;
      MessageType2.Debug = 5;
    })(MessageType || (exports2.MessageType = MessageType = {}));
    var ShowMessageNotification;
    (function(ShowMessageNotification2) {
      ShowMessageNotification2.method = "window/showMessage";
      ShowMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageNotification2.type = new messages_1.ProtocolNotificationType(ShowMessageNotification2.method);
      ShowMessageNotification2.capabilities = messages_1.CM.create("window.showMessage", void 0);
    })(ShowMessageNotification || (exports2.ShowMessageNotification = ShowMessageNotification = {}));
    var ShowMessageRequest;
    (function(ShowMessageRequest2) {
      ShowMessageRequest2.method = "window/showMessageRequest";
      ShowMessageRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageRequest2.type = new messages_1.ProtocolRequestType(ShowMessageRequest2.method);
      ShowMessageRequest2.capabilities = messages_1.CM.create("window.showMessage", void 0);
    })(ShowMessageRequest || (exports2.ShowMessageRequest = ShowMessageRequest = {}));
    var LogMessageNotification;
    (function(LogMessageNotification2) {
      LogMessageNotification2.method = "window/logMessage";
      LogMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      LogMessageNotification2.type = new messages_1.ProtocolNotificationType(LogMessageNotification2.method);
    })(LogMessageNotification || (exports2.LogMessageNotification = LogMessageNotification = {}));
    var TelemetryEventNotification;
    (function(TelemetryEventNotification2) {
      TelemetryEventNotification2.method = "telemetry/event";
      TelemetryEventNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      TelemetryEventNotification2.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification2.method);
    })(TelemetryEventNotification || (exports2.TelemetryEventNotification = TelemetryEventNotification = {}));
    var TextDocumentSyncKind;
    (function(TextDocumentSyncKind2) {
      TextDocumentSyncKind2.None = 0;
      TextDocumentSyncKind2.Full = 1;
      TextDocumentSyncKind2.Incremental = 2;
    })(TextDocumentSyncKind || (exports2.TextDocumentSyncKind = TextDocumentSyncKind = {}));
    var DidOpenTextDocumentNotification;
    (function(DidOpenTextDocumentNotification2) {
      DidOpenTextDocumentNotification2.method = "textDocument/didOpen";
      DidOpenTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification2.method);
      DidOpenTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
    })(DidOpenTextDocumentNotification || (exports2.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
    var TextDocumentContentChangeEvent;
    (function(TextDocumentContentChangeEvent2) {
      function isIncremental(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      TextDocumentContentChangeEvent2.isIncremental = isIncremental;
      function isFull(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
      TextDocumentContentChangeEvent2.isFull = isFull;
    })(TextDocumentContentChangeEvent || (exports2.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
    var DidChangeTextDocumentNotification;
    (function(DidChangeTextDocumentNotification2) {
      DidChangeTextDocumentNotification2.method = "textDocument/didChange";
      DidChangeTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification2.method);
      DidChangeTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync");
    })(DidChangeTextDocumentNotification || (exports2.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
    var DidCloseTextDocumentNotification;
    (function(DidCloseTextDocumentNotification2) {
      DidCloseTextDocumentNotification2.method = "textDocument/didClose";
      DidCloseTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification2.method);
      DidCloseTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
    })(DidCloseTextDocumentNotification || (exports2.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
    var DidSaveTextDocumentNotification;
    (function(DidSaveTextDocumentNotification2) {
      DidSaveTextDocumentNotification2.method = "textDocument/didSave";
      DidSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification2.method);
      DidSaveTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization.didSave", "textDocumentSync.save");
    })(DidSaveTextDocumentNotification || (exports2.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
    var TextDocumentSaveReason;
    (function(TextDocumentSaveReason2) {
      TextDocumentSaveReason2.Manual = 1;
      TextDocumentSaveReason2.AfterDelay = 2;
      TextDocumentSaveReason2.FocusOut = 3;
    })(TextDocumentSaveReason || (exports2.TextDocumentSaveReason = TextDocumentSaveReason = {}));
    var WillSaveTextDocumentNotification;
    (function(WillSaveTextDocumentNotification2) {
      WillSaveTextDocumentNotification2.method = "textDocument/willSave";
      WillSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification2.method);
      WillSaveTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization.willSave", "textDocumentSync.willSave");
    })(WillSaveTextDocumentNotification || (exports2.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
    var WillSaveTextDocumentWaitUntilRequest;
    (function(WillSaveTextDocumentWaitUntilRequest2) {
      WillSaveTextDocumentWaitUntilRequest2.method = "textDocument/willSaveWaitUntil";
      WillSaveTextDocumentWaitUntilRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentWaitUntilRequest2.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest2.method);
      WillSaveTextDocumentWaitUntilRequest2.capabilities = messages_1.CM.create("textDocument.synchronization.willSaveWaitUntil", "textDocumentSync.willSaveWaitUntil");
    })(WillSaveTextDocumentWaitUntilRequest || (exports2.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
    var DidChangeWatchedFilesNotification;
    (function(DidChangeWatchedFilesNotification2) {
      DidChangeWatchedFilesNotification2.method = "workspace/didChangeWatchedFiles";
      DidChangeWatchedFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWatchedFilesNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification2.method);
      DidChangeWatchedFilesNotification2.capabilities = messages_1.CM.create("workspace.didChangeWatchedFiles", void 0);
    })(DidChangeWatchedFilesNotification || (exports2.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
    var FileChangeType;
    (function(FileChangeType2) {
      FileChangeType2.Created = 1;
      FileChangeType2.Changed = 2;
      FileChangeType2.Deleted = 3;
    })(FileChangeType || (exports2.FileChangeType = FileChangeType = {}));
    var RelativePattern;
    (function(RelativePattern2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is2.string(candidate.pattern);
      }
      RelativePattern2.is = is;
    })(RelativePattern || (exports2.RelativePattern = RelativePattern = {}));
    var GlobPattern;
    (function(GlobPattern2) {
      function is(value) {
        const candidate = value;
        return Is2.string(candidate) || RelativePattern.is(candidate);
      }
      GlobPattern2.is = is;
    })(GlobPattern || (exports2.GlobPattern = GlobPattern = {}));
    var WatchKind;
    (function(WatchKind2) {
      WatchKind2.Create = 1;
      WatchKind2.Change = 2;
      WatchKind2.Delete = 4;
    })(WatchKind || (exports2.WatchKind = WatchKind = {}));
    var PublishDiagnosticsNotification;
    (function(PublishDiagnosticsNotification2) {
      PublishDiagnosticsNotification2.method = "textDocument/publishDiagnostics";
      PublishDiagnosticsNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      PublishDiagnosticsNotification2.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification2.method);
      PublishDiagnosticsNotification2.capabilities = messages_1.CM.create("textDocument.publishDiagnostics", void 0);
    })(PublishDiagnosticsNotification || (exports2.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
    var CompletionTriggerKind;
    (function(CompletionTriggerKind2) {
      CompletionTriggerKind2.Invoked = 1;
      CompletionTriggerKind2.TriggerCharacter = 2;
      CompletionTriggerKind2.TriggerForIncompleteCompletions = 3;
    })(CompletionTriggerKind || (exports2.CompletionTriggerKind = CompletionTriggerKind = {}));
    var CompletionRequest;
    (function(CompletionRequest2) {
      CompletionRequest2.method = "textDocument/completion";
      CompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionRequest2.type = new messages_1.ProtocolRequestType(CompletionRequest2.method);
      CompletionRequest2.capabilities = messages_1.CM.create("textDocument.completion", "completionProvider");
    })(CompletionRequest || (exports2.CompletionRequest = CompletionRequest = {}));
    var CompletionResolveRequest;
    (function(CompletionResolveRequest2) {
      CompletionResolveRequest2.method = "completionItem/resolve";
      CompletionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionResolveRequest2.type = new messages_1.ProtocolRequestType(CompletionResolveRequest2.method);
      CompletionResolveRequest2.capabilities = messages_1.CM.create("textDocument.completion.completionItem.resolveSupport", "completionProvider.resolveProvider");
    })(CompletionResolveRequest || (exports2.CompletionResolveRequest = CompletionResolveRequest = {}));
    var HoverRequest;
    (function(HoverRequest2) {
      HoverRequest2.method = "textDocument/hover";
      HoverRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      HoverRequest2.type = new messages_1.ProtocolRequestType(HoverRequest2.method);
      HoverRequest2.capabilities = messages_1.CM.create("textDocument.hover", "hoverProvider");
    })(HoverRequest || (exports2.HoverRequest = HoverRequest = {}));
    var SignatureHelpTriggerKind;
    (function(SignatureHelpTriggerKind2) {
      SignatureHelpTriggerKind2.Invoked = 1;
      SignatureHelpTriggerKind2.TriggerCharacter = 2;
      SignatureHelpTriggerKind2.ContentChange = 3;
    })(SignatureHelpTriggerKind || (exports2.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
    var SignatureHelpRequest;
    (function(SignatureHelpRequest2) {
      SignatureHelpRequest2.method = "textDocument/signatureHelp";
      SignatureHelpRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SignatureHelpRequest2.type = new messages_1.ProtocolRequestType(SignatureHelpRequest2.method);
      SignatureHelpRequest2.capabilities = messages_1.CM.create("textDocument.signatureHelp", "signatureHelpProvider");
    })(SignatureHelpRequest || (exports2.SignatureHelpRequest = SignatureHelpRequest = {}));
    var DefinitionRequest;
    (function(DefinitionRequest2) {
      DefinitionRequest2.method = "textDocument/definition";
      DefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DefinitionRequest2.type = new messages_1.ProtocolRequestType(DefinitionRequest2.method);
      DefinitionRequest2.capabilities = messages_1.CM.create("textDocument.definition", "definitionProvider");
    })(DefinitionRequest || (exports2.DefinitionRequest = DefinitionRequest = {}));
    var ReferencesRequest;
    (function(ReferencesRequest2) {
      ReferencesRequest2.method = "textDocument/references";
      ReferencesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ReferencesRequest2.type = new messages_1.ProtocolRequestType(ReferencesRequest2.method);
      ReferencesRequest2.capabilities = messages_1.CM.create("textDocument.references", "referencesProvider");
    })(ReferencesRequest || (exports2.ReferencesRequest = ReferencesRequest = {}));
    var DocumentHighlightRequest;
    (function(DocumentHighlightRequest2) {
      DocumentHighlightRequest2.method = "textDocument/documentHighlight";
      DocumentHighlightRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentHighlightRequest2.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest2.method);
      DocumentHighlightRequest2.capabilities = messages_1.CM.create("textDocument.documentHighlight", "documentHighlightProvider");
    })(DocumentHighlightRequest || (exports2.DocumentHighlightRequest = DocumentHighlightRequest = {}));
    var DocumentSymbolRequest;
    (function(DocumentSymbolRequest2) {
      DocumentSymbolRequest2.method = "textDocument/documentSymbol";
      DocumentSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentSymbolRequest2.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest2.method);
      DocumentSymbolRequest2.capabilities = messages_1.CM.create("textDocument.documentSymbol", "documentSymbolProvider");
    })(DocumentSymbolRequest || (exports2.DocumentSymbolRequest = DocumentSymbolRequest = {}));
    var CodeActionRequest;
    (function(CodeActionRequest2) {
      CodeActionRequest2.method = "textDocument/codeAction";
      CodeActionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionRequest2.type = new messages_1.ProtocolRequestType(CodeActionRequest2.method);
      CodeActionRequest2.capabilities = messages_1.CM.create("textDocument.codeAction", "codeActionProvider");
    })(CodeActionRequest || (exports2.CodeActionRequest = CodeActionRequest = {}));
    var CodeActionResolveRequest;
    (function(CodeActionResolveRequest2) {
      CodeActionResolveRequest2.method = "codeAction/resolve";
      CodeActionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionResolveRequest2.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest2.method);
      CodeActionResolveRequest2.capabilities = messages_1.CM.create("textDocument.codeAction.resolveSupport", "codeActionProvider.resolveProvider");
    })(CodeActionResolveRequest || (exports2.CodeActionResolveRequest = CodeActionResolveRequest = {}));
    var WorkspaceSymbolRequest;
    (function(WorkspaceSymbolRequest2) {
      WorkspaceSymbolRequest2.method = "workspace/symbol";
      WorkspaceSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest2.method);
      WorkspaceSymbolRequest2.capabilities = messages_1.CM.create("workspace.symbol", "workspaceSymbolProvider");
    })(WorkspaceSymbolRequest || (exports2.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
    var WorkspaceSymbolResolveRequest;
    (function(WorkspaceSymbolResolveRequest2) {
      WorkspaceSymbolResolveRequest2.method = "workspaceSymbol/resolve";
      WorkspaceSymbolResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolResolveRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest2.method);
      WorkspaceSymbolResolveRequest2.capabilities = messages_1.CM.create("workspace.symbol.resolveSupport", "workspaceSymbolProvider.resolveProvider");
    })(WorkspaceSymbolResolveRequest || (exports2.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
    var CodeLensRequest;
    (function(CodeLensRequest2) {
      CodeLensRequest2.method = "textDocument/codeLens";
      CodeLensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensRequest2.type = new messages_1.ProtocolRequestType(CodeLensRequest2.method);
      CodeLensRequest2.capabilities = messages_1.CM.create("textDocument.codeLens", "codeLensProvider");
    })(CodeLensRequest || (exports2.CodeLensRequest = CodeLensRequest = {}));
    var CodeLensResolveRequest;
    (function(CodeLensResolveRequest2) {
      CodeLensResolveRequest2.method = "codeLens/resolve";
      CodeLensResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensResolveRequest2.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest2.method);
      CodeLensResolveRequest2.capabilities = messages_1.CM.create("textDocument.codeLens.resolveSupport", "codeLensProvider.resolveProvider");
    })(CodeLensResolveRequest || (exports2.CodeLensResolveRequest = CodeLensResolveRequest = {}));
    var CodeLensRefreshRequest;
    (function(CodeLensRefreshRequest2) {
      CodeLensRefreshRequest2.method = `workspace/codeLens/refresh`;
      CodeLensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      CodeLensRefreshRequest2.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest2.method);
      CodeLensRefreshRequest2.capabilities = messages_1.CM.create("workspace.codeLens", void 0);
    })(CodeLensRefreshRequest || (exports2.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
    var DocumentLinkRequest;
    (function(DocumentLinkRequest2) {
      DocumentLinkRequest2.method = "textDocument/documentLink";
      DocumentLinkRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkRequest2.method);
      DocumentLinkRequest2.capabilities = messages_1.CM.create("textDocument.documentLink", "documentLinkProvider");
    })(DocumentLinkRequest || (exports2.DocumentLinkRequest = DocumentLinkRequest = {}));
    var DocumentLinkResolveRequest;
    (function(DocumentLinkResolveRequest2) {
      DocumentLinkResolveRequest2.method = "documentLink/resolve";
      DocumentLinkResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkResolveRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest2.method);
      DocumentLinkResolveRequest2.capabilities = messages_1.CM.create("textDocument.documentLink", "documentLinkProvider.resolveProvider");
    })(DocumentLinkResolveRequest || (exports2.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
    var DocumentFormattingRequest;
    (function(DocumentFormattingRequest2) {
      DocumentFormattingRequest2.method = "textDocument/formatting";
      DocumentFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest2.method);
      DocumentFormattingRequest2.capabilities = messages_1.CM.create("textDocument.formatting", "documentFormattingProvider");
    })(DocumentFormattingRequest || (exports2.DocumentFormattingRequest = DocumentFormattingRequest = {}));
    var DocumentRangeFormattingRequest;
    (function(DocumentRangeFormattingRequest2) {
      DocumentRangeFormattingRequest2.method = "textDocument/rangeFormatting";
      DocumentRangeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest2.method);
      DocumentRangeFormattingRequest2.capabilities = messages_1.CM.create("textDocument.rangeFormatting", "documentRangeFormattingProvider");
    })(DocumentRangeFormattingRequest || (exports2.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
    var DocumentRangesFormattingRequest;
    (function(DocumentRangesFormattingRequest2) {
      DocumentRangesFormattingRequest2.method = "textDocument/rangesFormatting";
      DocumentRangesFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangesFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest2.method);
      DocumentRangesFormattingRequest2.capabilities = messages_1.CM.create("textDocument.rangeFormatting.rangesSupport", "documentRangeFormattingProvider.rangesSupport");
    })(DocumentRangesFormattingRequest || (exports2.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
    var DocumentOnTypeFormattingRequest;
    (function(DocumentOnTypeFormattingRequest2) {
      DocumentOnTypeFormattingRequest2.method = "textDocument/onTypeFormatting";
      DocumentOnTypeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentOnTypeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest2.method);
      DocumentOnTypeFormattingRequest2.capabilities = messages_1.CM.create("textDocument.onTypeFormatting", "documentOnTypeFormattingProvider");
    })(DocumentOnTypeFormattingRequest || (exports2.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
    var PrepareSupportDefaultBehavior;
    (function(PrepareSupportDefaultBehavior2) {
      PrepareSupportDefaultBehavior2.Identifier = 1;
    })(PrepareSupportDefaultBehavior || (exports2.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
    var RenameRequest;
    (function(RenameRequest2) {
      RenameRequest2.method = "textDocument/rename";
      RenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      RenameRequest2.type = new messages_1.ProtocolRequestType(RenameRequest2.method);
      RenameRequest2.capabilities = messages_1.CM.create("textDocument.rename", "renameProvider");
    })(RenameRequest || (exports2.RenameRequest = RenameRequest = {}));
    var PrepareRenameRequest;
    (function(PrepareRenameRequest2) {
      PrepareRenameRequest2.method = "textDocument/prepareRename";
      PrepareRenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      PrepareRenameRequest2.type = new messages_1.ProtocolRequestType(PrepareRenameRequest2.method);
      PrepareRenameRequest2.capabilities = messages_1.CM.create("textDocument.rename.prepareSupport", "renameProvider.prepareProvider");
    })(PrepareRenameRequest || (exports2.PrepareRenameRequest = PrepareRenameRequest = {}));
    var ExecuteCommandRequest;
    (function(ExecuteCommandRequest2) {
      ExecuteCommandRequest2.method = "workspace/executeCommand";
      ExecuteCommandRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExecuteCommandRequest2.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest2.method);
      ExecuteCommandRequest2.capabilities = messages_1.CM.create("workspace.executeCommand", "executeCommandProvider");
    })(ExecuteCommandRequest || (exports2.ExecuteCommandRequest = ExecuteCommandRequest = {}));
    var ApplyWorkspaceEditRequest;
    (function(ApplyWorkspaceEditRequest2) {
      ApplyWorkspaceEditRequest2.method = "workspace/applyEdit";
      ApplyWorkspaceEditRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ApplyWorkspaceEditRequest2.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
      ApplyWorkspaceEditRequest2.capabilities = messages_1.CM.create("workspace.applyEdit", void 0);
    })(ApplyWorkspaceEditRequest || (exports2.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {}));
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection2 = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/connection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = createProtocolConnection;
    var vscode_jsonrpc_1 = require_api();
    function createProtocolConnection(input, output, logger, options) {
      if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
    }
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api2 = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LSPErrorCodes = exports2.createProtocolConnection = void 0;
    __exportStar(require_api(), exports2);
    __exportStar((init_main(), __toCommonJS(main_exports)), exports2);
    __exportStar(require_messages2(), exports2);
    __exportStar(require_protocol(), exports2);
    var connection_1 = require_connection2();
    Object.defineProperty(exports2, "createProtocolConnection", { enumerable: true, get: function() {
      return connection_1.createProtocolConnection;
    } });
    var LSPErrorCodes;
    (function(LSPErrorCodes2) {
      LSPErrorCodes2.lspReservedErrorRangeStart = -32899;
      LSPErrorCodes2.RequestFailed = -32803;
      LSPErrorCodes2.ServerCancelled = -32802;
      LSPErrorCodes2.ContentModified = -32801;
      LSPErrorCodes2.RequestCancelled = -32800;
      LSPErrorCodes2.lspReservedErrorRangeEnd = -32800;
    })(LSPErrorCodes || (exports2.LSPErrorCodes = LSPErrorCodes = {}));
  }
});

// server/node_modules/vscode-languageserver/lib/common/utils/uuid.js
var require_uuid = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/utils/uuid.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.empty = void 0;
    exports2.v4 = v4;
    exports2.isUUID = isUUID;
    exports2.parse = parse;
    exports2.generateUuid = generateUuid;
    var ValueUUID = class {
      _value;
      constructor(_value) {
        this._value = _value;
      }
      asHex() {
        return this._value;
      }
      equals(other) {
        return this.asHex() === other.asHex();
      }
    };
    var V4UUID = class _V4UUID extends ValueUUID {
      static _chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      static _timeHighBits = ["8", "9", "a", "b"];
      static _oneOf(array) {
        return array[Math.floor(array.length * Math.random())];
      }
      static _randomHex() {
        return _V4UUID._oneOf(_V4UUID._chars);
      }
      constructor() {
        super([
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          "4",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._oneOf(_V4UUID._timeHighBits),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex()
        ].join(""));
      }
    };
    exports2.empty = new ValueUUID("00000000-0000-0000-0000-000000000000");
    function v4() {
      return new V4UUID();
    }
    var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function isUUID(value) {
      return _UUIDPattern.test(value);
    }
    function parse(value) {
      if (!isUUID(value)) {
        throw new Error("invalid uuid");
      }
      return new ValueUUID(value);
    }
    function generateUuid() {
      return v4().asHex();
    }
  }
});

// server/node_modules/vscode-languageserver/lib/common/progress.js
var require_progress = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProgressFeature = void 0;
    exports2.attachWorkDone = attachWorkDone;
    exports2.attachPartialResult = attachPartialResult;
    var vscode_languageserver_protocol_1 = require_api2();
    var uuid_1 = require_uuid();
    var WorkDoneProgressReporterImpl = class _WorkDoneProgressReporterImpl {
      _connection;
      _token;
      static Instances = /* @__PURE__ */ new Map();
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
        _WorkDoneProgressReporterImpl.Instances.set(this._token, this);
      }
      begin(title, percentage, message, cancellable) {
        const param = {
          kind: "begin",
          title,
          message,
          cancellable
        };
        if (typeof percentage === "number") {
          param.percentage = Math.round(percentage);
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      report(arg0, arg1) {
        const param = {
          kind: "report"
        };
        if (typeof arg0 === "number") {
          param.percentage = Math.round(arg0);
          if (arg1 !== void 0) {
            param.message = arg1;
          }
        } else {
          param.message = arg0;
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      done() {
        _WorkDoneProgressReporterImpl.Instances.delete(this._token);
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: "end" });
      }
    };
    var WorkDoneProgressServerReporterImpl = class extends WorkDoneProgressReporterImpl {
      _source;
      constructor(connection2, token) {
        super(connection2, token);
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
        super.done();
      }
      cancel() {
        this._source.cancel();
      }
    };
    var NullProgressReporter = class {
      constructor() {
      }
      begin() {
      }
      report() {
      }
      done() {
      }
    };
    var NullProgressServerReporter = class extends NullProgressReporter {
      _source;
      constructor() {
        super();
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
      }
      cancel() {
        this._source.cancel();
      }
    };
    function attachWorkDone(connection2, params) {
      if (params === void 0 || params.workDoneToken === void 0) {
        return new NullProgressReporter();
      }
      const token = params.workDoneToken;
      delete params.workDoneToken;
      return new WorkDoneProgressReporterImpl(connection2, token);
    }
    var ProgressFeature = (Base) => {
      return class extends Base {
        _progressSupported;
        constructor() {
          super();
          this._progressSupported = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          if (capabilities?.window?.workDoneProgress === true) {
            this._progressSupported = true;
            this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
              const progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
              if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
                progress.cancel();
              }
            });
          }
        }
        attachWorkDoneProgress(token) {
          if (token === void 0) {
            return new NullProgressReporter();
          } else {
            return new WorkDoneProgressReporterImpl(this.connection, token);
          }
        }
        createWorkDoneProgress() {
          if (this._progressSupported) {
            const token = (0, uuid_1.generateUuid)();
            return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
              const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
              return result;
            });
          } else {
            return Promise.resolve(new NullProgressServerReporter());
          }
        }
      };
    };
    exports2.ProgressFeature = ProgressFeature;
    var ResultProgress;
    (function(ResultProgress2) {
      ResultProgress2.type = new vscode_languageserver_protocol_1.ProgressType();
    })(ResultProgress || (ResultProgress = {}));
    var ResultProgressReporterImpl = class {
      _connection;
      _token;
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
      }
      report(data) {
        this._connection.sendProgress(ResultProgress.type, this._token, data);
      }
    };
    function attachPartialResult(connection2, params) {
      if (params === void 0 || params.partialResultToken === void 0) {
        return void 0;
      }
      const token = params.partialResultToken;
      delete params.partialResultToken;
      return new ResultProgressReporterImpl(connection2, token);
    }
  }
});

// server/node_modules/vscode-languageserver/lib/common/configuration.js
var require_configuration = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/configuration.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var Is2 = __importStar2(require_is());
    var ConfigurationFeature = (Base) => {
      return class extends Base {
        getConfiguration(arg) {
          if (!arg) {
            return this._getConfiguration({});
          } else if (Is2.string(arg)) {
            return this._getConfiguration({ section: arg });
          } else {
            return this._getConfiguration(arg);
          }
        }
        _getConfiguration(arg) {
          const params = {
            items: Array.isArray(arg) ? arg : [arg]
          };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
            if (Array.isArray(result)) {
              return Array.isArray(arg) ? result : result[0];
            } else {
              return Array.isArray(arg) ? [] : null;
            }
          });
        }
      };
    };
    exports2.ConfigurationFeature = ConfigurationFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/workspaceFolder.js
var require_workspaceFolder = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkspaceFoldersFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var WorkspaceFoldersFeature = (Base) => {
      return class extends Base {
        _onDidChangeWorkspaceFolders;
        _unregistration;
        _notificationIsAutoRegistered;
        constructor() {
          super();
          this._notificationIsAutoRegistered = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          const workspaceCapabilities = capabilities.workspace;
          if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
            this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter();
            this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
              this._onDidChangeWorkspaceFolders.fire(params.event);
            });
          }
        }
        fillServerCapabilities(capabilities) {
          super.fillServerCapabilities(capabilities);
          const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
          this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === "string";
        }
        getWorkspaceFolders() {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
        }
        get onDidChangeWorkspaceFolders() {
          if (!this._onDidChangeWorkspaceFolders) {
            throw new Error("Client doesn't support sending workspace folder change events.");
          }
          if (!this._notificationIsAutoRegistered && !this._unregistration) {
            this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
          }
          return this._onDidChangeWorkspaceFolders.event;
        }
      };
    };
    exports2.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/callHierarchy.js
var require_callHierarchy = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var CallHierarchyFeature = (Base) => {
      return class extends Base {
        get callHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onIncomingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onOutgoingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.CallHierarchyFeature = CallHierarchyFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/semanticTokens.js
var require_semanticTokens = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensBuilder = exports2.SemanticTokensDiff = exports2.SemanticTokensFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var SemanticTokensFeature = (Base) => {
      return class extends Base {
        get semanticTokens() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onDelta: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onRange: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.SemanticTokensFeature = SemanticTokensFeature;
    var SemanticTokensDiff = class {
      originalSequence;
      modifiedSequence;
      constructor(originalSequence, modifiedSequence) {
        this.originalSequence = originalSequence;
        this.modifiedSequence = modifiedSequence;
      }
      computeDiff() {
        const originalLength = this.originalSequence.length;
        const modifiedLength = this.modifiedSequence.length;
        let startIndex = 0;
        while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) {
          startIndex++;
        }
        if (startIndex < modifiedLength && startIndex < originalLength) {
          let originalEndIndex = originalLength - 1;
          let modifiedEndIndex = modifiedLength - 1;
          while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
            originalEndIndex--;
            modifiedEndIndex--;
          }
          if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
            originalEndIndex++;
            modifiedEndIndex++;
          }
          const deleteCount = originalEndIndex - startIndex + 1;
          const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
          if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) {
            return [
              { start: startIndex, deleteCount: deleteCount - 1 }
            ];
          } else {
            return [
              { start: startIndex, deleteCount, data: newData }
            ];
          }
        } else if (startIndex < modifiedLength) {
          return [
            { start: startIndex, deleteCount: 0, data: this.modifiedSequence.slice(startIndex) }
          ];
        } else if (startIndex < originalLength) {
          return [
            { start: startIndex, deleteCount: originalLength - startIndex }
          ];
        } else {
          return [];
        }
      }
    };
    exports2.SemanticTokensDiff = SemanticTokensDiff;
    var SemanticTokensBuilder = class _SemanticTokensBuilder {
      _id;
      _prevLine;
      _prevChar;
      _dataIsSortedAndDeltaEncoded;
      _data;
      _dataNonDelta;
      _dataLen;
      _prevData;
      constructor() {
        this._prevData = void 0;
        this.initialize();
      }
      initialize() {
        this._id = Date.now();
        this._prevLine = 0;
        this._prevChar = 0;
        this._data = [];
        this._dataNonDelta = [];
        this._dataLen = 0;
        this._dataIsSortedAndDeltaEncoded = true;
      }
      push(line, char, length, tokenType, tokenModifiers) {
        if (this._dataIsSortedAndDeltaEncoded && (line < this._prevLine || line === this._prevLine && char < this._prevChar)) {
          this._dataIsSortedAndDeltaEncoded = false;
          this._dataNonDelta = _SemanticTokensBuilder._deltaDecode(this._data);
        }
        let pushLine = line;
        let pushChar = char;
        if (this._dataIsSortedAndDeltaEncoded && this._dataLen > 0) {
          pushLine -= this._prevLine;
          if (pushLine === 0) {
            pushChar -= this._prevChar;
          }
        }
        const dataSource = this._dataIsSortedAndDeltaEncoded ? this._data : this._dataNonDelta;
        dataSource[this._dataLen++] = pushLine;
        dataSource[this._dataLen++] = pushChar;
        dataSource[this._dataLen++] = length;
        dataSource[this._dataLen++] = tokenType;
        dataSource[this._dataLen++] = tokenModifiers;
        this._prevLine = line;
        this._prevChar = char;
      }
      get id() {
        return this._id.toString();
      }
      static _deltaDecode(data) {
        const tokenCount = data.length / 5 | 0;
        let prevLine = 0;
        let prevChar = 0;
        const result = [];
        for (let i = 0; i < tokenCount; i++) {
          const dstOffset = 5 * i;
          let line = data[dstOffset];
          let char = data[dstOffset + 1];
          if (line === 0) {
            line = prevLine;
            char += prevChar;
          } else {
            line += prevLine;
          }
          const length = data[dstOffset + 2];
          const tokenType = data[dstOffset + 3];
          const tokenModifiers = data[dstOffset + 4];
          result[dstOffset + 0] = line;
          result[dstOffset + 1] = char;
          result[dstOffset + 2] = length;
          result[dstOffset + 3] = tokenType;
          result[dstOffset + 4] = tokenModifiers;
          prevLine = line;
          prevChar = char;
        }
        return result;
      }
      static _sortAndDeltaEncode(data) {
        const pos = [];
        const tokenCount = data.length / 5 | 0;
        for (let i = 0; i < tokenCount; i++) {
          pos[i] = i;
        }
        pos.sort((a, b) => {
          const aLine = data[5 * a];
          const bLine = data[5 * b];
          if (aLine === bLine) {
            const aChar = data[5 * a + 1];
            const bChar = data[5 * b + 1];
            return aChar - bChar;
          }
          return aLine - bLine;
        });
        const result = [];
        let prevLine = 0;
        let prevChar = 0;
        for (let i = 0; i < tokenCount; i++) {
          const srcOffset = 5 * pos[i];
          const line = data[srcOffset + 0];
          const char = data[srcOffset + 1];
          const length = data[srcOffset + 2];
          const tokenType = data[srcOffset + 3];
          const tokenModifiers = data[srcOffset + 4];
          const pushLine = line - prevLine;
          const pushChar = pushLine === 0 ? char - prevChar : char;
          const dstOffset = 5 * i;
          result[dstOffset + 0] = pushLine;
          result[dstOffset + 1] = pushChar;
          result[dstOffset + 2] = length;
          result[dstOffset + 3] = tokenType;
          result[dstOffset + 4] = tokenModifiers;
          prevLine = line;
          prevChar = char;
        }
        return result;
      }
      getFinalDataDelta() {
        if (this._dataIsSortedAndDeltaEncoded) {
          return this._data;
        } else {
          return _SemanticTokensBuilder._sortAndDeltaEncode(this._dataNonDelta);
        }
      }
      previousResult(id) {
        if (this.id === id) {
          this._prevData = this.getFinalDataDelta();
        }
        this.initialize();
      }
      build() {
        this._prevData = void 0;
        return {
          resultId: this.id,
          data: this.getFinalDataDelta()
        };
      }
      canBuildEdits() {
        return this._prevData !== void 0;
      }
      buildEdits() {
        if (this._prevData !== void 0) {
          return {
            resultId: this.id,
            edits: new SemanticTokensDiff(this._prevData, this.getFinalDataDelta()).computeDiff()
          };
        } else {
          return this.build();
        }
      }
    };
    exports2.SemanticTokensBuilder = SemanticTokensBuilder;
  }
});

// server/node_modules/vscode-languageserver/lib/common/showDocument.js
var require_showDocument = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var ShowDocumentFeature = (Base) => {
      return class extends Base {
        showDocument(params) {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
        }
      };
    };
    exports2.ShowDocumentFeature = ShowDocumentFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/fileOperations.js
var require_fileOperations = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FileOperationsFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var FileOperationsFeature = (Base) => {
      return class extends Base {
        onDidCreateFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
            return handler(params);
          });
        }
        onDidRenameFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
            return handler(params);
          });
        }
        onDidDeleteFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
            return handler(params);
          });
        }
        onWillCreateFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillRenameFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillDeleteFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
      };
    };
    exports2.FileOperationsFeature = FileOperationsFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/linkedEditingRange.js
var require_linkedEditingRange = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var LinkedEditingRangeFeature = (Base) => {
      return class extends Base {
        onLinkedEditingRange(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
          });
        }
      };
    };
    exports2.LinkedEditingRangeFeature = LinkedEditingRangeFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/typeHierarchy.js
var require_typeHierarchy = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var TypeHierarchyFeature = (Base) => {
      return class extends Base {
        get typeHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onSupertypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onSubtypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.TypeHierarchyFeature = TypeHierarchyFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/inlineValue.js
var require_inlineValue = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var InlineValueFeature = (Base) => {
      return class extends Base {
        get inlineValue() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineValueFeature = InlineValueFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/foldingRange.js
var require_foldingRange = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var FoldingRangeFeature = (Base) => {
      return class extends Base {
        get foldingRange() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.FoldingRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.FoldingRangeFeature = FoldingRangeFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/inlayHint.js
var require_inlayHint = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var InlayHintFeature = (Base) => {
      return class extends Base {
        get inlayHint() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            },
            resolve: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, (params, cancel) => {
                return handler(params, cancel);
              });
            }
          };
        }
      };
    };
    exports2.InlayHintFeature = InlayHintFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/diagnostic.js
var require_diagnostic = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/diagnostic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var DiagnosticFeature = (Base) => {
      return class extends Base {
        get diagnostics() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.partialResult, params));
              });
            },
            onWorkspace: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, params));
              });
            }
          };
        }
      };
    };
    exports2.DiagnosticFeature = DiagnosticFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/textDocuments.js
var require_textDocuments = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/textDocuments.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TextDocuments = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var TextDocuments = class {
      _configuration;
      _syncedDocuments;
      _onDidChangeContent;
      _onDidOpen;
      _onDidClose;
      _onDidSave;
      _onWillSave;
      _willSaveWaitUntil;
      /**
       * Create a new text document manager.
       */
      constructor(configuration) {
        this._configuration = configuration;
        this._syncedDocuments = /* @__PURE__ */ new Map();
        this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onWillSave = new vscode_languageserver_protocol_1.Emitter();
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened.
       */
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened or the content changes.
       */
      get onDidChangeContent() {
        return this._onDidChangeContent.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * will be saved.
       */
      get onWillSave() {
        return this._onWillSave.event;
      }
      /**
       * Sets a handler that will be called if a participant wants to provide
       * edits during a text document save.
       */
      onWillSaveWaitUntil(handler) {
        this._willSaveWaitUntil = handler;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been saved.
       */
      get onDidSave() {
        return this._onDidSave.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been closed.
       */
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Returns the document for the given URI. Returns undefined if
       * the document is not managed by this instance.
       *
       * @param uri The text document's URI to retrieve.
       * @return the text document or `undefined`.
       */
      get(uri) {
        return this._syncedDocuments.get(uri);
      }
      /**
       * Returns all text documents managed by this instance.
       *
       * @return all text documents.
       */
      all() {
        return Array.from(this._syncedDocuments.values());
      }
      /**
       * Returns the URIs of all text documents managed by this instance.
       *
       * @return the URI's of all text documents.
       */
      keys() {
        return Array.from(this._syncedDocuments.keys());
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the text documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`,
       * `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`.
       *
       * Use the corresponding events on the TextDocuments instance instead.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        connection2.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
        const disposables = [];
        disposables.push(connection2.onDidOpenTextDocument((event) => {
          const td = event.textDocument;
          const document = this._configuration.create(td.uri, td.languageId, td.version, td.text);
          this._syncedDocuments.set(td.uri, document);
          const toFire = Object.freeze({ document });
          this._onDidOpen.fire(toFire);
          this._onDidChangeContent.fire(toFire);
        }));
        disposables.push(connection2.onDidChangeTextDocument((event) => {
          const td = event.textDocument;
          const changes = event.contentChanges;
          if (changes.length === 0) {
            return;
          }
          const { version } = td;
          if (version === null || version === void 0) {
            throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
          }
          let syncedDocument = this._syncedDocuments.get(td.uri);
          if (syncedDocument !== void 0) {
            syncedDocument = this._configuration.update(syncedDocument, changes, version);
            this._syncedDocuments.set(td.uri, syncedDocument);
            this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onDidCloseTextDocument((event) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._syncedDocuments.delete(event.textDocument.uri);
            this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocument((event) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onWillSave.fire(Object.freeze({ document: syncedDocument, reason: event.reason }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocumentWaitUntil((event, token) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0 && this._willSaveWaitUntil) {
            return this._willSaveWaitUntil(Object.freeze({ document: syncedDocument, reason: event.reason }), token);
          } else {
            return [];
          }
        }));
        disposables.push(connection2.onDidSaveTextDocument((event) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
    };
    exports2.TextDocuments = TextDocuments;
  }
});

// server/node_modules/vscode-languageserver/lib/common/notebook.js
var require_notebook = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/notebook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NotebookDocuments = exports2.NotebookSyncFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var textDocuments_1 = require_textDocuments();
    var NotebookSyncFeature = (Base) => {
      return class extends Base {
        get synchronization() {
          return {
            onDidOpenNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidOpenNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            },
            onDidChangeNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            },
            onDidSaveNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidSaveNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            },
            onDidCloseNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidCloseNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            }
          };
        }
      };
    };
    exports2.NotebookSyncFeature = NotebookSyncFeature;
    var CellTextDocumentConnection = class _CellTextDocumentConnection {
      static NULL_DISPOSE = Object.freeze({ dispose: () => {
      } });
      openHandler;
      changeHandler;
      closeHandler;
      onDidOpenTextDocument(handler) {
        this.openHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.openHandler = void 0;
        });
      }
      openTextDocument(params) {
        return this.openHandler && this.openHandler(params);
      }
      onDidChangeTextDocument(handler) {
        this.changeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.changeHandler = handler;
        });
      }
      changeTextDocument(params) {
        return this.changeHandler && this.changeHandler(params);
      }
      onDidCloseTextDocument(handler) {
        this.closeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.closeHandler = void 0;
        });
      }
      closeTextDocument(params) {
        return this.closeHandler && this.closeHandler(params);
      }
      onWillSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onWillSaveTextDocumentWaitUntil() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onDidSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
    };
    var NotebookDocuments = class {
      notebookDocuments;
      notebookCellMap;
      _onDidOpen;
      _onDidSave;
      _onDidChange;
      _onDidClose;
      _cellTextDocuments;
      constructor(configurationOrTextDocuments) {
        if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) {
          this._cellTextDocuments = configurationOrTextDocuments;
        } else {
          this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
        }
        this.notebookDocuments = /* @__PURE__ */ new Map();
        this.notebookCellMap = /* @__PURE__ */ new Map();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidChange = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
      }
      get cellTextDocuments() {
        return this._cellTextDocuments;
      }
      getCellTextDocument(cell) {
        return this._cellTextDocuments.get(cell.document);
      }
      getNotebookDocument(uri) {
        return this.notebookDocuments.get(uri);
      }
      getNotebookCell(uri) {
        const value = this.notebookCellMap.get(uri);
        return value && value[0];
      }
      findNotebookDocumentForCell(cell) {
        const key = typeof cell === "string" ? cell : cell.document;
        const value = this.notebookCellMap.get(key);
        return value && value[1];
      }
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      get onDidSave() {
        return this._onDidSave.event;
      }
      get onDidChange() {
        return this._onDidChange.event;
      }
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the notebook documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`,
       *  and `onDidCloseNotebookDocument`.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        const cellTextDocumentConnection = new CellTextDocumentConnection();
        const disposables = [];
        disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
        disposables.push(connection2.notebooks.synchronization.onDidOpenNotebookDocument(async (params) => {
          this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            await cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
          }
          this.updateCellMap(params.notebookDocument);
          this._onDidOpen.fire(params.notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidChangeNotebookDocument(async (params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          notebookDocument.version = params.notebookDocument.version;
          const oldMetadata = notebookDocument.metadata;
          let metadataChanged = false;
          const change = params.change;
          if (change.metadata !== void 0) {
            metadataChanged = true;
            notebookDocument.metadata = change.metadata;
          }
          const opened = [];
          const closed = [];
          const data = [];
          const text = [];
          if (change.cells !== void 0) {
            const changedCells = change.cells;
            if (changedCells.structure !== void 0) {
              const array = changedCells.structure.array;
              notebookDocument.cells.splice(array.start, array.deleteCount, ...array.cells !== void 0 ? array.cells : []);
              if (changedCells.structure.didOpen !== void 0) {
                for (const open of changedCells.structure.didOpen) {
                  await cellTextDocumentConnection.openTextDocument({ textDocument: open });
                  opened.push(open.uri);
                }
              }
              if (changedCells.structure.didClose) {
                for (const close of changedCells.structure.didClose) {
                  await cellTextDocumentConnection.closeTextDocument({ textDocument: close });
                  closed.push(close.uri);
                }
              }
            }
            if (changedCells.data !== void 0) {
              const cellUpdates = new Map(changedCells.data.map((cell) => [cell.document, cell]));
              for (let i = 0; i <= notebookDocument.cells.length; i++) {
                const change2 = cellUpdates.get(notebookDocument.cells[i].document);
                if (change2 !== void 0) {
                  const old = notebookDocument.cells.splice(i, 1, change2);
                  data.push({ old: old[0], new: change2 });
                  cellUpdates.delete(change2.document);
                  if (cellUpdates.size === 0) {
                    break;
                  }
                }
              }
            }
            if (changedCells.textContent !== void 0) {
              for (const cellTextDocument of changedCells.textContent) {
                await cellTextDocumentConnection.changeTextDocument({ textDocument: cellTextDocument.document, contentChanges: cellTextDocument.changes });
                text.push(cellTextDocument.document.uri);
              }
            }
          }
          this.updateCellMap(notebookDocument);
          const changeEvent = { notebookDocument };
          if (metadataChanged) {
            changeEvent.metadata = { old: oldMetadata, new: notebookDocument.metadata };
          }
          const added = [];
          for (const open of opened) {
            added.push(this.getNotebookCell(open));
          }
          const removed = [];
          for (const close of closed) {
            removed.push(this.getNotebookCell(close));
          }
          const textContent = [];
          for (const change2 of text) {
            textContent.push(this.getNotebookCell(change2));
          }
          if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) {
            changeEvent.cells = { added, removed, changed: { data, textContent } };
          }
          if (changeEvent.metadata !== void 0 || changeEvent.cells !== void 0) {
            this._onDidChange.fire(changeEvent);
          }
        }));
        disposables.push(connection2.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidSave.fire(notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidCloseNotebookDocument(async (params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidClose.fire(notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            await cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
          }
          this.notebookDocuments.delete(params.notebookDocument.uri);
          for (const cell of notebookDocument.cells) {
            this.notebookCellMap.delete(cell.document);
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
      updateCellMap(notebookDocument) {
        for (const cell of notebookDocument.cells) {
          this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
        }
      }
    };
    exports2.NotebookDocuments = NotebookDocuments;
  }
});

// server/node_modules/vscode-languageserver/lib/common/moniker.js
var require_moniker = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var MonikerFeature = (Base) => {
      return class extends Base {
        get moniker() {
          return {
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.MonikerRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.MonikerFeature = MonikerFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/inlineCompletion.js
var require_inlineCompletion = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/inlineCompletion.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var InlineCompletionFeature = (Base) => {
      return class extends Base {
        get inlineCompletion() {
          return {
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineCompletionFeature = InlineCompletionFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/textDocumentContent.js
var require_textDocumentContent = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/textDocumentContent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TextDocumentContentFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var TextDocumentContentFeature = (Base) => {
      return class extends Base {
        get textDocumentContent() {
          return {
            refresh: (uri) => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.TextDocumentContentRefreshRequest.type, { uri });
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.TextDocumentContentRequest.type, (params, cancel) => {
                return handler(params, cancel);
              });
            }
          };
        }
      };
    };
    exports2.TextDocumentContentFeature = TextDocumentContentFeature;
  }
});

// server/node_modules/vscode-languageserver/lib/common/server.js
var require_server = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/server.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2._NotebooksImpl = exports2._LanguagesImpl = exports2.BulkUnregistration = exports2.BulkRegistration = exports2.ErrorMessageTracker = void 0;
    exports2.combineConsoleFeatures = combineConsoleFeatures;
    exports2.combineTelemetryFeatures = combineTelemetryFeatures;
    exports2.combineTracerFeatures = combineTracerFeatures;
    exports2.combineClientFeatures = combineClientFeatures;
    exports2.combineWindowFeatures = combineWindowFeatures;
    exports2.combineWorkspaceFeatures = combineWorkspaceFeatures;
    exports2.combineLanguagesFeatures = combineLanguagesFeatures;
    exports2.combineNotebooksFeatures = combineNotebooksFeatures;
    exports2.combineFeatures = combineFeatures;
    exports2.createConnection = createConnection;
    var vscode_languageserver_protocol_1 = require_api2();
    var Is2 = __importStar2(require_is());
    var UUID = __importStar2(require_uuid());
    var progress_1 = require_progress();
    var configuration_1 = require_configuration();
    var workspaceFolder_1 = require_workspaceFolder();
    var callHierarchy_1 = require_callHierarchy();
    var semanticTokens_1 = require_semanticTokens();
    var showDocument_1 = require_showDocument();
    var fileOperations_1 = require_fileOperations();
    var linkedEditingRange_1 = require_linkedEditingRange();
    var typeHierarchy_1 = require_typeHierarchy();
    var inlineValue_1 = require_inlineValue();
    var foldingRange_1 = require_foldingRange();
    var inlayHint_1 = require_inlayHint();
    var diagnostic_1 = require_diagnostic();
    var notebook_1 = require_notebook();
    var moniker_1 = require_moniker();
    var inlineCompletion_1 = require_inlineCompletion();
    var textDocumentContent_1 = require_textDocumentContent();
    function null2Undefined(value) {
      if (value === null) {
        return void 0;
      }
      return value;
    }
    var ErrorMessageTracker = class {
      _messages;
      constructor() {
        this._messages = /* @__PURE__ */ Object.create(null);
      }
      /**
       * Add a message to the tracker.
       *
       * @param message The message to add.
       */
      add(message) {
        let count = this._messages[message];
        if (!count) {
          count = 0;
        }
        count++;
        this._messages[message] = count;
      }
      /**
       * Send all tracked messages to the connection's window.
       *
       * @param connection The connection established between client and server.
       */
      sendErrors(connection2) {
        Object.keys(this._messages).forEach((message) => {
          connection2.window.showErrorMessage(message);
        });
      }
    };
    exports2.ErrorMessageTracker = ErrorMessageTracker;
    var RemoteConsoleImpl = class {
      _rawConnection;
      _connection;
      constructor() {
      }
      rawAttach(connection2) {
        this._rawConnection = connection2;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      fillServerCapabilities(_capabilities) {
      }
      initialize(_capabilities) {
      }
      error(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
      }
      warn(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
      }
      info(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
      }
      log(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
      }
      debug(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Debug, message);
      }
      send(type, message) {
        if (this._rawConnection) {
          this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message }).catch(() => {
            (0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
          });
        }
      }
    };
    var _RemoteWindowImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      showErrorMessage(message, ...actions) {
        const params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showWarningMessage(message, ...actions) {
        const params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showInformationMessage(message, ...actions) {
        const params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
    };
    var RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
    var BulkRegistration;
    (function(BulkRegistration2) {
      function create() {
        return new BulkRegistrationImpl();
      }
      BulkRegistration2.create = create;
    })(BulkRegistration || (exports2.BulkRegistration = BulkRegistration = {}));
    var BulkRegistrationImpl = class {
      _registrations = [];
      _registered = /* @__PURE__ */ new Set();
      add(type, registerOptions) {
        const method = Is2.string(type) ? type : type.method;
        if (this._registered.has(method)) {
          throw new Error(`${method} is already added to this registration`);
        }
        const id = UUID.generateUuid();
        this._registrations.push({
          id,
          method,
          registerOptions: registerOptions || {}
        });
        this._registered.add(method);
      }
      asRegistrationParams() {
        return {
          registrations: this._registrations
        };
      }
    };
    var BulkUnregistration;
    (function(BulkUnregistration2) {
      function create() {
        return new BulkUnregistrationImpl(void 0, []);
      }
      BulkUnregistration2.create = create;
    })(BulkUnregistration || (exports2.BulkUnregistration = BulkUnregistration = {}));
    var BulkUnregistrationImpl = class {
      _connection;
      _unregistrations = /* @__PURE__ */ new Map();
      constructor(_connection, unregistrations) {
        this._connection = _connection;
        unregistrations.forEach((unregistration) => {
          this._unregistrations.set(unregistration.method, unregistration);
        });
      }
      get isAttached() {
        return !!this._connection;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      add(unregistration) {
        this._unregistrations.set(unregistration.method, unregistration);
      }
      dispose() {
        const unregistrations = [];
        for (const unregistration of this._unregistrations.values()) {
          unregistrations.push(unregistration);
        }
        const params = {
          unregisterations: unregistrations
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this._connection.console.info(`Bulk unregistration failed.`);
        });
      }
      disposeSingle(arg) {
        const method = Is2.string(arg) ? arg : arg.method;
        const unregistration = this._unregistrations.get(method);
        if (!unregistration) {
          return false;
        }
        const params = {
          unregisterations: [unregistration]
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
          this._unregistrations.delete(method);
        }, (_error) => {
          this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
        });
        return true;
      }
    };
    var RemoteClientImpl = class {
      _connection;
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
        if (typeOrRegistrations instanceof BulkRegistrationImpl) {
          return this.registerMany(typeOrRegistrations);
        } else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
          return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
        } else {
          return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
        }
      }
      registerSingle1(unregistration, type, registerOptions) {
        const method = Is2.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        const params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        if (!unregistration.isAttached) {
          unregistration.attach(this.connection);
        }
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          unregistration.add({ id, method });
          return unregistration;
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      registerSingle2(type, registerOptions) {
        const method = Is2.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        const params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          return vscode_languageserver_protocol_1.Disposable.create(() => {
            this.unregisterSingle(id, method).catch(() => {
              this.connection.console.info(`Un-registering capability with id ${id} failed.`);
            });
          });
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      unregisterSingle(id, method) {
        const params = {
          unregisterations: [{ id, method }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this.connection.console.info(`Un-registering request handler for ${id} failed.`);
        });
      }
      registerMany(registrations) {
        const params = registrations.asRegistrationParams();
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
          return new BulkUnregistrationImpl(this._connection, params.registrations.map((registration) => {
            return { id: registration.id, method: registration.method };
          }));
        }, (_error) => {
          this.connection.console.info(`Bulk registration failed.`);
          return Promise.reject(_error);
        });
      }
    };
    var _RemoteWorkspaceImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      applyEdit(paramOrEdit) {
        function isApplyWorkspaceEditParams(value) {
          return value && !!value.edit;
        }
        const params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
      }
    };
    var RemoteWorkspaceImpl = (0, textDocumentContent_1.TextDocumentContentFeature)((0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl))));
    var TracerImpl = class {
      _trace;
      _connection;
      constructor() {
        this._trace = vscode_languageserver_protocol_1.Trace.Off;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      set trace(value) {
        this._trace = value;
      }
      log(message, verbose) {
        if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
          return;
        }
        this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
          message,
          verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : void 0
        }).catch(() => {
        });
      }
    };
    var TelemetryImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      logEvent(data) {
        this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
          this.connection.console.log(`Sending TelemetryEventNotification failed`);
        });
      }
    };
    var _LanguagesImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._LanguagesImpl = _LanguagesImpl;
    var LanguagesImpl = (0, inlineCompletion_1.InlineCompletionFeature)((0, foldingRange_1.FoldingRangeFeature)((0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl))))))))));
    var _NotebooksImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._NotebooksImpl = _NotebooksImpl;
    var NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
    function combineConsoleFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineTelemetryFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineTracerFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineClientFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineWindowFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineWorkspaceFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineLanguagesFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineNotebooksFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineFeatures(one, two) {
      function combine(one2, two2, func) {
        if (one2 && two2) {
          return func(one2, two2);
        } else if (one2) {
          return one2;
        } else {
          return two2;
        }
      }
      const result = {
        __brand: "features",
        console: combine(one.console, two.console, combineConsoleFeatures),
        tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
        telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
        client: combine(one.client, two.client, combineClientFeatures),
        window: combine(one.window, two.window, combineWindowFeatures),
        workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
        languages: combine(one.languages, two.languages, combineLanguagesFeatures),
        notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
      };
      return result;
    }
    function createConnection(connectionFactory, watchDog, factories) {
      const logger = factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl();
      const connection2 = connectionFactory(logger);
      logger.rawAttach(connection2);
      const tracer = factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl();
      const telemetry = factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl();
      const client = factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl();
      const remoteWindow = factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl();
      const workspace = factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl();
      const languages = factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl();
      const notebooks = factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl))() : new NotebooksImpl();
      const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages, notebooks];
      function asPromise(value) {
        if (value instanceof Promise) {
          return value;
        } else if (Is2.thenable(value)) {
          return new Promise((resolve, reject) => {
            value.then((resolved) => resolve(resolved), (error) => reject(error));
          });
        } else {
          return Promise.resolve(value);
        }
      }
      let shutdownHandler = void 0;
      let initializeHandler = void 0;
      let exitHandler = void 0;
      const protocolConnection = {
        listen: () => connection2.listen(),
        sendRequest: (type, ...params) => connection2.sendRequest(Is2.string(type) ? type : type.method, ...params),
        onRequest: (type, handler) => connection2.onRequest(type, handler),
        sendNotification: (type, param) => {
          const method = Is2.string(type) ? type : type.method;
          return connection2.sendNotification(method, param);
        },
        onNotification: (type, handler) => connection2.onNotification(type, handler),
        onProgress: connection2.onProgress,
        sendProgress: connection2.sendProgress,
        onInitialize: (handler) => {
          initializeHandler = handler;
          return {
            dispose: () => {
              initializeHandler = void 0;
            }
          };
        },
        onInitialized: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
        onShutdown: (handler) => {
          shutdownHandler = handler;
          return {
            dispose: () => {
              shutdownHandler = void 0;
            }
          };
        },
        onExit: (handler) => {
          exitHandler = handler;
          return {
            dispose: () => {
              exitHandler = void 0;
            }
          };
        },
        get console() {
          return logger;
        },
        get telemetry() {
          return telemetry;
        },
        get tracer() {
          return tracer;
        },
        get client() {
          return client;
        },
        get window() {
          return remoteWindow;
        },
        get workspace() {
          return workspace;
        },
        get languages() {
          return languages;
        },
        get notebooks() {
          return notebooks;
        },
        onDidChangeConfiguration: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
        onDidChangeWatchedFiles: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
        __textDocumentSync: void 0,
        onDidOpenTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
        onDidChangeTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
        onDidCloseTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
        onWillSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
        onWillSaveTextDocumentWaitUntil: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
        onDidSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
        sendDiagnostics: (params) => connection2.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
        onHover: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onCompletion: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCompletionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
        onSignatureHelp: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDeclaration: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onTypeDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onImplementation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onReferences: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentHighlight: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbolResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
        onCodeAction: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeActionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onCodeLens: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeLensResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentRangeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentOnTypeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onRenameRequest: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onPrepareRename: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentLinks: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentLinkResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentColor: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onColorPresentation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onFoldingRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onSelectionRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onExecuteCommand: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        dispose: () => connection2.dispose()
      };
      for (const remote of allRemotes) {
        remote.attach(protocolConnection);
      }
      connection2.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
        watchDog.initialize(params);
        if (Is2.string(params.trace)) {
          tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
        }
        for (const remote of allRemotes) {
          remote.initialize(params.capabilities);
        }
        if (initializeHandler) {
          const result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection2, params), void 0);
          return asPromise(result).then((value) => {
            if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
              return value;
            }
            let result2 = value;
            if (!result2) {
              result2 = { capabilities: {} };
            }
            let capabilities = result2.capabilities;
            if (!capabilities) {
              capabilities = {};
              result2.capabilities = capabilities;
            }
            if (capabilities.textDocumentSync === void 0 || capabilities.textDocumentSync === null) {
              capabilities.textDocumentSync = Is2.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            } else if (!Is2.number(capabilities.textDocumentSync) && !Is2.number(capabilities.textDocumentSync.change)) {
              capabilities.textDocumentSync.change = Is2.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            }
            for (const remote of allRemotes) {
              remote.fillServerCapabilities(capabilities);
            }
            return result2;
          });
        } else {
          const result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
          for (const remote of allRemotes) {
            remote.fillServerCapabilities(result.capabilities);
          }
          return result;
        }
      });
      connection2.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
        watchDog.shutdownReceived = true;
        if (shutdownHandler) {
          return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
        } else {
          return void 0;
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
        try {
          if (exitHandler) {
            return exitHandler();
          }
        } finally {
          if (watchDog.shutdownReceived) {
            watchDog.exit(0);
          } else {
            watchDog.exit(1);
          }
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
        tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
      });
      return protocolConnection;
    }
  }
});

// server/node_modules/vscode-languageserver/lib/node/files.js
var require_files = __commonJS({
  "server/node_modules/vscode-languageserver/lib/node/files.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FileSystem = void 0;
    exports2.uriToFilePath = uriToFilePath;
    exports2.resolve = resolve;
    exports2.resolveGlobalNodePath = resolveGlobalNodePath;
    exports2.resolveGlobalYarnPath = resolveGlobalYarnPath;
    exports2.resolveModulePath = resolveModulePath;
    var url = __importStar2(require("url"));
    var path2 = __importStar2(require("path"));
    var fs2 = __importStar2(require("fs"));
    var child_process_1 = require("child_process");
    function uriToFilePath(uri) {
      const parsed = url.parse(uri);
      if (parsed.protocol !== "file:" || !parsed.path) {
        return void 0;
      }
      const segments = parsed.path.split("/");
      for (let i = 0, len = segments.length; i < len; i++) {
        segments[i] = decodeURIComponent(segments[i]);
      }
      if (process.platform === "win32" && segments.length > 1) {
        const first = segments[0];
        const second = segments[1];
        if (first.length === 0 && second.length > 1 && second[1] === ":") {
          segments.shift();
        }
      }
      return path2.normalize(segments.join("/"));
    }
    function isWindows() {
      return process.platform === "win32";
    }
    function resolve(moduleName, nodePath, cwd, tracer) {
      const nodePathKey = "NODE_PATH";
      const app = [
        "var p = process;",
        "p.on('message',function(m){",
        "if(m.c==='e'){",
        "p.exit(0);",
        "}",
        "else if(m.c==='rs'){",
        "try{",
        "var r=require.resolve(m.a);",
        "p.send({c:'r',s:true,r:r});",
        "}",
        "catch(err){",
        "p.send({c:'r',s:false});",
        "}",
        "}",
        "});"
      ].join("");
      return new Promise((resolve2, reject) => {
        const env = process.env;
        const newEnv = /* @__PURE__ */ Object.create(null);
        Object.keys(env).forEach((key) => newEnv[key] = env[key]);
        if (nodePath && fs2.existsSync(nodePath)) {
          if (newEnv[nodePathKey]) {
            newEnv[nodePathKey] = nodePath + path2.delimiter + newEnv[nodePathKey];
          } else {
            newEnv[nodePathKey] = nodePath;
          }
          if (tracer) {
            tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
          }
        }
        newEnv["ELECTRON_RUN_AS_NODE"] = "1";
        try {
          const cp = (0, child_process_1.fork)("", [], {
            cwd,
            env: newEnv,
            execArgv: ["-e", app]
          });
          if (cp.pid === void 0) {
            reject(new Error(`Starting process to resolve node module  ${moduleName} failed`));
            return;
          }
          cp.on("error", (error) => {
            reject(error);
          });
          cp.on("message", (message2) => {
            if (message2.c === "r") {
              cp.send({ c: "e" });
              if (message2.s) {
                resolve2(message2.r);
              } else {
                reject(new Error(`Failed to resolve module: ${moduleName}`));
              }
            }
          });
          const message = {
            c: "rs",
            a: moduleName
          };
          cp.send(message);
        } catch (error) {
          reject(error);
        }
      });
    }
    function resolveGlobalNodePath(tracer) {
      let npmCommand = "npm";
      const env = /* @__PURE__ */ Object.create(null);
      Object.keys(process.env).forEach((key) => env[key] = process.env[key]);
      env["NO_UPDATE_NOTIFIER"] = "true";
      const options = {
        encoding: "utf8",
        env
      };
      if (isWindows()) {
        npmCommand = "npm.cmd";
        options.shell = true;
      }
      const handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        const stdout = (0, child_process_1.spawnSync)(npmCommand, ["config", "get", "prefix"], options).stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'npm config get prefix' didn't return a value.`);
          }
          return void 0;
        }
        const prefix = stdout.trim();
        if (tracer) {
          tracer(`'npm config get prefix' value is: ${prefix}`);
        }
        if (prefix.length > 0) {
          if (isWindows()) {
            return path2.join(prefix, "node_modules");
          } else {
            return path2.join(prefix, "lib", "node_modules");
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    function resolveGlobalYarnPath(tracer) {
      let yarnCommand = "yarn";
      const options = {
        encoding: "utf8"
      };
      if (isWindows()) {
        yarnCommand = "yarn.cmd";
        options.shell = true;
      }
      const handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        const results = (0, child_process_1.spawnSync)(yarnCommand, ["global", "dir", "--json"], options);
        const stdout = results.stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'yarn global dir' didn't return a value.`);
            if (results.stderr) {
              tracer(results.stderr);
            }
          }
          return void 0;
        }
        const lines = stdout.trim().split(/\r?\n/);
        for (const line of lines) {
          try {
            const yarn = JSON.parse(line);
            if (yarn.type === "log") {
              return path2.join(yarn.data, "node_modules");
            }
          } catch (e) {
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    var FileSystem;
    (function(FileSystem2) {
      let _isCaseSensitive = void 0;
      function isCaseSensitive() {
        if (_isCaseSensitive !== void 0) {
          return _isCaseSensitive;
        }
        if (process.platform === "win32") {
          _isCaseSensitive = false;
        } else {
          _isCaseSensitive = !fs2.existsSync(__filename.toUpperCase()) || !fs2.existsSync(__filename.toLowerCase());
        }
        return _isCaseSensitive;
      }
      FileSystem2.isCaseSensitive = isCaseSensitive;
      function isParent(parent, child) {
        if (isCaseSensitive()) {
          return path2.normalize(child).indexOf(path2.normalize(parent)) === 0;
        } else {
          return path2.normalize(child).toLowerCase().indexOf(path2.normalize(parent).toLowerCase()) === 0;
        }
      }
      FileSystem2.isParent = isParent;
    })(FileSystem || (exports2.FileSystem = FileSystem = {}));
    function resolveModulePath(workspaceRoot2, moduleName, nodePath, tracer) {
      if (nodePath) {
        if (!path2.isAbsolute(nodePath)) {
          nodePath = path2.join(workspaceRoot2, nodePath);
        }
        return resolve(moduleName, nodePath, nodePath, tracer).then((value) => {
          if (FileSystem.isParent(nodePath, value)) {
            return value;
          } else {
            return Promise.reject(new Error(`Failed to load ${moduleName} from node path location.`));
          }
        }).then(void 0, (_error) => {
          return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot2, tracer);
        });
      } else {
        return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot2, tracer);
      }
    }
  }
});

// server/node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/node/ril.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util_1 = require("util");
    var api_1 = require_api();
    var MessageBuffer = class _MessageBuffer extends api_1.AbstractMessageBuffer {
      static emptyBuffer = Buffer.allocUnsafe(0);
      constructor(encoding = "utf-8") {
        super(encoding);
      }
      emptyBuffer() {
        return _MessageBuffer.emptyBuffer;
      }
      fromString(value, encoding) {
        return Buffer.from(value, encoding);
      }
      toString(value, encoding) {
        if (value instanceof Buffer) {
          return value.toString(encoding);
        } else {
          return new util_1.TextDecoder(encoding).decode(value);
        }
      }
      asNative(buffer, length) {
        if (length === void 0) {
          return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        } else {
          return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
      }
      allocNative(length) {
        return Buffer.allocUnsafe(length);
      }
    };
    var ReadableStreamWrapper = class {
      stream;
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      onData(listener) {
        this.stream.on("data", listener);
        return api_1.Disposable.create(() => this.stream.off("data", listener));
      }
    };
    var WritableStreamWrapper = class {
      stream;
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      write(data, encoding) {
        return new Promise((resolve, reject) => {
          const callback = (error) => {
            if (error === void 0 || error === null) {
              resolve();
            } else {
              reject(error);
            }
          };
          if (typeof data === "string") {
            this.stream.write(data, encoding, callback);
          } else {
            this.stream.write(data, callback);
          }
        });
      }
      end() {
        this.stream.end();
      }
    };
    var _ril = Object.freeze({
      messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (msg, options) => {
            try {
              return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options.charset));
            } catch (err) {
              return Promise.reject(err);
            }
          }
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (buffer, options) => {
            try {
              if (buffer instanceof Buffer) {
                return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
              } else {
                return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
              }
            } catch (err) {
              return Promise.reject(err);
            }
          }
        })
      }),
      stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
      }),
      console,
      timer: Object.freeze({
        setTimeout(callback, ms, ...args) {
          const handle = setTimeout(callback, ms, ...args);
          return { dispose: () => clearTimeout(handle) };
        },
        setImmediate(callback, ...args) {
          const handle = setImmediate(callback, ...args);
          return { dispose: () => clearImmediate(handle) };
        },
        setInterval(callback, ms, ...args) {
          const handle = setInterval(callback, ms, ...args);
          return { dispose: () => clearInterval(handle) };
        }
      })
    });
    function RIL() {
      return _ril;
    }
    (function(RIL2) {
      function install() {
        api_1.RAL.install(_ril);
      }
      RIL2.install = install;
    })(RIL || (RIL = {}));
    exports2.default = RIL;
  }
});

// server/node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS({
  "server/node_modules/vscode-jsonrpc/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamMessageWriter = exports2.StreamMessageReader = exports2.SocketMessageWriter = exports2.SocketMessageReader = exports2.PortMessageWriter = exports2.PortMessageReader = exports2.IPCMessageWriter = exports2.IPCMessageReader = void 0;
    exports2.generateRandomPipeName = generateRandomPipeName;
    exports2.createClientPipeTransport = createClientPipeTransport;
    exports2.createServerPipeTransport = createServerPipeTransport;
    exports2.createClientSocketTransport = createClientSocketTransport;
    exports2.createServerSocketTransport = createServerSocketTransport;
    exports2.createMessageConnection = createMessageConnection;
    var ril_1 = __importDefault(require_ril());
    ril_1.default.install();
    var path2 = __importStar2(require("path"));
    var os = __importStar2(require("os"));
    var fs2 = __importStar2(require("fs"));
    var crypto_1 = require("crypto");
    var net_1 = require("net");
    var api_1 = require_api();
    __exportStar(require_api(), exports2);
    var IPCMessageReader = class extends api_1.AbstractMessageReader {
      process;
      constructor(process2) {
        super();
        this.process = process2;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      listen(callback) {
        this.process.on("message", callback);
        return api_1.Disposable.create(() => this.process.off("message", callback));
      }
    };
    exports2.IPCMessageReader = IPCMessageReader;
    var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
      process;
      errorCount;
      constructor(process2) {
        super();
        this.process = process2;
        this.errorCount = 0;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose);
      }
      write(msg) {
        try {
          if (typeof this.process.send === "function") {
            this.process.send(msg, void 0, void 0, (error) => {
              if (error) {
                this.errorCount++;
                this.handleError(error, msg);
              } else {
                this.errorCount = 0;
              }
            });
          }
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.IPCMessageWriter = IPCMessageWriter;
    var PortMessageReader = class extends api_1.AbstractMessageReader {
      onData;
      constructor(port) {
        super();
        this.onData = new api_1.Emitter();
        port.on("close", () => this.fireClose);
        port.on("error", (error) => this.fireError(error));
        port.on("message", (message) => {
          this.onData.fire(message);
        });
      }
      listen(callback) {
        return this.onData.event(callback);
      }
    };
    exports2.PortMessageReader = PortMessageReader;
    var PortMessageWriter = class extends api_1.AbstractMessageWriter {
      port;
      errorCount;
      constructor(port) {
        super();
        this.port = port;
        this.errorCount = 0;
        port.on("close", () => this.fireClose());
        port.on("error", (error) => this.fireError(error));
      }
      write(msg) {
        try {
          this.port.postMessage(msg);
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.PortMessageWriter = PortMessageWriter;
    var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(socket, encoding = "utf-8") {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
      }
    };
    exports2.SocketMessageReader = SocketMessageReader;
    var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      socket;
      constructor(socket, options) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options);
        this.socket = socket;
      }
      dispose() {
        super.dispose();
        this.socket.destroy();
      }
    };
    exports2.SocketMessageWriter = SocketMessageWriter;
    var StreamMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(readable, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
      }
    };
    exports2.StreamMessageReader = StreamMessageReader;
    var StreamMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(writable, options) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options);
      }
    };
    exports2.StreamMessageWriter = StreamMessageWriter;
    var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    var safeIpcPathLengths = /* @__PURE__ */ new Map([
      ["linux", 107],
      ["darwin", 103]
    ]);
    function generateRandomPipeName() {
      if (process.platform === "win32") {
        return `\\\\.\\pipe\\lsp-${(0, crypto_1.randomBytes)(16).toString("hex")}-sock`;
      }
      let randomLength = 32;
      const fixedLength = "/lsp-.sock".length;
      const tmpDir = fs2.realpathSync(XDG_RUNTIME_DIR ?? os.tmpdir());
      const limit = safeIpcPathLengths.get(process.platform);
      if (limit !== void 0) {
        randomLength = Math.min(limit - tmpDir.length - fixedLength, randomLength);
      }
      if (randomLength < 16) {
        throw new Error(`Unable to generate a random pipe name with ${randomLength} characters.`);
      }
      const randomSuffix = (0, crypto_1.randomBytes)(Math.floor(randomLength / 2)).toString("hex");
      return path2.join(tmpDir, `lsp-${randomSuffix}.sock`);
    }
    function createClientPipeTransport(pipeName, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(pipeName, () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    function createServerPipeTransport(pipeName, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(pipeName);
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    function createClientSocketTransport(port, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(port, "127.0.0.1", () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    function createServerSocketTransport(port, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(port, "127.0.0.1");
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    function isReadableStream(value) {
      const candidate = value;
      return candidate.read !== void 0 && candidate.addListener !== void 0;
    }
    function isWritableStream(value) {
      const candidate = value;
      return candidate.write !== void 0 && candidate.addListener !== void 0;
    }
    function createMessageConnection(input, output, logger, options) {
      if (!logger) {
        logger = api_1.NullLogger;
      }
      const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
      const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
      if (api_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, api_1.createMessageConnection)(reader, writer, logger, options);
    }
  }
});

// server/node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main2 = __commonJS({
  "server/node_modules/vscode-languageserver-protocol/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = createProtocolConnection;
    var node_12 = require_main();
    __exportStar(require_main(), exports2);
    __exportStar(require_api2(), exports2);
    function createProtocolConnection(input, output, logger, options) {
      return (0, node_12.createMessageConnection)(input, output, logger, options);
    }
  }
});

// server/node_modules/vscode-languageserver/lib/common/api.js
var require_api3 = __commonJS({
  "server/node_modules/vscode-languageserver/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProposedFeatures = exports2.NotebookDocuments = exports2.TextDocuments = exports2.SemanticTokensBuilder = void 0;
    var semanticTokens_1 = require_semanticTokens();
    Object.defineProperty(exports2, "SemanticTokensBuilder", { enumerable: true, get: function() {
      return semanticTokens_1.SemanticTokensBuilder;
    } });
    __exportStar(require_api2(), exports2);
    var textDocuments_1 = require_textDocuments();
    Object.defineProperty(exports2, "TextDocuments", { enumerable: true, get: function() {
      return textDocuments_1.TextDocuments;
    } });
    var notebook_1 = require_notebook();
    Object.defineProperty(exports2, "NotebookDocuments", { enumerable: true, get: function() {
      return notebook_1.NotebookDocuments;
    } });
    __exportStar(require_server(), exports2);
    var ProposedFeatures;
    (function(ProposedFeatures2) {
      ProposedFeatures2.all = {
        __brand: "features"
      };
    })(ProposedFeatures || (exports2.ProposedFeatures = ProposedFeatures = {}));
  }
});

// server/node_modules/vscode-languageserver/lib/node/main.js
var require_main3 = __commonJS({
  "server/node_modules/vscode-languageserver/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Files = void 0;
    exports2.createConnection = createConnection;
    var node_util_1 = require("node:util");
    var Is2 = __importStar2(require_is());
    var server_1 = require_server();
    var fm = __importStar2(require_files());
    var node_12 = require_main2();
    __exportStar(require_main2(), exports2);
    __exportStar(require_api3(), exports2);
    var Files;
    (function(Files2) {
      Files2.uriToFilePath = fm.uriToFilePath;
      Files2.resolveGlobalNodePath = fm.resolveGlobalNodePath;
      Files2.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
      Files2.resolve = fm.resolve;
      Files2.resolveModulePath = fm.resolveModulePath;
    })(Files || (exports2.Files = Files = {}));
    var _protocolConnection;
    function endProtocolConnection() {
      if (_protocolConnection === void 0) {
        return;
      }
      try {
        _protocolConnection.end();
      } catch (_err) {
      }
    }
    var _shutdownReceived = false;
    var exitTimer = void 0;
    function setupExitTimer() {
      const argName = "--clientProcessId";
      function runTimer(value) {
        try {
          const processId = parseInt(value);
          if (!isNaN(processId)) {
            exitTimer = setInterval(() => {
              try {
                process.kill(processId, 0);
              } catch (ex) {
                endProtocolConnection();
                process.exit(_shutdownReceived ? 0 : 1);
              }
            }, 3e3);
          }
        } catch (e) {
        }
      }
      for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i];
        if (arg === argName && i + 1 < process.argv.length) {
          runTimer(process.argv[i + 1]);
          return;
        } else {
          const args = arg.split("=");
          if (args[0] === argName) {
            runTimer(args[1]);
          }
        }
      }
    }
    setupExitTimer();
    var watchDog = {
      initialize: (params) => {
        const processId = params.processId;
        if (Is2.number(processId) && exitTimer === void 0) {
          setInterval(() => {
            try {
              process.kill(processId, 0);
            } catch (ex) {
              process.exit(_shutdownReceived ? 0 : 1);
            }
          }, 3e3);
        }
      },
      get shutdownReceived() {
        return _shutdownReceived;
      },
      set shutdownReceived(value) {
        _shutdownReceived = value;
      },
      exit: (code) => {
        endProtocolConnection();
        process.exit(code);
      }
    };
    function createConnection(arg1, arg2, arg3, arg4) {
      let factories;
      let input;
      let output;
      let options;
      if (arg1 !== void 0 && arg1.__brand === "features") {
        factories = arg1;
        arg1 = arg2;
        arg2 = arg3;
        arg3 = arg4;
      }
      if (node_12.ConnectionStrategy.is(arg1) || node_12.ConnectionOptions.is(arg1)) {
        options = arg1;
      } else {
        input = arg1;
        output = arg2;
        options = arg3;
      }
      return _createConnection(input, output, options, factories);
    }
    function _createConnection(input, output, options, factories) {
      let stdio = false;
      if (!input && !output && process.argv.length > 2) {
        let port = void 0;
        let pipeName = void 0;
        const argv = process.argv.slice(2);
        for (let i = 0; i < argv.length; i++) {
          const arg = argv[i];
          if (arg === "--node-ipc") {
            input = new node_12.IPCMessageReader(process);
            output = new node_12.IPCMessageWriter(process);
            break;
          } else if (arg === "--stdio") {
            stdio = true;
            input = process.stdin;
            output = process.stdout;
            break;
          } else if (arg === "--socket") {
            port = parseInt(argv[i + 1]);
            break;
          } else if (arg === "--pipe") {
            pipeName = argv[i + 1];
            break;
          } else {
            const args = arg.split("=");
            if (args[0] === "--socket") {
              port = parseInt(args[1]);
              break;
            } else if (args[0] === "--pipe") {
              pipeName = args[1];
              break;
            }
          }
        }
        if (port) {
          const transport = (0, node_12.createServerSocketTransport)(port);
          input = transport[0];
          output = transport[1];
        } else if (pipeName) {
          const transport = (0, node_12.createServerPipeTransport)(pipeName);
          input = transport[0];
          output = transport[1];
        }
      }
      const commandLineMessage = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
      if (!input) {
        throw new Error("Connection input stream is not set. " + commandLineMessage);
      }
      if (!output) {
        throw new Error("Connection output stream is not set. " + commandLineMessage);
      }
      if (Is2.func(input.read) && Is2.func(input.on)) {
        const inputStream = input;
        inputStream.on("end", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
        inputStream.on("close", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
      }
      const connectionFactory = (logger) => {
        const result = (0, node_12.createProtocolConnection)(input, output, logger, options);
        if (stdio) {
          patchConsole(logger);
        }
        return result;
      };
      return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
    }
    function patchConsole(logger) {
      function serialize(args) {
        return args.map((arg) => typeof arg === "string" ? arg : (0, node_util_1.inspect)(arg)).join(" ");
      }
      const counters = /* @__PURE__ */ new Map();
      console.assert = function assert(assertion, ...args) {
        if (assertion) {
          return;
        }
        if (args.length === 0) {
          logger.error("Assertion failed");
        } else {
          const [message, ...rest] = args;
          logger.error(`Assertion failed: ${message} ${serialize(rest)}`);
        }
      };
      console.count = function count(label = "default") {
        const message = String(label);
        let counter = counters.get(message) ?? 0;
        counter += 1;
        counters.set(message, counter);
        logger.log(`${message}: ${message}`);
      };
      console.countReset = function countReset(label) {
        if (label === void 0) {
          counters.clear();
        } else {
          counters.delete(String(label));
        }
      };
      console.debug = function debug(...args) {
        logger.log(serialize(args));
      };
      console.dir = function dir(arg, options) {
        logger.log((0, node_util_1.inspect)(arg, options));
      };
      console.log = function log(...args) {
        logger.log(serialize(args));
      };
      console.error = function error(...args) {
        logger.error(serialize(args));
      };
      console.trace = function trace(...args) {
        const stack = new Error().stack.replace(/(.+\n){2}/, "");
        let message = "Trace";
        if (args.length !== 0) {
          message += `: ${serialize(args)}`;
        }
        logger.log(`${message}
${stack}`);
      };
      console.warn = function warn(...args) {
        logger.warn(serialize(args));
      };
    }
  }
});

// server/node_modules/vscode-languageserver-textdocument/lib/esm/main.js
var main_exports2 = {};
__export(main_exports2, {
  TextDocument: () => TextDocument2
});
function mergeSort(data, compare) {
  if (data.length <= 1) {
    return data;
  }
  const p = data.length / 2 | 0;
  const left = data.slice(0, p);
  const right = data.slice(p);
  mergeSort(left, compare);
  mergeSort(right, compare);
  let leftIdx = 0;
  let rightIdx = 0;
  let i = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    const ret = compare(left[leftIdx], right[rightIdx]);
    if (ret <= 0) {
      data[i++] = left[leftIdx++];
    } else {
      data[i++] = right[rightIdx++];
    }
  }
  while (leftIdx < left.length) {
    data[i++] = left[leftIdx++];
  }
  while (rightIdx < right.length) {
    data[i++] = right[rightIdx++];
  }
  return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
  const result = isAtLineStart ? [textOffset] : [];
  for (let i = 0; i < text.length; i++) {
    const ch = text.charCodeAt(i);
    if (isEOL(ch)) {
      if (ch === 13 && i + 1 < text.length && text.charCodeAt(i + 1) === 10) {
        i++;
      }
      result.push(textOffset + i + 1);
    }
  }
  return result;
}
function isEOL(char) {
  return char === 13 || char === 10;
}
function getWellformedRange(range) {
  const start = range.start;
  const end = range.end;
  if (start.line > end.line || start.line === end.line && start.character > end.character) {
    return { start: end, end: start };
  }
  return range;
}
function getWellformedEdit(textEdit) {
  const range = getWellformedRange(textEdit.range);
  if (range !== textEdit.range) {
    return { newText: textEdit.newText, range };
  }
  return textEdit;
}
var FullTextDocument2, TextDocument2;
var init_main2 = __esm({
  "server/node_modules/vscode-languageserver-textdocument/lib/esm/main.js"() {
    "use strict";
    FullTextDocument2 = class _FullTextDocument {
      constructor(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(range) {
        if (range) {
          const start = this.offsetAt(range.start);
          const end = this.offsetAt(range.end);
          return this._content.substring(start, end);
        }
        return this._content;
      }
      update(changes, version) {
        for (const change of changes) {
          if (_FullTextDocument.isIncremental(change)) {
            const range = getWellformedRange(change.range);
            const startOffset = this.offsetAt(range.start);
            const endOffset = this.offsetAt(range.end);
            this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
            const startLine = Math.max(range.start.line, 0);
            const endLine = Math.max(range.end.line, 0);
            let lineOffsets = this._lineOffsets;
            const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
            if (endLine - startLine === addedLineOffsets.length) {
              for (let i = 0, len = addedLineOffsets.length; i < len; i++) {
                lineOffsets[i + startLine + 1] = addedLineOffsets[i];
              }
            } else {
              if (addedLineOffsets.length < 1e4) {
                lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
              } else {
                this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
              }
            }
            const diff = change.text.length - (endOffset - startOffset);
            if (diff !== 0) {
              for (let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
                lineOffsets[i] = lineOffsets[i] + diff;
              }
            }
          } else if (_FullTextDocument.isFull(change)) {
            this._content = change.text;
            this._lineOffsets = void 0;
          } else {
            throw new Error("Unknown change event received");
          }
        }
        this._version = version;
      }
      getLineOffsets() {
        if (this._lineOffsets === void 0) {
          this._lineOffsets = computeLineOffsets(this._content, true);
        }
        return this._lineOffsets;
      }
      positionAt(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        const lineOffsets = this.getLineOffsets();
        let low = 0, high = lineOffsets.length;
        if (high === 0) {
          return { line: 0, character: offset };
        }
        while (low < high) {
          const mid = Math.floor((low + high) / 2);
          if (lineOffsets[mid] > offset) {
            high = mid;
          } else {
            low = mid + 1;
          }
        }
        const line = low - 1;
        offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
        return { line, character: offset - lineOffsets[line] };
      }
      offsetAt(position) {
        const lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
          return this._content.length;
        } else if (position.line < 0) {
          return 0;
        }
        const lineOffset = lineOffsets[position.line];
        if (position.character <= 0) {
          return lineOffset;
        }
        const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        const offset = Math.min(lineOffset + position.character, nextLineOffset);
        return this.ensureBeforeEOL(offset, lineOffset);
      }
      ensureBeforeEOL(offset, lineOffset) {
        while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
          offset--;
        }
        return offset;
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
      static isIncremental(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      static isFull(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
    };
    (function(TextDocument3) {
      function create(uri, languageId, version, content) {
        return new FullTextDocument2(uri, languageId, version, content);
      }
      TextDocument3.create = create;
      function update(document, changes, version) {
        if (document instanceof FullTextDocument2) {
          document.update(changes, version);
          return document;
        } else {
          throw new Error("TextDocument.update: document must be created by TextDocument.create");
        }
      }
      TextDocument3.update = update;
      function applyEdits(document, edits) {
        const text = document.getText();
        const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a, b) => {
          const diff = a.range.start.line - b.range.start.line;
          if (diff === 0) {
            return a.range.start.character - b.range.start.character;
          }
          return diff;
        });
        let lastModifiedOffset = 0;
        const spans = [];
        for (const e of sortedEdits) {
          const startOffset = document.offsetAt(e.range.start);
          if (startOffset < lastModifiedOffset) {
            throw new Error("Overlapping edit");
          } else if (startOffset > lastModifiedOffset) {
            spans.push(text.substring(lastModifiedOffset, startOffset));
          }
          if (e.newText.length) {
            spans.push(e.newText);
          }
          lastModifiedOffset = document.offsetAt(e.range.end);
        }
        spans.push(text.substr(lastModifiedOffset));
        return spans.join("");
      }
      TextDocument3.applyEdits = applyEdits;
    })(TextDocument2 || (TextDocument2 = {}));
  }
});

// server/node_modules/meriyah/dist/meriyah.cjs
var require_meriyah = __commonJS({
  "server/node_modules/meriyah/dist/meriyah.cjs"(exports2) {
    "use strict";
    var unicodeLookup = ((compressed, lookup) => {
      const result = new Uint32Array(69632);
      let index = 0;
      let subIndex = 0;
      while (index < 2571) {
        const inst = compressed[index++];
        if (inst < 0) {
          subIndex -= inst;
        } else {
          let code = compressed[index++];
          if (inst & 2)
            code = lookup[code];
          if (inst & 1) {
            result.fill(code, subIndex, subIndex += compressed[index++]);
          } else {
            result[subIndex++] = code;
          }
        }
      }
      return result;
    })([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 63, 2, 64, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 65, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 66, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 18, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 60, 2, 7, 2, 6, 0, 4286611199, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 0, 65472, 2, 3, 0, 4093640191, 0, 660618719, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1616920031, 0, 982991, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 71, 0, 4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 72, 0, 1073741743, 0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 10, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0, 2, 2, 80, 0, 2151677951, 2, 29, 2, 9, 0, 909311, 3, 0, 2, 0, 814743551, 2, 49, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0, 268374015, 2, 110, 2, 51, 2, 0, 2, 81, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 17, -1, 3, 0, 2, 2, 53, 0, 1046528, 3, 0, 3, 2, 9, 2, 0, 2, 54, 0, 4294960127, 2, 10, 2, 6, 2, 11, 0, 4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 82, 2, 10, 2, 0, 2, 83, 2, 84, 2, 85, 0, 12288, 2, 55, 0, 1048577, 2, 86, 2, 14, -1, 2, 14, 0, 131042, 2, 87, 2, 88, 2, 89, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671, 2, 21, 3, 90, 2, 2, 0, -16, 2, 91, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 73, -1, 2, 18, 2, 10, 3, 0, 8, 2, 93, 2, 133, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 94, 2, 95, 3, 0, 2, 2, 96, 2, 0, 2, 97, 2, 46, 2, 0, 0, 4351, 2, 0, 2, 9, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 9, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 101, 2, 102, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 103, 2, 104, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 105, 2, 106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 47, 2, 0, 2, 31, 2, 108, 2, 25, 0, 1638399, 0, 57344, 2, 109, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28, 2, 0, 2, 8, 2, 111, -1, 2, 112, 2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 0, 536870912, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 67, 2, 6, 2, 12, 2, 10, 2, 0, 2, 115, -1, 3, 0, 4, 2, 10, 2, 23, 2, 116, 2, 7, 2, 0, 2, 117, 2, 0, 2, 118, 2, 119, 2, 120, 2, 0, 2, 9, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2, 2, 123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2, 30, 2, 32, -2, 2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 48, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 57, 0, 4026531840, 2, 20, 2, 43, 2, 36, 2, 18, 2, 37, 2, 18, 2, 126, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 144, 2, 0, 2, 58, 2, 56, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 61, 2, 38, -5, 2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 134, 0, 4190109695, 2, 52, -2, 2, 135, 0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 68, 2, 18, 2, 0, 2, 42, -6, 2, 0, 2, 45, 2, 59, 2, 44, 2, 45, 2, 46, 2, 47, 0, 8388351, -2, 2, 136, 0, 3028287487, 2, 48, 2, 138, 0, 33259519, 2, 49, -9, 2, 21, 0, 4294836223, 0, 3355443199, 0, 134152199, -2, 2, 69, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -4, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 196635, 3, 0, 191, 2, 54, 3, 0, 38, 2, 30, 2, 55, 2, 34, -278, 2, 140, 3, 0, 9, 2, 141, 2, 142, 2, 56, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 143, 0, 1677656575, -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 0, 15360, -4, 2, 57, -13, 3, 0, 2, 2, 58, 2, 0, 2, 145, 2, 146, 2, 62, 2, 0, 2, 147, 2, 148, 2, 149, 3, 0, 10, 2, 150, 2, 151, 2, 22, 3, 58, 2, 3, 152, 2, 3, 59, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 92, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -34, 2, 8, 2, 154, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 60, 2, 100, -3, 2, 0, 0, 1073684479, 0, 17407, -9, 2, 18, 2, 17, 2, 0, 2, 32, -14, 2, 18, 2, 32, -6, 2, 18, 2, 12, -15, 2, 155, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 61, -37, 2, 62, 2, 156, 2, 157, 2, 158, 2, 159, 2, 160, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 129, 2, 32, 3, 0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0, 233, 2, 162, 3, 0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -22250, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 63, 2, 64, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 65, 2, 0, 2, 34, -1, 2, 18, 2, 66, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 67, 3, 0, 2, 0, 131135, 2, 98, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 32511, 2, 0, 2, 49, -1, 2, 99, 2, 68, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 70, 2, 69, 0, 33554435, 2, 131, 2, 70, 0, 2952790016, 0, 131075, 0, 3594373096, 0, 67094296, 2, 69, -1, 0, 4294828e3, 0, 603979263, 0, 654311424, 0, 3, 0, 4294828001, 0, 602930687, 0, 1610612736, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 71, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 72, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 73, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0, 2, 2, 80, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 9, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 18, 2, 51, 2, 0, 2, 81, 2, 49, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 9, 0, 8160, -1, 2, 127, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 0, 4227915776, 2, 10, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 82, 2, 10, 2, 0, 2, 83, 2, 84, 2, 85, -3, 2, 86, 2, 14, -3, 2, 87, 2, 88, 2, 89, 2, 0, 2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 90, 2, -17, 2, 91, 0, 524157950, 2, 4, 2, 0, 2, 92, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0, 2, 2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 73, -1, 2, 18, 2, 10, 3, 0, 8, 2, 93, 0, 3072, 2, 0, 0, 2147516415, 2, 10, 3, 0, 2, 2, 25, 2, 94, 2, 95, 3, 0, 2, 2, 96, 2, 0, 2, 97, 2, 46, 0, 4294965179, 0, 7, 2, 0, 2, 9, 2, 95, 2, 9, -1, 0, 1761345536, 2, 98, 0, 4294901823, 2, 38, 2, 20, 2, 99, 2, 35, 2, 100, 0, 2080440287, 2, 0, 2, 34, 2, 153, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 101, 2, 102, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2, 103, 2, 104, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2, 105, 2, 106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 47, 2, 0, 2, 31, 2, 108, -3, 2, 109, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 110, 2, 0, 2, 8, 2, 111, -1, 2, 112, 2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 67, 2, 6, 2, 30, 2, 10, 2, 0, 2, 115, -1, 3, 0, 4, 2, 10, 2, 18, 2, 116, 2, 7, 2, 0, 2, 117, 2, 0, 2, 118, 2, 119, 2, 120, 2, 0, 2, 9, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2, 2, 123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2, 30, 2, 32, -2, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 126, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 98, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2, 57, -1, 2, 20, 2, 43, 2, 37, 2, 18, 0, 3, 2, 18, 2, 126, 2, 21, 2, 127, 2, 54, -1, 0, 2490368, 2, 127, 2, 25, 2, 18, 2, 34, 2, 127, 2, 38, 0, 4294901904, 0, 4718591, 2, 127, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 70, 0, 3758161920, 0, 3, 2, 132, 0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176, -5, 2, 0, 2, 17, 0, 251658240, -1, 2, 0, 2, 25, 0, 16, -1, 2, 0, 0, 16779263, -2, 2, 12, -1, 2, 38, -5, 2, 0, 2, 133, -3, 3, 0, 2, 2, 55, 2, 134, 0, 2147549183, 0, 2, -2, 2, 135, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 18, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 59, 2, 17, 0, 1, 2, 46, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, -10, 2, 35, 0, 4294836212, 2, 9, -3, 2, 69, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 10, -55, 3, 0, 17, 2, 42, 2, 8, 2, 18, 2, 0, 2, 8, 2, 18, 2, 60, 2, 0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 73, -6, 3, 0, 2, -4, 3, 0, 2, 0, 67583, -1, 2, 107, -2, 0, 11, 3, 0, 191, 2, 54, 3, 0, 38, 2, 30, 2, 55, 2, 34, -278, 2, 140, 3, 0, 9, 2, 141, 2, 142, 2, 56, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 143, 2, 144, -187, 3, 0, 2, 2, 58, 2, 0, 2, 145, 2, 146, 2, 62, 2, 0, 2, 147, 2, 148, 2, 149, 3, 0, 10, 2, 150, 2, 151, 2, 22, 3, 58, 2, 3, 152, 2, 3, 59, 2, 2, 153, -57, 2, 8, 2, 154, -7, 2, 18, 2, 0, 2, 60, -4, 2, 0, 0, 1065361407, 0, 16384, -9, 2, 18, 2, 60, 2, 0, 2, 133, -14, 2, 18, 2, 133, -6, 2, 18, 0, 81919, -15, 2, 155, 3, 0, 6, 2, 126, -1, 3, 0, 2, 0, 2063, -37, 2, 62, 2, 156, 2, 157, 2, 158, 2, 159, 2, 160, -138, 3, 0, 1335, -1, 3, 0, 129, 2, 32, 3, 0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0, 233, 2, 162, 3, 0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -28386], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647, 1048575, 1073741823, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4294901759, 32767, 4294901760, 262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431, 4294901888, 4286578687, 67043329, 4294705152, 4294770687, 67043583, 1023, 15, 2047999, 67043343, 67051519, 16777215, 2147483648, 4294902e3, 28, 4292870143, 4294966783, 16383, 67047423, 4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 535511039, 4294966272, 4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591, 2445279231, 3670015, 31, 4294967288, 4294705151, 3221208447, 4294902271, 4294549472, 4294921215, 4095, 4285526655, 4294966527, 4294966143, 64, 4294966719, 3774873592, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901763, 4294901761]);
    var isIDContinue = (code) => (unicodeLookup[(code >>> 5) + 0] >>> code & 31 & 1) !== 0;
    var isIDStart = (code) => (unicodeLookup[(code >>> 5) + 34816] >>> code & 31 & 1) !== 0;
    function advanceChar(parser) {
      parser.column++;
      return parser.currentChar = parser.source.charCodeAt(++parser.index);
    }
    function consumePossibleSurrogatePair(parser) {
      const hi = parser.currentChar;
      if ((hi & 64512) !== 55296)
        return 0;
      const lo = parser.source.charCodeAt(parser.index + 1);
      if ((lo & 64512) !== 56320)
        return 0;
      return 65536 + ((hi & 1023) << 10) + (lo & 1023);
    }
    function consumeLineFeed(parser, state) {
      parser.currentChar = parser.source.charCodeAt(++parser.index);
      parser.flags |= 1;
      if ((state & 4) === 0) {
        parser.column = 0;
        parser.line++;
      }
    }
    function scanNewLine(parser) {
      parser.flags |= 1;
      parser.currentChar = parser.source.charCodeAt(++parser.index);
      parser.column = 0;
      parser.line++;
    }
    function isExoticECMAScriptWhitespace(ch) {
      return ch === 160 || ch === 65279 || ch === 133 || ch === 5760 || ch >= 8192 && ch <= 8203 || ch === 8239 || ch === 8287 || ch === 12288 || ch === 8201 || ch === 65519;
    }
    function toHex(code) {
      return code < 65 ? code - 48 : code - 65 + 10 & 15;
    }
    function convertTokenType(t) {
      switch (t) {
        case 134283266:
          return "NumericLiteral";
        case 134283267:
          return "StringLiteral";
        case 86021:
        case 86022:
          return "BooleanLiteral";
        case 86023:
          return "NullLiteral";
        case 65540:
          return "RegularExpression";
        case 67174408:
        case 67174409:
        case 131:
          return "TemplateLiteral";
        default:
          if ((t & 143360) === 143360)
            return "Identifier";
          if ((t & 4096) === 4096)
            return "Keyword";
          return "Punctuator";
      }
    }
    var CharTypes = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      8 | 1024,
      0,
      0,
      8 | 2048,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      8192,
      0,
      1 | 2,
      0,
      0,
      8192,
      0,
      0,
      0,
      256,
      0,
      256 | 32768,
      0,
      0,
      2 | 16 | 128 | 32 | 64,
      2 | 16 | 128 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 512 | 64,
      2 | 16 | 512 | 64,
      0,
      0,
      16384,
      0,
      0,
      0,
      0,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      0,
      1,
      0,
      0,
      1 | 2 | 4096,
      0,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      16384,
      0,
      0,
      0,
      0
    ];
    var isIdStart = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0
    ];
    var isIdPart = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0
    ];
    function isIdentifierStart(code) {
      return code <= 127 ? isIdStart[code] > 0 : isIDStart(code);
    }
    function isIdentifierPart(code) {
      return code <= 127 ? isIdPart[code] > 0 : isIDContinue(code) || (code === 8204 || code === 8205);
    }
    var CommentTypes = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];
    function skipHashBang(parser) {
      const { source } = parser;
      if (parser.currentChar === 35 && source.charCodeAt(parser.index + 1) === 33) {
        advanceChar(parser);
        advanceChar(parser);
        skipSingleLineComment(parser, source, 0, 4, parser.tokenStart);
      }
    }
    function skipSingleHTMLComment(parser, source, state, context, type, start) {
      if (context & 2)
        parser.report(0);
      return skipSingleLineComment(parser, source, state, type, start);
    }
    function skipSingleLineComment(parser, source, state, type, start) {
      const { index } = parser;
      parser.tokenIndex = parser.index;
      parser.tokenLine = parser.line;
      parser.tokenColumn = parser.column;
      while (parser.index < parser.end) {
        if (CharTypes[parser.currentChar] & 8) {
          const isCR = parser.currentChar === 13;
          scanNewLine(parser);
          if (isCR && parser.index < parser.end && parser.currentChar === 10)
            parser.currentChar = source.charCodeAt(++parser.index);
          break;
        } else if ((parser.currentChar ^ 8232) <= 1) {
          scanNewLine(parser);
          break;
        }
        advanceChar(parser);
        parser.tokenIndex = parser.index;
        parser.tokenLine = parser.line;
        parser.tokenColumn = parser.column;
      }
      if (parser.options.onComment) {
        const loc = {
          start: {
            line: start.line,
            column: start.column
          },
          end: {
            line: parser.tokenLine,
            column: parser.tokenColumn
          }
        };
        parser.options.onComment(CommentTypes[type & 255], source.slice(index, parser.tokenIndex), start.index, parser.tokenIndex, loc);
      }
      return state | 1;
    }
    function skipMultiLineComment(parser, source, state) {
      const { index } = parser;
      while (parser.index < parser.end) {
        if (parser.currentChar < 43) {
          let skippedOneAsterisk = false;
          while (parser.currentChar === 42) {
            if (!skippedOneAsterisk) {
              state &= -5;
              skippedOneAsterisk = true;
            }
            if (advanceChar(parser) === 47) {
              advanceChar(parser);
              if (parser.options.onComment) {
                const loc = {
                  start: {
                    line: parser.tokenLine,
                    column: parser.tokenColumn
                  },
                  end: {
                    line: parser.line,
                    column: parser.column
                  }
                };
                parser.options.onComment(CommentTypes[1 & 255], source.slice(index, parser.index - 2), index - 2, parser.index, loc);
              }
              parser.tokenIndex = parser.index;
              parser.tokenLine = parser.line;
              parser.tokenColumn = parser.column;
              return state;
            }
          }
          if (skippedOneAsterisk) {
            continue;
          }
          if (CharTypes[parser.currentChar] & 8) {
            if (parser.currentChar === 13) {
              state |= 1 | 4;
              scanNewLine(parser);
            } else {
              consumeLineFeed(parser, state);
              state = state & -5 | 1;
            }
          } else {
            advanceChar(parser);
          }
        } else if ((parser.currentChar ^ 8232) <= 1) {
          state = state & -5 | 1;
          scanNewLine(parser);
        } else {
          state &= -5;
          advanceChar(parser);
        }
      }
      parser.report(18);
    }
    var RegexState;
    (function(RegexState2) {
      RegexState2[RegexState2["Empty"] = 0] = "Empty";
      RegexState2[RegexState2["Escape"] = 1] = "Escape";
      RegexState2[RegexState2["Class"] = 2] = "Class";
    })(RegexState || (RegexState = {}));
    var RegexFlags;
    (function(RegexFlags2) {
      RegexFlags2[RegexFlags2["Empty"] = 0] = "Empty";
      RegexFlags2[RegexFlags2["IgnoreCase"] = 1] = "IgnoreCase";
      RegexFlags2[RegexFlags2["Global"] = 2] = "Global";
      RegexFlags2[RegexFlags2["Multiline"] = 4] = "Multiline";
      RegexFlags2[RegexFlags2["Unicode"] = 16] = "Unicode";
      RegexFlags2[RegexFlags2["Sticky"] = 8] = "Sticky";
      RegexFlags2[RegexFlags2["DotAll"] = 32] = "DotAll";
      RegexFlags2[RegexFlags2["Indices"] = 64] = "Indices";
      RegexFlags2[RegexFlags2["UnicodeSets"] = 128] = "UnicodeSets";
    })(RegexFlags || (RegexFlags = {}));
    function scanRegularExpression(parser) {
      const bodyStart = parser.index;
      let preparseState = RegexState.Empty;
      loop: while (true) {
        const ch = parser.currentChar;
        advanceChar(parser);
        if (preparseState & RegexState.Escape) {
          preparseState &= ~RegexState.Escape;
        } else {
          switch (ch) {
            case 47:
              if (!preparseState)
                break loop;
              else
                break;
            case 92:
              preparseState |= RegexState.Escape;
              break;
            case 91:
              preparseState |= RegexState.Class;
              break;
            case 93:
              preparseState &= RegexState.Escape;
              break;
          }
        }
        if (ch === 13 || ch === 10 || ch === 8232 || ch === 8233) {
          parser.report(34);
        }
        if (parser.index >= parser.source.length) {
          return parser.report(34);
        }
      }
      const bodyEnd = parser.index - 1;
      let mask = RegexFlags.Empty;
      let char = parser.currentChar;
      const { index: flagStart } = parser;
      while (isIdentifierPart(char)) {
        switch (char) {
          case 103:
            if (mask & RegexFlags.Global)
              parser.report(36, "g");
            mask |= RegexFlags.Global;
            break;
          case 105:
            if (mask & RegexFlags.IgnoreCase)
              parser.report(36, "i");
            mask |= RegexFlags.IgnoreCase;
            break;
          case 109:
            if (mask & RegexFlags.Multiline)
              parser.report(36, "m");
            mask |= RegexFlags.Multiline;
            break;
          case 117:
            if (mask & RegexFlags.Unicode)
              parser.report(36, "u");
            if (mask & RegexFlags.UnicodeSets)
              parser.report(36, "vu");
            mask |= RegexFlags.Unicode;
            break;
          case 118:
            if (mask & RegexFlags.Unicode)
              parser.report(36, "uv");
            if (mask & RegexFlags.UnicodeSets)
              parser.report(36, "v");
            mask |= RegexFlags.UnicodeSets;
            break;
          case 121:
            if (mask & RegexFlags.Sticky)
              parser.report(36, "y");
            mask |= RegexFlags.Sticky;
            break;
          case 115:
            if (mask & RegexFlags.DotAll)
              parser.report(36, "s");
            mask |= RegexFlags.DotAll;
            break;
          case 100:
            if (mask & RegexFlags.Indices)
              parser.report(36, "d");
            mask |= RegexFlags.Indices;
            break;
          default:
            parser.report(35);
        }
        char = advanceChar(parser);
      }
      const flags = parser.source.slice(flagStart, parser.index);
      const pattern = parser.source.slice(bodyStart, bodyEnd);
      parser.tokenRegExp = { pattern, flags };
      if (parser.options.raw)
        parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
      parser.tokenValue = validate(parser, pattern, flags);
      return 65540;
    }
    function validate(parser, pattern, flags) {
      try {
        return new RegExp(pattern, flags);
      } catch {
        try {
          new RegExp(pattern, flags);
          return null;
        } catch {
          parser.report(34);
        }
      }
    }
    function scanString(parser, context, quote) {
      const { index: start } = parser;
      let ret = "";
      let char = advanceChar(parser);
      let marker = parser.index;
      while ((CharTypes[char] & 8) === 0) {
        if (char === quote) {
          ret += parser.source.slice(marker, parser.index);
          advanceChar(parser);
          if (parser.options.raw)
            parser.tokenRaw = parser.source.slice(start, parser.index);
          parser.tokenValue = ret;
          return 134283267;
        }
        if ((char & 8) === 8 && char === 92) {
          ret += parser.source.slice(marker, parser.index);
          char = advanceChar(parser);
          if (char < 127 || char === 8232 || char === 8233) {
            const code = parseEscape(parser, context, char);
            if (code >= 0)
              ret += String.fromCodePoint(code);
            else
              handleStringError(parser, code, 0);
          } else {
            ret += String.fromCodePoint(char);
          }
          marker = parser.index + 1;
        } else if (char === 8232 || char === 8233) {
          parser.column = -1;
          parser.line++;
        }
        if (parser.index >= parser.end)
          parser.report(16);
        char = advanceChar(parser);
      }
      parser.report(16);
    }
    function parseEscape(parser, context, first, isTemplate = 0) {
      switch (first) {
        case 98:
          return 8;
        case 102:
          return 12;
        case 114:
          return 13;
        case 110:
          return 10;
        case 116:
          return 9;
        case 118:
          return 11;
        case 13: {
          if (parser.index < parser.end) {
            const nextChar = parser.source.charCodeAt(parser.index + 1);
            if (nextChar === 10) {
              parser.index = parser.index + 1;
              parser.currentChar = nextChar;
            }
          }
        }
        case 10:
        case 8232:
        case 8233:
          parser.column = -1;
          parser.line++;
          return -1;
        case 48:
        case 49:
        case 50:
        case 51: {
          let code = first - 48;
          let index = parser.index + 1;
          let column = parser.column + 1;
          if (index < parser.end) {
            const next = parser.source.charCodeAt(index);
            if ((CharTypes[next] & 32) === 0) {
              if (code !== 0 || CharTypes[next] & 512) {
                if (context & 1 || isTemplate)
                  return -2;
                parser.flags |= 64;
              }
            } else if (context & 1 || isTemplate) {
              return -2;
            } else {
              parser.currentChar = next;
              code = code << 3 | next - 48;
              index++;
              column++;
              if (index < parser.end) {
                const next2 = parser.source.charCodeAt(index);
                if (CharTypes[next2] & 32) {
                  parser.currentChar = next2;
                  code = code << 3 | next2 - 48;
                  index++;
                  column++;
                }
              }
              parser.flags |= 64;
            }
            parser.index = index - 1;
            parser.column = column - 1;
          }
          return code;
        }
        case 52:
        case 53:
        case 54:
        case 55: {
          if (isTemplate || context & 1)
            return -2;
          let code = first - 48;
          const index = parser.index + 1;
          const column = parser.column + 1;
          if (index < parser.end) {
            const next = parser.source.charCodeAt(index);
            if (CharTypes[next] & 32) {
              code = code << 3 | next - 48;
              parser.currentChar = next;
              parser.index = index;
              parser.column = column;
            }
          }
          parser.flags |= 64;
          return code;
        }
        case 120: {
          const ch1 = advanceChar(parser);
          if ((CharTypes[ch1] & 64) === 0)
            return -4;
          const hi = toHex(ch1);
          const ch2 = advanceChar(parser);
          if ((CharTypes[ch2] & 64) === 0)
            return -4;
          const lo = toHex(ch2);
          return hi << 4 | lo;
        }
        case 117: {
          const ch = advanceChar(parser);
          if (parser.currentChar === 123) {
            let code = 0;
            while ((CharTypes[advanceChar(parser)] & 64) !== 0) {
              code = code << 4 | toHex(parser.currentChar);
              if (code > 1114111)
                return -5;
            }
            if (parser.currentChar < 1 || parser.currentChar !== 125) {
              return -4;
            }
            return code;
          } else {
            if ((CharTypes[ch] & 64) === 0)
              return -4;
            const ch2 = parser.source.charCodeAt(parser.index + 1);
            if ((CharTypes[ch2] & 64) === 0)
              return -4;
            const ch3 = parser.source.charCodeAt(parser.index + 2);
            if ((CharTypes[ch3] & 64) === 0)
              return -4;
            const ch4 = parser.source.charCodeAt(parser.index + 3);
            if ((CharTypes[ch4] & 64) === 0)
              return -4;
            parser.index += 3;
            parser.column += 3;
            parser.currentChar = parser.source.charCodeAt(parser.index);
            return toHex(ch) << 12 | toHex(ch2) << 8 | toHex(ch3) << 4 | toHex(ch4);
          }
        }
        case 56:
        case 57:
          if (isTemplate || !parser.options.webcompat || context & 1)
            return -3;
          parser.flags |= 4096;
        default:
          return first;
      }
    }
    function handleStringError(parser, code, isTemplate) {
      switch (code) {
        case -1:
          return;
        case -2:
          parser.report(isTemplate ? 2 : 1);
        case -3:
          parser.report(isTemplate ? 3 : 14);
        case -4:
          parser.report(7);
        case -5:
          parser.report(104);
      }
    }
    function scanTemplate(parser, context) {
      const { index: start } = parser;
      let token = 67174409;
      let ret = "";
      let char = advanceChar(parser);
      while (char !== 96) {
        if (char === 36 && parser.source.charCodeAt(parser.index + 1) === 123) {
          advanceChar(parser);
          token = 67174408;
          break;
        } else if (char === 92) {
          char = advanceChar(parser);
          if (char > 126) {
            ret += String.fromCodePoint(char);
          } else {
            const { index, line, column } = parser;
            const code = parseEscape(parser, context | 1, char, 1);
            if (code >= 0) {
              ret += String.fromCodePoint(code);
            } else if (code !== -1 && context & 64) {
              parser.index = index;
              parser.line = line;
              parser.column = column;
              ret = null;
              char = scanBadTemplate(parser, char);
              if (char < 0)
                token = 67174408;
              break;
            } else {
              handleStringError(parser, code, 1);
            }
          }
        } else if (parser.index < parser.end) {
          if (char === 13 && parser.source.charCodeAt(parser.index) === 10) {
            ret += String.fromCodePoint(char);
            parser.currentChar = parser.source.charCodeAt(++parser.index);
          }
          if ((char & 83) < 3 && char === 10 || (char ^ 8232) <= 1) {
            parser.column = -1;
            parser.line++;
          }
          ret += String.fromCodePoint(char);
        }
        if (parser.index >= parser.end)
          parser.report(17);
        char = advanceChar(parser);
      }
      advanceChar(parser);
      parser.tokenValue = ret;
      parser.tokenRaw = parser.source.slice(start + 1, parser.index - (token === 67174409 ? 1 : 2));
      return token;
    }
    function scanBadTemplate(parser, ch) {
      while (ch !== 96) {
        switch (ch) {
          case 36: {
            const index = parser.index + 1;
            if (index < parser.end && parser.source.charCodeAt(index) === 123) {
              parser.index = index;
              parser.column++;
              return -ch;
            }
            break;
          }
          case 10:
          case 8232:
          case 8233:
            parser.column = -1;
            parser.line++;
        }
        if (parser.index >= parser.end)
          parser.report(17);
        ch = advanceChar(parser);
      }
      return ch;
    }
    function scanTemplateTail(parser, context) {
      if (parser.index >= parser.end)
        parser.report(0);
      parser.index--;
      parser.column--;
      return scanTemplate(parser, context);
    }
    var errorMessages = {
      [0]: "Unexpected token",
      [30]: "Unexpected token: '%0'",
      [1]: "Octal escape sequences are not allowed in strict mode",
      [2]: "Octal escape sequences are not allowed in template strings",
      [3]: "\\8 and \\9 are not allowed in template strings",
      [4]: "Private identifier #%0 is not defined",
      [5]: "Illegal Unicode escape sequence",
      [6]: "Invalid code point %0",
      [7]: "Invalid hexadecimal escape sequence",
      [9]: "Octal literals are not allowed in strict mode",
      [8]: "Decimal integer literals with a leading zero are forbidden in strict mode",
      [10]: "Expected number in radix %0",
      [151]: "Invalid left-hand side assignment to a destructible right-hand side",
      [11]: "Non-number found after exponent indicator",
      [12]: "Invalid BigIntLiteral",
      [13]: "No identifiers allowed directly after numeric literal",
      [14]: "Escapes \\8 or \\9 are not syntactically valid escapes",
      [15]: "Escapes \\8 or \\9 are not allowed in strict mode",
      [16]: "Unterminated string literal",
      [17]: "Unterminated template literal",
      [18]: "Multiline comment was not closed properly",
      [19]: "The identifier contained dynamic unicode escape that was not closed",
      [20]: "Illegal character '%0'",
      [21]: "Missing hexadecimal digits",
      [22]: "Invalid implicit octal",
      [23]: "Invalid line break in string literal",
      [24]: "Only unicode escapes are legal in identifier names",
      [25]: "Expected '%0'",
      [26]: "Invalid left-hand side in assignment",
      [27]: "Invalid left-hand side in async arrow",
      [28]: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
      [29]: "Member access on super must be in a method",
      [31]: "Await expression not allowed in formal parameter",
      [32]: "Yield expression not allowed in formal parameter",
      [95]: "Unexpected token: 'escaped keyword'",
      [33]: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses",
      [123]: "Async functions can only be declared at the top level or inside a block",
      [34]: "Unterminated regular expression",
      [35]: "Unexpected regular expression flag",
      [36]: "Duplicate regular expression flag '%0'",
      [37]: "%0 functions must have exactly %1 argument%2",
      [38]: "Setter function argument must not be a rest parameter",
      [39]: "%0 declaration must have a name in this context",
      [40]: "Function name may not contain any reserved words or be eval or arguments in strict mode",
      [41]: "The rest operator is missing an argument",
      [42]: "A getter cannot be a generator",
      [43]: "A setter cannot be a generator",
      [44]: "A computed property name must be followed by a colon or paren",
      [134]: "Object literal keys that are strings or numbers must be a method or have a colon",
      [46]: "Found `* async x(){}` but this should be `async * x(){}`",
      [45]: "Getters and setters can not be generators",
      [47]: "'%0' can not be generator method",
      [48]: "No line break is allowed after '=>'",
      [49]: "The left-hand side of the arrow can only be destructed through assignment",
      [50]: "The binding declaration is not destructible",
      [51]: "Async arrow can not be followed by new expression",
      [52]: "Classes may not have a static property named 'prototype'",
      [53]: "Class constructor may not be a %0",
      [54]: "Duplicate constructor method in class",
      [55]: "Invalid increment/decrement operand",
      [56]: "Invalid use of `new` keyword on an increment/decrement expression",
      [57]: "`=>` is an invalid assignment target",
      [58]: "Rest element may not have a trailing comma",
      [59]: "Missing initializer in %0 declaration",
      [60]: "'for-%0' loop head declarations can not have an initializer",
      [61]: "Invalid left-hand side in for-%0 loop: Must have a single binding",
      [62]: "Invalid shorthand property initializer",
      [63]: "Property name __proto__ appears more than once in object literal",
      [64]: "Let is disallowed as a lexically bound name",
      [65]: "Invalid use of '%0' inside new expression",
      [66]: "Illegal 'use strict' directive in function with non-simple parameter list",
      [67]: 'Identifier "let" disallowed as left-hand side expression in strict mode',
      [68]: "Illegal continue statement",
      [69]: "Illegal break statement",
      [70]: "Cannot have `let[...]` as a var name in strict mode",
      [71]: "Invalid destructuring assignment target",
      [72]: "Rest parameter may not have a default initializer",
      [73]: "The rest argument must the be last parameter",
      [74]: "Invalid rest argument",
      [76]: "In strict mode code, functions can only be declared at top level or inside a block",
      [77]: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
      [78]: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement",
      [79]: "Class declaration can't appear in single-statement context",
      [80]: "Invalid left-hand side in for-%0",
      [81]: "Invalid assignment in for-%0",
      [82]: "for await (... of ...) is only valid in async functions and async generators",
      [83]: "The first token after the template expression should be a continuation of the template",
      [85]: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode",
      [84]: "`let \n [` is a restricted production at the start of a statement",
      [86]: "Catch clause requires exactly one parameter, not more (and no trailing comma)",
      [87]: "Catch clause parameter does not support default values",
      [88]: "Missing catch or finally after try",
      [89]: "More than one default clause in switch statement",
      [90]: "Illegal newline after throw",
      [91]: "Strict mode code may not include a with statement",
      [92]: "Illegal return statement",
      [93]: "The left hand side of the for-header binding declaration is not destructible",
      [94]: "new.target only allowed within functions or static blocks",
      [96]: "'#' not followed by identifier",
      [102]: "Invalid keyword",
      [101]: "Can not use 'let' as a class name",
      [100]: "'A lexical declaration can't define a 'let' binding",
      [99]: "Can not use `let` as variable name in strict mode",
      [97]: "'%0' may not be used as an identifier in this context",
      [98]: "Await is only valid in async functions",
      [103]: "The %0 keyword can only be used with the module goal",
      [104]: "Unicode codepoint must not be greater than 0x10FFFF",
      [105]: "%0 source must be string",
      [106]: "Only a identifier or string can be used to indicate alias",
      [107]: "Only '*' or '{...}' can be imported after default",
      [108]: "Trailing decorator may be followed by method",
      [109]: "Decorators can't be used with a constructor",
      [110]: "Can not use `await` as identifier in module or async func",
      [111]: "Can not use `await` as identifier in module",
      [112]: "HTML comments are only allowed with web compatibility (Annex B)",
      [113]: "The identifier 'let' must not be in expression position in strict mode",
      [114]: "Cannot assign to `eval` and `arguments` in strict mode",
      [115]: "The left-hand side of a for-of loop may not start with 'let'",
      [116]: "Block body arrows can not be immediately invoked without a group",
      [117]: "Block body arrows can not be immediately accessed without a group",
      [118]: "Unexpected strict mode reserved word",
      [119]: "Unexpected eval or arguments in strict mode",
      [120]: "Decorators must not be followed by a semicolon",
      [121]: "Calling delete on expression not allowed in strict mode",
      [122]: "Pattern can not have a tail",
      [124]: "Can not have a `yield` expression on the left side of a ternary",
      [125]: "An arrow function can not have a postfix update operator",
      [126]: "Invalid object literal key character after generator star",
      [127]: "Private fields can not be deleted",
      [129]: "Classes may not have a field called constructor",
      [128]: "Classes may not have a private element named constructor",
      [130]: "A class field initializer or static block may not contain arguments",
      [131]: "Generators can only be declared at the top level or inside a block",
      [132]: "Async methods are a restricted production and cannot have a newline following it",
      [133]: "Unexpected character after object literal property name",
      [135]: "Invalid key token",
      [136]: "Label '%0' has already been declared",
      [137]: "continue statement must be nested within an iteration statement",
      [138]: "Undefined label '%0'",
      [139]: "Trailing comma is disallowed inside import(...) arguments",
      [140]: "Invalid binding in JSON import",
      [141]: "import() requires exactly one argument",
      [142]: "Cannot use new with import(...)",
      [143]: "... is not allowed in import()",
      [144]: "Expected '=>'",
      [145]: "Duplicate binding '%0'",
      [146]: "Duplicate private identifier #%0",
      [147]: "Cannot export a duplicate name '%0'",
      [150]: "Duplicate %0 for-binding",
      [148]: "Exported binding '%0' needs to refer to a top-level declared variable",
      [149]: "Unexpected private field",
      [153]: "Numeric separators are not allowed at the end of numeric literals",
      [152]: "Only one underscore is allowed as numeric separator",
      [154]: "JSX value should be either an expression or a quoted JSX text",
      [155]: "Expected corresponding JSX closing tag for %0",
      [156]: "Adjacent JSX elements must be wrapped in an enclosing tag",
      [157]: "JSX attributes must only be assigned a non-empty 'expression'",
      [158]: "'%0' has already been declared",
      [159]: "'%0' shadowed a catch clause binding",
      [160]: "Dot property must be an identifier",
      [161]: "Encountered invalid input after spread/rest argument",
      [162]: "Catch without try",
      [163]: "Finally without try",
      [164]: "Expected corresponding closing tag for JSX fragment",
      [165]: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses",
      [166]: "Invalid tagged template on optional chain",
      [167]: "Invalid optional chain from super property",
      [168]: "Invalid optional chain from new expression",
      [169]: 'Cannot use "import.meta" outside a module',
      [170]: "Leading decorators must be attached to a class declaration",
      [171]: "An export name cannot include a lone surrogate, found %0",
      [172]: "A string literal cannot be used as an exported binding without `from`",
      [173]: "Private fields can't be accessed on super",
      [174]: "The only valid meta property for import is 'import.meta'",
      [175]: "'import.meta' must not contain escaped characters",
      [176]: 'cannot use "await" as identifier inside an async function',
      [177]: 'cannot use "await" in static blocks'
    };
    var ParseError = class extends SyntaxError {
      start;
      end;
      range;
      loc;
      description;
      constructor(start, end, type, ...params) {
        const description = errorMessages[type].replace(/%(\d+)/g, (_, i) => params[i]);
        const message = "[" + start.line + ":" + start.column + "-" + end.line + ":" + end.column + "]: " + description;
        super(message);
        this.start = start.index;
        this.end = end.index;
        this.range = [start.index, end.index];
        this.loc = {
          start: { line: start.line, column: start.column },
          end: { line: end.line, column: end.column }
        };
        this.description = description;
      }
    };
    function scanNumber(parser, context, kind) {
      let char = parser.currentChar;
      let value = 0;
      let digit = 9;
      let atStart = kind & 64 ? 0 : 1;
      let digits = 0;
      let allowSeparator = 0;
      if (kind & 64) {
        value = "." + scanDecimalDigitsOrSeparator(parser, char);
        char = parser.currentChar;
        if (char === 110)
          parser.report(12);
      } else {
        if (char === 48) {
          char = advanceChar(parser);
          if ((char | 32) === 120) {
            kind = 8 | 128;
            char = advanceChar(parser);
            while (CharTypes[char] & (64 | 4096)) {
              if (char === 95) {
                if (!allowSeparator)
                  parser.report(152);
                allowSeparator = 0;
                char = advanceChar(parser);
                continue;
              }
              allowSeparator = 1;
              value = value * 16 + toHex(char);
              digits++;
              char = advanceChar(parser);
            }
            if (digits === 0 || !allowSeparator) {
              parser.report(digits === 0 ? 21 : 153);
            }
          } else if ((char | 32) === 111) {
            kind = 4 | 128;
            char = advanceChar(parser);
            while (CharTypes[char] & (32 | 4096)) {
              if (char === 95) {
                if (!allowSeparator) {
                  parser.report(152);
                }
                allowSeparator = 0;
                char = advanceChar(parser);
                continue;
              }
              allowSeparator = 1;
              value = value * 8 + (char - 48);
              digits++;
              char = advanceChar(parser);
            }
            if (digits === 0 || !allowSeparator) {
              parser.report(digits === 0 ? 0 : 153);
            }
          } else if ((char | 32) === 98) {
            kind = 2 | 128;
            char = advanceChar(parser);
            while (CharTypes[char] & (128 | 4096)) {
              if (char === 95) {
                if (!allowSeparator) {
                  parser.report(152);
                }
                allowSeparator = 0;
                char = advanceChar(parser);
                continue;
              }
              allowSeparator = 1;
              value = value * 2 + (char - 48);
              digits++;
              char = advanceChar(parser);
            }
            if (digits === 0 || !allowSeparator) {
              parser.report(digits === 0 ? 0 : 153);
            }
          } else if (CharTypes[char] & 32) {
            if (context & 1)
              parser.report(1);
            kind = 1;
            while (CharTypes[char] & 16) {
              if (CharTypes[char] & 512) {
                kind = 32;
                atStart = 0;
                break;
              }
              value = value * 8 + (char - 48);
              char = advanceChar(parser);
            }
          } else if (CharTypes[char] & 512) {
            if (context & 1)
              parser.report(1);
            parser.flags |= 64;
            kind = 32;
          } else if (char === 95) {
            parser.report(0);
          }
        }
        if (kind & 48) {
          if (atStart) {
            while (digit >= 0 && CharTypes[char] & (16 | 4096)) {
              if (char === 95) {
                char = advanceChar(parser);
                if (char === 95 || kind & 32) {
                  throw new ParseError(parser.currentLocation, { index: parser.index + 1, line: parser.line, column: parser.column }, 152);
                }
                allowSeparator = 1;
                continue;
              }
              allowSeparator = 0;
              value = 10 * value + (char - 48);
              char = advanceChar(parser);
              --digit;
            }
            if (allowSeparator) {
              throw new ParseError(parser.currentLocation, { index: parser.index + 1, line: parser.line, column: parser.column }, 153);
            }
            if (digit >= 0 && !isIdentifierStart(char) && char !== 46) {
              parser.tokenValue = value;
              if (parser.options.raw)
                parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
              return 134283266;
            }
          }
          value += scanDecimalDigitsOrSeparator(parser, char);
          char = parser.currentChar;
          if (char === 46) {
            if (advanceChar(parser) === 95)
              parser.report(0);
            kind = 64;
            value += "." + scanDecimalDigitsOrSeparator(parser, parser.currentChar);
            char = parser.currentChar;
          }
        }
      }
      const end = parser.index;
      let isBigInt = 0;
      if (char === 110 && kind & 128) {
        isBigInt = 1;
        char = advanceChar(parser);
      } else {
        if ((char | 32) === 101) {
          char = advanceChar(parser);
          if (CharTypes[char] & 256)
            char = advanceChar(parser);
          const { index } = parser;
          if ((CharTypes[char] & 16) === 0)
            parser.report(11);
          value += parser.source.substring(end, index) + scanDecimalDigitsOrSeparator(parser, char);
          char = parser.currentChar;
        }
      }
      if (parser.index < parser.end && CharTypes[char] & 16 || isIdentifierStart(char)) {
        parser.report(13);
      }
      if (isBigInt) {
        parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
        parser.tokenValue = BigInt(parser.tokenRaw.slice(0, -1).replaceAll("_", ""));
        return 134283388;
      }
      parser.tokenValue = kind & (1 | 2 | 8 | 4) ? value : kind & 32 ? parseFloat(parser.source.substring(parser.tokenIndex, parser.index)) : +value;
      if (parser.options.raw)
        parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
      return 134283266;
    }
    function scanDecimalDigitsOrSeparator(parser, char) {
      let allowSeparator = 0;
      let start = parser.index;
      let ret = "";
      while (CharTypes[char] & (16 | 4096)) {
        if (char === 95) {
          const { index } = parser;
          char = advanceChar(parser);
          if (char === 95) {
            throw new ParseError(parser.currentLocation, { index: parser.index + 1, line: parser.line, column: parser.column }, 152);
          }
          allowSeparator = 1;
          ret += parser.source.substring(start, index);
          start = parser.index;
          continue;
        }
        allowSeparator = 0;
        char = advanceChar(parser);
      }
      if (allowSeparator) {
        throw new ParseError(parser.currentLocation, { index: parser.index + 1, line: parser.line, column: parser.column }, 153);
      }
      return ret + parser.source.substring(start, parser.index);
    }
    var KeywordDescTable = [
      "end of source",
      "identifier",
      "number",
      "string",
      "regular expression",
      "false",
      "true",
      "null",
      "template continuation",
      "template tail",
      "=>",
      "(",
      "{",
      ".",
      "...",
      "}",
      ")",
      ";",
      ",",
      "[",
      "]",
      ":",
      "?",
      "'",
      '"',
      "++",
      "--",
      "=",
      "<<=",
      ">>=",
      ">>>=",
      "**=",
      "+=",
      "-=",
      "*=",
      "/=",
      "%=",
      "^=",
      "|=",
      "&=",
      "||=",
      "&&=",
      "??=",
      "typeof",
      "delete",
      "void",
      "!",
      "~",
      "+",
      "-",
      "in",
      "instanceof",
      "*",
      "%",
      "/",
      "**",
      "&&",
      "||",
      "===",
      "!==",
      "==",
      "!=",
      "<=",
      ">=",
      "<",
      ">",
      "<<",
      ">>",
      ">>>",
      "&",
      "|",
      "^",
      "var",
      "let",
      "const",
      "break",
      "case",
      "catch",
      "class",
      "continue",
      "debugger",
      "default",
      "do",
      "else",
      "export",
      "extends",
      "finally",
      "for",
      "function",
      "if",
      "import",
      "new",
      "return",
      "super",
      "switch",
      "this",
      "throw",
      "try",
      "while",
      "with",
      "implements",
      "interface",
      "package",
      "private",
      "protected",
      "public",
      "static",
      "yield",
      "as",
      "async",
      "await",
      "constructor",
      "get",
      "set",
      "accessor",
      "from",
      "of",
      "enum",
      "eval",
      "arguments",
      "escaped keyword",
      "escaped future reserved keyword",
      "reserved if strict",
      "#",
      "BigIntLiteral",
      "??",
      "?.",
      "WhiteSpace",
      "Illegal",
      "LineTerminator",
      "PrivateField",
      "Template",
      "@",
      "target",
      "meta",
      "LineFeed",
      "Escaped",
      "JSXText"
    ];
    var descKeywordTable = {
      this: 86111,
      function: 86104,
      if: 20569,
      return: 20572,
      var: 86088,
      else: 20563,
      for: 20567,
      new: 86107,
      in: 8673330,
      typeof: 16863275,
      while: 20578,
      case: 20556,
      break: 20555,
      try: 20577,
      catch: 20557,
      delete: 16863276,
      throw: 86112,
      switch: 86110,
      continue: 20559,
      default: 20561,
      instanceof: 8411187,
      do: 20562,
      void: 16863277,
      finally: 20566,
      async: 209005,
      await: 209006,
      class: 86094,
      const: 86090,
      constructor: 12399,
      debugger: 20560,
      export: 20564,
      extends: 20565,
      false: 86021,
      from: 209011,
      get: 209008,
      implements: 36964,
      import: 86106,
      interface: 36965,
      let: 241737,
      null: 86023,
      of: 471156,
      package: 36966,
      private: 36967,
      protected: 36968,
      public: 36969,
      set: 209009,
      static: 36970,
      super: 86109,
      true: 86022,
      with: 20579,
      yield: 241771,
      enum: 86133,
      eval: 537079926,
      as: 77932,
      arguments: 537079927,
      target: 209029,
      meta: 209030,
      accessor: 12402
    };
    function matchOrInsertSemicolon(parser, context) {
      if ((parser.flags & 1) === 0 && (parser.getToken() & 1048576) !== 1048576) {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
      }
      if (!consumeOpt(parser, context, 1074790417)) {
        parser.options.onInsertedSemicolon?.(parser.startIndex);
      }
    }
    function isValidStrictMode(parser, index, tokenIndex, tokenValue) {
      if (index - tokenIndex < 13 && tokenValue === "use strict") {
        if ((parser.getToken() & 1048576) === 1048576 || parser.flags & 1) {
          return 1;
        }
      }
      return 0;
    }
    function optionalBit(parser, context, t) {
      if (parser.getToken() !== t)
        return 0;
      nextToken(parser, context);
      return 1;
    }
    function consumeOpt(parser, context, t) {
      if (parser.getToken() !== t)
        return false;
      nextToken(parser, context);
      return true;
    }
    function consume(parser, context, t) {
      if (parser.getToken() !== t)
        parser.report(25, KeywordDescTable[t & 255]);
      nextToken(parser, context);
    }
    function reinterpretToPattern(parser, node) {
      switch (node.type) {
        case "ArrayExpression": {
          node.type = "ArrayPattern";
          const { elements } = node;
          for (let i = 0, n = elements.length; i < n; ++i) {
            const element = elements[i];
            if (element)
              reinterpretToPattern(parser, element);
          }
          return;
        }
        case "ObjectExpression": {
          node.type = "ObjectPattern";
          const { properties } = node;
          for (let i = 0, n = properties.length; i < n; ++i) {
            reinterpretToPattern(parser, properties[i]);
          }
          return;
        }
        case "AssignmentExpression":
          node.type = "AssignmentPattern";
          if (node.operator !== "=")
            parser.report(71);
          delete node.operator;
          reinterpretToPattern(parser, node.left);
          return;
        case "Property":
          reinterpretToPattern(parser, node.value);
          return;
        case "SpreadElement":
          node.type = "RestElement";
          reinterpretToPattern(parser, node.argument);
      }
    }
    function validateBindingIdentifier(parser, context, kind, t, skipEvalArgCheck) {
      if (context & 1) {
        if ((t & 36864) === 36864) {
          parser.report(118);
        }
        if (!skipEvalArgCheck && (t & 537079808) === 537079808) {
          parser.report(119);
        }
      }
      if ((t & 20480) === 20480 || t === -2147483528) {
        parser.report(102);
      }
      if (kind & (8 | 16) && (t & 255) === (241737 & 255)) {
        parser.report(100);
      }
      if (context & (2048 | 2) && t === 209006) {
        parser.report(110);
      }
      if (context & (1024 | 1) && t === 241771) {
        parser.report(97, "yield");
      }
    }
    function validateFunctionName(parser, context, t) {
      if (context & 1) {
        if ((t & 36864) === 36864) {
          parser.report(118);
        }
        if ((t & 537079808) === 537079808) {
          parser.report(119);
        }
        if (t === -2147483527) {
          parser.report(95);
        }
        if (t === -2147483528) {
          parser.report(95);
        }
      }
      if ((t & 20480) === 20480) {
        parser.report(102);
      }
      if (context & (2048 | 2) && t === 209006) {
        parser.report(110);
      }
      if (context & (1024 | 1) && t === 241771) {
        parser.report(97, "yield");
      }
    }
    function isStrictReservedWord(parser, context, t) {
      if (t === 209006) {
        if (context & (2048 | 2))
          parser.report(110);
        parser.destructible |= 128;
      }
      if (t === 241771 && context & 1024)
        parser.report(97, "yield");
      return (t & 20480) === 20480 || (t & 36864) === 36864 || t == -2147483527;
    }
    function isPropertyWithPrivateFieldKey(expr) {
      return !expr.property ? false : expr.property.type === "PrivateIdentifier";
    }
    function isValidLabel(parser, labels, name, isIterationStatement) {
      while (labels) {
        if (labels["$" + name]) {
          if (isIterationStatement)
            parser.report(137);
          return 1;
        }
        if (isIterationStatement && labels.loop)
          isIterationStatement = 0;
        labels = labels["$"];
      }
      return 0;
    }
    function validateAndDeclareLabel(parser, labels, name) {
      let set = labels;
      while (set) {
        if (set["$" + name])
          parser.report(136, name);
        set = set["$"];
      }
      labels["$" + name] = 1;
    }
    function isEqualTagName(elementName) {
      switch (elementName.type) {
        case "JSXIdentifier":
          return elementName.name;
        case "JSXNamespacedName":
          return elementName.namespace + ":" + elementName.name;
        case "JSXMemberExpression":
          return isEqualTagName(elementName.object) + "." + isEqualTagName(elementName.property);
      }
    }
    function isValidIdentifier(context, t) {
      if (context & (1 | 1024)) {
        if (context & 2 && t === 209006)
          return false;
        if (context & 1024 && t === 241771)
          return false;
        return (t & 12288) === 12288;
      }
      return (t & 12288) === 12288 || (t & 36864) === 36864;
    }
    function classifyIdentifier(parser, context, t) {
      if ((t & 537079808) === 537079808) {
        if (context & 1)
          parser.report(119);
        parser.flags |= 512;
      }
      if (!isValidIdentifier(context, t))
        parser.report(0);
    }
    function getOwnProperty(object, key) {
      return Object.hasOwn(object, key) ? object[key] : void 0;
    }
    function scanIdentifier(parser, context, isValidAsKeyword) {
      while (isIdPart[advanceChar(parser)])
        ;
      parser.tokenValue = parser.source.slice(parser.tokenIndex, parser.index);
      return parser.currentChar !== 92 && parser.currentChar <= 126 ? getOwnProperty(descKeywordTable, parser.tokenValue) ?? 208897 : scanIdentifierSlowCase(parser, context, 0, isValidAsKeyword);
    }
    function scanUnicodeIdentifier(parser, context) {
      const cookedChar = scanIdentifierUnicodeEscape(parser);
      if (!isIdentifierStart(cookedChar))
        parser.report(5);
      parser.tokenValue = String.fromCodePoint(cookedChar);
      return scanIdentifierSlowCase(parser, context, 1, CharTypes[cookedChar] & 4);
    }
    function scanIdentifierSlowCase(parser, context, hasEscape, isValidAsKeyword) {
      let start = parser.index;
      while (parser.index < parser.end) {
        if (parser.currentChar === 92) {
          parser.tokenValue += parser.source.slice(start, parser.index);
          hasEscape = 1;
          const code = scanIdentifierUnicodeEscape(parser);
          if (!isIdentifierPart(code))
            parser.report(5);
          isValidAsKeyword = isValidAsKeyword && CharTypes[code] & 4;
          parser.tokenValue += String.fromCodePoint(code);
          start = parser.index;
        } else {
          const merged = consumePossibleSurrogatePair(parser);
          if (merged > 0) {
            if (!isIdentifierPart(merged)) {
              parser.report(20, String.fromCodePoint(merged));
            }
            parser.currentChar = merged;
            parser.index++;
            parser.column++;
          } else if (!isIdentifierPart(parser.currentChar)) {
            break;
          }
          advanceChar(parser);
        }
      }
      if (parser.index <= parser.end) {
        parser.tokenValue += parser.source.slice(start, parser.index);
      }
      const { length } = parser.tokenValue;
      if (isValidAsKeyword && length >= 2 && length <= 11) {
        const token = getOwnProperty(descKeywordTable, parser.tokenValue);
        if (token === void 0)
          return 208897 | (hasEscape ? -2147483648 : 0);
        if (!hasEscape)
          return token;
        if (token === 209006) {
          if ((context & (2 | 2048)) === 0) {
            return token | -2147483648;
          }
          return -2147483528;
        }
        if (context & 1) {
          if (token === 36970) {
            return -2147483527;
          }
          if ((token & 36864) === 36864) {
            return -2147483527;
          }
          if ((token & 20480) === 20480) {
            if (context & 262144 && (context & 8) === 0) {
              return token | -2147483648;
            } else {
              return -2147483528;
            }
          }
          return 209018 | -2147483648;
        }
        if (context & 262144 && (context & 8) === 0 && (token & 20480) === 20480) {
          return token | -2147483648;
        }
        if (token === 241771) {
          return context & 262144 ? 209018 | -2147483648 : context & 1024 ? -2147483528 : token | -2147483648;
        }
        if (token === 209005) {
          return 209018 | -2147483648;
        }
        if ((token & 36864) === 36864) {
          return token | 12288 | -2147483648;
        }
        return -2147483528;
      }
      return 208897 | (hasEscape ? -2147483648 : 0);
    }
    function scanPrivateIdentifier(parser) {
      let char = advanceChar(parser);
      if (char === 92)
        return 130;
      const merged = consumePossibleSurrogatePair(parser);
      if (merged)
        char = merged;
      if (!isIdentifierStart(char))
        parser.report(96);
      return 130;
    }
    function scanIdentifierUnicodeEscape(parser) {
      if (parser.source.charCodeAt(parser.index + 1) !== 117) {
        parser.report(5);
      }
      parser.currentChar = parser.source.charCodeAt(parser.index += 2);
      parser.column += 2;
      return scanUnicodeEscape(parser);
    }
    function scanUnicodeEscape(parser) {
      let codePoint = 0;
      const char = parser.currentChar;
      if (char === 123) {
        const begin = parser.index - 2;
        while (CharTypes[advanceChar(parser)] & 64) {
          codePoint = codePoint << 4 | toHex(parser.currentChar);
          if (codePoint > 1114111)
            throw new ParseError({ index: begin, line: parser.line, column: parser.column }, parser.currentLocation, 104);
        }
        if (parser.currentChar !== 125) {
          throw new ParseError({ index: begin, line: parser.line, column: parser.column }, parser.currentLocation, 7);
        }
        advanceChar(parser);
        return codePoint;
      }
      if ((CharTypes[char] & 64) === 0)
        parser.report(7);
      const char2 = parser.source.charCodeAt(parser.index + 1);
      if ((CharTypes[char2] & 64) === 0)
        parser.report(7);
      const char3 = parser.source.charCodeAt(parser.index + 2);
      if ((CharTypes[char3] & 64) === 0)
        parser.report(7);
      const char4 = parser.source.charCodeAt(parser.index + 3);
      if ((CharTypes[char4] & 64) === 0)
        parser.report(7);
      codePoint = toHex(char) << 12 | toHex(char2) << 8 | toHex(char3) << 4 | toHex(char4);
      parser.currentChar = parser.source.charCodeAt(parser.index += 4);
      parser.column += 4;
      return codePoint;
    }
    var TokenLookup = [
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      127,
      135,
      127,
      127,
      129,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      127,
      16842798,
      134283267,
      130,
      208897,
      8391477,
      8390213,
      134283267,
      67174411,
      16,
      8391476,
      25233968,
      18,
      25233969,
      67108877,
      8457014,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      21,
      1074790417,
      8456256,
      1077936155,
      8390721,
      22,
      132,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      69271571,
      136,
      20,
      8389959,
      208897,
      131,
      4096,
      4096,
      4096,
      4096,
      4096,
      4096,
      4096,
      208897,
      4096,
      208897,
      208897,
      4096,
      208897,
      4096,
      208897,
      4096,
      208897,
      4096,
      4096,
      4096,
      208897,
      4096,
      4096,
      208897,
      4096,
      4096,
      2162700,
      8389702,
      1074790415,
      16842799,
      128
    ];
    function nextToken(parser, context) {
      parser.flags = (parser.flags | 1) ^ 1;
      parser.startIndex = parser.index;
      parser.startColumn = parser.column;
      parser.startLine = parser.line;
      parser.setToken(scanSingleToken(parser, context, 0));
    }
    function scanSingleToken(parser, context, state) {
      const isStartOfLine = parser.index === 0;
      const { source } = parser;
      let start = parser.currentLocation;
      while (parser.index < parser.end) {
        parser.tokenIndex = parser.index;
        parser.tokenColumn = parser.column;
        parser.tokenLine = parser.line;
        let char = parser.currentChar;
        if (char <= 126) {
          const token = TokenLookup[char];
          switch (token) {
            case 67174411:
            case 16:
            case 2162700:
            case 1074790415:
            case 69271571:
            case 20:
            case 21:
            case 1074790417:
            case 18:
            case 16842799:
            case 132:
            case 128:
              advanceChar(parser);
              return token;
            case 208897:
              return scanIdentifier(parser, context, 0);
            case 4096:
              return scanIdentifier(parser, context, 1);
            case 134283266:
              return scanNumber(parser, context, 16 | 128);
            case 134283267:
              return scanString(parser, context, char);
            case 131:
              return scanTemplate(parser, context);
            case 136:
              return scanUnicodeIdentifier(parser, context);
            case 130:
              return scanPrivateIdentifier(parser);
            case 127:
              advanceChar(parser);
              break;
            case 129:
              state |= 1 | 4;
              scanNewLine(parser);
              break;
            case 135:
              consumeLineFeed(parser, state);
              state = state & -5 | 1;
              break;
            case 8456256: {
              const ch = advanceChar(parser);
              if (parser.index < parser.end) {
                if (ch === 60) {
                  if (parser.index < parser.end && advanceChar(parser) === 61) {
                    advanceChar(parser);
                    return 4194332;
                  }
                  return 8390978;
                } else if (ch === 61) {
                  advanceChar(parser);
                  return 8390718;
                }
                if (ch === 33) {
                  const index = parser.index + 1;
                  if (index + 1 < parser.end && source.charCodeAt(index) === 45 && source.charCodeAt(index + 1) == 45) {
                    parser.column += 3;
                    parser.currentChar = source.charCodeAt(parser.index += 3);
                    state = skipSingleHTMLComment(parser, source, state, context, 2, parser.tokenStart);
                    start = parser.tokenStart;
                    continue;
                  }
                  return 8456256;
                }
              }
              return 8456256;
            }
            case 1077936155: {
              advanceChar(parser);
              const ch = parser.currentChar;
              if (ch === 61) {
                if (advanceChar(parser) === 61) {
                  advanceChar(parser);
                  return 8390458;
                }
                return 8390460;
              }
              if (ch === 62) {
                advanceChar(parser);
                return 10;
              }
              return 1077936155;
            }
            case 16842798:
              if (advanceChar(parser) !== 61) {
                return 16842798;
              }
              if (advanceChar(parser) !== 61) {
                return 8390461;
              }
              advanceChar(parser);
              return 8390459;
            case 8391477:
              if (advanceChar(parser) !== 61)
                return 8391477;
              advanceChar(parser);
              return 4194340;
            case 8391476: {
              advanceChar(parser);
              if (parser.index >= parser.end)
                return 8391476;
              const ch = parser.currentChar;
              if (ch === 61) {
                advanceChar(parser);
                return 4194338;
              }
              if (ch !== 42)
                return 8391476;
              if (advanceChar(parser) !== 61)
                return 8391735;
              advanceChar(parser);
              return 4194335;
            }
            case 8389959:
              if (advanceChar(parser) !== 61)
                return 8389959;
              advanceChar(parser);
              return 4194341;
            case 25233968: {
              advanceChar(parser);
              const ch = parser.currentChar;
              if (ch === 43) {
                advanceChar(parser);
                return 33619993;
              }
              if (ch === 61) {
                advanceChar(parser);
                return 4194336;
              }
              return 25233968;
            }
            case 25233969: {
              advanceChar(parser);
              const ch = parser.currentChar;
              if (ch === 45) {
                advanceChar(parser);
                if ((state & 1 || isStartOfLine) && parser.currentChar === 62) {
                  if (!parser.options.webcompat)
                    parser.report(112);
                  advanceChar(parser);
                  state = skipSingleHTMLComment(parser, source, state, context, 3, start);
                  start = parser.tokenStart;
                  continue;
                }
                return 33619994;
              }
              if (ch === 61) {
                advanceChar(parser);
                return 4194337;
              }
              return 25233969;
            }
            case 8457014: {
              advanceChar(parser);
              if (parser.index < parser.end) {
                const ch = parser.currentChar;
                if (ch === 47) {
                  advanceChar(parser);
                  state = skipSingleLineComment(parser, source, state, 0, parser.tokenStart);
                  start = parser.tokenStart;
                  continue;
                }
                if (ch === 42) {
                  advanceChar(parser);
                  state = skipMultiLineComment(parser, source, state);
                  start = parser.tokenStart;
                  continue;
                }
                if (context & 32) {
                  return scanRegularExpression(parser);
                }
                if (ch === 61) {
                  advanceChar(parser);
                  return 4259875;
                }
              }
              return 8457014;
            }
            case 67108877: {
              const next = advanceChar(parser);
              if (next >= 48 && next <= 57)
                return scanNumber(parser, context, 64 | 16);
              if (next === 46) {
                const index = parser.index + 1;
                if (index < parser.end && source.charCodeAt(index) === 46) {
                  parser.column += 2;
                  parser.currentChar = source.charCodeAt(parser.index += 2);
                  return 14;
                }
              }
              return 67108877;
            }
            case 8389702: {
              advanceChar(parser);
              const ch = parser.currentChar;
              if (ch === 124) {
                advanceChar(parser);
                if (parser.currentChar === 61) {
                  advanceChar(parser);
                  return 4194344;
                }
                return 8913465;
              }
              if (ch === 61) {
                advanceChar(parser);
                return 4194342;
              }
              return 8389702;
            }
            case 8390721: {
              advanceChar(parser);
              const ch = parser.currentChar;
              if (ch === 61) {
                advanceChar(parser);
                return 8390719;
              }
              if (ch !== 62)
                return 8390721;
              advanceChar(parser);
              if (parser.index < parser.end) {
                const ch2 = parser.currentChar;
                if (ch2 === 62) {
                  if (advanceChar(parser) === 61) {
                    advanceChar(parser);
                    return 4194334;
                  }
                  return 8390980;
                }
                if (ch2 === 61) {
                  advanceChar(parser);
                  return 4194333;
                }
              }
              return 8390979;
            }
            case 8390213: {
              advanceChar(parser);
              const ch = parser.currentChar;
              if (ch === 38) {
                advanceChar(parser);
                if (parser.currentChar === 61) {
                  advanceChar(parser);
                  return 4194345;
                }
                return 8913720;
              }
              if (ch === 61) {
                advanceChar(parser);
                return 4194343;
              }
              return 8390213;
            }
            case 22: {
              let ch = advanceChar(parser);
              if (ch === 63) {
                advanceChar(parser);
                if (parser.currentChar === 61) {
                  advanceChar(parser);
                  return 4194346;
                }
                return 276824445;
              }
              if (ch === 46) {
                const index = parser.index + 1;
                if (index < parser.end) {
                  ch = source.charCodeAt(index);
                  if (!(ch >= 48 && ch <= 57)) {
                    advanceChar(parser);
                    return 67108990;
                  }
                }
              }
              return 22;
            }
          }
        } else {
          if ((char ^ 8232) <= 1) {
            state = state & -5 | 1;
            scanNewLine(parser);
            continue;
          }
          const merged = consumePossibleSurrogatePair(parser);
          if (merged > 0)
            char = merged;
          if (isIDStart(char)) {
            parser.tokenValue = "";
            return scanIdentifierSlowCase(parser, context, 0, 0);
          }
          if (isExoticECMAScriptWhitespace(char)) {
            advanceChar(parser);
            continue;
          }
          parser.report(20, String.fromCodePoint(char));
        }
      }
      return 1048576;
    }
    var entities = {
      AElig: "\xC6",
      AMP: "&",
      Aacute: "\xC1",
      Abreve: "\u0102",
      Acirc: "\xC2",
      Acy: "\u0410",
      Afr: "\u{1D504}",
      Agrave: "\xC0",
      Alpha: "\u0391",
      Amacr: "\u0100",
      And: "\u2A53",
      Aogon: "\u0104",
      Aopf: "\u{1D538}",
      ApplyFunction: "\u2061",
      Aring: "\xC5",
      Ascr: "\u{1D49C}",
      Assign: "\u2254",
      Atilde: "\xC3",
      Auml: "\xC4",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      Barwed: "\u2306",
      Bcy: "\u0411",
      Because: "\u2235",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      Bfr: "\u{1D505}",
      Bopf: "\u{1D539}",
      Breve: "\u02D8",
      Bscr: "\u212C",
      Bumpeq: "\u224E",
      CHcy: "\u0427",
      COPY: "\xA9",
      Cacute: "\u0106",
      Cap: "\u22D2",
      CapitalDifferentialD: "\u2145",
      Cayleys: "\u212D",
      Ccaron: "\u010C",
      Ccedil: "\xC7",
      Ccirc: "\u0108",
      Cconint: "\u2230",
      Cdot: "\u010A",
      Cedilla: "\xB8",
      CenterDot: "\xB7",
      Cfr: "\u212D",
      Chi: "\u03A7",
      CircleDot: "\u2299",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      Colon: "\u2237",
      Colone: "\u2A74",
      Congruent: "\u2261",
      Conint: "\u222F",
      ContourIntegral: "\u222E",
      Copf: "\u2102",
      Coproduct: "\u2210",
      CounterClockwiseContourIntegral: "\u2233",
      Cross: "\u2A2F",
      Cscr: "\u{1D49E}",
      Cup: "\u22D3",
      CupCap: "\u224D",
      DD: "\u2145",
      DDotrahd: "\u2911",
      DJcy: "\u0402",
      DScy: "\u0405",
      DZcy: "\u040F",
      Dagger: "\u2021",
      Darr: "\u21A1",
      Dashv: "\u2AE4",
      Dcaron: "\u010E",
      Dcy: "\u0414",
      Del: "\u2207",
      Delta: "\u0394",
      Dfr: "\u{1D507}",
      DiacriticalAcute: "\xB4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      Diamond: "\u22C4",
      DifferentialD: "\u2146",
      Dopf: "\u{1D53B}",
      Dot: "\xA8",
      DotDot: "\u20DC",
      DotEqual: "\u2250",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xA8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrow: "\u2193",
      DownArrowBar: "\u2913",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVector: "\u21BD",
      DownLeftVectorBar: "\u2956",
      DownRightTeeVector: "\u295F",
      DownRightVector: "\u21C1",
      DownRightVectorBar: "\u2957",
      DownTee: "\u22A4",
      DownTeeArrow: "\u21A7",
      Downarrow: "\u21D3",
      Dscr: "\u{1D49F}",
      Dstrok: "\u0110",
      ENG: "\u014A",
      ETH: "\xD0",
      Eacute: "\xC9",
      Ecaron: "\u011A",
      Ecirc: "\xCA",
      Ecy: "\u042D",
      Edot: "\u0116",
      Efr: "\u{1D508}",
      Egrave: "\xC8",
      Element: "\u2208",
      Emacr: "\u0112",
      EmptySmallSquare: "\u25FB",
      EmptyVerySmallSquare: "\u25AB",
      Eogon: "\u0118",
      Eopf: "\u{1D53C}",
      Epsilon: "\u0395",
      Equal: "\u2A75",
      EqualTilde: "\u2242",
      Equilibrium: "\u21CC",
      Escr: "\u2130",
      Esim: "\u2A73",
      Eta: "\u0397",
      Euml: "\xCB",
      Exists: "\u2203",
      ExponentialE: "\u2147",
      Fcy: "\u0424",
      Ffr: "\u{1D509}",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      Fopf: "\u{1D53D}",
      ForAll: "\u2200",
      Fouriertrf: "\u2131",
      Fscr: "\u2131",
      GJcy: "\u0403",
      GT: ">",
      Gamma: "\u0393",
      Gammad: "\u03DC",
      Gbreve: "\u011E",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      Gcy: "\u0413",
      Gdot: "\u0120",
      Gfr: "\u{1D50A}",
      Gg: "\u22D9",
      Gopf: "\u{1D53E}",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      Gt: "\u226B",
      HARDcy: "\u042A",
      Hacek: "\u02C7",
      Hat: "^",
      Hcirc: "\u0124",
      Hfr: "\u210C",
      HilbertSpace: "\u210B",
      Hopf: "\u210D",
      HorizontalLine: "\u2500",
      Hscr: "\u210B",
      Hstrok: "\u0126",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      IEcy: "\u0415",
      IJlig: "\u0132",
      IOcy: "\u0401",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Icy: "\u0418",
      Idot: "\u0130",
      Ifr: "\u2111",
      Igrave: "\xCC",
      Im: "\u2111",
      Imacr: "\u012A",
      ImaginaryI: "\u2148",
      Implies: "\u21D2",
      Int: "\u222C",
      Integral: "\u222B",
      Intersection: "\u22C2",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      Iogon: "\u012E",
      Iopf: "\u{1D540}",
      Iota: "\u0399",
      Iscr: "\u2110",
      Itilde: "\u0128",
      Iukcy: "\u0406",
      Iuml: "\xCF",
      Jcirc: "\u0134",
      Jcy: "\u0419",
      Jfr: "\u{1D50D}",
      Jopf: "\u{1D541}",
      Jscr: "\u{1D4A5}",
      Jsercy: "\u0408",
      Jukcy: "\u0404",
      KHcy: "\u0425",
      KJcy: "\u040C",
      Kappa: "\u039A",
      Kcedil: "\u0136",
      Kcy: "\u041A",
      Kfr: "\u{1D50E}",
      Kopf: "\u{1D542}",
      Kscr: "\u{1D4A6}",
      LJcy: "\u0409",
      LT: "<",
      Lacute: "\u0139",
      Lambda: "\u039B",
      Lang: "\u27EA",
      Laplacetrf: "\u2112",
      Larr: "\u219E",
      Lcaron: "\u013D",
      Lcedil: "\u013B",
      Lcy: "\u041B",
      LeftAngleBracket: "\u27E8",
      LeftArrow: "\u2190",
      LeftArrowBar: "\u21E4",
      LeftArrowRightArrow: "\u21C6",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVector: "\u21C3",
      LeftDownVectorBar: "\u2959",
      LeftFloor: "\u230A",
      LeftRightArrow: "\u2194",
      LeftRightVector: "\u294E",
      LeftTee: "\u22A3",
      LeftTeeArrow: "\u21A4",
      LeftTeeVector: "\u295A",
      LeftTriangle: "\u22B2",
      LeftTriangleBar: "\u29CF",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVector: "\u21BF",
      LeftUpVectorBar: "\u2958",
      LeftVector: "\u21BC",
      LeftVectorBar: "\u2952",
      Leftarrow: "\u21D0",
      Leftrightarrow: "\u21D4",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      LessLess: "\u2AA1",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      Lfr: "\u{1D50F}",
      Ll: "\u22D8",
      Lleftarrow: "\u21DA",
      Lmidot: "\u013F",
      LongLeftArrow: "\u27F5",
      LongLeftRightArrow: "\u27F7",
      LongRightArrow: "\u27F6",
      Longleftarrow: "\u27F8",
      Longleftrightarrow: "\u27FA",
      Longrightarrow: "\u27F9",
      Lopf: "\u{1D543}",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      Lscr: "\u2112",
      Lsh: "\u21B0",
      Lstrok: "\u0141",
      Lt: "\u226A",
      Map: "\u2905",
      Mcy: "\u041C",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      MinusPlus: "\u2213",
      Mopf: "\u{1D544}",
      Mscr: "\u2133",
      Mu: "\u039C",
      NJcy: "\u040A",
      Nacute: "\u0143",
      Ncaron: "\u0147",
      Ncedil: "\u0145",
      Ncy: "\u041D",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: "\n",
      Nfr: "\u{1D511}",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xA0",
      Nopf: "\u2115",
      Not: "\u2AEC",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangle: "\u22EB",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      Nscr: "\u{1D4A9}",
      Ntilde: "\xD1",
      Nu: "\u039D",
      OElig: "\u0152",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Ocy: "\u041E",
      Odblac: "\u0150",
      Ofr: "\u{1D512}",
      Ograve: "\xD2",
      Omacr: "\u014C",
      Omega: "\u03A9",
      Omicron: "\u039F",
      Oopf: "\u{1D546}",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      Or: "\u2A54",
      Oscr: "\u{1D4AA}",
      Oslash: "\xD8",
      Otilde: "\xD5",
      Otimes: "\u2A37",
      Ouml: "\xD6",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      PartialD: "\u2202",
      Pcy: "\u041F",
      Pfr: "\u{1D513}",
      Phi: "\u03A6",
      Pi: "\u03A0",
      PlusMinus: "\xB1",
      Poincareplane: "\u210C",
      Popf: "\u2119",
      Pr: "\u2ABB",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      Prime: "\u2033",
      Product: "\u220F",
      Proportion: "\u2237",
      Proportional: "\u221D",
      Pscr: "\u{1D4AB}",
      Psi: "\u03A8",
      QUOT: '"',
      Qfr: "\u{1D514}",
      Qopf: "\u211A",
      Qscr: "\u{1D4AC}",
      RBarr: "\u2910",
      REG: "\xAE",
      Racute: "\u0154",
      Rang: "\u27EB",
      Rarr: "\u21A0",
      Rarrtl: "\u2916",
      Rcaron: "\u0158",
      Rcedil: "\u0156",
      Rcy: "\u0420",
      Re: "\u211C",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      Rfr: "\u211C",
      Rho: "\u03A1",
      RightAngleBracket: "\u27E9",
      RightArrow: "\u2192",
      RightArrowBar: "\u21E5",
      RightArrowLeftArrow: "\u21C4",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVector: "\u21C2",
      RightDownVectorBar: "\u2955",
      RightFloor: "\u230B",
      RightTee: "\u22A2",
      RightTeeArrow: "\u21A6",
      RightTeeVector: "\u295B",
      RightTriangle: "\u22B3",
      RightTriangleBar: "\u29D0",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVector: "\u21BE",
      RightUpVectorBar: "\u2954",
      RightVector: "\u21C0",
      RightVectorBar: "\u2953",
      Rightarrow: "\u21D2",
      Ropf: "\u211D",
      RoundImplies: "\u2970",
      Rrightarrow: "\u21DB",
      Rscr: "\u211B",
      Rsh: "\u21B1",
      RuleDelayed: "\u29F4",
      SHCHcy: "\u0429",
      SHcy: "\u0428",
      SOFTcy: "\u042C",
      Sacute: "\u015A",
      Sc: "\u2ABC",
      Scaron: "\u0160",
      Scedil: "\u015E",
      Scirc: "\u015C",
      Scy: "\u0421",
      Sfr: "\u{1D516}",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      Sigma: "\u03A3",
      SmallCircle: "\u2218",
      Sopf: "\u{1D54A}",
      Sqrt: "\u221A",
      Square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      Sscr: "\u{1D4AE}",
      Star: "\u22C6",
      Sub: "\u22D0",
      Subset: "\u22D0",
      SubsetEqual: "\u2286",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      SuchThat: "\u220B",
      Sum: "\u2211",
      Sup: "\u22D1",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      Supset: "\u22D1",
      THORN: "\xDE",
      TRADE: "\u2122",
      TSHcy: "\u040B",
      TScy: "\u0426",
      Tab: "	",
      Tau: "\u03A4",
      Tcaron: "\u0164",
      Tcedil: "\u0162",
      Tcy: "\u0422",
      Tfr: "\u{1D517}",
      Therefore: "\u2234",
      Theta: "\u0398",
      ThickSpace: "\u205F\u200A",
      ThinSpace: "\u2009",
      Tilde: "\u223C",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      Topf: "\u{1D54B}",
      TripleDot: "\u20DB",
      Tscr: "\u{1D4AF}",
      Tstrok: "\u0166",
      Uacute: "\xDA",
      Uarr: "\u219F",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      Ubreve: "\u016C",
      Ucirc: "\xDB",
      Ucy: "\u0423",
      Udblac: "\u0170",
      Ufr: "\u{1D518}",
      Ugrave: "\xD9",
      Umacr: "\u016A",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      Uopf: "\u{1D54C}",
      UpArrow: "\u2191",
      UpArrowBar: "\u2912",
      UpArrowDownArrow: "\u21C5",
      UpDownArrow: "\u2195",
      UpEquilibrium: "\u296E",
      UpTee: "\u22A5",
      UpTeeArrow: "\u21A5",
      Uparrow: "\u21D1",
      Updownarrow: "\u21D5",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      Upsi: "\u03D2",
      Upsilon: "\u03A5",
      Uring: "\u016E",
      Uscr: "\u{1D4B0}",
      Utilde: "\u0168",
      Uuml: "\xDC",
      VDash: "\u22AB",
      Vbar: "\u2AEB",
      Vcy: "\u0412",
      Vdash: "\u22A9",
      Vdashl: "\u2AE6",
      Vee: "\u22C1",
      Verbar: "\u2016",
      Vert: "\u2016",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      Vopf: "\u{1D54D}",
      Vscr: "\u{1D4B1}",
      Vvdash: "\u22AA",
      Wcirc: "\u0174",
      Wedge: "\u22C0",
      Wfr: "\u{1D51A}",
      Wopf: "\u{1D54E}",
      Wscr: "\u{1D4B2}",
      Xfr: "\u{1D51B}",
      Xi: "\u039E",
      Xopf: "\u{1D54F}",
      Xscr: "\u{1D4B3}",
      YAcy: "\u042F",
      YIcy: "\u0407",
      YUcy: "\u042E",
      Yacute: "\xDD",
      Ycirc: "\u0176",
      Ycy: "\u042B",
      Yfr: "\u{1D51C}",
      Yopf: "\u{1D550}",
      Yscr: "\u{1D4B4}",
      Yuml: "\u0178",
      ZHcy: "\u0416",
      Zacute: "\u0179",
      Zcaron: "\u017D",
      Zcy: "\u0417",
      Zdot: "\u017B",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      Zfr: "\u2128",
      Zopf: "\u2124",
      Zscr: "\u{1D4B5}",
      aacute: "\xE1",
      abreve: "\u0103",
      ac: "\u223E",
      acE: "\u223E\u0333",
      acd: "\u223F",
      acirc: "\xE2",
      acute: "\xB4",
      acy: "\u0430",
      aelig: "\xE6",
      af: "\u2061",
      afr: "\u{1D51E}",
      agrave: "\xE0",
      alefsym: "\u2135",
      aleph: "\u2135",
      alpha: "\u03B1",
      amacr: "\u0101",
      amalg: "\u2A3F",
      amp: "&",
      and: "\u2227",
      andand: "\u2A55",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsd: "\u2221",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xC5",
      angzarr: "\u237C",
      aogon: "\u0105",
      aopf: "\u{1D552}",
      ap: "\u2248",
      apE: "\u2A70",
      apacir: "\u2A6F",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      approx: "\u2248",
      approxeq: "\u224A",
      aring: "\xE5",
      ascr: "\u{1D4B6}",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      atilde: "\xE3",
      auml: "\xE4",
      awconint: "\u2233",
      awint: "\u2A11",
      bNot: "\u2AED",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      barvee: "\u22BD",
      barwed: "\u2305",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bnot: "\u2310",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxDL: "\u2557",
      boxDR: "\u2554",
      boxDl: "\u2556",
      boxDr: "\u2553",
      boxH: "\u2550",
      boxHD: "\u2566",
      boxHU: "\u2569",
      boxHd: "\u2564",
      boxHu: "\u2567",
      boxUL: "\u255D",
      boxUR: "\u255A",
      boxUl: "\u255C",
      boxUr: "\u2559",
      boxV: "\u2551",
      boxVH: "\u256C",
      boxVL: "\u2563",
      boxVR: "\u2560",
      boxVh: "\u256B",
      boxVl: "\u2562",
      boxVr: "\u255F",
      boxbox: "\u29C9",
      boxdL: "\u2555",
      boxdR: "\u2552",
      boxdl: "\u2510",
      boxdr: "\u250C",
      boxh: "\u2500",
      boxhD: "\u2565",
      boxhU: "\u2568",
      boxhd: "\u252C",
      boxhu: "\u2534",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxuL: "\u255B",
      boxuR: "\u2558",
      boxul: "\u2518",
      boxur: "\u2514",
      boxv: "\u2502",
      boxvH: "\u256A",
      boxvL: "\u2561",
      boxvR: "\u255E",
      boxvh: "\u253C",
      boxvl: "\u2524",
      boxvr: "\u251C",
      bprime: "\u2035",
      breve: "\u02D8",
      brvbar: "\xA6",
      bscr: "\u{1D4B7}",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsol: "\\",
      bsolb: "\u29C5",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      bumpeq: "\u224F",
      cacute: "\u0107",
      cap: "\u2229",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      capcup: "\u2A47",
      capdot: "\u2A40",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      ccaps: "\u2A4D",
      ccaron: "\u010D",
      ccedil: "\xE7",
      ccirc: "\u0109",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      cdot: "\u010B",
      cedil: "\xB8",
      cemptyv: "\u29B2",
      cent: "\xA2",
      centerdot: "\xB7",
      cfr: "\u{1D520}",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      chi: "\u03C7",
      cir: "\u25CB",
      cirE: "\u29C3",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledR: "\xAE",
      circledS: "\u24C8",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      clubs: "\u2663",
      clubsuit: "\u2663",
      colon: ":",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      conint: "\u222E",
      copf: "\u{1D554}",
      coprod: "\u2210",
      copy: "\xA9",
      copysr: "\u2117",
      crarr: "\u21B5",
      cross: "\u2717",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      cup: "\u222A",
      cupbrcap: "\u2A48",
      cupcap: "\u2A46",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curren: "\xA4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      dArr: "\u21D3",
      dHar: "\u2965",
      dagger: "\u2020",
      daleth: "\u2138",
      darr: "\u2193",
      dash: "\u2010",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      dcaron: "\u010F",
      dcy: "\u0434",
      dd: "\u2146",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      ddotseq: "\u2A77",
      deg: "\xB0",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      dfr: "\u{1D521}",
      dharl: "\u21C3",
      dharr: "\u21C2",
      diam: "\u22C4",
      diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xA8",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xF7",
      divide: "\xF7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      dopf: "\u{1D555}",
      dot: "\u02D9",
      doteq: "\u2250",
      doteqdot: "\u2251",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      downarrow: "\u2193",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      dscr: "\u{1D4B9}",
      dscy: "\u0455",
      dsol: "\u29F6",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      eDDot: "\u2A77",
      eDot: "\u2251",
      eacute: "\xE9",
      easter: "\u2A6E",
      ecaron: "\u011B",
      ecir: "\u2256",
      ecirc: "\xEA",
      ecolon: "\u2255",
      ecy: "\u044D",
      edot: "\u0117",
      ee: "\u2147",
      efDot: "\u2252",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      egrave: "\xE8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      emptyv: "\u2205",
      emsp13: "\u2004",
      emsp14: "\u2005",
      emsp: "\u2003",
      eng: "\u014B",
      ensp: "\u2002",
      eogon: "\u0119",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      equals: "=",
      equest: "\u225F",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erDot: "\u2253",
      erarr: "\u2971",
      escr: "\u212F",
      esdot: "\u2250",
      esim: "\u2242",
      eta: "\u03B7",
      eth: "\xF0",
      euml: "\xEB",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      expectation: "\u2130",
      exponentiale: "\u2147",
      fallingdotseq: "\u2252",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      fopf: "\u{1D557}",
      forall: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      fpartint: "\u2A0D",
      frac12: "\xBD",
      frac13: "\u2153",
      frac14: "\xBC",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac34: "\xBE",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      fscr: "\u{1D4BB}",
      gE: "\u2267",
      gEl: "\u2A8C",
      gacute: "\u01F5",
      gamma: "\u03B3",
      gammad: "\u03DD",
      gap: "\u2A86",
      gbreve: "\u011F",
      gcirc: "\u011D",
      gcy: "\u0433",
      gdot: "\u0121",
      ge: "\u2265",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      ges: "\u2A7E",
      gescc: "\u2AA9",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      gfr: "\u{1D524}",
      gg: "\u226B",
      ggg: "\u22D9",
      gimel: "\u2137",
      gjcy: "\u0453",
      gl: "\u2277",
      glE: "\u2A92",
      gla: "\u2AA5",
      glj: "\u2AA4",
      gnE: "\u2269",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gne: "\u2A88",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      gopf: "\u{1D558}",
      grave: "`",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      gt: ">",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      hArr: "\u21D4",
      hairsp: "\u200A",
      half: "\xBD",
      hamilt: "\u210B",
      hardcy: "\u044A",
      harr: "\u2194",
      harrcir: "\u2948",
      harrw: "\u21AD",
      hbar: "\u210F",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      hfr: "\u{1D525}",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      hopf: "\u{1D559}",
      horbar: "\u2015",
      hscr: "\u{1D4BD}",
      hslash: "\u210F",
      hstrok: "\u0127",
      hybull: "\u2043",
      hyphen: "\u2010",
      iacute: "\xED",
      ic: "\u2063",
      icirc: "\xEE",
      icy: "\u0438",
      iecy: "\u0435",
      iexcl: "\xA1",
      iff: "\u21D4",
      ifr: "\u{1D526}",
      igrave: "\xEC",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      ijlig: "\u0133",
      imacr: "\u012B",
      image: "\u2111",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      imof: "\u22B7",
      imped: "\u01B5",
      in: "\u2208",
      incare: "\u2105",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      int: "\u222B",
      intcal: "\u22BA",
      integers: "\u2124",
      intercal: "\u22BA",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      iocy: "\u0451",
      iogon: "\u012F",
      iopf: "\u{1D55A}",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iquest: "\xBF",
      iscr: "\u{1D4BE}",
      isin: "\u2208",
      isinE: "\u22F9",
      isindot: "\u22F5",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      itilde: "\u0129",
      iukcy: "\u0456",
      iuml: "\xEF",
      jcirc: "\u0135",
      jcy: "\u0439",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      jopf: "\u{1D55B}",
      jscr: "\u{1D4BF}",
      jsercy: "\u0458",
      jukcy: "\u0454",
      kappa: "\u03BA",
      kappav: "\u03F0",
      kcedil: "\u0137",
      kcy: "\u043A",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      khcy: "\u0445",
      kjcy: "\u045C",
      kopf: "\u{1D55C}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      lArr: "\u21D0",
      lAtail: "\u291B",
      lBarr: "\u290E",
      lE: "\u2266",
      lEg: "\u2A8B",
      lHar: "\u2962",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      lambda: "\u03BB",
      lang: "\u27E8",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      laquo: "\xAB",
      larr: "\u2190",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      lat: "\u2AAB",
      latail: "\u2919",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lbarr: "\u290C",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      lcaron: "\u013E",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      le: "\u2264",
      leftarrow: "\u2190",
      leftarrowtail: "\u21A2",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      leftrightarrow: "\u2194",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      leftthreetimes: "\u22CB",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      les: "\u2A7D",
      lescc: "\u2AA8",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      lessgtr: "\u2276",
      lesssim: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      ljcy: "\u0459",
      ll: "\u226A",
      llarr: "\u21C7",
      llcorner: "\u231E",
      llhard: "\u296B",
      lltri: "\u25FA",
      lmidot: "\u0140",
      lmoust: "\u23B0",
      lmoustache: "\u23B0",
      lnE: "\u2268",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lne: "\u2A87",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      longleftarrow: "\u27F5",
      longleftrightarrow: "\u27F7",
      longmapsto: "\u27FC",
      longrightarrow: "\u27F6",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      lscr: "\u{1D4C1}",
      lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      lstrok: "\u0142",
      lt: "<",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltrPar: "\u2996",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      mDDot: "\u223A",
      macr: "\xAF",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      mcy: "\u043C",
      mdash: "\u2014",
      measuredangle: "\u2221",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micro: "\xB5",
      mid: "\u2223",
      midast: "*",
      midcir: "\u2AF0",
      middot: "\xB7",
      minus: "\u2212",
      minusb: "\u229F",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      mscr: "\u{1D4C2}",
      mstpos: "\u223E",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nGg: "\u22D9\u0338",
      nGt: "\u226B\u20D2",
      nGtv: "\u226B\u0338",
      nLeftarrow: "\u21CD",
      nLeftrightarrow: "\u21CE",
      nLl: "\u22D8\u0338",
      nLt: "\u226A\u20D2",
      nLtv: "\u226A\u0338",
      nRightarrow: "\u21CF",
      nVDash: "\u22AF",
      nVdash: "\u22AE",
      nabla: "\u2207",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natur: "\u266E",
      natural: "\u266E",
      naturals: "\u2115",
      nbsp: "\xA0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      ncaron: "\u0148",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      ncy: "\u043D",
      ndash: "\u2013",
      ne: "\u2260",
      neArr: "\u21D7",
      nearhk: "\u2924",
      nearr: "\u2197",
      nearrow: "\u2197",
      nedot: "\u2250\u0338",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      nexist: "\u2204",
      nexists: "\u2204",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      ngsim: "\u2275",
      ngt: "\u226F",
      ngtr: "\u226F",
      nhArr: "\u21CE",
      nharr: "\u21AE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      njcy: "\u045A",
      nlArr: "\u21CD",
      nlE: "\u2266\u0338",
      nlarr: "\u219A",
      nldr: "\u2025",
      nle: "\u2270",
      nleftarrow: "\u219A",
      nleftrightarrow: "\u21AE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nlsim: "\u2274",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nmid: "\u2224",
      nopf: "\u{1D55F}",
      not: "\xAC",
      notin: "\u2209",
      notinE: "\u22F9\u0338",
      notindot: "\u22F5\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      npar: "\u2226",
      nparallel: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      npre: "\u2AAF\u0338",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      nrArr: "\u21CF",
      nrarr: "\u219B",
      nrarrc: "\u2933\u0338",
      nrarrw: "\u219D\u0338",
      nrightarrow: "\u219B",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      ntilde: "\xF1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvDash: "\u22AD",
      nvHarr: "\u2904",
      nvap: "\u224D\u20D2",
      nvdash: "\u22AC",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwArr: "\u21D6",
      nwarhk: "\u2923",
      nwarr: "\u2196",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      oS: "\u24C8",
      oacute: "\xF3",
      oast: "\u229B",
      ocir: "\u229A",
      ocirc: "\xF4",
      ocy: "\u043E",
      odash: "\u229D",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      oelig: "\u0153",
      ofcir: "\u29BF",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      ograve: "\xF2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      omacr: "\u014D",
      omega: "\u03C9",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      operp: "\u29B9",
      oplus: "\u2295",
      or: "\u2228",
      orarr: "\u21BB",
      ord: "\u2A5D",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xAA",
      ordm: "\xBA",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oscr: "\u2134",
      oslash: "\xF8",
      osol: "\u2298",
      otilde: "\xF5",
      otimes: "\u2297",
      otimesas: "\u2A36",
      ouml: "\xF6",
      ovbar: "\u233D",
      par: "\u2225",
      para: "\xB6",
      parallel: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      pfr: "\u{1D52D}",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plus: "+",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      plusmn: "\xB1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xB1",
      pointint: "\u2A15",
      popf: "\u{1D561}",
      pound: "\xA3",
      pr: "\u227A",
      prE: "\u2AB3",
      prap: "\u2AB7",
      prcue: "\u227C",
      pre: "\u2AAF",
      prec: "\u227A",
      precapprox: "\u2AB7",
      preccurlyeq: "\u227C",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      precsim: "\u227E",
      prime: "\u2032",
      primes: "\u2119",
      prnE: "\u2AB5",
      prnap: "\u2AB9",
      prnsim: "\u22E8",
      prod: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      pscr: "\u{1D4C5}",
      psi: "\u03C8",
      puncsp: "\u2008",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      qopf: "\u{1D562}",
      qprime: "\u2057",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      quot: '"',
      rAarr: "\u21DB",
      rArr: "\u21D2",
      rAtail: "\u291C",
      rBarr: "\u290F",
      rHar: "\u2964",
      race: "\u223D\u0331",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      rang: "\u27E9",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raquo: "\xBB",
      rarr: "\u2192",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      ratail: "\u291A",
      ratio: "\u2236",
      rationals: "\u211A",
      rbarr: "\u290D",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      rcaron: "\u0159",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      rect: "\u25AD",
      reg: "\xAE",
      rfisht: "\u297D",
      rfloor: "\u230B",
      rfr: "\u{1D52F}",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      rho: "\u03C1",
      rhov: "\u03F1",
      rightarrow: "\u2192",
      rightarrowtail: "\u21A3",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      rightthreetimes: "\u22CC",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoust: "\u23B1",
      rmoustache: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      ropf: "\u{1D563}",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      rsaquo: "\u203A",
      rscr: "\u{1D4C7}",
      rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      ruluhar: "\u2968",
      rx: "\u211E",
      sacute: "\u015B",
      sbquo: "\u201A",
      sc: "\u227B",
      scE: "\u2AB4",
      scap: "\u2AB8",
      scaron: "\u0161",
      sccue: "\u227D",
      sce: "\u2AB0",
      scedil: "\u015F",
      scirc: "\u015D",
      scnE: "\u2AB6",
      scnap: "\u2ABA",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      scy: "\u0441",
      sdot: "\u22C5",
      sdotb: "\u22A1",
      sdote: "\u2A66",
      seArr: "\u21D8",
      searhk: "\u2925",
      searr: "\u2198",
      searrow: "\u2198",
      sect: "\xA7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      shchcy: "\u0449",
      shcy: "\u0448",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      shy: "\xAD",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      softcy: "\u044C",
      sol: "/",
      solb: "\u29C4",
      solbar: "\u233F",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      squ: "\u25A1",
      square: "\u25A1",
      squarf: "\u25AA",
      squf: "\u25AA",
      srarr: "\u2192",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xAF",
      sub: "\u2282",
      subE: "\u2AC5",
      subdot: "\u2ABD",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      subset: "\u2282",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succ: "\u227B",
      succapprox: "\u2AB8",
      succcurlyeq: "\u227D",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      sum: "\u2211",
      sung: "\u266A",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      sup: "\u2283",
      supE: "\u2AC6",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supe: "\u2287",
      supedot: "\u2AC4",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      supset: "\u2283",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swArr: "\u21D9",
      swarhk: "\u2926",
      swarr: "\u2199",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szlig: "\xDF",
      target: "\u2316",
      tau: "\u03C4",
      tbrk: "\u23B4",
      tcaron: "\u0165",
      tcedil: "\u0163",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      tfr: "\u{1D531}",
      there4: "\u2234",
      therefore: "\u2234",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      thinsp: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      thorn: "\xFE",
      tilde: "\u02DC",
      times: "\xD7",
      timesb: "\u22A0",
      timesbar: "\u2A31",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      top: "\u22A4",
      topbot: "\u2336",
      topcir: "\u2AF1",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      trade: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      tscr: "\u{1D4C9}",
      tscy: "\u0446",
      tshcy: "\u045B",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      uArr: "\u21D1",
      uHar: "\u2963",
      uacute: "\xFA",
      uarr: "\u2191",
      ubrcy: "\u045E",
      ubreve: "\u016D",
      ucirc: "\xFB",
      ucy: "\u0443",
      udarr: "\u21C5",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      ufr: "\u{1D532}",
      ugrave: "\xF9",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      umacr: "\u016B",
      uml: "\xA8",
      uogon: "\u0173",
      uopf: "\u{1D566}",
      uparrow: "\u2191",
      updownarrow: "\u2195",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      upsi: "\u03C5",
      upsih: "\u03D2",
      upsilon: "\u03C5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      uring: "\u016F",
      urtri: "\u25F9",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      uuml: "\xFC",
      uwangle: "\u29A7",
      vArr: "\u21D5",
      vBar: "\u2AE8",
      vBarv: "\u2AE9",
      vDash: "\u22A8",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      varr: "\u2195",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      vcy: "\u0432",
      vdash: "\u22A2",
      vee: "\u2228",
      veebar: "\u22BB",
      veeeq: "\u225A",
      vellip: "\u22EE",
      verbar: "|",
      vert: "|",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      vzigzag: "\u299A",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      wedge: "\u2227",
      wedgeq: "\u2259",
      weierp: "\u2118",
      wfr: "\u{1D534}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      xfr: "\u{1D535}",
      xhArr: "\u27FA",
      xharr: "\u27F7",
      xi: "\u03BE",
      xlArr: "\u27F8",
      xlarr: "\u27F5",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrArr: "\u27F9",
      xrarr: "\u27F6",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      yacute: "\xFD",
      yacy: "\u044F",
      ycirc: "\u0177",
      ycy: "\u044B",
      yen: "\xA5",
      yfr: "\u{1D536}",
      yicy: "\u0457",
      yopf: "\u{1D56A}",
      yscr: "\u{1D4CE}",
      yucy: "\u044E",
      yuml: "\xFF",
      zacute: "\u017A",
      zcaron: "\u017E",
      zcy: "\u0437",
      zdot: "\u017C",
      zeetrf: "\u2128",
      zeta: "\u03B6",
      zfr: "\u{1D537}",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      zopf: "\u{1D56B}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C"
    };
    var decodeMap = {
      "0": 65533,
      "128": 8364,
      "130": 8218,
      "131": 402,
      "132": 8222,
      "133": 8230,
      "134": 8224,
      "135": 8225,
      "136": 710,
      "137": 8240,
      "138": 352,
      "139": 8249,
      "140": 338,
      "142": 381,
      "145": 8216,
      "146": 8217,
      "147": 8220,
      "148": 8221,
      "149": 8226,
      "150": 8211,
      "151": 8212,
      "152": 732,
      "153": 8482,
      "154": 353,
      "155": 8250,
      "156": 339,
      "158": 382,
      "159": 376
    };
    function decodeHTMLStrict(text) {
      return text.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (key) => {
        if (key.charAt(1) === "#") {
          const secondChar = key.charAt(2);
          const codePoint = secondChar === "X" || secondChar === "x" ? parseInt(key.slice(3), 16) : parseInt(key.slice(2), 10);
          return decodeCodePoint(codePoint);
        }
        return getOwnProperty(entities, key.slice(1, -1)) ?? key;
      });
    }
    function decodeCodePoint(codePoint) {
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return "\uFFFD";
      }
      return String.fromCodePoint(getOwnProperty(decodeMap, codePoint) ?? codePoint);
    }
    function scanJSXAttributeValue(parser, context) {
      parser.startIndex = parser.tokenIndex = parser.index;
      parser.startColumn = parser.tokenColumn = parser.column;
      parser.startLine = parser.tokenLine = parser.line;
      parser.setToken(CharTypes[parser.currentChar] & 8192 ? scanJSXString(parser) : scanSingleToken(parser, context, 0));
      return parser.getToken();
    }
    function scanJSXString(parser) {
      const quote = parser.currentChar;
      let char = advanceChar(parser);
      const start = parser.index;
      while (char !== quote) {
        if (parser.index >= parser.end)
          parser.report(16);
        char = advanceChar(parser);
      }
      if (char !== quote)
        parser.report(16);
      parser.tokenValue = parser.source.slice(start, parser.index);
      advanceChar(parser);
      if (parser.options.raw)
        parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
      return 134283267;
    }
    function nextJSXToken(parser) {
      parser.startIndex = parser.tokenIndex = parser.index;
      parser.startColumn = parser.tokenColumn = parser.column;
      parser.startLine = parser.tokenLine = parser.line;
      if (parser.index >= parser.end) {
        parser.setToken(1048576);
        return;
      }
      if (parser.currentChar === 60) {
        advanceChar(parser);
        parser.setToken(8456256);
        return;
      }
      if (parser.currentChar === 123) {
        advanceChar(parser);
        parser.setToken(2162700);
        return;
      }
      let state = 0;
      while (parser.index < parser.end) {
        const type = CharTypes[parser.source.charCodeAt(parser.index)];
        if (type & 1024) {
          state |= 1 | 4;
          scanNewLine(parser);
        } else if (type & 2048) {
          consumeLineFeed(parser, state);
          state = state & -5 | 1;
        } else {
          advanceChar(parser);
        }
        if (CharTypes[parser.currentChar] & 16384)
          break;
      }
      if (parser.tokenIndex === parser.index)
        parser.report(0);
      const raw = parser.source.slice(parser.tokenIndex, parser.index);
      if (parser.options.raw)
        parser.tokenRaw = raw;
      parser.tokenValue = decodeHTMLStrict(raw);
      parser.setToken(137);
    }
    function rescanJSXIdentifier(parser) {
      if ((parser.getToken() & 143360) === 143360) {
        const { index } = parser;
        let char = parser.currentChar;
        while (CharTypes[char] & (32768 | 2)) {
          char = advanceChar(parser);
        }
        parser.tokenValue += parser.source.slice(index, parser.index);
        parser.setToken(208897, true);
      }
      return parser.getToken();
    }
    var Scope = class _Scope {
      parser;
      type;
      parent;
      scopeError;
      variableBindings = /* @__PURE__ */ new Map();
      constructor(parser, type = 2, parent) {
        this.parser = parser;
        this.type = type;
        this.parent = parent;
      }
      createChildScope(type) {
        return new _Scope(this.parser, type, this);
      }
      addVarOrBlock(context, name, kind, origin) {
        if (kind & 4) {
          this.addVarName(context, name, kind);
        } else {
          this.addBlockName(context, name, kind, origin);
        }
        if (origin & 64) {
          this.parser.declareUnboundVariable(name);
        }
      }
      addVarName(context, name, kind) {
        const { parser } = this;
        let currentScope = this;
        while (currentScope && (currentScope.type & 128) === 0) {
          const { variableBindings } = currentScope;
          const value = variableBindings.get(name);
          if (value && value & 248) {
            if (parser.options.webcompat && (context & 1) === 0 && (kind & 128 && value & 68 || value & 128 && kind & 68)) ;
            else {
              parser.report(145, name);
            }
          }
          if (currentScope === this) {
            if (value && value & 1 && kind & 1) {
              currentScope.recordScopeError(145, name);
            }
          }
          if (value && (value & 256 || value & 512 && !parser.options.webcompat)) {
            parser.report(145, name);
          }
          currentScope.variableBindings.set(name, kind);
          currentScope = currentScope.parent;
        }
      }
      hasVariable(name) {
        return this.variableBindings.has(name);
      }
      addBlockName(context, name, kind, origin) {
        const { parser } = this;
        const value = this.variableBindings.get(name);
        if (value && (value & 2) === 0) {
          if (kind & 1) {
            this.recordScopeError(145, name);
          } else if (parser.options.webcompat && (context & 1) === 0 && origin & 2 && value === 64 && kind === 64) ;
          else {
            parser.report(145, name);
          }
        }
        if (this.type & 64 && this.parent?.hasVariable(name) && (this.parent.variableBindings.get(name) & 2) === 0) {
          parser.report(145, name);
        }
        if (this.type & 512 && value && (value & 2) === 0) {
          if (kind & 1) {
            this.recordScopeError(145, name);
          }
        }
        if (this.type & 32) {
          if (this.parent.variableBindings.get(name) & 768)
            parser.report(159, name);
        }
        this.variableBindings.set(name, kind);
      }
      recordScopeError(type, ...params) {
        this.scopeError = {
          type,
          params,
          start: this.parser.tokenStart,
          end: this.parser.currentLocation
        };
      }
      reportScopeError() {
        const { scopeError } = this;
        if (!scopeError) {
          return;
        }
        throw new ParseError(scopeError.start, scopeError.end, scopeError.type, ...scopeError.params);
      }
    };
    function createArrowHeadParsingScope(parser, context, value) {
      const scope = parser.createScope().createChildScope(512);
      scope.addBlockName(context, value, 1, 0);
      return scope;
    }
    var PrivateScope = class {
      parser;
      parent;
      refs = /* @__PURE__ */ Object.create(null);
      privateIdentifiers = /* @__PURE__ */ new Map();
      constructor(parser, parent) {
        this.parser = parser;
        this.parent = parent;
      }
      addPrivateIdentifier(name, kind) {
        const { privateIdentifiers } = this;
        let focusKind = kind & (32 | 768);
        if (!(focusKind & 768))
          focusKind |= 768;
        const value = privateIdentifiers.get(name);
        if (this.hasPrivateIdentifier(name) && ((value & 32) !== (focusKind & 32) || value & focusKind & 768)) {
          this.parser.report(146, name);
        }
        privateIdentifiers.set(name, this.hasPrivateIdentifier(name) ? value | focusKind : focusKind);
      }
      addPrivateIdentifierRef(name) {
        this.refs[name] ??= [];
        this.refs[name].push(this.parser.tokenStart);
      }
      isPrivateIdentifierDefined(name) {
        return this.hasPrivateIdentifier(name) || Boolean(this.parent?.isPrivateIdentifierDefined(name));
      }
      validatePrivateIdentifierRefs() {
        for (const name in this.refs) {
          if (!this.isPrivateIdentifierDefined(name)) {
            const { index, line, column } = this.refs[name][0];
            throw new ParseError({ index, line, column }, { index: index + name.length, line, column: column + name.length }, 4, name);
          }
        }
      }
      hasPrivateIdentifier(name) {
        return this.privateIdentifiers.has(name);
      }
    };
    var Parser = class {
      source;
      options;
      lastOnToken = null;
      token = 1048576;
      flags = 0;
      index = 0;
      line = 1;
      column = 0;
      startIndex = 0;
      end = 0;
      tokenIndex = 0;
      startColumn = 0;
      tokenColumn = 0;
      tokenLine = 1;
      startLine = 1;
      tokenValue = "";
      tokenRaw = "";
      tokenRegExp = void 0;
      currentChar = 0;
      exportedNames = /* @__PURE__ */ new Set();
      exportedBindings = /* @__PURE__ */ new Set();
      assignable = 1;
      destructible = 0;
      leadingDecorators = { decorators: [] };
      constructor(source, options = {}) {
        this.source = source;
        this.options = options;
        this.end = source.length;
        this.currentChar = source.charCodeAt(0);
      }
      getToken() {
        return this.token;
      }
      setToken(value, replaceLast = false) {
        this.token = value;
        const { onToken } = this.options;
        if (onToken) {
          if (value !== 1048576) {
            const loc = {
              start: {
                line: this.tokenLine,
                column: this.tokenColumn
              },
              end: {
                line: this.line,
                column: this.column
              }
            };
            if (!replaceLast && this.lastOnToken) {
              onToken(...this.lastOnToken);
            }
            this.lastOnToken = [convertTokenType(value), this.tokenIndex, this.index, loc];
          } else {
            if (this.lastOnToken) {
              onToken(...this.lastOnToken);
              this.lastOnToken = null;
            }
          }
        }
        return value;
      }
      get tokenStart() {
        return {
          index: this.tokenIndex,
          line: this.tokenLine,
          column: this.tokenColumn
        };
      }
      get currentLocation() {
        return { index: this.index, line: this.line, column: this.column };
      }
      finishNode(node, start, end) {
        if (this.options.ranges) {
          node.start = start.index;
          const endIndex = end ? end.index : this.startIndex;
          node.end = endIndex;
          node.range = [start.index, endIndex];
        }
        if (this.options.loc) {
          node.loc = {
            start: {
              line: start.line,
              column: start.column
            },
            end: end ? { line: end.line, column: end.column } : { line: this.startLine, column: this.startColumn }
          };
          if (this.options.source) {
            node.loc.source = this.options.source;
          }
        }
        return node;
      }
      addBindingToExports(name) {
        this.exportedBindings.add(name);
      }
      declareUnboundVariable(name) {
        const { exportedNames } = this;
        if (exportedNames.has(name)) {
          this.report(147, name);
        }
        exportedNames.add(name);
      }
      report(type, ...params) {
        throw new ParseError(this.tokenStart, this.currentLocation, type, ...params);
      }
      createScopeIfLexical(type, parent) {
        if (this.options.lexical) {
          return this.createScope(type, parent);
        }
        return void 0;
      }
      createScope(type, parent) {
        return new Scope(this, type, parent);
      }
      createPrivateScopeIfLexical(parent) {
        if (this.options.lexical) {
          return new PrivateScope(this, parent);
        }
        return void 0;
      }
    };
    function pushComment(comments, options) {
      return function(type, value, start, end, loc) {
        const comment = {
          type,
          value
        };
        if (options.ranges) {
          comment.start = start;
          comment.end = end;
          comment.range = [start, end];
        }
        if (options.loc) {
          comment.loc = loc;
        }
        comments.push(comment);
      };
    }
    function pushToken(tokens, options) {
      return function(type, start, end, loc) {
        const token = {
          token: type
        };
        if (options.ranges) {
          token.start = start;
          token.end = end;
          token.range = [start, end];
        }
        if (options.loc) {
          token.loc = loc;
        }
        tokens.push(token);
      };
    }
    function normalizeOptions(rawOptions) {
      const options = { ...rawOptions };
      if (options.onComment) {
        options.onComment = Array.isArray(options.onComment) ? pushComment(options.onComment, options) : options.onComment;
      }
      if (options.onToken) {
        options.onToken = Array.isArray(options.onToken) ? pushToken(options.onToken, options) : options.onToken;
      }
      return options;
    }
    function parseSource(source, rawOptions = {}, context = 0) {
      const options = normalizeOptions(rawOptions);
      if (options.module)
        context |= 2 | 1;
      if (options.globalReturn)
        context |= 4096;
      if (options.impliedStrict)
        context |= 1;
      const parser = new Parser(source, options);
      skipHashBang(parser);
      const scope = parser.createScopeIfLexical();
      let body = [];
      let sourceType = "script";
      if (context & 2) {
        sourceType = "module";
        body = parseModuleItemList(parser, context | 8, scope);
        if (scope) {
          for (const name of parser.exportedBindings) {
            if (!scope.hasVariable(name))
              parser.report(148, name);
          }
        }
      } else {
        body = parseStatementList(parser, context | 8, scope);
      }
      return parser.finishNode({
        type: "Program",
        sourceType,
        body
      }, { index: 0, line: 1, column: 0 }, parser.currentLocation);
    }
    function parseStatementList(parser, context, scope) {
      nextToken(parser, context | 32 | 262144);
      const statements = [];
      while (parser.getToken() === 134283267) {
        const { index, tokenValue, tokenStart, tokenIndex } = parser;
        const token = parser.getToken();
        const expr = parseLiteral(parser, context);
        if (isValidStrictMode(parser, index, tokenIndex, tokenValue)) {
          context |= 1;
          if (parser.flags & 64) {
            throw new ParseError(parser.tokenStart, parser.currentLocation, 9);
          }
          if (parser.flags & 4096) {
            throw new ParseError(parser.tokenStart, parser.currentLocation, 15);
          }
        }
        statements.push(parseDirective(parser, context, expr, token, tokenStart));
      }
      while (parser.getToken() !== 1048576) {
        statements.push(parseStatementListItem(parser, context, scope, void 0, 4, {}));
      }
      return statements;
    }
    function parseModuleItemList(parser, context, scope) {
      nextToken(parser, context | 32);
      const statements = [];
      while (parser.getToken() === 134283267) {
        const { tokenStart } = parser;
        const token = parser.getToken();
        statements.push(parseDirective(parser, context, parseLiteral(parser, context), token, tokenStart));
      }
      while (parser.getToken() !== 1048576) {
        statements.push(parseModuleItem(parser, context, scope));
      }
      return statements;
    }
    function parseModuleItem(parser, context, scope) {
      if (parser.getToken() === 132) {
        Object.assign(parser.leadingDecorators, {
          start: parser.tokenStart,
          decorators: parseDecorators(parser, context, void 0)
        });
      }
      let moduleItem;
      switch (parser.getToken()) {
        case 20564:
          moduleItem = parseExportDeclaration(parser, context, scope);
          break;
        case 86106:
          moduleItem = parseImportDeclaration(parser, context, scope);
          break;
        default:
          moduleItem = parseStatementListItem(parser, context, scope, void 0, 4, {});
      }
      if (parser.leadingDecorators?.decorators.length) {
        parser.report(170);
      }
      return moduleItem;
    }
    function parseStatementListItem(parser, context, scope, privateScope, origin, labels) {
      const start = parser.tokenStart;
      switch (parser.getToken()) {
        case 86104:
          return parseFunctionDeclaration(parser, context, scope, privateScope, origin, 1, 0, 0, start);
        case 132:
        case 86094:
          return parseClassDeclaration(parser, context, scope, privateScope, 0);
        case 86090:
          return parseLexicalDeclaration(parser, context, scope, privateScope, 16, 0);
        case 241737:
          return parseLetIdentOrVarDeclarationStatement(parser, context, scope, privateScope, origin);
        case 20564:
          parser.report(103, "export");
        case 86106:
          nextToken(parser, context);
          switch (parser.getToken()) {
            case 67174411:
              return parseImportCallDeclaration(parser, context, privateScope, start);
            case 67108877:
              return parseImportMetaDeclaration(parser, context, start);
            default:
              parser.report(103, "import");
          }
        case 209005:
          return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, 1);
        default:
          return parseStatement(parser, context, scope, privateScope, origin, labels, 1);
      }
    }
    function parseStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl) {
      switch (parser.getToken()) {
        case 86088:
          return parseVariableStatement(parser, context, scope, privateScope, 0);
        case 20572:
          return parseReturnStatement(parser, context, privateScope);
        case 20569:
          return parseIfStatement(parser, context, scope, privateScope, labels);
        case 20567:
          return parseForStatement(parser, context, scope, privateScope, labels);
        case 20562:
          return parseDoWhileStatement(parser, context, scope, privateScope, labels);
        case 20578:
          return parseWhileStatement(parser, context, scope, privateScope, labels);
        case 86110:
          return parseSwitchStatement(parser, context, scope, privateScope, labels);
        case 1074790417:
          return parseEmptyStatement(parser, context);
        case 2162700:
          return parseBlock(parser, context, scope?.createChildScope(), privateScope, labels, parser.tokenStart);
        case 86112:
          return parseThrowStatement(parser, context, privateScope);
        case 20555:
          return parseBreakStatement(parser, context, labels);
        case 20559:
          return parseContinueStatement(parser, context, labels);
        case 20577:
          return parseTryStatement(parser, context, scope, privateScope, labels);
        case 20579:
          return parseWithStatement(parser, context, scope, privateScope, labels);
        case 20560:
          return parseDebuggerStatement(parser, context);
        case 209005:
          return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, 0);
        case 20557:
          parser.report(162);
        case 20566:
          parser.report(163);
        case 86104:
          parser.report(context & 1 ? 76 : !parser.options.webcompat ? 78 : 77);
        case 86094:
          parser.report(79);
        default:
          return parseExpressionOrLabelledStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl);
      }
    }
    function parseExpressionOrLabelledStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl) {
      const { tokenValue, tokenStart } = parser;
      const token = parser.getToken();
      let expr;
      switch (token) {
        case 241737:
          expr = parseIdentifier(parser, context);
          if (context & 1)
            parser.report(85);
          if (parser.getToken() === 69271571)
            parser.report(84);
          break;
        default:
          expr = parsePrimaryExpression(parser, context, privateScope, 2, 0, 1, 0, 1, parser.tokenStart);
      }
      if (token & 143360 && parser.getToken() === 21) {
        return parseLabelledStatement(parser, context, scope, privateScope, origin, labels, tokenValue, expr, token, allowFuncDecl, tokenStart);
      }
      expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
      expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, tokenStart, expr);
      if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, tokenStart, expr);
      }
      return parseExpressionStatement(parser, context, expr, tokenStart);
    }
    function parseBlock(parser, context, scope, privateScope, labels, start = parser.tokenStart, type = "BlockStatement") {
      const body = [];
      consume(parser, context | 32, 2162700);
      while (parser.getToken() !== 1074790415) {
        body.push(parseStatementListItem(parser, context, scope, privateScope, 2, { $: labels }));
      }
      consume(parser, context | 32, 1074790415);
      return parser.finishNode({
        type,
        body
      }, start);
    }
    function parseReturnStatement(parser, context, privateScope) {
      if ((context & 4096) === 0)
        parser.report(92);
      const start = parser.tokenStart;
      nextToken(parser, context | 32);
      const argument = parser.flags & 1 || parser.getToken() & 1048576 ? null : parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
      matchOrInsertSemicolon(parser, context | 32);
      return parser.finishNode({
        type: "ReturnStatement",
        argument
      }, start);
    }
    function parseExpressionStatement(parser, context, expression, start) {
      matchOrInsertSemicolon(parser, context | 32);
      return parser.finishNode({
        type: "ExpressionStatement",
        expression
      }, start);
    }
    function parseLabelledStatement(parser, context, scope, privateScope, origin, labels, value, expr, token, allowFuncDecl, start) {
      validateBindingIdentifier(parser, context, 0, token, 1);
      validateAndDeclareLabel(parser, labels, value);
      nextToken(parser, context | 32);
      const body = allowFuncDecl && (context & 1) === 0 && parser.options.webcompat && parser.getToken() === 86104 ? parseFunctionDeclaration(parser, context, scope?.createChildScope(), privateScope, origin, 0, 0, 0, parser.tokenStart) : parseStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl);
      return parser.finishNode({
        type: "LabeledStatement",
        label: expr,
        body
      }, start);
    }
    function parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, allowFuncDecl) {
      const { tokenValue, tokenStart: start } = parser;
      const token = parser.getToken();
      let expr = parseIdentifier(parser, context);
      if (parser.getToken() === 21) {
        return parseLabelledStatement(parser, context, scope, privateScope, origin, labels, tokenValue, expr, token, 1, start);
      }
      const asyncNewLine = parser.flags & 1;
      if (!asyncNewLine) {
        if (parser.getToken() === 86104) {
          if (!allowFuncDecl)
            parser.report(123);
          return parseFunctionDeclaration(parser, context, scope, privateScope, origin, 1, 0, 1, start);
        }
        if (isValidIdentifier(context, parser.getToken())) {
          expr = parseAsyncArrowAfterIdent(parser, context, privateScope, 1, start);
          if (parser.getToken() === 18)
            expr = parseSequenceExpression(parser, context, privateScope, 0, start, expr);
          return parseExpressionStatement(parser, context, expr, start);
        }
      }
      if (parser.getToken() === 67174411) {
        expr = parseAsyncArrowOrCallExpression(parser, context, privateScope, expr, 1, 1, 0, asyncNewLine, start);
      } else {
        if (parser.getToken() === 10) {
          classifyIdentifier(parser, context, token);
          if ((token & 36864) === 36864) {
            parser.flags |= 256;
          }
          expr = parseArrowFromIdentifier(parser, context | 2048, privateScope, parser.tokenValue, expr, 0, 1, 0, start);
        }
        parser.assignable = 1;
      }
      expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, start);
      expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, start, expr);
      parser.assignable = 1;
      if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, start, expr);
      }
      return parseExpressionStatement(parser, context, expr, start);
    }
    function parseDirective(parser, context, expression, token, start) {
      const endIndex = parser.startIndex;
      if (token !== 1074790417) {
        parser.assignable = 2;
        expression = parseMemberOrUpdateExpression(parser, context, void 0, expression, 0, 0, start);
        if (parser.getToken() !== 1074790417) {
          expression = parseAssignmentExpression(parser, context, void 0, 0, 0, start, expression);
          if (parser.getToken() === 18) {
            expression = parseSequenceExpression(parser, context, void 0, 0, start, expression);
          }
        }
        matchOrInsertSemicolon(parser, context | 32);
      }
      const node = {
        type: "ExpressionStatement",
        expression
      };
      if (expression.type === "Literal" && typeof expression.value === "string") {
        node.directive = parser.source.slice(start.index + 1, endIndex - 1);
      }
      return parser.finishNode(node, start);
    }
    function parseEmptyStatement(parser, context) {
      const start = parser.tokenStart;
      nextToken(parser, context | 32);
      return parser.finishNode({
        type: "EmptyStatement"
      }, start);
    }
    function parseThrowStatement(parser, context, privateScope) {
      const start = parser.tokenStart;
      nextToken(parser, context | 32);
      if (parser.flags & 1)
        parser.report(90);
      const argument = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
      matchOrInsertSemicolon(parser, context | 32);
      return parser.finishNode({
        type: "ThrowStatement",
        argument
      }, start);
    }
    function parseIfStatement(parser, context, scope, privateScope, labels) {
      const start = parser.tokenStart;
      nextToken(parser, context);
      consume(parser, context | 32, 67174411);
      parser.assignable = 1;
      const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
      consume(parser, context | 32, 16);
      const consequent = parseConsequentOrAlternative(parser, context, scope, privateScope, labels);
      let alternate = null;
      if (parser.getToken() === 20563) {
        nextToken(parser, context | 32);
        alternate = parseConsequentOrAlternative(parser, context, scope, privateScope, labels);
      }
      return parser.finishNode({
        type: "IfStatement",
        test,
        consequent,
        alternate
      }, start);
    }
    function parseConsequentOrAlternative(parser, context, scope, privateScope, labels) {
      const { tokenStart } = parser;
      return context & 1 || !parser.options.webcompat || parser.getToken() !== 86104 ? parseStatement(parser, context, scope, privateScope, 0, { $: labels }, 0) : parseFunctionDeclaration(parser, context, scope?.createChildScope(), privateScope, 0, 0, 0, 0, tokenStart);
    }
    function parseSwitchStatement(parser, context, scope, privateScope, labels) {
      const start = parser.tokenStart;
      nextToken(parser, context);
      consume(parser, context | 32, 67174411);
      const discriminant = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
      consume(parser, context, 16);
      consume(parser, context, 2162700);
      const cases = [];
      let seenDefault = 0;
      scope = scope?.createChildScope(8);
      while (parser.getToken() !== 1074790415) {
        const { tokenStart } = parser;
        let test = null;
        const consequent = [];
        if (consumeOpt(parser, context | 32, 20556)) {
          test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
        } else {
          consume(parser, context | 32, 20561);
          if (seenDefault)
            parser.report(89);
          seenDefault = 1;
        }
        consume(parser, context | 32, 21);
        while (parser.getToken() !== 20556 && parser.getToken() !== 1074790415 && parser.getToken() !== 20561) {
          consequent.push(parseStatementListItem(parser, context | 4, scope, privateScope, 2, {
            $: labels
          }));
        }
        cases.push(parser.finishNode({
          type: "SwitchCase",
          test,
          consequent
        }, tokenStart));
      }
      consume(parser, context | 32, 1074790415);
      return parser.finishNode({
        type: "SwitchStatement",
        discriminant,
        cases
      }, start);
    }
    function parseWhileStatement(parser, context, scope, privateScope, labels) {
      const start = parser.tokenStart;
      nextToken(parser, context);
      consume(parser, context | 32, 67174411);
      const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
      consume(parser, context | 32, 16);
      const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
      return parser.finishNode({
        type: "WhileStatement",
        test,
        body
      }, start);
    }
    function parseIterationStatementBody(parser, context, scope, privateScope, labels) {
      return parseStatement(parser, (context | 131072) ^ 131072 | 128, scope, privateScope, 0, { loop: 1, $: labels }, 0);
    }
    function parseContinueStatement(parser, context, labels) {
      if ((context & 128) === 0)
        parser.report(68);
      const start = parser.tokenStart;
      nextToken(parser, context);
      let label = null;
      if ((parser.flags & 1) === 0 && parser.getToken() & 143360) {
        const { tokenValue } = parser;
        label = parseIdentifier(parser, context | 32);
        if (!isValidLabel(parser, labels, tokenValue, 1))
          parser.report(138, tokenValue);
      }
      matchOrInsertSemicolon(parser, context | 32);
      return parser.finishNode({
        type: "ContinueStatement",
        label
      }, start);
    }
    function parseBreakStatement(parser, context, labels) {
      const start = parser.tokenStart;
      nextToken(parser, context | 32);
      let label = null;
      if ((parser.flags & 1) === 0 && parser.getToken() & 143360) {
        const { tokenValue } = parser;
        label = parseIdentifier(parser, context | 32);
        if (!isValidLabel(parser, labels, tokenValue, 0))
          parser.report(138, tokenValue);
      } else if ((context & (4 | 128)) === 0) {
        parser.report(69);
      }
      matchOrInsertSemicolon(parser, context | 32);
      return parser.finishNode({
        type: "BreakStatement",
        label
      }, start);
    }
    function parseWithStatement(parser, context, scope, privateScope, labels) {
      const start = parser.tokenStart;
      nextToken(parser, context);
      if (context & 1)
        parser.report(91);
      consume(parser, context | 32, 67174411);
      const object = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
      consume(parser, context | 32, 16);
      const body = parseStatement(parser, context, scope, privateScope, 2, labels, 0);
      return parser.finishNode({
        type: "WithStatement",
        object,
        body
      }, start);
    }
    function parseDebuggerStatement(parser, context) {
      const start = parser.tokenStart;
      nextToken(parser, context | 32);
      matchOrInsertSemicolon(parser, context | 32);
      return parser.finishNode({
        type: "DebuggerStatement"
      }, start);
    }
    function parseTryStatement(parser, context, scope, privateScope, labels) {
      const start = parser.tokenStart;
      nextToken(parser, context | 32);
      const firstScope = scope?.createChildScope(16);
      const block = parseBlock(parser, context, firstScope, privateScope, { $: labels });
      const { tokenStart } = parser;
      const handler = consumeOpt(parser, context | 32, 20557) ? parseCatchBlock(parser, context, scope, privateScope, labels, tokenStart) : null;
      let finalizer = null;
      if (parser.getToken() === 20566) {
        nextToken(parser, context | 32);
        const finalizerScope = scope?.createChildScope(4);
        const block2 = parseBlock(parser, context, finalizerScope, privateScope, { $: labels });
        finalizer = block2;
      }
      if (!handler && !finalizer) {
        parser.report(88);
      }
      return parser.finishNode({
        type: "TryStatement",
        block,
        handler,
        finalizer
      }, start);
    }
    function parseCatchBlock(parser, context, scope, privateScope, labels, start) {
      let param = null;
      let additionalScope = scope;
      if (consumeOpt(parser, context, 67174411)) {
        scope = scope?.createChildScope(4);
        param = parseBindingPattern(parser, context, scope, privateScope, (parser.getToken() & 2097152) === 2097152 ? 256 : 512, 0);
        if (parser.getToken() === 18) {
          parser.report(86);
        } else if (parser.getToken() === 1077936155) {
          parser.report(87);
        }
        consume(parser, context | 32, 16);
      }
      additionalScope = scope?.createChildScope(32);
      const body = parseBlock(parser, context, additionalScope, privateScope, { $: labels });
      return parser.finishNode({
        type: "CatchClause",
        param,
        body
      }, start);
    }
    function parseStaticBlock(parser, context, scope, privateScope, start) {
      scope = scope?.createChildScope();
      const ctorContext = 512 | 4096 | 1024 | 4 | 128;
      context = (context | ctorContext) ^ ctorContext | 256 | 2048 | 524288 | 65536;
      return parseBlock(parser, context, scope, privateScope, {}, start, "StaticBlock");
    }
    function parseDoWhileStatement(parser, context, scope, privateScope, labels) {
      const start = parser.tokenStart;
      nextToken(parser, context | 32);
      const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
      consume(parser, context, 20578);
      consume(parser, context | 32, 67174411);
      const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
      consume(parser, context | 32, 16);
      consumeOpt(parser, context | 32, 1074790417);
      return parser.finishNode({
        type: "DoWhileStatement",
        body,
        test
      }, start);
    }
    function parseLetIdentOrVarDeclarationStatement(parser, context, scope, privateScope, origin) {
      const { tokenValue, tokenStart } = parser;
      const token = parser.getToken();
      let expr = parseIdentifier(parser, context);
      if (parser.getToken() & (143360 | 2097152)) {
        const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, 8, 0);
        matchOrInsertSemicolon(parser, context | 32);
        return parser.finishNode({
          type: "VariableDeclaration",
          kind: "let",
          declarations
        }, tokenStart);
      }
      parser.assignable = 1;
      if (context & 1)
        parser.report(85);
      if (parser.getToken() === 21) {
        return parseLabelledStatement(parser, context, scope, privateScope, origin, {}, tokenValue, expr, token, 0, tokenStart);
      }
      if (parser.getToken() === 10) {
        let scope2 = void 0;
        if (parser.options.lexical)
          scope2 = createArrowHeadParsingScope(parser, context, tokenValue);
        parser.flags = (parser.flags | 128) ^ 128;
        expr = parseArrowFunctionExpression(parser, context, scope2, privateScope, [expr], 0, tokenStart);
      } else {
        expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
        expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, tokenStart, expr);
      }
      if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, tokenStart, expr);
      }
      return parseExpressionStatement(parser, context, expr, tokenStart);
    }
    function parseLexicalDeclaration(parser, context, scope, privateScope, kind, origin) {
      const start = parser.tokenStart;
      nextToken(parser, context);
      const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, kind, origin);
      matchOrInsertSemicolon(parser, context | 32);
      return parser.finishNode({
        type: "VariableDeclaration",
        kind: kind & 8 ? "let" : "const",
        declarations
      }, start);
    }
    function parseVariableStatement(parser, context, scope, privateScope, origin) {
      const start = parser.tokenStart;
      nextToken(parser, context);
      const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, 4, origin);
      matchOrInsertSemicolon(parser, context | 32);
      return parser.finishNode({
        type: "VariableDeclaration",
        kind: "var",
        declarations
      }, start);
    }
    function parseVariableDeclarationList(parser, context, scope, privateScope, kind, origin) {
      let bindingCount = 1;
      const list = [
        parseVariableDeclaration(parser, context, scope, privateScope, kind, origin)
      ];
      while (consumeOpt(parser, context, 18)) {
        bindingCount++;
        list.push(parseVariableDeclaration(parser, context, scope, privateScope, kind, origin));
      }
      if (bindingCount > 1 && origin & 32 && parser.getToken() & 262144) {
        parser.report(61, KeywordDescTable[parser.getToken() & 255]);
      }
      return list;
    }
    function parseVariableDeclaration(parser, context, scope, privateScope, kind, origin) {
      const { tokenStart } = parser;
      const token = parser.getToken();
      let init = null;
      const id = parseBindingPattern(parser, context, scope, privateScope, kind, origin);
      if (parser.getToken() === 1077936155) {
        nextToken(parser, context | 32);
        init = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
        if (origin & 32 || (token & 2097152) === 0) {
          if (parser.getToken() === 471156 || parser.getToken() === 8673330 && (token & 2097152 || (kind & 4) === 0 || context & 1)) {
            throw new ParseError(tokenStart, parser.currentLocation, 60, parser.getToken() === 471156 ? "of" : "in");
          }
        }
      } else if ((kind & 16 || (token & 2097152) > 0) && (parser.getToken() & 262144) !== 262144) {
        parser.report(59, kind & 16 ? "const" : "destructuring");
      }
      return parser.finishNode({
        type: "VariableDeclarator",
        id,
        init
      }, tokenStart);
    }
    function parseForStatement(parser, context, scope, privateScope, labels) {
      const start = parser.tokenStart;
      nextToken(parser, context);
      const forAwait = ((context & 2048) > 0 || (context & 2) > 0 && (context & 8) > 0) && consumeOpt(parser, context, 209006);
      consume(parser, context | 32, 67174411);
      scope = scope?.createChildScope(1);
      let test = null;
      let update = null;
      let destructible = 0;
      let init = null;
      let isVarDecl = parser.getToken() === 86088 || parser.getToken() === 241737 || parser.getToken() === 86090;
      let right;
      const { tokenStart } = parser;
      const token = parser.getToken();
      if (isVarDecl) {
        if (token === 241737) {
          init = parseIdentifier(parser, context);
          if (parser.getToken() & (143360 | 2097152)) {
            if (parser.getToken() === 8673330) {
              if (context & 1)
                parser.report(67);
            } else {
              init = parser.finishNode({
                type: "VariableDeclaration",
                kind: "let",
                declarations: parseVariableDeclarationList(parser, context | 131072, scope, privateScope, 8, 32)
              }, tokenStart);
            }
            parser.assignable = 1;
          } else if (context & 1) {
            parser.report(67);
          } else {
            isVarDecl = false;
            parser.assignable = 1;
            init = parseMemberOrUpdateExpression(parser, context, privateScope, init, 0, 0, tokenStart);
            if (parser.getToken() === 471156)
              parser.report(115);
          }
        } else {
          nextToken(parser, context);
          init = parser.finishNode(token === 86088 ? {
            type: "VariableDeclaration",
            kind: "var",
            declarations: parseVariableDeclarationList(parser, context | 131072, scope, privateScope, 4, 32)
          } : {
            type: "VariableDeclaration",
            kind: "const",
            declarations: parseVariableDeclarationList(parser, context | 131072, scope, privateScope, 16, 32)
          }, tokenStart);
          parser.assignable = 1;
        }
      } else if (token === 1074790417) {
        if (forAwait)
          parser.report(82);
      } else if ((token & 2097152) === 2097152) {
        const patternStart = parser.tokenStart;
        init = token === 2162700 ? parseObjectLiteralOrPattern(parser, context, void 0, privateScope, 1, 0, 0, 2, 32) : parseArrayExpressionOrPattern(parser, context, void 0, privateScope, 1, 0, 0, 2, 32);
        destructible = parser.destructible;
        if (destructible & 64) {
          parser.report(63);
        }
        parser.assignable = destructible & 16 ? 2 : 1;
        init = parseMemberOrUpdateExpression(parser, context | 131072, privateScope, init, 0, 0, patternStart);
      } else {
        init = parseLeftHandSideExpression(parser, context | 131072, privateScope, 1, 0, 1);
      }
      if ((parser.getToken() & 262144) === 262144) {
        if (parser.getToken() === 471156) {
          if (parser.assignable & 2)
            parser.report(80, forAwait ? "await" : "of");
          reinterpretToPattern(parser, init);
          nextToken(parser, context | 32);
          right = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
          consume(parser, context | 32, 16);
          const body3 = parseIterationStatementBody(parser, context, scope, privateScope, labels);
          return parser.finishNode({
            type: "ForOfStatement",
            left: init,
            right,
            body: body3,
            await: forAwait
          }, start);
        }
        if (parser.assignable & 2)
          parser.report(80, "in");
        reinterpretToPattern(parser, init);
        nextToken(parser, context | 32);
        if (forAwait)
          parser.report(82);
        right = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
        consume(parser, context | 32, 16);
        const body2 = parseIterationStatementBody(parser, context, scope, privateScope, labels);
        return parser.finishNode({
          type: "ForInStatement",
          body: body2,
          left: init,
          right
        }, start);
      }
      if (forAwait)
        parser.report(82);
      if (!isVarDecl) {
        if (destructible & 8 && parser.getToken() !== 1077936155) {
          parser.report(80, "loop");
        }
        init = parseAssignmentExpression(parser, context | 131072, privateScope, 0, 0, tokenStart, init);
      }
      if (parser.getToken() === 18)
        init = parseSequenceExpression(parser, context, privateScope, 0, tokenStart, init);
      consume(parser, context | 32, 1074790417);
      if (parser.getToken() !== 1074790417)
        test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
      consume(parser, context | 32, 1074790417);
      if (parser.getToken() !== 16)
        update = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart);
      consume(parser, context | 32, 16);
      const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
      return parser.finishNode({
        type: "ForStatement",
        init,
        test,
        update,
        body
      }, start);
    }
    function parseRestrictedIdentifier(parser, context, scope) {
      if (!isValidIdentifier(context, parser.getToken()))
        parser.report(118);
      if ((parser.getToken() & 537079808) === 537079808)
        parser.report(119);
      scope?.addBlockName(context, parser.tokenValue, 8, 0);
      return parseIdentifier(parser, context);
    }
    function parseImportDeclaration(parser, context, scope) {
      const start = parser.tokenStart;
      nextToken(parser, context);
      let source = null;
      const { tokenStart } = parser;
      let specifiers = [];
      if (parser.getToken() === 134283267) {
        source = parseLiteral(parser, context);
      } else {
        if (parser.getToken() & 143360) {
          const local = parseRestrictedIdentifier(parser, context, scope);
          specifiers = [
            parser.finishNode({
              type: "ImportDefaultSpecifier",
              local
            }, tokenStart)
          ];
          if (consumeOpt(parser, context, 18)) {
            switch (parser.getToken()) {
              case 8391476:
                specifiers.push(parseImportNamespaceSpecifier(parser, context, scope));
                break;
              case 2162700:
                parseImportSpecifierOrNamedImports(parser, context, scope, specifiers);
                break;
              default:
                parser.report(107);
            }
          }
        } else {
          switch (parser.getToken()) {
            case 8391476:
              specifiers = [parseImportNamespaceSpecifier(parser, context, scope)];
              break;
            case 2162700:
              parseImportSpecifierOrNamedImports(parser, context, scope, specifiers);
              break;
            case 67174411:
              return parseImportCallDeclaration(parser, context, void 0, start);
            case 67108877:
              return parseImportMetaDeclaration(parser, context, start);
            default:
              parser.report(30, KeywordDescTable[parser.getToken() & 255]);
          }
        }
        source = parseModuleSpecifier(parser, context);
      }
      const attributes = parseImportAttributes(parser, context);
      const node = {
        type: "ImportDeclaration",
        specifiers,
        source,
        attributes
      };
      matchOrInsertSemicolon(parser, context | 32);
      return parser.finishNode(node, start);
    }
    function parseImportNamespaceSpecifier(parser, context, scope) {
      const { tokenStart } = parser;
      nextToken(parser, context);
      consume(parser, context, 77932);
      if ((parser.getToken() & 134217728) === 134217728) {
        throw new ParseError(tokenStart, parser.currentLocation, 30, KeywordDescTable[parser.getToken() & 255]);
      }
      return parser.finishNode({
        type: "ImportNamespaceSpecifier",
        local: parseRestrictedIdentifier(parser, context, scope)
      }, tokenStart);
    }
    function parseModuleSpecifier(parser, context) {
      consume(parser, context, 209011);
      if (parser.getToken() !== 134283267)
        parser.report(105, "Import");
      return parseLiteral(parser, context);
    }
    function parseImportSpecifierOrNamedImports(parser, context, scope, specifiers) {
      nextToken(parser, context);
      while (parser.getToken() & 143360 || parser.getToken() === 134283267) {
        let { tokenValue, tokenStart } = parser;
        const token = parser.getToken();
        const imported = parseModuleExportName(parser, context);
        let local;
        if (consumeOpt(parser, context, 77932)) {
          if ((parser.getToken() & 134217728) === 134217728 || parser.getToken() === 18) {
            parser.report(106);
          } else {
            validateBindingIdentifier(parser, context, 16, parser.getToken(), 0);
          }
          tokenValue = parser.tokenValue;
          local = parseIdentifier(parser, context);
        } else if (imported.type === "Identifier") {
          validateBindingIdentifier(parser, context, 16, token, 0);
          local = imported;
        } else {
          parser.report(25, KeywordDescTable[77932 & 255]);
        }
        scope?.addBlockName(context, tokenValue, 8, 0);
        specifiers.push(parser.finishNode({
          type: "ImportSpecifier",
          local,
          imported
        }, tokenStart));
        if (parser.getToken() !== 1074790415)
          consume(parser, context, 18);
      }
      consume(parser, context, 1074790415);
      return specifiers;
    }
    function parseImportMetaDeclaration(parser, context, start) {
      let expr = parseImportMetaExpression(parser, context, parser.finishNode({
        type: "Identifier",
        name: "import"
      }, start), start);
      expr = parseMemberOrUpdateExpression(parser, context, void 0, expr, 0, 0, start);
      expr = parseAssignmentExpression(parser, context, void 0, 0, 0, start, expr);
      if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, void 0, 0, start, expr);
      }
      return parseExpressionStatement(parser, context, expr, start);
    }
    function parseImportCallDeclaration(parser, context, privateScope, start) {
      let expr = parseImportExpression(parser, context, privateScope, 0, start);
      expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, start);
      if (parser.getToken() === 18) {
        expr = parseSequenceExpression(parser, context, privateScope, 0, start, expr);
      }
      return parseExpressionStatement(parser, context, expr, start);
    }
    function parseExportDeclaration(parser, context, scope) {
      const start = parser.leadingDecorators.decorators.length ? parser.leadingDecorators.start : parser.tokenStart;
      nextToken(parser, context | 32);
      const specifiers = [];
      let declaration = null;
      let source = null;
      let attributes = [];
      if (consumeOpt(parser, context | 32, 20561)) {
        switch (parser.getToken()) {
          case 86104: {
            declaration = parseFunctionDeclaration(parser, context, scope, void 0, 4, 1, 1, 0, parser.tokenStart);
            break;
          }
          case 132:
          case 86094:
            declaration = parseClassDeclaration(parser, context, scope, void 0, 1);
            break;
          case 209005: {
            const { tokenStart } = parser;
            declaration = parseIdentifier(parser, context);
            const { flags } = parser;
            if ((flags & 1) === 0) {
              if (parser.getToken() === 86104) {
                declaration = parseFunctionDeclaration(parser, context, scope, void 0, 4, 1, 1, 1, tokenStart);
              } else {
                if (parser.getToken() === 67174411) {
                  declaration = parseAsyncArrowOrCallExpression(parser, context, void 0, declaration, 1, 1, 0, flags, tokenStart);
                  declaration = parseMemberOrUpdateExpression(parser, context, void 0, declaration, 0, 0, tokenStart);
                  declaration = parseAssignmentExpression(parser, context, void 0, 0, 0, tokenStart, declaration);
                } else if (parser.getToken() & 143360) {
                  if (scope)
                    scope = createArrowHeadParsingScope(parser, context, parser.tokenValue);
                  declaration = parseIdentifier(parser, context);
                  declaration = parseArrowFunctionExpression(parser, context, scope, void 0, [declaration], 1, tokenStart);
                }
              }
            }
            break;
          }
          default:
            declaration = parseExpression(parser, context, void 0, 1, 0, parser.tokenStart);
            matchOrInsertSemicolon(parser, context | 32);
        }
        if (scope)
          parser.declareUnboundVariable("default");
        return parser.finishNode({
          type: "ExportDefaultDeclaration",
          declaration
        }, start);
      }
      switch (parser.getToken()) {
        case 8391476: {
          nextToken(parser, context);
          let exported = null;
          const isNamedDeclaration = consumeOpt(parser, context, 77932);
          if (isNamedDeclaration) {
            if (scope)
              parser.declareUnboundVariable(parser.tokenValue);
            exported = parseModuleExportName(parser, context);
          }
          consume(parser, context, 209011);
          if (parser.getToken() !== 134283267)
            parser.report(105, "Export");
          source = parseLiteral(parser, context);
          const attributes2 = parseImportAttributes(parser, context);
          const node2 = {
            type: "ExportAllDeclaration",
            source,
            exported,
            attributes: attributes2
          };
          matchOrInsertSemicolon(parser, context | 32);
          return parser.finishNode(node2, start);
        }
        case 2162700: {
          nextToken(parser, context);
          const tmpExportedNames = [];
          const tmpExportedBindings = [];
          let hasLiteralLocal = 0;
          while (parser.getToken() & 143360 || parser.getToken() === 134283267) {
            const { tokenStart, tokenValue } = parser;
            const local = parseModuleExportName(parser, context);
            if (local.type === "Literal") {
              hasLiteralLocal = 1;
            }
            let exported;
            if (parser.getToken() === 77932) {
              nextToken(parser, context);
              if ((parser.getToken() & 143360) === 0 && parser.getToken() !== 134283267) {
                parser.report(106);
              }
              if (scope) {
                tmpExportedNames.push(parser.tokenValue);
                tmpExportedBindings.push(tokenValue);
              }
              exported = parseModuleExportName(parser, context);
            } else {
              if (scope) {
                tmpExportedNames.push(parser.tokenValue);
                tmpExportedBindings.push(parser.tokenValue);
              }
              exported = local;
            }
            specifiers.push(parser.finishNode({
              type: "ExportSpecifier",
              local,
              exported
            }, tokenStart));
            if (parser.getToken() !== 1074790415)
              consume(parser, context, 18);
          }
          consume(parser, context, 1074790415);
          if (consumeOpt(parser, context, 209011)) {
            if (parser.getToken() !== 134283267)
              parser.report(105, "Export");
            source = parseLiteral(parser, context);
            attributes = parseImportAttributes(parser, context);
            if (scope) {
              tmpExportedNames.forEach((n) => parser.declareUnboundVariable(n));
            }
          } else {
            if (hasLiteralLocal) {
              parser.report(172);
            }
            if (scope) {
              tmpExportedNames.forEach((n) => parser.declareUnboundVariable(n));
              tmpExportedBindings.forEach((b) => parser.addBindingToExports(b));
            }
          }
          matchOrInsertSemicolon(parser, context | 32);
          break;
        }
        case 132:
        case 86094:
          declaration = parseClassDeclaration(parser, context, scope, void 0, 2);
          break;
        case 86104:
          declaration = parseFunctionDeclaration(parser, context, scope, void 0, 4, 1, 2, 0, parser.tokenStart);
          break;
        case 241737:
          declaration = parseLexicalDeclaration(parser, context, scope, void 0, 8, 64);
          break;
        case 86090:
          declaration = parseLexicalDeclaration(parser, context, scope, void 0, 16, 64);
          break;
        case 86088:
          declaration = parseVariableStatement(parser, context, scope, void 0, 64);
          break;
        case 209005: {
          const { tokenStart } = parser;
          nextToken(parser, context);
          if ((parser.flags & 1) === 0 && parser.getToken() === 86104) {
            declaration = parseFunctionDeclaration(parser, context, scope, void 0, 4, 1, 2, 1, tokenStart);
            break;
          }
        }
        default:
          parser.report(30, KeywordDescTable[parser.getToken() & 255]);
      }
      const node = {
        type: "ExportNamedDeclaration",
        declaration,
        specifiers,
        source,
        attributes
      };
      return parser.finishNode(node, start);
    }
    function parseExpression(parser, context, privateScope, canAssign, inGroup, start) {
      let expr = parsePrimaryExpression(parser, context, privateScope, 2, 0, canAssign, inGroup, 1, start);
      expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, 0, start);
      return parseAssignmentExpression(parser, context, privateScope, inGroup, 0, start, expr);
    }
    function parseSequenceExpression(parser, context, privateScope, inGroup, start, expr) {
      const expressions = [expr];
      while (consumeOpt(parser, context | 32, 18)) {
        expressions.push(parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart));
      }
      return parser.finishNode({
        type: "SequenceExpression",
        expressions
      }, start);
    }
    function parseExpressions(parser, context, privateScope, inGroup, canAssign, start) {
      const expr = parseExpression(parser, context, privateScope, canAssign, inGroup, start);
      return parser.getToken() === 18 ? parseSequenceExpression(parser, context, privateScope, inGroup, start, expr) : expr;
    }
    function parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, start, left) {
      const token = parser.getToken();
      if ((token & 4194304) === 4194304) {
        if (parser.assignable & 2)
          parser.report(26);
        if (!isPattern && token === 1077936155 && left.type === "ArrayExpression" || left.type === "ObjectExpression") {
          reinterpretToPattern(parser, left);
        }
        nextToken(parser, context | 32);
        const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
        parser.assignable = 2;
        return parser.finishNode(isPattern ? {
          type: "AssignmentPattern",
          left,
          right
        } : {
          type: "AssignmentExpression",
          left,
          operator: KeywordDescTable[token & 255],
          right
        }, start);
      }
      if ((token & 8388608) === 8388608) {
        left = parseBinaryExpression(parser, context, privateScope, inGroup, start, 4, token, left);
      }
      if (consumeOpt(parser, context | 32, 22)) {
        left = parseConditionalExpression(parser, context, privateScope, left, start);
      }
      return left;
    }
    function parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, start, left) {
      const token = parser.getToken();
      nextToken(parser, context | 32);
      const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
      left = parser.finishNode(isPattern ? {
        type: "AssignmentPattern",
        left,
        right
      } : {
        type: "AssignmentExpression",
        left,
        operator: KeywordDescTable[token & 255],
        right
      }, start);
      parser.assignable = 2;
      return left;
    }
    function parseConditionalExpression(parser, context, privateScope, test, start) {
      const consequent = parseExpression(parser, (context | 131072) ^ 131072, privateScope, 1, 0, parser.tokenStart);
      consume(parser, context | 32, 21);
      parser.assignable = 1;
      const alternate = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
      parser.assignable = 2;
      return parser.finishNode({
        type: "ConditionalExpression",
        test,
        consequent,
        alternate
      }, start);
    }
    function parseBinaryExpression(parser, context, privateScope, inGroup, start, minPrecedence, operator, left) {
      const bit = -((context & 131072) > 0) & 8673330;
      let t;
      let precedence;
      parser.assignable = 2;
      while (parser.getToken() & 8388608) {
        t = parser.getToken();
        precedence = t & 3840;
        if (t & 524288 && operator & 268435456 || operator & 524288 && t & 268435456) {
          parser.report(165);
        }
        if (precedence + ((t === 8391735) << 8) - ((bit === t) << 12) <= minPrecedence)
          break;
        nextToken(parser, context | 32);
        left = parser.finishNode({
          type: t & 524288 || t & 268435456 ? "LogicalExpression" : "BinaryExpression",
          left,
          right: parseBinaryExpression(parser, context, privateScope, inGroup, parser.tokenStart, precedence, t, parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 1)),
          operator: KeywordDescTable[t & 255]
        }, start);
      }
      if (parser.getToken() === 1077936155)
        parser.report(26);
      return left;
    }
    function parseUnaryExpression(parser, context, privateScope, isLHS, inGroup) {
      if (!isLHS)
        parser.report(0);
      const { tokenStart } = parser;
      const unaryOperator = parser.getToken();
      nextToken(parser, context | 32);
      const arg = parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 1);
      if (parser.getToken() === 8391735)
        parser.report(33);
      if (context & 1 && unaryOperator === 16863276) {
        if (arg.type === "Identifier") {
          parser.report(121);
        } else if (isPropertyWithPrivateFieldKey(arg)) {
          parser.report(127);
        }
      }
      parser.assignable = 2;
      return parser.finishNode({
        type: "UnaryExpression",
        operator: KeywordDescTable[unaryOperator & 255],
        argument: arg,
        prefix: true
      }, tokenStart);
    }
    function parseAsyncExpression(parser, context, privateScope, inGroup, isLHS, canAssign, inNew, start) {
      const token = parser.getToken();
      const expr = parseIdentifier(parser, context);
      const { flags } = parser;
      if ((flags & 1) === 0) {
        if (parser.getToken() === 86104) {
          return parseFunctionExpression(parser, context, privateScope, 1, inGroup, start);
        }
        if (isValidIdentifier(context, parser.getToken())) {
          if (!isLHS)
            parser.report(0);
          if ((parser.getToken() & 36864) === 36864) {
            parser.flags |= 256;
          }
          return parseAsyncArrowAfterIdent(parser, context, privateScope, canAssign, start);
        }
      }
      if (!inNew && parser.getToken() === 67174411) {
        return parseAsyncArrowOrCallExpression(parser, context, privateScope, expr, canAssign, 1, 0, flags, start);
      }
      if (parser.getToken() === 10) {
        classifyIdentifier(parser, context, token);
        if (inNew)
          parser.report(51);
        if ((token & 36864) === 36864) {
          parser.flags |= 256;
        }
        return parseArrowFromIdentifier(parser, context, privateScope, parser.tokenValue, expr, inNew, canAssign, 0, start);
      }
      parser.assignable = 1;
      return expr;
    }
    function parseYieldExpressionOrIdentifier(parser, context, privateScope, inGroup, canAssign, start) {
      if (inGroup)
        parser.destructible |= 256;
      if (context & 1024) {
        nextToken(parser, context | 32);
        if (context & 8192)
          parser.report(32);
        if (!canAssign)
          parser.report(26);
        if (parser.getToken() === 22)
          parser.report(124);
        let argument = null;
        let delegate = false;
        if ((parser.flags & 1) === 0) {
          delegate = consumeOpt(parser, context | 32, 8391476);
          if (parser.getToken() & (12288 | 65536) || delegate) {
            argument = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
          }
        } else if (parser.getToken() === 8391476) {
          parser.report(30, KeywordDescTable[parser.getToken() & 255]);
        }
        parser.assignable = 2;
        return parser.finishNode({
          type: "YieldExpression",
          argument,
          delegate
        }, start);
      }
      if (context & 1)
        parser.report(97, "yield");
      return parseIdentifierOrArrow(parser, context, privateScope);
    }
    function parseAwaitExpressionOrIdentifier(parser, context, privateScope, inNew, inGroup, start) {
      if (inGroup)
        parser.destructible |= 128;
      if (context & 524288)
        parser.report(177);
      const possibleIdentifierOrArrowFunc = parseIdentifierOrArrow(parser, context, privateScope);
      const isIdentifier = possibleIdentifierOrArrowFunc.type === "ArrowFunctionExpression" || (parser.getToken() & 65536) === 0;
      if (isIdentifier) {
        if (context & 2048)
          throw new ParseError(start, { index: parser.startIndex, line: parser.startLine, column: parser.startColumn }, 176);
        if (context & 2)
          throw new ParseError(start, { index: parser.startIndex, line: parser.startLine, column: parser.startColumn }, 110);
        if (context & 8192 && context & 2048)
          throw new ParseError(start, { index: parser.startIndex, line: parser.startLine, column: parser.startColumn }, 110);
        return possibleIdentifierOrArrowFunc;
      }
      if (context & 8192) {
        throw new ParseError(start, { index: parser.startIndex, line: parser.startLine, column: parser.startColumn }, 31);
      }
      if (context & 2048 || context & 2 && context & 8) {
        if (inNew)
          throw new ParseError(start, { index: parser.startIndex, line: parser.startLine, column: parser.startColumn }, 0);
        const argument = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 1);
        if (parser.getToken() === 8391735)
          parser.report(33);
        parser.assignable = 2;
        return parser.finishNode({
          type: "AwaitExpression",
          argument
        }, start);
      }
      if (context & 2)
        throw new ParseError(start, { index: parser.startIndex, line: parser.startLine, column: parser.startColumn }, 98);
      return possibleIdentifierOrArrowFunc;
    }
    function parseFunctionBody(parser, context, scope, privateScope, origin, funcNameToken, functionScope) {
      const { tokenStart } = parser;
      consume(parser, context | 32, 2162700);
      const body = [];
      if (parser.getToken() !== 1074790415) {
        while (parser.getToken() === 134283267) {
          const { index, tokenStart: tokenStart2, tokenIndex, tokenValue } = parser;
          const token = parser.getToken();
          const expr = parseLiteral(parser, context);
          if (isValidStrictMode(parser, index, tokenIndex, tokenValue)) {
            context |= 1;
            if (parser.flags & 128) {
              throw new ParseError(tokenStart2, parser.currentLocation, 66);
            }
            if (parser.flags & 64) {
              throw new ParseError(tokenStart2, parser.currentLocation, 9);
            }
            if (parser.flags & 4096) {
              throw new ParseError(tokenStart2, parser.currentLocation, 15);
            }
            functionScope?.reportScopeError();
          }
          body.push(parseDirective(parser, context, expr, token, tokenStart2));
        }
        if (context & 1) {
          if (funcNameToken) {
            if ((funcNameToken & 537079808) === 537079808) {
              parser.report(119);
            }
            if ((funcNameToken & 36864) === 36864) {
              parser.report(40);
            }
          }
          if (parser.flags & 512)
            parser.report(119);
          if (parser.flags & 256)
            parser.report(118);
        }
      }
      parser.flags = (parser.flags | 512 | 256 | 64 | 4096) ^ (512 | 256 | 64 | 4096);
      parser.destructible = (parser.destructible | 256) ^ 256;
      while (parser.getToken() !== 1074790415) {
        body.push(parseStatementListItem(parser, context, scope, privateScope, 4, {}));
      }
      consume(parser, origin & (16 | 8) ? context | 32 : context, 1074790415);
      parser.flags &= -4289;
      if (parser.getToken() === 1077936155)
        parser.report(26);
      return parser.finishNode({
        type: "BlockStatement",
        body
      }, tokenStart);
    }
    function parseSuperExpression(parser, context) {
      const { tokenStart } = parser;
      nextToken(parser, context);
      switch (parser.getToken()) {
        case 67108990:
          parser.report(167);
        case 67174411: {
          if ((context & 512) === 0)
            parser.report(28);
          parser.assignable = 2;
          break;
        }
        case 69271571:
        case 67108877: {
          if ((context & 256) === 0)
            parser.report(29);
          parser.assignable = 1;
          break;
        }
        default:
          parser.report(30, "super");
      }
      return parser.finishNode({ type: "Super" }, tokenStart);
    }
    function parseLeftHandSideExpression(parser, context, privateScope, canAssign, inGroup, isLHS) {
      const start = parser.tokenStart;
      const expression = parsePrimaryExpression(parser, context, privateScope, 2, 0, canAssign, inGroup, isLHS, start);
      return parseMemberOrUpdateExpression(parser, context, privateScope, expression, inGroup, 0, start);
    }
    function parseUpdateExpression(parser, context, expr, start) {
      if (parser.assignable & 2)
        parser.report(55);
      const token = parser.getToken();
      nextToken(parser, context);
      parser.assignable = 2;
      return parser.finishNode({
        type: "UpdateExpression",
        argument: expr,
        operator: KeywordDescTable[token & 255],
        prefix: false
      }, start);
    }
    function parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, inChain, start) {
      if ((parser.getToken() & 33619968) === 33619968 && (parser.flags & 1) === 0) {
        expr = parseUpdateExpression(parser, context, expr, start);
      } else if ((parser.getToken() & 67108864) === 67108864) {
        context = (context | 131072) ^ 131072;
        switch (parser.getToken()) {
          case 67108877: {
            nextToken(parser, (context | 262144 | 8) ^ 8);
            if (context & 16 && parser.getToken() === 130 && parser.tokenValue === "super") {
              parser.report(173);
            }
            parser.assignable = 1;
            const property = parsePropertyOrPrivatePropertyName(parser, context | 64, privateScope);
            expr = parser.finishNode({
              type: "MemberExpression",
              object: expr,
              computed: false,
              property,
              optional: false
            }, start);
            break;
          }
          case 69271571: {
            let restoreHasOptionalChaining = false;
            if ((parser.flags & 2048) === 2048) {
              restoreHasOptionalChaining = true;
              parser.flags = (parser.flags | 2048) ^ 2048;
            }
            nextToken(parser, context | 32);
            const { tokenStart } = parser;
            const property = parseExpressions(parser, context, privateScope, inGroup, 1, tokenStart);
            consume(parser, context, 20);
            parser.assignable = 1;
            expr = parser.finishNode({
              type: "MemberExpression",
              object: expr,
              computed: true,
              property,
              optional: false
            }, start);
            if (restoreHasOptionalChaining) {
              parser.flags |= 2048;
            }
            break;
          }
          case 67174411: {
            if ((parser.flags & 1024) === 1024) {
              parser.flags = (parser.flags | 1024) ^ 1024;
              return expr;
            }
            let restoreHasOptionalChaining = false;
            if ((parser.flags & 2048) === 2048) {
              restoreHasOptionalChaining = true;
              parser.flags = (parser.flags | 2048) ^ 2048;
            }
            const args = parseArguments(parser, context, privateScope, inGroup);
            parser.assignable = 2;
            expr = parser.finishNode({
              type: "CallExpression",
              callee: expr,
              arguments: args,
              optional: false
            }, start);
            if (restoreHasOptionalChaining) {
              parser.flags |= 2048;
            }
            break;
          }
          case 67108990: {
            nextToken(parser, (context | 262144 | 8) ^ 8);
            parser.flags |= 2048;
            parser.assignable = 2;
            expr = parseOptionalChain(parser, context, privateScope, expr, start);
            break;
          }
          default:
            if ((parser.flags & 2048) === 2048) {
              parser.report(166);
            }
            parser.assignable = 2;
            expr = parser.finishNode({
              type: "TaggedTemplateExpression",
              tag: expr,
              quasi: parser.getToken() === 67174408 ? parseTemplate(parser, context | 64, privateScope) : parseTemplateLiteral(parser, context)
            }, start);
        }
        expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 1, start);
      }
      if (inChain === 0 && (parser.flags & 2048) === 2048) {
        parser.flags = (parser.flags | 2048) ^ 2048;
        expr = parser.finishNode({
          type: "ChainExpression",
          expression: expr
        }, start);
      }
      return expr;
    }
    function parseOptionalChain(parser, context, privateScope, expr, start) {
      let restoreHasOptionalChaining = false;
      let node;
      if (parser.getToken() === 69271571 || parser.getToken() === 67174411) {
        if ((parser.flags & 2048) === 2048) {
          restoreHasOptionalChaining = true;
          parser.flags = (parser.flags | 2048) ^ 2048;
        }
      }
      if (parser.getToken() === 69271571) {
        nextToken(parser, context | 32);
        const { tokenStart } = parser;
        const property = parseExpressions(parser, context, privateScope, 0, 1, tokenStart);
        consume(parser, context, 20);
        parser.assignable = 2;
        node = parser.finishNode({
          type: "MemberExpression",
          object: expr,
          computed: true,
          optional: true,
          property
        }, start);
      } else if (parser.getToken() === 67174411) {
        const args = parseArguments(parser, context, privateScope, 0);
        parser.assignable = 2;
        node = parser.finishNode({
          type: "CallExpression",
          callee: expr,
          arguments: args,
          optional: true
        }, start);
      } else {
        const property = parsePropertyOrPrivatePropertyName(parser, context, privateScope);
        parser.assignable = 2;
        node = parser.finishNode({
          type: "MemberExpression",
          object: expr,
          computed: false,
          optional: true,
          property
        }, start);
      }
      if (restoreHasOptionalChaining) {
        parser.flags |= 2048;
      }
      return node;
    }
    function parsePropertyOrPrivatePropertyName(parser, context, privateScope) {
      if ((parser.getToken() & 143360) === 0 && parser.getToken() !== -2147483528 && parser.getToken() !== -2147483527 && parser.getToken() !== 130) {
        parser.report(160);
      }
      return parser.getToken() === 130 ? parsePrivateIdentifier(parser, context, privateScope, 0) : parseIdentifier(parser, context);
    }
    function parseUpdateExpressionPrefixed(parser, context, privateScope, inNew, isLHS, start) {
      if (inNew)
        parser.report(56);
      if (!isLHS)
        parser.report(0);
      const token = parser.getToken();
      nextToken(parser, context | 32);
      const arg = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 1);
      if (parser.assignable & 2) {
        parser.report(55);
      }
      parser.assignable = 2;
      return parser.finishNode({
        type: "UpdateExpression",
        argument: arg,
        operator: KeywordDescTable[token & 255],
        prefix: true
      }, start);
    }
    function parsePrimaryExpression(parser, context, privateScope, kind, inNew, canAssign, inGroup, isLHS, start) {
      if ((parser.getToken() & 143360) === 143360) {
        switch (parser.getToken()) {
          case 209006:
            return parseAwaitExpressionOrIdentifier(parser, context, privateScope, inNew, inGroup, start);
          case 241771:
            return parseYieldExpressionOrIdentifier(parser, context, privateScope, inGroup, canAssign, start);
          case 209005:
            return parseAsyncExpression(parser, context, privateScope, inGroup, isLHS, canAssign, inNew, start);
        }
        const { tokenValue } = parser;
        const token = parser.getToken();
        const expr = parseIdentifier(parser, context | 64);
        if (parser.getToken() === 10) {
          if (!isLHS)
            parser.report(0);
          classifyIdentifier(parser, context, token);
          if ((token & 36864) === 36864) {
            parser.flags |= 256;
          }
          return parseArrowFromIdentifier(parser, context, privateScope, tokenValue, expr, inNew, canAssign, 0, start);
        }
        if (context & 16 && !(context & 32768) && !(context & 8192) && parser.tokenValue === "arguments")
          parser.report(130);
        if ((token & 255) === (241737 & 255)) {
          if (context & 1)
            parser.report(113);
          if (kind & (8 | 16))
            parser.report(100);
        }
        parser.assignable = context & 1 && (token & 537079808) === 537079808 ? 2 : 1;
        return expr;
      }
      if ((parser.getToken() & 134217728) === 134217728) {
        return parseLiteral(parser, context);
      }
      switch (parser.getToken()) {
        case 33619993:
        case 33619994:
          return parseUpdateExpressionPrefixed(parser, context, privateScope, inNew, isLHS, start);
        case 16863276:
        case 16842798:
        case 16842799:
        case 25233968:
        case 25233969:
        case 16863275:
        case 16863277:
          return parseUnaryExpression(parser, context, privateScope, isLHS, inGroup);
        case 86104:
          return parseFunctionExpression(parser, context, privateScope, 0, inGroup, start);
        case 2162700:
          return parseObjectLiteral(parser, context, privateScope, canAssign ? 0 : 1, inGroup);
        case 69271571:
          return parseArrayLiteral(parser, context, privateScope, canAssign ? 0 : 1, inGroup);
        case 67174411:
          return parseParenthesizedExpression(parser, context | 64, privateScope, canAssign, 1, 0, start);
        case 86021:
        case 86022:
        case 86023:
          return parseNullOrTrueOrFalseLiteral(parser, context);
        case 86111:
          return parseThisExpression(parser, context);
        case 65540:
          return parseRegExpLiteral(parser, context);
        case 132:
        case 86094:
          return parseClassExpression(parser, context, privateScope, inGroup, start);
        case 86109:
          return parseSuperExpression(parser, context);
        case 67174409:
          return parseTemplateLiteral(parser, context);
        case 67174408:
          return parseTemplate(parser, context, privateScope);
        case 86107:
          return parseNewExpression(parser, context, privateScope, inGroup);
        case 134283388:
          return parseBigIntLiteral(parser, context);
        case 130:
          return parsePrivateIdentifier(parser, context, privateScope, 0);
        case 86106:
          return parseImportCallOrMetaExpression(parser, context, privateScope, inNew, inGroup, start);
        case 8456256:
          if (parser.options.jsx)
            return parseJSXRootElementOrFragment(parser, context, privateScope, 0, parser.tokenStart);
        default:
          if (isValidIdentifier(context, parser.getToken()))
            return parseIdentifierOrArrow(parser, context, privateScope);
          parser.report(30, KeywordDescTable[parser.getToken() & 255]);
      }
    }
    function parseImportCallOrMetaExpression(parser, context, privateScope, inNew, inGroup, start) {
      let expr = parseIdentifier(parser, context);
      if (parser.getToken() === 67108877) {
        return parseImportMetaExpression(parser, context, expr, start);
      }
      if (inNew)
        parser.report(142);
      expr = parseImportExpression(parser, context, privateScope, inGroup, start);
      parser.assignable = 2;
      return parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, 0, start);
    }
    function parseImportMetaExpression(parser, context, meta, start) {
      if ((context & 2) === 0)
        parser.report(169);
      nextToken(parser, context);
      const token = parser.getToken();
      if (token !== 209030 && parser.tokenValue !== "meta") {
        parser.report(174);
      } else if (token & -2147483648) {
        parser.report(175);
      }
      parser.assignable = 2;
      return parser.finishNode({
        type: "MetaProperty",
        meta,
        property: parseIdentifier(parser, context)
      }, start);
    }
    function parseImportExpression(parser, context, privateScope, inGroup, start) {
      consume(parser, context | 32, 67174411);
      if (parser.getToken() === 14)
        parser.report(143);
      const source = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
      let options = null;
      if (parser.getToken() === 18) {
        consume(parser, context, 18);
        if (parser.getToken() !== 16) {
          const expContext = (context | 131072) ^ 131072;
          options = parseExpression(parser, expContext, privateScope, 1, inGroup, parser.tokenStart);
        }
        consumeOpt(parser, context, 18);
      }
      const node = {
        type: "ImportExpression",
        source,
        options
      };
      consume(parser, context, 16);
      return parser.finishNode(node, start);
    }
    function parseImportAttributes(parser, context) {
      if (!consumeOpt(parser, context, 20579))
        return [];
      consume(parser, context, 2162700);
      const attributes = [];
      const keysContent = /* @__PURE__ */ new Set();
      while (parser.getToken() !== 1074790415) {
        const start = parser.tokenStart;
        const key = parseIdentifierOrStringLiteral(parser, context);
        consume(parser, context, 21);
        const value = parseStringLiteral(parser, context);
        const keyContent = key.type === "Literal" ? key.value : key.name;
        if (keysContent.has(keyContent)) {
          parser.report(145, `${keyContent}`);
        }
        keysContent.add(keyContent);
        attributes.push(parser.finishNode({
          type: "ImportAttribute",
          key,
          value
        }, start));
        if (parser.getToken() !== 1074790415) {
          consume(parser, context, 18);
        }
      }
      consume(parser, context, 1074790415);
      return attributes;
    }
    function parseStringLiteral(parser, context) {
      if (parser.getToken() === 134283267) {
        return parseLiteral(parser, context);
      } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
      }
    }
    function parseIdentifierOrStringLiteral(parser, context) {
      if (parser.getToken() === 134283267) {
        return parseLiteral(parser, context);
      } else if (parser.getToken() & 143360) {
        return parseIdentifier(parser, context);
      } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
      }
    }
    function validateStringWellFormed(parser, str) {
      const len = str.length;
      for (let i = 0; i < len; i++) {
        const code = str.charCodeAt(i);
        if ((code & 64512) !== 55296)
          continue;
        if (code > 56319 || ++i >= len || (str.charCodeAt(i) & 64512) !== 56320) {
          parser.report(171, JSON.stringify(str.charAt(i--)));
        }
      }
    }
    function parseModuleExportName(parser, context) {
      if (parser.getToken() === 134283267) {
        validateStringWellFormed(parser, parser.tokenValue);
        return parseLiteral(parser, context);
      } else if (parser.getToken() & 143360) {
        return parseIdentifier(parser, context);
      } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
      }
    }
    function parseBigIntLiteral(parser, context) {
      const { tokenRaw, tokenValue, tokenStart } = parser;
      nextToken(parser, context);
      parser.assignable = 2;
      const node = {
        type: "Literal",
        value: tokenValue,
        bigint: String(tokenValue)
      };
      if (parser.options.raw) {
        node.raw = tokenRaw;
      }
      return parser.finishNode(node, tokenStart);
    }
    function parseTemplateLiteral(parser, context) {
      parser.assignable = 2;
      const { tokenValue, tokenRaw, tokenStart } = parser;
      consume(parser, context, 67174409);
      const quasis = [parseTemplateElement(parser, tokenValue, tokenRaw, tokenStart, true)];
      return parser.finishNode({
        type: "TemplateLiteral",
        expressions: [],
        quasis
      }, tokenStart);
    }
    function parseTemplate(parser, context, privateScope) {
      context = (context | 131072) ^ 131072;
      const { tokenValue, tokenRaw, tokenStart } = parser;
      consume(parser, context & -65 | 32, 67174408);
      const quasis = [parseTemplateElement(parser, tokenValue, tokenRaw, tokenStart, false)];
      const expressions = [
        parseExpressions(parser, context & -65, privateScope, 0, 1, parser.tokenStart)
      ];
      if (parser.getToken() !== 1074790415)
        parser.report(83);
      while (parser.setToken(scanTemplateTail(parser, context), true) !== 67174409) {
        const { tokenValue: tokenValue2, tokenRaw: tokenRaw2, tokenStart: tokenStart2 } = parser;
        consume(parser, context & -65 | 32, 67174408);
        quasis.push(parseTemplateElement(parser, tokenValue2, tokenRaw2, tokenStart2, false));
        expressions.push(parseExpressions(parser, context, privateScope, 0, 1, parser.tokenStart));
        if (parser.getToken() !== 1074790415)
          parser.report(83);
      }
      {
        const { tokenValue: tokenValue2, tokenRaw: tokenRaw2, tokenStart: tokenStart2 } = parser;
        consume(parser, context, 67174409);
        quasis.push(parseTemplateElement(parser, tokenValue2, tokenRaw2, tokenStart2, true));
      }
      return parser.finishNode({
        type: "TemplateLiteral",
        expressions,
        quasis
      }, tokenStart);
    }
    function parseTemplateElement(parser, cooked, raw, start, tail) {
      const node = parser.finishNode({
        type: "TemplateElement",
        value: {
          cooked,
          raw
        },
        tail
      }, start);
      const tailSize = tail ? 1 : 2;
      if (parser.options.ranges) {
        node.start += 1;
        node.range[0] += 1;
        node.end -= tailSize;
        node.range[1] -= tailSize;
      }
      if (parser.options.loc) {
        node.loc.start.column += 1;
        node.loc.end.column -= tailSize;
      }
      return node;
    }
    function parseSpreadElement(parser, context, privateScope) {
      const start = parser.tokenStart;
      context = (context | 131072) ^ 131072;
      consume(parser, context | 32, 14);
      const argument = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
      parser.assignable = 1;
      return parser.finishNode({
        type: "SpreadElement",
        argument
      }, start);
    }
    function parseArguments(parser, context, privateScope, inGroup) {
      nextToken(parser, context | 32);
      const args = [];
      if (parser.getToken() === 16) {
        nextToken(parser, context | 64);
        return args;
      }
      while (parser.getToken() !== 16) {
        if (parser.getToken() === 14) {
          args.push(parseSpreadElement(parser, context, privateScope));
        } else {
          args.push(parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart));
        }
        if (parser.getToken() !== 18)
          break;
        nextToken(parser, context | 32);
        if (parser.getToken() === 16)
          break;
      }
      consume(parser, context | 64, 16);
      return args;
    }
    function parseIdentifier(parser, context) {
      const { tokenValue, tokenStart } = parser;
      const allowRegex = tokenValue === "await" && (parser.getToken() & -2147483648) === 0;
      nextToken(parser, context | (allowRegex ? 32 : 0));
      return parser.finishNode({
        type: "Identifier",
        name: tokenValue
      }, tokenStart);
    }
    function parseLiteral(parser, context) {
      const { tokenValue, tokenRaw, tokenStart } = parser;
      if (parser.getToken() === 134283388) {
        return parseBigIntLiteral(parser, context);
      }
      nextToken(parser, context);
      parser.assignable = 2;
      return parser.finishNode(parser.options.raw ? {
        type: "Literal",
        value: tokenValue,
        raw: tokenRaw
      } : {
        type: "Literal",
        value: tokenValue
      }, tokenStart);
    }
    function parseNullOrTrueOrFalseLiteral(parser, context) {
      const start = parser.tokenStart;
      const raw = KeywordDescTable[parser.getToken() & 255];
      const value = parser.getToken() === 86023 ? null : raw === "true";
      nextToken(parser, context);
      parser.assignable = 2;
      return parser.finishNode(parser.options.raw ? {
        type: "Literal",
        value,
        raw
      } : {
        type: "Literal",
        value
      }, start);
    }
    function parseThisExpression(parser, context) {
      const { tokenStart } = parser;
      nextToken(parser, context);
      parser.assignable = 2;
      return parser.finishNode({
        type: "ThisExpression"
      }, tokenStart);
    }
    function parseFunctionDeclaration(parser, context, scope, privateScope, origin, allowGen, flags, isAsync, start) {
      nextToken(parser, context | 32);
      const isGenerator = allowGen ? optionalBit(parser, context, 8391476) : 0;
      let id = null;
      let funcNameToken;
      let functionScope = scope ? parser.createScope() : void 0;
      if (parser.getToken() === 67174411) {
        if ((flags & 1) === 0)
          parser.report(39, "Function");
      } else {
        const kind = origin & 4 && ((context & 8) === 0 || (context & 2) === 0) ? 4 : 64 | (isAsync ? 1024 : 0) | (isGenerator ? 1024 : 0);
        validateFunctionName(parser, context, parser.getToken());
        if (scope) {
          if (kind & 4) {
            scope.addVarName(context, parser.tokenValue, kind);
          } else {
            scope.addBlockName(context, parser.tokenValue, kind, origin);
          }
          functionScope = functionScope?.createChildScope(128);
          if (flags) {
            if (flags & 2) {
              parser.declareUnboundVariable(parser.tokenValue);
            }
          }
        }
        funcNameToken = parser.getToken();
        if (parser.getToken() & 143360) {
          id = parseIdentifier(parser, context);
        } else {
          parser.report(30, KeywordDescTable[parser.getToken() & 255]);
        }
      }
      {
        const modifierFlags2 = 256 | 512 | 1024 | 2048 | 8192 | 16384;
        context = (context | modifierFlags2) ^ modifierFlags2 | 65536 | (isAsync ? 2048 : 0) | (isGenerator ? 1024 : 0) | (isGenerator ? 0 : 262144);
      }
      functionScope = functionScope?.createChildScope(256);
      const params = parseFormalParametersOrFormalList(parser, (context | 8192) & -524289, functionScope, privateScope, 0, 1);
      const modifierFlags = 8 | 4 | 128 | 524288;
      const body = parseFunctionBody(parser, (context | modifierFlags) ^ modifierFlags | 32768 | 4096, functionScope?.createChildScope(64), privateScope, 8, funcNameToken, functionScope);
      return parser.finishNode({
        type: "FunctionDeclaration",
        id,
        params,
        body,
        async: isAsync === 1,
        generator: isGenerator === 1
      }, start);
    }
    function parseFunctionExpression(parser, context, privateScope, isAsync, inGroup, start) {
      nextToken(parser, context | 32);
      const isGenerator = optionalBit(parser, context, 8391476);
      const generatorAndAsyncFlags = (isAsync ? 2048 : 0) | (isGenerator ? 1024 : 0);
      let id = null;
      let funcNameToken;
      let scope = parser.createScopeIfLexical();
      const modifierFlags = 256 | 512 | 1024 | 2048 | 8192 | 16384 | 524288;
      if (parser.getToken() & 143360) {
        validateFunctionName(parser, (context | modifierFlags) ^ modifierFlags | generatorAndAsyncFlags, parser.getToken());
        scope = scope?.createChildScope(128);
        funcNameToken = parser.getToken();
        id = parseIdentifier(parser, context);
      }
      context = (context | modifierFlags) ^ modifierFlags | 65536 | generatorAndAsyncFlags | (isGenerator ? 0 : 262144);
      scope = scope?.createChildScope(256);
      const params = parseFormalParametersOrFormalList(parser, (context | 8192) & -524289, scope, privateScope, inGroup, 1);
      const body = parseFunctionBody(parser, context & -131229 | 32768 | 4096, scope?.createChildScope(64), privateScope, 0, funcNameToken, scope);
      parser.assignable = 2;
      return parser.finishNode({
        type: "FunctionExpression",
        id,
        params,
        body,
        async: isAsync === 1,
        generator: isGenerator === 1
      }, start);
    }
    function parseArrayLiteral(parser, context, privateScope, skipInitializer, inGroup) {
      const expr = parseArrayExpressionOrPattern(parser, context, void 0, privateScope, skipInitializer, inGroup, 0, 2, 0);
      if (parser.destructible & 64) {
        parser.report(63);
      }
      if (parser.destructible & 8) {
        parser.report(62);
      }
      return expr;
    }
    function parseArrayExpressionOrPattern(parser, context, scope, privateScope, skipInitializer, inGroup, isPattern, kind, origin) {
      const { tokenStart: start } = parser;
      nextToken(parser, context | 32);
      const elements = [];
      let destructible = 0;
      context = (context | 131072) ^ 131072;
      while (parser.getToken() !== 20) {
        if (consumeOpt(parser, context | 32, 18)) {
          elements.push(null);
        } else {
          let left;
          const { tokenStart, tokenValue } = parser;
          const token = parser.getToken();
          if (token & 143360) {
            left = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
            if (parser.getToken() === 1077936155) {
              if (parser.assignable & 2)
                parser.report(26);
              nextToken(parser, context | 32);
              scope?.addVarOrBlock(context, tokenValue, kind, origin);
              const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
              left = parser.finishNode(isPattern ? {
                type: "AssignmentPattern",
                left,
                right
              } : {
                type: "AssignmentExpression",
                operator: "=",
                left,
                right
              }, tokenStart);
              destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
            } else if (parser.getToken() === 18 || parser.getToken() === 20) {
              if (parser.assignable & 2) {
                destructible |= 16;
              } else {
                scope?.addVarOrBlock(context, tokenValue, kind, origin);
              }
              destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
            } else {
              destructible |= kind & 1 ? 32 : (kind & 2) === 0 ? 16 : 0;
              left = parseMemberOrUpdateExpression(parser, context, privateScope, left, inGroup, 0, tokenStart);
              if (parser.getToken() !== 18 && parser.getToken() !== 20) {
                if (parser.getToken() !== 1077936155)
                  destructible |= 16;
                left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, left);
              } else if (parser.getToken() !== 1077936155) {
                destructible |= parser.assignable & 2 ? 16 : 32;
              }
            }
          } else if (token & 2097152) {
            left = parser.getToken() === 2162700 ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
            destructible |= parser.destructible;
            parser.assignable = parser.destructible & 16 ? 2 : 1;
            if (parser.getToken() === 18 || parser.getToken() === 20) {
              if (parser.assignable & 2) {
                destructible |= 16;
              }
            } else if (parser.destructible & 8) {
              parser.report(71);
            } else {
              left = parseMemberOrUpdateExpression(parser, context, privateScope, left, inGroup, 0, tokenStart);
              destructible = parser.assignable & 2 ? 16 : 0;
              if (parser.getToken() !== 18 && parser.getToken() !== 20) {
                left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, left);
              } else if (parser.getToken() !== 1077936155) {
                destructible |= parser.assignable & 2 ? 16 : 32;
              }
            }
          } else if (token === 14) {
            left = parseSpreadOrRestElement(parser, context, scope, privateScope, 20, kind, origin, 0, inGroup, isPattern);
            destructible |= parser.destructible;
            if (parser.getToken() !== 18 && parser.getToken() !== 20)
              parser.report(30, KeywordDescTable[parser.getToken() & 255]);
          } else {
            left = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1);
            if (parser.getToken() !== 18 && parser.getToken() !== 20) {
              left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, left);
              if ((kind & (2 | 1)) === 0 && token === 67174411)
                destructible |= 16;
            } else if (parser.assignable & 2) {
              destructible |= 16;
            } else if (token === 67174411) {
              destructible |= parser.assignable & 1 && kind & (2 | 1) ? 32 : 16;
            }
          }
          elements.push(left);
          if (consumeOpt(parser, context | 32, 18)) {
            if (parser.getToken() === 20)
              break;
          } else
            break;
        }
      }
      consume(parser, context, 20);
      const node = parser.finishNode({
        type: isPattern ? "ArrayPattern" : "ArrayExpression",
        elements
      }, start);
      if (!skipInitializer && parser.getToken() & 4194304) {
        return parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, node);
      }
      parser.destructible = destructible;
      return node;
    }
    function parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, node) {
      if (parser.getToken() !== 1077936155)
        parser.report(26);
      nextToken(parser, context | 32);
      if (destructible & 16)
        parser.report(26);
      if (!isPattern)
        reinterpretToPattern(parser, node);
      const { tokenStart } = parser;
      const right = parseExpression(parser, context, privateScope, 1, inGroup, tokenStart);
      parser.destructible = (destructible | 64 | 8) ^ (8 | 64) | (parser.destructible & 128 ? 128 : 0) | (parser.destructible & 256 ? 256 : 0);
      return parser.finishNode(isPattern ? {
        type: "AssignmentPattern",
        left: node,
        right
      } : {
        type: "AssignmentExpression",
        left: node,
        operator: "=",
        right
      }, start);
    }
    function parseSpreadOrRestElement(parser, context, scope, privateScope, closingToken, kind, origin, isAsync, inGroup, isPattern) {
      const { tokenStart: start } = parser;
      nextToken(parser, context | 32);
      let argument = null;
      let destructible = 0;
      const { tokenValue, tokenStart } = parser;
      let token = parser.getToken();
      if (token & 143360) {
        parser.assignable = 1;
        argument = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart);
        token = parser.getToken();
        argument = parseMemberOrUpdateExpression(parser, context, privateScope, argument, inGroup, 0, tokenStart);
        if (parser.getToken() !== 18 && parser.getToken() !== closingToken) {
          if (parser.assignable & 2 && parser.getToken() === 1077936155)
            parser.report(71);
          destructible |= 16;
          argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, argument);
        }
        if (parser.assignable & 2) {
          destructible |= 16;
        } else if (token === closingToken || token === 18) {
          scope?.addVarOrBlock(context, tokenValue, kind, origin);
        } else {
          destructible |= 32;
        }
        destructible |= parser.destructible & 128 ? 128 : 0;
      } else if (token === closingToken) {
        parser.report(41);
      } else if (token & 2097152) {
        argument = parser.getToken() === 2162700 ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, isPattern, kind, origin) : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, isPattern, kind, origin);
        token = parser.getToken();
        if (token !== 1077936155 && token !== closingToken && token !== 18) {
          if (parser.destructible & 8)
            parser.report(71);
          argument = parseMemberOrUpdateExpression(parser, context, privateScope, argument, inGroup, 0, tokenStart);
          destructible |= parser.assignable & 2 ? 16 : 0;
          if ((parser.getToken() & 4194304) === 4194304) {
            if (parser.getToken() !== 1077936155)
              destructible |= 16;
            argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart, argument);
          } else {
            if ((parser.getToken() & 8388608) === 8388608) {
              argument = parseBinaryExpression(parser, context, privateScope, 1, tokenStart, 4, token, argument);
            }
            if (consumeOpt(parser, context | 32, 22)) {
              argument = parseConditionalExpression(parser, context, privateScope, argument, tokenStart);
            }
            destructible |= parser.assignable & 2 ? 16 : 32;
          }
        } else {
          destructible |= closingToken === 1074790415 && token !== 1077936155 ? 16 : parser.destructible;
        }
      } else {
        destructible |= 32;
        argument = parseLeftHandSideExpression(parser, context, privateScope, 1, inGroup, 1);
        const { tokenStart: tokenStart2 } = parser;
        const token2 = parser.getToken();
        if (token2 === 1077936155) {
          if (parser.assignable & 2)
            parser.report(26);
          argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart2, argument);
          destructible |= 16;
        } else {
          if (token2 === 18) {
            destructible |= 16;
          } else if (token2 !== closingToken) {
            argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart2, argument);
          }
          destructible |= parser.assignable & 1 ? 32 : 16;
        }
        parser.destructible = destructible;
        if (parser.getToken() !== closingToken && parser.getToken() !== 18)
          parser.report(161);
        return parser.finishNode({
          type: isPattern ? "RestElement" : "SpreadElement",
          argument
        }, start);
      }
      if (parser.getToken() !== closingToken) {
        if (kind & 1)
          destructible |= isAsync ? 16 : 32;
        if (consumeOpt(parser, context | 32, 1077936155)) {
          if (destructible & 16)
            parser.report(26);
          reinterpretToPattern(parser, argument);
          const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
          argument = parser.finishNode(isPattern ? {
            type: "AssignmentPattern",
            left: argument,
            right
          } : {
            type: "AssignmentExpression",
            left: argument,
            operator: "=",
            right
          }, tokenStart);
          destructible = 16;
        } else {
          destructible |= 16;
        }
      }
      parser.destructible = destructible;
      return parser.finishNode({
        type: isPattern ? "RestElement" : "SpreadElement",
        argument
      }, start);
    }
    function parseMethodDefinition(parser, context, privateScope, kind, inGroup, start) {
      const modifierFlags = 1024 | 2048 | 8192 | ((kind & 64) === 0 ? 512 | 16384 : 0);
      context = (context | modifierFlags) ^ modifierFlags | (kind & 8 ? 1024 : 0) | (kind & 16 ? 2048 : 0) | (kind & 64 ? 16384 : 0) | 256 | 32768 | 65536;
      let scope = parser.createScopeIfLexical(256);
      const params = parseMethodFormals(parser, (context | 8192) & -524289, scope, privateScope, kind, 1, inGroup);
      scope = scope?.createChildScope(64);
      const body = parseFunctionBody(parser, context & -655373 | 32768 | 4096, scope, privateScope, 0, void 0, scope?.parent);
      return parser.finishNode({
        type: "FunctionExpression",
        params,
        body,
        async: (kind & 16) > 0,
        generator: (kind & 8) > 0,
        id: null
      }, start);
    }
    function parseObjectLiteral(parser, context, privateScope, skipInitializer, inGroup) {
      const expr = parseObjectLiteralOrPattern(parser, context, void 0, privateScope, skipInitializer, inGroup, 0, 2, 0);
      if (parser.destructible & 64) {
        parser.report(63);
      }
      if (parser.destructible & 8) {
        parser.report(62);
      }
      return expr;
    }
    function parseObjectLiteralOrPattern(parser, context, scope, privateScope, skipInitializer, inGroup, isPattern, kind, origin) {
      const { tokenStart: start } = parser;
      nextToken(parser, context);
      const properties = [];
      let destructible = 0;
      let prototypeCount = 0;
      context = (context | 131072) ^ 131072;
      while (parser.getToken() !== 1074790415) {
        const { tokenValue, tokenStart } = parser;
        const token = parser.getToken();
        if (token === 14) {
          properties.push(parseSpreadOrRestElement(parser, context, scope, privateScope, 1074790415, kind, origin, 0, inGroup, isPattern));
        } else {
          let state = 0;
          let key = null;
          let value;
          if (parser.getToken() & 143360 || parser.getToken() === -2147483528 || parser.getToken() === -2147483527) {
            if (parser.getToken() === -2147483527)
              destructible |= 16;
            key = parseIdentifier(parser, context);
            if (parser.getToken() === 18 || parser.getToken() === 1074790415 || parser.getToken() === 1077936155) {
              state |= 4;
              if (context & 1 && (token & 537079808) === 537079808) {
                destructible |= 16;
              } else {
                validateBindingIdentifier(parser, context, kind, token, 0);
              }
              scope?.addVarOrBlock(context, tokenValue, kind, origin);
              if (consumeOpt(parser, context | 32, 1077936155)) {
                destructible |= 8;
                const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
                destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
                value = parser.finishNode({
                  type: "AssignmentPattern",
                  left: parser.options.uniqueKeyInPattern ? Object.assign({}, key) : key,
                  right
                }, tokenStart);
              } else {
                destructible |= (token === 209006 ? 128 : 0) | (token === -2147483528 ? 16 : 0);
                value = parser.options.uniqueKeyInPattern ? Object.assign({}, key) : key;
              }
            } else if (consumeOpt(parser, context | 32, 21)) {
              const { tokenStart: tokenStart2 } = parser;
              if (tokenValue === "__proto__")
                prototypeCount++;
              if (parser.getToken() & 143360) {
                const tokenAfterColon = parser.getToken();
                const valueAfterColon = parser.tokenValue;
                value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart2);
                const token2 = parser.getToken();
                value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart2);
                if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                  if (token2 === 1077936155 || token2 === 1074790415 || token2 === 18) {
                    destructible |= parser.destructible & 128 ? 128 : 0;
                    if (parser.assignable & 2) {
                      destructible |= 16;
                    } else if ((tokenAfterColon & 143360) === 143360) {
                      scope?.addVarOrBlock(context, valueAfterColon, kind, origin);
                    }
                  } else {
                    destructible |= parser.assignable & 1 ? 32 : 16;
                  }
                } else if ((parser.getToken() & 4194304) === 4194304) {
                  if (parser.assignable & 2) {
                    destructible |= 16;
                  } else if (token2 !== 1077936155) {
                    destructible |= 32;
                  } else {
                    scope?.addVarOrBlock(context, valueAfterColon, kind, origin);
                  }
                  value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart2, value);
                } else {
                  destructible |= 16;
                  if ((parser.getToken() & 8388608) === 8388608) {
                    value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart2, 4, token2, value);
                  }
                  if (consumeOpt(parser, context | 32, 22)) {
                    value = parseConditionalExpression(parser, context, privateScope, value, tokenStart2);
                  }
                }
              } else if ((parser.getToken() & 2097152) === 2097152) {
                value = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
                destructible = parser.destructible;
                parser.assignable = destructible & 16 ? 2 : 1;
                if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                  if (parser.assignable & 2)
                    destructible |= 16;
                } else if (parser.destructible & 8) {
                  parser.report(71);
                } else {
                  value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart2);
                  destructible = parser.assignable & 2 ? 16 : 0;
                  if ((parser.getToken() & 4194304) === 4194304) {
                    value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart2, value);
                  } else {
                    if ((parser.getToken() & 8388608) === 8388608) {
                      value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart2, 4, token, value);
                    }
                    if (consumeOpt(parser, context | 32, 22)) {
                      value = parseConditionalExpression(parser, context, privateScope, value, tokenStart2);
                    }
                    destructible |= parser.assignable & 2 ? 16 : 32;
                  }
                }
              } else {
                value = parseLeftHandSideExpression(parser, context, privateScope, 1, inGroup, 1);
                destructible |= parser.assignable & 1 ? 32 : 16;
                if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                  if (parser.assignable & 2)
                    destructible |= 16;
                } else {
                  value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart2);
                  destructible = parser.assignable & 2 ? 16 : 0;
                  if (parser.getToken() !== 18 && token !== 1074790415) {
                    if (parser.getToken() !== 1077936155)
                      destructible |= 16;
                    value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart2, value);
                  }
                }
              }
            } else if (parser.getToken() === 69271571) {
              destructible |= 16;
              if (token === 209005)
                state |= 16;
              state |= (token === 209008 ? 256 : token === 209009 ? 512 : 1) | 2;
              key = parseComputedPropertyName(parser, context, privateScope, inGroup);
              destructible |= parser.assignable;
              value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
            } else if (parser.getToken() & 143360) {
              destructible |= 16;
              if (token === -2147483528)
                parser.report(95);
              if (token === 209005) {
                if (parser.flags & 1)
                  parser.report(132);
                state |= 16 | 1;
              } else if (token === 209008) {
                state |= 256;
              } else if (token === 209009) {
                state |= 512;
              } else {
                parser.report(0);
              }
              key = parseIdentifier(parser, context);
              value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
            } else if (parser.getToken() === 67174411) {
              destructible |= 16;
              state |= 1;
              value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
            } else if (parser.getToken() === 8391476) {
              destructible |= 16;
              if (token === 209008) {
                parser.report(42);
              } else if (token === 209009) {
                parser.report(43);
              } else if (token !== 209005) {
                parser.report(30, KeywordDescTable[8391476 & 255]);
              }
              nextToken(parser, context);
              state |= 8 | 1 | (token === 209005 ? 16 : 0);
              if (parser.getToken() & 143360) {
                key = parseIdentifier(parser, context);
              } else if ((parser.getToken() & 134217728) === 134217728) {
                key = parseLiteral(parser, context);
              } else if (parser.getToken() === 69271571) {
                state |= 2;
                key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                destructible |= parser.assignable;
              } else {
                parser.report(30, KeywordDescTable[parser.getToken() & 255]);
              }
              value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
            } else if ((parser.getToken() & 134217728) === 134217728) {
              if (token === 209005)
                state |= 16;
              state |= token === 209008 ? 256 : token === 209009 ? 512 : 1;
              destructible |= 16;
              key = parseLiteral(parser, context);
              value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
            } else {
              parser.report(133);
            }
          } else if ((parser.getToken() & 134217728) === 134217728) {
            key = parseLiteral(parser, context);
            if (parser.getToken() === 21) {
              consume(parser, context | 32, 21);
              const { tokenStart: tokenStart2 } = parser;
              if (tokenValue === "__proto__")
                prototypeCount++;
              if (parser.getToken() & 143360) {
                value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart2);
                const { tokenValue: valueAfterColon } = parser;
                const token2 = parser.getToken();
                value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart2);
                if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                  if (token2 === 1077936155 || token2 === 1074790415 || token2 === 18) {
                    if (parser.assignable & 2) {
                      destructible |= 16;
                    } else {
                      scope?.addVarOrBlock(context, valueAfterColon, kind, origin);
                    }
                  } else {
                    destructible |= parser.assignable & 1 ? 32 : 16;
                  }
                } else if (parser.getToken() === 1077936155) {
                  if (parser.assignable & 2)
                    destructible |= 16;
                  value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart2, value);
                } else {
                  destructible |= 16;
                  value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart2, value);
                }
              } else if ((parser.getToken() & 2097152) === 2097152) {
                value = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
                destructible = parser.destructible;
                parser.assignable = destructible & 16 ? 2 : 1;
                if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                  if (parser.assignable & 2) {
                    destructible |= 16;
                  }
                } else if ((parser.destructible & 8) !== 8) {
                  value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart2);
                  destructible = parser.assignable & 2 ? 16 : 0;
                  if ((parser.getToken() & 4194304) === 4194304) {
                    value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart2, value);
                  } else {
                    if ((parser.getToken() & 8388608) === 8388608) {
                      value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart2, 4, token, value);
                    }
                    if (consumeOpt(parser, context | 32, 22)) {
                      value = parseConditionalExpression(parser, context, privateScope, value, tokenStart2);
                    }
                    destructible |= parser.assignable & 2 ? 16 : 32;
                  }
                }
              } else {
                value = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1);
                destructible |= parser.assignable & 1 ? 32 : 16;
                if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                  if (parser.assignable & 2) {
                    destructible |= 16;
                  }
                } else {
                  value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart2);
                  destructible = parser.assignable & 1 ? 0 : 16;
                  if (parser.getToken() !== 18 && parser.getToken() !== 1074790415) {
                    if (parser.getToken() !== 1077936155)
                      destructible |= 16;
                    value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart2, value);
                  }
                }
              }
            } else if (parser.getToken() === 67174411) {
              state |= 1;
              value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
              destructible = parser.assignable | 16;
            } else {
              parser.report(134);
            }
          } else if (parser.getToken() === 69271571) {
            key = parseComputedPropertyName(parser, context, privateScope, inGroup);
            destructible |= parser.destructible & 256 ? 256 : 0;
            state |= 2;
            if (parser.getToken() === 21) {
              nextToken(parser, context | 32);
              const { tokenStart: tokenStart2, tokenValue: tokenValue2 } = parser;
              const tokenAfterColon = parser.getToken();
              if (parser.getToken() & 143360) {
                value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenStart2);
                const token2 = parser.getToken();
                value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart2);
                if ((parser.getToken() & 4194304) === 4194304) {
                  destructible |= parser.assignable & 2 ? 16 : token2 === 1077936155 ? 0 : 32;
                  value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart2, value);
                } else if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                  if (token2 === 1077936155 || token2 === 1074790415 || token2 === 18) {
                    if (parser.assignable & 2) {
                      destructible |= 16;
                    } else if ((tokenAfterColon & 143360) === 143360) {
                      scope?.addVarOrBlock(context, tokenValue2, kind, origin);
                    }
                  } else {
                    destructible |= parser.assignable & 1 ? 32 : 16;
                  }
                } else {
                  destructible |= 16;
                  value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart2, value);
                }
              } else if ((parser.getToken() & 2097152) === 2097152) {
                value = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin);
                destructible = parser.destructible;
                parser.assignable = destructible & 16 ? 2 : 1;
                if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                  if (parser.assignable & 2)
                    destructible |= 16;
                } else if (destructible & 8) {
                  parser.report(62);
                } else {
                  value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart2);
                  destructible = parser.assignable & 2 ? destructible | 16 : 0;
                  if ((parser.getToken() & 4194304) === 4194304) {
                    if (parser.getToken() !== 1077936155)
                      destructible |= 16;
                    value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenStart2, value);
                  } else {
                    if ((parser.getToken() & 8388608) === 8388608) {
                      value = parseBinaryExpression(parser, context, privateScope, 1, tokenStart2, 4, token, value);
                    }
                    if (consumeOpt(parser, context | 32, 22)) {
                      value = parseConditionalExpression(parser, context, privateScope, value, tokenStart2);
                    }
                    destructible |= parser.assignable & 2 ? 16 : 32;
                  }
                }
              } else {
                value = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1);
                destructible |= parser.assignable & 1 ? 32 : 16;
                if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                  if (parser.assignable & 2)
                    destructible |= 16;
                } else {
                  value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenStart2);
                  destructible = parser.assignable & 1 ? 0 : 16;
                  if (parser.getToken() !== 18 && parser.getToken() !== 1074790415) {
                    if (parser.getToken() !== 1077936155)
                      destructible |= 16;
                    value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenStart2, value);
                  }
                }
              }
            } else if (parser.getToken() === 67174411) {
              state |= 1;
              value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
              destructible = 16;
            } else {
              parser.report(44);
            }
          } else if (token === 8391476) {
            consume(parser, context | 32, 8391476);
            state |= 8;
            if (parser.getToken() & 143360) {
              const token2 = parser.getToken();
              key = parseIdentifier(parser, context);
              state |= 1;
              if (parser.getToken() === 67174411) {
                destructible |= 16;
                value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
              } else {
                throw new ParseError(parser.tokenStart, parser.currentLocation, token2 === 209005 ? 46 : token2 === 209008 || parser.getToken() === 209009 ? 45 : 47, KeywordDescTable[token2 & 255]);
              }
            } else if ((parser.getToken() & 134217728) === 134217728) {
              destructible |= 16;
              key = parseLiteral(parser, context);
              state |= 1;
              value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
            } else if (parser.getToken() === 69271571) {
              destructible |= 16;
              state |= 2 | 1;
              key = parseComputedPropertyName(parser, context, privateScope, inGroup);
              value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenStart);
            } else {
              parser.report(126);
            }
          } else {
            parser.report(30, KeywordDescTable[token & 255]);
          }
          destructible |= parser.destructible & 128 ? 128 : 0;
          parser.destructible = destructible;
          properties.push(parser.finishNode({
            type: "Property",
            key,
            value,
            kind: !(state & 768) ? "init" : state & 512 ? "set" : "get",
            computed: (state & 2) > 0,
            method: (state & 1) > 0,
            shorthand: (state & 4) > 0
          }, tokenStart));
        }
        destructible |= parser.destructible;
        if (parser.getToken() !== 18)
          break;
        nextToken(parser, context);
      }
      consume(parser, context, 1074790415);
      if (prototypeCount > 1)
        destructible |= 64;
      const node = parser.finishNode({
        type: isPattern ? "ObjectPattern" : "ObjectExpression",
        properties
      }, start);
      if (!skipInitializer && parser.getToken() & 4194304) {
        return parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, node);
      }
      parser.destructible = destructible;
      return node;
    }
    function parseMethodFormals(parser, context, scope, privateScope, kind, type, inGroup) {
      consume(parser, context, 67174411);
      const params = [];
      parser.flags = (parser.flags | 128) ^ 128;
      if (parser.getToken() === 16) {
        if (kind & 512) {
          parser.report(37, "Setter", "one", "");
        }
        nextToken(parser, context);
        return params;
      }
      if (kind & 256) {
        parser.report(37, "Getter", "no", "s");
      }
      if (kind & 512 && parser.getToken() === 14) {
        parser.report(38);
      }
      context = (context | 131072) ^ 131072;
      let setterArgs = 0;
      let isNonSimpleParameterList = 0;
      while (parser.getToken() !== 18) {
        let left = null;
        const { tokenStart } = parser;
        if (parser.getToken() & 143360) {
          if ((context & 1) === 0) {
            if ((parser.getToken() & 36864) === 36864) {
              parser.flags |= 256;
            }
            if ((parser.getToken() & 537079808) === 537079808) {
              parser.flags |= 512;
            }
          }
          left = parseAndClassifyIdentifier(parser, context, scope, kind | 1, 0);
        } else {
          if (parser.getToken() === 2162700) {
            left = parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, type, 0);
          } else if (parser.getToken() === 69271571) {
            left = parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, type, 0);
          } else if (parser.getToken() === 14) {
            left = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, type, 0, 0, inGroup, 1);
          }
          isNonSimpleParameterList = 1;
          if (parser.destructible & (32 | 16))
            parser.report(50);
        }
        if (parser.getToken() === 1077936155) {
          nextToken(parser, context | 32);
          isNonSimpleParameterList = 1;
          const right = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
          left = parser.finishNode({
            type: "AssignmentPattern",
            left,
            right
          }, tokenStart);
        }
        setterArgs++;
        params.push(left);
        if (!consumeOpt(parser, context, 18))
          break;
        if (parser.getToken() === 16) {
          break;
        }
      }
      if (kind & 512 && setterArgs !== 1) {
        parser.report(37, "Setter", "one", "");
      }
      scope?.reportScopeError();
      if (isNonSimpleParameterList)
        parser.flags |= 128;
      consume(parser, context, 16);
      return params;
    }
    function parseComputedPropertyName(parser, context, privateScope, inGroup) {
      nextToken(parser, context | 32);
      const key = parseExpression(parser, (context | 131072) ^ 131072, privateScope, 1, inGroup, parser.tokenStart);
      consume(parser, context, 20);
      return key;
    }
    function parseParenthesizedExpression(parser, context, privateScope, canAssign, kind, origin, start) {
      parser.flags = (parser.flags | 128) ^ 128;
      const parenthesesStart = parser.tokenStart;
      nextToken(parser, context | 32 | 262144);
      const scope = parser.createScopeIfLexical()?.createChildScope(512);
      context = (context | 131072) ^ 131072;
      if (consumeOpt(parser, context, 16)) {
        return parseParenthesizedArrow(parser, context, scope, privateScope, [], canAssign, 0, start);
      }
      let destructible = 0;
      parser.destructible &= -385;
      let expr;
      let expressions = [];
      let isSequence = 0;
      let isNonSimpleParameterList = 0;
      let hasStrictReserved = 0;
      const tokenAfterParenthesesStart = parser.tokenStart;
      parser.assignable = 1;
      while (parser.getToken() !== 16) {
        const { tokenStart } = parser;
        const token = parser.getToken();
        if (token & 143360) {
          scope?.addBlockName(context, parser.tokenValue, 1, 0);
          if ((token & 537079808) === 537079808) {
            isNonSimpleParameterList = 1;
          } else if ((token & 36864) === 36864) {
            hasStrictReserved = 1;
          }
          expr = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, 1, 1, tokenStart);
          if (parser.getToken() === 16 || parser.getToken() === 18) {
            if (parser.assignable & 2) {
              destructible |= 16;
              isNonSimpleParameterList = 1;
            }
          } else {
            if (parser.getToken() === 1077936155) {
              isNonSimpleParameterList = 1;
            } else {
              destructible |= 16;
            }
            expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 1, 0, tokenStart);
            if (parser.getToken() !== 16 && parser.getToken() !== 18) {
              expr = parseAssignmentExpression(parser, context, privateScope, 1, 0, tokenStart, expr);
            }
          }
        } else if ((token & 2097152) === 2097152) {
          expr = token === 2162700 ? parseObjectLiteralOrPattern(parser, context | 262144, scope, privateScope, 0, 1, 0, kind, origin) : parseArrayExpressionOrPattern(parser, context | 262144, scope, privateScope, 0, 1, 0, kind, origin);
          destructible |= parser.destructible;
          isNonSimpleParameterList = 1;
          parser.assignable = 2;
          if (parser.getToken() !== 16 && parser.getToken() !== 18) {
            if (destructible & 8)
              parser.report(122);
            expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
            destructible |= 16;
            if (parser.getToken() !== 16 && parser.getToken() !== 18) {
              expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, tokenStart, expr);
            }
          }
        } else if (token === 14) {
          expr = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, origin, 0, 1, 0);
          if (parser.destructible & 16)
            parser.report(74);
          isNonSimpleParameterList = 1;
          if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
            expressions.push(expr);
          }
          destructible |= 8;
          break;
        } else {
          destructible |= 16;
          expr = parseExpression(parser, context, privateScope, 1, 1, tokenStart);
          if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
            expressions.push(expr);
          }
          if (parser.getToken() === 18) {
            if (!isSequence) {
              isSequence = 1;
              expressions = [expr];
            }
          }
          if (isSequence) {
            while (consumeOpt(parser, context | 32, 18)) {
              expressions.push(parseExpression(parser, context, privateScope, 1, 1, parser.tokenStart));
            }
            parser.assignable = 2;
            expr = parser.finishNode({
              type: "SequenceExpression",
              expressions
            }, tokenAfterParenthesesStart);
          }
          consume(parser, context, 16);
          parser.destructible = destructible;
          return parser.options.preserveParens ? parser.finishNode({
            type: "ParenthesizedExpression",
            expression: expr
          }, parenthesesStart) : expr;
        }
        if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
          expressions.push(expr);
        }
        if (!consumeOpt(parser, context | 32, 18))
          break;
        if (!isSequence) {
          isSequence = 1;
          expressions = [expr];
        }
        if (parser.getToken() === 16) {
          destructible |= 8;
          break;
        }
      }
      if (isSequence) {
        parser.assignable = 2;
        expr = parser.finishNode({
          type: "SequenceExpression",
          expressions
        }, tokenAfterParenthesesStart);
      }
      consume(parser, context, 16);
      if (destructible & 16 && destructible & 8)
        parser.report(151);
      destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
      if (parser.getToken() === 10) {
        if (destructible & (32 | 16))
          parser.report(49);
        if (context & (2048 | 2) && destructible & 128)
          parser.report(31);
        if (context & (1 | 1024) && destructible & 256) {
          parser.report(32);
        }
        if (isNonSimpleParameterList)
          parser.flags |= 128;
        if (hasStrictReserved)
          parser.flags |= 256;
        return parseParenthesizedArrow(parser, context, scope, privateScope, isSequence ? expressions : [expr], canAssign, 0, start);
      }
      if (destructible & 64) {
        parser.report(63);
      }
      if (destructible & 8) {
        parser.report(144);
      }
      parser.destructible = (parser.destructible | 256) ^ 256 | destructible;
      return parser.options.preserveParens ? parser.finishNode({
        type: "ParenthesizedExpression",
        expression: expr
      }, parenthesesStart) : expr;
    }
    function parseIdentifierOrArrow(parser, context, privateScope) {
      const { tokenStart: start } = parser;
      const { tokenValue } = parser;
      let isNonSimpleParameterList = 0;
      let hasStrictReserved = 0;
      if ((parser.getToken() & 537079808) === 537079808) {
        isNonSimpleParameterList = 1;
      } else if ((parser.getToken() & 36864) === 36864) {
        hasStrictReserved = 1;
      }
      const expr = parseIdentifier(parser, context);
      parser.assignable = 1;
      if (parser.getToken() === 10) {
        const scope = parser.options.lexical ? createArrowHeadParsingScope(parser, context, tokenValue) : void 0;
        if (isNonSimpleParameterList)
          parser.flags |= 128;
        if (hasStrictReserved)
          parser.flags |= 256;
        return parseArrowFunctionExpression(parser, context, scope, privateScope, [expr], 0, start);
      }
      return expr;
    }
    function parseArrowFromIdentifier(parser, context, privateScope, value, expr, inNew, canAssign, isAsync, start) {
      if (!canAssign)
        parser.report(57);
      if (inNew)
        parser.report(51);
      parser.flags &= -129;
      const scope = parser.options.lexical ? createArrowHeadParsingScope(parser, context, value) : void 0;
      return parseArrowFunctionExpression(parser, context, scope, privateScope, [expr], isAsync, start);
    }
    function parseParenthesizedArrow(parser, context, scope, privateScope, params, canAssign, isAsync, start) {
      if (!canAssign)
        parser.report(57);
      for (let i = 0; i < params.length; ++i)
        reinterpretToPattern(parser, params[i]);
      return parseArrowFunctionExpression(parser, context, scope, privateScope, params, isAsync, start);
    }
    function parseArrowFunctionExpression(parser, context, scope, privateScope, params, isAsync, start) {
      if (parser.flags & 1)
        parser.report(48);
      consume(parser, context | 32, 10);
      const modifierFlags = 1024 | 2048 | 8192 | 524288;
      context = (context | modifierFlags) ^ modifierFlags | (isAsync ? 2048 : 0);
      const expression = parser.getToken() !== 2162700;
      let body;
      scope?.reportScopeError();
      if (expression) {
        parser.flags = (parser.flags | 512 | 256 | 64 | 4096) ^ (512 | 256 | 64 | 4096);
        body = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
      } else {
        scope = scope?.createChildScope(64);
        const modifierFlags2 = 4 | 131072 | 8;
        body = parseFunctionBody(parser, (context | modifierFlags2) ^ modifierFlags2 | 4096, scope, privateScope, 16, void 0, void 0);
        switch (parser.getToken()) {
          case 69271571:
            if ((parser.flags & 1) === 0) {
              parser.report(116);
            }
            break;
          case 67108877:
          case 67174409:
          case 22:
            parser.report(117);
          case 67174411:
            if ((parser.flags & 1) === 0) {
              parser.report(116);
            }
            parser.flags |= 1024;
            break;
        }
        if ((parser.getToken() & 8388608) === 8388608 && (parser.flags & 1) === 0)
          parser.report(30, KeywordDescTable[parser.getToken() & 255]);
        if ((parser.getToken() & 33619968) === 33619968)
          parser.report(125);
      }
      parser.assignable = 2;
      return parser.finishNode({
        type: "ArrowFunctionExpression",
        params,
        body,
        async: isAsync === 1,
        expression,
        generator: false
      }, start);
    }
    function parseFormalParametersOrFormalList(parser, context, scope, privateScope, inGroup, kind) {
      consume(parser, context, 67174411);
      parser.flags = (parser.flags | 128) ^ 128;
      const params = [];
      if (consumeOpt(parser, context, 16))
        return params;
      context = (context | 131072) ^ 131072;
      let isNonSimpleParameterList = 0;
      while (parser.getToken() !== 18) {
        let left;
        const { tokenStart } = parser;
        const token = parser.getToken();
        if (token & 143360) {
          if ((context & 1) === 0) {
            if ((token & 36864) === 36864) {
              parser.flags |= 256;
            }
            if ((token & 537079808) === 537079808) {
              parser.flags |= 512;
            }
          }
          left = parseAndClassifyIdentifier(parser, context, scope, kind | 1, 0);
        } else {
          if (token === 2162700) {
            left = parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, kind, 0);
          } else if (token === 69271571) {
            left = parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, kind, 0);
          } else if (token === 14) {
            left = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, 0, 0, inGroup, 1);
          } else {
            parser.report(30, KeywordDescTable[token & 255]);
          }
          isNonSimpleParameterList = 1;
          if (parser.destructible & (32 | 16)) {
            parser.report(50);
          }
        }
        if (parser.getToken() === 1077936155) {
          nextToken(parser, context | 32);
          isNonSimpleParameterList = 1;
          const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenStart);
          left = parser.finishNode({
            type: "AssignmentPattern",
            left,
            right
          }, tokenStart);
        }
        params.push(left);
        if (!consumeOpt(parser, context, 18))
          break;
        if (parser.getToken() === 16) {
          break;
        }
      }
      if (isNonSimpleParameterList)
        parser.flags |= 128;
      if (isNonSimpleParameterList || context & 1) {
        scope?.reportScopeError();
      }
      consume(parser, context, 16);
      return params;
    }
    function parseMemberExpressionNoCall(parser, context, privateScope, expr, inGroup, start) {
      const token = parser.getToken();
      if (token & 67108864) {
        if (token === 67108877) {
          nextToken(parser, context | 262144);
          parser.assignable = 1;
          const property = parsePropertyOrPrivatePropertyName(parser, context, privateScope);
          return parseMemberExpressionNoCall(parser, context, privateScope, parser.finishNode({
            type: "MemberExpression",
            object: expr,
            computed: false,
            property,
            optional: false
          }, start), 0, start);
        } else if (token === 69271571) {
          nextToken(parser, context | 32);
          const { tokenStart } = parser;
          const property = parseExpressions(parser, context, privateScope, inGroup, 1, tokenStart);
          consume(parser, context, 20);
          parser.assignable = 1;
          return parseMemberExpressionNoCall(parser, context, privateScope, parser.finishNode({
            type: "MemberExpression",
            object: expr,
            computed: true,
            property,
            optional: false
          }, start), 0, start);
        } else if (token === 67174408 || token === 67174409) {
          parser.assignable = 2;
          return parseMemberExpressionNoCall(parser, context, privateScope, parser.finishNode({
            type: "TaggedTemplateExpression",
            tag: expr,
            quasi: parser.getToken() === 67174408 ? parseTemplate(parser, context | 64, privateScope) : parseTemplateLiteral(parser, context | 64)
          }, start), 0, start);
        }
      }
      return expr;
    }
    function parseNewExpression(parser, context, privateScope, inGroup) {
      const { tokenStart: start } = parser;
      const id = parseIdentifier(parser, context | 32);
      const { tokenStart } = parser;
      if (consumeOpt(parser, context, 67108877)) {
        if (context & 65536 && parser.getToken() === 209029) {
          parser.assignable = 2;
          return parseMetaProperty(parser, context, id, start);
        }
        parser.report(94);
      }
      parser.assignable = 2;
      if ((parser.getToken() & 16842752) === 16842752) {
        parser.report(65, KeywordDescTable[parser.getToken() & 255]);
      }
      const expr = parsePrimaryExpression(parser, context, privateScope, 2, 1, 0, inGroup, 1, tokenStart);
      context = (context | 131072) ^ 131072;
      if (parser.getToken() === 67108990)
        parser.report(168);
      const callee = parseMemberExpressionNoCall(parser, context, privateScope, expr, inGroup, tokenStart);
      parser.assignable = 2;
      return parser.finishNode({
        type: "NewExpression",
        callee,
        arguments: parser.getToken() === 67174411 ? parseArguments(parser, context, privateScope, inGroup) : []
      }, start);
    }
    function parseMetaProperty(parser, context, meta, start) {
      const property = parseIdentifier(parser, context);
      return parser.finishNode({
        type: "MetaProperty",
        meta,
        property
      }, start);
    }
    function parseAsyncArrowAfterIdent(parser, context, privateScope, canAssign, start) {
      if (parser.getToken() === 209006)
        parser.report(31);
      if (context & (1 | 1024) && parser.getToken() === 241771) {
        parser.report(32);
      }
      classifyIdentifier(parser, context, parser.getToken());
      if ((parser.getToken() & 36864) === 36864) {
        parser.flags |= 256;
      }
      return parseArrowFromIdentifier(parser, context & -524289 | 2048, privateScope, parser.tokenValue, parseIdentifier(parser, context), 0, canAssign, 1, start);
    }
    function parseAsyncArrowOrCallExpression(parser, context, privateScope, callee, canAssign, kind, origin, flags, start) {
      nextToken(parser, context | 32);
      const scope = parser.createScopeIfLexical()?.createChildScope(512);
      context = (context | 131072) ^ 131072;
      if (consumeOpt(parser, context, 16)) {
        if (parser.getToken() === 10) {
          if (flags & 1)
            parser.report(48);
          return parseParenthesizedArrow(parser, context, scope, privateScope, [], canAssign, 1, start);
        }
        return parser.finishNode({
          type: "CallExpression",
          callee,
          arguments: [],
          optional: false
        }, start);
      }
      let destructible = 0;
      let expr = null;
      let isNonSimpleParameterList = 0;
      parser.destructible = (parser.destructible | 256 | 128) ^ (256 | 128);
      const params = [];
      while (parser.getToken() !== 16) {
        const { tokenStart } = parser;
        const token = parser.getToken();
        if (token & 143360) {
          scope?.addBlockName(context, parser.tokenValue, kind, 0);
          if ((token & 537079808) === 537079808) {
            parser.flags |= 512;
          } else if ((token & 36864) === 36864) {
            parser.flags |= 256;
          }
          expr = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, 1, 1, tokenStart);
          if (parser.getToken() === 16 || parser.getToken() === 18) {
            if (parser.assignable & 2) {
              destructible |= 16;
              isNonSimpleParameterList = 1;
            }
          } else {
            if (parser.getToken() === 1077936155) {
              isNonSimpleParameterList = 1;
            } else {
              destructible |= 16;
            }
            expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 1, 0, tokenStart);
            if (parser.getToken() !== 16 && parser.getToken() !== 18) {
              expr = parseAssignmentExpression(parser, context, privateScope, 1, 0, tokenStart, expr);
            }
          }
        } else if (token & 2097152) {
          expr = token === 2162700 ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, 1, 0, kind, origin) : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, 1, 0, kind, origin);
          destructible |= parser.destructible;
          isNonSimpleParameterList = 1;
          if (parser.getToken() !== 16 && parser.getToken() !== 18) {
            if (destructible & 8)
              parser.report(122);
            expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenStart);
            destructible |= 16;
            if ((parser.getToken() & 8388608) === 8388608) {
              expr = parseBinaryExpression(parser, context, privateScope, 1, start, 4, token, expr);
            }
            if (consumeOpt(parser, context | 32, 22)) {
              expr = parseConditionalExpression(parser, context, privateScope, expr, start);
            }
          }
        } else if (token === 14) {
          expr = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, origin, 1, 1, 0);
          destructible |= (parser.getToken() === 16 ? 0 : 16) | parser.destructible;
          isNonSimpleParameterList = 1;
        } else {
          expr = parseExpression(parser, context, privateScope, 1, 0, tokenStart);
          destructible = parser.assignable;
          params.push(expr);
          while (consumeOpt(parser, context | 32, 18)) {
            params.push(parseExpression(parser, context, privateScope, 1, 0, tokenStart));
          }
          destructible |= parser.assignable;
          consume(parser, context, 16);
          parser.destructible = destructible | 16;
          parser.assignable = 2;
          return parser.finishNode({
            type: "CallExpression",
            callee,
            arguments: params,
            optional: false
          }, start);
        }
        params.push(expr);
        if (!consumeOpt(parser, context | 32, 18))
          break;
      }
      consume(parser, context, 16);
      destructible |= parser.destructible & 256 ? 256 : 0 | parser.destructible & 128 ? 128 : 0;
      if (parser.getToken() === 10) {
        if (destructible & (32 | 16))
          parser.report(27);
        if (parser.flags & 1 || flags & 1)
          parser.report(48);
        if (destructible & 128)
          parser.report(31);
        if (context & (1 | 1024) && destructible & 256)
          parser.report(32);
        if (isNonSimpleParameterList)
          parser.flags |= 128;
        return parseParenthesizedArrow(parser, context | 2048, scope, privateScope, params, canAssign, 1, start);
      }
      if (destructible & 64) {
        parser.report(63);
      }
      if (destructible & 8) {
        parser.report(62);
      }
      parser.assignable = 2;
      return parser.finishNode({
        type: "CallExpression",
        callee,
        arguments: params,
        optional: false
      }, start);
    }
    function parseRegExpLiteral(parser, context) {
      const { tokenRaw, tokenRegExp, tokenValue, tokenStart } = parser;
      nextToken(parser, context);
      parser.assignable = 2;
      const node = {
        type: "Literal",
        value: tokenValue,
        regex: tokenRegExp
      };
      if (parser.options.raw) {
        node.raw = tokenRaw;
      }
      return parser.finishNode(node, tokenStart);
    }
    function parseClassDeclaration(parser, context, scope, privateScope, flags) {
      let start;
      let decorators;
      if (parser.leadingDecorators.decorators.length) {
        if (parser.getToken() === 132) {
          parser.report(30, "@");
        }
        start = parser.leadingDecorators.start;
        decorators = [...parser.leadingDecorators.decorators];
        parser.leadingDecorators.decorators.length = 0;
      } else {
        start = parser.tokenStart;
        decorators = parseDecorators(parser, context, privateScope);
      }
      context = (context | 16384 | 1) ^ 16384;
      nextToken(parser, context);
      let id = null;
      let superClass = null;
      const { tokenValue } = parser;
      if (parser.getToken() & 4096 && parser.getToken() !== 20565) {
        if (isStrictReservedWord(parser, context, parser.getToken())) {
          parser.report(118);
        }
        if ((parser.getToken() & 537079808) === 537079808) {
          parser.report(119);
        }
        if (scope) {
          scope.addBlockName(context, tokenValue, 32, 0);
          if (flags) {
            if (flags & 2) {
              parser.declareUnboundVariable(tokenValue);
            }
          }
        }
        id = parseIdentifier(parser, context);
      } else {
        if ((flags & 1) === 0)
          parser.report(39, "Class");
      }
      let inheritedContext = context;
      if (consumeOpt(parser, context | 32, 20565)) {
        superClass = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 0);
        inheritedContext |= 512;
      } else {
        inheritedContext = (inheritedContext | 512) ^ 512;
      }
      const body = parseClassBody(parser, inheritedContext, context, scope, privateScope, 2, 8, 0);
      return parser.finishNode({
        type: "ClassDeclaration",
        id,
        superClass,
        body,
        ...parser.options.next ? { decorators } : null
      }, start);
    }
    function parseClassExpression(parser, context, privateScope, inGroup, start) {
      let id = null;
      let superClass = null;
      const decorators = parseDecorators(parser, context, privateScope);
      context = (context | 1 | 16384) ^ 16384;
      nextToken(parser, context);
      if (parser.getToken() & 4096 && parser.getToken() !== 20565) {
        if (isStrictReservedWord(parser, context, parser.getToken()))
          parser.report(118);
        if ((parser.getToken() & 537079808) === 537079808) {
          parser.report(119);
        }
        id = parseIdentifier(parser, context);
      }
      let inheritedContext = context;
      if (consumeOpt(parser, context | 32, 20565)) {
        superClass = parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 0);
        inheritedContext |= 512;
      } else {
        inheritedContext = (inheritedContext | 512) ^ 512;
      }
      const body = parseClassBody(parser, inheritedContext, context, void 0, privateScope, 2, 0, inGroup);
      parser.assignable = 2;
      return parser.finishNode({
        type: "ClassExpression",
        id,
        superClass,
        body,
        ...parser.options.next ? { decorators } : null
      }, start);
    }
    function parseDecorators(parser, context, privateScope) {
      const list = [];
      if (parser.options.next) {
        while (parser.getToken() === 132) {
          list.push(parseDecoratorList(parser, context, privateScope));
        }
      }
      return list;
    }
    function parseDecoratorList(parser, context, privateScope) {
      const start = parser.tokenStart;
      nextToken(parser, context | 32);
      let expression = parsePrimaryExpression(parser, context, privateScope, 2, 0, 1, 0, 1, start);
      expression = parseMemberOrUpdateExpression(parser, context, privateScope, expression, 0, 0, parser.tokenStart);
      return parser.finishNode({
        type: "Decorator",
        expression
      }, start);
    }
    function parseClassBody(parser, context, inheritedContext, scope, parentScope, kind, origin, inGroup) {
      const { tokenStart } = parser;
      const privateScope = parser.createPrivateScopeIfLexical(parentScope);
      consume(parser, context | 32, 2162700);
      const modifierFlags = 131072 | 524288;
      context = (context | modifierFlags) ^ modifierFlags;
      const hasConstr = parser.flags & 32;
      parser.flags = (parser.flags | 32) ^ 32;
      const body = [];
      while (parser.getToken() !== 1074790415) {
        const decoratorStart = parser.tokenStart;
        const decorators = parseDecorators(parser, context, privateScope);
        if (decorators.length > 0 && parser.tokenValue === "constructor") {
          parser.report(109);
        }
        if (parser.getToken() === 1074790415)
          parser.report(108);
        if (consumeOpt(parser, context, 1074790417)) {
          if (decorators.length > 0)
            parser.report(120);
          continue;
        }
        body.push(parseClassElementList(parser, context, scope, privateScope, inheritedContext, kind, decorators, 0, inGroup, decorators.length > 0 ? decoratorStart : parser.tokenStart));
      }
      consume(parser, origin & 8 ? context | 32 : context, 1074790415);
      privateScope?.validatePrivateIdentifierRefs();
      parser.flags = parser.flags & -33 | hasConstr;
      return parser.finishNode({
        type: "ClassBody",
        body
      }, tokenStart);
    }
    function parseClassElementList(parser, context, scope, privateScope, inheritedContext, type, decorators, isStatic, inGroup, start) {
      let kind = isStatic ? 32 : 0;
      let key = null;
      const token = parser.getToken();
      if (token & (143360 | 36864) || token === -2147483528) {
        key = parseIdentifier(parser, context);
        switch (token) {
          case 36970:
            if (!isStatic && parser.getToken() !== 67174411 && (parser.getToken() & 1048576) !== 1048576 && parser.getToken() !== 1077936155) {
              return parseClassElementList(parser, context, scope, privateScope, inheritedContext, type, decorators, 1, inGroup, start);
            }
            break;
          case 209005:
            if (parser.getToken() !== 67174411 && (parser.flags & 1) === 0) {
              if ((parser.getToken() & 1073741824) === 1073741824) {
                return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
              }
              kind |= 16 | (optionalBit(parser, context, 8391476) ? 8 : 0);
            }
            break;
          case 209008:
            if (parser.getToken() !== 67174411) {
              if ((parser.getToken() & 1073741824) === 1073741824) {
                return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
              }
              kind |= 256;
            }
            break;
          case 209009:
            if (parser.getToken() !== 67174411) {
              if ((parser.getToken() & 1073741824) === 1073741824) {
                return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
              }
              kind |= 512;
            }
            break;
          case 12402:
            if (parser.getToken() !== 67174411 && (parser.flags & 1) === 0) {
              if ((parser.getToken() & 1073741824) === 1073741824) {
                return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
              }
              if (parser.options.next)
                kind |= 1024;
            }
            break;
        }
      } else if (token === 69271571) {
        kind |= 2;
        key = parseComputedPropertyName(parser, inheritedContext, privateScope, inGroup);
      } else if ((token & 134217728) === 134217728) {
        key = parseLiteral(parser, context);
      } else if (token === 8391476) {
        kind |= 8;
        nextToken(parser, context);
      } else if (parser.getToken() === 130) {
        kind |= 8192;
        key = parsePrivateIdentifier(parser, context | 16, privateScope, 768);
      } else if ((parser.getToken() & 1073741824) === 1073741824) {
        kind |= 128;
      } else if (isStatic && token === 2162700) {
        return parseStaticBlock(parser, context | 16, scope, privateScope, start);
      } else if (token === -2147483527) {
        key = parseIdentifier(parser, context);
        if (parser.getToken() !== 67174411)
          parser.report(30, KeywordDescTable[parser.getToken() & 255]);
      } else {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
      }
      if (kind & (8 | 16 | 768 | 1024)) {
        if (parser.getToken() & 143360 || parser.getToken() === -2147483528 || parser.getToken() === -2147483527) {
          key = parseIdentifier(parser, context);
        } else if ((parser.getToken() & 134217728) === 134217728) {
          key = parseLiteral(parser, context);
        } else if (parser.getToken() === 69271571) {
          kind |= 2;
          key = parseComputedPropertyName(parser, context, privateScope, 0);
        } else if (parser.getToken() === 130) {
          kind |= 8192;
          key = parsePrivateIdentifier(parser, context, privateScope, kind);
        } else
          parser.report(135);
      }
      if ((kind & 2) === 0) {
        if (parser.tokenValue === "constructor") {
          if ((parser.getToken() & 1073741824) === 1073741824) {
            parser.report(129);
          } else if ((kind & 32) === 0 && parser.getToken() === 67174411) {
            if (kind & (768 | 16 | 128 | 8)) {
              parser.report(53, "accessor");
            } else if ((context & 512) === 0) {
              if (parser.flags & 32)
                parser.report(54);
              else
                parser.flags |= 32;
            }
          }
          kind |= 64;
        } else if ((kind & 8192) === 0 && kind & 32 && parser.tokenValue === "prototype") {
          parser.report(52);
        }
      }
      if (kind & 1024 || parser.getToken() !== 67174411 && (kind & 768) === 0) {
        return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, start);
      }
      const value = parseMethodDefinition(parser, context | 16, privateScope, kind, inGroup, parser.tokenStart);
      return parser.finishNode({
        type: "MethodDefinition",
        kind: (kind & 32) === 0 && kind & 64 ? "constructor" : kind & 256 ? "get" : kind & 512 ? "set" : "method",
        static: (kind & 32) > 0,
        computed: (kind & 2) > 0,
        key,
        value,
        ...parser.options.next ? { decorators } : null
      }, start);
    }
    function parsePrivateIdentifier(parser, context, privateScope, kind) {
      const { tokenStart } = parser;
      nextToken(parser, context);
      const { tokenValue } = parser;
      if (tokenValue === "constructor")
        parser.report(128);
      if (parser.options.lexical) {
        if (!privateScope)
          parser.report(4, tokenValue);
        if (kind) {
          privateScope.addPrivateIdentifier(tokenValue, kind);
        } else {
          privateScope.addPrivateIdentifierRef(tokenValue);
        }
      }
      nextToken(parser, context);
      return parser.finishNode({
        type: "PrivateIdentifier",
        name: tokenValue
      }, tokenStart);
    }
    function parsePropertyDefinition(parser, context, privateScope, key, state, decorators, start) {
      let value = null;
      if (state & 8)
        parser.report(0);
      if (parser.getToken() === 1077936155) {
        nextToken(parser, context | 32);
        const { tokenStart } = parser;
        if (parser.getToken() === 537079927)
          parser.report(119);
        const modifierFlags = 1024 | 2048 | 8192 | ((state & 64) === 0 ? 512 | 16384 : 0);
        context = (context | modifierFlags) ^ modifierFlags | (state & 8 ? 1024 : 0) | (state & 16 ? 2048 : 0) | (state & 64 ? 16384 : 0) | 256 | 65536;
        value = parsePrimaryExpression(parser, context | 16, privateScope, 2, 0, 1, 0, 1, tokenStart);
        if ((parser.getToken() & 1073741824) !== 1073741824 || (parser.getToken() & 4194304) === 4194304) {
          value = parseMemberOrUpdateExpression(parser, context | 16, privateScope, value, 0, 0, tokenStart);
          value = parseAssignmentExpression(parser, context | 16, privateScope, 0, 0, tokenStart, value);
        }
      }
      matchOrInsertSemicolon(parser, context);
      return parser.finishNode({
        type: state & 1024 ? "AccessorProperty" : "PropertyDefinition",
        key,
        value,
        static: (state & 32) > 0,
        computed: (state & 2) > 0,
        ...parser.options.next ? { decorators } : null
      }, start);
    }
    function parseBindingPattern(parser, context, scope, privateScope, type, origin) {
      if (parser.getToken() & 143360 || (context & 1) === 0 && parser.getToken() === -2147483527)
        return parseAndClassifyIdentifier(parser, context, scope, type, origin);
      if ((parser.getToken() & 2097152) !== 2097152)
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
      const left = parser.getToken() === 69271571 ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, 0, 1, type, origin) : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, 0, 1, type, origin);
      if (parser.destructible & 16)
        parser.report(50);
      if (parser.destructible & 32)
        parser.report(50);
      return left;
    }
    function parseAndClassifyIdentifier(parser, context, scope, kind, origin) {
      const token = parser.getToken();
      if (context & 1) {
        if ((token & 537079808) === 537079808) {
          parser.report(119);
        } else if ((token & 36864) === 36864 || token === -2147483527) {
          parser.report(118);
        }
      }
      if ((token & 20480) === 20480) {
        parser.report(102);
      }
      if (token === 241771) {
        if (context & 1024)
          parser.report(32);
        if (context & 2)
          parser.report(111);
      }
      if ((token & 255) === (241737 & 255)) {
        if (kind & (8 | 16))
          parser.report(100);
      }
      if (token === 209006) {
        if (context & 2048)
          parser.report(176);
        if (context & 2)
          parser.report(110);
      }
      const { tokenValue, tokenStart: start } = parser;
      nextToken(parser, context);
      scope?.addVarOrBlock(context, tokenValue, kind, origin);
      return parser.finishNode({
        type: "Identifier",
        name: tokenValue
      }, start);
    }
    function parseJSXRootElementOrFragment(parser, context, privateScope, inJSXChild, start) {
      if (!inJSXChild)
        consume(parser, context, 8456256);
      if (parser.getToken() === 8390721) {
        const openingFragment = parseJSXOpeningFragment(parser, start);
        const [children2, closingFragment] = parseJSXChildrenAndClosingFragment(parser, context, privateScope, inJSXChild);
        return parser.finishNode({
          type: "JSXFragment",
          openingFragment,
          children: children2,
          closingFragment
        }, start);
      }
      if (parser.getToken() === 8457014)
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
      let closingElement = null;
      let children = [];
      const openingElement = parseJSXOpeningElementOrSelfCloseElement(parser, context, privateScope, inJSXChild, start);
      if (!openingElement.selfClosing) {
        [children, closingElement] = parseJSXChildrenAndClosingElement(parser, context, privateScope, inJSXChild);
        const close = isEqualTagName(closingElement.name);
        if (isEqualTagName(openingElement.name) !== close)
          parser.report(155, close);
      }
      return parser.finishNode({
        type: "JSXElement",
        children,
        openingElement,
        closingElement
      }, start);
    }
    function parseJSXOpeningFragment(parser, start) {
      nextJSXToken(parser);
      return parser.finishNode({
        type: "JSXOpeningFragment"
      }, start);
    }
    function parseJSXClosingElement(parser, context, inJSXChild, start) {
      consume(parser, context, 8457014);
      const name = parseJSXElementName(parser, context);
      if (parser.getToken() !== 8390721) {
        parser.report(25, KeywordDescTable[8390721 & 255]);
      }
      if (inJSXChild) {
        nextJSXToken(parser);
      } else {
        nextToken(parser, context);
      }
      return parser.finishNode({
        type: "JSXClosingElement",
        name
      }, start);
    }
    function parseJSXClosingFragment(parser, context, inJSXChild, start) {
      consume(parser, context, 8457014);
      if (parser.getToken() !== 8390721) {
        parser.report(25, KeywordDescTable[8390721 & 255]);
      }
      if (inJSXChild) {
        nextJSXToken(parser);
      } else {
        nextToken(parser, context);
      }
      return parser.finishNode({
        type: "JSXClosingFragment"
      }, start);
    }
    function parseJSXChildrenAndClosingElement(parser, context, privateScope, inJSXChild) {
      const children = [];
      while (true) {
        const child = parseJSXChildOrClosingElement(parser, context, privateScope, inJSXChild);
        if (child.type === "JSXClosingElement") {
          return [children, child];
        }
        children.push(child);
      }
    }
    function parseJSXChildrenAndClosingFragment(parser, context, privateScope, inJSXChild) {
      const children = [];
      while (true) {
        const child = parseJSXChildOrClosingFragment(parser, context, privateScope, inJSXChild);
        if (child.type === "JSXClosingFragment") {
          return [children, child];
        }
        children.push(child);
      }
    }
    function parseJSXChildOrClosingElement(parser, context, privateScope, inJSXChild) {
      if (parser.getToken() === 137)
        return parseJSXText(parser, context);
      if (parser.getToken() === 2162700)
        return parseJSXExpressionContainer(parser, context, privateScope, 1, 0);
      if (parser.getToken() === 8456256) {
        const { tokenStart } = parser;
        nextToken(parser, context);
        if (parser.getToken() === 8457014)
          return parseJSXClosingElement(parser, context, inJSXChild, tokenStart);
        return parseJSXRootElementOrFragment(parser, context, privateScope, 1, tokenStart);
      }
      parser.report(0);
    }
    function parseJSXChildOrClosingFragment(parser, context, privateScope, inJSXChild) {
      if (parser.getToken() === 137)
        return parseJSXText(parser, context);
      if (parser.getToken() === 2162700)
        return parseJSXExpressionContainer(parser, context, privateScope, 1, 0);
      if (parser.getToken() === 8456256) {
        const { tokenStart } = parser;
        nextToken(parser, context);
        if (parser.getToken() === 8457014)
          return parseJSXClosingFragment(parser, context, inJSXChild, tokenStart);
        return parseJSXRootElementOrFragment(parser, context, privateScope, 1, tokenStart);
      }
      parser.report(0);
    }
    function parseJSXText(parser, context) {
      const start = parser.tokenStart;
      nextToken(parser, context);
      const node = {
        type: "JSXText",
        value: parser.tokenValue
      };
      if (parser.options.raw) {
        node.raw = parser.tokenRaw;
      }
      return parser.finishNode(node, start);
    }
    function parseJSXOpeningElementOrSelfCloseElement(parser, context, privateScope, inJSXChild, start) {
      if ((parser.getToken() & 143360) !== 143360 && (parser.getToken() & 4096) !== 4096)
        parser.report(0);
      const tagName = parseJSXElementName(parser, context);
      const attributes = parseJSXAttributes(parser, context, privateScope);
      const selfClosing = parser.getToken() === 8457014;
      if (selfClosing)
        consume(parser, context, 8457014);
      if (parser.getToken() !== 8390721) {
        parser.report(25, KeywordDescTable[8390721 & 255]);
      }
      if (inJSXChild || !selfClosing) {
        nextJSXToken(parser);
      } else {
        nextToken(parser, context);
      }
      return parser.finishNode({
        type: "JSXOpeningElement",
        name: tagName,
        attributes,
        selfClosing
      }, start);
    }
    function parseJSXElementName(parser, context) {
      const { tokenStart } = parser;
      rescanJSXIdentifier(parser);
      let key = parseJSXIdentifier(parser, context);
      if (parser.getToken() === 21)
        return parseJSXNamespacedName(parser, context, key, tokenStart);
      while (consumeOpt(parser, context, 67108877)) {
        rescanJSXIdentifier(parser);
        key = parseJSXMemberExpression(parser, context, key, tokenStart);
      }
      return key;
    }
    function parseJSXMemberExpression(parser, context, object, start) {
      const property = parseJSXIdentifier(parser, context);
      return parser.finishNode({
        type: "JSXMemberExpression",
        object,
        property
      }, start);
    }
    function parseJSXAttributes(parser, context, privateScope) {
      const attributes = [];
      while (parser.getToken() !== 8457014 && parser.getToken() !== 8390721 && parser.getToken() !== 1048576) {
        attributes.push(parseJsxAttribute(parser, context, privateScope));
      }
      return attributes;
    }
    function parseJSXSpreadAttribute(parser, context, privateScope) {
      const start = parser.tokenStart;
      nextToken(parser, context);
      consume(parser, context, 14);
      const expression = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
      consume(parser, context, 1074790415);
      return parser.finishNode({
        type: "JSXSpreadAttribute",
        argument: expression
      }, start);
    }
    function parseJsxAttribute(parser, context, privateScope) {
      const { tokenStart } = parser;
      if (parser.getToken() === 2162700)
        return parseJSXSpreadAttribute(parser, context, privateScope);
      rescanJSXIdentifier(parser);
      let value = null;
      let name = parseJSXIdentifier(parser, context);
      if (parser.getToken() === 21) {
        name = parseJSXNamespacedName(parser, context, name, tokenStart);
      }
      if (parser.getToken() === 1077936155) {
        const token = scanJSXAttributeValue(parser, context);
        switch (token) {
          case 134283267:
            value = parseLiteral(parser, context);
            break;
          case 8456256:
            value = parseJSXRootElementOrFragment(parser, context, privateScope, 0, parser.tokenStart);
            break;
          case 2162700:
            value = parseJSXExpressionContainer(parser, context, privateScope, 0, 1);
            break;
          default:
            parser.report(154);
        }
      }
      return parser.finishNode({
        type: "JSXAttribute",
        value,
        name
      }, tokenStart);
    }
    function parseJSXNamespacedName(parser, context, namespace, start) {
      consume(parser, context, 21);
      const name = parseJSXIdentifier(parser, context);
      return parser.finishNode({
        type: "JSXNamespacedName",
        namespace,
        name
      }, start);
    }
    function parseJSXExpressionContainer(parser, context, privateScope, inJSXChild, isAttr) {
      const { tokenStart: start } = parser;
      nextToken(parser, context | 32);
      const { tokenStart } = parser;
      if (parser.getToken() === 14)
        return parseJSXSpreadChild(parser, context, privateScope, start);
      let expression = null;
      if (parser.getToken() === 1074790415) {
        if (isAttr)
          parser.report(157);
        expression = parseJSXEmptyExpression(parser, {
          index: parser.startIndex,
          line: parser.startLine,
          column: parser.startColumn
        });
      } else {
        expression = parseExpression(parser, context, privateScope, 1, 0, tokenStart);
      }
      if (parser.getToken() !== 1074790415) {
        parser.report(25, KeywordDescTable[1074790415 & 255]);
      }
      if (inJSXChild) {
        nextJSXToken(parser);
      } else {
        nextToken(parser, context);
      }
      return parser.finishNode({
        type: "JSXExpressionContainer",
        expression
      }, start);
    }
    function parseJSXSpreadChild(parser, context, privateScope, start) {
      consume(parser, context, 14);
      const expression = parseExpression(parser, context, privateScope, 1, 0, parser.tokenStart);
      consume(parser, context, 1074790415);
      return parser.finishNode({
        type: "JSXSpreadChild",
        expression
      }, start);
    }
    function parseJSXEmptyExpression(parser, start) {
      return parser.finishNode({
        type: "JSXEmptyExpression"
      }, start, parser.tokenStart);
    }
    function parseJSXIdentifier(parser, context) {
      const start = parser.tokenStart;
      if (!(parser.getToken() & 143360)) {
        parser.report(30, KeywordDescTable[parser.getToken() & 255]);
      }
      const { tokenValue } = parser;
      nextToken(parser, context);
      return parser.finishNode({
        type: "JSXIdentifier",
        name: tokenValue
      }, start);
    }
    var version$1 = "6.1.4";
    var version = version$1;
    function parseScript(source, options) {
      return parseSource(source, options);
    }
    function parseModule(source, options) {
      return parseSource(source, options, 1 | 2);
    }
    function parse(source, options) {
      return parseSource(source, options);
    }
    exports2.parse = parse;
    exports2.parseModule = parseModule;
    exports2.parseScript = parseScript;
    exports2.version = version;
  }
});

// server/dist/scanner.js
var require_scanner = __commonJS({
  "server/dist/scanner.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scanJsFile = scanJsFile;
    exports2.scanHtmlFile = scanHtmlFile;
    exports2.scanWorkspace = scanWorkspace;
    var fs2 = __importStar2(require("fs"));
    var path2 = __importStar2(require("path"));
    var meriyah = __importStar2(require_meriyah());
    var SKIP_DIRS = /* @__PURE__ */ new Set([
      "node_modules",
      ".git",
      "bower_components",
      "dist",
      "build",
      ".angular",
      ".cache",
      "coverage",
      ".nyc_output"
    ]);
    function toUri(absPath) {
      return "file://" + absPath;
    }
    function fromUri(uri) {
      return uri.startsWith("file://") ? uri.slice(7) : uri;
    }
    function walkAST(node, visit, parent = null) {
      if (!node || typeof node !== "object")
        return;
      visit(node, parent);
      for (const key of Object.keys(node)) {
        const child = node[key];
        if (Array.isArray(child)) {
          for (const el of child)
            walkAST(el, visit, node);
        } else if (child && typeof child.type === "string") {
          walkAST(child, visit, node);
        }
      }
    }
    function scanJsFile(absPath) {
      const uri = toUri(absPath);
      const source = fs2.readFileSync(absPath, "utf-8");
      let ast;
      try {
        ast = meriyah.parse(source, {
          module: true,
          next: true,
          loc: true,
          ranges: false
        });
      } catch {
        return { modules: [], uri };
      }
      const modules = [];
      const moduleDecls = /* @__PURE__ */ new Map();
      const varToModule = /* @__PURE__ */ new Map();
      walkAST(ast, (node, parent) => {
        if (node.type === "VariableDeclarator" && node.id?.type === "Identifier" && node.init?.type === "CallExpression") {
          const modCall = resolveAngularModuleCall(node.init);
          if (modCall) {
            varToModule.set(node.id.name, modCall.moduleName);
            if (!moduleDecls.has(modCall.moduleName)) {
              moduleDecls.set(modCall.moduleName, {
                name: modCall.moduleName,
                loc: modCall.moduleLoc,
                node: node.init
              });
            }
          }
        }
        if (node.type === "CallExpression") {
          const modCall = resolveAngularModuleCall(node);
          if (modCall && !moduleDecls.has(modCall.moduleName)) {
            moduleDecls.set(modCall.moduleName, {
              name: modCall.moduleName,
              loc: modCall.moduleLoc,
              node
            });
          }
        }
      });
      walkAST(ast, (node, _parent) => {
        if (node.type !== "CallExpression")
          return;
        const callee = node.callee;
        if (!callee || callee.type !== "MemberExpression")
          return;
        const methodName = callee.property?.name;
        if (typeof methodName !== "string" || methodName === "module")
          return;
        let moduleName = null;
        let moduleLoc = null;
        if (callee.object?.type === "CallExpression") {
          const modCall = resolveAngularModuleCall(callee.object);
          if (modCall) {
            moduleName = modCall.moduleName;
            moduleLoc = modCall.moduleLoc;
          }
        }
        if (!moduleName && callee.object?.type === "Identifier") {
          const resolved = varToModule.get(callee.object.name);
          if (resolved) {
            const decl = moduleDecls.get(resolved);
            if (decl) {
              moduleName = resolved;
              moduleLoc = decl.loc;
            }
          }
        }
        if (moduleName && moduleLoc) {
          pushParsedComponent(moduleName, moduleLoc, { method: methodName, node, args: node.arguments || [] }, source, uri, modules);
        }
      });
      return { modules, uri };
    }
    function resolveAngularModuleCall(node) {
      if (node.type !== "CallExpression")
        return null;
      const callee = node.callee;
      if (!callee || callee.type !== "MemberExpression" || callee.property?.name !== "module")
        return null;
      const obj = callee.object;
      if (obj?.type !== "Identifier" || obj.name !== "angular")
        return null;
      const nameArg = node.arguments?.[0];
      if (!nameArg || nameArg.type !== "Literal" || typeof nameArg.value !== "string")
        return null;
      return {
        moduleName: nameArg.value,
        moduleLoc: pos(nameArg.loc?.start, node)
      };
    }
    function pushParsedComponent(moduleName, moduleLoc, call, source, uri, modules) {
      let mod = null;
      switch (call.method) {
        case "controller":
          mod = parseController(moduleName, moduleLoc, call, source, uri);
          break;
        case "service":
          mod = parseService(moduleName, moduleLoc, call, source, uri);
          break;
        case "factory":
          mod = parseFactory(moduleName, moduleLoc, call, source, uri);
          break;
        case "directive":
          mod = parseDirective(moduleName, moduleLoc, call, source, uri);
          break;
        case "component":
          mod = parseComponent(moduleName, moduleLoc, call, source, uri);
          break;
      }
      if (mod)
        modules.push(mod);
    }
    function pos(start, fallback) {
      if (start) {
        return {
          uri: "",
          line: start.line - 1,
          // meriyah uses 1-based; we use 0-based
          column: start.column
        };
      }
      return { uri: "", line: 0, column: 0 };
    }
    function inferType(expr) {
      if (!expr)
        return "unknown";
      switch (expr.type) {
        case "Literal":
          if (typeof expr.value === "string")
            return "string";
          if (typeof expr.value === "number")
            return "number";
          if (typeof expr.value === "boolean")
            return "boolean";
          if (expr.value === null)
            return "null";
          return "unknown";
        case "ArrayExpression":
          return "Array";
        case "ObjectExpression":
          return "Object";
        case "FunctionExpression":
        case "ArrowFunctionExpression":
          return "Function";
        case "TemplateLiteral":
          return "string";
        case "Identifier":
          if (expr.name === "undefined")
            return "undefined";
          if (expr.name === "Infinity" || expr.name === "NaN")
            return "number";
          return "unknown";
        case "UnaryExpression":
          if (expr.operator === "-" || expr.operator === "+")
            return "number";
          if (expr.operator === "!")
            return "boolean";
          if (expr.operator === "void")
            return "undefined";
          if (expr.operator === "typeof")
            return "string";
          return "unknown";
        case "NewExpression":
          if (expr.callee?.type === "Identifier")
            return expr.callee.name;
          return "unknown";
        default:
          return "unknown";
      }
    }
    function inferReturnType(fn) {
      if (!fn?.body)
        return null;
      const body = fn.body;
      if (body.type !== "BlockStatement") {
        return inferType(body);
      }
      for (const stmt of body.body || []) {
        if (stmt.type === "ReturnStatement" && stmt.argument) {
          return inferType(stmt.argument);
        }
      }
      return null;
    }
    function extractScopeMembers(fnBody, controllerName, moduleName, srcUri) {
      const members = [];
      const stmts = fnBody?.body || [];
      for (const stmt of stmts) {
        if (stmt.type !== "ExpressionStatement")
          continue;
        const expr = stmt.expression;
        if (!expr || expr.type !== "AssignmentExpression")
          continue;
        const lhs = expr.left;
        if (!lhs || lhs.type !== "MemberExpression" || lhs.object?.type !== "Identifier" || lhs.object.name !== "$scope" || lhs.property?.type !== "Identifier")
          continue;
        const name = lhs.property.name;
        const loc = pos(expr.loc?.start, expr);
        const rhs = expr.right;
        let kind = "variable";
        if (rhs?.type === "FunctionExpression" || rhs?.type === "ArrowFunctionExpression") {
          kind = "function";
        } else if (rhs?.type === "ObjectExpression") {
          kind = "object";
        }
        const inferredType = inferType(rhs);
        const returnType = kind === "function" ? inferReturnType(rhs) : null;
        members.push({
          name,
          kind,
          controllerName,
          moduleName,
          location: { ...loc, uri: srcUri },
          type: inferredType,
          returnType
        });
      }
      return members;
    }
    var BUILT_IN_ANGULAR_SERVICES = /* @__PURE__ */ new Set([
      "$scope",
      "$rootScope",
      "$http",
      "$q",
      "$timeout",
      "$interval",
      "$location",
      "$route",
      "$routeParams",
      "$state",
      "$stateParams",
      "$compile",
      "$parse",
      "$templateCache",
      "$document",
      "$window",
      "$injector",
      "$controller",
      "$provide",
      "$animate",
      "$filter",
      "$cacheFactory",
      "$cookies",
      "$resource",
      "$sce",
      "$sanitize",
      "$transclude",
      "$exceptionHandler",
      "$interpolate",
      "$log",
      "$aria",
      "$swipe",
      "$swipeDelegate",
      "this",
      "arguments"
    ]);
    function extractInjections(arg, srcUri) {
      const out = [];
      if (!arg)
        return out;
      if (arg.type === "ArrayExpression") {
        const els = arg.elements || [];
        for (let i = 0; i < els.length; i++) {
          const el = els[i];
          if (el?.type === "FunctionExpression" || el?.type === "ArrowFunctionExpression") {
            break;
          }
          if (el?.type === "Literal" && typeof el.value === "string") {
            out.push({
              name: el.value,
              isBuiltIn: BUILT_IN_ANGULAR_SERVICES.has(el.value),
              index: i,
              location: { ...pos(el.loc?.start, el), uri: srcUri }
            });
          }
        }
        return out;
      }
      if (arg.type === "FunctionExpression" || arg.type === "ArrowFunctionExpression") {
        const params = arg.params || [];
        for (let i = 0; i < params.length; i++) {
          const p = params[i];
          if (p?.type === "Identifier") {
            out.push({
              name: p.name,
              isBuiltIn: BUILT_IN_ANGULAR_SERVICES.has(p.name),
              index: i,
              location: { ...pos(p.loc?.start, p), uri: srcUri }
            });
          }
        }
      }
      return out;
    }
    function parseController(moduleName, moduleLoc, call, source, uri) {
      const nameArg = call.args[0];
      const name = nameArg?.type === "Literal" ? String(nameArg.value ?? "") : "unknown";
      const fn = extractControllerFn(call.args[1]);
      const scopeMembers = fn ? extractScopeMembers(fn.body, name, moduleName, uri) : [];
      const injections = extractInjections(call.args[1], uri);
      return {
        name: moduleName,
        location: { ...moduleLoc, uri },
        components: [
          {
            kind: "controller",
            name,
            moduleName,
            location: { ...pos(nameArg?.loc?.start), uri },
            scopeMembers,
            templateUri: null,
            injections
          }
        ]
      };
    }
    function extractControllerFn(arg) {
      if (!arg)
        return null;
      if (arg.type === "ArrayExpression") {
        const els = arg.elements;
        const last = els?.[els.length - 1];
        if (last?.type === "FunctionExpression" || last?.type === "ArrowFunctionExpression") {
          return last;
        }
        return null;
      }
      if (arg.type === "FunctionExpression" || arg.type === "ArrowFunctionExpression") {
        return arg;
      }
      return null;
    }
    function parseService(moduleName, moduleLoc, call, source, uri) {
      const name = call.args[0]?.value ?? "unknown";
      return {
        name: moduleName,
        location: { ...moduleLoc, uri },
        components: [
          {
            kind: "service",
            name,
            moduleName,
            location: { ...pos(call.args[0]?.loc?.start), uri },
            scopeMembers: [],
            templateUri: null,
            injections: []
          }
        ]
      };
    }
    function parseFactory(moduleName, moduleLoc, call, source, uri) {
      const name = call.args[0]?.value ?? "unknown";
      return {
        name: moduleName,
        location: { ...moduleLoc, uri },
        components: [
          {
            kind: "factory",
            name,
            moduleName,
            location: { ...pos(call.args[0]?.loc?.start), uri },
            scopeMembers: [],
            templateUri: null,
            injections: []
          }
        ]
      };
    }
    function parseDirective(moduleName, moduleLoc, call, source, uri) {
      const name = call.args[0]?.value ?? "unknown";
      let templateUrl = null;
      const fn = call.args[1];
      if (fn?.type === "FunctionExpression" || fn?.type === "ArrowFunctionExpression") {
        templateUrl = extractTemplateUrl(fn.body, source, uri);
      }
      return {
        name: moduleName,
        location: { ...moduleLoc, uri },
        components: [
          {
            kind: "directive",
            name,
            moduleName,
            location: { ...pos(call.args[0]?.loc?.start), uri },
            scopeMembers: [],
            templateUri: templateUrl,
            injections: []
          }
        ]
      };
    }
    function parseComponent(moduleName, moduleLoc, call, source, uri) {
      const name = call.args[0]?.value ?? "unknown";
      let templateUrl = null;
      const opts = call.args[1];
      if (opts?.type === "ObjectExpression") {
        templateUrl = extractTemplateUrl(opts, source, uri);
      }
      return {
        name: moduleName,
        location: { ...moduleLoc, uri },
        components: [
          {
            kind: "component",
            name,
            moduleName,
            location: { ...pos(call.args[0]?.loc?.start), uri },
            scopeMembers: [],
            templateUri: templateUrl,
            injections: []
          }
        ]
      };
    }
    function extractTemplateUrl(bodyOrObj, source, jsPath) {
      const props = bodyOrObj.properties || bodyOrObj.body?.[0]?.argument?.properties || [];
      const returnStmt = bodyOrObj.body?.[0];
      const objExpr = returnStmt?.type === "ReturnStatement" ? returnStmt.argument : bodyOrObj;
      const members = objExpr?.properties || [];
      for (const prop of members) {
        if (prop.key?.type === "Identifier" && prop.key?.name === "templateUrl") {
          const val = prop.value;
          if (val?.type === "Literal" && typeof val.value === "string") {
            const resolved = path2.resolve(path2.dirname(fromUri(jsPath)), val.value);
            return toUri(resolved);
          }
        }
      }
      return null;
    }
    var ANGULAR_DIRECTIVES = /* @__PURE__ */ new Set([
      "ng-controller",
      "ng-click",
      "ng-change",
      "ng-model",
      "ng-show",
      "ng-hide",
      "ng-if",
      "ng-repeat",
      "ng-options",
      "ng-class",
      "ng-style",
      "ng-blur",
      "ng-focus",
      "ng-submit",
      "ng-init",
      "ng-keydown",
      "ng-keyup",
      "ng-keypress",
      "ng-mousedown",
      "ng-mouseup",
      "ng-mouseenter",
      "ng-mouseleave",
      "ng-mousemove",
      "ng-mouseover",
      "ng-mouseout",
      "ng-dblclick",
      "ng-bind",
      "ng-bind-html",
      "ng-bind-template",
      "ng-cloak",
      "ng-include",
      "ng-switch",
      "ng-switch-when",
      "ng-switch-default",
      "ng-pluralize",
      "ng-transclude",
      "ng-src",
      "ng-href",
      "ng-attr-disabled",
      "ng-disabled",
      "ng-readonly",
      "ng-checked",
      "ng-selected",
      "ng-open",
      "ng-form",
      "ng-non-bindable",
      "ng-value",
      "ng-trim",
      "ng-paste",
      "ng-copy",
      "ng-cut"
    ]);
    var IDENTIFIER_RE = /\b([a-zA-Z_$][\w$]*)\s*(?:\(|\))?/g;
    function scanHtmlFile(absPath) {
      const uri = toUri(absPath);
      const source = fs2.readFileSync(absPath, "utf-8");
      const ctrlStack = [];
      let elementDepth = 0;
      const expressions = [];
      let line = 0;
      let col = 0;
      let i = 0;
      function advance() {
        if (source[i] === "\\n") {
          line++;
          col = 0;
        }
        i++;
        col++;
      }
      function peek() {
        return i < source.length ? source[i] : null;
      }
      function findActiveController() {
        for (let j = ctrlStack.length - 1; j >= 0; j--) {
          if (ctrlStack[j].depth <= elementDepth) {
            return ctrlStack[j].name;
          }
        }
        return null;
      }
      function skipToTagEnd(start) {
        let pos2 = start;
        let inString = null;
        while (pos2 < source.length) {
          const ch = source[pos2];
          if (inString) {
            if (ch === inString && source[pos2 - 1] !== "\\")
              inString = null;
          } else {
            if (ch === '"' || ch === "'")
              inString = ch;
            if (ch === ">")
              return pos2 + 1;
          }
          pos2++;
        }
        return pos2;
      }
      function findPatternInSource(re, start) {
        re.lastIndex = start;
        return re.exec(source);
      }
      while (i < source.length) {
        const ch = source[i];
        if (ch === "<" && i + 1 < source.length && source[i + 1] !== "/" && /[a-zA-Z]/.test(source[i + 1])) {
          const tagStart = i;
          let tagName = "";
          let j = i + 1;
          while (j < source.length && /[a-zA-Z0-9_-]/.test(source[j])) {
            tagName += source[j];
            j++;
          }
          const lowerTag = tagName.toLowerCase();
          const tagEnd = skipToTagEnd(j);
          const isSelfClosing = lowerTag === "br" || lowerTag === "hr" || lowerTag === "input" || lowerTag === "img" || lowerTag === "meta" || lowerTag === "link" || lowerTag === "area" || lowerTag === "base" || lowerTag === "col" || lowerTag === "embed" || lowerTag === "param" || lowerTag === "source" || lowerTag === "track" || lowerTag === "wbr";
          const tagContent = source.slice(tagStart, tagEnd);
          if (!isSelfClosing) {
            const bodyBeforeClose = tagContent.slice(j - tagStart);
            if (!bodyBeforeClose.includes("/") || !bodyBeforeClose.trim().endsWith("/")) {
              elementDepth++;
            }
          }
          const ctrlRe = /ng-controller\s*=\s*["']([^"']+)(?:\s+as\s+(\w+))?["']/;
          const ctrlMatch = ctrlRe.exec(tagContent);
          if (ctrlMatch) {
            ctrlStack.push({
              name: ctrlMatch[1],
              alias: ctrlMatch[2] || null,
              depth: elementDepth
              // depth AFTER increment (children's level)
            });
          }
          const extractAttr = (re) => {
            re.lastIndex = 0;
            let m;
            while ((m = re.exec(tagContent)) !== null) {
              const dirName = m[1];
              const value = m[2];
              if (ANGULAR_DIRECTIVES.has(dirName)) {
                const refs = tokenizeExpression(value);
                if (refs.length > 0) {
                  const absIndex = tagStart + m.index;
                  const attrLine = source.slice(0, absIndex).split(/\r?\n/).length - 1;
                  const lastNl = source.lastIndexOf("\n", absIndex);
                  const attrCol = absIndex - (lastNl >= 0 ? lastNl + 1 : 0);
                  expressions.push({
                    expression: value,
                    location: { uri, line: attrLine, column: attrCol },
                    references: refs,
                    resolvedController: findActiveController()
                  });
                }
              }
            }
          };
          extractAttr(/\b(ng-\w+)\s*=\s*"([^"]*)"/g);
          extractAttr(/\b(ng-\w+)\s*=\s*'([^']*)'/g);
          while (i < tagEnd)
            advance();
          continue;
        }
        if (ch === "<" && i + 1 < source.length && source[i + 1] === "/") {
          let j = i + 2;
          while (j < source.length && /[a-zA-Z0-9_-]/.test(source[j]))
            j++;
          while (j < source.length && source[j] !== ">")
            j++;
          if (j < source.length)
            j++;
          elementDepth--;
          while (ctrlStack.length > 0 && ctrlStack[ctrlStack.length - 1].depth > elementDepth) {
            ctrlStack.pop();
          }
          while (i < j)
            advance();
          continue;
        }
        if (ch === "{" && i + 1 < source.length && source[i + 1] === "{") {
          const exprLine = line;
          const exprCol = col;
          advance();
          advance();
          let expr = "";
          while (i + 1 < source.length && !(source[i] === "}" && source[i + 1] === "}")) {
            expr += source[i];
            advance();
          }
          if (i + 1 < source.length) {
            advance();
            advance();
          }
          const trimmedExpr = expr.trim();
          if (trimmedExpr) {
            const refs = tokenizeExpression(trimmedExpr);
            expressions.push({
              expression: trimmedExpr,
              location: { uri, line: exprLine, column: exprCol },
              references: refs,
              resolvedController: findActiveController()
            });
          }
          continue;
        }
        advance();
      }
      const top = ctrlStack.length > 0 ? ctrlStack[ctrlStack.length - 1] : null;
      return {
        uri,
        controllerName: top ? top.name : null,
        alias: top ? top.alias : null,
        expressions
      };
    }
    function tokenizeExpression(expr) {
      const tokens = [];
      const seen = /* @__PURE__ */ new Set();
      const SKIP_WORDS = /* @__PURE__ */ new Set(["$scope", "$rootScope", "$event", "this", "null", "undefined", "true", "false"]);
      let m;
      while ((m = IDENTIFIER_RE.exec(expr)) !== null) {
        const name = m[1];
        if (!SKIP_WORDS.has(name) && !seen.has(name)) {
          seen.add(name);
          tokens.push(name);
        }
      }
      return tokens;
    }
    function scanWorkspace(opts) {
      const jsResults = [];
      const htmlResults = [];
      function walkDir(dir) {
        let entries;
        try {
          entries = fs2.readdirSync(dir, { withFileTypes: true });
        } catch {
          return;
        }
        for (const entry of entries) {
          const full = path2.join(dir, entry.name);
          if (entry.isDirectory()) {
            if (!SKIP_DIRS.has(entry.name)) {
              walkDir(full);
            }
          } else if (entry.isFile()) {
            const ext = path2.extname(entry.name).toLowerCase();
            if (ext === ".js") {
              opts.progress?.(full);
              try {
                jsResults.push(scanJsFile(full));
              } catch (err) {
                console.error(`[AngularJS LSP] Error scanning ${full}: ${err}`);
              }
            } else if (ext === ".html") {
              opts.progress?.(full);
              try {
                htmlResults.push(scanHtmlFile(full));
              } catch (err) {
                console.error(`[AngularJS LSP] Error scanning ${full}: ${err}`);
              }
            }
          }
        }
      }
      walkDir(opts.rootDir);
      return { jsResults, htmlResults };
    }
  }
});

// server/dist/analyzer.js
var require_analyzer = __commonJS({
  "server/dist/analyzer.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding2(result, mod, k[i]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.buildSymbolTable = buildSymbolTable;
    exports2.findDefinitions = findDefinitions;
    exports2.findAllReferences = findAllReferences;
    exports2.detectAngularJs = detectAngularJs;
    var fs2 = __importStar2(require("fs"));
    var path2 = __importStar2(require("path"));
    function buildSymbolTable(jsResults, htmlResults) {
      const modules = /* @__PURE__ */ new Map();
      const components = /* @__PURE__ */ new Map();
      const templates = /* @__PURE__ */ new Map();
      const memberIndex = /* @__PURE__ */ new Map();
      const referenceIndex = /* @__PURE__ */ new Map();
      const injectionIndex = /* @__PURE__ */ new Map();
      for (const result of jsResults) {
        for (const mod of result.modules) {
          const existing = modules.get(mod.name);
          if (existing) {
            existing.components.push(...mod.components);
          } else {
            modules.set(mod.name, { ...mod, components: [...mod.components] });
          }
          for (const comp of mod.components) {
            const key = `${comp.kind}:${comp.name}`;
            components.set(key, comp);
            for (const member of comp.scopeMembers) {
              const existingMembers = memberIndex.get(member.name) || [];
              existingMembers.push(member);
              memberIndex.set(member.name, existingMembers);
            }
            for (const inj of comp.injections) {
              if (inj.isBuiltIn)
                continue;
              const existingInj = injectionIndex.get(inj.name) || [];
              existingInj.push(inj);
              injectionIndex.set(inj.name, existingInj);
            }
          }
        }
      }
      for (const tmpl of htmlResults) {
        templates.set(tmpl.uri, tmpl);
        for (const expr of tmpl.expressions) {
          for (const refName of expr.references) {
            const existingRefs = referenceIndex.get(refName) || [];
            existingRefs.push(expr.location);
            referenceIndex.set(refName, existingRefs);
          }
        }
      }
      return {
        modules,
        components,
        templates,
        memberIndex,
        referenceIndex,
        injectionIndex
      };
    }
    function findDefinitions(symbolName, contextUri, table) {
      const results = [];
      const isHtml = contextUri.endsWith(".html");
      const isJs = contextUri.endsWith(".js");
      if (isHtml) {
        const members = table.memberIndex.get(symbolName) || [];
        for (const m of members) {
          results.push({
            uri: m.location.uri,
            line: m.location.line,
            column: m.location.column,
            label: `${m.controllerName}.${m.name} (${m.moduleName})`,
            kind: "definition"
          });
        }
        const compKey = `controller:${symbolName}`;
        const comp = table.components.get(compKey);
        if (comp) {
          results.push({
            uri: comp.location.uri,
            line: comp.location.line,
            column: comp.location.column,
            label: `Controller: ${comp.name} (${comp.moduleName})`,
            kind: "definition"
          });
        }
      }
      if (isJs) {
        const refs = table.referenceIndex.get(symbolName) || [];
        for (const loc of refs) {
          results.push({
            uri: loc.uri,
            line: loc.line,
            column: loc.column,
            label: `Usage in ${loc.uri.split("/").pop()}`,
            kind: "reference"
          });
        }
        for (const kind of ["service", "factory", "component"]) {
          const key = `${kind}:${symbolName}`;
          const comp = table.components.get(key);
          if (comp) {
            results.push({
              uri: comp.location.uri,
              line: comp.location.line,
              column: comp.location.column,
              label: `${kind}: ${comp.name} (${comp.moduleName})`,
              kind: "definition"
            });
          }
        }
      }
      return results;
    }
    function findAllReferences(symbolName, contextUri, table) {
      const results = findDefinitions(symbolName, contextUri, table);
      const isJs = contextUri.endsWith(".js");
      if (isJs) {
        const members = table.memberIndex.get(symbolName) || [];
        for (const m of members) {
          if (!results.some((r) => r.uri === m.location.uri && r.line === m.location.line)) {
            results.push({
              uri: m.location.uri,
              line: m.location.line,
              column: m.location.column,
              label: `Defined in ${m.controllerName}`,
              kind: "definition"
            });
          }
        }
      }
      return results;
    }
    function detectAngularJs(rootDir) {
      const SKIP = /* @__PURE__ */ new Set([
        "node_modules",
        ".git",
        "bower_components",
        "dist",
        "build",
        ".angular",
        ".cache",
        "target",
        "coverage"
      ]);
      try {
        const pkgPath = path2.join(rootDir, "package.json");
        if (fs2.existsSync(pkgPath)) {
          const pkg = JSON.parse(fs2.readFileSync(pkgPath, "utf-8"));
          const angularDep = pkg.dependencies && pkg.dependencies.angular || pkg.devDependencies && pkg.devDependencies.angular;
          if (angularDep && /^\^?1\./.test(angularDep))
            return true;
        }
      } catch {
      }
      let foundMarker = false;
      function walkMarker(dir, depth) {
        if (depth > 5 || foundMarker)
          return;
        let entries;
        try {
          entries = fs2.readdirSync(dir, { withFileTypes: true });
        } catch {
          return;
        }
        for (const e of entries) {
          if (e.isFile() && e.name === "angular.js") {
            foundMarker = true;
            return;
          }
          if (e.isDirectory() && !SKIP.has(e.name)) {
            walkMarker(path2.join(dir, e.name), depth + 1);
          }
        }
      }
      walkMarker(rootDir, 0);
      if (foundMarker)
        return true;
      let jsCount = 0;
      function walkJs(dir, depth) {
        if (depth > 5 || jsCount >= 100)
          return false;
        let entries;
        try {
          entries = fs2.readdirSync(dir, { withFileTypes: true });
        } catch {
          return false;
        }
        for (const e of entries) {
          if (e.isFile() && e.name.endsWith(".js")) {
            try {
              const content = fs2.readFileSync(path2.join(dir, e.name), "utf-8");
              if (content.includes("angular.module("))
                return true;
              jsCount++;
            } catch {
            }
          }
          if (e.isDirectory() && !SKIP.has(e.name)) {
            if (walkJs(path2.join(dir, e.name), depth + 1))
              return true;
          }
        }
        return false;
      }
      return walkJs(rootDir, 0);
    }
  }
});

// server/dist/server.js
var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
});
var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
  var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o2) {
      var ar = [];
      for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
      return ar;
    };
    return ownKeys(o);
  };
  return function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
  };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = require_main3();
var vscode_languageserver_textdocument_1 = (init_main2(), __toCommonJS(main_exports2));
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var scanner_js_1 = require_scanner();
var analyzer_js_1 = require_analyzer();
var connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
var documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
var workspaceRoot = null;
var symbolTable = null;
var isAngularJsProject = false;
var scanInProgress = false;
var jsResultsByUri = /* @__PURE__ */ new Map();
var htmlResultsByUri = /* @__PURE__ */ new Map();
function uriToPath(uri) {
  return uri.startsWith("file://") ? uri.slice(7) : uri;
}
function getIdentifierAtPosition(doc, pos) {
  const text = doc.getText();
  const offset = doc.offsetAt(pos);
  let start = offset;
  while (start > 0 && /[\w$]/.test(text[start - 1]))
    start--;
  let end = offset;
  while (end < text.length && /[\w$]/.test(text[end]))
    end++;
  if (start >= end)
    return null;
  const word = text.slice(start, end);
  if (["$scope", "$rootScope", "$event", "this", "angular"].includes(word)) {
    return null;
  }
  if (word === "$scope") {
    const dotEnd = offset + 1;
    if (text[offset] === ".") {
      let propStart = offset + 1;
      let propEnd = propStart;
      while (propEnd < text.length && /[\w$]/.test(text[propEnd]))
        propEnd++;
      return text.slice(propStart, propEnd) || null;
    }
    return null;
  }
  return word;
}
function toLocation(def) {
  return node_1.Location.create(def.uri, node_1.Range.create(node_1.Position.create(def.line, def.column), node_1.Position.create(def.line, def.column + 1)));
}
function startWorkspaceScan() {
  if (scanInProgress || !workspaceRoot)
    return;
  scanInProgress = true;
  connection.console.info(`[AngularJS LSP] Scanning workspace: ${workspaceRoot}`);
  isAngularJsProject = (0, analyzer_js_1.detectAngularJs)(workspaceRoot);
  if (!isAngularJsProject) {
    connection.console.info("[AngularJS LSP] Not an AngularJS project \u2014 no-op mode");
    scanInProgress = false;
    return;
  }
  connection.sendNotification("window/workDoneProgress/create", {
    token: "angularjs-scan",
    title: "Indexing AngularJS project...",
    percentage: 0
  });
  const { jsResults, htmlResults } = (0, scanner_js_1.scanWorkspace)({
    rootDir: workspaceRoot,
    progress: (file) => {
      connection.console.info(`[AngularJS LSP] Scanning: ${file}`);
    }
  });
  jsResultsByUri.clear();
  htmlResultsByUri.clear();
  for (const r of jsResults)
    jsResultsByUri.set(r.uri, r);
  for (const t of htmlResults)
    htmlResultsByUri.set(t.uri, t);
  symbolTable = (0, analyzer_js_1.buildSymbolTable)(Array.from(jsResultsByUri.values()), Array.from(htmlResultsByUri.values()));
  let memberCount = 0;
  let templateCount = symbolTable.templates.size;
  for (const [, comp] of symbolTable.components) {
    memberCount += comp.scopeMembers.length;
  }
  connection.console.info(`[AngularJS LSP] Scan complete: ${symbolTable.modules.size} modules, ${symbolTable.components.size} components, ${memberCount} scope members, ${templateCount} templates, ${symbolTable.referenceIndex.size} unique symbols referenced.`);
  recomputeAndPublishDiagnostics();
  scanInProgress = false;
}
function updateFile(uri) {
  if (!symbolTable || !workspaceRoot)
    return;
  const absPath = uriToPath(uri);
  if (!fs.existsSync(absPath))
    return;
  const ext = path.extname(absPath).toLowerCase();
  if (ext === ".js") {
    const result = (0, scanner_js_1.scanJsFile)(absPath);
    jsResultsByUri.set(uri, result);
  } else if (ext === ".html") {
    const result = (0, scanner_js_1.scanHtmlFile)(absPath);
    htmlResultsByUri.set(uri, result);
  } else {
    return;
  }
  symbolTable = (0, analyzer_js_1.buildSymbolTable)(Array.from(jsResultsByUri.values()), Array.from(htmlResultsByUri.values()));
  connection.console.info(`[AngularJS LSP] Incremental update for ${path.basename(absPath)}: tables now contain ${jsResultsByUri.size} JS + ${htmlResultsByUri.size} HTML files.`);
  recomputeAndPublishDiagnostics();
}
connection.onInitialize((params) => {
  workspaceRoot = params.workspaceFolders?.[0] ? uriToPath(params.workspaceFolders[0].uri) : params.rootUri ? uriToPath(params.rootUri) : process.cwd();
  connection.console.info(`[AngularJS LSP] Initializing \u2014 root: ${workspaceRoot}`);
  return {
    capabilities: {
      textDocumentSync: {
        change: node_1.TextDocumentSyncKind.Full,
        openClose: true,
        save: true
      },
      definitionProvider: true,
      referencesProvider: true,
      completionProvider: {
        resolveProvider: false,
        triggerCharacters: ["."]
      },
      hoverProvider: true
    }
  };
});
connection.onInitialized(() => {
  startWorkspaceScan();
});
documents.onDidOpen((e) => {
  if (!isAngularJsProject)
    return;
  updateFile(e.document.uri);
});
documents.onDidSave((e) => {
  if (!isAngularJsProject)
    return;
  updateFile(e.document.uri);
});
connection.onDefinition((params) => {
  if (!symbolTable || !isAngularJsProject)
    return null;
  const doc = documents.get(params.textDocument.uri);
  if (!doc)
    return null;
  const name = getIdentifierAtPosition(doc, params.position);
  if (!name)
    return null;
  connection.console.info(`[AngularJS LSP] Go to definition: "${name}" in ${params.textDocument.uri}`);
  const results = (0, analyzer_js_1.findDefinitions)(name, params.textDocument.uri, symbolTable);
  connection.console.info(`[AngularJS LSP] Found ${results.length} candidate(s) for "${name}"`);
  if (results.length === 0)
    return null;
  return results.map(toLocation);
});
connection.onReferences((params) => {
  if (!symbolTable || !isAngularJsProject)
    return null;
  const doc = documents.get(params.textDocument.uri);
  if (!doc)
    return null;
  const name = getIdentifierAtPosition(doc, params.position);
  if (!name)
    return null;
  connection.console.info(`[AngularJS LSP] Find references: "${name}" in ${params.textDocument.uri}`);
  const results = (0, analyzer_js_1.findAllReferences)(name, params.textDocument.uri, symbolTable);
  connection.console.info(`[AngularJS LSP] Found ${results.length} reference(s) for "${name}"`);
  if (results.length === 0)
    return null;
  return results.map(toLocation);
});
connection.onHover((params) => {
  if (!symbolTable || !isAngularJsProject)
    return null;
  const doc = documents.get(params.textDocument.uri);
  if (!doc)
    return null;
  const name = getIdentifierAtPosition(doc, params.position);
  if (!name)
    return null;
  const results = (0, analyzer_js_1.findDefinitions)(name, params.textDocument.uri, symbolTable);
  if (results.length === 0)
    return null;
  const memberInfo = symbolTable.memberIndex.get(name) || [];
  const typeLine = memberInfo.length > 0 ? `
**Inferred type:** \`${memberInfo[0].type}\`` + (memberInfo[0].returnType ? ` \u2192 returns \`${memberInfo[0].returnType}\`` : "") : "";
  const lines = results.map((r) => `- ${r.label} \u2014 \`${r.uri.split("/").pop()}:${r.line + 1}:${r.column + 1}\``);
  return {
    contents: {
      kind: node_1.MarkupKind.Markdown,
      value: `**AngularJS** \u2014 \`${name}\`${typeLine}

${lines.join("\n")}`
    }
  };
});
var lastDiagnosticsByUri = /* @__PURE__ */ new Map();
function computeDiagnosticsForUri(uri) {
  if (!symbolTable)
    return [];
  const diags = [];
  const isHtml = uri.endsWith(".html");
  const isJs = uri.endsWith(".js");
  if (!isHtml && !isJs)
    return [];
  if (isHtml) {
    const tmpl = symbolTable.templates.get(uri);
    if (!tmpl)
      return [];
    const declared = new Set(symbolTable.components.size > 0 ? Array.from(symbolTable.components.keys()).filter((k) => k.startsWith("controller:")).map((k) => k.slice("controller:".length)) : []);
    for (const expr of tmpl.expressions) {
      for (const refName of expr.references) {
        if (expr.expression.trim() === refName && !symbolTable.memberIndex.has(refName) && declared.has(refName)) {
          continue;
        }
        if (declared.size > 0 && expr.expression.trim() === refName && !declared.has(refName) && !symbolTable.memberIndex.has(refName)) {
        }
        if (!symbolTable.memberIndex.has(refName) && !["$scope", "$rootScope", "$event", "this", "undefined", "null", "true", "false"].includes(refName)) {
          if (!/^['"]/.test(expr.expression)) {
            diags.push({
              severity: node_1.DiagnosticSeverity.Warning,
              range: node_1.Range.create(node_1.Position.create(expr.location.line, expr.location.column), node_1.Position.create(expr.location.line, expr.location.column + expr.expression.length)),
              message: `\`${refName}\` is not defined in the current controller's scope.`,
              source: "angularjs-lsp"
            });
          }
        }
      }
    }
  }
  if (isJs) {
    for (const [, comp] of symbolTable.components) {
      if (comp.kind !== "controller")
        continue;
      for (const inj of comp.injections) {
        if (inj.isBuiltIn)
          continue;
        const exists = symbolTable.components.has(`service:${inj.name}`) || symbolTable.components.has(`factory:${inj.name}`) || symbolTable.components.has(`component:${inj.name}`);
        if (!exists) {
          diags.push({
            severity: node_1.DiagnosticSeverity.Warning,
            range: node_1.Range.create(node_1.Position.create(inj.location.line, inj.location.column), node_1.Position.create(inj.location.line, inj.location.column + inj.name.length)),
            message: `Injected service \`${inj.name}\` is not registered in any module.`,
            source: "angularjs-lsp"
          });
        }
      }
    }
  }
  return diags;
}
function recomputeAndPublishDiagnostics() {
  if (!symbolTable)
    return;
  const allUris = /* @__PURE__ */ new Set();
  for (const uri of symbolTable.templates.keys())
    allUris.add(uri);
  for (const result of jsResultsByUri.values())
    allUris.add(result.uri);
  for (const uri of allUris) {
    const diags = computeDiagnosticsForUri(uri);
    lastDiagnosticsByUri.set(uri, diags);
    connection.sendDiagnostics({ uri, diagnostics: diags });
  }
}
documents.onDidChangeContent(() => {
  recomputeAndPublishDiagnostics();
});
connection.onCompletion((params) => {
  if (!symbolTable || !isAngularJsProject)
    return [];
  const doc = documents.get(params.textDocument.uri);
  if (!doc)
    return [];
  if (!params.textDocument.uri.endsWith(".html"))
    return [];
  const tmpl = symbolTable.templates.get(params.textDocument.uri);
  if (!tmpl || !tmpl.controllerName)
    return [];
  const ctrlKey = `controller:${tmpl.controllerName}`;
  const comp = symbolTable.components.get(ctrlKey);
  if (!comp)
    return [];
  const items = [];
  const seen = /* @__PURE__ */ new Set();
  const addMember = (name, kind) => {
    if (seen.has(name))
      return;
    seen.add(name);
    const itemKind = kind === "function" ? node_1.CompletionItemKind.Function : kind === "object" ? node_1.CompletionItemKind.Module : node_1.CompletionItemKind.Variable;
    const m = (symbolTable.memberIndex.get(name) || [])[0];
    const typeTag = m ? `: ${m.type}` : "";
    items.push({
      label: name,
      kind: itemKind,
      detail: `${kind}${typeTag}`,
      documentation: `From ${tmpl.controllerName}`
    });
  };
  for (const m of comp.scopeMembers)
    addMember(m.name, m.kind);
  for (const [, other] of symbolTable.components) {
    if (other.kind === "controller" && other.name === tmpl.controllerName) {
      for (const m of other.scopeMembers)
        addMember(m.name, m.kind);
    }
  }
  return items;
});
documents.listen(connection);
connection.listen();
connection.console.info("[AngularJS LSP] Server started \u2014 waiting for initialization.");
